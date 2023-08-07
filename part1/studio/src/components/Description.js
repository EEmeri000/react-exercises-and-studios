import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
   let authorLink = "https://feastinthyme.com/";
   let authorPhoto = "https://feastinthyme.com/wp-content/uploads/2017/03/avatar_7060_675_1013_c1-3.jpg";
   let authorName = "Kristen Roberts";
   return (
      <div className = {styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt = "Kristen Roberts" className={styles.authorImage} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Feast in Thyme</a> 
         </div>
      </div>
   );
}

class RecipeDescription extends React.Component {

   render() {
      return (
         <div> 
            <div>
               <h1>Maple-Bourbon Pumpkin Crème Brulée </h1>
               <p>This dessert recipe is decadent, perfect for fall without being cliché, not terribly difficult, and best of all, naturally gluten-free.</p>
            </div>
            <RecipeAuthor />
         </div>
      );
   }
}

export default RecipeDescription;