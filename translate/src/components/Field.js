import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  //static contextType = LanguageContext;
  render() {
    //const text = this.context === "English" ? "name" : "naama";
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {value => (value === "English" ? "name" : "naama")}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
