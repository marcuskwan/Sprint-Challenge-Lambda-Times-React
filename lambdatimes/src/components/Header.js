import React from "react";
import { HeaderWrapper, Date, Temp } from "../CSS/HeaderStyledComponents";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrapper>
      <Date>MARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderWrapper>
  );
};

export default Header;
