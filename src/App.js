import "./App.css";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <h1>My Comments App!</h1>
      <Comment
        name="Jonathan Melo"
        email="desenvolvedor.jonathan@gmail.com"
        date={new Date()}
        message="O jonathan é muito lindão."
      />
      <Comment
        name="Jackeline Gois"
        email="j@gmail.com"
        date={new Date()}
        message="Realmente o jonathan é muito lindão."
      />
    </div>
  );
}

export default App;
