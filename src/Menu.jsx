import React from 'react';
import {NavLink} from 'react-router-dom';


const Menu = () => {
return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light p-2 nav">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse padding" id="navbarSupportedContent">
            <ul id="menu" class="navbar-nav ml-auto ">
                <li class="nav-item p-3">
                  <NavLink to="/" exact activeClassName="active" > home </NavLink> <span class="sr-only">(current)</span>
                </li>
                <li class="nav-item p-3">
                 <NavLink to="/poke" exact activeClassName="active"> pokemon api </NavLink>
                </li>
                <li class="nav-item p-3">
                 <NavLink to="/todolist" exact activeClassName="active">  Todolist </NavLink>
                </li>


                <li class="nav-item p-3">
                <NavLink to="/currdate" exact activeClassName="active">  Curr Date </NavLink>

                </li>
                <li class="nav-item p-3 ">
                <NavLink to="/changebg" exact activeClassName="active">  Change Bg </NavLink>

                </li>
                <li class="nav-item p-3 ">
                <NavLink to="/usestate" exact activeClassName="active">  Get Time </NavLink>

                </li>
                <li class="nav-item p-3 ">
                <NavLink to="/inputforms" exact activeClassName="active"> Inputforms </NavLink>

                </li>
                <li class="nav-item p-3 ">
                <NavLink to="/sloth" exact activeClassName="active"> Sloth Machine </NavLink>


                </li>
                <li class="nav-item p-3 ">
                <NavLink to="/cards" exact activeClassName="active"> Netflix Cards </NavLink>

                </li>
            </ul>    

        </div>
    </nav>




    


    </>
)
}
export default Menu 