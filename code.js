function doFirst(){
	var x = document.getElementById("canvas");
	canvas = x.getContext("2d");
	var width = x.width;
	var height = x.height;
	console.log(width);
	x.onclick = function() { alert("hello world"); }
	canvas.strokeRect(0,0,width,height);
	var img = new Image();
	img.addEventListener('load', function(){
		canvas.drawImage(img, 2, 2,width-5,height-5);
	});
	img.src = 'Athletics-Skill-Tree.jpg';
	//canvas.drawImage(0,0,600,600);
}
window.addEventListener("load",doFirst,false);