import './App.css';
import { Button } from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./Actions/index.js"
function App() {
  const myState = useSelector((state) => state.ChangeTheNumber );
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <Button class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())} ><span>-</span></Button>
        <input name="quantity" type="text" class="quantity__input" value={myState}/>
        <Button class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber()) }><span>+</span></Button>
      </div>
  
          </div>
        </div>
  );
}

export default App;
