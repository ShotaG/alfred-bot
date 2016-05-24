var ackbars;

ackbars = ["http://i.imgur.com/OTByx1b.jpg", "http://farm4.static.flickr.com/3572/3637082894_e23313f6fb_o.jpg", "http://6.asset.soup.io/asset/0610/8774_242b_500.jpeg", "http://files.g4tv.com/ImageDb3/279875_S/steampunk-ackbar.jpg", "http://farm6.staticflickr.com/5126/5725607070_b80e61b4b3_z.jpg", "http://farm6.static.flickr.com/5291/5542027315_ba79daabfb.jpg", "http://farm6.staticflickr.com/5250/5216539895_09f963f448_z.jpg", "http://static.fjcdn.com/pictures/Its_2031a3_426435.jpg", "http://www.millionaireplayboy.com/mpb/wp-content/uploads/2011/01/1293668358_bottom_trappy.jpeg", "http://31.media.tumblr.com/tumblr_lqrrkpAqjf1qiorsyo1_500.jpg", "https://i.chzbgr.com/maxW500/4930876416/hB0F640C6/", "http://i.qkme.me/356mr9.jpg", "http://24.media.tumblr.com/e4255aa10151ebddf57555dfa3fc8779/tumblr_mho9v9y5hE1r8gxxfo1_500.jpg", "http://farm2.staticflickr.com/1440/5170210261_fddb4c480c_z.jpg", "http://fashionablygeek.com/wp-content/uploads/2010/02/its-a-mouse-trap.jpg?cb5e28", "http://31.media.tumblr.com/tumblr_lmn8d1xFXN1qjs7yio1_500.jpg"];

var heroArray = [
	{
		name: 'Batman', 
		heroType: 'Vigilante', 
		universe: 'DC',
		introduce: function() {
			console.log('I\'m ' + heroArray[0].name + '!!')
		},
		typeofHero: function() {
			console.log('I\m a ' + heroArray[1].heroType + ' hero! I do things my own way!')
		},
		universe: function() {
			console.log('I am a member of the  ' + heroArray[2].heroType + ' universe.')
		}
	},

	{
		name: 'Hulk', 
		heroType: 'Science', 
		universe: 'Marvel',
		introduce: function() {
			console.log(heroArray[0].name + ' SMASH !!')
		},
		typeofHero: function() {
			console.log('I\m a ' + heroArray[1].heroType + ' hero! Puny Humans!!')
		},
		universe: function() {
			console.log('I am a member of the  ' + heroArray[2].heroType + ' universe.')
		}
	},

	{
		name: 'Wolverine', 
		heroType: 'Mutant', 
		universe: 'Marvel',
		introduce: function() {
			console.log('I\m ' + heroArray[0].name + '. I\'f you\'re smart you don\'t want me for an enemy!')
		},
		typeofHero: function() {
			console.log('I\m a ' + heroArray[1].heroType + ' hero! Get our of my way Bub!!')
		},
		universe: function() {
			console.log('I am a member of the  ' + heroArray[2].heroType + ' universe.')
		}

	},

	{
		name: 'Punisher', 
		heroType: 'Vigilante', 
		universe: 'Marvel',
		introduce: function() {
			console.log('I\m ' + heroArray[0].name + '. I\'f you\'re smart you won\'t want me as an enemy!')
		},
		typeofHero: function() {
			console.log('I\m a ' + heroArray[1].heroType + ' hero! Sounds like you don\'t think I\'m so crazy after all!!')
		},
		universe: function() {
			console.log('I am a member of the  ' + heroArray[2].heroType + ' universe.')
		}
	}
];

module.exports = function(robot) {
	robot.hear(/duck/, function(res) {
		return res.send('Quack!!');
	});

	robot.hear(/aardvark/, function(res) {
		return res.send('What a silly looking animal!!');
	});

	robot.respond(/Hi Alfred! My name is (.*)/i, function(message){
		var name = message.match[1];
		if (name == 'Raffi' || name == 'Shota') {
			return message.send('Hi ' + name + ', The force is strong with you!');
		} else if (name == 'Yoda' || name == 'Obi Wan') {
			return message.send(name + '!!! ' + 'You are a Jedi knight!');
		} else {
			return message.reply('Hello ' + name + ', I am Alfred');
		}
	});

	robot.hear(/it['’]?s a trap\b/i, function(msg) {
    	return msg.send(msg.random(ackbars));
	});

	robot.respond(/Heroes/i, function allheros() {
		for (i=0; i<heroArray.length; i++) {
			console.log(heroArray[0].introduce());
			console.log(heroArray[1].typeofHero());
			console.log(heroArray[2].universe());
			console.log('-----------------------------------------');
		}
	});
};

allheros();