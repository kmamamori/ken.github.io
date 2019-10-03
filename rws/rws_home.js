const top_rws_p = document.getElementById("top_rws");
const dc_li = document.getElementById("dc");
const ra_li = document.getElementById("ra");
const ab_li = document.getElementById("ab");
const tp_li = document.getElementById("tp");
const gi_li = document.getElementById("gi");
const va_li = document.getElementById("va");
const top_sen_div = document.getElementById("top_sen");
const dc_sen_div = document.getElementById("dc_sen");
const ra_sen_div = document.getElementById("ra_sen");
const ab_sen_div = document.getElementById("ab_sen");
const tp_sen_div = document.getElementById("tp_sen");
const gi_sen_div = document.getElementById("gi_sen");
const va_sen_div = document.getElementById("va_sen");

function changecontent(a){
	if(a==="top_rws"){
		top_sen_div.style.display = "block";
		dc_sen_div.style.display = "none";
		ra_sen_div.style.display = "none";
		ab_sen_div.style.display = "none";
		tp_sen_div.style.display = "none";
		gi_sen_div.style.display = "none";
		va_sen_div.style.display = "none";
	}else if(a==="dc"){
		top_sen_div.style.display = "none";
		dc_sen_div.style.display = "block";
		ra_sen_div.style.display = "none";
		ab_sen_div.style.display = "none";
		tp_sen_div.style.display = "none";
		gi_sen_div.style.display = "none";
		va_sen_div.style.display = "none";
	}else if(a==="ra"){
		top_sen_div.style.display = "none";
		dc_sen_div.style.display = "none";
		ra_sen_div.style.display = "block";
		ab_sen_div.style.display = "none";
		tp_sen_div.style.display = "none";
		gi_sen_div.style.display = "none";
		va_sen_div.style.display = "none";
}else if(a==="ab"){
		top_sen_div.style.display = "none";
		dc_sen_div.style.display = "none";
		ra_sen_div.style.display = "none";
		ab_sen_div.style.display = "block";
		tp_sen_div.style.display = "none";
		gi_sen_div.style.display = "none";
		va_sen_div.style.display = "none";
	}else if(a==="tp"){
		top_sen_div.style.display = "none";
		dc_sen_div.style.display = "none";
		ra_sen_div.style.display = "none";
		ab_sen_div.style.display = "none";
		tp_sen_div.style.display = "block";
		gi_sen_div.style.display = "none";
		va_sen_div.style.display = "none";
	}else if(a==="gi"){
		top_sen_div.style.display = "none";
		dc_sen_div.style.display = "none";
		ra_sen_div.style.display = "none";
		ab_sen_div.style.display = "none";
		tp_sen_div.style.display = "none";
		gi_sen_div.style.display = "block";
		va_sen_div.style.display = "none";
	}else if(a==="va"){
		top_sen_div.style.display = "none";
		dc_sen_div.style.display = "none";
		ra_sen_div.style.display = "none";
		ab_sen_div.style.display = "none";
		tp_sen_div.style.display = "none";
		gi_sen_div.style.display = "none";
		va_sen_div.style.display = "block";
	}
	else{
		top_sen_div.style.display = "block";
		dc_sen_div.style.display = "none";
		ra_sen_div.style.display = "none";
		ab_sen_div.style.display = "none";
		tp_sen_div.style.display = "none";
		gi_sen_div.style.display = "none";
		va_sen_div.style.display = "none";
	}
}

function main(){
	top_rws_p.addEventListener('click',() => changecontent("top_rws"))
	dc_li.addEventListener('click',() => changecontent("dc"))
	ra_li.addEventListener('click',() => changecontent("ra"))
	ab_li.addEventListener('click',() => changecontent("ab"))
	tp_li.addEventListener('click',() => changecontent("tp"))
	gi_li.addEventListener('click',() => changecontent("gi"))
	va_li.addEventListener('click',() => changecontent("va"))
}

main();
