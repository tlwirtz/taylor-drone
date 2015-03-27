/**
 * Created by tlwirtz on 3/27/15.
 */

var arDrone = require('ar-drone');
var client = arDrone.createClient();

exports.autoFlight = function(){
    console.log("taking off");
    client.takeoff();

    client
        .after(5000, function(){
            this.clockwise(0.5);
        })
        .after(3000, function(){
            this.up(0.25);
            this.front(0.50) //watch out
        })
        .after(3000, function(){
            this.stop();
        })
        .after(3000, function(){
            this.land();
        });
}
