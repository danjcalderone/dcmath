var expr = document.getElementById("expr"),
  format = document.getElementById("format"),
  result = document.getElementById("result");

var texexp = "asdf";

// initialize with an example expression
expr.value = "sqrt(75 / 3) + det([[-1, 2], [3, 1]]) - sin(pi / 4)^2";
texexp = math.parse(expr.value).toTex();
try {
  katex.render(texexp, format);
} catch (err) {
  out("using mathjax");
  format.innerHTML = "$$" + texexp + "$$";
}
result.innerHTML = math.eval(expr.value);

// expr.addEventListener("keypress", function (event) {
//   if (event.keyCode === 13) {
//     var node = null;
//     var latex;

//     try {
//       // parse the expression
//       node = math.parse(expr.value);

//       // evaluate the result of the expression
//       // plain string way
//       //result.innerHTML = node.compile(math).eval();
//       // tex output
//       var temp = node.compile(math).eval().toString();
//       //result.innerHTML = katex.renderToString(math.parse(temp).toTex());
//       result.innerHTML = katex.renderToString(temp);
//     } catch (err) {
//       result.innerHTML =
//         '<span style="color: red;">' + err.toString() + "</span>";
//     }

//     try {
//       // export the expression to LaTeX
//       latex = node ? node.toTex() : "";
//       out(latex);
//     } catch (err) {}

//     try {
//       katex.render(latex, format);
//     } catch (err) {
//       out("using mathjax");
//       format.innerHTML = "$$" + texexp + "$$";
//       MathJax.Hub.Queue(["Typeset", MathJax.Hub, format]);
//     }
//   }
// });

// function out() {
//   var args = Array.prototype.slice.call(arguments, 0);
//   document.getElementById("output").innerHTML += args.join(" ") + "\n";
// }
