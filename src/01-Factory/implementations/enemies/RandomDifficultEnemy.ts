import { Enemy } from "../../entities/Enemy";

export class RandomDifficultEnemy implements Enemy {

  constructor(private readonly name: string) {}

  updateLogic(): string {
    return `Update in Context by ${RandomDifficultEnemy.name} ${this.name}!`;
  }

}