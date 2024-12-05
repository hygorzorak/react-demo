import axios from "axios";

import { BASE_API_URL } from "../api";

import type { UserIdList } from "@/types/user";

export const fetchUserIds = async (authUserId: string, authToken: string): Promise<UserIdList> => {
    const response = await axios.get<UserIdList>(`${BASE_API_URL}/users`, {
        params: {
            authentication_user_id: authUserId,
            authentication_token: authToken,
        },
    });
    return response.data;
};
