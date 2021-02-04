import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Container, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  selectedJob: (job) => dispatch({ type: "SINGLE_JOB", payload: job }),
});

class Favorites extends Component {
  render() {
    return (
      <Container>
        <Row className="homepage">
          <Col xs={12} lg={6} className="listCol">
            <Row className="w-100">
              {this.props.favoriteJobs &&
                this.props.favoriteJobs.map((job, index) => (
                  //   console.log(job)
                  <SingleCard job={job} key={index} />
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Favorites)
);
