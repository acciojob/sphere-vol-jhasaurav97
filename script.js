function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius");
    const volume = document.getElementById("volume");
    const submit = document.getElementById("submit");

	submit.addEventListener("click", () => {
		let radiusEl = parseFloat(radius.value.trim());
		if(isNaN(radiusEl) || radiusEl < 0){
			volume.value = NaN;
			return;
		}
		let v = (4 / 3) * Math.PI * Math.pow(radiusEl, 3);
		volume.value = v.toFixed(4);
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
