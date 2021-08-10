Pts.namespace(window);
var space1 = new CanvasSpace("uitrack").setup({
  bgcolor: f1.color,
  resize: true,
  retina: true
});

//console.log("run uitrack");
var form1 = space1.getForm();
f1.color = "#0c6";

var handles;
var firstPt, lastPt;
var tension = 0.5;
var prev;
var ang = 0;

space1.add({
  start: (bound, space1) => {
    let hs = Line.subpoints(
      [
        space1.center.$multiply(0.25),
        space1.center.$add(space1.center.$multiply(0.75))
      ],
      5
    );

    // convert points to UIs
    handles = hs.map((h) => {
      let ud = UIDragger.fromCircle([h, [10, 10]]);

      ud.onDrag((ui, pt) => {
        // drag handling
        ui.group[0].to(space1.pointer.$subtract(ui.state("offset")));
      });

      ud.onHover(
        // hover handling
        (ui) => ui.group[1].scale(2),
        (ui) => ui.group[1].scale(1 / 2)
      );
      return ud;
    });

    let hovOn = (ui) => ui.group.scale(3, ui.group.centroid());
    let hovOff = (ui) => ui.group.scale(1 / 3, ui.group.centroid());

    firstPt = UIButton.fromPolygon([
      [0, space1.center.y - 30],
      [0, space1.center.y + 30],
      [30, space1.center.y]
    ]);
    firstPt.onClick((ui) => {
      tension = Math.max(0.1, tension - 0.1);
    });
    firstPt.onHover(hovOn, hovOff);

    lastPt = UIButton.fromPolygon([
      [space1.width, space1.center.y - 30],
      [space1.width, space1.center.y + 30],
      [space1.width - 30, space1.center.y]
    ]);
    lastPt.onClick((ui) => {
      tension = Math.min(2, tension + 0.1);
    });
    lastPt.onHover(hovOn, hovOff);
  },

  animate: (time, ftime) => {
    let ctrls = handles.map((g) => g.group[0]);
    ctrls.unshift(firstPt.group[2]);
    ctrls.push(lastPt.group[2]);

    let curve = Curve.cardinal(ctrls, 15, tension);
    curve.unshift(firstPt.group[0]);
    curve.unshift(new Pt(0, 0));
    curve.push(lastPt.group[0]);
    curve.push(new Pt(space1.size.x, 0));

    let t = Num.cycle(5000 / 5000);

    // get current curve point and angle
    let ci = 2 + Math.floor(t * (curve.length - 4));
    if (prev !== undefined && !curve[ci].equals(curve[prev])) {
      ang = curve[ci].$subtract(curve[prev]).angle() + Const.quarter_pi;
    }
    prev = ci;

    form1.fillOnly("#f06");
    handles.forEach((h) => h.render((g) => form1.circle(g)));

    form1.fillOnly("rgba(0,0,50,.8)").line(curve);

    let rect = Rectangle.corners(Rectangle.fromCenter(curve[ci], 20)).rotate2D(
      ang,
      curve[ci]
    );
    form1.strokeOnly("#fff", 7).lines([
      [rect[0], rect[2]],
      [rect[1], rect[3]]
    ]);

    firstPt.render((g) => form1.fillOnly("#fe3").polygon(g));
    lastPt.render((g) => form1.fillOnly("#0c6").polygon(g));
  },

  action: (type, px, py) => {
    UI.track(handles, type, new Pt(px, py));
    UI.track([firstPt, lastPt], type, new Pt(px, py));
  },

  resize: (bound, evt) => {
    if (form1.ready) {
      firstPt.group = Group.fromArray([
        [0, space1.center.y - 30],
        [0, space1.center.y + 30],
        [30, space1.center.y]
      ]);
      lastPt.group = Group.fromArray([
        [space1.width, space1.center.y - 30],
        [space1.width, space1.center.y + 30],
        [space1.width - 30, space1.center.y]
      ]);
    }
  }
});

//// ----
space1.bindMouse().bindTouch();
space1.play();
