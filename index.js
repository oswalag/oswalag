/*------------------ Database ----------------------------*/
//Variable de referencia a la base de datos en tiempo real
var medicionRef = firebase.database().ref("/UsersData/A0nzBFo6hFgBwoPuUcSqdqIURqm1/test/int");
//Método de observación de la base de datos en tiempo real
medicionRef.on("value", (snapshot) => {
    console.log("Valor Medido: " + snapshot.val());
    consumo = snapshot.val();
      document.getElementById("calidad").innerHTML =
        Number.parseFloat(consumo).toFixed(2) + " ug/m";
        if(consumo < 100){
            document.getElementsById("circle").style.backgroundColor = "red";
        }
    })
    .catch((error) => {
      console.log(error);
});

