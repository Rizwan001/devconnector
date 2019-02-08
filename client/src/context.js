import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Rizwan Khan",
        email: "rizwan@localhost.com",
        phone: "555-555-555"
      },
      {
        id: 2,
        name: "Zain Khan",
        email: "zain@localhost.com",
        phone: "555-555-555"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
