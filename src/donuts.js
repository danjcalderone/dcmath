Pts.namespace(window);
var space = new CanvasSpace("donut").setup({
  bgcolor: "rgba(0,0,0,0)",
  resize: true,
  retina: true
});
var form = space.getForm();
//console.log("run donut");




space.add({
  animate: (time, ftime) => {
    let c1 = Circle.fromCenter(space.pointer, space.size.y / 4);
    let c2 = Circle.fromCenter(space.pointer, space.size.y / 8);
    let ct = Circle.fromCenter(space.center, space.size.y / 4);

    let ins1 = Circle.intersectCircle2D(c1, ct);
    let ins2 = Circle.intersectCircle2D(c2, ct);

    form.fillOnly("#0c6").circle(c1);
    form.fill("#fe3").circle(c2);
    form.fill("rgba(70,30,240,.2)").circle(ct);
    form.fill("rgba(70,30,240, .3)").points(ins1, 10, "circle");
    form.fill("#f06").points(ins2, 5, "circle");
  }
});
space.bindMouse().bindTouch().play();
