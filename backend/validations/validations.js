import { body } from "express-validator";

export const registerValidator = [
    body('email','Неверный формат почты').isEmail(),
    body('password','Пароль должен быть больше 5 символов').isLength({ min: 5}),
    body('fullName', 'Укажите имя').isLength({ min: 3}),
    body('avatarUrl','Неверная ссылка на аватарку').optional().isURL(),
];
export const loginValidator = [
    body('email','Неверный формат почты').isEmail(),
    body('password','Пароль должен быть больше 5 символов').isLength({ min: 5}),

];
export const postCreatePizzaValidator = [
    body('title','').isLength({min:3}).isString(),
    body('price','').isNumeric(),
    body('description', '').isLength({ min: 5}).isString(),
    body('image','').isString(),
    body('category','').isLength({min:1}).isString(),
];