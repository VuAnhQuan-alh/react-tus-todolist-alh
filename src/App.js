import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <form action="">
          <input type="text" />
          <button type="submit">Create</button>
        </form>
        <h1>To do list</h1>
        <ul>
          <li>Cooking</li>
          <li>Watching movies</li>
          <li>Developer</li>
          <li>Reading books</li>
        </ul>
      </div>
    )
  }
}

export default App;
