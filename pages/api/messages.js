const fetch = require('node-fetch');

export default (req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');

    (async () => {
        const response = await fetch(`https://api.gumroad.com/v2/sales?access_token=${process.env.GUMROAD_ACCESS_TOKEN}`);
        const body = await response.json();

        const messages = []

        body.sales.forEach(data => {
            const {timestamp, product_name, formatted_total_price, custom_fields, quantity} =  data
            messages.push({timestamp, product_name, formatted_total_price, custom_fields, quantity})
        });

        res.send(messages);
    
    })();
};
