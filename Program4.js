let abc = ["Tomato","Radish","Methi","Carrot","Cucumber"];
document.getElementById("demo").innerHTML = "<b>OUTPUT :</b>" + "On Console Screen";
let xyz = abc.forEach (function (element){
	let c = element.indexOf("a");
	if (c != -1){
		console.log(element);
	}
});




   
	
		


