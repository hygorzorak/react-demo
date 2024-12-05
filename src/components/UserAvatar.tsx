import { useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import type { User } from "@/types/user";

export default function UserAvatar({ user }: { user: User }) {
    const [imageError, setImageError] = useState(false);

    return (
        <Box
            borderRadius="full"
            boxSize="80px"
            bg="gray.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            fontWeight="bold"
            fontSize="xl"
            color="gray.700"
            mx={4}
        >
            {!imageError && user?.image ? (
                <Image
                    src={`data:image/jpeg;base64,${user.image}`}
                    alt={`${user.first_name} ${user.last_name}`}
                    onError={() => setImageError(true)}
                    boxSize="100%"
                />
            ) : (
                <Text>
                    {`${user?.first_name?.[0] || ""}${user?.last_name?.[0] || ""}`}
                </Text>
            )}
        </Box>
    );
};
