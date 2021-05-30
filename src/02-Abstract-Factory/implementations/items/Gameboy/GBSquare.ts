import { Item } from "../../../entities/interfaces/Item";

export class GameboySquare implements Item {

  constructor(private readonly name: string) {}

  doItemLogic(): string {
    return `${this.name} ${GameboySquare.name}!`
  }

}