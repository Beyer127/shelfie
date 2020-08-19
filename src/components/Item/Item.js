import React, { Component } from "react";
import './Item.css'
import {withRouter} from 'react-router-dom'

class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="container">
          <h4>{this.props.data.description}</h4>
          <p>${this.props.data.price}</p>
          <img src={this.props.data.img} />
          <br />
          <button
            onClick={() => {
              this.props.deleteShelfie(this.props.data.shelfie_id);
            }}
          >
            Delete
          </button>
          <button onClick={() => this.props.history.push(`/edit/${this.props.data.shelfie_id}`)}>Edit</button>
        </div>
      </div>
    );
  }
}

export default withRouter (Item);
