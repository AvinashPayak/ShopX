exports.getAddProduct = (req, res , next) => {
    res.render('add-product');
}
exports.postAddProduct = (req, res , next) => {
    if(req.url == '/add-product' && req.method =="POST"){
        
        res.redirect('/');
    }
}