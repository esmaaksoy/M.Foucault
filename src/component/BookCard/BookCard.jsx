import { data } from "../../helper/data";
import BookStyle from "./BookCard.module.css";
const BookCard = () => {
  return (
    <main>
    <div className={BookStyle.container}>
      {data.map(({ image, name, id }) => (
        <div key={id} className={BookStyle.card}>
          <img className={BookStyle.image} src={image} alt={name} />
          <p className={BookStyle.name}>{name}</p>
        </div>
      ))}
    </div>
    </main>
  );
};
export default BookCard;
