import { Enemy } from "../../entities/Enemy";

export class RandomEnemy implements Enemy {

  constructor(private readonly name: string) {}

  updateLogic(): string {
    return `Update in Context by ${RandomEnemy.name} ${this.name}!`;
  }

}