# nappupeli

Nappupeli is a simple clicker game where you click a button "nappu" and win every 10 clicks (each click increases the counter by 10 since it's faster that way.
A prize can either be a small (every 100 points), medium (every 200 points) or a BIG prize (every 500 points). You don't know the state of the counter but what you do know
is how many points until the next prize.

If you land a winning click, you get to submit your name to a leaderboard.

The game can be played simultaneously on many screens but the screen loading may be a bit slow/sluggish since this is the first time I'm using a real-time app using Socket.io.

Also apologize for the front being almost just a single component, it's because I'm nowadays used to using Redux, but for some reason did not get Redux to work with Socket.io.

The game is running at nappupeli.herokuapp.com
