import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import NotFound from "./components/NotFound/NotFound";

const App = () => (
  <Router>
    {/* Tác dụng của Switch tìm thằng nào mà match đầu tiên và dừng lại,
         không tìm những thằng ở sau nữa */}
    <Switch>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="*" component={NotFound} />
      {/* <Route path="/:somestring" component={Error} /> */}
    </Switch>
  </Router>
);

export default App;
