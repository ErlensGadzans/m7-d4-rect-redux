import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setJobsInStore: (jobs) => dispatch({ type: "SET_JOBS", payload: jobs }),
});

class NavBar extends React.Component {
  // fetch from the api with the data from the state
  // save the data in the state

  state = {
    jobTitle: "",
    area: "",
  };

  getResults = async (jobTitle, area) => {
    try {
      const response = await fetch(
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.jobTitle}&location=${this.state.area}`
      );
      const jobs = await response.json();
      console.log(jobs);

      if (response.ok) {
        this.props.setJobsInStore(jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.getResults(this.state.jobTitle, this.state.area);

    // console.log(this.state.jobTitle);
    // console.log(this.state.area);
  };

  render() {
    return (
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand onClick={() => this.props.history.push("/")}>
            Job Search Bar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.props.history.push("/favorites/")}>
                {" "}
                Favorites
              </Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
            </Nav>
            <Form inline onSubmit={this.handleSubmit}>
              <FormControl
                type="text"
                placeholder="Job title"
                className="mr-sm-2"
                onChange={(event) => {
                  this.setState({ jobTitle: event.target.value });
                }}
              />
              {/* <Button variant="outline-success">Search</Button> */}

              <FormControl
                type="text"
                placeholder="Area"
                className="mr-sm-2"
                onChange={(event) => {
                  this.setState({ area: event.target.value });
                }}
              />
              <Button
                variant="outline-success"
                type="submit"
                // onClick={this.getResults}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
