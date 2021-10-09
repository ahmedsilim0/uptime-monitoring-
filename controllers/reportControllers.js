
// i got an issue to retrieve data from  mongodb so i worked in static way//

/*so the algorithm should be
1-connect user schema with urlCheck schema 
2-get user id after login (req.body._id)
3-search in urlCheck by this user_id 
4-get all checks that user did
5-loop and get each url written by this user from urlCheck scehma
6-then make reports. 
*/


const http = require('http');
const https = require("https");
const Monitor = require('ping-monitor');
const cron = require('node-cron');
const User = require('../models/User');
const mailer  = require('../services/mailer');
var request = require('request');


global.status = 0;
global.uptime = 0;
global.uptimeSeconds = 0
global.downtimeSeconds = 0;
global.downtime = 0;
global.availability = 0;
global.counter=0;
var sendDate = (new Date()).getTime();

global.responseTime = 0;
cron.schedule('* * * * * *', () => {
    global.receiveDate = (new Date()).getTime();
    request('https://naruto.fandom.com/wiki/Naruto_Uzumaki', function (error, response, body) {
        status = response.statusCode;
        counter++;
        responseTime = (receiveDate - sendDate)/counter;
        if (status == 200) {
            uptime++;
            uptimeSeconds = uptime * 1000;
            downtimeSeconds = downtime * 1000;
            //console.log(status);
        }
        else {
            downtime++;
            //console.log(downtime);
        }

        availability = (uptime / (uptime + downtime)) * 100
    }
    )
});

// const getuser = async(req,res)=>
// {
//     const user =await User.findById('615b511d667c35d6b1320681');
//     console.log(user);
// }




module.exports.get_report= function(req, res,next)  {
    //getuser(req,res);
    
    res.send('status=' + status.toString() +
        ' availability= ' + availability.toString() +
        ' outages= ' + downtime.toString() +
        ' downtimes= ' + downtimeSeconds.toString() +
        ' uptime= ' + uptimeSeconds.toString() +
        ' responseTime= ' + responseTime.toString()
        
    );
}

//-----------------Email alert------------------------------------
