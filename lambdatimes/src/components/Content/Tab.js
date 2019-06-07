import React from "react";

class Tab extends React.Component {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  state = {};
  render() {
    return (
      <div
        className={
          this.props.tab === this.props.selectedTab ? "tab active-tab" : "tab"
        }
        onClick={
          () => {
            this.props.selectTabHandler(this.props.tab);
          }
          /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        }
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }
}

// Make sure you include PropTypes on your props.

export default Tab;
