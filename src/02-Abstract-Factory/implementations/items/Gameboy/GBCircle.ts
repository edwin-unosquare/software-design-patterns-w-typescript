import { Item } from "../../../entities/interfaces/Item";

export class GameboyCircle implements Item {

  constructor(private readonly name: string) {}

  doItemLogic(): string {
    return `${this.name} ${GameboyCircle.name}!`
  }

}