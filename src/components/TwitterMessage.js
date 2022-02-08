import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleInput = (event) =>{
    this.setState(
      {
        message: event.target.value
      })
  }

  // handleCharCount = () =>{
     
  // } 

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={this.handleInput}
          value={this.state.message}
        />
        <h3>You have entered {this.props.maxChars - this.state.message.length}characters</h3>
      </div>
    );
  }
}

export default TwitterMessage;
