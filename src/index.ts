import { Enemy } from "./01-Factory/entities/Enemy";
import { GoombaFactory } from "./01-Factory/implementations/factories/GoombaFactory";
import { EnemyFactory } from "./01-Factory/entities/interfaces/EnemyFactory";
import { RandomEnemyFactory } from "./01-Factory/implementations/factories/RandomEnemyFactory";
import { RandomDifficultEnemyFactory } from "./01-Factory/implementations/factories/RandomDifficultEnemyFactory";

console.log(`\n Welcome!
--------------------------------------- \n`);

/**
 * 01 - FACTORY PATTERN
 */

function runFactoryPattern(name: string, ...factories: EnemyFactory[]) {
  console.log('01 - FACTORY PATTERN');
  console.log('\n');
  
  for (const factory of factories) {
    const enemy: Enemy = factory.createEnemy(name);
    const newContext: string /** Here 'newContext' could be any object*/ = enemy.updateLogic();
    console.log({newContext});
  }
    
  console.log('\n');
}

runFactoryPattern('John', new GoombaFactory(), new RandomEnemyFactory(), new RandomDifficultEnemyFactory())