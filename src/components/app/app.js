import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import {Route} from "react-router-dom";

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`, minHeight: '100vh'}} className="app">
            <AppHeader total={50}/>
            <Route path='/' exact component={MainPage}/>
            <Route path='/cart' component={CartPage}/>
        </div>
    )
}

export default App;
