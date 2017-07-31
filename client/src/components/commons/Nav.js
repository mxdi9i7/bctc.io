import React, { Component } from 'react';
import '../../css/Nav.css';
import $ from 'jquery'
import NavHelpers from './NavHelpers'
import logo from '../../img/logo.jpg'
class Nav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="navBar">
            <NavHelpers />
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/"><img src={logo} alt=""/></a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {/*<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Link</a></li>*/}
                            <li><a href="">公司简介</a></li>
                            <li className="bizDrop"><a href="#">主营业务  <i className="fa fa-angle-down"></i></a></li>
                            <li className="portDrop"><a href="#">项目案例  <i className="fa fa-angle-down"></i></a></li>
                            <li className="eduDrop"><a href="#">教学培训  <i className="fa fa-angle-down"></i></a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="">登录 / 注册</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bizDropContent">
                biz
            </div>
            <div className="portDropContent">
                port
            </div>
            <div className="eduDropContent">
                edu
            </div>
        </div>
        );
    }
}

export default Nav;
