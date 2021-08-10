import {
  cubeCorners,
  cubeEdges,
  intersectPolyPt,
  integrateMDP,
  convexComb2n,
  tagEdges,
  drawGraph,
  drawFlow,
  markovOpt,
  markovUp
} from "./../../mod/nDim.js";

Pts.namespace(window);
var space = new CanvasSpace("#fig"); //figs"); //document.getElementById("blip"))
space.setup({
  bgcolor: "#5E5A80", // #FEFCFF //"#87CEFA", // #5E5A80
  resize: true,
  retina: true
});
var form = space.getForm();

var ORIGIN = Pt.fromArray(100, 100);
var AXES = Group.fromArray([
  [-150, 200],
  [50, 250],
  [150, 200],
  [100, 20],
  [0, -50],
  [-100, 20]
]);

var slideStart;
var slideEnd;
var intOut = intSlide(click_slider, slideStart, slideEnd, 10);
var intPos = intOut[0];
var intInd = intInd[1];

var temp, out, dt;
var zeros = [];
var ones = [];
for (let i = 0; i < 20; i++) {
  zeros[i] = new Pt(math.zeros(i)._data);
  ones[i] = new Pt(math.ones(i)._data);
}
zeros = Group.fromPtArray(zeros);
ones = Group.fromPtArray(ones);

const maxDim = 8;
var CUBEE = [[]];
var CUBE = cubeCorners(maxDim);
for (let i = 0; i < maxDim; i++) {
  CUBEE[i] = cubeEdges(CUBE[i], i);
}

var ORIG = new Group([-700, 200]);
var AXES = Group.fromArray([
  [-10, 10],
  [10, 10],
  [10, 0],
  [0, -10],
  [10, -10],
  [-10, -10]
]);
AXES = AXES.map((t) => t.$multiply(15));

var SIMP = [];
var SIMPE = [];
var SPHERE = [];
var SPHEREE = [];

const ishift = new Pt(-100, -100);
const ashift = new Pt(-100, 200);
const iorigshift = new Pt(-200, 0);
const aorigshift = new Pt(-200, 0);
const gshift = new Pt(-600, -200);
const voshift = new Pt(250, 0);
const vishift = new Pt(450, 0);
const qshift = new Pt(320, 0);
const rshift = new Pt(250, 400);
const stshift = new Pt(550, 400);
const st2shift = new Pt(550, 0);

const rwid = 20;
const stwid = 20;
const rbase = [0, 30, 50, 80, 100, 120];
const qbase = [0, 20, 30, 50, 60, 70];
const stbase = [0, 30, 60, 90, 120, 150];

var iorigin, aorigin, viorigin, voorigin, qorigin, rorigin;
var storigin, st2origin;
var iorig, aorig;

const rot90 = Group.fromArray([
  [0, -1],
  [1, 0]
]);

const ewidth = 10;
const erad = 20;
const loopWidth = 0.65;
const dphi = 2 * 3.1415 * 0.05;
const curveSeg = Group.fromArray([
  [erad, 0.0],
  [erad * math.cos(dphi), erad * math.sin(dphi)],
  [
    (erad + 2 * loopWidth) * math.cos(dphi),
    (erad + 2 * loopWidth) * math.sin(dphi)
  ],
  [erad + 2 * loopWidth, 0.0]
]);

var hhead = Group.fromArray([
  [0, 1],
  [0, 2],
  [3, 0],
  [0, 0]
]);
var whead = Group.fromArray([
  [0, 1],
  [0, 2],
  [3, 0],
  [0, -2],
  [0, -1]
]);

var htail = Group.fromArray([
  [0, 0],
  [0, 1]
]);
var wtail = Group.fromArray([
  [0, -1],
  [0, 1]
]);

var iaxes = Group.fromArray([
  [-200, 100],
  [200, 100],
  [0, -200]
]);

var aaxes = Group.fromArray([
  [-150, 200],
  [50, 250],
  [150, 200],
  [100, 20],
  [0, -50],
  [-100, 20]
]);

var actions, pis;
var initsdraw, rhotdraw, ytdraw;

var rdraw;
var lamdraw, mudraw;
var vidraw, vodraw;
var qidraw, qodraw;

var rs = Group.fromArray([1, 2, 3, 1, 2, 3]);
var rHandles, ihandles, aHandles, pihandles;
var lamHandles, viHandles, voHandles;
var yHandles, rhoHandles, initHandles;
var origHandles, iorigHandles, aorigHandles, axesHandles;

var Ei = Group.fromArray([
  [1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1]
]).$zip();

var Eo = Group.fromArray([
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1]
]).$zip();

const W = Group.fromArray([
  [0.8, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.1, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.1, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.0, 0.2, 0.1, 0.0, 0.0, 0.0],
  [0.0, 0.7, 0.7, 0.0, 0.0, 0.0],
  [0.0, 0.1, 0.2, 0.0, 0.0, 0.0],
  [0.0, 0.0, 0.0, 0.1, 0.1, 0.3],
  [0.0, 0.0, 0.0, 0.3, 0.1, 0.1],
  [0.0, 0.0, 0.0, 0.6, 0.8, 0.6]
]).$zip();

const Y = Group.fromArray([
  [0.8, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.1, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.1, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.0, 0.1, 0.2, 0.0, 0.0, 0.0],
  [0.0, 0.7, 0.7, 0.0, 0.0, 0.0],
  [0.0, 0.2, 0.1, 0.0, 0.0, 0.0],
  [0.0, 0.0, 0.0, 0.1, 0.1, 0.3],
  [0.0, 0.0, 0.0, 0.1, 0.3, 0.1],
  [0.0, 0.0, 0.0, 0.8, 0.6, 0.6]
]).$zip();

const Pi = Group.fromArray([
  [1.0, 0.0, 0.0],
  [0.0, 0.5, 0.0],
  [0.0, 0.5, 0.0],
  [0.0, 0.0, 1 / 3],
  [0.0, 0.0, 1 / 3],
  [0.0, 0.0, 1 / 3]
]).$zip();

const P = W.$matrixMultiply(Ei);
const A = W.$matrixMultiply(Eo);

const Pis = [
  Group.fromArray([
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 1.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0]
  ]).$zip(),
  Group.fromArray([
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 1.0],
    [0.0, 0.0, 0.0]
  ]).$zip(),
  Group.fromArray([
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 1.0]
  ]).$zip(),
  Group.fromArray([
    [1.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0]
  ]).$zip(),
  Group.fromArray([
    [1.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 1.0],
    [0.0, 0.0, 0.0]
  ]).$zip(),
  Group.fromArray([
    [1.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 1.0]
  ]).$zip()
];

// var rhot, xt, yt, Mt, Nt, Kt;
// var rho, x, y, M, N, K;
// var rhots, xts, yts, Mts, Nts, Kts;
// var ys, xs, rhos, Ms, Ns, Ks;

var rys = [];
var muys = [];
var ry, muy;

var ryCum = [];
var muyCum = [];
var rysCum = [];
var muysCum = [];

var rr = new Pt(5, 3, 4, 7, 8, 7);
var mu = new Pt(1, 1, 1, 1, 1, 1);
var vi = new Pt(1, 1, 1);
var vo = new Pt(1, 1, 1);
var qi = new Pt(1, 1, 1, 1, 1, 1);
var qo = new Pt(1, 1, 1, 1, 1, 1);

var inits = Group.fromArray([[1 / 3, 1 / 3, 1 / 3]]);

const depth = 10;
const icenter = Group.fromArray([math.ones(Ei.length)._data]).divide(Ei.length);
const iones = new Pt(1, 1, 1); //new Pt(math.ones(1,iaxes.length));

space.add({
  start: (bound, space) => {
    let node_radius = 10;

    ORIG = space.center;
    AXES = AXES.map((t) => t.$add(ORIG[0]));

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

    axesHandles = AXES.map((h, a) => {
      var temp, tempx, tempy;
      let ud = UIDragger.fromCircle([h, [2, 2]]);
      ud.onDrop((ui, pt) => {
        useVOpt = false;
      });
      ud.onDrag((ui, pt) => {
        useVOpt = true;
        // drag handling
        tempy = space.pointer[1];
        tempx = ui.group[0][0];
        rr[a] = (rorigin[1] - tempy) * (1 / rwid);
        ui.group[0].to([tempx, tempy - ui.state("offset")[1]]);
      });
      ud.onHover(
        // hover handling
        (ui) => ui.group[1].scale(10),
        (ui) => ui.group[1].scale(1 / 10)
      );
      return ud;
    });

    vecHandles = vecs.map((h, i) => {
      var temp;
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onDrag((ui, pt) => {
        temp = space.pointer;
        ui.group[0].to(temp.$subtract(ui.state("offset")));
      });
      ud.onHover(
        (ui) => {
          ui.group[1].scale(2);
        },
        (ui) => {
          ui.group[1].scale(1 / 2);
        }
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

    // let tt = (time % 5000) / 5000;
    // BASE VARIABLES

    iorig = origHandles[0].group[0];
    aorig = axesHandles[0].group[0];

    let Ndraw = P.$matrixMultiply(Pi.$matrixMultiply(aaxes));
    form.stroke("rgba(0,0,0,0.2", 1).polygon(Polygon.convexHull(Ndraw));
    //form.fillOnly("rgba(0,0,0,0.1", 1).polygon(Polygon.convexHull(Ndraw));
    //form.strokeOnly("rgba(0,0,0,0.2", 1).polygon(Polygon.convexHull(Ndraw.slice(3,6)));
    form
      .fillOnly("rgba(0,0,0,0.1", 1)
      .polygon(Polygon.convexHull(Ndraw.slice(3, 6)));

    rhotdraw = rhot.map((t) => t.$matrixMultiply(iaxes)[0]);
    form.strokeOnly("rgba(0,0,0,1", 2).line(rhotdraw);
    form.stroke("rgba(0,0,0,1").points(rhotdraw, 2, "circle");
    ytdraw = yt.map((t) => t.$matrixMultiply(aaxes)[0]);
    form.strokeOnly("rgba(0,0,0,1", 2).line(ytdraw);
    form.strokeOnly("rgba(0,0,0,1").points(ytdraw, 2, "circle");

    //form.stroke("#f3f", 3).line([actions[1], actions[2]]);
    //form.stroke("#f3f", 3).line(space.center.$add(actions[0]), space.center.$add(actions[1]));
    // form.fill("#123").point(actions, 5);

    // form.fillOnly("rgba(0,0,0,0.2").circles(icircles)
    form.fill("rgba(0,0,0,1").circles(acircles);
    form.fill("rgba(0,0,0,1").circles(rhocircles);

    form.fillOnly("rgba(200,0,0,0.3)").polygon(ahull3);
    form.strokeOnly("rgba(0,0,0,1)", 3).polygon(ahull3);

    let gcircles = iaxes.map((t) =>
      Circle.fromCenter(t.$subtract(ocenter).$multiply(0.5).$add(gcenter), 16)
    );
    let fcircles = iaxes.map((t, s) =>
      Circle.fromCenter(
        t.$subtract(ocenter).$multiply(0.5).$add(gcenter),
        16 * math.max(rhowid[s], 0.001)
      )
    );

    form.fillOnly("rgba(100,100,255,0.5").circles(fcircles);
    // XX[1] = rr.$multiply(-rwid);
    // XX = XX.$zip();
    // XX = XX.map((t) => t.$add(rorigin.$add([200, 0])));
    // let YYi = Group.fromArray(ys).$matrixMultiply(XX);

    // form.strokeOnly("rgba(100,100,100,1", 2).polygon(Polygon.convexHull(XX));
    // form.strokeOnly("rgba(100,100,100,1", 2).polygon(Polygon.convexHull(YYi));

    //////// ???????????????????

    let XXi = iaxes.map((t) => t.$subtract(ocenter)).$zip();
    XXi = XXi.map((t) => t.$multiply(0.25));
    let XXiOpt = XXi.clone();
    XXi[1] = vi.$multiply(-rwid);
    XXiOpt[1] = viOpt.$multiply(-rwid);
    XXi = XXi.$zip();
    XXiOpt = XXiOpt.$zip();
    // form.fill("rgba(255,200,0,0.6", 2).rects(murects);
    // let voOpthull = XXoOpt.map((t) => t.$add(voorigin));
    // form
    //   .strokeOnly("rgba(100,100,100,1", 2)
    //   .polygon(Polygon.convexHull(vihull));

    origHandles.forEach((h, i) => {
      h.group[0].to(ORIG[i]);
      h.render((g) => form.circle(g));
    });
    axesHandles.forEach((h, i) => {
      h.group[0].to(AXES[i]);
      h.render((g) => form.circle(g));
    });

    var blip = 5;
    var iDIRECTS = AXES.slice(0, blip).map((t) => t.$subtract(ORIG[0]));

    for (let i = 0; i < Pis.length; i++) {
      if (rhoshow[i]) {
        let rhocube;
        let temp = rhos[i];
        rhocube = iaxes.map((t, s) => t.$subtract(iorig).$multiply(temp[s]));
        CUBEE[iaxes.length].map((t) =>
          form
            .stroke("rgba(0,0,0,0.3)", 1)
            .line(t.$matrixMultiply(rhocube).map((h) => h.$add(iorig)))
        );
      }
    }
  },

  action: (type, px, py) => {
    UI.track(vecsHandles, type, new Pt(px, py));
    UI.track(origHandles, type, new Pt(px, py));
    UI.track(axesHandles, type, new Pt(px, py));
  }
});

//// ----

space.bindMouse().bindTouch().play();
