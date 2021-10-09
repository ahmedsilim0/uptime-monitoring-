
const Joi = require('@hapi/joi');
const registerValidation= ()=>{
        const schema=
        {
            name:Joi.string().max(100).required(),
            email:Joi.string().max(100).required().email(),
            password:Joi.string().max(100).required(),
        }
       return  Joi.valid(data , schema);
}
const loginValidation= ()=>{
    const schema=
    {
        name:Joi.string().max(100).required(),
        email:Joi.string().max(100).required().email(),
        password:Joi.string().max(100).required(),
    }
   return  Joi.valid(data , schema);
}

module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;