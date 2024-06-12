import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,  Location, remaining} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

          var numbers = /^[0-9]+$/;
          var newPresupuesto;
          
          if(event.target.value.match(numbers)) /*verifica que solo sean numeros*/
          { 
            
             if(event.target.value<0)
                newPresupuesto=0;
             else if(event.target.value < (budget-remaining))
                //newPresupuesto = totalExpenses;
                newPresupuesto = budget-remaining;
             else if(event.target.value>2000)
                 newPresupuesto=2000;        
             else if(event.target.value>remaining)
                      newPresupuesto=remaining; 
             else
                 newPresupuesto = event.target.value
                        //setNewBudget(newPresupuesto);
                                  
              /*<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>*/
              setNewBudget(newPresupuesto);
            }    
    }
    return (
        <div className='alert alert-secondary'>
           <span>Budget: {Location}{budget}</span>
           <input type="number" step="10" min="0" max="2000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
