import { data } from "../../helper/data";
import BookStyle from "./BookCard.module.css";
const BookCard = () => {
  return (
    <main>
    <div className={BookStyle.container}>
      {data.map(({ image, name, id }) => (
        <div key={id} className={BookStyle.card}>
          <img src={image} alt="" />
          <p className={BookStyle.name}>{name}</p>
        </div>
      ))}
    </div>
    </main>
  );
};
export default BookCard;
