import { ItemTypes } from "../../entities/enums/enums";
import { AbstractFactory } from "../../entities/interfaces/AbstractFactory";
import { Item } from "../../entities/interfaces/Item";
import { GameboyCircle } from "../items/Gameboy/GBCircle";
import { GameboySquare } from "../items/Gameboy/GBSquare";

export class GameboyItemsFactory implements AbstractFactory {

  createSquareItem(name: string): Item {
    return new GameboySquare(name)
  }

  createRoundItem(name: string): Item {
    return new GameboyCircle(name);
  }

  createItem(name: string, type: ItemTypes): Item {
    switch (type) {
      case ItemTypes.SQUARE:
        return new GameboySquare(name);        
      case ItemTypes.CIRCLE:
        return new GameboySquare(name);
    }
  }

}