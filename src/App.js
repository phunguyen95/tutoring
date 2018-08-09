import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './container/Header';
import BodyContent from './container/BodyContent'
import Footer from './components/Footer/Footer'
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
            <Header/>
          <BodyContent/>
          <Footer/>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
