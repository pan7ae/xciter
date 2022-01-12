window.onload = function () {
	setTimeout(function () {
		document.getElementById("loader").style.display = "none", 400
	})
}

// Group checkbox enabled/disabled
function toggleDisable(checkbox, idName) {
	let toggle = document.getElementById(idName);
	let elem = document.getElementById(idName);
	let elemsP = elem.getElementsByTagName("p");
	let elemsLabel = elem.getElementsByTagName("label");
	if (checkbox.checked) {
		toggle.disabled = false;
		if (idName == "fitting")
			for (let i = 0; i < elemsLabel.length; i++)
				elemsLabel[i].style.color = "rgba(0, 0, 0, 1)";

		for (let i = 0; i < elemsP.length; i++)
			elemsP[i].style.color = "rgba(0, 0, 0, 1)";
		console.log(String(idName));
	} else {
		toggle.disabled = true;
		if (idName == "fitting")
			for (let i = 0; i < elemsLabel.length; i++)
				elemsLabel[i].style.color = "rgba(0, 0, 0, 0.6)";

		for (let i = 0; i < elemsP.length; i++)
			elemsP[i].style.color = "rgba(0, 0, 0, 0.6)";
	}
}