import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
    const sheet = new ServerStyleSheet();
    const context = { requestQueryParams: req.query };

    const body = ReactDOMServer.renderToString(sheet.collectStyles(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    ));
    const styles = sheet.getStyleTags();

    const helmet = Helmet.renderStatic();

    const html = `
        <html>
            <head>
                ${styles}
                ${helmet.meta.toString()}
                ${helmet.title.toString()}
                <link rel="icon" type="image/png" href="FacturandoteLogo.ico" sizes="16x16">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora&display=swap">
            </head>
            <body>
                <div id="root">
                    ${body}
                </div>
                <script src="client_bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html)
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
}); 