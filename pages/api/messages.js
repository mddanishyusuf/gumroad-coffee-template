const fetch = require('node-fetch');

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    (async () => {
        const response = await fetch(`https://api.gumroad.com/v2/sales?access_token=${process.env.GUMROAD_ACCESS_TOKEN}`);
        const body = await response.text();

        res.send(body);
    
    })();
};
