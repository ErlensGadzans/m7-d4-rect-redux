import React, { Component } from "react";
import { Card, Button, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  selectedJob: (job) => dispatch({ type: "SINGLE_JOB", payload: job }),
});

class SingleCard extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.selectedJob(this.props.job);
    this.props.history.push("/details/");
  };

  render() {
    return (
      <div>
        <Container>
          <Col xs={12} className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.props.job.company_logo} />
              <Card.Body>
                <Card.Title>{this.props.job.title}</Card.Title>
                <Card.Text> {this.props.job.location}</Card.Text>
                <Button variant="primary" onClick={(e) => this.handleSubmit(e)}>
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleCard)
);
