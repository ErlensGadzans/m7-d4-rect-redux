import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class Home extends Component {
  render() {
    console.log(this.props.jobs.list);
    return (
      <Row>
        {this.props.jobs.list &&
          this.props.jobs.list.map((job) => (
            <SingleCard key={new Date() + Math.random()} job={job} />
          ))}
      </Row>
    );
  }
}

export default connect(mapStateToProps)(Home);
