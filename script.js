var perks = [
	{name: "The Rock:<br>Passive",effect: "Enemies cannot knock you down.",mV:1,aV:0},//0
	{name: "Cardio Cure",effect: "effect1",mV:1,aV:0},
	{name: "Gladiator",effect: "effect2",mV:2,aV:0},
	{name: "Pack Mule",effect: "effect3",mV:1,aV:0},
	{name: "Epimorphosis",effect: "effect4",mV:1,aV:0},//4
	{name: "Like a Butterfly",effect: "effect5",mV:2,aV:0},
	{name: "Dog of War",effect: "effect6",mV:3,aV:0},
	{name: "perk",effect: "effect7",mV:1,aV:0},
	{name: "perk",effect: "effect8",mV:3,aV:0},
	{name: "perk",effect: "effect9",mV:3,aV:0},//9
	{name: "perk",effect: "effect10",mV:3,aV:0},//10
	{name: "perk",effect: "effect",mV:3,aV:0},
	{name: "perk",effect: "effect",mV:1,aV:0},
	{name: "perk",effect: "effect",mV:3,aV:0},
	{name: "perk",effect: "effect",mV:3,aV:0},//14
	{name: "perk",effect: "effect",mV:1,aV:0},
	{name: "perk",effect: "effect",mV:3,aV:0},
	{name: "perk",effect: "effect",mV:1,aV:0},
	{name: "perk",effect: "effect",mV:3,aV:0},
	{name: "perk",effect: "effect",mV:3,aV:0},//19
	{name: "perk",effect: "effect",mV:3,aV:0},//20
	{name: "perk",effect: "effect",mV:3,aV:0},//21
]

function to_binary(){
	var nDig = 0
	for (var i = 0; i < perks.length; i++) {
		if(perks[i].mV < 2){
			nDig++;
		}
		else{
			nDig = nDig + 2;
		}
	}
	console.log(nDig);
	binHash = ""
	for (var i = 0; i < perks.length; i++) {
		if(perks[i].mV > 1 && perks[i].aV < 2){
			binHash += "0";
		}
		binHash += (perks[i].aV >>> 0).toString(2);
		binHash += ",";
	}
	console.log(binHash);
}

function tobase64(hsh){
	var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
	//n = math.ceil(highestbit(hsh)/6.0)#get the number of characters needed
	// b64 = ""
	// for i in range(n):
	// 	b64 += base64[(hsh&63)]#get the least 6 significant bits
	// 	hsh = hsh >> 6 #shifts the number right in 6 bits
	// return b64
}

var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	return query;
};

var getHash = function (url) {
	return url.split("#")[1];
};

count = 0;

var bt;

function setClickAction(){
	//console.log("cheguei");
	bt = document.querySelectorAll(".myDiv1");
	for (var i = 0; i < perks.length; i++) {
		console.log(bt[i].title);
		bt[i].addEventListener('click',clicounacoisa);
	}
}

function clicounacoisa(){
	//console.log(this.id);
	var value = parseInt(this.id);
	console.log(value);
	if(perks[value].aV<perks[value].mV){
		perks[value].aV++;
	}
	else{
		perks[value].aV = 0;
	}
	var status = document.getElementById("level"+String(value));
	status.innerHTML = String(perks[value].aV) + '/'+ String(perks[value].mV);
	to_binary();
}

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
			position = 58;
		}

    	x.innerHTML += '<div title="' + String(perks[i].effect) +
    	'" class = "myDiv1" id = "' + String(i) +'"'+
    	 'style = "left:' + String(position) + '%;"> ' + String(perks[i].name) +
    	 
    	 '<p class="skill_level" id = "'+ 'level' + String(i) +'">' + String(perks[i].aV) + '/'+ String(perks[i].mV) + '</p>' + ' </div>\n';
    	if(((i+1)%7) == 0){
    		x.innerHTML += '<div class="break"></div>\n';
    	}
    }

    setClickAction();

}


//window.addEventListener("load",divclick,false);


console.log(window.location.href)


//loadWindow()

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWindow);
} else {
    //The DOMContentLoaded event has already fired. Just run the code.
    loadWindow();
}

console.log(document.getElementById("mainWindow"));

window.location.hash = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"

console.log((getHash(window.location.href)));

to_binary();

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
