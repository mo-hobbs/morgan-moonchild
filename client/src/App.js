import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Header from './Navbar';
import Home from './Home';



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
