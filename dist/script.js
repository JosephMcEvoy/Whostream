var channels = ["OgamingSC2", "jessie", "freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "NoCopyrightSounds", "comster404"];

$(document).ready(function() {
    channels.forEach(function(channel) {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channel + '?callback=?', function(data) {
            if (!data.status) {
                if (data.stream !== null) {
                    $('.innerbox').prepend('<div class="channelbox"><div class="row"><div class="col-sm-4 col-md-4 col-lg-4"><a href="https://www.twitch.tv/' + channel + '"><img src="' + data.stream.channel.logo + '" class="userimg_on"></img></a></div><div class="col-sm-6 col-md-6 col-lg-6 channelboxsm"><a href="https://www.twitch.tv/' + channel + '" class="username_on">' + channel + '</a><h4 class="userdesc_on">' + data.stream.game + '</h4><h4 class="userdesc_on">' + data.stream.channel.status + '</h4></div></div></div>');
                } else if (data.stream === null) {
                    $('.innerbox').append('<div class="channelbox"><div class="row"><div class="col-lg-4 col-md-4 col-sm-4"><img src="http://placehold.it/75x75" class="userimg_off"></div><div class="col-sm-6 col-md-6 col-lg-6 channelboxsm"><a href="https://www.twitch.tv/' + channel + '" class="username_off">' + channel + '</a></div></div></div>');
                }
            } else {
                $('.innerbox').append('<div class="channelbox"><div class="row"><div class="col-sm-6 col-md-6 col-lg-4"><img src="http://placehold.it/75x75" class="userimg_off"></div><div class="col-sm-6 col-md-6 col-lg-6 channelboxsm"><a href="https://www.twitch.tv/' + channel + '" class="username_off">' + channel + '</a><h4 class="userdesc_off">Channel closed or does not exist.</h4></div></div></div>');
            }
        });
    });
});