var assert = chai.assert;

describe("Timer", function () {
	describe("When timer is started", function () {
		it("should be started, not silenced, with time", function () {
			Timer.start("5 seconds");
			assert.equal(Timer.data.stopped, false);
			assert.equal(Timer.data.silence, false);
			assert.notEqual(Timer.data.time, 0);
			Timer.stop();
		});
	});

	describe("When parsing time phrases", function () {
		it("should parse 1 second", function () { testParse("1 second", 1); });
		it("should parse 30 seconds", function () { testParse("30 seconds", 30); });
		it("should parse 0 seconds", function () { testParse("0 seconds", 0); });
		it("should parse 1 minute", function () { testParse("1 minute", 60); });
		it("should parse 3 minutes", function () { testParse("3 minutes", 180); });
		it("should parse 10 minutes", function () { testParse("10 minutes", 600); });
		it("should parse 1 hour", function () { testParse("1 hour", 3600); });
		it("should parse 2 hours", function () { testParse("2 hours", 7200); });
		it("should not parse gibberish", function () { testParse("gibberish", 0); });
		it("should not parse fifteen minutes", function () { testParse("fifteen minutes", 0); });
		it("should not parse 1 second lemme check", function () { testParse("1 second lemme check", 0); });
		it("should not parse 5 days", function () { testParse("5 days", 0); });
		it("should not parse 1second", function () { testParse("1second", 0); });
	});

	describe("When timer is inactive", function () {
		it("should be stopped, not silenced, with 0 time", function () {
			Timer.stop();
			assert.equal(Timer.data.stopped, true);
			assert.equal(Timer.data.silence, false);
			assert.equal(Timer.data.time, 0);
		});
	});
});


// Helpers

function testParse(durationPhrase, numSeconds) {
	Timer.start(durationPhrase);
	assert.equal(Timer.data.time, numSeconds);
	Timer.stop();
}