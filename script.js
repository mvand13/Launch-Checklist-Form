
window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
      const missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML = `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[5].name}</li>
         <li>Diameter: ${json[5].diameter}</li>
         <li>Star: ${json[5].star}</li>
         <li>Distance from Earth: ${json[5].distance}</li>
         <li>Number of Moons: ${json[5].moons}</li>
      </ol>
      <img src="${json[5].image}">`;
      });
   });
   





   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");
      let fuelLevel = Number(fuelInput.value);
      let cargoMass = Number(cargoInput.value);
      if (pilotName.value === "" || copilotName.value === "" ||
      (fuelInput.value) === "" || cargoInput.value === "") {
         alert("All fields are required!");
         
      }
      if (isNaN(fuelLevel) || isNaN(cargoMass)){
       alert("Invalid, enter number");
      }
      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch`;
      fuelStatus.innerHTML = "Enough fuel for journey";
      fuelStatus.style.color = "";
      cargoStatus.innerHTML = "Low enough cargo mass";
      cargoStatus.style.color = "";


      if (fuelLevel < 10000 || cargoMass > 10000){
         element = document.getElementById("faultyItems"); 
         element.style.visibility = 'visible';
         let fuelStatus = document.getElementById("fuelStatus")
         if (fuelLevel < 10000){
         fuelStatus.innerHTML = "Not enough fuel for journey";
         fuelStatus.style.color = "red";
         }
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

        if(cargoMass > 10000){
        cargoStatus.innerHTML = "Too much cargo for journey"
        cargoStatus.style.color = "red";
        }
      }else{
         launchStatus.innerHTML = "Shuttle Ready to Launch"; 
         launchStatus.style.color = "green";
         fuelStatus.style.color = "";
         cargoStatus.style.color = "";
      
          
      } 
     
       

         

   


   });

});


