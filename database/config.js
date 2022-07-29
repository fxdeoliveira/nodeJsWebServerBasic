const mongoose = require('mongoose');

const dbConection = async()=>{

 try{

    await mongoose.connect(process.env.MONGODB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('Base de Datos online!!');

 }catch(error){
     console.log(error);
     throw new Error('Error en el inicio de la base de datos', error);
 }

}

module.exports = {
    dbConection
}