import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const Register = lazy(() => import("./components/Register/Register"));

function App() {
  return (
    <div className="main-container">
      <Suspense
        fallback={
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ left: "50%", position: "absolute", top: "50%" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <Router>
          <Switch>
            <Route path="/" component={Register} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
