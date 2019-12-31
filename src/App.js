import React from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route } from "react-router-dom";
//
import ParentContainer from "./components/parentContainer/ParentContainer";
// import NewFormContact from "./components/form/NewFormContact";
// import UpdateFormContact from "./components/form/UpdateFormContact";

function App() {
  // library.add(faAngleUp, faAngleDown);
  // return (
  //   <div>
  //     <Switch>
  //       <Route path="/" exact component={Main} />
  //     </Switch>
  //   </div>
  // );
  return <ParentContainer />;
}

export default App;
