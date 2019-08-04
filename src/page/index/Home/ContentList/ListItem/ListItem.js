import React, { Component } from 'react';
import "./ListItem.scss"

class ListItem extends Component {
    render() {
        let {item} = this.props
        return (
            <div className="item-content scale-1px">
                <div className="item-img">
                    <img src={item.pic_url} alt=""/>
                    {this.renderBrand(item)}
                </div>
                <div className="item-detail">
                    <p className="item-title">{item.name}</p>
                    <div className="item-desc clearfix">
                        <div className="item-score">
                            {
                                this.renderScore(item)
                            }
                        </div>
                       
                        <div className="item-count">月售{this.renderMonthNum(item)}</div>
                        <div className="item-distance">{item.distance}</div>
                        <div className="item-time">{item.mt_delivery_time}</div>
                    </div>
                    <div className="item-price">xx</div>
                    <div className="item-others">
                        <div className="other-info">
                            <img src="" className="other-tag" alt=""/>
                            <div className="other-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    


    /**
     * 月售数量
     *
     * @memberof ListItem
     */
    renderMonthNum(data) {
        let num =data.month_sale_num;
        if(num>999) {
            return '999+'
        }
        return num
    }

    /**
     * 品牌
     */
    renderBrand = (data) => {
        if(data.brand_type) {
            return <div className="brand brand-pin">品牌</div>
        }else{
            return <div className="brand brand-xin">新到</div>
        }
    }
    /**
     *评分
     * @memberof ListItem
     */
    renderScore = (item) => {
        let wm_poi_score = item.wm_poi_score || '';
        let score = wm_poi_score.toString();
        let scoreArray = score.split('.')

        // 整数部分
        let fullStar = parseInt(scoreArray[0])
        // 半星
        let harfStar;
        if(scoreArray.length>1){
            harfStar = parseInt(scoreArray[1]) >= 5 ? 1 : 0
        }else{
            harfStar = 0
        }
        
        // 没有星
        let nullStar = 5 - fullStar - harfStar
        let stars = [];

        for (let index = 0; index < fullStar; index++) {
            stars.push(<div key={index+'full'} className="star full-star"></div>)
        }

        if(harfStar) {
            for (let index = 0; index < harfStar; index++) {
                stars.push(<div key={index+'harf'} className="star harf-star"></div>)
            }
        }

        if(nullStar) {
            for (let index = 0; index < nullStar; index++) {
                stars.push(<div key={index+'null'} className="star null-star"></div>)
            }
        }

        return stars
    }
}

export default ListItem;