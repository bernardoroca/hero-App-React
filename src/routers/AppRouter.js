import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  
} from "react-router-dom";
import { authContext } from "../auth/authContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    const {user} = useContext(authContext)
    return (
        <Router>
        <div>
            {/* <Navbar/> */}

            <Switch>
                <PublicRoute 
                    isAuthenticated={user.logged}
                    exact 
                    path="/login" 
                    component={LoginScreen}/>
                <PrivateRoute 
                    isAuthenticated={user.logged}
                    path="/" component={ DashboardRoutes}/>
            </Switch>
        </div>
    </Router>
    )
}
