Pts.namespace(window);
var space2 = new CanvasSpace("donut").setup({
  bgcolor: f1.color,
  resize: true,
  retina: true
});
var form2 = space2.getForm();
//console.log("run donut");

space2.add({
  animate: (time, ftime) => {
    let c1 = Circle.fromCenter(space2.pointer, space2.size.y / 4);
    let c2 = Circle.fromCenter(space2.pointer, space2.size.y / 8);
    let ct = Circle.fromCenter(space2.center, space2.size.y / 4);

    let ins1 = Circle.intersectCircle2D(c1, ct);
    let ins2 = Circle.intersectCircle2D(c2, ct);

    form2.fillOnly("#0c6").circle(c1);
    form2.fill("#fe3").circle(c2);
    form2.fill("rgba(70,30,240,.2)").circle(ct);
    form2.fill("rgba(70,30,240, .3)").points(ins1, 10, "circle");
    form2.fill("#f06").points(ins2, 5, "circle");
  }
});
space2.bindMouse().bindTouch().play();
