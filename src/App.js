import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from "./user/UserProfile";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import PostDetail from "./post/PostDetail";
import Store from "./context/Store";
import CommentDetail from "./comment/CommentDetail";

function App() {
    return (
        <div className="App">
            <Store>
                <BrowserRouter>
                    <Route exact path={"/"} component={UserProfile}/>
                    <Route exact path={"/posts"} component={PostDetail}/>
                    <Route exact path={"/comments"} component={CommentDetail}/>
                </BrowserRouter>
            </Store>
        </div>
    );
}

export default App;
