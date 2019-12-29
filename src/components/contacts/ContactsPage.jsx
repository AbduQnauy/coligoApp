import React from "react";
import { connect } from "react-redux";
// import {
//   checkAll,
//   deleteAll,
//   deleteOneContact,
//   updatePagination
// } from "../../actions";

import { Button, Container, Row, Col } from "reactstrap";

//

class ContactsPage extends React.Component {
  //
  //
  // ////////////////////////////////
  // ///////////////////////////////
  render() {
    const { history, contacts, flag } = this.props;
    // Get current page
    // const ascendingCurrentContacts = currentContacts;
    // const descendingCurrentContacs = currentContacts;
    //
    return <div>Coligo</div>;
  }
}

export default connect()(ContactsPage);
