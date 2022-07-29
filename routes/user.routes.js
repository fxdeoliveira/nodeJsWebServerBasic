const { Router } = require('express');
const { check } = require('express-validator');
const {inputsValidation} = require('../middlewares/inputs-validations')
const { usersGet, usersPut, usersPatch, usersPost, usersDelete } = require('../controllers/users.controller');
const {isRoleValid, existEmail, existUserId} = require('../helpers/db-validators');
const router = Router();


router.get('/', usersGet);

router.post('/', [
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom(existEmail),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').isLength({ min: 6 }),
    check('role').custom(isRoleValid), 
   inputsValidation
], usersPost);

router.put('/:id',[
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existUserId),
    check('role').custom(isRoleValid), 
    inputsValidation
], usersPut);

router.patch('/', usersPatch);
router.delete('/', usersDelete);



module.exports = router;