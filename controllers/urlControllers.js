const urlCheck = require('../models/urlCheck');
const User = require('../models/User');
module.exports.post_url =  function(req,res , next)
{
    const userId = User.findById(req.params.id);
    const newUrl = new urlCheck(
    {
        name:req.body.name,
        url: req.body.url,
        protocol: req.body.protocol,
        path: req.body.path,
        port: req.body.port,
        webhock: req.body.webhock,
        timeout:req.body.timeout,
        interval: req.body.interval,
        thershold: req.body.thershold,
        authentication: req.body.authentication,
        httpHeader: req.body.httpHeader,
        assert: req.body.assert,
        tags: req.body.tags,
        ignoreSSL: req.body.ignoreSSL,
        //user:userId

    });
    // const urlID= newUrl["_id"];
    // await User.findOneAndUpdate( 
    //     {
    //         "_id" : userId ,

    //     },
    //     {
    //         "$push": { "url" : urlID }
    //     }
    // )
    newUrl.save((err) => {
        if (err) return next(err);
        res.redirect('/welcome');
    })
    
    
}