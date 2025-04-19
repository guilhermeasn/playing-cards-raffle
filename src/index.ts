import dayjs from "dayjs";
import { bets } from "./bets";
import toPlay, { Bet } from "./main";

const sleep = async (time: number = 100) : Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, time));
}

const media = (array: number[]): number => {
    if (array.length === 0) return 0;
    const soma = array.reduce((acc, val) => acc + val, 0);
    return soma / array.length;
}

const now = dayjs();
const fileName : string = `simulation_${now.format('YYYY-MM-DD_HH')}h${now.format('mm')}m${now.format('ss')}s_${ Math.random().toString(36).substr(2, 9) }`;
const bet : Bet = bets[3];

toPlay(bet, fileName);

(async () => {

    const result : number[] = [];

    for(let c = 0; c < 100; c++) {

        result.push(toPlay(bet));

        // await sleep();

    }

    console.log(bet);
    console.log(result);
    console.log('Media: ', media(result));

})();
