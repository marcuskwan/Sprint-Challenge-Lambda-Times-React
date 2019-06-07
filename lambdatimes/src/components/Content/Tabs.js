import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

class Tabs extends React.Component {
  state = {
    selectedTab: ""
  };
  render() {
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props, 
            what is selectedTabHandler, selectedTab??*/}
          {this.props.tabs.map(tabString => (
            <>
              <Tab
                tab={tabString}
                selectTabHandler={this.props.selectTabHandler}
                selectedTab={this.props.selectedTab}
              />
            </>
          ))}
        </div>
      </div>
    );
  }
}

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tabs;
