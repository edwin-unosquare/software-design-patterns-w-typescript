import { Enemy } from "../../entities/Enemy";
import { EnemyFactory } from "../../entities/interfaces/EnemyFactory";
import { Goomba } from "../enemies/Goomba";

export class GoombaFactory implements EnemyFactory {
  createEnemy(name: string): Enemy {
    return new Goomba(name)
  }
  
}