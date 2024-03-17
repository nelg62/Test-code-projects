const canvas = document.getElementById("myCanvas"); 
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#58A8D8"
ctx.lineWidth = 30

ctx.beginPath()
ctx.moveTo(200, 300)
ctx.quadraticCurveTo(500,400,800,300)
ctx.stroke()