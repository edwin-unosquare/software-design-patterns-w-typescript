import { Enemy } from "../../entities/interfaces/Enemy";
import { EnemyFactory } from "../../entities/interfaces/EnemyFactory";
import { RandomEnemy } from "../enemies/RandomEnemy";

export class RandomEnemyFactory implements EnemyFactory {
  createEnemy(name: string): Enemy {
    return new RandomEnemy(name)
  }
  
}