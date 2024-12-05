import {
    Box,
    Heading,
    Text,
    Spinner,
    AlertTitle,
    Flex,
} from "@chakra-ui/react";

import { useQueryUserIds, useParallelUserDetails } from "@/models/user";
import { useNavigate } from "react-router-dom";
import UserAvatar from "@/components/UserAvatar";

export default function UserList() {
    const navigate = useNavigate();

    const {
        data: userIdList,
        isFetching: isUserIdsLoading,
        isError: isUserIdsError,
    } = useQueryUserIds();
    const userIds = userIdList?.user_ids || [];
    const { data, errors, isLoading } = useParallelUserDetails(userIds);

    if (isUserIdsLoading || isLoading) {
        return (
            <Box w="full" maxW="800px" textAlign="center" mx="auto">
                <Spinner size="xl" />
                <Text mt={4}>Loading user list...</Text>
            </Box>
        );
    }

    if (isUserIdsError || !userIdList?.user_ids?.length) {
        return (
            <Box w="full" maxW="800px" textAlign="center" mx="auto">
                <Text fontSize="xl">No user to show...</Text>
            </Box>
        );
    }

    return (
        <Box w="full" maxW="800px" mx="auto" my={5} p={8} borderWidth="1px" borderRadius="lg" boxShadow="sm">
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                User List
            </Heading>
            <Box>
                {userIds.map((userId) => (
                    <Box
                        key={userId}
                        py={4}
                        px={8}
                        my={4}
                        borderWidth="1px"
                        borderRadius="md"
                        boxShadow="sm"
                        _hover={{ boxShadow: "lg" }}
                        cursor="pointer"
                    >
                        {data[userId] ? (
                            <Flex onClick={() => navigate(`/users/${userId}`)}>
                                <UserAvatar user={data[userId]} />
                                <Flex direction="column" align="flex-start">
                                    <Heading as="h2" size="md">
                                        {data[userId]?.first_name} {data[userId]?.last_name}
                                    </Heading>
                                    <Text>Streak: {data[userId]?.stats.current_streak_in_days} days</Text>
                                    <Text>Total Sessions: {data[userId]?.stats.total_sessions_played}</Text>
                                </Flex>
                            </Flex>
                        ) : (
                            <Box>
                                <AlertTitle>Error loading user {userId}</AlertTitle>
                                <Text ml={2}>{JSON.stringify(errors[userId])}</Text>
                            </Box>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
