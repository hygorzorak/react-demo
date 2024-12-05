import { Skill } from "@/types/skill";
import { Flex, Box, Text } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";

type SkillProgressProps = {
    skills: {
        [key: string]: Skill;
    };
};

export default function SkillProgress({ skills }: SkillProgressProps) {
    return (
        <Flex direction="column" align="center" w="full" p={6}>
            {Object.entries(skills).map(([skillName, skill]) => {
                const percentage = (skill.current / skill.max) * 100;

                return (
                    <Box key={skillName} w="full" maxW="400px" mb={4}>
                        <Text mb={1} fontSize="sm" fontWeight="bold">
                            {skillName}
                        </Text>
                        <ProgressBar
                            completed={Math.round(percentage)}
                            bgColor="#4A90E2"
                            baseBgColor="#d6d6d6"
                            labelColor="#000"
                            labelSize="12px"
                            height="20px"
                            borderRadius="5px"
                        />
                    </Box>
                );
            })}
        </Flex>
    );
}