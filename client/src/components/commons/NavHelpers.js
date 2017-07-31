import React, { Component } from 'react';
import $ from 'jquery'

class NavHelpers extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount = () => {
        $('.bizDrop').hover(function() {
            $('.portDropContent').hide()
            $('.eduDropContent').hide()
            $('.bizDropContent').hover(function() {
                $('.bizDropContent').show()   
            })
            $('.bizDrop').mouseleave(function() {
                $('.bizDropContent').hide()
            })
            $('.bizDropContent').mouseleave(function() {
                $('.bizDropContent').hide()
            })
            $('.bizDropContent').show()
        })
        $('.portDrop').hover(function() {
            $('.bizDropContent').hide()
            $('.eduDropContent').hide()
            $('.portDropContent').hover(function() {
                $('.portDropContent').show()
            })
            $('.portDrop').mouseleave(function() {
                $('.portDropContent').hide()
            })
            $('.portDropContent').mouseleave(function() {
                $('.portDropContent').hide()
            })
            $('.portDropContent').show()
        })
        $('.eduDrop').hover(function() {
            $('.bizDropContent').hide()
            $('.portDropContent').hide()
            $('.eduDropContent').hover(function() {
                $('.eduDropContent').show()
            })
            $('.eduDrop').mouseleave(function() {
                $('.eduDropContent').hide()
            })
            $('.eduDropContent').mouseleave(function() {
                $('.eduDropContent').hide()
            })
            $('.eduDropContent').show()
        })
    }
  render() {
    return (
      <div />
    );
  }
}

export default NavHelpers;