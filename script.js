const canvas = document.getElementById("eaCanvas");
const ctx = canvas.getContext("2d");

ctx.save();

const scale = canvas.width / 1000;
ctx.scale(scale, scale);

ctx.fillStyle = "#ff4747";

ctx.beginPath();
ctx.moveTo(500.006, 934.393);
ctx.bezierCurveTo(260.49, 934.393, 65.632, 739.531, 65.632, 500.014);
ctx.bezierCurveTo(65.632, 260.494, 260.49, 65.633, 500.006, 65.633);
ctx.bezierCurveTo(739.519, 65.633, 934.381, 260.495, 934.381, 500.014);
ctx.bezierCurveTo(934.381, 739.53, 739.52, 934.393, 500.006, 934.393);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(573.527, 331.999);
ctx.lineTo(328.041, 331.999);
ctx.lineTo(290.794, 391.857);
ctx.lineTo(535.998, 391.857);
ctx.closePath();

ctx.moveTo(623.695, 332.57);
ctx.lineTo(473.624, 571.533);
ctx.lineTo(307.16, 571.533);
ctx.lineTo(345.565, 511.624);
ctx.lineTo(445.336, 511.624);
ctx.lineTo(483.448, 451.744);
ctx.lineTo(252.794, 451.744);
ctx.lineTo(214.69, 511.624);
ctx.lineTo(269.331, 511.624);
ctx.lineTo(193.519, 631.235);
ctx.lineTo(509.908, 631.235);
ctx.lineTo(626.768, 446.94);
ctx.lineTo(669.377, 511.624);
ctx.lineTo(630.957, 511.624);
ctx.lineTo(594.572, 571.533);
ctx.lineTo(708.345, 571.533);
ctx.lineTo(747.851, 631.235);
ctx.lineTo(820.427, 631.235);
ctx.closePath();

ctx.fillStyle = "white";
ctx.fill();

ctx.restore();