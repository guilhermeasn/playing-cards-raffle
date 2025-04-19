import { Bet } from "./main";

export const bets : Bet[] = [

    {
        chips: 50000,
        raffles: 20, 
        red: {
            chips: 2000,
            multiplyUntil: 0
        }
    },
    
    {
        chips: 50000,
        raffles: 30, 
        red: {
            chips: 200,
            multiplyUntil: 0
        },
        points3to19: {
            chips: 800,
            multiplyUntil: 0
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
        raffles: 1000,
        points3to19: {
            chips: 200,
            multiplyUntil: 10
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
            multiplyUntil: 1
        },
        oneClub: {
            chips: 200,
            multiplyUntil: 1
        },
        oneSpade: {
            chips: 200,
            multiplyUntil: 1
        }
    }, {
        chips: 50000,
        raffles: 200,
        black: {
            chips: 200,
            multiplyUntil: 1
        },
        oneClub: {
            chips: 200,
            multiplyUntil: 1
        },
        oneSpade: {
            chips: 200,
            multiplyUntil: 1
        }
    },
    {
        chips: 50000,
        raffles: 200,
        oneHeart: {
            chips: 400,
            multiplyUntil: 4
        },
        oneSpade: {
            chips: 400,
            multiplyUntil: 4
        },
        oneClub: {
            chips: 400,
            multiplyUntil: 4
        },
        oneDiamond: {
            chips: 400,
            multiplyUntil: 4
        }
    },

    {
        chips: 50000,
        raffles: 50,
        red: {
            chips: 2000,
            multiplyUntil: 10
        },
    }
    
];
