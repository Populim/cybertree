var perks = all_perks[0];
var current_skill = 0;
var bool_skills = [0,0,0,0,0,0,0,0,0,0,0,0];
var skill_size = [0,0,0,0,0,0,0,0,0,0,0,0];


function calcSkillSize(){
	var aux = 0;
	for (var i = 0; i < all_perks.length; i++) {
		aux=0;
		for (var j = 0; j < all_perks[i].length; j++) {
			if(all_perks[i][j].mV < 2){
				aux += 1;
			}
			else{
				aux += 2;
			}
		}
		skill_size[i] = ~~((aux+5)/6);
		console.log(skill_size[i]);
	}	
}



//transform current perks to binary string
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
	var binHash = ""
	for (var i = 0; i < perks.length; i++) {
		if(perks[i].mV > 1 && perks[i].aV < 2){
			binHash += "0";
		}
		binHash += (perks[i].aV >>> 0).toString(2);
	}
	return binHash;
}

function fromBinary(hsh){
	var index = 0;
	var size = 1;
	for (var i = 0; i < perks.length; i++) {
		size = 1;
		if(perks[i].mV > 1){
			size = 2;
		}
		if(index + size > hsh.length){
			perks[i].aV = 0;
		}
		else{
			perks[i].aV = parseInt(hsh.slice(index, index+size),2);
		}
		index = index + size;
	}
}

function binary_tobase64(hsh){
	var base64_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
	var base64 = "";
	var index = 0;
	var aux;
	for (var i = 0; i < ~~((hsh.length+5)/6); i++) {
		aux = parseInt(hsh.slice(index, index+6),2);
		base64 += base64_chars[aux];
		index = index + 6;
	}
	return base64;
}

function base64_tobinary(hsh){
	var final = "";
	var binary = "";
	var aux;
	for (var i = 0; i < hsh.length; i++) {
		binary = "";
		if(hsh[i] == '-'){
			aux = 62;
			binary += aux.toString(2);
		}
		else if(hsh[i] == '_'){
			aux = 63;
			binary += aux.toString(2);
		}
		else {
			aux = hsh[i].charCodeAt(0);
			if(aux >= 65 && aux <= 90){
				binary += (aux-65).toString(2);
			}
			else if(aux >= 97 && aux <= 122){
				binary += (aux-97+26).toString(2);
			}
			else if(aux >= 48 && aux <= 57){
				binary += (aux-48+52).toString(2);
			}
			else{
				console.log("Erro");
			}
		}
		for (var j = 0; j < 6-binary.length; j++) {
			final += "0";
		}
		final += binary;
	}
	return final;
}

function getURLHash(){
	return window.location.hash.slice(1,window.location.hash.length);
}


function setClickAction(){
	var bt;
	bt = document.querySelectorAll(".myDiv1");
	for (var i = 0; i < perks.length; i++) {
		if(perks[i].aV == 0){
			bt[i].style.background = "#ffffff";
		}
		else if (perks[i].aV == perks[i].mV){
			bt[i].style.background = "#d4af37";
		}
		else{
			bt[i].style.background = "lightblue";
		}
		bt[i].addEventListener('click',clicounacoisa);
		bt[i].addEventListener('mouseover',showDescription);
	}
}

function showDescription(){
	var value = parseInt(this.id);
	var div_desc;

	div_desc = document.getElementById("description_name");
	div_desc.innerHTML = "Name: " + perks[value].name;
	
	div_desc = document.getElementById("description_type");
	div_desc.innerHTML = "Type: Passive";

	div_desc = document.getElementById("description_effect");
	div_desc.innerHTML = "Effect: " + perks[value].effect;
	
	div_desc = document.getElementById("description_required");
	div_desc.innerHTML = "Attribute Level Required: "+"20";
	
	div_desc = document.getElementById("description_cl_ml");
	div_desc.innerHTML = "Current level: " + String(perks[value].aV) + "/" + String(perks[value].mV);
}



function clicounacoisa(){
	var value = parseInt(this.id);
	if(perks[value].aV<perks[value].mV){
		perks[value].aV++;
	}
	else{
		perks[value].aV = 0;
	}

	if(perks[value].aV == 0){
		this.style.background = "#ffffff";
	}
	else if (perks[value].aV == perks[value].mV){
		this.style.background = "#d4af37";
	}
	else{
		this.style.background = "lightblue";
	}

	var status = document.getElementById("level"+String(value));
	status.innerHTML = String(perks[value].aV) + '/'+ String(perks[value].mV);
	var status = document.getElementById("description_cl_ml");
	status.innerHTML = "Current level: " + String(perks[value].aV) + "/" + String(perks[value].mV);
	setURLHash();
	//window.location.hash = binary_tobase64(to_binary());
}

function setURLHash(){
	var hsh = "";
	for (var i = 0; i < all_perks.length; i++) {
		for (var j = 0; j < all_perks[i].length; j++) {
			if(all_perks[i][j].aV != 0){
				bool_skills[i] = 1;
				break;
			}
		}
	}
	var hsh1 = "";
	for (var i = 0; i < bool_skills.length; i++) {
		console.log(bool_skills[i]);
		hsh1 += String(bool_skills[i]);
	}
	hsh += binary_tobase64(hsh1);
	console.log(binary_tobase64(hsh1));
	console.log(hsh1);
	
	for (var i = 0; i < bool_skills.length; i++) {
		if(bool_skills[i] == 1){
			perks = all_perks[i];
			hsh += binary_tobase64(to_binary());
		}
	}

	window.location.hash = hsh;
}

function processURLHash(){
	var hsh = getURLHash();
	console.log(hsh);
	var bool_aux = "";
	var aux2;
	var aux3 = "";
	var auxperks = perks;
	if(hsh.length < 3){
		console.log("null url");
	}
	else{
		bool_aux = base64_tobinary(hsh.slice(0, 2));
		console.log(bool_aux);
		aux2 = 2;
		for (var i = 0; i < bool_aux.length; i++) {
			bool_skills[i] = parseInt(bool_aux[i]);
			if(bool_skills[i] == 1){
				aux3 = hsh.slice(aux2,Math.min(aux2+skill_size[i],hsh.length));
				console.log(aux3);
				aux2 += skill_size[i]
				perks = all_perks[i];
				fromBinary(base64_tobinary(aux3));
				console.log(base64_tobinary(aux3));
			}
		}
	}
	perks = auxperks;
}


function loadWindowSkill(){
	var id = this.getAttribute('data-index');
	current_skill = id;
	perks = all_perks[id];
	var x = document.getElementById("mainWindow");
	
	processURLHash();
	//hash = getURLHash();
	//fromBinary(base64_tobinary(hash));
	

	x.innerHTML = "";
	console.log("teste");
    for (var i = 0; i < perks.length; i++ ){
		//console.log("teste")
		var position = 14+6*(i%7);
		var margem = '';
		if((~~(i/7) == 1)){
			margem = 'style = "margin-right: 1.5vw; margin-left: 1.5vw;" ';
			//position = 8+8*(i%7);
		}
		else if((~~(i/7) == 3)){
			//position = 58;
		}

		//'style = "margin-right: 2vw; margin-left: 2vw;"'		

		//'style = "left:' + String(position) + '%;

    	x.innerHTML += '<div title="' + String(perks[i].effect) +
    	'" class = "myDiv1" id = "' + String(i) +'" '+
    	margem +
    	 '> ' + String(perks[i].name) +
    	 
    	 '<p class="skill_level" id = "'+ 'level' + String(i) +'">' + String(perks[i].aV) + '/'+ String(perks[i].mV) + '</p>' + ' </div>\n';
    	if(((i+1)%7) == 0){
    		x.innerHTML += '<div class="break"></div>\n';
    	}
    }

    setClickAction();
}

function loadSkillsSubMenu(){
	var bt;
	var id = this.getAttribute('data-index');
	console.log(id);
	var ls_index = [[0,1,2],[3,4,5],[6,7],[8,9],[10,11]];
	var list_skills = ["Athletics","Annihilation","Street Brawler",
		"Assault","Handguns","Blades",
		"Crafting","Engineering",
		"Stealth","Cool Blood",
		"Breach Protocol","Quickhacking"];

	var x =	document.getElementById("skill_selector_div");
	x.innerHTML = "";
	for (var i = 0; i < ls_index[id].length; i++) {
		x.innerHTML += '<div class="Attribute_button" '+
		'data-index = "'+ls_index[id][i]+'" '+
		'id="skill_button'+ls_index[id][i]+'"'
		+'>'+list_skills[ls_index[id][i]]+'</div>\n';
	
	}
	for (var i = 0; i < ls_index[id].length; i++) {
		bt = document.getElementById("skill_button"+ls_index[id][i]);
		bt.addEventListener('click',loadWindowSkill);
	}
	// for (var i = 0; i < lista_buttons.length; i++) {
	// 	bt = document.getElemenById(lista_buttons[i]);
	// 	bt.addEventListener('click',clickOnAttributeButton);
	// }
}

function loadAttributeMenu(){
	var bt;
	var list_buttons = ["ab_body","ab_reflex","ab_technical","ab_cool","ab_intel"];
	for (var i = 0; i < list_buttons.length; i++) {
		bt = document.getElementById(list_buttons[i]);
		bt.addEventListener('click',loadSkillsSubMenu);
	}
}

function loadWindow(){
	var x = document.getElementById("mainWindow");
	//hash = getURLHash();
	//fromBinary(base64_tobinary(hash));
	x.innerHTML = "";
	console.log("teste");
    for (var i = 0; i < perks.length; i++ ){
		//console.log("teste")
		var position = 14+6*(i%7);
		var margem = '';
		if((~~(i/7) == 1)){
			margem = 'style = "margin-right: 1.5vw; margin-left: 1.5vw;" ';
			//position = 8+8*(i%7);
		}
		else if((~~(i/7) == 3)){
			//position = 58;
		}

		//'style = "margin-right: 2vw; margin-left: 2vw;"'		

		//'style = "left:' + String(position) + '%;

    	x.innerHTML += '<div title="' + String(perks[i].effect) +
    	'" class = "myDiv1" id = "' + String(i) +'" '+
    	margem +
    	 '> ' + String(perks[i].name) +
    	 
    	 '<p class="skill_level" id = "'+ 'level' + String(i) +'">' + String(perks[i].aV) + '/'+ String(perks[i].mV) + '</p>' + ' </div>\n';
    	if(((i+1)%7) == 0){
    		x.innerHTML += '<div class="break"></div>\n';
    	}
    }

    setClickAction();

}

//var perks = all_perks[0];

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAttributeMenu);
} else {
    loadAttributeMenu();
}

calcSkillSize();

console.log(document.getElementById("mainWindow"));

console.log((getURLHash()));

to_binary();
