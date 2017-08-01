import React, { Component } from 'react';
import $ from 'jquery'
import '../../css/index/topBox.css'

class TopBox extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount = () => {
       
    }
  render() {
    return (
        <div className="topBox">
            <div className="row">
                <div className="col-md-6 col-sm-12">

                </div>
                <div className="col-md-6 col-sm-12">
                </div>
            </div>
        </div>   
    );
  }
}

export default TopBox;