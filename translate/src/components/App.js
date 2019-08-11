import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = {
    langauge: ""
  };

  onLanguageChange = langauge => {
    this.setState({ langauge });
    //console.log(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a langauge:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("English")}
          />
          <i
            className="flag india"
            onClick={() => this.onLanguageChange("kannada")}
          />
        </div>
        <LanguageContext.Provider value={this.state.langauge}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
