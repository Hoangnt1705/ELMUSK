import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        let { total, percent } = this.props;
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });
        total = formatter.format(total);
        return (<div>
            <div className="total">
                <div className="totalMoney" id="totalMoney">Remaining: {total} USD</div>
                <div className="percentageLeft" id="percentageLeft">
                    {percent.toFixed(10)} % You haven't spent a single dollar! start buying!
                </div>
            </div>
        </div>);
    }
}

export default App;