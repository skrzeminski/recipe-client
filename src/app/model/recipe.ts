import {Ingredient} from './ingredient';

export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor() {
    this.name = '';
    this.description = '';
    this.imagePath = '';
    this.ingredients = [];
  }
}
