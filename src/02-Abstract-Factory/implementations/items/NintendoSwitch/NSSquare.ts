import { Item } from "../../../entities/interfaces/Item";

export class NintendoSwitchSquare implements Item {

  constructor(private readonly name: string) {}

  doItemLogic(): string {
    return `${this.name} ${NintendoSwitchSquare.name}!`
  }

}