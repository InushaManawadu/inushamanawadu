import './App.css';
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import background from './background.png';


function App() {
  return (
    <Container className='main'  style={{backgroundImage: `url(${background})`, backgroundSize:'cover'}} >
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} lg={3} md={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main_content'>
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </div>  
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
