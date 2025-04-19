import { addLine, openFile } from "./file";

/**
 * ## Suit (Naipes)
 * - ♠: Spade (Espadas) - BLACK 
 * - ♦: Diamond (Ouros) - RED 
 * - ♣: Club (Paus) - BLACK 
 * - ♥: Heart (Copas) - RED 
 */
type Suit = '♠' | '♦' | '♣' | '♥';

type BetOption = (
    | 'red'
    | 'black'
    | 'oneSpade'
    | 'oneDiamond'
    | 'oneClub'
    | 'oneHeart'
    | 'points3to19'
    | 'points20to30'
);

type BetChips = {
    chips: number;
    multiplyUntil: number;
}

type Bet = {
    chips: number;
    raffles: number;
} & Partial<Record<BetOption, BetChips>>;

const award : Record<BetOption, number> = {
    red: 1.9,
    black: 1.9,
    oneSpade: 2.06,
    oneDiamond: 2.06,
    oneClub: 2.06,
    oneHeart: 2.06,
    points3to19: 2,
    points20to30: 1.81,
}

const cards = [
    '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', 'T♠', 'J♠', 'Q♠', 'K♠', 'A♠',
    '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', 'T♦', 'J♦', 'Q♦', 'K♦', 'A♦',
    '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', 'T♣', 'J♣', 'Q♣', 'K♣', 'A♣',
    '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', 'T♥', 'J♥', 'Q♥', 'K♥', 'A♥'
];

const random = (min: number = 0, max: number = 51): number => (
    Math.floor(Math.random() * (max - min + 1) + min)
);

const raffle = (amount: number = 3) : string[] => {

    const drawn: number[] = [];

    while (drawn.length < amount) {
        const num : number = random();
        if(!drawn.includes(num)) drawn.push(num);
    }

    return drawn.map(num => cards[num]);

}

const color = (cards: string[]) : 'BLACK' | 'RED' | 'NEUTRAL' => {

    let black = 0;
    let red = 0;

    cards.forEach(card => {
        card.charAt(1) === '♠' || card.charAt(1) === '♣' ? black++ : red++;
    });

    return black > red ? 'BLACK' : red > black ? 'RED' : 'NEUTRAL';

};

const amount = (cards: string[]) : Record<Suit, number> => {

    const suit : Record<Suit, number> = {
        '♠': 0, '♦': 0, '♣': 0, '♥': 0
    }

    cards.forEach(card => {
        suit[card.charAt(1) as Suit]++;
    });

    return suit;

}

const points = (cards: string[]) : number => {

    let sum : number = 0;

    cards.forEach(card => {
        switch(card.charAt(0)) {
            case 'A': sum += 1; break;
            case '2': sum += 2; break;
            case '3': sum += 3; break;
            case '4': sum += 4; break;
            case '5': sum += 5; break;
            case '6': sum += 6; break;
            case '7': sum += 7; break;
            case '8': sum += 8; break;
            case '9': sum += 9; break;
            default: sum += 10; break;
        }
    });

    return sum;

}

export const toPlay = (fileName: string, bet : Bet) : number => {

    let chips = bet.chips;

    const file = openFile(fileName);
    addLine(file, `Initial Chips: ${chips}`);

    let wrong : Record<BetOption, number> = {
        red: 0,
        black: 0,
        oneSpade: 0,
        oneDiamond: 0,
        oneClub: 0,
        oneHeart: 0,
        points3to19: 0,
        points20to30: 0
    };

    for(let i = 0; i < bet.raffles; i++) {
        
        const r = raffle();
        const c = color(r);
        const a = amount(r);
        const p = points(r);

        addLine(file, `\nRaffle ${ i + 1 }: ${ JSON.stringify(r) }, color: ${ c }, amount: ${ JSON.stringify(a) }, points: ${ p }`);

        if(bet.red) {

            const b = bet.red.chips * (wrong.red + 1)
            chips -= b;

            if(chips < 0) break;
            
            if(c === 'RED') {
                chips += b * award.red;
                wrong.red = 0;
            } else {
                if(bet.red.multiplyUntil > wrong.red) wrong.red++;
                else wrong.red = 0;
            }

            addLine(file, `RED BET: ${ b } chips, ${ c === 'RED' ? 'WON' : 'LOST' }, total ${ chips }`);

        }

    }

    addLine(file, `\nFinal Chips: ${ chips }`);

    return chips;

}

export default toPlay;
