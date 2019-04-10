import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../laws/home'
import Criminal from '../laws/criminal_laws'
import Civil from '../laws/civil_laws'
import Admin from '../admin/admin'
import User from '../user/user'
import Login from '../user/login'
import About from '../laws/about'
import Service from '../laws/service'
import News from '../laws/news'
import About2 from '../laws/about2'
import Service2 from '../laws/service2'
import News2 from '../laws/news2'
import Criminal_admin from '../admin/criminal_admin'
import civil_admin from '../admin/civil_admin'
import renderLaw from '../../src/admin/RenderLaw'
import LawAdd from '../../src/admin/LawAdd'
import civil_LawAdd from '../../src/admin/civil_LawAdd'



export const Routing = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/Criminal" component={Criminal} />
            <Route path="/Civil" component={Civil} />
            <Route path="/Admin" component={Admin} />
            <Route path="/User" component={User} />
            <Route path="/Login" component={Login} />
            <Route path="/About" component={About} />
            <Route path="/Service" component={Service} />
            <Route path="/News" component={News} />
            <Route path="/About2" component={About2} />
            <Route path="/Service2" component={Service2} />
            <Route path="/News2" component={News2} />
            <Route path="/renderLaw" component={renderLaw} />
            <Route path="/Criminal_admin" component={Criminal_admin} />
            <Route path="/civil_LawAdd" component={civil_LawAdd} />
            <Route path="/LawAdd" component={LawAdd} />
            <Route path="/civil_admin" component={civil_admin} />
            




             
        </div>
    </Router>
);





export default Routing;
