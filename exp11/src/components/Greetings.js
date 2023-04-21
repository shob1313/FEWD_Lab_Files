import React from 'react';

const Greetings = (props) => {
    console.log("greeting"+props.name);
    let storedName = window.localStorage.getItem('name');
    console.log("greetings"+window.localStorage.getItem('flag'));
    if(props.loggedin == 'true'){
        console.log('user is logged in');
    return (
            <div>
                <span className="navbar-text mr-7">              
                <h5> Welcome {JSON.parse(props.name)}! </h5> 
                <a href="/home" onClick={window.localStorage.setItem('flag',false)}>   Log out  </a>
                        
                </span>
            </div>
        );
    }
    else { 
 return ( 
        <div>
            <span className="navbar-text mr-7">              
                  <a data-toggle="modal" data-target="#loginModal">
                  <span className="fa fa-sign-in"></span> Login
                       </a>
            </span>
        </div>
 );
}
}

export default Greetings;
