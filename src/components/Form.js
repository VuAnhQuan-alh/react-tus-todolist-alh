import React from 'react';

class Form extends React.Component {
  inVal = {
    todo: ""
  };
  state = this.inVal;
  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.inVal);
  }

  render() {
    const { todo } = this.state;
    return (
      <form action="" onSubmit={this.handleOnSubmit}>
        <input type="text"
          autoComplete="off"
          name="todo"
          id="todo"
          value={todo}
          onChange={this.handleInput}
        />
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default Form;