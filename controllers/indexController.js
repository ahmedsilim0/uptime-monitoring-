module.exports.get_home =function(req,res,next)
{
    res.render('home');
}
module.exports.get_welcome=function(req,res,next)
{
    res.render('welcome');
}

module.exports.get_signup=function(req,res,next)
{
    res.render('signup');
}

module.exports.get_about= function(req,res,next)
{
    res.render('about');
}

module.exports.get_login=function(req,res,next)
{
    res.render('login');
}
module.exports.user_logout_get = function(req, res, next) {
    res.cookie('jwt', '' , {maxAge:1});
    res.redirect('/login');
  }