import { useQueries } from "@tanstack/react-query";

import { useSessionUser } from "@/models/session";
import { QueryKeys } from "@/models/keys";
import { fetchUserDetails } from "@/models/user/fetchUserDetails";

import type { User } from "@/types/user";

export const useParallelUserDetails = (userIds: number[]) => {
    const { authUserId, authToken } = useSessionUser();

    const isEnabled = !!authUserId && !!authToken && !!userIds?.length;

    const queries = userIds?.map((userId) => ({
        queryKey: [QueryKeys.UserDetails, userId],
        queryFn: () => fetchUserDetails(authUserId, authToken, userId),
        enabled: isEnabled,
    }));

    const queryResults = useQueries<User[]>({
        queries,
    });

    const results = userIds?.reduce<{
        data: Record<number, User | null>;
        errors: Record<number, unknown>;
        isLoading: boolean;
    }>(
        (acc, userId, index) => {
            const query = queryResults[index];
            acc.data[userId] = query.data as User | null;
            acc.errors[userId] = query.error ?? null;
            acc.isLoading = acc.isLoading || query.isLoading;
            return acc;
        },
        { data: {}, errors: {}, isLoading: false }
    );

    return results;
};