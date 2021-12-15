import React from "react";
import "./App.css";
import Comment from "./components/Comment";

class App extends React.Component {
  state = {
    comments: [
      {
        name: "Jonathan Melo",
        email: "desenvolvedor.jonathan@gmail.com",
        date: new Date(),
        message: "O Jonathan é muito lindão.",
      },
      {
        name: "Jackeline Gois",
        email: "j@gmail.com",
        date: new Date(),
        message: "Realmente o jonathan é muito lindão.",
      },
    ],
  };

  addComment = () => {
    const newComment = {
      name: "Felipe Melo",
      email: "felipe@gmail.com",
      date: new Date(),
      message: "De fato o Jonathan é muito lindo.",
    };

    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Comments App!</h1>
        {this.state.comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              name={comment.name}
              email={comment.email}
              date={comment.date}
              message={comment.message}
            />
          );
        })}
        <button onClick={this.addComment}>Adicionar Comentário.</button>
      </div>
    );
  }
}

export default App;
