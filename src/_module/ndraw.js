import {
  simpCorners,
  simpEdges,
  ball1Corners,
  ball1Edges,
  cubeCorners,
  cubeEdges,
  v2aa,
  symEig
} from "/src/_module/ndim.js";

Pts.namespace(window);

export var maxDim = 10;
export var SIMPE = [[], []];
export var SIMP = simpCorners(maxDim);
for (let i = 2; i <= maxDim; i++) {
  SIMPE[i] = simpEdges(SIMP[i], i);
}

export var BALL1E = []; //[[], []];
export var BALL1 = ball1Corners(maxDim);
for (let i = 0; i <= maxDim; i++) {
  BALL1E[i] = ball1Edges(i);
}

// var SPHEREE=[[]];
// var SPHERE = sphereCorners(maxDim);
// for (let i=0; i<maxDim; i++) {
//   SPHEREE[i] = sphereEdges(SPHERE[i],i);
// }

export var CUBEE = [[]];
export var CUBEEi = [[]];
export var CUBE = cubeCorners(maxDim);

//OLD //OLD //OLD //OLD //OLD //OLD  - WITH NETWORK
// for (let i = 0; i < maxDim; i++) {
//   let temp = cubeEdges(CUBE[i], i, "network");
//   CUBEE[i] = temp["cubee"];
//   CUBEEi[i] = temp["cubeei"];
// }

for (let i = 0; i < maxDim; i++) {
  let temp = cubeEdges(CUBE, i, "regular");
  ///console.log(teste.concat([temp["cubee"]]));
  CUBEE[i] = temp["cubee"];
  CUBEEi[i] = temp["cubeei"];
}

// console.log(CUBEEi[4]);
// asdf;

// console.log(CUBEE[7].length);
// console.log(teste[7].length);
// console.log(teste);
// asdf;

export const cumSum = ((sum) => (value) => (sum += value))(0);

export function img2math(pointer, sx, orig) {
  return pointer.$subtract(orig).$multiply(1 / sx);
}

// export function createDraggers(pointer, A, obj, item) {
//   let draggers = A.map((h, i) => {
//     let ud = UIDragger.fromCircle([h, [10, 10]]);
//     ud.onDrag((ui, pt) => {
//       obj[item][i] = img2math(pointer, sx, orig);
//     });
//     ud.onHover(
//       // hover handling
//       (ui) => ui.group[1].scale(1.7),
//       (ui) => ui.group[1].scale(1 / 1.7)
//     );
//     return ud;
//   });
//   return draggers;
// }

export function updateDraggers(draggers, As) {
  draggers.map((h, i) => {
    draggers[i].map((g, j) => g.group[0].to(As[i][j]));
  });
}

export function ndraw(
  form,
  A,
  type,
  sx,
  orig,
  axes,
  pen,
  ind_passin = "all",
  B = null,
  shifts = [],
  dims = []
) {
  //////////////////////////////////////////////////////////////
  //// >>>>> TYPES >>>>>
  //// pts:
  //// stems:
  //// lines:
  //// arrows:
  //// hulls:
  //// simps:
  //// cubes:
  //// spheres:
  //// blocks:
  //// 1space;
  //// 2space;
  //// infspace;
  //// coords;
  //// cube_highlights

  var ind;
  if (type == "cube_highlights") {
    ind = "all";
  } else {
    ind = ind_passin;
  }

  let AA = A.$matrixMultiply(axes).map((h) => h.$multiply(sx));
  let sshifts = shifts;
  let ddims = dims;

  if (!(typeof ind === "string" || ind instanceof String)) {
    AA = ind.map((i) => AA[i]);
    sshifts = ind.map((i) => shifts[i]);
    ddims = ind.map((i) => dims[i]);
  }

  // console.log(BB);
  // let AA = BB.$matrixMultiply(axes);

  let mx = AA.length;
  let nx = AA[0].length;
  let nn = AA.length;

  //let spaces = [0.1, 0.13, 0.16, 0.19, 0.8, 0.9, 1.0, 1.1, 1.2];
  //let spaces = [0.8, 0.9, 1.0, 1.1, 1.2];
  var spaces = [0.7, 0.8, 0.9, 1, 1.1, 1.2];
  spaces = spaces.map((t) => math.sqrt(t));
  // var sspaces = [];
  // var temp;
  // for (let i = 8; i < 10; i++) {
  //   temp = spaces.map((t) => t * 0.1 * i);
  //   sspaces = sspaces.concat(temp);
  // }
  // spaces = sspaces;
  if (type == "pts") {
    //// POINTS //// POINTS //// POINTS //// POINTS ////
    //// POINTS //// POINTS //// POINTS //// POINTS ////
    let DD = AA;
    DD.map((t) =>
      form.stroke(pen["lrgba"], pen["lw"]).point(t.$add(orig), 2, "circle")
    );
  } else if (type == "boxes") {
    //// BOXES //// BOXES //// BOXES //// BOXES //// BOXES ////
    //// BOXES //// BOXES //// BOXES //// BOXES //// BOXES ////
    let bb = AA.map((h, i) => sshifts[i].$add(orig));
    let rects = bb.map((b, i) =>
      Rectangle.fromTopLeft(b, ddims[i][0], ddims[i][1])
    );
    form.stroke(pen["lrgba"], pen["lw"]).fill(pen["frgba"]).rects(rects);
  } else if (type == "arrows") {
    //// ARROWS //// ARROWS //// ARROWS //// ARROWS ////
    //// ARROWS //// ARROWS //
  } else if (type == "lines") {
    //// LINES //// LINES //// LINES //// LINES //// LINES ////
    //// LINES //// LINES //// LINES //// LINES //// LINES ////
  } else if (type == "stems") {
    //// STEMS //// STEMS //// STEMS //// STEMS //// STEMS ////
    //// STEMS //// STEMS //// STEMS //// STEMS //// STEMS ////
    let DD = AA.map((h) => h.$add(orig));
    let center = orig;
    // if ("ind" in item) { center = DD[item.ind] }
    let len = DD.length;
    DD.push(center);
    let stems = Polygon.network(DD, len);
    stems.map((t) => form.stroke(pen["lrgba"], pen["lw"]).line(t));
  } else if (type == "arrows") {
    //// ARROWS //// ARROWS //// ARROWS //// ARROWS ////
    //// ARROWS //// ARROWS //// ARROWS //// ARROWS ////
  } else if (type == "simps") {
    //// SIMPLEXES //// SIMPLEXES //// SIMPLEXES //// SIMPLEXES ////
    //// SIMPLEXES //// SIMPLEXES //// SIMPLEXES //// SIMPLEXES ////
    let DD = AA; //AA.$matrixMultiply(axes);
    SIMPE[nn].map((t) =>
      form
        .stroke(pen["lrgba"], pen["lw"])
        .line(t.$matrixMultiply(DD).map((h) => h.$add(orig)))
    );
    //let simphull = Polygon.convexHull(SIMP[n2].$matrixMultiply(DD).map((h)=>h.$add(orig)))
    let simphull = Polygon.convexHull(
      SIMP[nn].$matrixMultiply(DD).map((h) => h.$add(orig))
    );
    form.fill(pen["frgba"]).polygon(simphull);
  } else if (type == "1ball" || type == "1space") {
    //// 1BALL //// 1BALL //// 1BALL //// 1BALL //// 1BALL ////
    //// 1BALL //// 1BALL //// 1BALL //// 1BALL //// 1BALL ////
    let DD = AA;
    let sizes = [1.0];
    if (type == "1space") {
      sizes = spaces;
    }
    for (let k = 0; k < sizes.length; k++) {
      let DD = AA;
      DD = DD.map((t) => t.$multiply(sizes[k]));
      BALL1E[nn].map((t) => {
        let bb = 0.4;
        let rgba = "rgb(0,0,0," + String(bb + bb / (nn + 1)) + ")";
        let lx = 3;
        let lm = 0.1;
        let xx = 11;
        let lw = lx * (1 - nn / xx) + lm * (nn / xx);
        form
          .stroke(rgba, lw)
          .line(t.$matrixMultiply(DD).map((h) => h.$add(orig)));
      });
    }
  } else if (type == "spheres" || type == "2ball" || type == "2space") {
    //// SPHERES //// SPHERES //// SPHERES //// SPHERES ////
    ////  2BALL  ////  2BALL  ////  2BALL  ////  2BALL  ////
    //// 2SPACE  //// 2SPACE  //// 2SPACE  //// 2SPACE  ////
    let sizes = [1.0];
    if (type == "2space") {
      sizes = spaces;
    }
    for (let k = 0; k < sizes.length; k++) {
      let DD = AA; //.$matrixMultiply(axes);
      DD = DD.map((t) => t.$multiply(sizes[k]));
      SIMPE[nn].map((t, i) => {
        let temp = v2aa(t.$matrixMultiply(DD).$zip());
        form
          .strokeOnly("rgba(0,0,0,0.4)", 2)
          //pen["lrgba"], pen["lw"])
          .ellipse(orig, [temp[0], temp[1]], temp[2]);
      });

      if (k == sizes.length - 1) {
        let temp = symEig(DD.$zip().$matrixMultiply(DD).$zip());
        let angle = math.atan2(temp[0][0][1], temp[0][0][0]);
        let ww = 2;
        if (type == "2space") {
          ww = 0.5;
        }
        form
          .stroke(pen["lrgba"], ww * pen["lw"])
          .fill(pen["frgba"])
          .ellipse(orig, [math.sqrt(temp[1][0]), math.sqrt(temp[1][1])], angle);
      }
    }
  } else if (type == "cubes") {
    //// CUBES //// CUBES //// CUBES //// CUBES ////
    //// CUBES //// CUBES //// CUBES //// CUBES ////
    // DD = AA.map((h,i)=>h.$subtract(BB[i])).$matrixMultiply(axes)
    let DD = AA; //.$matrixMultiply(axes);
    CUBEE[nn].map((t) => {
      //let rgba = pen["lrgba"];
      // let lw = pen['lw']
      let bb = 0.4;
      let rgba = "rgb(0,0,0," + String(bb + bb / (nn + 1)) + ")";
      let lx = 3;
      let lm = 0.1;
      let xx = 11;
      let lw = lx * (1 - nn / xx) + lm * (nn / xx);
      form
        .stroke(rgba, lw)
        .line(t.$matrixMultiply(DD).map((h) => h.$add(orig)));
    });
    //// CUBE FILL //// CUBE FILL
    // let cubehull = CUBE[nn].$matrixMultiply(DD).map((h) => h.$add(orig));
    // form.fill(pen["frgba"]).polygon(Polygon.convexHull(cubehull));
    // let cubehull = CUBE[nn].$matrixMultiply(DD).map((h) => h.$add(orig));
    // form.fill(pen["frgba"]).polygon(Polygon.convexHull(cubehull));
  } else if (type == "coords") {
    //// COORDS //// COORDS //// COORDS //// COORDS ////
    //// COORDS //// COORDS //// COORDS //// COORDS ////
    // console.log(A.$matrixMultiply(axes));

    let DD = A;
    // console.log("blig");
    // if (!(typeof ind === "string" || ind instanceof String)) {
    //   DD = ind.map((i) => DD[i]);
    // }

    // console.log(BB[0]);
    // let DD = BB;

    // asdf;

    for (let k = 0; k < DD.length; k++) {
      let nnn = DD[k].length;
      let EE = Group.fromArray(math.diag(DD[k]));
      //console.log(EE);
      EE = EE.$matrixMultiply(axes).map((h) => h.$multiply(sx));
      CUBEE[nnn].map((t) => {
        //let rgba = pen["lrgba"];
        // let lw = pen['lw']
        let bb = 0.4;
        let rgba = "rgb(0,0,0," + String(bb + bb / (nn + 1)) + ")";
        let lx = 1.3;
        let lm = 0.1;
        let xx = 11;
        let lw = lx * (1 - nn / xx) + lm * (nn / xx);
        form
          .stroke(rgba, lw)
          .line(t.$matrixMultiply(EE).map((h) => h.$add(orig)));
      });
    }
  } else if (type == "cube_highlights") {
    //// CUBES HIGHLIGHTS //// CUBES HIGHLIGHTS //// CUBES HIGHLIGHTS ////
    //// CUBES HIGHLIGHTS //// CUBES HIGHLIGHTS //// CUBES HIGHLIGHTS ////
    // DD = AA.map((h,i)=>h.$subtract(BB[i])).$matrixMultiply(axes)
    let DD = AA; //.$matrixMultiply(axes);
    for (let k = 0; k < ind_passin.length; k++) {
      let FULL_EDGES = CUBEE[nn];
      let high_inds = CUBEEi[nn][ind_passin[k]];
      let HEDGES = high_inds.toArray().map((i) => FULL_EDGES[i]);
      HEDGES.map((t) => {
        let rgba = pen["lrgba"];
        let lw = pen["lw"];
        form
          .stroke(rgba, lw)
          .line(t.$matrixMultiply(DD).map((h) => h.$add(orig)));
      });
    }
  } else if (type == "infball" || type == "infspace") {
    //// INF-BALL //// INF-BALL //// INF-BALL //// INF-BALL ////
    //// INF-BALL //// INF-BALL //// INF-BALL //// INF-BALL ////
    // DD = AA.map((h,i)=>h.$subtract(BB[i])).$matrixMultiply(axes)

    let sizes = [1.0];
    if (type == "infspace") {
      sizes = spaces;
    }
    for (let k = 0; k < sizes.length; k++) {
      let DD = AA; //.$matrixMultiply(axes);
      DD = DD.map((t) => t.$multiply(sizes[k]));
      CUBEE[nn].map((t) => {
        let bb = 0.4;
        let rgba = "rgb(0,0,0," + String(bb + bb / (nn + 1)) + ")";
        let lx = 3;
        let lm = 0.1;
        let xx = 11;
        let lw = lx * (1 - nn / xx) + lm * (nn / xx);
        form.stroke(rgba, lw).line(
          t
            .map((g) => g.$multiply(2).$subtract(new Pt(math.ones(nn)._data)))
            .$matrixMultiply(DD)
            .map((h) => h.$add(orig))
        );
      });
    }
  } else if (type == "1space") {
    //// 1-SUBSPACE //// 1-SUBSPACE //// 1-SUBSPACE //// 1-SUBSPACE ////
    //// 1-SUBSPACE //// 1-SUBSPACE //// 1-SUBSPACE //// 1-SUBSPACE ////
  } else if (type == "2space") {
    //// 1-SUBSPACE //// 1-SUBSPACE //// 1-SUBSPACE //// 1-SUBSPACE ////
    //// 1-SUBSPACE //// 1-SUBSPACE //// 1-SUBSPACE //// 1-SUBSPACE ////

    let DD = AA;
    CUBEE[nn].map((t) => {
      let bb = 0.4;
      let rgba = "rgb(0,0,0," + String(bb + bb / (nn + 1)) + ")";
      let lx = 3;
      let lm = 0.1;
      let xx = 11;
      let lw = lx * (1 - nn / xx) + lm * (nn / xx);
      form.stroke(rgba, lw).line(
        t
          .map((g) => g.$multiply(2).$subtract(new Pt(math.ones(nn)._data)))
          .$matrixMultiply(DD)
          .map((h) => h.$add(orig))
      );
    });
  }
}

export function NDRAW(
  A,
  obj,
  form,
  ORIG,
  AXES,
  B = null,
  SHIFT = [],
  DIM = []
) {
  //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION ////
  //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION ////
  //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION ////

  let mx = A.length;
  let nx = A[0].length;
  // if (B == null) {
  //   B = Group.fromArray(math.zeros([mx, nx])._data);
  // }

  let pens = obj.pens;
  if ("type" in obj) {
    let OBJ = { name1: obj };
  } else {
    var OBJ = obj;
  }
  var pen, orig, axes, shifts, dims, sx;

  for (const item_name in OBJ) {
    ///// maybe not needed.... ///////
    if ("pen" in obj) {
      pen = pens[obj.pen];
    }
    if ("orig" in obj) {
      orig = ORIG[obj.orig];
    }
    if ("axes" in obj) {
      axes = AXES[obj.axes];
    }
    if ("shifts" in obj) {
      shifts = SHIFT[obj.shifts];
    }
    if ("dims" in obj) {
      dims = DIM[obj.dims];
    }
    if ("sx" in obj) {
      sx = obj.sx;
    }
    ////////////////////
    if (!(["orig", "axes", "sx", "pens", "update"].indexOf(item_name) >= 0)) {
      shifts = []; //// HACKY AND BROKEN
      dims = []; //// HACKY AND BROKEN
      let item = obj[item_name];
      if ("pen" in item) {
        pen = pens[item.pen];
      }
      if ("orig" in item) {
        orig = ORIG[item.orig];
      }
      if ("axes" in item) {
        axes = AXES[item.axes];
      }
      if ("shifts" in item) {
        shifts = SHIFT[item.shifts]; //// HACKY AND BROKEN
      }
      if ("dims" in item) {
        dims = DIM[item.dims];
      }
      if ("sx" in item) {
        sx = item["sx"];
      }
      //////////////////////////////////////////////////////////////
      //// >>>>> TYPES >>>>>
      if (item.on) {
        ndraw(
          form,
          A,
          item.type,
          sx,
          orig,
          axes,
          pen,
          "all",
          null,
          shifts,
          dims
        );
      }

      if ("hon" in item) {
        if (item.hon) {
          if (item.hind.length > 0) {
            /// multiple possible hinds
            // let hhind;
            // if (item.hind[0] instanceof Array) {
            //   hhind = item.hind;
            // } else {
            //   hhind = [item.hind];
            // }
            // for (let k = 0; k < hhind.length; k++) {

            ndraw(
              form,
              A,
              item.type,
              sx,
              orig,
              axes,
              pens[item.hpen],
              item.hind,
              null,
              shifts,
              dims
            );
            //}
          }
        }
      }
    }
  }
}

export function writeMatrix(
  m,
  n,
  sym,
  digits = false,
  use2inds = true,
  A = null
) {
  let STRNG = " \\begin{bmatrix}";
  var SYM, inds, ii;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (digits & (A != null)) {
        //SYM = String(math.round(A[j][i], 1));
        //SYM = Number.parseFloat(A[j][i]).toPrecision(1);
        SYM = A[j][i].toFixed(0);
        STRNG = STRNG + " " + SYM + " ";
      } else {
        SYM = sym;
        if (use2inds) {
          inds = "_{" + String(i + 1) + String(j + 1) + "} ";
        } else {
          ii = math.max(i, j);
          inds = "_{" + String(ii + 1) + "} ";
        }
        inds = STRNG = STRNG + " " + SYM + inds;
      }
      if (j < n - 1) {
        STRNG = STRNG + " & ";
      }
    }
    if (i < m - 1) {
      STRNG = STRNG + " \\\\ ";
    }
  }
  STRNG = STRNG + "\\end{bmatrix}";
  return STRNG;
}
