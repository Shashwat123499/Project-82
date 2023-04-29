var mouseEvent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var radius = document.getElementById("input_radius").value;
var colour = document.getElementById("input_colour").value;
var width = document.getElementById("input_width").value; 

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
     radius = document.getElementById("input_radius").value;
     colour = document.getElementById("input_colour").value;
     width = document.getElementById("input_width").value;
     mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup (e) {
     mouseEvent = "mouseup";
}

canvas.addEventListener ("mouseleave", my_mouseleave);

function my_mouseleave (e) {
     mouseEvent = "mouseleave"
}

canvas.addEventListener ("mouseup", my_mouseup);

function my_mouseup (e) {
     mouseEvent = "mouseleave"
}

canvas.addEventListener ("mousemove", my_mousemove);

function my_mousemove (e) {
     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas-offsetTop;

     if (mouseEvent == "mouseDown") {
          console.log ("current position of x and y coordinates = ");
          console.log ("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
          ctx.beginPath();
          ctx.strokeStyle = colour;
          ctx.lineWith = width;
          ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
          ctx.stroke();
     }

}
