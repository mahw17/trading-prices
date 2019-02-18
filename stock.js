const fetch = require('node-fetch');

var stock = {
    getValue: function (rates) {
        fetch('https://trading-api.holmersson.se/price')
            .then(res => res.json())
            .then(json => {
                rates[0]["current"] = json.min;
                rates[1]["current"] = json.max;
            });
    }
};

module.exports = stock;
