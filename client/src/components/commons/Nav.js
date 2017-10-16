import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className="navbar-brand" to="/"><img src={logo} alt=""/></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="bizDrop"><Link to="#">主营业务  <i className="fa fa-angle-down"></i></Link></li>
                            <li className="portDrop"><Link to="#">项目案例  <i className="fa fa-angle-down"></i></Link></li>
                            <li className="eduDrop"><Link to="#">教学培训  <i className="fa fa-angle-down"></i></Link></li>
                            <li><Link to="#">技术博客</Link></li>
                            <li><Link to="">公司简介</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/auth">登录 / 注册</Link></li>
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
