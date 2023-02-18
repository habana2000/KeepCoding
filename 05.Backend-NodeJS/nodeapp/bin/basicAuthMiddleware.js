const auth = require('basic-auth');

module.exports = (req, res, next) => {

    const user = auth(req);

    // Buscar en la base de datos en usuario usuario,name
    // y si lo encuentro, verifico la password (user.pass)

    // lo hacemos a piñón ahora
    if (!user || user !== 'admin'  || user.pass !== '1234') {
        res.set('WWWW-Authenticate','Basic realm=Authorization required');
        res.sendStatus(401);
        return;
    };

    next();
};