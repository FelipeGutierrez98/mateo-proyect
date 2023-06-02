const mongoose = require("mongoose")

function connectDB() {
  mongoose.connect('mongodb+srv://ProyectoFinal:grupo1@proyectofinal.mko25fd.mongodb.net/CARS-FAST').then(()=>{console.log("conectado")}) 
   
    /* mongoose.connect("mongodb://127.0.0.1:27017/carro").then(()=>{console.log("conectado");}) //localmente db */
}
module.exports =connectDB
