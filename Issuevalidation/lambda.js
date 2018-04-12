let AWS = require('aws-sdk');
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {
	let subject = event.subject;
	ses.sendEmail({
		Destination: {
			ToAddresses: ['andun@adroitlogic.com'],
			CcAddresses: [],
			BccAddresses: []
		},
		Message: {
			Body: {
				Html: {
					Data: '<html>\n<head><title>Test</title<head>\n</html>\n<body>ss</body>'
				}
			},
			Subject: {
				Data: subject
			}
		},
		Source: 'andun@adroitlogic.com'
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});


	callback(null, 'Successfully executed');
}
