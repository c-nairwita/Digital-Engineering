import { Provider } from "react-redux";
import "./App.css";
import Store from "./components/Store";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Store />
      </Provider>
    </>
  );
}

export default App;
