import React, { Component } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Dropdown, DropdownMenu } from "./StyledDropdown";

class DropdownOne extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <Dropdown>
        <button type="button" onClick={this.toggle}>
          {/* {this.state.visible ? "Show" : "hide"} */}
          {this.state.visible ? (
            <AiOutlineDown size={16} />
          ) : (
            <AiOutlineDown size={16} />
          )}
        </button>
        {this.state.visible && <DropdownMenu>Dropdown menu</DropdownMenu>}
      </Dropdown>
    );
  }
}

export default DropdownOne;
