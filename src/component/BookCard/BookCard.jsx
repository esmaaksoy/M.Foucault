import { useState } from "react";
import { data } from "../../helper/data";
import BookStyle from "./BookCard.module.css";
const BookCard = () => {
  const [clear, setClear]= useState(data)
  return (
    <main>
    <div className={BookStyle.container}>
    <h1>{clear.length} Books of Michel Foucault</h1>
      <div className={BookStyle.cards}>
      {clear.map(({ image, name, id }) => (
        <div key={id} className={BookStyle.card}>
          <img className={BookStyle.image} src={image} alt={name} />
          <p className={BookStyle.name}>{name}</p>
        </div>
      ))}
        <button onClick={()=>setClear([])}>Clear All</button>
      </div>
    
      </div>
      
    </main>
  );
};
export default BookCard;
