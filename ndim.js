export const cumSum = ((sum) => (value) => (sum += value))(0);

export function cumSum2(x, start0 = true) {
  var y, end;
  if (start0) {
    y = [0];
    end = x.length;
  } else {
    y = [x[0]];
    end = x.length;
  }
  for (let i = 1; i < end; i++) {
    if (start0) {
      y[i] = y[i - 1] + x[i - 1];
    } else {
      y[i] = y[i - 1] + x[i];
    }
  }
  return y;
}

export function meshgrid(xs, ys, shift = [0, 0], use_deltas = true) {
  var m = ys.length;
  var n = xs.length;
  var cumx = cumSum(xs);
  var cumy = cumSum(ys);
  var X = Group.fromArray(math.zeros(m, n)._data);
  var Y = Group.fromArray(math.zeros(m, n)._data);
  if (use_deltas) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        X[i][j] = cumx[j] + shift[0];
        X[i][j] = cumy[i] + shift[1];
      }
    }
  }
  return [X, Y];
}
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

//// ELLIPSE DRAWING //// ELLIPSE DRAWING //// ELLIPSE DRAWING //// ELLIPSE DRAWING ////
//// ELLIPSE DRAWING //// ELLIPSE DRAWING //// ELLIPSE DRAWING //// ELLIPSE DRAWING ////
//// ELLIPSE DRAWING //// ELLIPSE DRAWING //// ELLIPSE DRAWING //// ELLIPSE DRAWING ////

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

//// EIGEN //// EIGEN //// EIGEN //// EIGEN //// EIGEN //// EIGEN /////
//// EIGEN //// EIGEN //// EIGEN //// EIGEN //// EIGEN //// EIGEN /////
//// EIGEN //// EIGEN //// EIGEN //// EIGEN //// EIGEN //// EIGEN /////

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

//// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL //////
//// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL //////
//// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL //////
//// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL ////////// DEVELOPMENTAL //////

export function coord2n(
  y,
  AT,
  vers = "2norm",
  type = "dot",
  sharp = "exp",
  alpha = 0.1
) {
  let n = AT.length;
  let m = AT[0].length;
  let yy = y;
  var z, x;
  var AA, A, w, comp, temp0, temp1, Aw, M1, M2, M, Mi, det;
  var BT, B, ww, W, BW, BWT;
  if (vers == "softmax") {
    // DOESN"T WORK ATM....
    AA = AT.clone();
    A = AT.$zip();
    w = Group.fromArray([math.zeros(n)._data, math.zeros(n)._data]);
    comp = Group.fromArray([math.zeros(n)._data, math.zeros(n)._data]);
    comp[0] = AA.map((h) => math.abs(h.dot(y)));
    w[0] = comp[0].map((h) => math.exp(alpha * h));
    temp0 = math.sum(w[0]);
    w[0] = w[0].map((h) => h / temp0);
    Aw = AA.$zip().map((h) => h.dot(w[0]));
    AA = AA.map((h) => h.subtract(Aw));
    yy = y.subtract(Aw);
    comp[1] = AA.map((h) => math.abs(h.dot(yy)));
    w[1] = comp[1].map((h) => math.exp(alpha * h));
    temp1 = math.sum(w[1]);
    w[1] = w[1].map((g) => g / temp1);
    M1 = A.map((h) => h.dot(w[0]));
    M2 = A.map((h) => h.dot(w[1]));
    M = Group.fromPtArray([M1, M2]);
    M = M.$zip();
    det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
    Mi = Group.fromArray([
      [M[1][1] / det, -M[0][1] / det],
      [-M[1][0] / det, M[0][0] / det]
    ]);
    z = Group.fromPtArray(Mi.map((h) => h.dot(y)));
    x = Group.fromPtArray([w.$zip().map((h) => h.dot(z))]);
  } else if (vers == "w2norm") {
    BT = AT.clone();
    B = BT.$zip();
    ww = new Pt(BT.map((h) => math.sqrt(math.abs(h.dot(y)))));
    W = Group.fromArray(math.diag(ww.toArray()));
    B = B.$matrixMultiply(W);
    BT = B.$zip();
    M = B.$matrixMultiply(BT);
    det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
    Mi = Group.fromArray([
      [M[1][1] / det, -M[0][1] / det],
      [-M[1][0] / det, M[0][0] / det]
    ]);

    x = Group.fromPtArray([
      W.$matrixMultiply(BT)
        .$matrixMultiply(Mi)
        .map((h) => h.dot(y))
    ]);
  } else if (vers == "2norm") {
    BT = AT.clone();
    B = BT.$zip();
    M = B.$matrixMultiply(BT);
    det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
    Mi = Group.fromArray([
      [M[1][1] / det, -M[0][1] / det],
      [-M[1][0] / det, M[0][0] / det]
    ]);
    x = Group.fromPtArray([BT.$matrixMultiply(Mi).map((h) => h.dot(y))]);
  }

  return x;
}

// console.log("w1: ", w[0]);
// console.log("w2: ", w[1]);

// for (let k = 0; k <= 1; k++) {
// if (type == "dot") {
//   comp[k] = AA.map((h) => h.dot(y));
// } else if (type == "absdot") {
// comp[k] = AA.map((h) => math.abs(h.dot(y)));
// } else if (type == "invdist") {
//   comp[k] = AA.map((h) => {
//     let dff = h.$subtract(y);
//     return 1 / (math.sqrt(dff.dot(dff)) + 0.01);
//   });
// }
// console.log("comp[0]: ", comp[0]);
// console.log("comp[1]: ", comp[1]);
// if (sharp == "exp") {
// w[k] = comp[k].map((h) => math.exp(alpha * h));
// let temp = math.sum(w[k]);
// w[k] = w[k].map((h) => h / temp);
//}
// console.log("w[0]: ", w[0]);
// console.log("w[1]: ", w[1]);
// console.log("w: ", w[0]);
//   var BB;
//   if (k == 0) {
//     let Aw = AA.$zip().map((h) => h.dot(w[0]));
//     BB = AA.map((h) => {
//       return h.$subtract(Aw);
//     });
//   }
//   AA = BB;
// }

//   let M = new Group(M1, M2);
//   let det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
//   let Mi = Group.fromArray([
//     [M[1][1] / det, -M[0][1] / det],
//     [-M[1][0] / det, M[0][0] / det]
//   ]);
//   let z = Mi.map((h) => h.dot(y));
//   let x = w[0].$multiply(z[0]).$add(w[1].$multiply(z[1]));
//   return x;
// }
//     let M = A.$matrixMultiply(Qi).$matrixMultiply(AT);
//     let det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
//     let Mi = Group.fromArray([
//       [M[1][1] / det, -M[0][1] / det],
//       [-M[1][0] / det, M[0][0] / det]
//     ]);

//     // d2fx = ;
//     Ax = A.map((h) => h.$dot(xs[t]));
//     Adfx = A.map((h) => h.$dot(dfx));
//     u = Mi.map((h) => h.dot(y.$subtract(Ax).$subtract(Adfx))).$zip()[0];
//     xs.push(u.$multiply(-gam));
//     vs.push(dfx.$subtract(AT.map((h) => h.dot(u))));
//     mus.push(mu);
//   }
//   return xs.pop();
// }

// export function IPM(y, AT, frk = 0.5) {
//   let n = AT.length;
//   let m = AT[0].length;
//   let ones = Group.fromArray(math.ones(n)._data);
//   let a = (1 - frk) / frk;
//   let TT = 100;
//   let xs = Group.fromArray(math.zeros(1, n)._data);
//   let vs = Group.fromArray(math.zeros(1, m)._data);
//   let mus = new Pt([1]);
//   let A = AT.$zip();
//   var gam = 0.1;
//   var dfx, Ax, Adfx, u, mu;
//   for (let t = 0; t < TT; t++) {
//     mu = mus[t];
//     if (math.mod(t, 10) == 0) {
//       mu = mu + 1;
//     }
//     dfx = xs[t].map((h) => math.pow(h, frk - 1)); // WROONNNGGG
//     d2fx = xs[t].map((h) => math.pow(h, frk - 1)); // WROONNNGGG

//     let Q =
//     let Qi=

//     let M = A.$matrixMultiply(Qi).$matrixMultiply(AT);
//     let det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
//     let Mi = Group.fromArray([
//       [M[1][1] / det, -M[0][1] / det],
//       [-M[1][0] / det, M[0][0] / det]
//     ]);

//     // d2fx = ;
//     Ax = A.map((h) => h.$dot(xs[t]));
//     Adfx = A.map((h) => h.$dot(dfx));
//     u = Mi.map((h) => h.dot(y.$subtract(Ax).$subtract(Adfx))).$zip()[0];
//     xs.push(u.$multiply(-gam));
//     vs.push(dfx.$subtract(AT.map((h) => h.dot(u))));
//     mus.push(mu);
//   }
//   return xs.pop();
// }

// export function cvxComb2n(y, A) {
//   //// can be editted...
//   //// can be editted...
//   let iters = 50,
//     sharp = 3,
//     mu = 0.01,
//     gam = 0.1,
//     scale = 0.01;
//   let yy = new Pt(y[0], y[1], 1);
//   let m = A.length,
//     n = A[0].length;
//   let dist = A.$zip().map((h) => {
//     return h.$subtract(y).magnitude();
//   });
//   let exp = dist.map((t) => {
//     return math.exp(sharp / (t * scale));
//   });
//   let sum = exp.reduce((a, b) => {
//     return a + b;
//   });
//   let xb = new Pt(exp.map((t) => t / sum));
//   let yb = yy.$subtract(A.map((t) => t.dot(xb)));
//   let x = xb.clone();
//   let v = new Pt(math.zeros(m + 1)._data);
//   let B = A.clone();
//   B.push(new Pt(math.ones(n)._data));

//   if (n == 1) {
//     x = new Pt([1]);
//   } else if (n == 2) {
//     let B00 = B[0][0],
//       B01 = B[0][1];
//     let B10 = B[1][0],
//       B11 = B[1][1];
//     let Bi = Group.fromArray([
//       [B00 - B01, B10 - B11],
//       [B11 - B10, B00 - B01]
//     ]);
//     Bi.divide((B00 - B01) * (B00 - B01) + (B11 - B10) * (B11 - B10));
//     let temp = Bi.map((t) => t.dot(new Pt(yy[0] - B01, yy[1] - B11)))[0];
//     temp = math.min(1, math.max(temp, 0));
//     x = new Pt(temp, 1 - temp);
//   } else if (n == 3) {
//     let M00 = B[0][0],
//       M01 = B[0][1],
//       M02 = B[0][2];
//     let M10 = B[1][0],
//       M11 = B[1][1],
//       M12 = B[1][2];
//     let M20 = B[2][0],
//       M21 = B[2][1],
//       M22 = B[2][2];
//     let Bi = Group.fromArray([
//       [M11 * M22 - M12 * M21, M02 * M21 - M01 * M22, M01 * M12 - M02 * M11],
//       [M12 * M20 - M10 * M22, M00 * M22 - M02 * M20, M02 * M10 - M00 * M12],
//       [M10 * M21 - M11 * M20, M01 * M20 - M00 * M21, M00 * M11 - M01 * M10]
//     ]);
//     Bi.divide(
//       M00 * (M11 * M22 - M12 * M21) -
//         M01 * (M10 * M22 - M12 * M20) +
//         M02 * (M10 * M21 - M11 * M20)
//     );
//     x = new Pt(Bi.map((t) => t.dot(new Pt(yy[0], yy[1], 1))));
//   } else {
//     for (let i = 0, len = iters; i < len; i++) {
//       let temp = x.$add(xb);
//       let temp2 = temp.$multiply(temp);
//       let qi = temp2.$divide(temp2.$add(mu));
//       let M = B.$matrixMultiply(B.map((t) => t.$multiply(qi)).$zip());
//       // explicit 3x3 matrix inverse
//       let M00 = M[0][0],
//         M01 = M[0][1],
//         M02 = M[0][2];
//       let M10 = M[1][0],
//         M11 = M[1][1],
//         M12 = M[1][2];
//       let M20 = M[2][0],
//         M21 = M[2][1],
//         M22 = M[2][2];
//       let Mi = Group.fromArray([
//         [M11 * M22 - M12 * M21, M02 * M21 - M01 * M22, M01 * M12 - M02 * M11],
//         [M12 * M20 - M10 * M22, M00 * M22 - M02 * M20, M02 * M10 - M00 * M12],
//         [M10 * M21 - M11 * M20, M01 * M20 - M00 * M21, M00 * M11 - M01 * M10]
//       ]);
//       Mi.divide(
//         M00 * (M11 * M22 - M12 * M21) -
//           M01 * (M10 * M22 - M12 * M20) +
//           M02 * (M10 * M21 - M11 * M20)
//       );
//       let dfx = new Pt(B.$zip().map((t) => t.dot(v)));
//       dfx.add(x.$subtract(temp2.map((t) => mu / t)));
//       let dfv = new Pt(B.map((t) => t.dot(x)).subtract(yb));

//       // ====================================
//       // (Qi - QiB.TMiBQi)dfx + Qi B.T Mi dfv
//       // Mi B Qi dfx          +    -Mi dfv
//       // ====================================
//       // console.log(qi.$multiply(dfx).$subtract(-1))
//       let dx1 = new Pt(
//         dfx.$subtract(
//           B.$zip()
//             .$matrixMultiply(Mi.$matrixMultiply(B))
//             .map((t) => t.dot(dfx.$multiply(qi)))
//         )
//       );
//       dx1.multiply(qi);
//       let dx2 = new Pt(
//         qi.$multiply(
//           B.$zip()
//             .$matrixMultiply(Mi)
//             .map((t) => t.dot(dfv))
//         )
//       );
//       let dv1 = new Pt(
//         Mi.$matrixMultiply(B).map((t) => t.dot(dfx.$multiply(qi)))
//       );
//       let dv2 = new Pt(Mi.map((t) => t.dot(dfv.$multiply(-1))));
//       x.subtract(dx1.$add(dx2).$multiply(gam));
//       v.subtract(dv1.$add(dv2).$multiply(gam));
//     }
//     x.add(xb);
//     let xmag = x.reduce((a, b) => {
//       return a + b;
//     });
//     x = x.map((t) => t / xmag);
//   }
//   return x;
// }

export function OLD_convexComb2n(y, A) {
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

export function ball1Corners(maxDim) {
  let SIMP = [[]];
  SIMP[1] = Group.fromArray([[1.0], [-1.0]]);
  for (let i = 2; i <= maxDim; i++) {
    let temp1 = Group.fromArray(math.identity(i)._data);
    let temp2 = temp1.map((h) => h.$multiply(-1.0));
    SIMP[i] = temp1.concat(temp2);
  }
  return SIMP;
}

export function ball1Edges(dim) {
  // INPUT: (FROM PREVIOUS NOT USED) simp (list of simps)
  // dim (up to dimension dim)
  // OUTPUT: simpe
  // MAY NOT WORK FOR 0 and 1
  var temp, temp1, temp2, tempj, tempjm, ej, ball1e;
  ball1e = [];
  if (dim >= 2) {
    for (let j = 2; j <= dim; j++) {
      // adding 0 to each new point
      for (let k = 0; k < ball1e.length; k++) {
        ball1e[k][0] = ball1e[k][0].$concat(0);
        ball1e[k][1] = ball1e[k][1].$concat(0);
      }
      temp = Group.fromArray(math.identity(j)._data);
      tempj = temp.slice(0, j - 1);
      tempjm = tempj.map((t) => t.$multiply(-1));
      ej = temp[j - 1];
      temp = tempj.concat(tempjm);
      temp1 = temp.concat(ej);
      temp2 = temp.concat(ej.$multiply(-1));
      ball1e = ball1e.concat(Polygon.network(temp1, 2 * (j - 1)));
      ball1e = ball1e.concat(Polygon.network(temp2, 2 * (j - 1)));
    }
  }
  return ball1e;
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

export function cubeEdges(cube, dim, vers = "network") {
  // INPUT: cube, dim
  // RETURNS: cubee

  var cubeei = [[]]; /// inds
  var cubee = [];
  var X0, X1;
  var CUBE, prevCUBE, newCUBE;
  var EDGES, prevEDGES, newEDGES, connEDGES;
  var INDS;
  var prevNUM, newNUM;

  if (vers == "network") {
    for (let j = 0; j < cube.length; j++) {
      X0 = new Group(cube[j]);
      for (let k = 0; k < X0[0].length; k++) {
        if (X0[0][k] == 1) {
          let temp = X0[0].clone();
          temp[k] = 0;
          X0.push(temp);
        }
      }
      let temp = Polygon.network(X0, 0);
      cubee = cubee.concat(temp);
    }
  } else if (vers == "regular") {
    ///// CONSTRUCTION/////
    // EDGES = initialize....

    if (dim == 0) {
      EDGES = [[]];
      INDS = [[]];
    } else if (dim == 1) {
      EDGES = Polygon.network(Group.fromPtArray(cube[1]), 0);
      INDS = Group.fromArray([[0]]);
    } else {
      EDGES = Polygon.network(Group.fromPtArray(cube[1]), 0);
      INDS = Group.fromArray([[], [0]]);
      for (let j = 1; j < dim; j++) {
        CUBE = cube[j];

        // UPING DIMENSION...
        prevCUBE = CUBE.map((h) => h.$concat(0));
        newCUBE = CUBE.map((h) => h.$concat(1));

        prevEDGES = EDGES.map((h) =>
          Group.fromPtArray([h[0].$concat(0), h[1].$concat(0)])
        );
        newEDGES = EDGES.map((h) =>
          Group.fromPtArray([h[0].$concat(1), h[1].$concat(1)])
        );
        connEDGES = CUBE.map((h, i) =>
          Group.fromPtArray([prevCUBE[i], newCUBE[i]])
        );
        prevNUM = prevEDGES.length;
        newNUM = newEDGES.length;
        EDGES = prevEDGES.concat(newEDGES).concat(connEDGES);

        for (let k = 1; k < j + 1; k++) {
          // console.log(INDS[1].toArray().concat(INDS[1].map(()).toArray()));
          // asdf;
          INDS[k] = new Pt(
            INDS[k].toArray().concat(INDS[k].map((h) => h + prevNUM).toArray())
          );
        }
        INDS.push(new Pt(connEDGES.map((h, i) => prevNUM + newNUM + i)));
      }
    }

    if (dim > 1) {
      INDS = INDS.slice(1, INDS.length);
    }
    cubee = EDGES;
    cubeei = INDS;
  }
  var out = { cubee: cubee, cubeei: cubeei };
  // console.log(out);
  return out;
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
// cube(cube, dim)
// intersectPolyPt(poly, tip)
// integrateMDP(Ei,W,Pis,x0s,nT,nk,n0,tags,Ei,W)
// convexComb2n(y, A)
// tagEdges()
// drawArrow(start, end, dcenter, perc, wid,tag)
// drawGraph(form,oinds,iinds,selfLoops,bothWays)
// drawFlow(form,oinds,iinds,selfLoops,bothWays,xwid)
// markovOpt(rr,ys,P,Pis)
// markovUp(rr,ys,P,A,Pis)
