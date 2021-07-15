import './App.scss';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import CheckOut from './pages/CheckOut/CheckOut';
import UserForm from './pages/UserForm/UserForm';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter , Route , Switch , Redirect } from "react-router-dom";
import { useState } from 'react';


function App() {

  const [sideBar, setsideBar] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <SideBar sideBar={sideBar} showsidebar={()=>setsideBar(true)} hideSideBar={()=>setsideBar(false)}/>

        <Switch>
            <Route exact path='/products' component={Products}/>
            <Redirect exact from='/' to="/products"/>
            <Route exact path='/products/:id' component={ProductDetails}/>
            <Route exact path='/checkout' component={CheckOut}/>
            <Route exact path='/user-form' component={UserForm}/>
            <Route path='*' component={NotFound}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
