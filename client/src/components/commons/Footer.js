import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../css/Footer.css'
import $ from 'jquery'

class Footer extends Component {
        componentDidMount = () => {
            
        }
        render() {
                return (
                    <div className="footer-section">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>主营业务</h3>
                                <ul>
                                    <li><Link to="/">网站设计</Link></li>
                                    <li><Link to="/">电子商务</Link></li>
                                    <li><Link to="/">网络营销</Link></li>
                                    <li><Link to="/">教育培训</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3>教育培训</h3>
                                <ul>
                                    <li><Link to="/">教学视频</Link></li>
                                    <li><Link to="/">项目作业</Link></li>
                                    <li><Link to="/">考试测验</Link></li>
                                    <li><Link to="/">会员计划</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3>站内链接</h3>
                                <ul>
                                    <li><Link to="/">关于我们</Link></li>
                                    <li><Link to="/">加入我们</Link></li>
                                    <li><Link to="/">技术博客</Link></li>
                                    <li><Link to="/">合作伙伴</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="copyRight">
                            <ul>
                                <li><span>© 2017 BC Technology, Inc.</span></li>
                                <li><Link to="">使用条款</Link></li>
                                <li><Link to="">隐私条款</Link></li>
                            </ul>
                            
                        </div>
                    </div>
                );
            }
    }

export default Footer;