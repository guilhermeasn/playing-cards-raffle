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
    },

    {
        chips: 50000,
        raffles: 200,
        points3to19: {
            chips: 200,
            multiplyUntil: 4
        }
    },

    {
        chips: 50000,
        raffles: 200,
        oneClub: {
            chips: 200,
            multiplyUntil: 0
        },
        oneDiamond: {
            chips: 200,
            multiplyUntil: 0
        },
        oneHeart: {
            chips: 200,
            multiplyUntil: 0
        },
        oneSpade: {
            chips: 200,
            multiplyUntil: 0
        }
    }, {
        chips: 50000,
        raffles: 200,
        oneClub: {
            chips: 200,
            multiplyUntil: 0
        },
        oneDiamond: {
            chips: 200,
            multiplyUntil: 0
        }
    }, {
        chips: 50000,
        raffles: 200,
        black: {
            chips: 200,
            multiplyUntil: 0
        },
        oneClub: {
            chips: 200,
            multiplyUntil: 0
        },
        oneSpade: {
            chips: 200,
            multiplyUntil: 0
        }
    }
    
];
