import React, { Component } from 'react';
import Nav from '../commons/Nav';
import TopBox from './TopBox';
import Footer from '../commons/Footer'
import $ from 'jquery'

class Index extends Component {
        componentDidMount = () => {
            
        }
        render() {
                return (
                    <div>
                        <Nav />
                        <TopBox />
                        <Footer />
                    </div>
                );
            }
    }

export default Index;