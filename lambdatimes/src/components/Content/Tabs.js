import React from "react";
import Tab from "./Tab";
class Tabs extends React.Component {
  state = {
    selectedTab: ""
  };
  selectTabHandler = tabString => {
    this.setState({
      selectedTab: tabString
    });
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
                selectTabHandler={this.selectTabHandler}
                selectedTab={this.state.selectedTab}
              />
            </>
          ))}
        </div>
      </div>
    );
  }
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
