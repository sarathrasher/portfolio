Pts.namespace( window );

var styleHeader = function () {
     // Create HTML space and form
    Pts.namespace( this );
    var space = new HTMLSpace("#pt").setup({bgcolor: "#36f", resize: true });
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
        form.strokeOnly("#3355ff", 1).fillText("#ffdd33").cls("rect1").rect( rect1 );
        form.strokeOnly("#3355ff", 1).fillText("#fff").cls("rect1a").rect( rect1Alt );
        document.querySelector(".rect1").textContent = "sara";
        document.querySelector(".rect1a").textContent = "sara";

        // Draw second rectange
        form.fillOnly("#ff3355").fillText("#fff").cls("rect2").rect( rect2 );
        document.querySelector(".rect2").textContent = "muntean";
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

interact('.resize-drag')
  .draggable({
    onmove: window.dragMoveListener,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: false, top: false },

    // keep the edges inside the parent
    restrictEdges: {
      outer: 'parent',
      endOnly: true,
    },

    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 },
    },

    inertia: true,
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
  });