import dayjs from "dayjs";
import toPlay from "./main";

const now = dayjs();
const fileName : string = `simulation_${now.format('YYYY-MM-DD_HH')}h${now.format('mm')}m${now.format('ss')}s.txt`;

const sleep = async (time: number = 100) : Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, time));
}

(async () => {

    for(let c = 0; c < 100; c++) {

        console.log(toPlay(fileName,  {
            chips: 50000,
            raffles: 200,
            points3to19: {
                chips: 200,
                multiplyUntil: 3
            }
        }));

        await sleep();

    }

})();
