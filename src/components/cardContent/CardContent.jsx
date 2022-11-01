/* written by Oliwia Olender */
import "./cardContent.css";
import useQuery from "../../hooks/getQueryHook";
import { useSaveings } from "../../contexts/savingContextx";
import { CardItem } from "../cardItem/CardItem";
import { CardForTest } from "../CardForTest/CardForTest";

export const CardContent = () => {
  const { detectedItem } = useSaveings();
  let query = useQuery();

  return (
    <div className="cardContent">
      <div className="cardContentTitle">{query.get("name")}</div>

      {query.get("name") === "Fruits" && (
        <div className="closeToExpireContainer">
          <p className="testt">Food items close to expiring</p>
          <CardForTest item="Pear" />
          <div className="divider"></div>
        </div>
      )}

      {query.get("name") === "Meat" && (
        <div>
          {detectedItem.map((item) => {
            if (item.item === "cheeseburger") {
              return <CardItem item={item.item} ide={item.id} key={item.id} />;
            }
          })}
        </div>
      )}

      {query.get("name") === "Fruits" && (
        <div>
          {detectedItem.map((item) => {
            if (item.item === "banana" || item.item === "pineapple, ananas") {
              return <CardItem item={item.item} ide={item.id} key={item.id} />;
            }
          })}
        </div>
      )}

      {query.get("name") === "Vegetables" && (
        <div>
          {detectedItem.map((item, index) => {
            if (item.item === "cucumber, cuke") {
              return <CardItem item={item.item} ide={item.id} key={index} />;
            }
          })}
        </div>
      )}
    </div>
  );
};
