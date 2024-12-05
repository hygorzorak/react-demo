import { useQuery } from "@tanstack/react-query";

import { useSessionUser } from "@/models/session";
import { QueryKeys } from "@/models/keys";
import { fetchUserDetails } from "@/models/user/fetchUserDetails";

import type { User } from "@/types/user";

export const useQueryUserDetails = (userId: number) => {
    const { authUserId, authToken } = useSessionUser();

    const isEnabled = !!authUserId && !!authToken && !!userId;

    return useQuery<User>({
        queryKey: [QueryKeys.UserDetails, userId],
        queryFn: () => fetchUserDetails(authUserId, authToken, userId),
        enabled: isEnabled,
    });
};