import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import Header from './components/Header';
import Footer from './components/Footer';
import EditCustomer from "./components/edit-Customer.component";
import CreateCustomer from "./components/create-Customer.component";
import CreateEmployee from "./components/create-Employee.component";
import TaskList from "./components/Task-list.component";
import EditEmployee from "./components/edit-Employee.components";
import CustomerList from "./components/Customer-list.component";
import Home from './components/pages/Home';
import EmployeeList from "./components/Employee-list.component";
import createTask from "./components/create-Task.component";
import Edittask from "./components/edit-Task.component";
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import ReportCus from './components/Report-Customer.component';
import EmpReport from './components/Employee-Report.component';
import ReportTask from './components/Task-Report.component';

import DisDiary from './components/disDiary';
import Login from './components/Login';
import Register from './components/Register';
import AddDelivery from './components/AddDelivery';

function App() {

    return (
         
        <Router >
        <div className = "container" >
            <Header />
        <
        Navbar / >
        <
        br / >
        <
        Route path = "/"
        exact component = { Home }
        /> <
        Route path = "/Customer"
        exact component = { CustomerList }
        />
        
        <
        Route path = "/ReportCus"
        exact component = { ReportCus }
        /> <
        Route path = "/edit/:id"
        component = { EditCustomer }
        /> <
        Route path = "/create"
        component = { CreateCustomer }
        /> <
        Route path = "/Employee /add/"
        component = { CreateEmployee }
        />
        
        <
        Route path = "/EmpReport"
        exact component = { EmpReport }
        /> <
        Route path = "/Task/"
        component = { TaskList }
        />  <
        Route path = "/Employee/"
        component = { EmployeeList }
        />  <
        Route path = "/Taskcre/"
        component = { createTask }
        /> 
        <
        Route path = "/ReportTask"
        component = { ReportTask }
        /> 
         <
        Route path = "/Taskedit/Edit/:id"
        component = { Edittask }
        />  <
        Route path = "/EMP/Edit/:id"
        component = { EditEmployee }
        />  <
        Route path = "/about"
        component = { About }
        />  <
        Route path = "/contact"
        component = { Contact }
        />  

        <
        Route path = "/Login"
        component = { Login }
        />  

        <
        Route path = "/Register"
        component = { Register }
        />  


        <Route path="/disDiary" exact component={DisDiary}/>

        <Route path="/AddDelivery" exact component={AddDelivery}/>
        <Footer/>
        </div> 
        
        </Router>
    );
}


export default App;
