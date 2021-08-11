Pts.namespace(window);

export const cumSum = ((sum) => (value) => (sum += value))(0);

export function intSlide(pos, start, end, div) {
  var pts = [];
  var diffs = [];
  for (let k = 0; k < div; k++) {
    pts[k] = start.$multiply(k / div).$add(end.$multiply((div - k) / div));
    diffs[k] = Pt.magnitude(pts[k].$subtract(pos));
  }
  var min_ind = diffs.min().index;
  return [pts[min_ind], min_ind];
}

export function aa2v(a1, a2, th) {
  let U = Group.fromArray([
    [math.cos(theta), -math.sin(theta)],
    [math.sin(theta), math.cos(theta)]
  ]);
  let D = Group.fromArray([
    [a1, 0],
    [0, a2]
  ]);
  np.array([
    [np.cos(theta), -np.sin(theta)],
    [np.sin(theta), np.cos(theta)]
  ]);
  return U.$matrixMultiply(D.$matrixMultiply(U.$zip()));
}

export function v2aa(A) {
  let alph1 = A[0][0] * A[0][0] + A[0][1] * A[0][1];
  let alph2 = A[1][0] * A[1][0] + A[1][1] * A[1][1];
  let alph12 = A[0][0] * A[1][0] + A[0][1] * A[1][1];
  let M = 0.5 * (alph1 + alph2);
  let H = 0.5 * (alph1 - alph2);
  let P = alph12;
  let Z = math.sqrt(H * H + P * P);
  let angle = math.atan2(P, H + Z);
  let lam1 = math.sqrt(M + Z);
  let lam2 = math.sqrt(M - Z);
  return [lam1, lam2, angle];
}

export function symEig(A) {
  // may not work right for non symmetric matrices...
  let a = A[0][0];
  let b = A[0][1];
  let c = A[1][0];
  let d = A[1][1];
  let m = 0.5 * (a + d);
  let h = 0.5 * (a - d);
  let p = 0.5 * (b + c);
  let k = 0.5 * (c - b);
  let z = math.sqrt(h * h + p * p - k * k);
  let E = Group.fromArray([
    [h + z, p + k],
    [p - k, -h - z]
  ]);
  let lam1 = m + z;
  let lam2 = m - z;
  return [E, [lam1, lam2]];
}

// export function P2AxisAngle(P) {
//   // BROKEN BROKEN BROKEN
//   let m = 0.5 * (P[0][0] + P[1][1]);
//   let h = 0.5 * (P[0][0] - P[1][1]);
//   let p = 0.5 * (P[0][1] + P[1][0]);
//   let k = 0.5 * (P[1][0] - P[0][1]);
//   let lam1 = m + math.sqrt(h * h + p * p);
//   let lam2 = m - math.sqrt(h * h + p * p);
//   let gam = h / p;
//   let theta = math.arctan2(-gam + math.sqrt(gam * gam + 1.0), 1);
//   return [math.sqrt(lam1), math.sqrt(lam2), theta];
// }

// export function eig2x2(A) {
//   // Analytically diagonalizes a 2x2 matrix
//   // INPUT: A
//   // OUTPUT: V,D,Vi
//   let a = A[0][0];
//   let b = A[0][1];
//   let c = A[1][0];
//   let d = A[1][1];
//   let m = 0.5 * (a + d);
//   let h = 0.5 * (a - d);
//   let p = 0.5 * (b + c);
//   let k = 0.5 * (c - b);
//   let lam1 = m + math.sqrt(m * m + p * p - k * k);
//   let lam2 = m - math.sqrt(m * m + p * p - k * k);
// }

//// SIMPLEX //// SIMPLEX //// SIMPLEX //// SIMPLEX ////
//// SIMPLEX //// SIMPLEX //// SIMPLEX //// SIMPLEX ////
//// SIMPLEX //// SIMPLEX //// SIMPLEX //// SIMPLEX ////

export function simpCorners(maxDim) {
  let SIMP = [[]];
  for (let i = 1; i <= maxDim; i++) {
    SIMP[i] = Group.fromArray(math.identity(i)._data);
  }
  return SIMP;
}

export function simpEdges(simp, dim) {
  // INPUT: simp (list of simps), dim (up to dimension dim)
  // OUTPUT: simpe
  // MAY NOT WORK FOR 0 and 1
  var temp;
  let simpe = [];
  for (let j = 2; j <= dim; j++) {
    // adding 0 to each new point
    //if (j < dim) {
    for (let k = 0; k < simpe.length; k++) {
      simpe[k][0] = simpe[k][0].$concat(0);
      simpe[k][1] = simpe[k][1].$concat(0);
    }
    //}
    temp = Group.fromArray(math.identity(j)._data);
    simpe = simpe.concat(Polygon.network(temp, j - 1));
  }
  // temp = Group.fromArray(math.identity(dim)._data);
  // simpe = simpe.concat(Polygon.network(temp, dim - 1));
  return simpe;
}

//// SPHERES //// SPHERES //// SPHERES //// SPHERES ////
//// SPHERES //// SPHERES //// SPHERES //// SPHERES ////
//// SPHERES //// SPHERES //// SPHERES //// SPHERES ////

// export function sphereCorners(maxDim) {}
// export function sphereEdges(simp, dim) {}
// NOT NEEDED => USE simpEdges //

//// CUBES //// CUBES //// CUBES //// CUBES ////
//// CUBES //// CUBES //// CUBES //// CUBES ////
//// CUBES //// CUBES //// CUBES //// CUBES ////

export function cubeCorners(maxDim) {
  // INPUT:   maxdim = {0,1,2,3,...}
  // RETURNS: list of cube corners up to maxdim
  // CAUTION:  may run badly for dim too high
  var CUBE = [[]];
  var X, X0, X1;
  if (maxDim >= 1) {
    let blip = new Group([0, 1]);
    CUBE[1] = blip;
    CUBE[1] = CUBE[1].$zip();
    if (maxDim >= 2) {
      for (let i = 2; i <= maxDim; i++) {
        X = CUBE[i - 1].$zip().clone();
        X0 = X.concat(new Group(math.zeros(X[0].length)._data));
        X1 = X.concat(new Group(math.ones(X[0].length)._data));
        CUBE[i] = X0.$zip().concat(X1.$zip());
      }
    }
  }
  return CUBE;
}

export function cubeEdges(cube, dim) {
  // INPUT: cube, dim
  // RETURNS: cubee
  var cubee = [];
  var X0, X1;
  for (let j = 0; j < cube.length; j++) {
    X0 = new Group(cube[j]);
    for (let k = 0; k < X0[0].length; k++) {
      if (X0[0][k] == 1) {
        let temp = X0[0].clone();
        temp[k] = 0;
        X0.push(temp);
      }
    }
    //console.log([].concat(Polygon.network(X0,0)))
    cubee = cubee.concat(Polygon.network(X0, 0));
  }
  return cubee;
}

//// SPHERES //////// SPHERES //////// SPHERES //////// SPHERES ////
//// SPHERES //////// SPHERES //////// SPHERES //////// SPHERES ////

//// INTERSECT //////// INTERSECT //////// INTERSECT //////// INTERSECT //////// INTERSECT ////
//// INTERSECT //////// INTERSECT //////// INTERSECT //////// INTERSECT //////// INTERSECT ////
//// INTERSECT //////// INTERSECT //////// INTERSECT //////// INTERSECT //////// INTERSECT ////
//// INTERSECT //////// INTERSECT //////// INTERSECT //////// INTERSECT //////// INTERSECT ////

export function intersectPtsPt(pts, tip) {
  return pts[Polygon.nearestPt(pts, tip)];
}

export function intersectPolyPt(poly, tip) {
  let temp1 = poly.clone();
  temp1.push(poly[0]);
  let temp2 = Curve.cardinal(temp1, 100, 0);
  var closest = tip;
  if (!Polygon.hasIntersectPoint(poly, tip)) {
    closest = temp2[Polygon.nearestPt(temp2, tip)];
  }
  return closest;
}

////----//// IN DEVELOPMENT ////----//// IN DEVELOPMENT ////----//// IN DEVELOPMENT ////----////
////----//// IN DEVELOPMENT ////----//// IN DEVELOPMENT ////----//// IN DEVELOPMENT ////----////
////----//// IN DEVELOPMENT ////----//// IN DEVELOPMENT ////----//// IN DEVELOPMENT ////----////
////----//// IN DEVELOPMENT ////----//// IN DEVELOPMENT ////----//// IN DEVELOPMENT ////----////

//// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE //////
//// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE //////
//// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE //////
//// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE //////
//// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE ///////// COMPUTE //////

export const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

export function integrateMDP(inits, Pi, Pis, W, Ei, nT, n0, nk) {
  var out = {};
  var Mts = [];
  var Nts = [];
  var Kts = [];
  var rhots = [];
  var yts = [];
  var xts = [];
  var rhos = [];
  var ys = [];
  var xs = [];

  var Mt = [];
  var Nt = [];
  var Kt = [];
  var rhot = [];
  var xt = [];
  var yt = [];
  var rho = [];
  var x = [];
  var y = [];

  for (let k = 0; k < nk; k++) {
    Mts[k] = [Pis[k].$matrixMultiply(W).$matrixMultiply(Ei)];
    Nts[k] = [W.$matrixMultiply(Ei.$matrixMultiply(Pis[k]))];
    Kts[k] = [Ei.$matrixMultiply(Pis[k].$matrixMultiply(W))];
    rhots[k] = [inits];
    yts[k] = [rhots[k][0].$matrixMultiply(Pis[k])];
    xts[k] = [yts[k][0].$matrixMultiply(W)];
    for (let t = 0; t < nT; t++) {
      Mts[k][t + 1] = Mts[k][0].$matrixMultiply(Mts[k][t]);
      Nts[k][t + 1] = Nts[k][0].$matrixMultiply(Nts[k][t]);
      Kts[k][t + 1] = Kts[k][0].$matrixMultiply(Kts[k][t]);
      rhots[k][t + 1] = rhots[k][0].$matrixMultiply(Mts[k][t]);
      yts[k][t + 1] = yts[k][0].$matrixMultiply(Nts[k][t]);
      xts[k][t + 1] = xts[k][0].$matrixMultiply(Kts[k][t]);
    }
    rhos[k] = rhots[k][nT - 1][0];
    ys[k] = yts[k][nT - 1][0];
    xs[k] = xts[k][nT - 1][0];
  }

  Mt = [Pi.$matrixMultiply(W).$matrixMultiply(Ei)];
  Nt = [W.$matrixMultiply(Ei.$matrixMultiply(Pi))];
  Kt = [Ei.$matrixMultiply(Pi.$matrixMultiply(W))];
  rhot = [inits];
  yt = [rhot[0].$matrixMultiply(Pi)];
  xt = [yt[0].$matrixMultiply(W)];
  for (let t = 0; t < nT; t++) {
    Mt[t + 1] = Mt[0].$matrixMultiply(Mt[t]);
    Nt[t + 1] = Nt[0].$matrixMultiply(Nt[t]);
    Kt[t + 1] = Kt[0].$matrixMultiply(Kt[t]);
    rhot[t + 1] = rhot[0].$matrixMultiply(Mt[t]);
    yt[t + 1] = yt[0].$matrixMultiply(Nt[t]);
    xt[t + 1] = xt[0].$matrixMultiply(Kt[t]);
  }

  rho = rhot[nT - 1][0];
  y = yt[nT - 1][0];
  x = xt[nT - 1][0];

  out.Mts = Mts;
  out.Nts = Nts;
  out.Kts = Kts;
  out.rhots = rhots;
  out.yts = yts;
  out.xts = xts;
  out.rhos = rhos;
  out.ys = ys;
  out.xs = xs;

  out.Mt = Mt;
  out.Nt = Nt;
  out.Kt = Kt;
  out.rhot = rhot;
  out.yt = yt;
  out.xt = xt;
  out.rho = rho;
  out.y = y;
  out.x = x;

  return out;
}

//// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL //////
//// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL //////
//// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL //////
//// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL //////

export function convexComb2n(y, A) {
  let iters = 50,
    sharp = 3,
    mu = 0.01,
    gam = 0.1,
    scale = 0.01;
  let yy = new Pt(y[0], y[1], 1);
  let m = A.length,
    n = A[0].length;
  let dist = A.$zip().map((h) => {
    return h.$subtract(y).magnitude();
  });
  let exp = dist.map((t) => {
    return math.exp(sharp / (t * scale));
  });
  let sum = exp.reduce((a, b) => {
    return a + b;
  });
  let xb = new Pt(exp.map((t) => t / sum));
  let yb = yy.$subtract(A.map((t) => t.dot(xb)));
  let x = xb.clone();
  let v = new Pt(math.zeros(m + 1)._data);
  let B = A.clone();
  B.push(new Pt(math.ones(n)._data));

  if (n == 1) {
    x = new Pt([1]);
  } else if (n == 2) {
    let B00 = B[0][0],
      B01 = B[0][1];
    let B10 = B[1][0],
      B11 = B[1][1];
    let Bi = Group.fromArray([
      [B00 - B01, B10 - B11],
      [B11 - B10, B00 - B01]
    ]);
    Bi.divide((B00 - B01) * (B00 - B01) + (B11 - B10) * (B11 - B10));
    let temp = Bi.map((t) => t.dot(new Pt(yy[0] - B01, yy[1] - B11)))[0];
    temp = math.min(1, math.max(temp, 0));
    x = new Pt(temp, 1 - temp);
  } else if (n == 3) {
    let M00 = B[0][0],
      M01 = B[0][1],
      M02 = B[0][2];
    let M10 = B[1][0],
      M11 = B[1][1],
      M12 = B[1][2];
    let M20 = B[2][0],
      M21 = B[2][1],
      M22 = B[2][2];
    let Bi = Group.fromArray([
      [M11 * M22 - M12 * M21, M02 * M21 - M01 * M22, M01 * M12 - M02 * M11],
      [M12 * M20 - M10 * M22, M00 * M22 - M02 * M20, M02 * M10 - M00 * M12],
      [M10 * M21 - M11 * M20, M01 * M20 - M00 * M21, M00 * M11 - M01 * M10]
    ]);
    Bi.divide(
      M00 * (M11 * M22 - M12 * M21) -
        M01 * (M10 * M22 - M12 * M20) +
        M02 * (M10 * M21 - M11 * M20)
    );
    x = new Pt(Bi.map((t) => t.dot(new Pt(yy[0], yy[1], 1))));
  } else {
    for (let i = 0, len = iters; i < len; i++) {
      let temp = x.$add(xb);
      let temp2 = temp.$multiply(temp);
      let qi = temp2.$divide(temp2.$add(mu));
      let M = B.$matrixMultiply(B.map((t) => t.$multiply(qi)).$zip());
      // explicit 3x3 matrix inverse
      let M00 = M[0][0],
        M01 = M[0][1],
        M02 = M[0][2];
      let M10 = M[1][0],
        M11 = M[1][1],
        M12 = M[1][2];
      let M20 = M[2][0],
        M21 = M[2][1],
        M22 = M[2][2];
      let Mi = Group.fromArray([
        [M11 * M22 - M12 * M21, M02 * M21 - M01 * M22, M01 * M12 - M02 * M11],
        [M12 * M20 - M10 * M22, M00 * M22 - M02 * M20, M02 * M10 - M00 * M12],
        [M10 * M21 - M11 * M20, M01 * M20 - M00 * M21, M00 * M11 - M01 * M10]
      ]);
      Mi.divide(
        M00 * (M11 * M22 - M12 * M21) -
          M01 * (M10 * M22 - M12 * M20) +
          M02 * (M10 * M21 - M11 * M20)
      );
      let dfx = new Pt(B.$zip().map((t) => t.dot(v)));
      dfx.add(x.$subtract(temp2.map((t) => mu / t)));
      let dfv = new Pt(B.map((t) => t.dot(x)).subtract(yb));

      // ====================================
      // (Qi - QiB.TMiBQi)dfx + Qi B.T Mi dfv
      // Mi B Qi dfx          +    -Mi dfv
      // ====================================
      // console.log(qi.$multiply(dfx).$subtract(-1))
      let dx1 = new Pt(
        dfx.$subtract(
          B.$zip()
            .$matrixMultiply(Mi.$matrixMultiply(B))
            .map((t) => t.dot(dfx.$multiply(qi)))
        )
      );
      dx1.multiply(qi);
      let dx2 = new Pt(
        qi.$multiply(
          B.$zip()
            .$matrixMultiply(Mi)
            .map((t) => t.dot(dfv))
        )
      );
      let dv1 = new Pt(
        Mi.$matrixMultiply(B).map((t) => t.dot(dfx.$multiply(qi)))
      );
      let dv2 = new Pt(Mi.map((t) => t.dot(dfv.$multiply(-1))));
      x.subtract(dx1.$add(dx2).$multiply(gam));
      v.subtract(dv1.$add(dv2).$multiply(gam));
    }
    x.add(xb);
    let xmag = x.reduce((a, b) => {
      return a + b;
    });
    x = x.map((t) => t / xmag);
  }
  return x;
}

///// GRAPHING /////////// GRAPHING /////////// GRAPHING /////////// GRAPHING /////////// GRAPHING //////
///// GRAPHING /////////// GRAPHING /////////// GRAPHING /////////// GRAPHING /////////// GRAPHING //////
///// GRAPHING /////////// GRAPHING /////////// GRAPHING /////////// GRAPHING /////////// GRAPHING //////
///// GRAPHING /////////// GRAPHING /////////// GRAPHING /////////// GRAPHING /////////// GRAPHING //////

export function tagEdges(oinds, iinds) {
  var out = {};
  out.selfLoops = [];
  out.bothWays = [];
  out.oneWay = [];
  for (let i = 0; i < oinds.length; i++) {
    if (oinds[i] == iinds[i]) {
      out.selfLoops.push(i);
    } else if (
      indexOfAll(iinds, oinds[i])
        .map((j) => oinds[j])
        .includes(iinds[i]) &&
      oinds[i] != iinds[i]
    ) {
      out.bothWays.push(i);
    } else {
      out.oneWay.push(i);
    }
  }
  return out;
}

export function drawArrow(start, end, dcenter, perc, wid, tag) {
  var arrowHead, arrowTail;
  const div100 = new Pt(math.range(0, 1, 0.01)._data);
  var pto, pti, diff, arrow, phi, rotphi, ptoi;

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

  let shrink = Group.fromArray([
    [1 - perc[0], perc[0]],
    [1 - perc[1], perc[1]]
  ]);
  if (tag == "o") {
    ptoi = shrink.$matrixMultiply(new Group(start, end));
    diff = ptoi[1].$subtract(ptoi[0]);
    arrowHead = whead.map((t) =>
      t
        .$multiply(ewidth * wid)
        .$add([diff.magnitude() - whead[2][0] * ewidth * wid, 0])
    );
    arrowTail = new Group(
      arrowHead[arrowHead.length - 1],
      wtail[0].$multiply(ewidth * wid),
      wtail[1].$multiply(ewidth * wid),
      arrowHead[0]
    );
    phi = -math.atan2(diff[1], diff[0]);
    rotphi = [
      [math.cos(phi), -math.sin(phi)],
      [math.sin(phi), math.cos(phi)]
    ];
    arrowHead = arrowHead.$matrixMultiply(rotphi);
    arrowTail = arrowTail.$matrixMultiply(rotphi);
    arrowHead.add(ptoi[0]);
    arrowTail.add(ptoi[0]);
  } else if (tag == "b") {
    ptoi = shrink.$matrixMultiply(new Group(start, end));
    diff = ptoi[1].$subtract(ptoi[0]);
    arrowHead = hhead.map((t) =>
      t
        .$multiply(ewidth * wid)
        .$add([diff.magnitude() - whead[2][0] * ewidth * wid, 0])
    );
    // arrowTail = htail
    //   .map((t) => t.$multiply(ewidth))
    //   .concat([[diff.magnitude() - whead[2]]]);
    arrowTail = new Group(
      arrowHead[arrowHead.length - 1],
      htail[0].$multiply(ewidth * wid),
      htail[1].$multiply(ewidth * wid),
      arrowHead[0]
    );

    phi = -math.atan2(diff[1], diff[0]);
    rotphi = [
      [math.cos(phi), -math.sin(phi)],
      [math.sin(phi), math.cos(phi)]
    ];
    arrowHead = arrowHead.$matrixMultiply(rotphi);
    arrowTail = arrowTail.$matrixMultiply(rotphi);
    arrowHead.add(ptoi[0]);
    arrowTail.add(ptoi[0]);
  } else if (tag == "s") {
    let ph0 = 2 * 3.1415 * perc[0],
      ph1 = 2 * 3.1415 * perc[1];
    let ax0 = start.$subtract(dcenter).$unit();
    let ax1 = new Pt(ax0[1], -ax0[0]).$unit();
    let orient = new Group(ax0, ax1);
    let degs = div100.$multiply(ph1 - ph0);
    let coss = degs.map((t) => math.cos(-t));
    let sins = degs.map((t) => math.sin(-t));
    let arc = new Group(coss, sins).$zip();
    let arc1 = arc.map((t) => t.$multiply(erad));
    let arc2 = arc.map((t) => t.$multiply(erad + 2 * loopWidth * ewidth * wid));
    let whd = whead.map((t) => t.$multiply(loopWidth * ewidth * wid));
    whd = whd.$matrixMultiply([
      [0, 1],
      [-1, 0]
    ]);
    whd = whd.map((t) => t.$add([loopWidth * ewidth * wid + erad, 0]));
    arrowHead = whd.clone();
    arrowTail = arc2.concat(arc1.reverse());
    arrowHead = arrowHead.$matrixMultiply(orient);
    arrowTail = arrowTail.$matrixMultiply(orient);
    rotphi = [
      [math.cos(ph1), -math.sin(ph1)],
      [math.sin(ph1), math.cos(ph1)]
    ];
    arrowHead = arrowHead.$matrixMultiply(rotphi);
    arrowTail = arrowTail.$matrixMultiply(rotphi);
    arrowHead = arrowHead.map((t) =>
      t.$add(dcenter.$add(start.$subtract(dcenter).$multiply(1.4)))
    );
    arrowTail = arrowTail.map((t) =>
      t.$add(dcenter.$add(start.$subtract(dcenter).$multiply(1.4)))
    );
  }
  return [arrowHead, arrowTail];
}

export function drawGraph(
  form,
  nodes,
  ocenter,
  oinds,
  iinds,
  selfLoops,
  oneWays,
  bothWays
) {
  let eperc, arrow, arrowHT;
  for (let e = 0; e < oinds.length; e++) {
    // console.log(bothWays);
    // asdf;
    if (bothWays.includes(e)) {
      eperc = [0.1, 0.9];
      arrowHT = drawArrow(
        nodes[oinds[e]],
        nodes[iinds[e]],
        ocenter,
        eperc,
        1,
        "b"
      );
      arrow = arrowHT[0].concat(arrowHT[1]);
      form.fill("rgba(200,200,200,0.2)").polygon(arrow);
      // arrowHT = drawArrow(
      //   nodes[oinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
      //   nodes[iinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
      //   gcenter,
      //   eperc,
      //   1,
      //   "b"
      // );
      // arrow = arrowHT[0].concat(arrowHT[1]);
      // form.strokeOnly("rgba(100,100,100,0.4)").polygon(arrow);
    } else if (selfLoops.includes(e)) {
      //let eperc = [-0.375, 0.375];
      eperc = [-0.45, 0.3];
      arrowHT = drawArrow(
        nodes[oinds[e]],
        nodes[iinds[e]],
        ocenter,
        eperc,
        1,
        "s"
      );
      arrow = arrowHT[0].concat(arrowHT[1]);
      form.fill("rgba(200,200,200,0.2)").polygon(arrow);
      // arrowHT = drawArrow(
      //   nodes[oinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
      //   nodes[iinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
      //   gcenter,
      //   eperc,
      //   1,
      //   "s"
      // );
      // arrow = arrowHT[0].concat(arrowHT[1]);
      // form.strokeOnly("rgba(100,100,100,0.4)").polygon(arrow);
    } else if (oneWays.includes(e)) {
      eperc = [0.1, 0.9];
      arrowHT = drawArrow(
        nodes[oinds[e]],
        nodes[iinds[e]],
        ocenter,
        eperc,
        1,
        "o"
      );
      arrow = arrowHT[0].concat(arrowHT[1]);
      form.fill("rgba(200,200,200,0.2)").polygon(arrow);
      // arrow = drawArrow(
      //   nodes[oinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
      //   nodes[iinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
      //   gcenter,
      //   eperc,
      //   1,
      //   "o"
      // );
      // arrow = arrowHT[0].concat(arrowHT[1]);
      // form.strokeOnly("rgba(100,100,100,0.4)").polygon(arrow);
    }
  }
}

export function drawFlow(
  form,
  nodes,
  ocenter,
  oinds,
  iinds,
  selfLoops,
  oneWay,
  bothWays,
  xwid
) {
  let eperc, arrow, arrowHT;
  for (let e = 0; e < oinds.length; e++) {
    let ee = [0, 1, 2, 3, 4, 5, 6, 7, 8][e];
    if (bothWays.includes(e)) {
      eperc = [0.1, 0.9];
      arrowHT = drawArrow(
        nodes[oinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
        nodes[iinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
        gcenter,
        eperc,
        xwid[e],
        "b"
      );
      arrow = arrowHT[0].concat(arrowHT[1]);
      form.fill("rgba(100,100,255,0.8)").polygon(arrow);
    } else if (oneWay.includes(e)) {
      eperc = [0.1, 0.9];
      arrow = drawArrow(
        nodes[oinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
        nodes[iinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
        gcenter,
        eperc,
        xwid[e],
        "o"
      );
      arrow = arrowHT[0].concat(arrowHT[1]);
      form.fill("rgba(100,100,255,0.8)").polygon(arrow);
    } else if (selfLoops.includes(e)) {
      //let eperc = [-0.375, 0.375];
      eperc = [-0.45, 0.3];
      arrowHT = drawArrow(
        nodes[oinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
        nodes[iinds[e]].$subtract(ocenter).$multiply(0.5).$add(gcenter),
        gcenter,
        eperc,
        xwid[e],
        "s"
      );
      arrow = arrowHT[0].concat(arrowHT[1]);
      form.fill("rgba(100,100,255,0.8)").polygon(arrow);
    }
  }
}

export function markovOpt(rr, ys, P, Pis) {
  var temp, temp2, itemp;
  var out = {};
  var iones = new Pt(1, 1, 1);
  var ieye = Group.fromArray([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]); //math.identity(iaxes.length)._data;

  temp = new Pt(ys.map((t) => t.dot(rr)));
  temp = temp.maxValue();
  let maxi = temp["index"];
  let lamOpt = temp["value"];
  temp = rr.$subtract(lamOpt);
  let M = Pis[maxi].$matrixMultiply(P);
  itemp = [ieye[0]];
  M = M.map((t, i) =>
    Array.from(t.$multiply(-1).$add(ieye[i]).$add(itemp[0].$multiply(iones[i])))
  );
  M = Array.from(M);
  let Mi = Group.fromArray(math.inv(M));
  temp = Pis[maxi].map((t) => t.dot(temp));
  let viOpt = new Pt(Mi.map((t) => t.dot(temp)));
  //lamOpt = viOpt.dot(inits[0]);
  //lamOpt = viOpt.$subtract(lamOpt);
  let voOpt = viOpt.$add(lamOpt);
  let dt = 1;
  out.lamOpt = lamOpt;
  out.viOpt = viOpt;
  out.voOpt = voOpt;
  return out;
}

export function markovUp(rr, ys, vi, P, A, Pis) {
  var temp;
  var lamUp, lam, mu;
  var out = {};
  temp = rr;
  temp = temp.$add(P.map((t) => t.dot(vi)));
  temp = temp.$subtract(A.map((t) => t.dot(vi)));
  lamUp = temp.maxValue().value;
  lam = math.max(lam, lamUp);
  mu = temp.$multiply(-1).$add(lam + 0.0001);
  out.lam = lam;
  out.lamUp = lamUp;
  out.mu = mu;
  return out;
}

//// FUNCTION LIST //////// FUNCTION LIST //////// FUNCTION LIST //////// FUNCTION LIST ////
//// FUNCTION LIST //////// FUNCTION LIST //////// FUNCTION LIST //////// FUNCTION LIST ////
//// FUNCTION LIST //////// FUNCTION LIST //////// FUNCTION LIST //////// FUNCTION LIST ////
//// FUNCTION LIST //////// FUNCTION LIST //////// FUNCTION LIST //////// FUNCTION LIST ////

// cubeCorners(maxdim)
// cubeEdges(cube, dim)
// intersectPolyPt(poly, tip)
// integrateMDP(Ei,W,Pis,x0s,nT,nk,n0,tags,Ei,W)
// convexComb2n(y, A)
// tagEdges()
// drawArrow(start, end, dcenter, perc, wid,tag)
// drawGraph(form,oinds,iinds,selfLoops,bothWays)
// drawFlow(form,oinds,iinds,selfLoops,bothWays,xwid)
// markovOpt(rr,ys,P,Pis)
// markovUp(rr,ys,P,A,Pis)

export var maxDim = 10;
export var SIMPE = [[], []];
export var SIMP = simpCorners(maxDim);
for (let i = 2; i <= maxDim; i++) {
  SIMPE[i] = simpEdges(SIMP[i], i);
}

// var SPHEREE=[[]];
// var SPHERE = sphereCorners(maxDim);
// for (let i=0; i<maxDim; i++) {
//   SPHEREE[i] = sphereEdges(SPHERE[i],i);
// }

export var CUBEE = [[]];
export var CUBE = cubeCorners(maxDim);
for (let i = 0; i < maxDim; i++) {
  CUBEE[i] = cubeEdges(CUBE[i], i);
}

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

export var space = new CanvasSpace("#work1");
export var form = space.getForm();

export var pens = {
  pen0: { sz: 10, lw: 2, lrgba: "rgba(0,0,0,0.7)", frgba: "rgba(0,0,0,0.1)" },
  pen1: { sz: 10, lw: 2, lrgba: "rgba(0,0,0,0.7)", frgba: "rgba(0,0,0,0.1)" },
  hpen1: { sz: 10, lw: 6, lrgba: "rgba(0,0,0,0.7)", frgba: "rgba(0,0,0,0.1)" },
  hpen2: {
    sz: 10,
    lw: 4,
    lrgba: "rgba(200,0,0,0.7)",
    frgba: "rgba(200,0,0,0.1)"
  },
  pen2: { sz: 10, lw: 2, lrgba: "rgba(0,0,0,0.7)", frgba: "rgba(0,0,0,0.1)" },
  pen3: { sz: 10, lw: 2, lrgba: "rgba(0,0,0,0.7)", frgba: "rgba(0,0,0,0.1)" }
};

//// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS ////
//// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS ////
//// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS //// OBJECTS ////
export var obj1 = {
  Aobj: {
    pens: pens,
    pts: {
      on: false,
      type: "pts",
      sx: 4,
      orig: "orig1",
      axes: "axes1",
      pen: "pen1"
      // hpen: "pen1"
      // hind: [1],
    },
    axes1: {
      on: true,
      type: "stems",
      sx: 4 * 0.7,
      orig: "orig1",
      axes: "axes1",
      pen: "pen0"
    },
    stems: {
      on: false,
      type: "stems",
      sx: 4,
      orig: "orig1",
      axes: "axes1",
      pen: "pen0",
      hon: true,
      hpen: "hpen1",
      hind: []
    },
    boxes: {
      on: false,
      type: "boxes",
      sx: 1,
      orig: "orig3",
      shifts: "shift3",
      dims: "dim1",
      hon: true,
      hpen: "hpen2",
      hind: []
    },

    lines: {
      on: false,
      type: "lines",
      sx: 4,
      orig: "orig1",
      axes: "axes1",
      pen: "pen0"
    },
    arrows: {
      on: false,
      type: "arrows",
      sx: 1,
      orig: "orig1",
      axes: "axes1",
      pen: "pen0"
    },
    hulls: {
      on: true,
      type: "hulls",
      sx: 1,
      orig: "orig1",
      axes: "axes1",
      pen: "pen0"
    },
    simps: {
      on: false,
      type: "simps",
      sx: 4,
      orig: "orig1",
      axes: "axes1",
      pen: "pen0"
    },

    spheres: {
      type: "spheres",
      on: false,
      sx: 4,
      orig: "orig1",
      axes: "axes1",
      pen: "pen0"
    },
    cubes: {
      type: "cubes",
      on: false,
      sx: 4,
      orig: "orig1",
      axes: "axes1",
      pen: "pen0"
    },
    update: function () {
      obj1.Aobj.pts.on = false;
      obj1.Aobj.hulls.on = false;
      obj1.Aobj.simps.on = false;
      obj1.Aobj.cubes.on = false;
      obj1.Aobj.spheres.on = false;
      let ind = obj1.levers.lever2.ind;
      if (ind == 0) {
        this.pts.on = true;
      }
      if (ind == 1) {
        this.hulls.on = true;
        this.simps.on = true;
      }
      if (ind == 2) {
        this.cubes.on = true;
      }
      if (ind == 3) {
        this.spheres.on = true;
      }
    }
  },

  //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////
  //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////
  //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////

  handlers: {
    pens: pens,
    axes1: {
      vals: 0,
      type: "pts",
      sx: 1,
      orig: "orig1",
      axes: "axes1",
      pen: "pen1",
      make: function () {
        let axes1 = obj1._AXES["axes1"].map((h) =>
          h.$multiply(4.0).$add(obj1.ORIG["orig1"])
        );
        this.vals = axes1.map((h, i) => {
          let ud = UIDragger.fromCircle([h, [10, 10]]);
          ud.onDrag((ui, pt) => {
            obj1._AXES["axes1"][i] = space.pointer
              .$subtract(obj1.ORIG["orig1"])
              .$multiply(1 / 4);
          });
          ud.onHover(
            (ui) => {
              //obj1.Aobj.spheres.on = true;
              obj1.Aobj.stems.hind = [i];
              obj1.Aobj.boxes.hind = [i];
              ui.group[1].scale(1.7);
            },
            (ui) => {
              obj1.Aobj.stems.hind = [];
              obj1.Aobj.boxes.hind = [];
              ui.group[1].scale(1 / 1.7);
            }
          );
          return ud;
        });
      }
    },
    axes2: {
      vals: 0,
      type: "pts",
      sx: 1,
      orig: "orig1",
      axes: "axes1",
      pen: "pen1",
      make: function () {
        let axes2 = obj1._AXES["axes1"].map((h) =>
          h.$multiply(-4.0).$add(obj1.ORIG["orig1"])
        );
        this.vals = axes2.map((h, i) => {
          let ud = UIDragger.fromCircle([h, [10, 10]]);
          ud.onDrag((ui, pt) => {
            obj1._AXES["axes1"][i] = space.pointer
              .$subtract(obj1.ORIG["orig1"])
              .$multiply(-1 / 4);
          });
          ud.onHover(
            (ui) => {
              ui.group[1].scale(1.7);
              obj1.Aobj.stems.hind = [i];
            },
            (ui) => {
              ui.group[1].scale(1 / 1.7);
              obj1.Aobj.stems.hind = [];
            }
          );
          return ud;
        });
      }
    },
    // boxes1: {
    //   vals: 0,
    //   type: "boxes",
    //   sx: 1,
    //   orig: "base1",
    //   shift: "shifts1",
    //   axes: "ctrl1",
    //   pen: "pen1",
    //   make: function () {
    //     let spots = obj1._AXES["axes1"].map((h) =>
    //       h.$multiply(this.sx).$add(obj1.BASE["base1"])
    //     );
    //     this.vals = spots.map((h, i) => {
    //       let ud = UIDragger.fromCircle([h, [10, 10]]);
    //       ud.onDrag((ui, pt) => {
    //         obj1._AXES["axes1"][i] = space.pointer
    //           .$subtract(obj1.ORIG["orig1"])
    //           .$multiply(-1 / 4);
    //       });
    //       ud.onHover(
    //         (ui) => ui.group[1].scale(1.7),
    //         (ui) => ui.group[1].scale(1 / 1.7)
    //       );
    //       return ud;
    //     });
    //   }
    // },

    update: function () {
      let axes1 = obj1._AXES["axes1"].map((h) =>
        h.$multiply(4.0).$add(obj1.ORIG["orig1"])
      );
      let axes2 = obj1._AXES["axes1"].map((h) =>
        h.$multiply(-4.0).$add(obj1.ORIG["orig1"])
      );
      this.axes1.vals.map((g, j) => g.group[0].to(axes1[j]));
      this.axes2.vals.map((g, j) => g.group[0].to(axes2[j]));
    },

    render: function () {
      form.fillOnly("rgba(200,0,0,0.8)");
      this.axes1.vals
        .slice(0, obj1.levers.lever1.ind + 1)
        .forEach((h) => h.render((g) => form.circle(g)));
      if (obj1.levers.lever2.ind == 3) {
        form.fillOnly("rgba(200,0,0,0.4)");
        this.axes2.vals
          .slice(0, obj1.levers.lever1.ind + 1)
          .forEach((h) => h.render((g) => form.circle(g)));
      }
    }
  },

  //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS ////
  //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS ////
  //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS ////

  levers: {
    pens: pens,
    lever1: {
      vals: 0,
      ind: 2,
      type: "pts",
      sx: 1,
      orig: "orig1",
      axes: "axes1",
      pen: "pen1",
      make: function () {
        let ctrls1 = obj1.CTRLS["ctrl1"][0]
          .$multiply(this.sx)
          .$add(obj1.BASE["base1"]);
        this.vals = UIDragger.fromCircle([ctrls1, [10, 10]]);

        this.vals.onDrag((ui, pt) => {
          let pts = obj1.CTRLS["ctrl1"].map((h) =>
            h.$multiply(this.sx).$add(obj1.BASE["base1"])
          );
          this.ind = Polygon.nearestPt(pts, space.pointer);
        });
        this.vals.onHover(
          (ui) => ui.group[1].scale(1.7),
          (ui) => ui.group[1].scale(1 / 1.7)
        );
      }
    },
    lever2: {
      vals: 0,
      ind: 2,
      type: "pts",
      sx: 1,
      orig: "orig1",
      axes: "axes1",
      pen: "pen1",
      make: function () {
        let ctrls2 = obj1.CTRLS["ctrl2"][0]
          .$multiply(this.sx)
          .$add(obj1.BASE["base2"]);
        this.vals = UIDragger.fromCircle([ctrls2, [10, 10]]);

        this.vals.onDrag((ui, pt) => {
          let pts = obj1.CTRLS["ctrl2"].map((h) =>
            h.$multiply(this.sx).$add(obj1.BASE["base2"])
          );
          this.ind = Polygon.nearestPt(pts, space.pointer);
        });
        this.vals.onHover(
          (ui) => ui.group[1].scale(1.7),
          (ui) => ui.group[1].scale(1 / 1.7)
        );
      }
    },

    update: function () {
      let ctrl1 = obj1.CTRLS["ctrl1"][this.lever1.ind]
        .$multiply(this.lever1.sx)
        .$add(obj1.BASE["base1"]);
      this.lever1.vals.group[0].to(ctrl1);

      let ctrl2 = obj1.CTRLS["ctrl2"][this.lever2.ind]
        .$multiply(this.lever2.sx)
        .$add(obj1.BASE["base2"]);
      this.lever2.vals.group[0].to(ctrl2);
    },
    render: function () {
      //// LEVER 1 //// LEVER 1 //// LEVER 1 //// LEVER 1 //// LEVER 1 ////
      let start1 = obj1.CTRLS["ctrl1"][0]
        .$multiply(this.lever1.sx)
        .$add(obj1.BASE["base1"]);
      let end1 = obj1.CTRLS["ctrl1"][obj1.CTRLS["ctrl1"].length - 1]
        .$multiply(this.lever1.sx)
        .$add(obj1.BASE["base1"]);
      form.stroke("rgba(0, 0, 0, 0.8)", 6).line([start1, end1]);
      form.fillOnly("rgba(0,0,0,0.8)");
      this.lever1.vals.render((g) => form.circle(g));

      // ICONS 1 // ICONS 1 // ICONS 1 // ICONS 1 // ICONS 1 // ICONS 1 //
      if (true) {
        let len = obj1._AXES["axes1"].length;
        let pen = pens["pen1"];
        let sx = 1.5;
        for (var j = 0; j < len; j++) {
          let eye = Group.fromArray(math.identity(j + 1)._data);
          let axes = obj1.initAXES["axes1"].slice(0, j + 1);
          let shift = obj1.CTRLS["ctrl1"][j].$add([0, -50]);
          let base = obj1.BASE["base1"].$add(shift);
          ndraw(form, eye, "stems", sx, base, axes, pen);
        }
      }

      //// LEVER 2 //// LEVER 2 //// LEVER 2 //// LEVER 2 //// LEVER 2 ////
      let start2 = obj1.CTRLS["ctrl2"][0]
        .$multiply(this.lever2.sx)
        .$add(obj1.BASE["base2"]);
      let end2 = obj1.CTRLS["ctrl2"][obj1.CTRLS["ctrl2"].length - 1]
        .$multiply(this.lever2.sx)
        .$add(obj1.BASE["base2"]);
      form.stroke("rgba(0, 0, 0, 0.8)", 6).line([start2, end2]);
      form.fillOnly("rgba(0,0,0,0.8)");
      this.lever2.vals.render((g) => form.circle(g));

      // ICONS 2 // ICONS 2 // ICONS 2 // ICONS 2 // ICONS 2 //
      if (true) {
        let len = obj1.AXES["axes1"].length;
        let eye = Group.fromArray(math.identity(len)._data);
        let xshift = [70, 0];
        let axes = obj1.initAXES["axes1"].slice(0, len);
        let pen = pens["pen1"];
        let sx = 1.5;

        let yshift = obj1.CTRLS["ctrl2"][0];
        let base = obj1.BASE["base2"].$add(xshift).$add(yshift);
        ndraw(form, eye, "pts", sx, base, axes, pen);
        yshift = obj1.CTRLS["ctrl2"][1];
        base = obj1.BASE["base2"].$add(xshift).$add(yshift);
        ndraw(form, eye, "simps", sx, base, axes, pen);
        yshift = obj1.CTRLS.ctrl2[2];
        base = obj1.BASE["base2"].$add(xshift).$add(yshift);
        ndraw(form, eye, "cubes", sx, base, axes, pen);
        yshift = obj1.CTRLS.ctrl2[3];
        base = obj1.BASE["base2"].$add(xshift).$add(yshift);
        ndraw(form, eye, "spheres", sx, base, axes, pen);
      }
    }
  },
  //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE ////
  //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE ////
  //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE //// BASE ////

  CTRLS: {
    ctrl1: Group.fromArray([
      [0.0, 0.0],
      [50, 0],
      [100, 0],
      [150, 0],
      [200, 0],
      [250, 0],
      [300, 0],
      [350, 0]
    ]),
    ctrl2: Group.fromArray([
      [0.0, 0.0],
      [0, 100],
      [0, 200],
      [0, 300]
    ]),
    ctrl3: Group.fromArray([
      [0.0, 0.0],
      [10, 0],
      [20, 0],
      [30, 0]
    ])
  },

  BASE: {
    base1: new Pt([-200.0, -200.0]),
    base2: new Pt([250.0, -150.0]),
    base3: new Pt([0.0, 0.0])
  },

  SHIFT: {
    shift1: 0,
    shift2: 0,
    shift3: Group.fromArray([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ])
  },

  DIM: {
    dim1: Group.fromArray([
      [40, 47],
      [40, 47],
      [40, 47],
      [40, 47],
      [40, 47],
      [40, 47],
      [40, 47],
      [40, 47]
    ])
  },

  ORIG: {
    orig1: new Pt([0.0, 0.0]),
    orig2: new Pt([0.0, 0.0]),
    orig3: new Pt([-205.0, 165.0])
  },

  _AXES: {
    axes1: Group.fromArray([
      [10, 0],
      [0, -10],
      [-10, 10],
      [-10, -10],
      [10, 10],
      [-10, 0],
      [0, 10],
      [10, -10]
    ]),
    axes2: Group.fromArray([
      [-10, 10],
      [10, 10],
      [10, 0]
    ]),
    axes3: Group.fromArray([
      [-10, 10],
      [10, 10],
      [10, 0]
    ]),
    axes4: Group.fromArray([
      [-10, 10],
      [10, 10],
      [10, 0]
    ])
  },

  AXES: {
    axes1: 0,
    axes2: 0,
    axes3: 0,
    axes4: 0
  },
  initAXES: {
    axes1: Group.fromArray([
      [10, 0],
      [0, 10],
      [-10, -10],
      [-10, 10],
      [5, -5],
      [5, 5],
      [-5, 5],
      [2, -2]
    ])
  }
};

obj1.AXES.axes1 = obj1._AXES.axes1.clone();
obj1.initAXES.axes1 = obj1._AXES.axes1.clone();

obj1.SHIFT.shift1 = obj1.CTRLS.ctrl1.map((h) =>
  h.$add(obj1.BASE["base1"]).$add([0, -40])
);
obj1.SHIFT.shift2 = obj1.CTRLS.ctrl2.map((h) =>
  h.$add(obj1.BASE["base2"]).$add([40, 0])
);
var dd = 48;
obj1.SHIFT.shift3 = obj1.SHIFT.shift3.map((h, i) => h.$add([i * dd, 0]));
//console.log(obj1.SHIFT.shift3[1]);

space.setup({ bgcolor: "rgba(0, 0, 255, 0)", resize: true, retina: true });

var ystr, xstr, Astr, Bstr, Cstr;

const aspect = 1.0;
var xlim, ylim, ss;
var A = Group.fromArray(math.identity(obj1.AXES["axes1"].length)._data);

space.add({
  start: (bound, space) => {
    let ind = obj1.levers.lever1.ind;
    xlim = space.width / aspect;
    ylim = space.height;
    for (const orig_name in obj1.ORIG) {
      obj1.ORIG[orig_name] = space.center.$add(obj1.ORIG[orig_name]);
    }
    for (const base_name in obj1.BASE) {
      obj1.BASE[base_name] = space.center.$add(obj1.BASE[base_name]);
    }

    obj1.handlers.axes1.make();
    obj1.handlers.axes2.make();
    obj1.levers.lever1.make();
    obj1.levers.lever2.make();
  },

  animate: (time, ftime) => {
    obj1.Aobj.update();

    let ind1 = obj1.levers.lever1.ind;
    let ind2 = obj1.levers.lever2.ind;
    // let t = Num.cycle(time % 5) / 5;

    //AXES["axes1"] = _AXES["axes1"].slice(0, levers.lever1.ind + 1);
    obj1.AXES["axes1"] = obj1._AXES["axes1"].slice(0, ind1 + 1);

    obj1.handlers.update();
    obj1.handlers.render();

    obj1.levers.update();
    obj1.levers.render();

    let AA = A.slice(0, ind1 + 1);
    NDRAW(
      AA,
      obj1.Aobj,
      form,
      obj1.ORIG,
      obj1._AXES,
      null,
      obj1.SHIFT,
      obj1.DIM
    );

    let m = 2; //AA[0].length;
    let n = AA.length;

    // ystr = writeMatrix(m, 1, "y");
    // xstr = writeMatrix(n, 1, "x");
    Astr = writeMatrix(m, n, "A", false, obj1.AXES["axes1"]);
    //Bstr = writeMatrix(3, 2, "B");
    //Cstr = ystr + " = " + Astr + " " + xstr;
    Cstr = "A = " + Astr;
    document.getElementById("eqntag").innerHTML = "$$ " + Cstr + " $$";
    renderMathInElement(document.getElementById("eqntag"));
  },
  action: (type, px, py) => {
    let ind = obj1.levers.lever1.ind;
    UI.track(obj1.handlers.axes1.vals.slice(0, ind + 1), type, new Pt(px, py));
    if (obj1.levers.lever2.ind == 3) {
      UI.track(
        obj1.handlers.axes2.vals.slice(0, ind + 1),
        type,
        new Pt(px, py)
      );
    }
    UI.track([obj1.levers.lever1.vals], type, new Pt(px, py));
    UI.track([obj1.levers.lever2.vals], type, new Pt(px, py));
  }
  // resize: (bound, evt) => {
  // }
});
space.bindMouse().bindTouch().play();
