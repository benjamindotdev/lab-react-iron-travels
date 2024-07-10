//import { useState } from "react";
import { useState } from "react";
import data from "../assets/travel-plans.json";
import TravelListItem from "./TravelPlanCard";

const TravelList = () => {
  const [travels, setTravels] = useState(data);
  const [favourite, setFavourite] = useState([]);
  const handleDelete = (id) => {
    setTravels(travels.filter((item) => item.id !== id));
  };
  const handleFavourite = (id) => {
    const travel = travels.find((item) => item.id === id);
    favourite.includes(travel)
      ? setFavourite(favourite.filter((item) => item.id !== id))
      : setFavourite([...favourite, travel]);
  };
  return (
    <div>
      {travels.map((item) => (
        <TravelListItem
          key={item.id}
          handleDelete={handleDelete}
          handleFavourite={handleFavourite}
          {...item}
        />
      ))}
      {favourite.length > 0 && (
        <div>
          <h2 className="card__heading">Favourite Travel Plans</h2>
          {favourite.map((item) => (
            <TravelListItem
              key={item.id}
              handleDelete={handleDelete}
              handleFavourite={handleFavourite}
              {...item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TravelList;
