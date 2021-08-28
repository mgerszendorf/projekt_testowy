import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../css/App.css";
import "../css/Slider.css";
import "../css/Information.css";
import "../css/Form.css";
import "../css/Footer.css";

import Slider from "./Slider";
import Information from "./Information";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Slider />
            <Information />
            <Form />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
