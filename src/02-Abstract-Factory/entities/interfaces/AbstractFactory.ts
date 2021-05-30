import { ItemTypes } from "../enums/enums";
import { Item } from "./Item";

export interface AbstractFactory {
  createSquareItem(name: string): Item;
  createRoundItem(name: string): Item;
  createItem(name: string, type: ItemTypes): Item;
}