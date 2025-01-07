import React, { useState } from 'react';
import SideBar from '../components/sidebar.jsx';
import '../styles/menu_page.css';
import { CreateMenu, DeleteMenuItem } from '../components/menu_list.jsx';

const MenuPage = () => {
    const [breakfastValue, setBreakfastValue] = useState("");
    const [breakfastItems, setBreakfastItems] = useState([]);
    const [lunchValue, setLunchValue] = useState("");
    const [lunchItems, setLunchItems] = useState([]);
    const [dinnerValue, setDinnerValue] = useState("");
    const [dinnerItems, setDinnerItems] = useState([]);
    const [snackValue, setSnackValue] = useState("");
    const [snackItems, setSnackItems] = useState([]);
    const [waterValue, setWaterValue] = useState("");
    const [waterItems, setWaterItems] = useState([]);

return(
    <div> 
      <SideBar/>
            
    <form action="menu_page.html" method="post">
      
        <h1>Today's menu</h1>
        <h2>Add your meals:</h2>

    <div>
        <p>Breakfast</p>
        <div className="menu-body">
            <input className="menu-input" id="B" type="text" placeholder="What did you eat?"
            value={breakfastValue} onChange={(e) => setBreakfastValue(e.target.value)}/>
            <img  id="addB" src="/icons+img/plus-circle.svg"  
            onClick={() => CreateMenu(breakfastItems, setBreakfastItems, breakfastValue, setBreakfastValue, "Please enter what you ate for breakfast")}/>
        </div>
        <ul id="BreakfastItems" className="BreakfastItems">
                        {breakfastItems.map((item, index) => (
                            <li key={index}>{item} 
                            <img id="delB" src="../icons+img/trash3.svg"
                            onClick={() => DeleteMenuItem(index, breakfastItems, setBreakfastItems)}></img>
                            </li>
                            
                        ))}
        </ul>
    </div>

    <div>
        <p>Lunch</p>
        <div className="menu-body">
            <input className="menu-input" id="L" type="text" placeholder="What did you eat?"
            value={lunchValue} onChange={(e) => setLunchValue(e.target.value)}/>
            <img  id="addL" src="/icons+img/plus-circle.svg"  
             onClick={() => CreateMenu(lunchItems, setLunchItems, lunchValue, setLunchValue, "Please enter what you ate for lunch")}/>
        </div>
        <ul id="LunchItems" className="LunchItems">
        {lunchItems.map((item, index) => (
                            <li key={index}>{item} 
                            <img id="delL" src="../icons+img/trash3.svg"
                            onClick={() => DeleteMenuItem(index, lunchItems, setLunchItems)}></img>
                            </li>
                        ))}
        </ul>
    </div>

    <div>
        <p>Dinner</p>
        <div className="menu-body">
            <input className="menu-input" id="D" type="text" placeholder="What did you eat?"
            value={dinnerValue} onChange={(e) => setDinnerValue(e.target.value)}/>
            <img  id="addD" src="/icons+img/plus-circle.svg"  
            onClick={() => CreateMenu(dinnerItems, setDinnerItems, dinnerValue, setDinnerValue, "Please enter what you ate for dinner")}/>
        </div>
        <ul id="DinnerItems" className="DinnerItems">
        {dinnerItems.map((item, index) => (
                            <li key={index}>{item} 
                            <img id="delD" src="../icons+img/trash3.svg"
                            onClick={() => DeleteMenuItem(index, dinnerItems, setDinnerItems)}></img>
                            </li>
                        ))}
        </ul>
    </div>

    <div>
        <p>Snacks</p>
        <div className="menu-body">
            <input className="menu-input" id="S" type="text" placeholder="What did you eat?"
            value={snackValue} onChange={(e) => setSnackValue(e.target.value)}/>
            <img  id="addS" src="/icons+img/plus-circle.svg" 
             onClick={() => CreateMenu(snackItems, setSnackItems, snackValue, setSnackValue, "Please enter what snacks you ate today")}/>
        </div>
        <ul id="SnackItems" className="SnackItems">
        {snackItems.map((item, index) => (
                            <li key={index}>{item}
                            <img id="delS" src="../icons+img/trash3.svg"
                            onClick={() => DeleteMenuItem(index, snackItems, setSnackItems)}></img>
                            </li>
                        ))}
        </ul>
    </div>

    <div>
        <p>Water</p>
        <div className="menu-body">
            <input className="menu-input" id="W" type="text" placeholder="How much water did you drink today?"
            value={waterValue} onChange={(e) => setWaterValue(e.target.value)}/>
            <img  id="addW" src="/icons+img/plus-circle.svg"  
            onClick={() => CreateMenu(waterItems, setWaterItems, waterValue, setWaterValue,"Please enter what water you drank today")}/>
        </div>
        <ul id="WaterItems" className="WaterItems">
        {waterItems.map((item, index) => (
                            <li key={index}>{item}
                            <img id="delW" src="../icons+img/trash3.svg"
                            onClick={() => DeleteMenuItem(index, waterrItems, setWaterItems)}></img>
                            </li>
                        ))}
        </ul>
    </div>
    </form>
</div>
);
};
  
const saveMealData = async () => {
    const mealData = {
        date: new Date().toISOString().split('T')[0], // Current date
        breakfast: breakfastItems,
        lunch: lunchItems,
        dinner: dinnerItems,
        snacks: snackItems,
        water: waterItems,
    };

    try {
        const response = await fetch('/api/save_meal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mealData),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
        } else {
            alert('Error saving meal data');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error saving meal data');
    }
};
   

  export default MenuPage;