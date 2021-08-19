import { NDRAW, ndraw, writeMatrix } from "https://danjcalderone.github.io/dcmath/src/_module/ndraw.js"
import { coord2n, cumSum, cumSum2 } from "https://danjcalderone.github.io/dcmath/src/_module/ndim.js"

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
  hpen3: { sz: 10, lw: 1, lrgba: "rgba(0,0,0,0.7)", frgba: "rgba(0,0,0,0.1)" },
  pen2: { sz: 10, lw: 2, lrgba: "rgba(0,0,0,0.7)", frgba: "rgba(0,0,0,0.1)" },
  pen3: { sz: 10, lw: 2, lrgba: "rgba(0,0,0,0.7)", frgba: "rgba(0,0,0,0.1)" }
};

export var obj1 = {
  Cobj: {
    pens: pens,
    coords: {
      on: false,
      type: "coords",
      sx: 4,
      orig: "orig1",
      axes: "axes5",
      hon: true,
      hind: [],
      hpen: "pen1"
    }
  },
  Dobj: {
    pens: pens,
    coords: {
      on: false,
      type: "coords",
      sx: 4,
      orig: "orig1",
      axes: "axes1",
      hon: true,
      hind: [0],
      hpen: "hpen3"
    }
  },
  AXIS1: {
    dims: [3, 3],
    maxdims: [8, 8],
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
      orig: "orig2",
      axes: "axes2",
      pen: "pen0"
    },
    hulls: {
      on: true,
      type: "hulls",
      sx: 1,
      orig: "orig2",
      axes: "axes2",
      pen: "pen0"
    },
    simps: {
      on: false,
      type: "simps",
      sx: 4,
      orig: "orig2",
      axes: "axes2",
      pen: "pen0"
    },

    spheres: {
      type: "spheres",
      on: false,
      sx: 4,
      orig: "orig2",
      axes: "axes2",
      pen: "pen0"
    },
    cubes: {
      type: "cubes",
      on: false,
      sx: 4,
      orig: "orig2",
      axes: "axes2",
      pen: "pen0"
    },
    update: function () {
      obj1.AXIS1.pts.on = false;
      obj1.AXIS1.hulls.on = false;
      obj1.AXIS1.simps.on = false;
      obj1.AXIS1.cubes.on = false;
      obj1.AXIS1.spheres.on = false;

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

  Aobj: {
    dims: [3, 3],
    maxdims: [8, 8],
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
    cube_highlights: {
      type: "cube_highlights",
      on: false,
      sx: 4,
      orig: "orig1",
      axes: "axes1",
      hon: false,
      hind: [1],
      hpen: "hpen1"
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

  //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS ////
  //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS ////
  //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS ////
  equations: {
    vals: 0,
    loc: [-200, 200],
    widths: [65, 0, 0],
    heights: [0],
    wbuff: 2,
    hbuff: 0,
    wmargins: [],
    hmargins: [],
    show: math.zeros(1, 3)._data,
    matrices: {
      y: {
        vals: 0,
        loc: [0, 0],
        loc_inds: [0, 0],
        shift: [0, 0],
        dims: [1, 1],
        maxdims: [2, 1],
        widths: [65],
        heights: [30, 30],
        wbuff: 2,
        hbuff: 2,
        wmargins: [0, 30],
        hmargins: [0, 0],
        show: math.zeros(2, 1)._data,
        symbol: "y",
        use_vals: false,
        use_inds: true
      },
      ycol: {
        vals: 0,
        loc: [0, 0],
        loc_inds: [0, 0],
        shift: [0, 0],
        dims: [1, 1],
        maxdims: [1, 1],
        widths: [65],
        heights: [60],
        wbuff: 2,
        hbuff: 2,
        wmargins: [0, 30],
        hmargins: [0, 0],
        show: math.zeros(1, 1)._data,
        symbol: "y",
        use_vals: false,
        use_inds: true
      },

      cols: {
        vals: 0,
        loc: [0, 0],
        loc_inds: [1, 0],
        shift: [0, 0],
        dims: [1, 1],
        maxdims: [2, 8],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        heights: [60],
        wbuff: 2,
        hbuff: 2,
        wmargins: [0, 0],
        hmargins: [0, 0],
        show: math.zeros(1, 3)._data,
        symbol: null,
        use_vals: false,
        use_inds: true
      },
      A: {
        vals: 0,
        loc: [0, 0],
        loc_inds: [1, 0],
        shift: [0, 0],
        dims: [1, 1],
        maxdims: [2, 8],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        heights: [30, 30],
        wbuff: 2,
        hbuff: 2,
        wmargins: [0, 0],
        hmargins: [0, 0],
        show: math.zeros(2, 8)._data,
        symbol: "A",
        use_vals: false,
        use_inds: true
      },
      x: {
        vals: 0,
        loc: [0, 0],
        loc_inds: [2, 0],
        shift: [0, 0],
        dims: [1, 1],
        maxdims: [8, 1],
        widths: [40],
        heights: [25, 25, 25, 25, 25, 25, 25, 25],
        wbuff: 2,
        hbuff: 2,
        wmargins: [0, 0],
        hmargins: [0, 0],
        show: math.zeros(8, 1)._data,
        symbol: "x",
        use_vals: false,
        use_inds: true
      },
      xcol: {
        vals: 0,
        loc: [0, 0],
        loc_inds: [2, 0],
        shift: [0, 0],
        dims: [1, 1],
        maxdims: [1, 1],
        widths: [40],
        heights: [40],
        wbuff: 2,
        hbuff: 2,
        wmargins: [0, 0],
        hmargins: [0, 0],
        show: math.zeros(1, 1)._data,
        symbol: "x",
        use_vals: false,
        use_inds: true
      }
    },
    //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS ////
    //// SHOULD WORK BECAUSE ALL BASICALLY THE SAME...
    // let temp = meshgrid(this.width, this.heights, this.loc);
    make: function () {
      let tags = {
        y: null,
        ycol: null,
        A: null,
        cols: null,
        x: null
      };
      let nullDims = [
        [0, 0],
        [1, 1]
      ];
      for (const matrix in tags) {
        this.matrices[matrix].vals = this.matrices[matrix].heights.map((g, i) =>
          this.matrices[matrix].widths.map((h, j) => {
            let ud = UIDragger.fromRectangle(nullDims);
            ud.onDrag((ui, pt) => console.log("drag..."));
            ud.onHover(
              (ui) => {
                this.matrices[matrix].show[i][j] = 1;
              },
              (ui) => {
                this.matrices[matrix].show[i][j] = 0;
              }
            );
            return ud;
          })
        );
      }

      /// DRAGGERS X >>>>>>>>
      this.matrices["x"].vals = this.matrices["x"].heights.map((g, i) =>
        this.matrices["x"].widths.map((h, j) => {
          let ud = UIDragger.fromRectangle(nullDims);
          ud.onDrag((ui, pt) => {
            obj1.dd.vec1.modified = true;
            obj1.Dobj.coords.hind = [0];
            let change = 0.01 * (space.pointer[1] - ui.group[0][1]);
            obj1.dd.vec1.newvals[0][i] = obj1.dd.vec1.vals[0][i] + change;
          });
          ud.onHover(
            (ui) => {
              this.matrices["x"].show[i][j] = 1;
              obj1.Aobj.cube_highlights.hon = true;
              obj1.Aobj.cube_highlights.hind = [i];
            },
            (ui) => {
              this.matrices["x"].show[i][j] = 0;
              obj1.Aobj.cube_highlights.hon = false;
              obj1.Aobj.cube_highlights.hind = [];
            }
          );
          return ud;
        })
      );

      //// DRAGGERS X COLS>>>>>
      this.matrices["xcol"].vals = this.matrices["xcol"].heights.map((g, i) =>
        this.matrices["xcol"].widths.map((h, j) => {
          let ud = UIDragger.fromRectangle(nullDims);
          ud.onDrag((ui, pt) => {});
          ud.onHover(
            (ui) => {
              this.matrices["xcol"].show[i][j] = 1;
              obj1.Dobj.coords.hind = [0];
            },
            (ui) => {
              this.matrices["xcol"].show[i][j] = 0;
              obj1.Dobj.coords.hind = [];
            }
          );
          return ud;
        })
      );
    },

    //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS ////
    update: function () {
      this.matrices.y.dims[0] = obj1.Aobj.dims[0];
      this.matrices.A.dims = obj1.Aobj.dims;
      this.matrices.cols.dims[1] = obj1.Aobj.dims[1];
      this.matrices.x.dims[0] = obj1.Aobj.dims[1];
      //this.matrices.xcol.dims[0] = obj1.Aobj.dims[1];

      // updating widths...
      for (const matrix in this.matrices) {
        let inds = this.matrices[matrix].loc_inds;
        obj1.equations.widths[inds[0]] = math.sum(
          this.matrices[matrix].widths.slice(0, this.matrices[matrix].dims[1])
        );
        obj1.equations.heights[inds[1]] = math.sum(
          this.matrices[matrix].heights.slice(0, this.matrices[matrix].dims[0])
        );
      }

      let eqnWidths = obj1.equations.widths;
      let eqnHeights = obj1.equations.heights;
      var ewbuff = obj1.equations.wbuff;
      var ehbuff = obj1.equations.hbuff;

      // defining local locations...
      let exs = cumSum2(eqnWidths).map((h) => h + obj1.equations.loc[0]);
      let eys = cumSum2(eqnHeights).map((h) => h + obj1.equations.loc[1]);
      for (const matrix in this.matrices) {
        if (!(matrix === "xcol")) {
          let locx = exs[this.matrices[matrix].loc_inds[0]];
          let locy = eys[this.matrices[matrix].loc_inds[1]];
          this.matrices[matrix].loc = [locx, locy];

          /// redefining individual rect positions...
          let heights = this.matrices[matrix].heights.slice(
            0,
            this.matrices[matrix].dims[0]
          );
          let widths = this.matrices[matrix].widths.slice(
            0,
            this.matrices[matrix].dims[1]
          );

          let wbuff = this.matrices[matrix].wbuff;
          let hbuff = this.matrices[matrix].hbuff;
          let xx = cumSum2(widths).map((h) => h + locx);
          let yy = cumSum2(heights).map((h) => h + locy);

          this.matrices[matrix].vals.map((g, i) =>
            g.map((h, j) => {
              let wmarg = [
                math.max(wbuff, this.matrices[matrix].wmargins[0]),
                math.max(wbuff, this.matrices[matrix].wmargins[1])
              ];
              let hmarg = [
                math.max(hbuff, this.matrices[matrix].hmargins[0]),
                math.max(hbuff, this.matrices[matrix].hmargins[1])
              ];
              h.group[0].to([xx[j] + wmarg[0], yy[i] + hmarg[0]]);
              h.group[1].to([
                xx[j] + widths[j] - wmarg[1],
                yy[i] + heights[i] - hmarg[1]
              ]);
            })
          );
        }
      }

      // /// EXTRA - - HACKY
      this.matrices.xcol.vals.map((g, i) =>
        g.map((h, j) => {
          let wmarg = [
            math.max(this.matrices.xcol.wbuff, this.matrices.xcol.wmargins[0]),
            math.max(this.matrices.xcol.wbuff, this.matrices.xcol.wmargins[1])
          ];
          let hmarg = [
            math.max(this.matrices.xcol.hbuff, this.matrices.xcol.hmargins[0]),
            math.max(this.matrices.xcol.hbuff, this.matrices.xcol.hmargins[1])
          ];
          let height = math.sum(
            this.matrices.x.heights.slice(0, this.matrices.x.dims[0])
          );
          let width = this.matrices.xcol.widths[0];
          let locx = exs[this.matrices.x.loc_inds[0]];
          let locy = eys[this.matrices.x.loc_inds[1]];
          h.group[0].to([locx + wmarg[0], locy + hmarg[0]]);
          h.group[1].to([locx + width - wmarg[1], locy + height - hmarg[1]]);
        })
      );
    },

    //// EQUATIONS //// EQUATIONS //// EQUATIONS //// EQUATIONS ////
    render: function () {
      form.fillOnly("rgba(0,0,200,0.2)");
      this.matrices.y.vals.map((g, i) =>
        g.map((h, j) => {
          if (this.matrices.y.show[i][j] == 1) {
            h.render((f) => form.rect(f));
          }
        })
      );
      this.matrices.ycol.vals.map((g, i) =>
        g.map((h, j) => {
          if (this.matrices.ycol.show[i][j] == 1) {
            h.render((f) => form.rect(f));
          }
        })
      );

      form.fillOnly("rgba(0,0,200,0.2)");
      this.matrices.cols.vals.map((g, i) =>
        g.slice(0, this.matrices.cols.dims[1]).map((h, j) => {
          if (this.matrices.cols.show[i][j] == 1) {
            h.render((f) => form.rect(f));
          }
        })
      );
      form.fillOnly("rgba(0,0,200,0.3)");
      this.matrices.A.vals.map((g, i) =>
        g.slice(0, this.matrices.A.dims[1]).map((h, j) => {
          if (this.matrices.A.show[i][j] == 1) {
            h.render((f) => form.rect(f));
          }
        })
      );
      form.fillOnly("rgba(0,0,200,0.3)");
      this.matrices.x.vals.slice(0, this.matrices.x.dims[0]).map((g, i) =>
        g.map((h, j) => {
          if (this.matrices.x.show[i][j] == 1) {
            h.render((f) => form.rect(f));
          }
        })
      );
      this.matrices.xcol.vals.slice(0, this.matrices.x.dims[0]).map((g, i) =>
        g.map((h, j) => {
          if (this.matrices.xcol.show[i][j] == 1) {
            h.render((f) => form.rect(f));
          }
        })
      );
    },
    write: function () {
      let m = 2; //AA[0].length;
      let n = obj1.Aobj.dims[1]; //AA.length;
      ystr = writeMatrix(m, 1, "y", false, false);
      xstr = writeMatrix(n, 1, "x", false, false);
      Astr = writeMatrix(m, n, "A", false, obj1.AXES["axes1"]);
      //Bstr = writeMatrix(3, 2l.slice(0, obj1.Aobj.dims[1]).map((h, j) => {, "B");
      //Cstr = ystr + " = " + Astr + " " + xstr;
      Cstr = "A = " + Astr;
      //document.getElementById("eqntag").innerHTML = "$$ " + Cstr + " $$";
      document.getElementById("y").innerHTML = "$$ " + ystr + "  =  $$";
      document.getElementById("A").innerHTML = "$$ " + Astr + " $$";
      document.getElementById("x").innerHTML = "$$ " + xstr + " $$";

      let canvasTop = document.getElementById("work1").offsetTop; //offsetTop;
      let canvasLeft = document.getElementById("work1").offsetLeft; //offsetTop;

      let yleft = obj1.equations.matrices.y.loc[0] + canvasLeft;
      let Aleft = obj1.equations.matrices.A.loc[0] + canvasLeft;
      let xleft = obj1.equations.matrices.x.loc[0] + canvasLeft;

      let ytop = obj1.equations.matrices.y.loc[1] + canvasTop - 12;
      let Atop = obj1.equations.matrices.A.loc[1] + canvasTop - 12;
      let xtop = obj1.equations.matrices.x.loc[1] + canvasTop - 12;

      document.getElementById("y").style.left = String(yleft) + "px";
      document.getElementById("A").style.left = String(Aleft) + "px";
      document.getElementById("x").style.left = String(xleft) + "px";

      document.getElementById("y").style.top = String(ytop) + "px";
      document.getElementById("A").style.top = String(Atop) + "px";
      document.getElementById("x").style.top = String(xtop) + "px";

      renderMathInElement(document.getElementById("y"));
      renderMathInElement(document.getElementById("A"));
      renderMathInElement(document.getElementById("x"));
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
      onDrag: 0,
      onHover: 0,
      offHover: 0,
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
              //obj1.Aobj.boxes.hind = [i];
              obj1.Cobj.coords.hind = [i];
              obj1.equations.matrices.cols.show[0][i] = 1;
              ui.group[1].scale(1.7);
            },
            (ui) => {
              obj1.Aobj.stems.hind = [];
              //obj1.Aobj.boxes.hind = [];
              obj1.Cobj.coords.hind = [];
              obj1.equations.matrices.cols.show[0][i] = 0;
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
      onDrag: 0,
      onHover: 0,
      offHover: 0,
      pen: "pen1",
      onDrag: null,
      onHover: null,
      offHover: null,
      update: null,
      render: null,
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
    pt: {
      vals: 0,
      type: "pts",
      sx: 1,
      orig: "orig1",
      axes: "axes1",
      pen: "pen1",
      onDrag: null,
      onHover: null,
      offHover: null,
      update: null,
      render: null,
      make: function () {
        let hh = obj1.PTS["pt1"].map((h) =>
          h.$multiply(4.0).$add(obj1.ORIG["orig1"])
        );
        this.vals = hh.map((h, i) => {
          let ud = UIDragger.fromCircle([h, [10, 10]]);
          ud.onDrag((ui, pt) => {
            obj1.PTS["pt1"][i] = space.pointer
              .$subtract(obj1.ORIG["orig1"])
              .$divide(4);
            obj1.dd.vec1.modified = false;
          });
          ud.onHover(
            (ui) => {
              ui.group[1].scale(1.7);
              obj1.Dobj.coords.hind = [i];
            },
            (ui) => {
              ui.group[1].scale(1 / 1.7);
              obj1.Dobj.coords.hind = [];
            }
          );
          return ud;
        });
      }
    },
    //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////
    update: function () {
      let axes1 = obj1._AXES["axes1"].map((h) =>
        h.$multiply(4.0).$add(obj1.ORIG["orig1"])
      );
      let axes2 = obj1._AXES["axes1"].map((h) =>
        h.$multiply(-4.0).$add(obj1.ORIG["orig1"])
      );
      this.axes1.vals.map((g, j) => g.group[0].to(axes1[j]));
      this.axes2.vals.map((g, j) => g.group[0].to(axes2[j]));

      let pts = obj1.PTS["pt1"].map((h) =>
        h.$multiply(4.0).$add(obj1.ORIG["orig1"])
      );
      this.pt.vals.map((g, j) => g.group[0].to(pts[j]));
    },
    //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS //// HANDLERS ////
    render: function () {
      form.fillOnly("rgba(200,0,0,0.8)");
      this.axes1.vals
        .slice(0, obj1.Aobj.dims[1] - 1 + 1)
        .forEach((h) => h.render((g) => form.circle(g)));
      if (obj1.levers.lever2.ind == 3) {
        form.fillOnly("rgba(200,0,0,0.4)");
        this.axes2.vals
          .slice(0, obj1.Aobj.dims[1] - 1 + 1)
          .forEach((h) => h.render((g) => form.circle(g)));
      }
      form.fillOnly("rgba(0,0,200,0.8)");
      this.pt.vals.forEach((h) => h.render((g) => form.circle(g)));
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
      onDrag: null,
      onHover: null,
      offHover: null,
      update: null,
      render: null,
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
          obj1.Aobj.dims[1] = this.ind + 1;
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
      onDrag: null,
      onHover: null,
      offHover: null,
      update: null,
      render: null,
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
    //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS ////
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
    //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS //// LEVERS ////
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
  // EQNS: {
  //   eqn: {
  //     loc: [0, 0],
  //     widths: [1, 1, 1, 1, 1, 1, 1],
  //     heights: [1, 1, 1, 1, 1, 1, 1]
  //   },
  //   y: { loc_inds: [0, 0], widths: [1], heights: [1, 1, 1, 1, 1, 1] },
  //   A: { loc_inds: [0, 0], widths: [1], heights: [1, 1, 1, 1, 1, 1] },
  //   x: { loc_inds: [0, 0], widths: [1], heights: [1, 1, 1, 1, 1, 1] }
  // },
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

  PTS: { pt1: Group.fromArray([[20, 20]]), pt2: null },

  dd: { vec1: { vals: null, newvals: null, modified: false } },

  ORIG: {
    orig1: new Pt([-150.0, 0.0]),
    orig2: new Pt([100.0, 0.0]),
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
      [10, 0],
      [0, -10],
      [-10, 10],
      [-10, -10],
      [10, 10],
      [-10, 0],
      [0, 10],
      [10, -10]
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
    ]),
    axes5: Group.fromArray([
      [1, 0],
      [0, 1]
    ])
  },

  AXES: {
    axes1: 0,
    axes2: 0,
    axes3: 0,
    axes4: 0,
    axes5: Group.fromArray([
      [1, 0],
      [0, 1]
    ])
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

space.setup({ bgcolor: "rgba(0, 0, 255, 0)", resize: true, retina: true });
var ystr, xstr, Astr, Bstr, Cstr;

const aspect = 1.0;
var xlim, ylim, ss;
var A = Group.fromArray(math.identity(obj1.AXES["axes1"].length)._data);

// var AA = obj1._AXES["axes2"];
// var yy = new Pt([5, 10]);
// var yy2 = new Pt([4, 2]);

// var xx = coord2n(yy, AA);

//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////
//////// DIV //////// DIV //////// DIV //////// DIV //////// DIV //////////

space.add({
  start: (bound, space) => {
    let ind = obj1.Aobj.dims[1] - 1;
    xlim = space.width / aspect;
    ylim = space.height;
    for (const orig_name in obj1.ORIG) {
      obj1.ORIG[orig_name] = space.center.$add(obj1.ORIG[orig_name]);
    }
    for (const base_name in obj1.BASE) {
      obj1.BASE[base_name] = space.center.$add(obj1.BASE[base_name]);
    }

    obj1.equations.loc = space.center.$add(obj1.equations.loc);

    obj1.handlers.axes1.make();
    obj1.handlers.axes2.make();
    obj1.handlers.pt.make();
    obj1.levers.lever1.make();
    obj1.levers.lever2.make();
    obj1.equations.make();
    obj1.equations.update();
    obj1.equations.render();

    // document.getElementById("A").style.top = "400px";
    // document.getElementById("x").style.top = "400px";
  },

  animate: (time, ftime) => {
    obj1.Aobj.update();
    obj1.AXIS1.update();

    let ind1 = obj1.Aobj.dims[1] - 1;

    // let t = Num.cycle(time % 5) / 5;

    //AXES["axes1"] = _AXES["axes1"].slice(0, levers.lever1.ind + 1);
    obj1.AXES["axes1"] = obj1._AXES["axes1"].slice(0, ind1 + 1);
    obj1.AXES["axes2"] = obj1._AXES["axes2"].slice(0, ind1 + 1);

    obj1.handlers.update();
    obj1.handlers.render();
    obj1.levers.update();
    obj1.levers.render();
    obj1.equations.update();
    obj1.equations.render();

    let AA = A.slice(0, ind1 + 1);
    let CC = AA.$matrixMultiply(obj1._AXES["axes1"]);
    let yy = obj1.PTS["pt1"].clone()[0];

    var DD = coord2n(yy, obj1.AXES["axes1"], "2norm");
    DD[0] = DD[0].multiply(4);
    obj1.dd.vec1.vals = DD;
    if (!obj1.dd.vec1.modified) {
      obj1.dd.vec1.newvals = DD;
    }

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

    NDRAW(
      AA,
      obj1.AXIS1,
      form,
      obj1.ORIG,
      obj1._AXES,
      null,
      obj1.SHIFT,
      obj1.DIM
    );

    //NDRAW(CC, obj1.Cobj, form, obj1.ORIG, obj1._AXES);
    NDRAW(obj1.dd.vec1.newvals, obj1.Dobj, form, obj1.ORIG, obj1.AXES);
    obj1.equations.write();
  },
  action: (type, px, py) => {
    let ind = obj1.Aobj.dims[1] - 1;
    UI.track(obj1.handlers.axes1.vals.slice(0, ind + 1), type, new Pt(px, py));
    if (obj1.levers.lever2.ind == 3) {
      UI.track(
        obj1.handlers.axes2.vals.slice(0, ind + 1),
        type,
        new Pt(px, py)
      );
    }
    UI.track(obj1.handlers.pt.vals, type, new Pt(px, py));
    UI.track([obj1.levers.lever1.vals], type, new Pt(px, py));
    UI.track([obj1.levers.lever2.vals], type, new Pt(px, py));

    for (const matrix in obj1.equations.matrices) {
      let num = obj1.equations.matrices[matrix].vals.length;
      for (let i = 0; i < num; i++) {
        UI.track(
          obj1.equations.matrices[matrix].vals[i].slice(0, obj1.Aobj.dims[1]),
          type,
          new Pt(px, py)
        );
      }
    }

    // UI.track(obj1.equations.matrices.y.vals, type, new Pt(px, py));
    // UI.track(obj1.equations.matrices.A.vals, type, new Pt(px, py));
    // UI.track(obj1.equations.matrices.cols.vals, type, new Pt(px, py));
    // UI.track(obj1.equations.matrices.x.vals, type, new Pt(px, py));
  }
  // resize: (bound, evt) => {
  // }
});
space.bindMouse().bindTouch().play();
