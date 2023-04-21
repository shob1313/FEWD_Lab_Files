import React from 'react';
import Greetings from './Greetings';
import MyLoginComponent from './MyLoginComponent';

console.log("header is"+ window.localStorage.getItem('name'));

function  logUserOut(){
    localStorage.setItem('name','');
}

const Header = () => {

 return <div> 
 <nav className="navbar navbar-dark navbar-expand-sm fixed-top" style={{'backgroundColor': 'darkblue'}}>
         <div className="container">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                 <span className="navbar-toggler-icon"> </span>
             </button>
             <a className="navbar-brand mr-auto" href="#">
                 <img src="imgs/logo.png" width="85%" height="65%"/> </a>
           <div className="collapse navbar-collapse" id="Navbar">
                 <ul className="navbar-nav mr-auto">
                     <li className="nav-item active"><a className="nav-link" href="/home"><span className="fa fa-home fa-lg"></span> Home</a></li>
                     <li className="nav-item"><a className="nav-link" href="/aboutus"><span className="fa fa-list fa-lg"></span>About Us</a></li>
                     <li className="nav-item"><a className="nav-link" href="/products"><span className="fa fa-info fa-lg"></span> Products</a></li>
                     <li className="nav-item"><a className="nav-link" href="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</a></li>
                 </ul>                
                 
                 </div> 
                 <span className="navbar-text mr-3">     
                 <span style={{'fontSize':'0.75rem'}}>Weather at store   
                   <img id='myimg' src=''/>
                     <span id='myweather'> Weather here </span> 
                     <span id='moreweather'> Weather more </span> 
                   </span>           
                 </span>
                   
                
                <Greetings loggedin={window.localStorage.getItem('flag')} name={window.localStorage.getItem('name') }/>
     
    
         </div>
     </nav>
     <span className="navbar-text mr-7">
                 <MyLoginComponent/>
                                </span>
    </div>
}

export default Header;
