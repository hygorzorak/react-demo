import { useState, type FormEvent } from 'react';
import {
    Box,
    Button,
    Input,
    VStack,
    Heading,
    Field,
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SessionEntry() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!userId || !token) {
            toast.error('Please fill in all fields');
            return;
        }

        localStorage.setItem('userId', userId);
        localStorage.setItem('token', token);

        setUserId('');
        setToken('');

        setTimeout(() => navigate('/users'));
    };

    return (
        <Box maxW="md" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="md" boxShadow="md">
            <Heading as="h2" size="lg" mb="5" textAlign="center">
                Inform Your User
            </Heading>

            <form onSubmit={handleSubmit}>
                <VStack gap="4">
                    <Field.Root>
                        <Field.Label>User ID</Field.Label>
                        <Input
                            type="text"
                            placeholder="Enter User ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Token</Field.Label>
                        <Input
                            type="text"
                            placeholder="Enter Token"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                        />
                    </Field.Root>

                    <Button
                        borderWidth="1px"
                        borderRadius="md"
                        boxShadow="sm"
                        _hover={{ boxShadow: "lg" }}
                        m={10}
                        colorScheme="blue"
                        type="submit"
                        width="full"
                    >
                        Submit
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};
