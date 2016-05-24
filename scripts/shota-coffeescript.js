var enterReplies, leaveReplies;

module.exports = function(robot) {
  /*var lulz;*/
    robot.hear(/bats/i, function(res) {
    return res.send("Batman? BATMAN? Master Wayne, is that you?");
  });
  robot.respond(/open the (.*) doors/i, function(res) {
    var doorType;
    doorType = res.match[1];
    if (doorType == "batcave") {
      return res.reply("I'm afraid I have no idea what you're talking about. What 'batcave'?");
    } else {
      return res.reply("Opening " + doorType + " doors");
    }
  });
  robot.hear(/I like pie/i, function(res) {
    return res.reply("Great, if you could order me a lemon merengue, that would be lovely. It would be nice to be served for a change.");
  });
  robot.respond(/Alfred, is Bruce Wayne actually Batman?/, function(message) {
    return message.send("Sir, I take the fifth...");
  });
  /*lulz = ['lol', 'rofl', 'lmao'];
  robot.respond(/lulz/i, function(res) {
    return res.send(res.random(lulz));
  });
  return robot.topic(function(res) {
    return res.send(res.message.text + "? That's a Paddlin'");
  });*/
  robot.hear(/These boots/, function(response) {
    return response.send('...are made for walkin yo');
  });
  enterReplies = ['Hi', 'Batman is that you?', 'Is Robin with you?', 'Hello friend.', 'Been a while', 'I see you'];

  leaveReplies = ['Are you still there?', 'Hope to see you again soon', 'Thank you, come again', 'To the Batcave!'];

  robot.enter(function(res) {
    return res.send(res.random(enterReplies));
  });

  robot.leave(function(res) {
    return res.send(res.random(leaveReplies));
  });

  robot.respond(/just curious, are batman and robin, like an item/, function(res) {
    return res.reply("Come to think of it, they do spend an aweful lot of time together...why are you jealous?");
  });
  robot.respond(/just curious, are batman and robin, like an item/, function(res) {
    return setTimeout(function() {
    return res.send("...because I am...sniff sniff");
    }, 5000);
  });

  }
  
  

  /*robot.respond(/convert \$(.*) to btc/i, function(res){
        var usd = res.match[1];
        res.reply('That is about ' + usd * 0.0024 + ' in BTC');
    });*/


