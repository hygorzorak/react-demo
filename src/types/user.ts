import type { Skill } from "./skill";

export type UserIdList = {
    user_ids: number[];
};

export type User = {
    first_name: string;
    last_name: string;
    image: string;
    stats: {
        current_streak_in_days: number;
        skills: {
            math: Skill;
            reading: Skill;
            speaking: Skill;
            writing: Skill;
        };
        total_sessions_played: number;
    };
};

