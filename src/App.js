import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/BaseLayout/components/Header/index';
import Footer from './components/BaseLayout/components/Footer/index';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Plan from './components/Plan/Plan';
import Gallery from './components/Gallery/Gallery';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
            <Switch>
              <About path="/" exact component={About} />
              <Shop path="/shop" exact component={Shop} />
              <Plan path="/plan" exact component={Plan} />
              <Gallery path="/gallery" exact component={Gallery}/>
          </Switch>  
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

