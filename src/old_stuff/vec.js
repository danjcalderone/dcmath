import { cubeCorners, cubeEdges } from "./nDim.js";

Pts.namespace(window);
var space = new CanvasSpace("#fig"); //figs"); //document.getElementById("blip"));
space.setup({
  bgcolor: "#FEFCFF", //"#5E5A80", // #FEFCFF //"#87CEFA", // #5E5A80
  resize: true,
  retina: true
});
var form = space.getForm();

var temp, out, dt;
const maxDim = 8;
var CUBEE = [[]];
var CUBE = cubeCorners(maxDim);
for (let i = 0; i < maxDim; i++) {
  CUBEE[i] = cubeEdges(CUBE[i], i);
}

var ORIG = new Group([0.0, 0.0]);
var AXES = Group.fromArray([
  [-10, 10],
  [10, 10],
  [10, 0],
  [0, -10],
  [10, -10],
  [-10, -10]
]);
AXES = AXES.map((t) => t.$multiply(15));
const aspect = 1.0;
var xlim, ylim, ss;
const cumSum = ((sum) => (value) => (sum += value))(0);
var axesHandles;

space.add({
  start: (bound, space) => {
    ORIG[0] = space.center.$add(ORIG[0]);
    AXES = AXES.map((t) => t.$add(ORIG[0]));

    xlim = space.width / aspect;
    ylim = space.height;

    //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////
    //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////
    //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////
    //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////

    axesHandles = AXES.map((h, i) => {
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onDrag((ui, pt) => {
        ui.group[0].to(space.pointer.$subtract(ui.state("offset")));
      });
      ud.onHover(
        (ui) => ui.group[1].scale(2),
        (ui) => ui.group[1].scale(1 / 2)
      );
      return ud;
    });
  },

  //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE ////
  //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE ////
  //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE ////
  //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE ////

  animate: (time, ftime) => {
    space.clear("transparent");

    // form.strokeOnly("rgba(100,100,100,1", 2).polygon(Polygon.convexHull(XX));
    // form.strokeOnly("rgba(100,100,100,1", 2).polygon(Polygon.convexHull(YYi));

    /// ????????????????
    /// ????????????????
    // form
    //   .stroke("rgba(0,0,0,1", 2)
    //   .line([viorigin.$add([200, 0]), viorigin.$add([-200, 0])]);

    // sx = space.width / aspect;
    // sy = space.height;
    // ss = math.min(sx, sy);

    axesHandles.forEach((h, i) => {
      h.group[0].to(AXES[i]);
      h.render((g) => form.circle(g));
    });

    axesHandles.map((h, i) =>
      form.stroke("rgba(0,0,200,0.5", 6).line([ORIG[0], AXES[i]])
    );
  },

  //// ACTION //// ACTION //// ACTION //// ACTION //// ACTION //// ACTION ////
  //// ACTION //// ACTION //// ACTION //// ACTION //// ACTION //// ACTION ////
  //// ACTION //// ACTION //// ACTION //// ACTION //// ACTION //// ACTION ////

  action: (type, px, py) => {
    UI.track(axesHandles, type, new Pt(px, py));
  }
});

//// ----
space.bindMouse().bindTouch().play();
