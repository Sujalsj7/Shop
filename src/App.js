import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import List from "./components/list";
import Checkout from "./components/checkout";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <BrowserRouter>
      
      <header id="main-header" class="py-2 bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <h2>
                <i class="fas fa-pencil-alt">Shop</i>
              </h2>
            </div>
          </div>
        </div>
      </header>
      {/* <List/> */}
      

      <Routes>
      <Route exact path='/' element={< List />}></Route>
      <Route exact path='/checkout' element={< Checkout />}></Route>
      <Route exact path='/Thankyou' element={< Thankyou/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
