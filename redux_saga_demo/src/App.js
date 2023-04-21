import "./App.css";
import UserComp from "./components/UserComp";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserComp />
      </Provider>
    </div>
  );
}

export default App;
