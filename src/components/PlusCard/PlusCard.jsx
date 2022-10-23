import React, { useEffect, useState } from "react";
 import "./PlusCard.css"


 export default function PlusCard({ icon }) {
     const [category, setNewCategory] = useState(false);
     console.log(category)
 const [newCard, setNewCard] = useState("");


     return (
  <div className="addcard-category"  >
 <div className="add-category-icon" >
     <img src={icon} alt="category icon" onClick={() => setNewCategory(true)}></img>
 </div>
 {category &&
 <div className="popup" >
          <button className="close-btn" onClick={() => setNewCategory(false)}>Cancel</button>
     <p>Name your category...</p>
     <div className="input-and-btn">
     <input maxLength="15" type="text" placeholder="Name of the new category..." onChange={(event) => {
         setNewCard(event.target.value); 
       }}></input>
        <button type="submit" className="save-btn">Save</button></div>
 
  


 </div> }

 </div>


     );
 }