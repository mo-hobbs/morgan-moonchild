import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Navbar';
import Home from './Home';
import Footer from './Footer';

import Contact from './Contact';
import About from './About';
import Login from './Login'
import Shop from './Shop';


function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin() {
    if (user) {
      return <h2>Welcome, {user.username}!</h2>;
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
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            {handleLogin()}
          </Route>
          <Route path="/shop">
            <Shop />
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
