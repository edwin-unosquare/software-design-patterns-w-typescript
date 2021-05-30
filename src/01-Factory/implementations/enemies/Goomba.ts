import { Enemy } from "../../entities/interfaces/Enemy";

export class Goomba implements Enemy {

  constructor(private readonly name: string) {}

  updateLogic(): string {
    return `Update in Context by ${Goomba.name} ${this.name}!`;
  }

}