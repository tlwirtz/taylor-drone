/**
 * Created by tlwirtz on 3/27/15.
 */
//this create a Read-Eval-Print Loop (REPL)

var arDrone = require('ar-drone');
var client = arDrone.createClient();
var af = require('./autoFlight.js')

//client.createRepl();
af.autoFlight();