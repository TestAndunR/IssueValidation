let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {

    // cognito_idp.listUsers({
    //     UserPoolId: process.env.UserPoolId_cognitoissue310, AttributesToGet: '[address,birthdate,email,family_name,gender,given_name,locale]'
    // }, function (error, data) {
    //     if (error) {
    //         // implement error handling logic here
    //         throw error;
    //     }
    //     // your logic goes within this block
    // });

    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitotest
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });



    callback(null, 'Successfully executed');
}