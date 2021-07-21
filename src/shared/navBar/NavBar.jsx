import { useState } from "react";
import { NavBarUi } from "./ui/NavBarUi";

export const NavBar = () => {
  const [styleForBlackBg, setStyleForBlackBg] = useState(null);
  const [styleForNavBar, setStyleForNavBar] = useState(null);
  const [styleForArrow, setStyleForArrow] = useState(null);

  const IsItMobile = (width) => (width > 425 ? false : true);

  const switchingNavigation = () => {
    const windowWidth = window.innerWidth;
    const navigationWidth = IsItMobile(windowWidth) ? windowWidth : 270;
    const arrowWidth = IsItMobile(windowWidth) ? windowWidth - 30 : 270;

    if (!styleForArrow) {
      setStyleForNavBar({ width: navigationWidth + "px" });
      setStyleForArrow({
        left: arrowWidth + "px",
        transform: "rotate(180deg)",
      });
      setStyleForBlackBg({ zIndex: 1, opacity: 1 });
      return;
    } else {
      setStyleForNavBar(false);
      setStyleForArrow(false);
      setStyleForBlackBg(false);
    }
  };

  return (
    <NavBarUi
      styleForNavBar={styleForNavBar}
      styleForArrow={styleForArrow}
      styleForBlackBg={styleForBlackBg}
      switchingNavigation={switchingNavigation}
    />
  );
};
