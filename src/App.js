import "./App.css";
import Restaurant from "./components/restaurant";
import getAll from "./repository/restaurant";

function App() {
  return (
    <div className="App">
      {getAll.docs.map((restaurant) => {
        return <Restaurant name={restaurant.name} />;
      })}
    </div>
  );
}

export default App;
