export class Recipe {
    public name!: string;
    public image!: string;
    public description!: string;
    public ingredients!: string[];
    public instructions!: string;
    public time!: string; 
    public tags!: string[];
    public favorites!: boolean;  

    public static getMultipleRandomRecipes(recipes: Recipe[]) {
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