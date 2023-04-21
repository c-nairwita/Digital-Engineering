import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCake,
  orderCake,
} from "../redux/actionRetFunctions/cakeActionFunctions";
import {
  addIcecream,
  orderIcecream,
} from "../redux/actionRetFunctions/icecreamActionFunctions";
import { ADD_CAKE, ORDER_CAKE } from "../redux/actions/cakeActions";

function Store() {

  const totalNoOfCakes = useSelector((state)=>state.totalNoOfCakes)
  const totalCakePrice = useSelector((state)=>state.totalAmount)
  // const totalNoOfIcecreams = useSelector((state)=>state.icecream.totalNoOfIcecreams)
  // const totalIcecreamPrice = useSelector((state)=>state.icecream.totalAmount)
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch({type: ADD_CAKE})
  // },[dispatch])

  return (
    <div style={{textAlign: 'center'}}>
      <h2>STORE</h2>
      <div>
        <div>
          <h4>Total no. of cakes: {totalNoOfCakes}</h4>
          <h5>Total price: {totalCakePrice}</h5>
          <button onClick={()=>dispatch(addCake())}>Add Cake </button>
          <button onClick={()=>dispatch({type: ORDER_CAKE})}>Order Cake</button>
        </div>

        {/* <div>
          <h4>Total no. of icecreams: {totalNoOfIcecreams}</h4>
          <h5>Total price: {totalIcecreamPrice}</h5>
          <button onClick={()=>dispatch(addIcecream())}>Add Icecream </button>
          <button onClick={()=>dispatch(orderIcecream())}>Order Icecream</button>
        </div> */}
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     totalCakes: state.cake.totalNoOfCakes,
//     totalIcecream: state.icecream.totalNoOfIcecreams,
//     totalCakePrice: state.cake.totalAmount,
//     totalIcecreamPrice: state.icecream.totalAmount,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     orderCake: () => dispatch(orderCake()),
//     addCake: () => dispatch(addCake()),
//     orderIcecream: () => dispatch(orderIcecream()),
//     addIcecream: () => dispatch(addIcecream()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Store);

export default Store;