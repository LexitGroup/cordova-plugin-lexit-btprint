//  
// Copyright (c) Lexit Group Norway AS. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.  
//

var exec = require('cordova/exec');
var cordova = require('cordova');

var App = function () {
    this.initialize = function (delay) {
        exec(null, null, 'LexitBtPrint', 'initialize', [delay || 0]);
    };

    this.print = function (mac, data, statusCallback, permissionError) {
        var permissions = cordova.plugins.permissions;

        permissions.requestPermission(permissions.BLUETOOTH_CONNECT, success, permissionError);

        function success(status) {
            if (!status.hasPermission) {
                permissionError();
            }
            else {
                exec(statusCallback, statusCallback, 'LexitBtPrint', 'print', [mac, data]);
            }
        }
    };
};

module.exports = new App();
