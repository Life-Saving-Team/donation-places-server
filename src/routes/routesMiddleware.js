const routes = [ 'locations']


function setRoutes(app) {
    routes.forEach(x => {
        app.use(`/${x}`, require(`./${x}.router`))
    })
}
module.exports = setRoutes

