import { useParams, useNavigate } from "react-router-dom";
import { Flex, Box, Text, VStack, Spinner, Button } from "@chakra-ui/react";

import SkillProgress from "@/components/SkillProgress";

import { useQueryUserDetails } from "@/models/user";
import UserAvatar from "@/components/UserAvatar";

export default function UserDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: user, isFetching } = useQueryUserDetails(Number(id));

    if (isFetching) {
        return (
            <Box w="full" maxW="800px" textAlign="center" mx="auto">
                <Spinner size="xl" />
                <Text mt={4}>Loading details...</Text>
            </Box>
        );
    }

    if (!user) {
        return (
            <Box w="full" maxW="800px" textAlign="center" mx="auto">
                <Text fontSize="xl">User not found</Text>
            </Box>
        );
    }

    return (
        <>
            <Button
                borderWidth="1px"
                borderRadius="md"
                boxShadow="sm"
                _hover={{ boxShadow: "lg" }}
                m={10}
                colorScheme="blue"
                onClick={() => navigate("/users")}
            >
                Back to the list
            </Button>
            <Flex
                direction="column"
                align="center"
                w="full"
                px={6}
                py={10}
                mx="auto"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="sm"
                maxW="600px"

            >
                <UserAvatar user={user} />
                <Text fontSize="2xl" fontWeight="bold" mb={2}>
                    {user.first_name} {user.last_name}
                </Text>
                <Flex justify="space-around" w="full" maxW="400px" mb={6}>
                    <Box textAlign="center">
                        <Text fontSize="lg" fontWeight="bold">
                            {user.stats.current_streak_in_days}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                            Current Streak
                        </Text>
                    </Box>
                    <Box textAlign="center">
                        <Text fontSize="lg" fontWeight="bold">
                            {user.stats.total_sessions_played}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                            Total Sessions
                        </Text>
                    </Box>
                </Flex>

                <VStack align="stretch" w="full">
                    <SkillProgress skills={user.stats.skills} />
                </VStack>
            </Flex>
        </>
    );
}