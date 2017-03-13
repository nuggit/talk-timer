// http://stackoverflow.com/a/6313008/873550
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    if (hours > 0) {
	    return hours + ":" + minutes + ":" + seconds;
    }
    else {
	    return minutes + ":" + seconds;
    }
}

var timerVm = new Vue({
	el: '#timer',
	data: {
		timerInfo: Timer.data
	},
	computed: {
		timeLeft: function () {
			return Timer.data.time.toString().toHHMMSS();
		}
	}
});

function test() {
	Timer.start('3 minutes');
}

if (annyang) {
	var commands = {
		'(set) timer (for) *duration': function(duration) {
			console.log("setting timer for " + duration);
			Timer.start(duration);
		},
		'stop timer': function () {
			console.log("stopping timer");
			Timer.stop()
		},
		'silence (timer)': function () {
			console.log("silencing timer");
			Timer.silence()
		}
	};

	annyang.addCommands(commands);

	annyang.start();
}
