import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery'
import '../../css/auth/auth.css'
import logo from '../../img/logo.jpg'
class AuthPage extends Component {
        componentDidMount = () => {
            
        }
        render() {
                return (
                    <div className="authSection">
                        <div className="authContainer">
                            
                            <h1>登录你的账号</h1>
                            <form action="">
                                <label htmlFor="email">
                                    邮箱地址
                                </label>
                                <input type="email"/>
                                <label htmlFor="password">
                                    密码
                                </label>
                                <input type="password"/>
                                <button type="submit">登录<i className="fa fa-angle-right"></i></button>
                                <a href="">没有账号？ 现在注册</a>
                            </form>
                        </div>
                    </div>
                );
            }
    }

export default AuthPage;