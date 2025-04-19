import { evolve } from "./evolution";
import { addLine, openFile } from "./file";

(async () => {

  const finalPopulation = await evolve(15, 40, 10);

  const stream = openFile('evolution');

  console.log("\n🌟 Estratégias finais:");

  addLine(stream, JSON.stringify(finalPopulation, null, 2));
  console.log(JSON.stringify(finalPopulation, null, 2));

})();
