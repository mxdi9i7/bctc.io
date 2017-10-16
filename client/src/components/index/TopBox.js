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
        <div>
            <div className="topBox">
                <div className="topBoxText">
                    <h1>最完整的服务项目，让您高枕无忧</h1>
                    <p>最合理的项目报价，诚信为先</p>
                </div>
            </div>
            <div className="topBanner">
                <div className="topBannerText">
                    <ul>
                        <li>
                            <a href="">网站设计</a>
                        </li>
                        <li>
                            <a href="">电子商务</a>
                        </li>
                        <li>
                            <a href="">网络营销</a>
                        </li>
                        <li>
                            <a href="">教育培训</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="CTABox">
                <div className="CTAText">
                    <h1>想要了解更多？</h1>
                    <p>点击 <a href="/api/users/">这里</a> 参观我们的优秀项目，或拿起你手中的电话，拨打我们的号码：<a href="tel:6466397087">(646)-639-7087</a>，马上咨询！
                    </p>
                    <div className="contactBox">
                        <p>或我们联系您</p>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="tel" placeholder="请输入您的电话号码"/>
                            </div>
                            <div className="col-md-6">
                                <button>提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default TopBox;