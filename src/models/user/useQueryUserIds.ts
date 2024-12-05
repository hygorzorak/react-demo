import { useQuery } from "@tanstack/react-query";

import { useSessionUser } from "@/models/session";
import { QueryKeys } from "@/models/keys";
import { fetchUserIds } from "@/models/user/fetchUserIds";

import type { UserIdList } from "@/types/user";

export const useQueryUserIds = () => {
    const { authUserId, authToken } = useSessionUser();

    const isEnabled = !!authUserId && !!authToken;

    return useQuery<UserIdList>({
        queryKey: [QueryKeys.UserIds, authUserId],
        queryFn: () => fetchUserIds(authUserId, authToken),
        enabled: isEnabled,
    });
};