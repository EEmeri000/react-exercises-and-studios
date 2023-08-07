import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ['Wash dishes', 'Feed pets', 'Do laundry', 'Take out trash'];

      return(
         <div class="chores">
            <h3 className = {classes.choresList}>Today's Chores</h3>
            <ul>
               <li className = {classes.choresItem}>{chores[0]}</li>
               <li className = {classes.choresItem}>{chores[1]}</li>
               <li className = {classes.choresItem}>{chores[2]}</li>
               <li className = {classes.choresItem}>{chores[3]}</li>
            </ul>
         </div>);
   }
}

export default ChoresList;