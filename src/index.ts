import { Enemy } from "./01-Factory/entities/interfaces/Enemy";
import { GoombaFactory } from "./01-Factory/implementations/factories/GoombaFactory";
import { EnemyFactory } from "./01-Factory/entities/interfaces/EnemyFactory";
import { RandomEnemyFactory } from "./01-Factory/implementations/factories/RandomEnemyFactory";
import { RandomDifficultEnemyFactory } from "./01-Factory/implementations/factories/RandomDifficultEnemyFactory";
import { AbstractFactory } from "./02-Abstract-Factory/entities/interfaces/AbstractFactory";
import { Item } from "./02-Abstract-Factory/entities/interfaces/Item";
import { GameboyItemsFactory } from "./02-Abstract-Factory/implementations/factories/GameboyItemsFactory";
import { NintendoSwitchItemsFactory } from "./02-Abstract-Factory/implementations/factories/NintendoSwitchItemsFactory";

console.log(`\n---------------------------------------
Welcome!
--------------------------------------- \n`);
console.log('********************************************************\n');

/**
 * 01 - FACTORY PATTERN
 */

runFactoryPattern('John', new GoombaFactory(), new RandomEnemyFactory(), new RandomDifficultEnemyFactory())

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

console.log('********************************************************\n');


/**
 * 02 - ABSTRACT FACTORY PATTERN
 */

runAbstractFactoryPattern('Doe', new GameboyItemsFactory(), new NintendoSwitchItemsFactory())

function runAbstractFactoryPattern(name: string, ...factories: AbstractFactory[]) {
  console.log('02 - ABSTRACT FACTORY PATTERN');
  console.log('\n');
  
  for (const factory of factories) {
    const roundItem: Item = factory.createRoundItem(name)
    const roundItemLogic: string /** Here 'newContext' could be any object*/ = roundItem.doItemLogic()
    console.log({roundItemLogic});

    const squareItem: Item = factory.createSquareItem(name)
    const squareItemLogic: string /** Here 'newContext' could be any object*/ = squareItem.doItemLogic()
    console.log({squareItemLogic});
  }
    
  console.log('\n');
}

console.log('********************************************************\n');