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
} from "./nDim.js";
console.log("running mdp...");
Pts.namespace(window);
var space = new CanvasSpace("#fig"); //figs"); //document.getElementById("blip"));
space.setup({
  bgcolor: "#5E5A80", // #FEFCFF //"#87CEFA", // #5E5A80
  resize: true,
  retina: true
});
var form = space.getForm();

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
const ieye = Group.fromArray([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]); //math.identity(iaxes.length);

// integrateMDP(Ei,W,Pis,x0s,nT,nk,n0,tags,Ei,W)
out = integrateMDP(inits, Pi, Pis, W, Ei, depth, inits.length, Pis.length);
var Mts = out.Mts;
var Nts = out.Nts;
var Kts = out.Kts;
var rhots = out.rhots;
var yts = out.yts;
var xts = out.xts;
var Ms = out.Ms;
var Ns = out.Ns;
var Ks = out.Ks;
var rhos = out.rhos;
var ys = out.ys;
var xs = out.xs;

var Mt = out.Mt;
var Nt = out.Nt;
var Kt = out.Kt;
var rhot = out.rhot;
var yt = out.yt;
var xt = out.xt;
var M = out.M;
var N = out.N;
var K = out.K;
var rho = out.rho;
var y = out.y;
var x = out.x;

const iinds = [0, 1, 2, 0, 1, 2, 0, 1, 2];
const oinds = [0, 0, 0, 1, 1, 1, 2, 2, 2];

var bi = 0;

var oneWay = [];
var bothWays = [];
var selfLoops = [];

out = tagEdges(oinds, iinds);
var oneWay = out.oneWay;
var bothWays = out.bothWays;
var selfLoops = out.selfLoops;

var pto, pti, diff, arrow, phi, rotphi, ptoi;
const degs360 = math.range(0, 360)._data;
const div100 = new Pt(math.range(0, 1, 0.01)._data);
// const circ360 = Group.fromArray([math.cos(2*3.141 e5*(1/360)*degs360)
//                                  math.sin(2*3.1415*(1/360)*degs360)]).$zip();

var ocenter;
var gcenter;
var extrudez = new Pt([0, -30]);

var rr = new Pt(5, 3, 4, 7, 8, 7);
var mu = new Pt(0, 0, 0, 0, 0, 0);
var vi = new Pt(1, 1, 1);
var vo = new Pt(1, 1, 1);
var qi = new Pt(1, 1, 1, 1, 1, 1);
var qo = new Pt(1, 1, 1, 1, 1, 1);
var lam;

var lamOpt = 6;
var viOpt = new Pt(1, 4, 2);
var voOpt = viOpt.$add(lamOpt);
var v0 = new Pt(40, -40, 40);
var lam0 = 20;

var muOpt = new Pt(1, 1, 1, 1, 1, 1);

var maxi;
var M, Mi, Mo;
var lamUp, blip;

out = markovOpt(rr, ys, P, Pis);
lamOpt = out.lamOpt;
viOpt = out.viOpt;
voOpt = out.voOpt;

out = markovUp(rr, ys, vi, P, A, Pis);
lam = out.lam;
lamUp = out.lamUp;
mu = out.mu;

var ashow = [];
var yshow = [];
var rhoshow = [];
for (let a = 0; a < rr.length; a++) {
  ashow[a] = false;
}
for (let i = 0; i < rr.length; i++) {
  yshow[i] = false;
  rhoshow[i] = false;
}

const ainds = [
  [0, 1],
  [1, 3],
  [3, 6]
];

const aeinds = [
  [0, 3],
  [3, 6],
  [3, 6],
  [6, 9],
  [6, 9],
  [6, 9]
];

// var AA = Group.fromArray([[1,1,-1,-1],[-1,1,1,-1]])
var AA = Group.fromArray([
  [1, -1, -1, 1, -1],
  [1, 1, -1, -1, 0]
]);

var initHover;
var useVOpt;
const aspect = 1.0;
var sx, sy, ss;

const cumSum = ((sum) => (value) => (sum += value))(0);

space.add({
  start: (bound, space) => {
    let node_radius = 10;

    iorigin = space.center.$add(ishift);
    aorigin = space.center.$add(ashift);
    viorigin = space.center.$add(vishift);
    voorigin = space.center.$add(voshift);
    qorigin = space.center.$add(qshift);
    rorigin = space.center.$add(rshift);
    storigin = space.center.$add(stshift);
    st2origin = space.center.$add(st2shift);

    ORIG[0] = space.center.$add(ORIG[0]);
    AXES = AXES.map((t) => t.$add(ORIG[0]));

    iaxes = iaxes.map((t) => t.$add(iorigin));
    aaxes = aaxes.map((t) => t.$add(aorigin));

    iorig = space.center.$add(iorigshift);
    aorig = space.center.$add(aorigshift);

    ocenter = iaxes.reduce((a, b) => a.$add(b));
    ocenter = ocenter.$multiply(1 / iaxes.length);
    gcenter = space.center.$add(gshift);

    let rhosdraw = Group.fromArray(rhos).$matrixMultiply(iaxes);
    let ysdraw = Group.fromArray(ys).$matrixMultiply(aaxes);

    rdraw = [];
    for (let a = 0; a < rr.length; a++) {
      rdraw[a] = rorigin.$add([rbase[a] + 0.5 * rwid, -rwid * rr[a]]);
    }
    rdraw = Group.fromPtArray(rdraw);

    temp = markovOpt(rr, ys, P, Pis);
    lamOpt = temp.lamOpt;
    viOpt = temp.viOpt;
    voOpt = temp.voOpt;

    vi = viOpt.clone();
    lam = lamOpt;
    vo = vi.$add(lam);
    v0 = vi.clone();

    lamdraw = [viorigin.$subtract([0, -rwid * lam])];
    vidraw = [];
    vodraw = [];
    for (let s = 0; s < iaxes.length; s++) {
      vidraw[s] = viorigin.$add([
        iaxes[s].$subtract(ocenter)[0] * 0.25,
        rwid * -vi[s]
      ]);
      vodraw[s] = voorigin.$add([
        iaxes[s].$subtract(ocenter)[0] * 0.25,
        rwid * -vo[s]
      ]);
    }
    vidraw = Group.fromPtArray(vidraw);
    vodraw = Group.fromPtArray(vodraw);

    initsdraw = inits.$matrixMultiply(iaxes);
    actions = W.$matrixMultiply(Ei).$matrixMultiply(iaxes);
    pis = Pi.$matrixMultiply(actions);

    // HANDLERS  HANDLERS  HANDLERS  HANDLERS
    // HANDLERS  HANDLERS  HANDLERS  HANDLERS
    // HANDLERS  HANDLERS  HANDLERS  HANDLERS
    // HANDLERS  HANDLERS  HANDLERS  HANDLERS
    // HANDLERS  HANDLERS  HANDLERS  HANDLERS

    // rHandles = rdraw.map((h, i) => {
    //   let ud = UIDragger.fromCircle([h, [10, 10]]);
    //   ud.onDrag((ui, pt) => {
    //     rr[i] = (space.pointer[1] - rorigin.$add(rbase[i])[1]) * (1 / rwid);
    //     ui.group[0].to(space.pointer.$subtract(ui.state("offset")));
    //   });
    // });

    rHandles = rdraw.map((h, a) => {
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
        out = markovOpt(rr, ys, P, Pis);
        lamOpt = out.lamOpt;
        viOpt = out.viOpt;
        voOpt = out.voOpt;
        out = markovUp(rr, ys, vi, P, A, Pis);
        lam = out.lam;
        lamUp = out.lamUp;
        mu = out.mu;
      });

      ud.onHover(
        // hover handling
        (ui) => ui.group[1].scale(10),
        (ui) => ui.group[1].scale(1 / 10)
      );
      return ud;
    });

    lamHandles = lamdraw.map((h, i) => {
      var temp;
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onDrag((ui, pt) => {
        temp = space.pointer;
        temp[1] = math.min(viorigin[1] - lamUp * rwid, temp[1]);
        lam = (viorigin[1] - temp[1]) / rwid;
        ui.group[0].to(temp.$subtract(ui.state("offset")));
        //dt = math.min((lam - lamOpt) / (lam0 - lamOpt + 0.001), 1);
        //vi = v0.$subtract(viOpt).$multiply(dt).$add(viOpt);
        //vo = vi.$add(lam);
        out = markovUp(rr, ys, vi, P, A, Pis);
        lam = out.lam;
        lamUp = out.lamUp;
        mu = out.mu;
      });
      // ud.onDrop((ui, pt) => {
      //   lam0 = lam;
      // });
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

    viHandles = vidraw.map((h, s) => {
      var tempx, tempy;
      let ud = UIDragger.fromCircle([h, [2, 2]]);
      ud.onDrag((ui, pt) => {
        if (s == 0) {
          tempy = viorigin[0][1];
        } else {
          tempy = space.pointer[1];
          vi[s] = (viorigin[1] - tempy) * (1 / rwid);
        }
        tempx = ui.group[0][0];
        ui.group[0].to([tempx, tempy - ui.state("offset")[1]]);
        out = markovUp(rr, ys, vi, P, A, Pis);
        lam = out.lam;
        lamUp = out.lamUp;
        mu = out.mu;
      });
      // ud.onDrop((ui, pt) => {
      //   //xv0 = vi.clone();
      //   lam0 = lam;
      // });
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

    initHandles = initsdraw.map((h, i) => {
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onDrag((ui, pt) => {
        var project = intersectPolyPt(iaxes, space.pointer);
        ui.group[0].to(project.$subtract(ui.state("offset")));
        inits[i] = convexComb2n(ui.group[0], iaxes.$zip());

        out = integrateMDP(
          inits,
          Pi,
          Pis,
          W,
          Ei,
          depth,
          inits.length,
          Pis.length
        );
        Mts = out.Mts;
        Nts = out.Nts;
        Kts = out.Kts;
        rhots = out.rhots;
        yts = out.yts;
        xts = out.xts;
        rhos = out.rhos;
        ys = out.ys;
        xs = out.xs;

        Mt = out.Mt;
        Nt = out.Nt;
        Kt = out.Kt;
        rhot = out.rhot;
        yt = out.yt;
        xt = out.xt;
        rho = out.rho;
        y = out.y;
        x = out.x;

        out = markovOpt(rr, ys, P, Pis);
        lamOpt = out.lamOpt;
        viOpt = out.viOpt;
        voOpt = out.voOpt;
      });
      // ud.onDrop((ui, pt) => {
      //   updateTraj(5, ["i", "a"]);
      // });
      ud.onHover(
        (ui) => {
          ui.group[1].scale(2);
          initHover = true;
        },
        (ui) => {
          ui.group[1].scale(1 / 2);
          initHover = false;
        }
      );
      return ud;
    });

    ihandles = iaxes.map((h) => {
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onDrag((ui, pt) => {
        // drag handling
        ui.group[0].to(space.pointer.$subtract(ui.state("offset")));
      });
      ud.onHover(
        // hover handling
        (ui) => ui.group[1].scale(2),
        (ui) => ui.group[1].scale(1 / 2)
      );
      return ud;
    });

    pihandles = pis.map((h, i) => {
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onDrag((ui, pt) => {
        let temp = P.$zip().$matrixMultiply(iaxes);
        var project;
        if (i != 0) {
          project = intersectPolyPt(
            temp.slice(ainds[i][0], ainds[i][1]),
            space.pointer
          );
        } else {
          project = temp[0];
        }
        ui.group[0].to(project.$subtract(ui.state("offset")));
        let Pslice = P.$zip().slice(ainds[i][0], ainds[i][1]);
        Pslice = Pslice.$matrixMultiply(iaxes);
        // console.log(ui.state("offset"))
        let pii = convexComb2n(ui.group[0], Pslice.$zip());
        for (let j = 0; j < ainds[i][1] - ainds[i][0]; j++) {
          Pi[ainds[i][0] + j][i] = pii[j];
        }

        out = integrateMDP(
          inits,
          Pi,
          Pis,
          W,
          Ei,
          depth,
          inits.length,
          Pis.length
        );
        Mts = out.Mts;
        Nts = out.Nts;
        Kts = out.Kts;
        rhots = out.rhots;
        yts = out.yts;
        xts = out.xts;
        rhos = out.rhos;
        ys = out.ys;
        xs = out.xs;

        Mt = out.Mt;
        Nt = out.Nt;
        Kt = out.Kt;
        rhot = out.rhot;
        yt = out.yt;
        xt = out.xt;
        rho = out.rho;
        y = out.y;
        x = out.x;
      });
      // ud.onDrop((ui, pt) => {
      //   updateTraj(5, ["i"]);
      // });
      ud.onHover(
        // hover handling
        (ui) => ui.group[1].scale(2),
        (ui) => ui.group[1].scale(1 / 2)
      );
      return ud;
    });

    aHandles = actions.map((h, i) => {
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onDrop((ui, pt) => {
        useVOpt = false;
      });
      ud.onDrag((ui, pt) => {
        useVOpt = true;
        var temp;
        let project = intersectPolyPt(iaxes, space.pointer);
        ui.group[0].to(project.$subtract(ui.state("offset")));
        let Pa = convexComb2n(ui.group[0], iaxes.$zip());
        for (let j = 0; j < aeinds[i][1] - aeinds[i][0]; j++) {
          P[j][i] = Pa[j];
          W[aeinds[i][0] + j][i] = Pa[j];
        }
        out = markovOpt(rr, ys, P, Pis);
        lamOpt = out.lamOpt;
        viOpt = out.viOpt;
        voOpt = out.voOpt;
        out = markovUp(rr, ys, vi, P, A, Pis);
        lam = out.lam;
        lamUp = out.lamUp;
        mu = out.mu;
      });
      // ud.onDrop((ui, pt) => {
      //   updateTraj(5, ["i", "a"]);
      // });
      ud.onHover(
        (ui) => {
          ui.group[1].scale(2);
          ashow[i] = true;
        },
        (ui) => {
          ui.group[1].scale(1 / 2);
          ashow[i] = false;
        }
      );
      return ud;
    });

    rhoHandles = rhosdraw.map((h, i) => {
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onHover(
        (ui) => {
          rhoshow[i] = true;
        },
        (ui) => {
          rhoshow[i] = false;
        }
      );
      return ud;
    });

    yHandles = ysdraw.map((h, i) => {
      let ud = UIDragger.fromCircle([h, [10, 10]]);
      ud.onHover(
        (ui) => {
          yshow[i] = true;
        },
        (ui) => {
          yshow[i] = false;
        }
      );
      return ud;
    });

    origHandles = ORIG.map((h, i) => {
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

    iorigHandles = [iorigin].map((h, i) => {
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

    aorigHandles = [aorigin].map((h, i) => {
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
  //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE //// ANIMATE ////

  animate: (time, ftime) => {
    space.clear("transparent");

    sx = space.width / aspect;
    sy = space.height;
    ss = math.min(sx, sy);

    let tt = (time % 5000) / 5000;
    var ii;
    if (initHover) {
      ii = 0;
    } else {
      ii = math.floor(yts.length * tt);
    }

    // BASE VARIABLES
    ocenter = iaxes.reduce((a, b) => a.$add(b));
    ocenter = ocenter.$multiply(1.0 / iaxes.length);
    let adraw = W.$matrixMultiply(Ei).$matrixMultiply(iaxes);
    //let adrawa = W.$zip().$matrixMultiply(aaxes);
    pis = Pi.$matrixMultiply(actions);
    let initsdraw = inits.$matrixMultiply(iaxes);
    let rhosdraw = Group.fromArray(rhos).$matrixMultiply(iaxes);
    let ysdraw = Group.fromArray(ys).$matrixMultiply(aaxes);
    let xwid = W.$zip().map((t) => 3 * t.dot(yt[ii][0]));
    let rhowid = W.$matrixMultiply(Eo)
      .$zip()
      .map((t) => 3 * t.dot(yt[ii][0]));

    iorig = iorigHandles[0].group[0];
    aorig = aorigHandles[0].group[0];

    // pis = pihandles.map((h) => h.group[0]);
    // ihandles[0].group[0].to(space.center);

    // SHAPE CONSTRUCTION // SHAPE CONSTRUCTION
    // SHAPE CONSTRUCTION // SHAPE CONSTRUCTION
    let Mthull = Mt.map((h) => Polygon.convexHull(h.$matrixMultiply(iaxes)));

    let Pitdraw = Mt.map((h) => h.$matrixMultiply(Pi.$matrixMultiply(aaxes)));
    if (Pitdraw.length > 0) {
      let Pithull = Pitdraw.map((h) => Polygon.convexHull(h));
      let Nthull = Pitdraw.map((h) => Polygon.convexHull(P.$matrixMultiply(h)));
      let N3thull = Pitdraw.map((h) =>
        Polygon.convexHull(P.slice(3, 6).$matrixMultiply(h))
      );

      Nthull.map((h) => {
        form.strokeOnly("rgba(0,0,0,0.2)", 1).polygon(h);
        //form.fillOnly("rgba(0,0,0,0.05)").polygon(h);
      });
      N3thull.map((h) => {
        //form.strokeOnly("rgba(0,0,0,0.2)", 1).polygon(h);
        form.fillOnly("rgba(0,0,0,0.1)").polygon(h);
      });

      Mthull.map((h) => {
        form.stroke("rgba(0,0,0,0.2)", 1).polygon(h);
        //form.fillOnly("rgba(0,0,0,0.05)").polygon(h);
      });

      Pithull.map((h) => {
        form.strokeOnly("rgba(0,0,0,0.05)", 1).polygon(h);
        //form.fillOnly("rgba(0,0,0,0.05)").polygon(h);
      });
    }

    let Pidraw = Pi.$matrixMultiply(aaxes);
    form
      .stroke("rgba(0,0,0,0.2", 1)
      .polygon(Polygon.convexHull(Pidraw.multiply(ss)));
    //form.fillOnly("rgba(0,0,0,0.1", 1).polygon(Polygon.convexHull(Pidraw));

    let Ndraw = P.$matrixMultiply(Pi.$matrixMultiply(aaxes));
    form
      .stroke("rgba(0,0,0,0.2", 1)
      .polygon(Polygon.convexHull(Ndraw.multiply(ss)));
    //form.fillOnly("rgba(0,0,0,0.1", 1).polygon(Polygon.convexHull(Ndraw));
    //form.strokeOnly("rgba(0,0,0,0.2", 1).polygon(Polygon.convexHull(Ndraw.slice(3,6)));
    form
      .fillOnly("rgba(0,0,0,0.1", 1)
      .polygon(Polygon.convexHull(Ndraw.slice(3, 6)));

    let Mhull = Polygon.convexHull(pis);
    let ahull = Polygon.convexHull(adraw);
    let ahull3 = Polygon.convexHull(adraw.slice(3, 6));

    let rhoshull = Polygon.convexHull(rhosdraw);
    let rhoshull1 = Polygon.convexHull(rhosdraw.slice(0, 3));
    let rhoshull2 = Polygon.convexHull(rhosdraw.slice(3, 6));

    let yshull = Polygon.convexHull(ysdraw);
    let yshull1 = Polygon.convexHull(ysdraw.slice(0, 3));
    let yshull2 = Polygon.convexHull(ysdraw.slice(3, 6));

    let icircles = iaxes.map((t) => Circle.fromCenter(t, 10));
    let rhocircles = rhos.map((t) => Circle.fromCenter(t, 3));
    let acircles = actions.map((t) => Circle.fromCenter(t, 4));

    // SHAPE DRAWING // SHAPE DRAWING // SHAPE DRAWING
    // SHAPE DRAWING // SHAPE DRAWING // SHAPE DRAWING

    form.stroke("rgba(0,0,0,1", 3).circles(icircles);
    form.stroke("rgba(0,0,0,1", 3).polygon(Polygon.convexHull(iaxes));

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

    //form.strokeOnly("rgba(0,0,0,1)").polygon(Mhull);

    form.fillOnly("rgba(200,0,0,0.3", 2).polygon(Polygon.convexHull(aaxes));
    form
      .strokeOnly("rgba(0,0,0,1)", 2)
      .polygon(Polygon.convexHull(aaxes.slice(3, 6)));

    form.fillOnly("rgba(0,0,200,0.3)").polygon(rhoshull);
    form.strokeOnly("rgba(0,0,0,1)").polygon(rhoshull);

    form.fillOnly("rgba(0,0,200,0.3)").polygon(yshull);
    form.strokeOnly("rgba(0,0,0,1)").polygon(yshull);

    // form.strokeOnly("rgba(0,0,0,1)").polygon(rhoshull1);
    // form.strokeOnly("rgba(0,0,0,1)").polygon(rhoshull2);
    // form.strokeOnly("rgba(0,0,0,1)").polygon(yshull1);
    // form.strokeOnly("rgba(0,0,0,1)").polygon(yshull2);

    // HANDLES RENDERING // HANDLES RENDERING // HANDLES RENDERING
    // HANDLES RENDERING // HANDLES RENDERING // HANDLES RENDERING
    form.fillOnly("rgba(200,0,0,0.3", 2).polygon(ahull);
    form.strokeOnly("rgba(0,0,0,1)", 2).polygon(ahull);
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

    form.fill("rgba(200,200,200,0.3").circles(gcircles);
    form.fillOnly("rgba(100,100,255,0.5").circles(fcircles);

    // let rysCum = rys.map((t) => t.map(cumSum));
    // let muyCum = muy.map(cumSum);
    // let muysCum = muys.map((t) => t.map(cumSum));

    let XX = aaxes.map((t) => t.$subtract(aorigin).$multiply(0.25)); //new Group(aaxes.$zip()[0], aaxes.$zip()[1]);
    XX = XX.$zip();
    XX[1] = rr.$multiply(-rwid);
    XX = XX.$zip();
    XX = XX.map((t) => t.$add(rorigin.$add([200, 0])));
    let YYi = Group.fromArray(ys).$matrixMultiply(XX);

    form.strokeOnly("rgba(100,100,100,1", 2).polygon(Polygon.convexHull(XX));
    form.strokeOnly("rgba(100,100,100,1", 2).polygon(Polygon.convexHull(YYi));

    ry = rr.$multiply(y);
    ryCum = [0];
    ry.reduce((a, b, i) => {
      ryCum[i + 1] = a + b;
    }, 0);

    muy = mu.$multiply(y);
    muyCum = [0];
    muy.reduce((a, b, i) => {
      muyCum[i + 1] = a + b;
    }, 0);
    rysCum = [];
    var sm = 0;
    for (let i = 0; i < Pis.length; i++) {
      rysCum[i] = [0];
      rys[i] = rr.$multiply(ys[i]);
      let sm = 0;
      rysCum[i] = rys[i].map((t) => (sm += t));
      muysCum[i] = [0];
      muys[i] = mu.$multiply(ys[i]);
      sm = 0;
      muysCum[i] = muys[i].map((t) => (sm += t));
    }

    let rects = [];
    for (let a = 0; a < rr.length; a++) {
      rects[a] = Rectangle.fromTopLeft(
        rorigin.$add([rbase[a], 0]),
        rwid,
        -rwid * rr[a]
      );
    }
    form.fill("rgba(200,200,200,0.6", 2).rects(rects);

    for (let i = 0; i < Pis.length; i++) {
      let rects = [];
      for (let a = 0; a < rr.length; a++) {
        rects[a] = Rectangle.fromTopLeft(
          storigin.$add([stbase[i], -stwid * rysCum[i][a]]),
          stwid,
          stwid * rys[i][a]
        );
      }
      form.strokeOnly("rgba(100,100,100,1.", 2).rects(rects);
    }

    for (let i = 0; i < Pis.length; i++) {
      let rrects = [];
      let murects = [];
      for (let a = 0; a < rr.length; a++) {
        rrects[a] = Rectangle.fromTopLeft(
          st2origin.$add([stbase[i], -stwid * rysCum[i][a]]),
          stwid,
          stwid * rys[i][a]
        );
        murects[a] = Rectangle.fromTopLeft(
          st2origin.$add([
            stbase[i],
            -stwid * (rysCum[i][rr.length - 1] + muysCum[i][a])
          ]),
          stwid,
          stwid * muys[i][a]
        );
      }
      form.fill("rgba(100,50,200,0.3", 1).rects(rrects);
      form.fill("rgba(255,200,0,0.3", 1).rects(murects);
    }

    for (let a = 0; a < rr.length; a++) {
      form
        .strokeOnly("rgba(100,100,100,0.2", 2)
        .line(Group.fromPtArray([rHandles[a].group[0], XX[a]]));
    }

    for (let i = 0; i < Pis.length; i++) {
      let temp = new Pt([
        storigin[0] + stbase[i] + stwid * 0.5,
        storigin[1] - stwid * rysCum[i][rr.length - 1]
      ]);
      form
        .strokeOnly("rgba(100,100,100,0.2", 2)
        .line(Group.fromPtArray([temp, YYi[i]]));
    }
    /// ????????????????
    /// ????????????????

    out = markovOpt(rr, ys, P, Pis);
    lamOpt = out.lamOpt;
    viOpt = out.viOpt;
    voOpt = out.voOpt;

    out = markovUp(rr, ys, vi, P, A, Pis);
    lam = out.lam;
    lamUp = out.lamUp;
    mu = out.mu;

    // if (useVOpt) {
    //   vi = viOpt;
    //   lam = lamOpt;
    // }
    //vi = viOpt.clone();
    vo = vi.$add(lam);

    for (let s = 0; s < iaxes.length; s++) {
      vidraw[s] = viorigin.$add([
        iaxes[s].$subtract(ocenter)[0] * 0.25,
        rwid * -vi[s]
      ]);
      vodraw[s] = voorigin.$add([
        iaxes[s].$subtract(ocenter)[0] * 0.25,
        rwid * -vo[s]
      ]);
    }
    vidraw = Group.fromPtArray(vidraw);
    vodraw = Group.fromPtArray(vodraw);

    /// ????????????????
    /// ????????????????

    let XXi = iaxes.map((t) => t.$subtract(ocenter)).$zip();
    XXi = XXi.map((t) => t.$multiply(0.25));
    let XXiOpt = XXi.clone();
    XXi[1] = vi.$multiply(-rwid);
    XXiOpt[1] = viOpt.$multiply(-rwid);
    XXi = XXi.$zip();
    XXiOpt = XXiOpt.$zip();
    let XXo = XXi.map((t) => t.$add([0, -rwid * lam]));
    let XXoOpt = XXiOpt.map((t) => t.$add([0, -rwid * lam]));

    YYi = P.$matrixMultiply(XXi);
    let YYo = A.$matrixMultiply(XXo);

    let rrects = [];
    let qlines = [];
    let vlines = [];
    let murects = [];
    for (let a = 0; a < rr.length; a++) {
      rrects[a] = Rectangle.fromTopLeft(
        //viorigin.$add([YY[a][0] - 0.25 * rwid, YY[a][1]]),
        qorigin.$add([qbase[a], YYi[a][1]]),
        rwid * 0.5,
        -rwid * rr[a]
      );
      murects[a] = Rectangle.fromTopLeft(
        //viorigin.$add([YY[a][0] - 0.25 * rwid, YY[a][1] - rwid * rr[a]]),
        qorigin.$add([qbase[a], YYi[a][1] - rwid * rr[a]]),
        rwid * 0.5,
        -rwid * mu[a]
      );

      qlines[a] = new Group(
        viorigin.$add([YYi[a][0] - 0.25 * rwid, YYi[a][1]]),
        qorigin.$add([qbase[a], YYi[a][1]])
      );
      vlines[a] = new Group(
        voorigin.$add([YYo[a][0], YYo[a][1]]),
        qorigin.$add([qbase[a], YYi[a][1] - rwid * (rr[a] + mu[a])])
      );
    }

    form.strokeOnly("rgba(0,0,0,1", 1).lines(qlines);
    form.strokeOnly("rgba(0,0,0,1", 1).lines(vlines);
    form.fill("rgba(100,100,255,0.6", 2).rects(rrects);
    form.fill("rgba(255,200,0,0.6", 2).rects(murects);
    let vihull = XXi.map((t) => t.$add(viorigin));
    let viOpthull = XXiOpt.map((t) => t.$add(viorigin));
    let qihull = YYi.map((t) => t.$add(viorigin));
    let vohull = XXo.map((t) => t.$add(voorigin));
    let voOpthull = XXoOpt.map((t) => t.$add(voorigin));

    // form
    //   .stroke("rgba(0,0,0,1", 2)
    //   .line([viorigin.$add([200, 0]), viorigin.$add([-200, 0])]);

    // form
    //   .stroke("rgba(0,0,0,1", 2)
    //   .line([
    //     viorigin.$add([200, -rwid * lamOpt]),
    //     viorigin.$add([-200, -rwid * lamOpt])
    //   ]);

    form
      .stroke("rgba(0,0,0,1", 2)
      .line([
        st2origin.$add([200, -rwid * lam]),
        st2origin.$add([0, -rwid * lam])
      ]);

    form
      .strokeOnly("rgba(100,100,100,1", 2)
      .polygon(Polygon.convexHull(vihull));

    form
      .strokeOnly("rgba(100,100,100,0.5", 1)
      .polygon(Polygon.convexHull(viOpthull));

    form
      .strokeOnly("rgba(100,100,100,1", 2)
      .polygon(Polygon.convexHull(vohull));
    form
      .strokeOnly("rgba(100,100,100,0.5", 1)
      .polygon(Polygon.convexHull(voOpthull));

    form.strokeOnly("rgba(100,100,100,1", 2).polygon(qihull);

    // for (let i = 0; i < Pis.length; i++) {
    //   let rects = [];
    //   for (let a = 0; a < rr.length; a++) {

    iorigHandles.forEach((h, i) => {
      //h.group[0].to(iorig);
      h.render((g) => form.circle(g));
    });

    aorigHandles.forEach((h, i) => {
      //h.group[0].to(aorig);
      h.render((g) => form.circle(g));
    });

    ihandles.forEach((h, i) => {
      h.group[0].to(iaxes[i]);
      //h.render((g) => form.circle(g));
    });
    aHandles.forEach((h, i) => {
      h.group[0].to(adraw[i]);
      //h.render((g) => form.circle(g));
    });
    initHandles.forEach((h, i) => {
      h.group[0].to(initsdraw[i]);
      h.render((g) => form.circle(g));
    });
    pihandles.forEach((h, i) => {
      h.group[0].to(pis[i]);
      //h.render((g) => form.circle(g));
    });
    rHandles.forEach((h, i) => {
      h.group[0].to(rdraw[i]);
      h.render((g) => form.circle(g));
    });

    lamHandles.forEach((h, i) => {
      h.group[0].to(lamdraw[i]);
      h.render((g) => form.circle(g));
    });

    viHandles.forEach((h, i) => {
      h.group[0].to(vidraw[i]);
      h.render((g) => form.circle(g));
    });

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

    drawGraph(form, iaxes, ocenter, oinds, iinds, selfLoops, oneWay, bothWays);
    // drawFlow(
    //   form,
    //   iaxes,
    //   ocenter,
    //   oinds,
    //   iinds,
    //   selfLoops,
    //   oneWay,
    //   bothWays,
    //   xwid
    // );

    for (let a = 0; a < rr.length; a++) {
      if (ashow[a]) {
        let acube;
        let temp = P.zipSlice(a);
        acube = iaxes.map((t, s) => t.$subtract(iorig).$multiply(temp[s]));
        CUBEE[iaxes.length].map((t) =>
          form
            .stroke("rgba(0,0,0,0.3)", 1)
            .line(t.$matrixMultiply(acube).map((h) => h.$add(iorig)))
        );
      }
    }

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

    for (let i = 0; i < Pis.length; i++) {
      if (yshow[i]) {
        let ycube;
        let temp = ys[i];
        ycube = aaxes.map((t, a) => t.$subtract(aorig).$multiply(temp[a]));
        CUBEE[aaxes.length].map((t) =>
          form
            .stroke("rgba(0,0,0,0.3)", 1)
            .line(t.$matrixMultiply(ycube).map((h) => h.$add(aorig)))
        );
      }
    }

    axesHandles.map((h, i) =>
      form.stroke("rgba(0,0,200,0.5", 6).line([ORIG[0], AXES[i]])
    );

    ihandles.map((h, i) =>
      form.stroke("rgba(0,0,0,0.5)", 1).line([iorig, iaxes[i]])
    );

    aHandles.map((h, i) =>
      form.stroke("rgba(0,0,0,0.5)", 1).line([aorig, aaxes[i]])
    );
  },

  action: (type, px, py) => {
    UI.track(initHandles, type, new Pt(px, py));
    UI.track(ihandles, type, new Pt(px, py));
    UI.track(rHandles, type, new Pt(px, py));
    UI.track(lamHandles, type, new Pt(px, py));
    UI.track(viHandles, type, new Pt(px, py));
    UI.track(aHandles, type, new Pt(px, py));
    UI.track(rhoHandles, type, new Pt(px, py));
    UI.track(yHandles, type, new Pt(px, py));
    UI.track(pihandles, type, new Pt(px, py));
    UI.track(origHandles, type, new Pt(px, py));
    UI.track(iorigHandles, type, new Pt(px, py));
    UI.track(aorigHandles, type, new Pt(px, py));
    UI.track(axesHandles, type, new Pt(px, py));
  }
});

//// ----

space.bindMouse().bindTouch().play();
