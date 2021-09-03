
//Bouncy ball:
/*
 This program simulates a ball bouncing,
 by repeatedly drawing the ball at the calculated
 new position, according to the arc of a parabola.
*/
noStroke();

// Time, starting at 0
var t = 0;

// The height of the ball, where 0 is on the ground
var y = 0;

var draw = function() {
    // Clear previous drawings and fill in a sky color
    background(251, 255, 214);
    // Draw the ground
    fill(255, 255, 255);
    rect(0, 250, 400, 150);
    
    // Calculate y according to the path of a parabola with respect to "t":
    // y = (velocity)*t - (acceleration)*t^2;
    // We can tweak the velocity and acceleration constants for our fake world
    y = -0.02*t*t + 5.0*t;
    
    // We make the shadow lighter as we increase y
    var grey = 0.1 * y + 200.5;
    // We grow the shadow bigger as we increase y
    var shadowSize = 0.2 * y + 50.5;
    // Draw the shadow
    fill(grey, grey, grey);
    ellipse(200, 300, shadowSize, 10);
    
// Since y is a positive height, we need to flip it
    // to look right on the inverted coordinate plane
    var correctedY = 250.5 - y;

    // Draw the ball
    fill(0, 0, 0);
    ellipse(200, correctedY, 50, 50);

    // If y becomes negative, the ball has hit the ground
    if (y < 0) {
        // Now we reset t to make it "bounce" up again
        t = 0;
    }
    
    t += 5.5;
};