import axios from "axios";

import { BASE_API_URL } from "../api";

import type { User } from "@/types/user";

export const fetchUserDetails = async (authUserId: string, authToken: string, userId: number): Promise<User> => {
    const response = await axios.get<User>(`${BASE_API_URL}/users/${userId}`, {
        params: {
            authentication_user_id: authUserId,
            authentication_token: authToken,
        },
    });
    return response.data;
};