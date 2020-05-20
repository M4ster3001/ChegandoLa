module.exports = function( req, res, next ){
    res.header( 'Access-control-Allow-Origin', '*' )
    res.header( 'Access-control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE' )
    res.header( 'Access-control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept' )

    next()
}