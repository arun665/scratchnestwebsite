import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { ReactNode, useEffect, useState } from "react";
import "./topHeader.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import PersonModal from "./PersonModal";

// interface UserType {
//  user:Array<number|string>
// }

function Topheader(props: any) {
 // const [{ user,basket }] = useStateValue();
 // const [open, setOpen] = useState(false);
 // const history = useHistory();
 // const [hover, setHover] = useState(false);
 // var [displayname, setDisplayame] = useState("");

 // useEffect(() => {
 //   setDisplayame(user?.displayName);
//  }, [user]);

 // const onHover = () => {
 ///   setHover(true);
 // };

  //const onLeave = () => {
 //   setHover(false);
 // };

 // const Signin = () => {
 //   if (user) {
 //     auth.signOut();
  //  } else history.push("/account");
 // };

 // console.log(user);
  return (
    <div className="topheader">
  
  
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">

  <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615074337/logo_white_solid__copy_dqpf6l.png"
              className="logofooter"
            />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav" id="branddiv" >
    <Link to="/sector/datalogger" id="brand">
     
      <li className="nav-item" >
        <a className="nav-link" href="#" id="brand">RFID</a>
      </li>
     </Link>
      <Link to="/sector/datalogger" id="brand">
     
      <li className="nav-item" >
        <a className="nav-link" href="#" id="brand">Beacon</a>
      </li>
      </Link>
      <Link to="/sector/datalogger" id="brand">
     
      <li className="nav-item" >
        <a className="nav-link" href="#" id="brand">DataLogger</a>
      </li>    
      </Link>
      <Link to="/sector/datalogger" id="brand">
     
      <li className="nav-item">
        <a className="nav-link" href="#" id="brand">Education</a>
      </li>        
     </Link>     
    </ul>
    <button className="btn btn-outline-primary" id="btn"> Cart</button>
 
  </div>  
 

</nav>


  
    </div>
  );
}

export default Topheader;
