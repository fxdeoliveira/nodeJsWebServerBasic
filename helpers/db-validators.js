const Role = require('../models/role');
const User = require('../models/user');



const isRoleValid =  async( role = '') => {
    const existRole = await Role.findOne({role});
    if(!existRole){
        throw new Error('El rol no es correcto');
    }
}

const existEmail =  async(email = '')=> {  
    const emailExist = await User.findOne({email});
    if(emailExist){
        throw new Error('Ese correo esta en usoo');        
    }    
}

const existUserId =  async(id)=> {    
    const existerUser = await User.findById(id);
    if(!existerUser){
        throw new Error('El id no existe');        
    }    
}

module.exports = {
    isRoleValid,
    existEmail,
    existUserId
}