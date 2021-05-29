import { Enemy } from "../../entities/Enemy";
import { EnemyFactory } from "../../entities/interfaces/EnemyFactory";
import { RandomDifficultEnemy } from "../enemies/RandomDifficultEnemy";

export class RandomDifficultEnemyFactory implements EnemyFactory {
  createEnemy(name: string): Enemy {
    return new RandomDifficultEnemy(name)
  }
  
}