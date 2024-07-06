import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return ( <
            
            nav className = "navbar navbar-dark bg-dark navbar-expand-lg" >
            <
            Link to = "/"
      
            className = "navbar-brand" >< /Link > <
            div className = "collpase navbar-collapse" >
            <
            ul className = "navbar-nav mr-auto" >

            <ul class = "navbar-nav ms-auto mb-2 mb-lg-0" >

            <
            li className = "navbar-item" >
            <
            Link to = "/Login"
            className = "nav-link" > Login < /Link> < /
            li > <
            li className = "navbar-item" ></li>

            <
            li className = "navbar-item" >
            <
            Link to = "/Register"
            className = "nav-link" > Register < /Link> < /
            li > <
            li className = "navbar-item" ></li>


            <
            li class = "nav-item" >
            <
            Link to = "/"
            class = "nav-link active" > Home < /Link> < /
            li >

            <
            li class = "nav-item" >
            <
            Link to = "/about"
            class = "nav-link active" > About Us < /Link> </li >

            <
            li class = "nav-item" >
            <
            Link to = "/contact"
            class = "nav-link active" > Contact Us < /Link> < /
            li >



            <
            /ul>


            <
            li className = "navbar-item" >
            <
            Link to = "/Customer"
            className = "nav-link" > Customer < /Link> < /
            li > <
            li className = "navbar-item" >
            <
            Link to = "/Employee/"
            className = "nav-link" > Employee < /Link> < /
            li > <
            li className = "navbar-item" >
            <
            Link to = "/Task/"
            className = "nav-link" > Task < /Link> < /
            li >
            <
            li className = "navbar-item" >
            <
            Link to = "/disDiary"
            className = "nav-link" > Events< /Link> < /
            li >

            <
            li className = "navbar-item" >
            <
            Link to = "/AddDelivery"
            className = "nav-link" > Delivery< /Link> < /
            li >

            </ul>
           </div > </nav>
        );
    }
}