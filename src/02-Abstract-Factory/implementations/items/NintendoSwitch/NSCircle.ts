import { Item } from "../../../entities/interfaces/Item";

export class NintendoSwitchCircle implements Item {

  constructor(private readonly name: string) {}

  doItemLogic(): string {
    return `${this.name} ${NintendoSwitchCircle.name}!`
  }

}