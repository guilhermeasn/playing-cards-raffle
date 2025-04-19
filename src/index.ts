import dayjs from "dayjs";
import toPlay from "./main";

const now = dayjs();
const fileName : string = `simulation_${now.format('YYYY-MM-DD_HH')}h${now.format('mm')}m${now.format('ss')}s.txt`;

toPlay(fileName, {
    chips: 30000,
    raffles: 1000,
    
});
