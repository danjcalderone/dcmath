import { maxDim, SIMP, SIMPE, CUBE, CUBEE } from "/src/_base/base.js";
import { v2aa, symEig } from "/src/_module/ndim.js";
Pts.namespace(window);
// var form = space.getForm();

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
  ind = "all",
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
  let AA = A.$matrixMultiply(axes).multiply(sx);
  let sshifts = shifts;
  let ddims = dims;
  if (!(ind.constructor === String)) {
    AA = ind.map((i) => AA[i]);
    sshifts = ind.map((i) => shifts[i]);
    ddims = ind.map((i) => dims[i]);
  }
  let mx = AA.length;
  let nx = AA[0].length;

  let nn = AA.length;

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
  } else if (type == "spheres") {
    //// SPHERES //// SPHERES //// SPHERES //// SPHERES ////
    //// SPHERES //// SPHERES //// SPHERES //// SPHERES ////
    let DD = AA; //.$matrixMultiply(axes);
    SIMPE[nn].map((t, i) => {
      let temp = v2aa(t.$matrixMultiply(DD).$zip());
      form
        .strokeOnly("rgba(0,0,0,0.4)", 2)
        //pen["lrgba"], pen["lw"])
        .ellipse(orig, [temp[0], temp[1]], temp[2]);
    });

    let temp = symEig(DD.$zip().$matrixMultiply(DD).$zip());
    let angle = math.atan2(temp[0][0][1], temp[0][0][0]);
    form
      .stroke(pen["lrgba"], 2 * pen["lw"])
      .fill(pen["frgba"])
      .ellipse(orig, [math.sqrt(temp[1][0]), math.sqrt(temp[1][1])], angle);
  } else if (type == "cubes") {
    //// CUBES //// CUBES //// CUBES //// CUBES ////
    //// CUBES //// CUBES //// CUBES //// CUBES ////
    // DD = AA.map((h,i)=>h.$subtract(BB[i])).$matrixMultiply(axes)
    let DD = AA; //.$matrixMultiply(axes);
    CUBEE[nn].map((t) => {
      // console.log(nn);
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
    // console.log(Polygon.convexHull(cubehull));
    // form.fill(pen["frgba"]).polygon(Polygon.convexHull(cubehull));
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
  for (const item_name in OBJ) {
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
            // console.log(pens[item.hpen]);
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
          }
        }
      }
    }
  }
}

export function writeMatrix(m, n, sym, digits = false, A = null) {
  let STRNG = " \\begin{bmatrix}";
  var SYM;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (digits & (A != null)) {
        //SYM = String(math.round(A[j][i], 1));
        //SYM = Number.parseFloat(A[j][i]).toPrecision(1);
        SYM = A[j][i].toFixed(0);
        STRNG = STRNG + " " + SYM + " ";
      } else {
        SYM = sym;
        STRNG = STRNG + " " + SYM + "_{" + String(i + 1) + String(j + 1) + "} ";
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