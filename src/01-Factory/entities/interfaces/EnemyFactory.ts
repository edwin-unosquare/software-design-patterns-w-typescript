import { Enemy } from "../Enemy";

export interface EnemyFactory {
  createEnemy(name: string): Enemy;
}