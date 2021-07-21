import "./style.css";
import characteristicIcon from "./img/look.svg" 

export const BeerCharacteristicsItem = ({characteristicTitle,characteristicGrade}) => {
  return (
    <div className="beer_characteristics_item">
      <p>{characteristicTitle}</p>
      <img
        className="beer_characteristics_item_icon"
        src={characteristicIcon}
        alt="beer_characteristic"
      />
      <div className="beer_characteristics_item_scale">
        <div className={"beer_characteristics_item_scale_item " + characteristicTitle}  />
        <div className={"beer_characteristics_item_scale_item " + characteristicTitle}  />
        <div className={"beer_characteristics_item_scale_item " + characteristicTitle}  />
        <div className={"beer_characteristics_item_scale_item " + characteristicTitle}  />
        <div className={"beer_characteristics_item_scale_item " + characteristicTitle}  />
      </div>
    </div>
  );
};
