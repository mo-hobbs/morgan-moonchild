import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Navbar';
import Home from './Home';
import Footer from './Footer';

import WelcomePage from './WelcomePage';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Shop from './Shop';
import Learn from './Learn';
import Product from './Product';
import ReviewPage from './ReviewPage';
import ProductPage from './ProductPage';


function App() {
  //this was from setup to check sessions working
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);


  //this was from setup to check sessions working
  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin() {
    if (user) {
      return <WelcomePage user={user} />
    } else {
      return <Login onLogin={setUser} user={user} />;
    }
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} onLogout={handleLogout}/>
        <Switch>
        <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            {handleLogin()}
          </Route>

          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/reviews">
            <ReviewPage />
          </Route>
          <Route exact path="/">
            <Home />
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
