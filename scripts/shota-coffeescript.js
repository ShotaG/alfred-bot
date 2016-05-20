module.exports = function(robot) {
  var lulz;
  robot.respond(/Hi Shuzaambot, my name is (.*)/i, function(res){
    var name = res.match[1];
    if (name == 'Raffi') {
      return res.send('The force is strong with you!');
    } else if (name == 'Yoda' || name == 'Obi Wan') {
      return res.send('You are a Jedi knight!');
    } else {
      return res.reply('Hello ' + name + ', I am Shuzaambot');
    }
  });
  robot.hear(/aardvark/i, function(res){
    return res.send('What a silly looking animal!');
  });
  robot.hear(/badger/i, function(res) {
    return res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
  });
  robot.respond(/open the (.*) doors/i, function(res) {
    var doorType;
    doorType = res.match[1];
    if (doorType === "pod bay") {
      return res.reply("I'm afraid I can't let you do that.");
    } else {
      return res.reply("Opening " + doorType + " doors");
    }
  });
  robot.hear(/I like pie/i, function(res) {
    return res.emote("makes a freshly baked pie");
  });
  lulz = ['lol', 'rofl', 'lmao'];
  robot.respond(/lulz/i, function(res) {
    return res.send(res.random(lulz));
  });
  return robot.topic(function(res) {
    return res.send(res.message.text + "? That's a Paddlin'");
  });
  robot.hear(/These boots/, function(response) {
    return response.send('...are made for walkin yo');
  });
  robot.respond(/Hi (.*), my name is Shuzaambot/i, function(message){
    var name = message.match[1];
    if (name == 'Raffi') {
      return message.send('The force is strong with you!');
    } else if (name == 'Yoda' || name == 'Obi Wan') {
      return message.send('You are a Jedi knight!');
    } else {
      return message.reply('Hello ' + name + ', I am Shuzaambot');
    }
  });
  
  

  robot.respond(/convert \$(.*) to btc/i, function(res){
        var usd = res.match[1];
        res.reply('That is about ' + usd * 0.0024 + ' in BTC');
    });


