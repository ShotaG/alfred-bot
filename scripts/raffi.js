
module.exports = function(robot) {
	robot.respond(/Hi Shuzaambot! My name is (.*)/i, function(message){
		var name = message.match[1];
		if (name == 'Raffi') {
			return message.send('Hi ' + name + ', The force is strong with you!');
		} else if (name == 'Yoda' || name == 'Obi Wan') {
			return message.send(name + '!!! ' + 'You are a Jedi knight!');
		} else {
			return message.reply('Hello ' + name + ', I am Shuzaambot');
		}
	});
	
	robot.hear(/aardvark/i, function(res){
		return res.send('What a silly looking animal!');
	});

	robot.respond(/convert \$(.*) to btc/i, function(res){
        var usd = res.match[1];
        return res.reply('That is about ' + usd * 0.0024 + ' in BTC');
    });
};