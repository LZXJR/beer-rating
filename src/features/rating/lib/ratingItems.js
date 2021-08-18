import { RatingItemUI } from "../../../shared/ratingItem/ui/RatingItemUI";
import { Loading } from "../../../shared/download/ui/Loading";

export const ratingItems = (ratingItemsObject) => {
  return ratingItemsObject
    ? ratingItemsObject.map((ratingItem, id) => (
        <RatingItemUI
          key={id}
          place={id+1}
          name={ratingItem.name}
          color={ratingItem.color}
          filtration={ratingItem.filtration}
          fortress={ratingItem.fortress}
          grade={ratingItem.grade}
          id={ratingItem.id}
        />
      ))
    : <Loading/>;
};


