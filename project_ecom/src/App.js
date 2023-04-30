import { Provider } from "react-redux";
import './App.css';
import { store } from "./redux/store";
import ProductsComp from "./components/ProductsComp";
import MyCart from "./components/MyCart";
import Dashboard from "./container/Dashboard";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <ProductsComp/> */}
        {/* <MyCart/> */}
        <Dashboard/>
      </Provider>
    </div>
  );
}

export default App;
