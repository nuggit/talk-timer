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



var app = new Vue({
	el: '#timer',
	data: {
		timerInfo: Timer.data
	}
});

function test() {
	Timer.start('5 seconds');
}