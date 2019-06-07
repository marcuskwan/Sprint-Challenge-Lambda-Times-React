import React from "react";
import { TopBarDiv } from "../CSS/TopBarStyledComponents";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span>
          <span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </TopBarDiv>
  );
};

export default TopBar;
