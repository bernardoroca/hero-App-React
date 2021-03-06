import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../components/DC/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
   
    return (
        <>
            <Navbar/>
            
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/hero/:heroID" component={HeroScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
