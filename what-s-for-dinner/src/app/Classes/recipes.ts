export class RECIPES {
    name!: string;
    image!: string;
    description!: string;
    ingredient!: string[];
    instruction!: string;
    time!: number;

   public static getMultipleRandomRecipes(recipes: RECIPES[]) {
        const arr = recipes;
        const multipleRandomRecipes = [];

        for (let i = 0; i < 7; i++) {
            const index = Math.floor(Math.random() * arr.length);
            multipleRandomRecipes.push(arr.splice(index, 1)[0]);
        }

        return multipleRandomRecipes;
    }
    //this is displaying more than 7 recipes

}