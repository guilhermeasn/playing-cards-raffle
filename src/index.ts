
/**
 * Suit (Naipes)
 * ♠: Spade (Espadas) - BLACK 
 * ♦: Diamond (Ouros) - RED 
 * ♣: Club (Paus) - BLACK 
 * ♥: Heart (Copas) - RED 
 */
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

console.log(raffle());
