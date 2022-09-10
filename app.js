Pts.namespace( window );

var styleHeader = function () {
     // Create HTML space and form
    Pts.namespace( this );
    var space = new HTMLSpace("#pt").setup({bgcolor: "#f6cdfa", resize: true });
    var form = space.getForm();

    space.add(
        // For DOM, don't use arrow function so that `this` here will refer to this player
        function (time, ftime) {
            
        // DOM scope starts
        form.scope( this );

        let pointer = space.pointer.$max(0, 0).$min( space.size );
        let rect1 = Rectangle.fromTopLeft( [0,0], space.size );
        let rect1Alt = Rectangle.fromTopLeft( [10,0], [pointer.x, pointer.y] );
        let rect2 = Rectangle.fromTopLeft( [pointer.x, 0], space.size );

        // Draw first rectangle(s)
        form.strokeOnly("#eeb9f0", 1).fillText("#f0ff6e").cls("rect1").rect( rect1 );
        form.strokeOnly("#eeb9f0", 1).fillText("#fff").cls("rect1a").rect( rect1Alt );
        document.querySelector(".rect1").textContent = "sara";
        document.querySelector(".rect1a").textContent = "sara";

        // Draw second rectange
        form.fillOnly("#3396ff").fillText("#fff").cls("rect2").rect( rect2 );
        document.querySelector(".rect2").textContent = "thrasher";
        }
    );


    // Add another player for testing. Again don't use arrow function => so as to bind the scope of "this" correctly.
    space.add( function(time, ftime) {

        // SVG scope starts
        form.scope(this);
        form.strokeOnly("#fff", 2).point( space.pointer, 5, "circle" );
    });

    
    //// ----
    space.bindMouse().bindTouch().play(5000);
    
};

styleHeader();

// Source code licensed under Apache License 2.0. 
// Copyright © 2017 William Ngan. (https://github.com/williamngan/pts)

// Projects Divs
