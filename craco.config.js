const path = require(`path`);

const src = `./src`;
const components = `${src}/components`;
const redux = `${src}/redux`;
const assets = `${src}/assets`;


module.exports = {
    webpack: {
        alias: {
            '@header': path.resolve(__dirname, `${components}/header`),
            '@loader': path.resolve(__dirname, `${components}/loader`),
            '@alert': path.resolve(__dirname, `${components}/alert`),
            '@column': path.resolve(__dirname, `${components}/column`),
            '@board': path.resolve(__dirname, `${components}/board`),
            '@button': path.resolve(__dirname, `${components}/button`),
            '@closeButton': path.resolve(__dirname, `${components}/closeButton`),
            '@createTicketWindow': path.resolve(__dirname, `${components}/createTicketWindow`),
            '@descriptionWindow': path.resolve(__dirname, `${components}/descriptionWindow`),
            '@ticket': path.resolve(__dirname, `${components}/ticket`),

            '@redux': path.resolve(__dirname, redux),
            '@middlewares': path.resolve(__dirname, `${redux}/middlewares`),
            '@reducers': path.resolve(__dirname, `${redux}/reducers`),

            '@hooks': path.resolve(__dirname, `${src}/hooks`),
            '@config': path.resolve(__dirname, `${src}/config`),
            '@icons': path.resolve(__dirname, `${assets}/icons`),
        }
    },
};