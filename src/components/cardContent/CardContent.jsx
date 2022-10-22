import "./cardContent.css";
import useQuery from "../../hooks/getQueryHook";
import { useSaveings } from "../contexts/savingContextx";
import { CardItem } from "../cardItem/CardItem";

export const CardContent = () => {
  const { detectedItem } = useSaveings();
  let query = useQuery();

  return (
    <div className="cardContent">
      {query.get("name") === "Meat" && (
        <div>
          {detectedItem.map((item) => {
            if (item.item === "cheeseburger") {
              return <CardItem item={item.item} />;
            }
          })}
        </div>
      )}

      {query.get("name") === "Fruits" && (
        <div>
          {detectedItem.map((item) => {
            if (item.item === "banana") {
              return <CardItem item={item.item} />;
            }
          })}
        </div>
      )}
    </div>
  );
};
