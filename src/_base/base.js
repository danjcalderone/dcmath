import {
  simpCorners,
  simpEdges,
  cubeCorners,
  cubeEdges
} from "/src/_module/ndim.js";

Pts.namespace(window);

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
