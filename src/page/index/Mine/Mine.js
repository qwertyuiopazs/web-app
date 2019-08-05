import React, { Component } from 'react';
import "./Mine.scss"

class Mine extends Component {
    render() {
        return (
            <div className="main-mine">
                <div className="header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQ8eJkQDFHQHZJnx6HBuKfXs5DqN9eRopWMVxzcbLaBSdGnsb" alt="" className="avatar"/>
                    <p className="nickName">小米 &gt;</p>
                </div>
                <div className="content">
                    <ul className="items">
                        <li className="address">
                            售后售后售后
                        </li>
                        <li className="money">
                            代金券
                        </li>
                    </ul>
                    <ul className="items">
                        <li className="email">
                            意见反馈
                        </li>
                        <li className="question">
                            常见问题
                        </li>
                    </ul>
                    <p className="tel">客服电话: 789-789-8978</p>
                </div>
            </div>
        );
    }
}

export default Mine;