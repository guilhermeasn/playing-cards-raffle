import { Bet } from "./main";

export const bets : Bet[] = [
    
    {
        chips: 50000,
        raffles: 200, 
        red: {
            chips: 200,
            multiplyUntil: 3
        },
        oneSpade: {
            chips: 200,
            multiplyUntil: 1
        },
        points3to19: {
            chips: 400,
            multiplyUntil: 2
        }
    },

    {
        chips: 50000,
        raffles: 200, 
        red: {
            chips: 200,
            multiplyUntil: 4
        },
        points3to19: {
            chips: 400,
            multiplyUntil: 0
        }
    },

    {
        chips: 50000,
        raffles: 500,
        points3to19: {
            chips: 200,
            multiplyUntil: 3
        }
    }
    
];
