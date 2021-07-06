import React from 'react';
import { Switch, Route } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/navbar/NavBar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/Contact';
import DistributorAccess from './pages/DistributorAccess';
import Questions from './pages/Questions';
import Tutorials from './pages/Tutorials';
import Payment from './pages/Payment';
import FooterComponent from './components/footer/FooterComponent';
// import ChatComponent from './components/chatComponent/ChatComponent';


const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Sora", sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #181818;
        padding-top: 80px;
    }

    body::-webkit-scrollbar {
        width: 10px;
        background: #3d3d3d;
    }

    body::-webkit-scrollbar-thumb {
        background: #ffef00;
        border-radius: 4px;
    }
`;

function App(){
    return(
        <>
            <GlobalStyle />
            <NavBar />
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/about'} exact component={About}/>
                <Route path={'/services'} exact component={Services}/>
                <Route path={'/contact'} exact component={Contact}/>
                <Route path="/DistributorAccess" exact component={DistributorAccess}/>
                <Route path="/Payment/:id" exact component={Payment}/>
                <Route path="/Questions" exact component={Questions}/>
                <Route path="/Tutorials" exact component={Tutorials}/>
            </Switch>
            {/* <ChatComponent/> */}
            <FooterComponent/>
        </>
    );
}

export default App;