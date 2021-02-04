import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  favoriteJob: (job) => dispatch({ type: "ADD_FAVORITE", payload: job }),
  notFavoriteJob: (id) => dispatch({ type: "REMOVE_FAVORITE", payload: id }),
});

class DetailPage extends Component {
  render() {
    return this.props.singleJob ? (
      <>
        <Container>
          <Row className="homepage2">
            <Col xs={12}>
              <img
                src={this.props.singleJob.company_logo}
                className="image"
                alt={"logo"}
              />
            </Col>
            <Col xs={12}>
              <h3 className="jobTitle">{this.props.singleJob.title}</h3>
            </Col>
            <Col xs={12}>
              <h4>{this.props.singleJob.location}</h4>
              {this.props.listFavoriteJob.find(
                (job) => job.id === this.props.singleJob.id
              ) ? (
                <Button
                  variant="danger"
                  onClick={() =>
                    this.props.notFavoriteJob(this.props.singleJob.id)
                  }
                >
                  Remove from favourite
                </Button>
              ) : (
                <Button
                  variant="success"
                  onClick={() => this.props.favoriteJob(this.props.singleJob)}
                >
                  Add to favourite
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </>
    ) : (
      <div>There is no job like you requested.</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
