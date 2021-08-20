import ReactImageMagnify from "react-image-magnify";
import { useTranslation } from "react-i18next";
import { BeerCharacteristicsItem } from "../../../shared/BeerCharacteristicsItem/ui/BeerCharacteristicsItemUI.jsx";
import "./style.css";

import beerPhoto from "./img/stella-beer.png";

import costIcon from "./img/money-bag.svg";
import tasteIcon from "./img/wine-tasting.svg";
import lookIcon from "./img/look.svg";
import SmellIcon from "./img/smell.svg";
import alcoholIcon from "./img/alcohol-content.svg";

export const BrieflyAboutBeerUI = ({ beerPageData }) => {
  const { t } = useTranslation();
  const { cost_grade, taste_grade, look_grade, smell_grade, alcohol_grade } = beerPageData;

  return (
    <>
      <div className="briefly_about_beer">
        <div className="briefly_about_beer_item white_bg_and_border_radius">
          <ReactImageMagnify
            className="briefly_about_beer_photo"
            enlargedImageContainerDimensions={{ width: "208%", height: "100%" }}
            {...{
              smallImage: {
                alt: "Stella beer",
                isFluidWidth: false,
                src: beerPhoto,
                width: 131,
                height: 528,
              },
              largeImage: {
                src: beerPhoto,
                width: 272,
                height: 1057,
              },
            }}
          />
        </div>

        <div className="briefly_about_beer_item white_bg_and_border_radius">
          <BeerCharacteristicsItem
            characteristicTitle={t("BeerCharacteristicsItem.titleCost")}
            characteristicTag="cost"
            characteristicIcon={costIcon}
            characteristicGrade={cost_grade}
          />
          <BeerCharacteristicsItem
            characteristicTitle={t("BeerCharacteristicsItem.titleTaste")}
            characteristicTag="taste"
            characteristicIcon={tasteIcon}
            characteristicGrade={taste_grade}
          />
          <BeerCharacteristicsItem
            characteristicTitle={t("BeerCharacteristicsItem.titleLook")}
            characteristicTag="look"
            characteristicIcon={lookIcon}
            characteristicGrade={look_grade}
          />
          <BeerCharacteristicsItem
            characteristicTitle={t("BeerCharacteristicsItem.titleSmell")}
            characteristicTag="smell"
            characteristicIcon={SmellIcon}
            characteristicGrade={smell_grade}
          />
          <BeerCharacteristicsItem
            characteristicTitle={t(
              "BeerCharacteristicsItem.titleAlcoholContent"
            )}
            characteristicTag="alcohol content"
            characteristicIcon={alcoholIcon}
            characteristicGrade={alcohol_grade}
          />
        </div>
      </div>
    </>
  );
};
