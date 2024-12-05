import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSessionUser = () => {
    const navigate = useNavigate();

    const [sessionUser, setSessionUser] = useState({
        authUserId: '',
        authToken: '',
    });

    useEffect(() => {
        const authUserId = localStorage.getItem('userId') || import.meta.env.VITE_AUTH_USER_ID;
        const authToken = localStorage.getItem('token') || import.meta.env.VITE_AUTH_TOKEN;

        if (!authUserId || !authToken) {
            navigate("/");
        }

        setSessionUser({ authUserId, authToken });
    }, [navigate]);

    return sessionUser;
};