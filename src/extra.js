// export function oldNDRAW(A, obj, form, ORIG, AXES, B = null) {
//   // //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION ////
//   // //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION //// CONSTRUCTION ////
//   // // console.log(obj);

//   ///////////////////////////////////////////////////
//   //// TYPES >>>>>
//   //// pts:
//   //// stems:
//   //// lines:
//   //// arrows:
//   //// hulls:
//   //// simps:
//   //// cubes:
//   //// spheres:
//   //// blocks:

//   let mx = A.length;
//   let nx = A[0].length;
//   // if (B == null) {
//   //   B = Group.fromArray(math.zeros([mx, nx])._data);
//   // }
//   let pens = obj.pens;
//   if ("type" in obj) {
//     let OBJ = { name1: obj };
//   } else {
//     var OBJ = obj;
//   }

//   var pen, orig, axes, sx;

//   if ("pen" in obj) {
//     pen = pens[obj.pen];
//   }
//   if ("orig" in obj) {
//     orig = ORIG[obj.orig];
//   }
//   if ("axes" in obj) {
//     axes = AXES[obj.axes];
//   }
//   if ("sx" in obj) {
//     sx = obj.sx;
//   }

//   for (const item_name in OBJ) {
//     if (!(["orig", "axes", "sx", "pens", "update"].indexOf(item_name) >= 0)) {
//       let item = obj[item_name];
//       if ("pen" in item) {
//         pen = pens[item.pen];
//       }
//       if ("orig" in item) {
//         orig = ORIG[item.orig];
//       }
//       if ("axes" in item) {
//         axes = AXES[item.axes];
//       }
//       if ("sx" in item) {
//         sx = item["sx"];
//       }
//       // let sx = SIZE[item.sx];
//       // let idx = item.idx;
//       // let AA = A[idx].$matrixMultiply(axes).$add(origin);
//       // let BB = B[idx].$matrixMultiply(axes).$add(origin);
//       let AA = A.$matrixMultiply(AXES["axes1"]).multiply(sx);
//       //let BB = B.$matrixMultiply(axes).$add(origin);
//       let nn = AA.length;
//       if (item.type == "pts") {
//         if (item.on) {
//           //// POINTS //// POINTS //// POINTS //// POINTS ////
//           //// POINTS //// POINTS //// POINTS //// POINTS ////
//         }
//       } else if (item.type == "stems") {
//         if (item.on) {
//           //// STEMS //// STEMS //// STEMS //// STEMS //// STEMS ////
//           //// STEMS //// STEMS //// STEMS //// STEMS //// STEMS ////

//           let DD = AA.map((h) => h.$multiply(0.7).$add(orig));
//           let center = orig;
//           if ("ind" in item) {
//             center = DD[item.ind];
//           }
//           let len = DD.length;
//           DD.push(center);
//           let stems = Polygon.network(DD, len);
//           stems.map((t) => form.stroke(pen["lrgba"], pen["lw"]).line(t));
//         }
//       } else if (item.type == "lines") {
//         if (item.on) {
//           //// LINES //// LINES //// LINES //// LINES ////
//           //// LINES //// LINES //// LINES //// LINES ////
//         }
//       } else if (item.type == "arrows") {
//         if (item.on) {
//           //// ARROWS //// ARROWS //// ARROWS //// ARROWS ////
//           //// ARROWS //// ARROWS //// ARROWS //// ARROWS ////
//         }
//       } else if (item.type == "simps") {
//         if (item.on) {
//           //// SIMPLEXES //// SIMPLEXES //// SIMPLEXES //// SIMPLEXES ////
//           //// SIMPLEXES //// SIMPLEXES //// SIMPLEXES //// SIMPLEXES ////

//           let DD = AA; //AA.$matrixMultiply(axes);
//           SIMPE[nn].map((t) =>
//             form
//               .stroke(pen["lrgba"], pen["lw"])
//               .line(t.$matrixMultiply(DD).map((h) => h.$add(orig)))
//           );
//           //let simphull = Polygon.convexHull(SIMP[n2].$matrixMultiply(DD).map((h)=>h.$add(orig)))
//           let simphull = Polygon.convexHull(
//             SIMP[nn].$matrixMultiply(DD).map((h) => h.$add(orig))
//           );
//           form.fill(pen["frgba"]).polygon(simphull);
//         }
//       } else if (item.type == "spheres") {
//         if (item.on) {
//           //// SPHERES //// SPHERES //// SPHERES //// SPHERES ////
//           //// SPHERES //// SPHERES //// SPHERES //// SPHERES ////
//           let DD = AA; //.$matrixMultiply(axes);
//           SIMPE[nn].map((t, i) => {
//             let temp = v2aa(t.$matrixMultiply(DD).$zip());
//             form
//               .strokeOnly("rgba(0,0,0,0.4)", 2)
//               //pen["lrgba"], pen["lw"])
//               .ellipse(orig, [temp[0], temp[1]], temp[2]);
//           });

//           let temp = symEig(DD.$zip().$matrixMultiply(DD).$zip());
//           let angle = math.atan2(temp[0][0][1], temp[0][0][0]);
//           form
//             .stroke(pen["lrgba"], 2 * pen["lw"])
//             .fill(pen["frgba"])
//             .ellipse(
//               orig,
//               [math.sqrt(temp[1][0]), math.sqrt(temp[1][1])],
//               angle
//             );
//         }
//       } else if (item.type == "cubes") {
//         if (item.on) {
//           //// CUBES //// CUBES //// CUBES //// CUBES ////
//           //// CUBES //// CUBES //// CUBES //// CUBES ////
//           // DD = AA.map((h,i)=>h.$subtract(BB[i])).$matrixMultiply(axes)
//           let DD = AA; //.$matrixMultiply(axes);
//           CUBEE[nn].map((t) => {
//             // console.log(nn);
//             //let rgba = pen["lrgba"];
//             // let lw = pen['lw']
//             let bb = 0.4;
//             let rgba = "rgb(0,0,0," + String(bb + bb / (nn + 1)) + ")";
//             let lx = 3;
//             let lm = 0.1;
//             let xx = 11;
//             let lw = lx * (1 - nn / xx) + lm * (nn / xx);
//             form
//               .stroke(rgba, lw)
//               .line(t.$matrixMultiply(DD).map((h) => h.$add(orig)));
//           });
//           //// CUBE FILL //// CUBE FILL
//           // let cubehull = CUBE[nn].$matrixMultiply(DD).map((h) => h.$add(orig));
//           // form.fill(pen["frgba"]).polygon(Polygon.convexHull(cubehull));
//         }
//       }
//     }
//   }
// }

// //// CUBE EDGES //// CUBE EDGES
// let cube = AXES.map((t) => t.$subtract(ORIG[0]));
// CUBEE[AXES.length].map((t) =>
//   form
//     .stroke("rgba(0,0,0,0.3)", 1)
//     .line(t.$matrixMultiply(cube).map((h) => h.$add(ORIG[0])))
// );

// //// CUBE FILL //// CUBE FILL
// let cubehull = CUBE[AXES.length].$matrixMultiply(
//   AXES.map((t) => t.$subtract(ORIG[0]))
// );
// cubehull = Polygon.convexHull(cubehull.map((h) => h.$add(ORIG[0])));
// form.fill("rgba(0,0,1,0.1)", 1).polygon(cubehull);

// //// SIMP EDGES //// SIMP EDGES
// let simp = AXES.map((t) => t.$subtract(ORIG[0]));
// // SIMPE[AXES.length].map((t) =>
// //   form
// //     .stroke("rgba(0,0,0,0.6)", 4)
// //     .line(t.$matrixMultiply(simp).map((h) => h.$add(ORIG[0])))
// // );

// // drawing ellipses

// // for (let i = 0; i < SIMPE[AXES.length].length; i++) {
// //   let item = SIMPE[AXES.length][i];
// //   let blip = v2aa(item.$matrixMultiply(simp));
// //   form
// //     .stroke("rgba(0,0,0,0.6)", 4)
// //     .ellipse(ORIG[0], [blip[0], blip[1]], blip[2]);
// // }

// //// ELLIPSES //// ELLIPSES //// ELLIPSES //// ELLIPSES
// //// ELLIPSES //// ELLIPSES //// ELLIPSES //// ELLIPSES

// SIMPE[AXES.length].map((t) => {
//   let temp = v2aa(t.$matrixMultiply(simp).$zip());
//   form
//     .stroke("rgba(0,0,0,0.6)", 1)
//     .fill("rgba(0,0,0,0)")
//     .ellipse(ORIG[0], [temp[0], temp[1]], temp[2]);
// });

// //// OUTER ELLIPSE //// OUTER ELLIPSE //// OUTER ELLIPSE
// //// OUTER ELLIPSE //// OUTER ELLIPSE //// OUTER ELLIPSE
// let temp = symEig(simp.$zip().$matrixMultiply(simp).$zip());
// let angle = math.atan2(temp[0][0][1], temp[0][0][0]);
// form
//   .stroke("rgba(0,0,0,0.6)", 4)
//   .fill("rgba(0,0,1,0.1)")
//   .ellipse(ORIG[0], [math.sqrt(temp[1][0]), math.sqrt(temp[1][1])], angle);

// //     let AA = AXES.$matrixMultiply(AXES.$zip());
// //     SPHEREE[AXES.length].map((t) =>
// //     {t.}
// //     form
// //     .stroke("rgba(0,0,0.3)",2)

// //     .ellipse(orig, t))
// // );

// //     .ellipse()

// // for (let i = 0; i < Pis.length; i++) {
// //   if (yshow[i]) {
// //     let ycube;
// //     let temp = ys[i];
// //     ycube = aaxes.map((t, a) => t.$subtract(aorig).$multiply(temp[a]));
// //     CUBEE[aaxes.length].map((t) =>
// //       form
// //         .stroke("rgba(0,0,0,0.3)", 1)
// //         .line(t.$matrixMultiply(ycube).map((h) => h.$add(aorig)))
// //     );
// //   }
// // }

// // form.fillOnly("rgba(0,0,50,.8)").line(curve);

// // let rect = Rectangle.corners(Rectangle.fromCenter(curve[ci], 20)).rotate2D(
// //   ang,
// //   curve[ci]
// // );
// // form.strokeOnly("#fff", 7).lines([
// //   [rect[0], rect[2]],
// //   [rect[1], rect[3]]
// // ]);

// // firstPt.render((g) => form.fillOnly("#fe3").polygon(g));
// // lastPt.render((g) => form.fillOnly("#0c6").polygon(g));

// let ctrls = handles.map((g) => g.group[0]);
// ctrls.unshift(firstPt.group[2]);
// ctrls.push(lastPt.group[2]);

// let curve = Curve.cardinal(ctrls, 15, tension);
// curve.unshift(firstPt.group[0]);
// curve.unshift(new Pt(0, 0));
// curve.push(lastPt.group[0]);
// curve.push(new Pt(space.size.x, 0));

// let t = Num.cycle(time % 5) / 5;
// console.log("t", 25 * t);
//let zzz = Line.magnitude(new Group(AXES[0], ORIG[0]));
// eqn.style.fontSize = (zzz * 0.2).toString().concat("px"); // + "px";
// get current curve point and angle
// let ci = 2 + Math.floor(t * (curve.length - 4));
// if (prev !== undefined && !curve[ci].equals(curve[prev])) {
//   ang = curve[ci].$subtract(curve[prev]).angle() + Const.quarter_pi;
// }
// prev = ci;

// NEWISH STUFF...
//form.fillOnly("#f06");
//handles.forEach((h) => h.render((g) => form.circle(g)));
// axesHandles.forEach((h) => h.render((g) => form.circle(g)));
// axesHandles.map((h, i) =>
//   form.stroke("rgba(0,0,200,0.5", 6).line([ORIG[0], AXES[i]])
// );
// ndraw(test_obj, A);
