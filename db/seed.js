require('dotenv/config');

const mongoose = require('mongoose')
const Product = require('../models/product.model')

mongoose.connect(process.env.MONGODB_URI)
    .then(x => console.log('connected to db : ' + x.connections[0].name))
    .catch(err => console.log(err))


Product.create({
    name: 'Weekly lunch',
    description: "This plan is made for those that like to get into a better lifestyle. It includes 5 lunches, one per day. Delivery fee is not included on the sales price",
    price: "$0",
    category: 'meal_plan',
    menuType: 'animal_protein'
})
    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    name: 'Weekly lunch & dinner',
    description: 'It includes 5 lunches and 5 dinners, one per day.',
    price: "$0",
    category: 'meal_plan',
    menuType: 'animal_protein'
})
    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    name: 'Monthly lunch',
    description: 'Meet your goals and get a better way to stay healthy. With this plan full of protein, vegetables, and non-processes carbohydrates you will feel full and good. This plan includes 5 lunches per week.',
    price: "$0",
    category: 'meal_plan',
    menuType: 'animal_protein'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))


Product.create({
    name: 'Monthly lunch & dinner',
    description: 'For people who would love to get a pro diet complete with a variety of dishes and tasty food.',
    price: "$0",
    category: 'meal_plan',
    menuType: 'animal_protein'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))


Product.create({
    name: 'Weekly lunch',
    description: "This plan is made for those that like to get into a better lifestyle. It includes 5 lunches, one per day. Delivery fee is not included on the sales price",
    price: "$0",
    category: 'meal_plan',
    menuType: 'plant_based'
})
    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    name: 'Weekly lunch & dinner',
    description: 'It includes 5 lunches and 5 dinners, one per day.',
    price: "$0",
    category: 'meal_plan',
    menuType: 'plant_based'
})
    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    name: 'Monthly lunch',
    description: 'Meet your goals and get a better way to stay healthy. With this plan full of protein, vegetables, and non-processes carbohydrates you will feel full and good. This plan includes 5 lunches per week.',
    price: "$0",
    category: 'meal_plan',
    menuType: 'plant_based'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))


Product.create({
    name: 'Monthly lunch & dinner',
    description: 'For people who would love to get a pro diet complete with a variety of dishes and tasty food.',
    price: "$0",
    category: 'meal_plan',
    menuType: 'plant_based'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    name: 'Brownies',
    description: 'Kill your cravings with this 100% heahlty snack. No sugar and gluten free.',
    price: "$0",
    category: 'snack',
    menuType: 'plant_based'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    name: 'Matcha balls',
    description: 'Kill your cravings with this 100% heahlty snack. No sugar and gluten free.',
    price: "$0",
    category: 'snack',
    menuType: 'plant_based'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))