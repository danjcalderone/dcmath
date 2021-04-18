var xx = math.ones(2);

//Pts.quickStart("cvxhull", "#0c3");

Pts.namespace(window);
var space1 = new CanvasSpace("cvxhull").setup({
  bgcolor: "#0c3",
  resize: true,
  retina: true
});
var form1 = space1.getForm();
//// Demo code starts (anonymous function wrapper is optional) ---

// (function () {
//   let pts;
// var space1.= CanvasSpace("#pt");
// space1.setup({ bgcolor: "#fff" });
// var form1.= space1.getForm();

space1.add({
  start: (bound) => {
    // Make a face with 30 radial points with slight randomness
    radius = space1.size.minValue().value / 3;
    pts = Create.radialPts(space1.center, radius, 30);
    pts.map((p) => p.add(50 * (Math.random() - Math.random())));
  },

  animate: (time, ftime) => {
    pts[pts.length - 1] = space1.pointer;

    // convex hull the points
    let hull = Polygon.convexHull(pts);

    // eyes' positions
    let left = space1.center.$subtract(50);
    let right = space1.center.$add(50, -50);
    let leftB = left
      .clone()
      .toAngle(space1.pointer.$subtract(left).angle(), 10, left);
    let rightB = right
      .clone()
      .toAngle(space1.pointer.$subtract(right).angle(), 10, right);

    // draw face and eyes
    form1.fillOnly("rgba(255, 255, 255, 0.5)").polygon(hull);
    form1.fill("#fff").points([left, right], 20, "circle");
    form1.fill("#123").points([leftB, rightB], 5, "circle");

    // draw the hull and pts
    form1.fill("#fff").points(hull, 5, "circle");
    form1.fill("rgba(0,0,0,.5)").points(pts, 2, "circle");
    form1.fill("#f03").point(space1.pointer, 10, "circle");

    // draw mouth
    form1.strokeOnly("#123", 5).line([left.$add(0, 80), right.$add(0, 80)]);
  }
});

//// ----

space1.bindMouse().bindTouch();
space1.play();

// })();
