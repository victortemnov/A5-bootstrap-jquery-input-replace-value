const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";
const fields = [
	"var1", 
	"var2", 
	"var3", 
	"var4", 
	"var5", 
	"var6", 
	"speach"
]

function getFormValues() {
	let obj = {};

	fields.forEach(function(field) {
		obj[field] = $("input[name=" + field + "]")[0].value
	});

	return obj;
}

function handleButton() {
	$.getJSON(dataURL, handleData);
}

function handleData(data) {
	let message = "";

	let values = getFormValues();

	data["text"].forEach(function(string) {
		for (key in values) {
			string = string.replace("{" + key + "}", values[key]);
		}
		
		message = message + string + "<br>";
	});

	$("div#result").html(message);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
