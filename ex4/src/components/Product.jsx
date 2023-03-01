import React, { Component } from 'react';
class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { id, name, price, imageUrl, number } = this.props.element;
        let { handleBuy, index, handleSell } = this.props;
        return (
            <div className="element" id={id}><img src={imageUrl} alt="AirPods Pro" />
                <p id="name">{name}</p>
                <span id="price">{price}</span>
                <div className="buyAndSellContainer" data-price="249">
                    <button className="btn-sell" onClick={() => handleSell(index)} id="sell" disabled="">Sell</button>
                    <span id="amount">{number}</span>
                    <button className="btn-buy" onClick={() => handleBuy(index)} id="buy">Buy</button>
                </div>
            </div>
        );
    };
};

export default Product;