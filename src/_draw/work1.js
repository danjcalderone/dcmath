import {
  cumSum,
  cubeCorners,
  cubeEdges,
  simpCorners,
  simpEdges,
  v2aa,
  symEig
} from "/src/_module/ndim.js";
import {
  NDRAW,
  writeMatrix
  // img2math,
  // createDraggers,
  //updateDraggers
} from "/src/_module/ndraw.js";

//import { pens } from "./../_pens/pens_work1.js";
import { maxDim, SIMP, SIMPE, CUBE, CUBEE } from "/src/_base/base.js";
import { space, form, obj1 } from "/src/_objects/_work1.js";
//export var space = new CanvasSpace("#work1"); //figs"); //document.getElementById("blip"));

// <div class="EQN" id="eqntag" >
//             BLAH
//             $$
//               \begin{bmatrix}
//                x_1 \\ x_2 \\ x_3
//               \end{bmatrix}
//               = \underbrace{
//               \begin{bmatrix}
//               A_{11} & A_{12} & A_{13} \\
//               A_{21} & A_{22} & A_{23} \\
//               A_{31} & A_{32} & A_{33}
//               \end{bmatrix}
//               }_{A}
//               \begin{bmatrix}
//                x_1 \\ x_2 \\ x_3
//               \end{bmatrix}
//               $$
// </div>

Pts.namespace(window);

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
