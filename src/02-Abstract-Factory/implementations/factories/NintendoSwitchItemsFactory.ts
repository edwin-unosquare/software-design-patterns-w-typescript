import { ItemTypes } from "../../entities/enums/enums";
import { AbstractFactory } from "../../entities/interfaces/AbstractFactory";
import { Item } from "../../entities/interfaces/Item";
import { NintendoSwitchCircle } from "../items/NintendoSwitch/NSCircle";
import { NintendoSwitchSquare } from "../items/NintendoSwitch/NSSquare";

export class NintendoSwitchItemsFactory implements AbstractFactory {

  createSquareItem(name: string): Item {
    return new NintendoSwitchSquare(name)
  }

  createRoundItem(name: string): Item {
    return new NintendoSwitchCircle(name);
  }

  createItem(name: string, type: ItemTypes): Item {
    switch (type) {
      case ItemTypes.SQUARE:
        return new NintendoSwitchSquare(name);        
      case ItemTypes.CIRCLE:
        return new NintendoSwitchCircle(name);
    }
  }

}