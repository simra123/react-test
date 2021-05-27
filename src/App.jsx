import React, { createContext, useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './ToDolist.css';
import ToDolist from './ToDolist';
import Currdate from './Currdate';
import Changebg from "./Changebg";
import {db} from './fire';
import Clock from 'react-digital-clock';
import UseState from './UseState';
import Search from './Search';
import Inputforms from './InputForms';
import SlothM from './SlothM';
import NetflixList from './NeflixList';
import Menu from './Menu';
import { valHooks } from 'jquery';
import {Row , Col  , Button} from 'react-bootstrap';
import CompA from './CompA';
import axios from 'axios';
import PokemonAxios from "./PokemonAxios";
import GoogleKF from "./GoogleKF";
import Error from "./Error";
import {BrowserRouter, Route , Switch , useLocation , Redirect} from "react-router-dom";




const App = () => {
  

 return(
   <>
   <Menu/>

    <Switch>
      
      <Route  exact path='/' component={GoogleKF} />
      <Route path='/poke' render={() => 
        <PokemonAxios move='KAARTAB' />} />
      <Route path='/todolist' component={ToDolist} />
      <Route path='/clock' component={Clock} />
      <Route path='/currdate' component={Currdate} />
      <Route path='/changebg' component={Changebg} />
      <Route path='/UseState' component={UseState} />
      <Route path='/inputforms' component={Inputforms} />
      <Route path='/sloth' component={SlothM} />
      <Route path='/cards' component={NetflixList} />
      <Route path='/search' component={Search} />
      {/* <Route component={Error}/> */}
      <Redirect to="/" />
    </Switch>
    <button className="btn btn-outline-success"> donor click </button>
   </>
 )
}
export default App;
    
    
    



