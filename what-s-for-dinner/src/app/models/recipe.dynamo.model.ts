import { Recipe } from "./recipe.model";

export class RecipeDynamoModel {
    public recipeId!: string;
    public recipeSortKey!: string;
    public payload!: string;
}