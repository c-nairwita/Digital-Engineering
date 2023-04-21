import "./App.css";
import { Provider } from "react-redux";
import TodoComp from "./components/TodoComp";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoComp />
      </Provider>
    </div>
  );
}

export default App;
