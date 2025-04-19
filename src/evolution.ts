import { cloneDeep } from "lodash"; // ou fazer na mão
import { Bet, toPlay } from "./main";

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const multipleOf = (value: number, base: number) => Math.floor(value / base) * base;

const generateRandomBet = (): Bet => {
  const bet: Bet = {
    chips: 50000,
    raffles: 200,
  };

  const keys = ["red", "black", "points3to19", "oneClub", "oneDiamond", "oneSpade", "oneHeart"];
  const numProps = randomInt(1, 3);

  for (let i = 0; i < numProps; i++) {
    const key = keys[randomInt(0, keys.length - 1)];
    bet[key] = {
      chips: multipleOf(randomInt(200, 3000), 200),
      multiplyUntil: randomInt(0, 10)
    };
  }

  return bet;
};

const mutateBet = (bet: Bet): Bet => {
  const mutated = cloneDeep(bet);
  const keys = Object.keys(bet).filter(k => typeof bet[k] === "object");

  if (keys.length === 0) return generateRandomBet();

  const key = keys[randomInt(0, keys.length - 1)];
  if (mutated[key]) {
    mutated[key].chips = multipleOf(mutated[key].chips + randomInt(-200, 200), 200);
    mutated[key].chips = Math.max(mutated[key].chips, 200);

    mutated[key].multiplyUntil = Math.max(mutated[key].multiplyUntil + randomInt(-1, 1), 0);
  }

  return mutated;
};

export const evolve = async (generations = 10, populationSize = 30, survivors = 10) => {
  let population: Bet[] = [];

  // Geração inicial
  for (let i = 0; i < populationSize; i++) {
    population.push(generateRandomBet());
  }

  for (let gen = 0; gen < generations; gen++) {
    console.log(`\n🧬 Geração ${gen + 1}`);

    const scores: { bet: Bet; score: number }[] = [];

    for (const bet of population) {
      const media = Array.from({ length: 20 }, () => toPlay(bet)).reduce((acc, x) => acc + x, 0) / 20;
      scores.push({ bet, score: media });
    }

    scores.sort((a, b) => b.score - a.score);
    const best = scores.slice(0, survivors);

    console.log("Melhor média:", best[0].score);

    population = [];

    // Mantém os melhores
    for (const { bet } of best) {
      population.push(bet);
    }

    // Mutação para preencher nova população
    while (population.length < populationSize) {
      const parent = best[randomInt(0, best.length - 1)].bet;
      const child = mutateBet(parent);
      population.push(child);
    }
  }

  return population;
};
