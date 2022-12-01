/------------------ Database ----------------------------/
//Variable de referencia a la base de datos en tiempo real
var medicionRef = firebase.database().ref("/UsersData/A0nzBFo6hFgBwoPuUcSqdqIURqm1/test/int");
//Método de observación de la base de datos en tiempo real
medicionRef.on("value", (snapshot) => {
    console.log("Valor Medido: " + snapshot.val());
    consumo = snapshot.val();
      document.getElementById("calidad").innerHTML =
        Number.parseFloat(consumo).toFixed(2) + " ug/m³";
        if(consumo < 40){
          document.getElementById("mensaje").innerHTML = "Buena"; 
          document.querySelector('.circle1').style.backgroundColor = '#09FF06';
          document.querySelector('.circle2').style.backgroundColor = '#09FF06';
        } else if(consumo >= 40 && consumo <= 100){
          document.getElementById("mensaje").innerHTML = "Regular";
          document.querySelector('.circle1').style.backgroundColor = '#FFFF06';
          document.querySelector('.circle2').style.backgroundColor = '#FFFF06';
        } else if(consumo > 100){
          document.getElementById("mensaje").innerHTML = "Mala";
          document.querySelector('.circle1').style.backgroundColor = '#FF0606';
          document.querySelector('.circle2').style.backgroundColor = '#FF0606';
        }
    })
    .catch((error) => {
      console.log(error);
});
