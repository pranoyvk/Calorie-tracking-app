import { useEffect, useState } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import AppControls from './components/AppControls/AppControlsCounter';
import AppControlsInput from './components/AppControls/AppControlInputs';
import AppMealsList from './components/AppMealsList/AppMealsList';
import AppModal from './components/AppModal/AppModal';
import AppControlsPrice from './components/AppControls/AppControlsPrice';

function App() {

  const[meals,setMeals] = useState([]);
  const[mealName,setMealName] = useState("");
  const[calories,setCalories] = useState(0);
  const[price,setPrice] = useState(0);
  const[openModal,setOpenModal] = useState(false);

  const addMealHandler = () =>{
   const oldMeals = [...meals];

   var now = new Date(),
   date = [
       now.getFullYear(),
       '-',
       now.getMonth() + 1,
       '-',
       now.getDate(),
       ' / ',
       now.getHours(),
       ':',
       now.getMinutes(),
       ':',
       now.getSeconds()
     ].join('');

   const meal = {
    mealName,
    calories,
    price,
    date,
    id: Math.floor(Math.random()*1000),
   }

   const newMeals = [...oldMeals,meal];

   if(calories <= 0 || mealName == ""){
    setOpenModal(true);
   }
   else if(calories >= 2100){
      alert("Daily limit has been exceeded");
   }
   else{
    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));
   }

   setMealName("");
   setCalories(0);
  }

  const total = meals.map((meal)=> meal.calories)
  .reduce((acc,value)=> acc + +value,0);

  const priceTotal = meals.map((meal)=> meal.price)
  .reduce((account,value) => account+ +value,0)

  const deleteMealHandler = (id) =>{
    const oldMeals = [...meals];
    console.log(oldMeals);
    const newMeals = oldMeals.filter((meal) => meal.id !== id);

    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));
  }

  useEffect(()=>{
    const localStorageMeals = JSON.parse(localStorage.getItem("meals"));
    setMeals(localStorageMeals);
  },[setMeals]);


  return (
    <>
    <div className="App">
     <AppBar />
     { openModal ? <AppModal setOpenModal={setOpenModal} /> : "" }
     <AppControls total={total}/>
     <AppControlsPrice priceTotal={priceTotal}/>
     <AppControlsInput addMealHandler={addMealHandler} mealName={mealName} calories={calories} price={price} setPrice ={setPrice} setCalories={setCalories} setMealName={setMealName}/>
    </div>
    <div className='meals_container'>
      <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler}/>
    </div>
    </>
  );
}

export default App;
