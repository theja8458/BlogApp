function isActiveRoute(route,curRoute){
    return route === curRoute ? 'active' : "";

}

module.exports = {isActiveRoute};