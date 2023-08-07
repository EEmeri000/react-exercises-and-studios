import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["1 15oz can pumpkin puree", "5 egg yolks", "1/2 cup white sugar", "1/2 cup brown sugar", "1 1/2 teaspoons vanilla extract", "2 cups cream", "1 cup milk", "1/2 teaspoon salt", "1/2 teaspoon ground cinnamon", "1/4 teaspoon ground allspice", "1/4 teaspoon ground cloves", "1/4 teaspoon ground ginger", "1/4 teaspoon ground nutmeg", "1/4 teaspoon mace (optional)", "2 tablespoons maple syrup", "2 tablespoons bourbon","6-8 tablespoons raw sugar (for topping)"];
    return(
<div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
         <li>{ingredients[5]}</li>
         <li>{ingredients[6]}</li>
         <li>{ingredients[7]}</li>
         <li>{ingredients[8]}</li>
         <li>{ingredients[9]}</li>
         <li>{ingredients[10]}</li>
         <li>{ingredients[11]}</li>
         <li>{ingredients[12]}</li>
         <li>{ingredients[13]}</li>
         <li>{ingredients[14]}</li>
         <li>{ingredients[15]}</li>
         <li>{ingredients[16]}</li>
      </ul>
   </div>
    );
}