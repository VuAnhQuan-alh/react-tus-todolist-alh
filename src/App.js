import { Component } from 'react';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = {
    data: [
      { todo: "cooking" },
      { todo: "watching movies" },
      { todo: "developer" },
      { todo: "reading books" },
    ]
  };
  handleSubmit = newVal => {
    this.setState({
      data: [ ...this.state.data, newVal ]
    })
  };
  handleRemove = index => {
    const { data } = this.state;
    this.setState({
      data: data.filter((item, idx) => idx !== index)
    });
  };
  handleOnEdit = (editVal, index) => {
    const { data } = this.state;
    data.forEach((item, idx) => {
      if (index === idx) {
        item.todo = editVal;
      }
    });
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <Form onSubmit={this.handleSubmit} />
        <h1>To do list</h1>
        <List todo={data}
          onDelete={this.handleRemove}
          onEdit={this.handleOnEdit}
        />
      </div>
    )
  }
}

export default App;
