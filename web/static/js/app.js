import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import Blogs from "./containers/Blogs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./containers/Form";
import UpdateForm from "./containers/UpdateForm";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Blogs} />
          <Route path="/create" component={Form} />
          <Route
            path="/update/:id"
            render={props => <UpdateForm {...props} />}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
