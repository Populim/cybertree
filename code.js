var perks = [
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},//0
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},//4
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},//9
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},//10
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},//14
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},//19
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},//20
	{name: "perk",effect: "effect",maxValue:1,actualValue:0},//21
]


var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	return query;
};
count = 0;

function loadWindow(){
	var x = document.getElementById("mainWindow");
	//console.log(x);
	x.innerHTML = "";
	console.log("teste")
    for (var i = 0; i < perks.length; i++ ){
		//console.log("teste")
		var position = 14+6*(i%7);
		if((~~(i/7) == 1)){
			position = 8+8*(i%7);
		}
		else if((~~(i/7) == 3)){
			position = 50;
		}

    	x.innerHTML += '<div title="' + String(perks[i].effect) +
    	'" class = "myDiv1" id = "' + String(perks[i].name) + String(i+1) +'"'+
    	 'style = "left:' + String(position) + '%;"> ' + String(perks[i].name) +
    	 String(position)  +
    	 '<p class="skill_level"> 1/2 </p>' + ' </div>\n';
    	if(((i+1)%7) == 0){
    		x.innerHTML += '<div class="break"></div>\n';
    	}
    }
}


//window.addEventListener("load",divclick,false);


console.log(window.location.href)
console.log(getParams((window.location.href)));

//loadWindow()

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWindow);
} else {
    //The DOMContentLoaded event has already fired. Just run the code.
    loadWindow();
}

console.log(document.getElementById("mainWindow"));

// function divclick(){
// 	var x = document.getElementById("div1");
// 	x.innerHTML = 
// 	x.onclick = function() {
// 		count++;
// 		x.innerHTML = '<strong>clicou ' + String(count) +" vezes<\strong>";
// 	}
// }

// function doFirst(){
// 	var x = document.getElementById("canvas");
// 	canvas = x.getContext("2d");
// 	var width = x.width;
// 	var height = x.height;
// 	console.log(width);
// 	x.onclick = function() { alert("hello world"); }
// 	canvas.strokeRect(0,0,width,height);
// 	canvas.strokeRect(10,10,60,60);
// 	//var img = new Image();
// 	//img.addEventListener('load', function(){
// 	//	canvas.drawImage(img, 2, 2,width-5,height-5);
// 	//});
// 	//img.src = 'Athletics-Skill-Tree.jpg';
// 	//canvas.drawImage(0,0,600,600);
// }