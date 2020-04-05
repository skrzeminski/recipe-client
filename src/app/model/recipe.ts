import {Ingredient} from './ingredient';

export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingrediends: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingrediends: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingrediends = ingrediends;
  }
}
