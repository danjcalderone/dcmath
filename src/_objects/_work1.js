import { intersectPtsPt } from "./../_module/ndim.js";

import { ndraw } from "./../_module/ndraw.js";

Pts.namespace(window);
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
