import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
// import {InputNumberModule} from 'primeng/inputnumber';

@Component({
  selector: 'recipe-manager',
  templateUrl: './recipe-manager.component.html',
  styleUrls: ['./recipe-manager.component.css']
})

export class RecipeManagerComponent implements OnInit  {

  public recipeName: string = '';
  public recipeImage: string = '';
  public recipeDescription: string = '';
  public recipeIngredients: string = '';
  public recipeInstructions: string = '';
  public recipeTime: string = '';
  public recipeTags: string = '';
  public recipeFavorites: boolean = false;
  public deleteRecipeName: string = '';

  ngOnInit(): void { 
  }

  async initialLoad(): Promise<any> { // creating Local Storage
    let recipes_Storage =[
    {
      "name": "Bisquick Quiche",
    "image": "https://c.recipeland.com/images/r/21350/e57374730c4318e1027b_1024.jpg",
    "description": "Make a quick dinner with this scrumptious quiche made with cheese, broccoli and mushrooms.",
    "ingredients": ["black pepper", "salt", "eggs", "biscuit baking mix", "milk", "onions", "cheese", "fillings of your choice(example broccoli, mushrooms, etc)"],
    "instructions": "Heat oven to 400℉ (200℃).\n\nGrease 10 inch pie plate or 8 inch square.\n\nSprinkle fillings, onions and cheese in plate.\n\nBeat remaining ingredients until smooth and pour into plate.\n\nBake 35 to 40 minutes or until a knife inserted halfway between edge and center comes out clean.\n\nLet stand 5 minutes before serving.",
    "time": "60",
    "tags": ["vegetarian"],
    "favorites": true
  },
  {
    "name": "Chicken Cheese Stuffed Poblano Peppers",
    "image": "https://c.recipeland.com/images/r/20998/7c8e10c77a2077b9826f_1024.jpg",
    "description": "Classic stuffed peppers with a Mexican twist. Chicken, cheese and mushrooms makes this a great change with a bit of spicy flare.",
    "ingredients": ["poblano peppers", "onions", "garlic", "chicken meat", "italian plum tomatoes", "salt", "mushrooms", "montery jack cheese", "canola oil", "olive oil"],
    "instructions": "Preheat the oven to 350℉ (180℃).\n\nUsing gloves to protect your hands (or make certain to wash well afterwards and keep your hands away from your face).\n\nWash and then using a sharp paring knife make a slit down the side of each pepper from top to bottom.\n\nCarefully cut away the seeds and membrane inside each pepper and rinse with water. Set aside.\n\nUsing a large non-stick skillet heat 2 teaspoons of oil over of medium high heat.\n\nAdd the chopped onions and garlic and cook stirring frequently until the onions are translucent and starting to turn golden.\n\nAdd the diced chicken (or leftover chicken meat) and cook (if the chicken is raw). Add the tomatoes and mushrooms.\n\nSpray a 2 quart casserole dish with cooking spray.\n\nUsing olive oil, oil the outside of the poblano peppers and place them cut side up in the casserole.\n\nDivide the chicken mixture and stuff into each pepper through the slit. Stuff the cheese into the chicken mixture of each pepper.\n\nCover and bake for 40 to 45 minutes. Remove the cover for the last 10 minutes of cooking.\n\nServe over a bed of mexican or saffron scented rice.",
    "time": "60",
    "favorites": false
  },
  {
    "name": "Lemon Baked Dover Sole",
    "image": "https://c.recipeland.com/images/r/15648/f2d5ea8dc4294e6f19b4_1024.jpg",
    "description": "A very simple and healthy way to prepare the prized Dover sole that highlights its mild, buttery sweet flavor.",
    "ingredients": ["sole fillets", "butter", "lemon juice", "all-purpose flour", "parsley leaves", "black pepper", "paprika", "salt"],
    "instructions": "Rinse fillets thoroughly in cold water; pat dry with paper towels, season each side lightly with salt and set aside.\n\nCombine melted butter (or olive oil) and lemon juice in a small bowl. Combine flour, chopped parsley and pepper in a shallow container.\n\nDip fillets in butter/lemon juice mixture and dredge in flour mixture.\n\nTransfer fillets to a nonstick baking sheet, and drizzle any remaining butter/lemon mixture over fish. Sprinkle fillets with paprika.\n\nBake at 375℉ (190℃). for 15 to 20 minutes or until fish is golden brown and flakes easily when tested with a fork.",
    "time": "20",
    "tags": ["quick"],
    "favorites": false
  },
  {
    "name": "Secret Jagerschnitzel - German Hunter Schnitzel",
    "image": "https://c.recipeland.com/images/r/8459/792db937e05345004686_1024.jpg",
    "description": "Pork or veal schnitzel with a mushroom sauce topped with bacon. Perfect for Oktoberfest or any time you are hankering for German fare.",
    "ingredients": ["all-purpose flour", "salt", "garlic powder", "black pepper", "bread crumbs", "eggs", "vegetable oil", "pork loin chops", "onions", "mushrooms", "beef stock", "red wine", "light cream (half&half)", "bacon", "italian parsley"],
    "instructions": "Pre-heat the oven to 300℉ (150℃) for keeping schnitzel warm whilst you prepare any accompanying sides.\n\nHeat a skillet over medium heat and begin cooking the bacon until crispy.\nMeanwhile prepare the dredging for the schnitzel.\n\nIn a small bowl whisk together the flour, salt, garlic powder and black pepper. Distribute on a plate and set aside.\n\nIn the small bowl, whisk together the bread crumbs, salt, black pepper and garlic powder. Distribute on a plate.\n\nOne secret to a good snitchzel is to use fine bread crumbs. This helps allow the coating to puff up and away instead of becoming glued to the meat. If your bread crumbs are coarse then toss them into a food processor and whiz until they are fine. Not too fine though or you'll end up with flour.\n\nIn a shallow pie disk or pie plate whisk together the eggs along with a tablespoon of oil. Another secret to help create a crisp coating that won't adhere itself completely to the chop. Set this aside as well.\nYour bacon should be ready. Remove to paper toweling to drain. Reserve two tablespoons of fat in the pan.\n\nAdd the onions and sauté until beginning to become translucent, about 5 minutes.\n\nAdd the sliced mushrooms and continue to saute.\n\nMeanwhile, trim the pork chops of fat if desired.\n\nPlace each chop between two pieces of plastic wrap and pound with a meat mallet or even a heavy pot until they are an even ¼ of an inch (7mm) thick. Season with salt and pepper.\n\nYour mushrooms should be ready for the next step.\n\nAdd two tablespoons of flour to the skillet and mix, cooking for 1 to 2 minutes to make a roux.\n\nWhile stirring constantly add the red wine and the beef stock. Reduce heat to medium-low and stir frequently at a low simmer to reduce and thicken, about 5 minutes.\n\nDip each pork chop, thoroughly coating, first in the seasoned flour. Using tongs dip in the egg wash and then into the bread crumbs. Set on a wire rack.\nThe secret to obtaining the best coating is to use an ample amount of oil for frying and ensure that it is well heated to very hot, just before smoking. The hot oil will help ensure that steam will prevent the coating from absorbing a lot of oil and becoming greasy.\n\nHeat a cup of cooking oil in saucier pan (with high sides and big enough for frying) or a dutch oven.\n\nOnce the oil is hot carefully lay in each prepared schnitzel, cooking one at a time. Shake the pot and keep the schnitzel moving (mind the hot oil) about two minutes or until golden brown.\n\nTurn the schnitzel over to brown the other side, about one minute. Remove, drain and place on a wire rack over a sheet pan in the warm oven to keep warm while you cook the rest of the schnitzels.\nAdd half and half (10%) cream to the sauce and combine.\nRemove the sauce from heat and add a small pat of butter to give it some added sheen if desired along with a grinding of fresh black pepper.\n\nTo serve:\n\nPlace a schnitzel on each plate. Divide the mushroom sauce among the plates, spooning over each of the schnitzels.\n\nTop with the crispy bacon and parsley for color.\nServing with spatzel for an authentic touch or egg noodles work equally as well.",
    "time": "40",
    "favorites": false
  },
  {
    "name": "Great Grilled Flounder",
    "image": "https://c.recipeland.com/images/r/21348/95484f1936ff5f81ffcf_1024.jpg",
    "description": "This is an excellent recipe for grilling flounder. The cajan seasoning is very good. I followed the recipe but I didn't have worchestershire sauce. I would use this recipe again.",
    "ingredients": ["flounder fish fillets", "olive oil", "lemon juice", "salt", "worcestershire sauce", "cajun seasoning"],
    "instructions": "Arrange fish on a well-oiled grill.\n\nCombine remaining ingredients and baste fish.\n\nGrill, turning and basting occasionally, for 10 minutes per inch of thickness or until fish is flaky and no longer translucent in the center.",
    "time": "25",
    "tags":["quick", "gluten free"],
    "favorites": false
  },
  {
    "name": "Beef Stuffed Shells",
    "image": "https://c.recipeland.com/images/r/21440/e7fe89f3fd5417d79694_1024.jpg",
    "description": "Beef stuffed inside large pasta shells topped with gooey cheese then baked to perfection. Make-ahead and it's freezer friendly, meat stuffed shells without ricotta.",
    "ingredients": ["ground beef", "onions", "garlic", "mozzarella cheese", "bread crumbs", "eggs", "salt and black pepper", "parsley leaves", "oregano", "asta shells", "spaghetti sauce", "Parmesan cheese"],
    "instructions": "Heat a skillet over medium heat.\n\nAdd the mince (ground beef), onion and garlic.\n\nCook until the beef is browned and onions are softened and beginning to turn translucent.\n\nDrain any accumulated fat and cool.\n\nCook shells in boiling water according to package directions (about 10 minutes), drain and rinse with cool water.\n\nIn a bowl, mix the meat mixture with mozzarella cheese, bread crumbs, egg and seasonings.\n\nLine the bottom of a baking dish with about ¼ of the spaghetti sauce.\n\nStuff the shells with the meat mixture and place in dish on top of sauce.\nPour remaining sauce over the stuffed shells and sprinkle with the grated Parmesan cheese.\nCover with foil and bake at 375℉ (190℃) F for 20 to 25 minutes.",
    "time": "90",
    "favorites": false
  },
  {
    "name": "Steak Strips and Onions",
    "image": "https://c.recipeland.com/images/r/21362/92b4d9e1cc40e65187e1_1024.jpg",
    "description": "Beef steak strips simmered in a richly flavored sauce. This dish comes together rather quickly, and is so good!",
    "ingredients": ["beef", "all-purpose flour", "salt", "black pepper", "paprika", "dry mustard", "butter", "garlic", "onions", "beef stock", "ketchup", "worcestershire sauce", "sour cream", "chives"],
    "instructions": "Trim excess fat from meat. Cut meat into thin strips.\n\nCombine flour with salt, pepper, paprika, and mustard. Toss meat with seasoned flour.\n\nMelt ⅓ of the butter in a large heavy skillet. Add garlic; sauté until golden. Remove; set aside.\n\nMelt ⅓ more butter in the same skillet. Sauté the onions for 5 to 6 minutes. Remove; set aside.\n\nHeat remaining butter in the same large skillet. Sauté meat strips until browned; add the beef stock, onions, and garlic. Stir to dissolve browned bits in the bottom of the skillet.\n\nSimmer, uncovered, 10 to 15 minutes, until meat is tender and the mixture is thickened, stirring occasionally. Add tomato ketchup or paste, Worcestershire sauce and sour cream. Heat gently. Serve over egg noodles or rice.\nSprinkle top with chives or parsley and a healthy dose of fresh ground black pepper, if desired.",
    "time": "40",
    "favorites": false
  },
  {
    "name": "Spinach Ricotta Stuffed Chicken Breasts with Lemon White Wine Sauce",
    "image": "https://c.recipeland.com/images/r/21454/3a3ff668328f5781feb1_1024.jpg",
    "description": "Cheesy juicy stuffed chicken breasts filled with bacon, ricotta and swiss cheese, pan fried until golden and served with a lemony white wine sauce.",
    "ingredients": ["chicken breast", "salt and black pepper", "vegetable oil", "spinach", "ricotta cheese", "swiss cheese", "bacon", "white wine", "chicken broth", "dijon mustard", "lemon juice", "cornstarch"],
    "instructions": "To make the stuffing:\nIn a medium bowl, combine the swiss and ricotta cheese, chopped spinach and bacon. Mix well, season with salt and pepper and set aside.\n\nTo make the sauce:\n\nAdd the wine and stock to the small saucepan and place over high heat. Bring to a boil and reduce until it reaches a sauce like consistency.\n\nIf you are having trouble reaching a sauce-like consistency add the cornstarch disolved in water to help create a thicker sauce.\n\nWhisk in the lemon juice, mustard and season with salt. Set aside.\nTo make the chicken:\nPound each of the chicken breasts between two layers of plastic wrap to about ¼ of and inch thick.\n\nPlace about ¼ of the prepared stuffing along the center of each breast. Fold the two edges to the center and then fold the bottom rolling forward to form a tight bundle. Secure with toothpicks.\n\nYou may find it easier to keep the stuffing inside the chicken by tying it with butchers string.\n\nSeason each breast with salt and pepper.\n\nHeat the vegetable oil in a large non-stick skillet over medium heat to medium high heat. Make sure the pan is well preheated.\n\nLay the breasts into the pan (lay away from you to prevent splashing).\n\nBrown the chicken breasts evenly on all sides. This will take about two minutes per side.\n\nReduce heat to low, cover and cook about 5 minutes until the chicken is just cooked through. If you have an instant read thermometer the internal temperature should reach 160 to 165 degrees F.\n\nTransfer to a plate and cover with foil and allow to rest for 5 minutes. The internal temperature will continue to rise to 165 degrees F.\n\nMeanwhile, add the sauce to the skillet, heat and scrape up all the brown bits left in the skillet. Use a wooden spoon to avoid scratching the non-stick pan.\nTo serve:\nSlice the chicken into medallions, arrange on four plates. Spoon the sauce over the sliced chicken, garnish as desired and serve immediately with steamed veggies.\n\nThis is a great dish to make to impress company. The breasts can be stuffed in advance and held in the refrigerator until you're ready to cook them.",
    "time": "40",
    "tags":["gluten free"],
    "favorites": false
  },
  {
    "name": "Original Durkee Green Bean Casserole",
    "image": "https://c.recipeland.com/images/r/2176/3a47f3b2ec16fd417d2b_1024.jpg",
    "description": "The easy to make, classic green bean casserole with french fried onions.",
    "ingredients": ["green beans", "milk", "cream of mushroom soup", "black pepper", "french fried onions"],
    "instructions": "Preheat oven to 350℉ (180℃).\n\nIn medium bowl, combine beans, milk, soup, pepper and ½ can onions.\n\nPour into 1½ quart casserole.\n\nBake, uncovered, at 350℉ (180℃) F for 30 minutes or until heated through.\n\nTop with remaining onions; bake uncovered 5 minutes or until onions are golden brown.",
    "time": "60",
    "tags":["gluten free", "vegetarian"],
    "favorites": false
  },
  {
    "name": "Moosewood Vegetarian Chili",
    "image": "https://c.recipeland.com/images/r/21357/de6c6c3fe11f5543e79d_1024.jpg",
    "description": "I've made this one for decades, and it is the one I keep going back to. More than one meat-lover has mistaken the bulgur for ground beef.",
    "ingredients": ["red kidney beans", "water", "salt", "tomato juice", "cracked wheat (bulgur)", "olive oil", "garlic cloves", "onions", "carrots", "celery", "basil", "chili powder", "cumin", "salt and black pepper", "cayenne pepper", "green bell peppers", "tomatoes", "lemon juice", "tomato paste", "red wine", "cheese", "parsley leaves"],
    "instructions": "Put kidney beans in a saucepan and cover them with 6 cups of water. Soak 3 to 4 hours. Add extra water and salt. Cook until tender (about 1 hour). Watch the water level, and add more if necessary.\n\nHeat tomato juice to a boil. Pour over raw bulgar. Cover and let stand at least 15 minutes. (It will be crunchy, so it can absorb more later).\n\nSauté onions and garlic in olive oil. Add carrots, celery and spices.\n\nWhen vegetables are almost done, add peppers. Cook until tender.\n\nCombine beans, bulgar, sautéd vegetables, tomatoes, lemon juice, tomato paste, and wine and heat together gently, either in kettle over double boiler, or covered in a moderate oven.\n\nServe topped with cheese and parsley.",
    "time": "75",
    "tags":["vegetarian"],
    "favorites": false
  },
  {
    "name": "Crustless Tuna Quiche",
    "image": "https://c.recipeland.com/images/r/21460/868db2f272196a767469_1024.jpg",
    "description": "An upscale low-carb, gluten-free version of an easy tuna casserole. Whip together an easy crustless tuna quiche with just cheese, eggs and milk.",
    "ingredients": ["tuna", "swiss cheese", "onions", "all-purpose flour", "eggs", "egg whites", "milk", "salt", "red pepper flakes"],
    "instructions": "Heat oven to 350℉ (180℃).\n\nSpray a 9-inch (23 cm) pie plate, with non-stick cooking spray.\n\nIn a bowl, toss together the tuna, swiss cheese, onion, and flour; spread evenly in pie plate.\n\nBeat the eggs and egg whites slightly in a small bowl with a fork; then beat in remaining ingredients.\n\nPour the egg mixture over the tuna mixture.\n\nBake the quiche, uncovered, for 35 to 40 minutes or until knife inserted in center comes out clean.\n\nLet stand 10 minutes before cutting.",
    "time": "55",
    "tags":["gluten free"],
    "favorites": false
  },
  {
    "name": "Chicken Breasts Stuffed with Spinach and Provolone",
    "image": "https://c.recipeland.com/images/r/21478/46cd53ac5febaec270f6_1024.jpg",
    "description": "Stuffed chicken breast with spinach and cheese. Just one of our best baked chicken breast recipes. Stuffing is easy with the butterfly technique used in the recipe.",
    "ingredients": ["chicken breast", "scallions", "spring or green onions", "eggs", "spinach", "black pepper", "bread crumbs", "provolone cheese", "lemon zest", "lemon juice", "olive oil"],
    "instructions": "The chicken is quite easy to stuff using a butterfly cut stuffing technique. Just cut a slit down the side compared to other recipes that try to roll and toothpick in the stuffing and it turns out every bit as delicious.\n\nPreheat oven to 425℉ (220℃) F.\n\nPrepare a baking pan (we prefer using glass) by spraying with cooking spray.\n\nStuffing\nIn a small bowl prepare the stuffing by mixing the bread crumbs, spinach, scallions lemon zest (rind) and the egg.\n\nTopping\nIn another small bowl mix the juice of a lemon, olive oil, and black pepper together.\n\nSet aside.\n\nButterfly\nButterfly each chicken breast (cut down the center), being careful not to slice completely through each breast.\n\nStuff\nPlace one slice of provolone inside each open breast.\n\nDivide the stuffing between each chicken breast.\n\nFold the chicken breast back together, gently manipulating the cheese and stuffing to remain inside.\n\nPlace all 4 stuffed chicken breasts into the baking dish .\n\nWhisk together the topping to ensure it is well mixed and drizzle over the top of the chicken breasts evenly.\n\nBake chicken\nPosition the baking dish on the center rack of the oven and bake for 40 minutes.\n\nServe with a green salad.\n\nChicken breast dinner for two\nIt's very easy to halve this recipe to make two servings. Use 2 chicken breasts, two scallions 1/2 cup of spinach and two slices of cheese and reduce the baking time to 30 minutes.\n\nJuicy chicken breasts\nFor a juicer chicken breast, instead of timing use check for doneness by using a thermometer. Cook the breasts until the internal temperatures of the chicken at the thickest center part of the stuffed chicken breast reaches 160℉ (71℃) F (the temperature will continue to rise as the chicken rests).\n\nRemove from the oven and cover with foil, allowing the chicken to rest in the baking dish for 5 minutes (the temperature will continue to rise as the chicken rests).\n\nUsing an inexpensive remote food thermometer such as this one makes it easy and foolproof to achieve juicy results every time!\n\nThe result will be stuffed chicken breast juicy-licious.",
    "time": "50",
    "favorites": false
  },
  {
    "name": "Chinese Beef Stew",
    "image": "https://c.recipeland.com/images/r/21452/c48324d3e4c6d45e4a3f_1024.jpg",
    "description": "Chunks of beef slowly braised in an authentic Chinese manner. Nearly any tough cut of beef can be made magically tender and flavorful with this technique.",
    "ingredients": ["beef brisket", "peanut oil", "hoisin sauce", "shaoxing wine", "soy sauce", "garlic", "star anise", "sichuan peppercorns", "chinese five spice powder", "sugar", "water", "daikon (chinese icicle radish)"],
    "instructions": "Tough beef is most flavorful, but you must simmer it gently for several hours to soften the sinewy muscle.\n\nSlow braising also encourages an exchange of flavors between the meat and the tangy sauce, enhancing both.\n\nChinese radish adds just the right bite, much as turnips would in a Western stew.\n\nIn effect, this is Chinese beef stew.\n\nGame meats or goat meat may be substituted for the beef for a delicious and unusual variation.\n\nOxtails can also be braised in this manner or even veal shanks.\n\nAlmost any cut of meat or organ that requires extensive cooking does well if braised.\n\nThe flavor-packed sauce keeps the meat flavorful throughout.\n\nTurnips or carrots may be substituted for the Chinese radish, and chestnuts have a strong, sweet taste that holds up well to braising.\n\nMake a diagonal slice, roll daikon ¼ turn and slice again.\n\nContinue rolling and cutting until done.\n\nThe preferred cut is brisket of beef, a boneless piece of tough meat from the underside of the steer, because of its rich, gelatinous texture when cooked.\n\nIt is sold in Chinese meat markets as Chinese stew beef.\n\nAny tough beef cut can be used, such as boneless chuck and bottom round.\n\nTrim away the outer layers of fat.\n\nCut the meat into 1½ inch strips. Cut the strips into cubes.\n\nBrown the meat on all sides in a wok over a high flame in 3 tablespoons of oil, Set it aside.\nAdd the remaining sauce ingredients. Bring them to a boil.\n\nAdd the beef to the sauce, reduce the heat to a simmer, cover the wok, and braise the beef for 2 hours. After 1½ hours, add the roll-cut radish.\n\nCook for 30 minutes more, until both the beef and radish are tender.\n\nServe the stew immediately.",
    "time": "180",
    "tags":["gluten free"],
    "favorites": false
  },
  {
    "name": "Chicken French",
    "image": "https://c.recipeland.com/images/r/548/c4c0e8244ea4a57423de_1024.jpg",
    "description": "Turned out very well. I seasoned the chicken on both sides with salt and pepper before dipping in the flour and egg. The thin sauce added a nice tang. I also added a teaspoon of cornstarch blended in water to the sauce and cooked for about one minute to thicken up the sauce a bit.",
    "ingredients": ["chicken breasts", "olive oil", "all-purpose flour", "eggs", "water", "butter", "lemons", "chicken bouillon"],
    "instructions": "Cut the chicken into tenders (about a ½ wide strip) and pound them out. They cook quicker this way. A meat mallet or side of a cleaver will do this job.\n\nPour the oil into a fry pan and add 1 to 2 tablespoon of butter into a large fryer and melt together. Med to Med High heat. The egg should bubble on contact.\n\nDip the meat into the flour covering both sides. Using a fork dredge the meat through the egg wash covering both sides.\n\nPlace chicken into the fryer and fry until golden brown on both sides.\n\nWhen brown remove from pan onto plate. (try not to get your hands wet as the flour becomes messy).\n\nSauce:\nInto a pan add 1 to 1½ cups of sherry (or white wine). Add the remaining butter and the juice of two lemon strained.\n\nI use two lemons cutting 2 to 3 thin slices from the center to use as garnish and the rest gets juiced through a strainer.\n\nAdd chicken stock to this (1 tablespoon chicken stock base and ½ cup of water) to make it richer.\n\nArrange chicken into baking dish and pour over the sauce. Place lemon on to top of the chicken (as a garnish) and cover with foil.\n\nPlace into oven at 225 to 250 degrees F for 15 to 30 minutes (this is to keep it warm).",
    "time": "50",
    "favorites": false
  },
  {
    "name": "Baked Lemon Chicken with Mushroom Sauce",
    "image": "https://c.recipeland.com/images/r/8307/df6b4c89e5d4273566df_1024.jpg",
    "description": "Juicy, tender and tasty chicken n' mushrooms. An easy weeknight meal that's simple to prepare using economical ingredients.",
    "ingredients": ["chicken breast", "olive oil", "lemon, butter", "mushrooms", "chicken broth", "all-purpose flour", "parsley leaves", "salt and black pepper"],
    "instructions": "Preheat oven to 400℉ (200℃).\n\nPlace the olive oil in an 8 by 8 inch (20 by 20cm) glass baking dish .\n\nSeason both sides of the chicken breasts with salt and pepper.\nPlace the chicken breasts in the dish, coating each side with oil.\n\nAlternatively brown the chicken breasts over medium-high heat in a skillet before baking. This will develop more flavor and leave a fond in the skillet to help add more flavor to the sauce.\n\nSqueeze the juice of ½ lemon over the chicken breasts.\nSlice the rest of the lemon and place a lemon slice on top of each chicken piece.\n\nBake in the preheated oven for 30 to 40 minutes until cooked through and the juices run clear.\n\nIf you pan-seared the breasts the cooking time will be reduced to 10 to 20 minutes.\n\nIn a large skillet, melt the butter or margarine; add the sliced mushrooms.\n\nSauté until the mushrooms are brown and have exuded their juices, about 6 minutes.\n\nSprinkle with the flour and blend.\nAdd the chicken broth, stirring to make a medium thick sauce.\n\nAllow to reduce, adjusting with a little more broth to make a creamy sauce.\n\nAdd fresh parsley at the last minute.\n\nTaste and adjust seasoning with salt and pepper.\n\nSpoon the sauce over the lemon baked chicken breasts and serve.",
    "time": "55",
    "favorites": false
  }
    ];

    localStorage.setItem('Recipes', JSON.stringify(recipes_Storage));
    
  }

  async deleteExistingRecipe(): Promise<any> { // deletes the existing recipe

    if (!this.deleteRecipeName || this.deleteRecipeName === '') {
      alert('Please type Recipe Name to delete');
      return;
    }

    let existingRecipes = await this.getRecipes();
    
    let recipesToKeep = existingRecipes.filter(x => x.name.toLowerCase() !== this.deleteRecipeName.toLowerCase());
    
    if (existingRecipes.length === recipesToKeep.length)
    {
      alert('Nothing to delete. That recipe doesn\'t exist.');
      return;
    }
    
    localStorage.setItem('Recipes', JSON.stringify(recipesToKeep));
  }


  async addRecipe(): Promise<any> { // adds new recipe

    let existingRecipes = await this.getRecipes();
    
    let recipeToAdd = new Recipe();

    if (!this.recipeTags || !this.recipeName || !this.recipeImage || !this.recipeDescription || !this.recipeInstructions || !this.recipeTime) 
    {
      alert('Please type recipe information leaving information in blank is not allowed' );
      return;
    } 
    
    if (!this.recipeIngredients.includes(',')) 
    {
      alert('Please use comma to separate ingredients');
      return;
    }

    if (this.recipeTags.trim().split(' ').length > 1 && !this.recipeTags.includes(',')) 
    {
      alert('Please use comma to separate tags');
      return;
    }
    
    recipeToAdd.name = this.recipeName;
    recipeToAdd.image = this.recipeImage;
    recipeToAdd.description = this.recipeDescription;
    recipeToAdd.ingredients = this.recipeIngredients.split(',').map(x => x.trim());
    recipeToAdd.instructions = this.recipeInstructions;
    recipeToAdd.time = this.recipeTime;
    recipeToAdd.tags = this.recipeTags.split(',').map(x => x.trim());
    recipeToAdd.favorites = this.recipeFavorites;

    existingRecipes.push(recipeToAdd);
    localStorage.setItem('Recipes', JSON.stringify(existingRecipes));
  }

  async getRecipes(): Promise<Recipe[]> { // get latest recipe

    let retrievedRecipes = localStorage.getItem('Recipes') as string; 
    
   return JSON.parse(retrievedRecipes);

  }
  
}


