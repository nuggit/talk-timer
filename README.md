# Talk Timer
_A timer with voice commands_

## Description
It's a timer. If you are cooking and have chicken hands you can talk at this site page thing to set a timer for however long.

Commands:
* "Set timer for (time)"
** where (time) can be, for example: 10 seconds, 30 minutes, 2 hours
** it can't handle any other units, and it can't handle any complex times like "2 minutes 30 seconds" nor "half an hour"... yet!
* "Stop timer"
* "Silence"

See it here: https://nuggit.nu/talk-timer

## Development

To run locally, run `npm i; gulp` in the project directory then open public/index.html.

To work on it, consider running `gulp watch` since that'll build the sass file as you go.

To run tests, open testrunner.html. Tests are under test/.
