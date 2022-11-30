require('dotenv/config');

const mongoose = require('mongoose')
const Product = require('../models/product.model')

mongoose.connect(process.env.MONGODB_URI)
    .then(x => console.log('connected to db : ' + x.connections[0].name))
    .catch(err => console.log(err))


Product.create({
    imageURL: 'https://res.cloudinary.com/dob3e36pp/image/upload/v1669741779/theOrchardwebsite/protein1_c2kt8l.jpg',
    name: 'Weekly lunch',
    description: "This plan is made for those that like to get into a better lifestyle. It includes 5 lunches, one per day. Delivery fee is not included on the sales price",
    price: 5,
    category: 'meal_plan',
    menuType: 'animal_protein'
})
    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    imageURL: 'https://res.cloudinary.com/dob3e36pp/image/upload/v1669741779/theOrchardwebsite/protein2_i6z7im.jpg',
    name: 'Weekly lunch & dinner',
    description: 'It includes 5 lunches and 5 dinners, one per day.',
    price: 5,
    category: 'meal_plan',
    menuType: 'animal_protein'
})
    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    imageURL: 'https://res.cloudinary.com/dob3e36pp/image/upload/v1669741776/theOrchardwebsite/protein3_xzpw7u.jpg',
    name: 'Monthly lunch',
    description: 'Meet your goals and get a better way to stay healthy. With this plan full of protein, vegetables, and non-processes carbohydrates you will feel full and good. This plan includes 5 lunches per week.',
    price: 5,
    category: 'meal_plan',
    menuType: 'animal_protein'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))


Product.create({
    imageURL: 'https://res.cloudinary.com/dob3e36pp/image/upload/v1669741777/theOrchardwebsite/protein5_qbosnl.jpg',
    name: 'Monthly lunch & dinner',
    description: 'For people who would love to get a pro diet complete with a variety of dishes and tasty food.',
    price: 5,
    category: 'meal_plan',
    menuType: 'animal_protein'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))


Product.create({
    imageURL: 'https://res.cloudinary.com/dob3e36pp/image/upload/v1669741779/theOrchardwebsite/plantbased4_qmp3f5.jpg',
    name: 'Weekly lunch',
    description: "This plan is made for those that like to get into a better lifestyle. It includes 5 lunches, one per day. Delivery fee is not included on the sales price",
    price: 5,
    category: 'meal_plan',
    menuType: 'plant_based'
})
    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    imageURL: 'https://res.cloudinary.com/dob3e36pp/image/upload/v1669741779/theOrchardwebsite/plantbased3_uqq17o.jpg',
    name: 'Weekly lunch & dinner',
    description: 'It includes 5 lunches and 5 dinners, one per day.',
    price: 5,
    category: 'meal_plan',
    menuType: 'plant_based'
})
    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    imageURL: 'https://res.cloudinary.com/dob3e36pp/image/upload/v1669741778/theOrchardwebsite/plantbased2_ts81nw.jpg',
    name: 'Monthly lunch',
    description: 'Meet your goals and get a better way to stay healthy. With this plan full of protein, vegetables, and non-processes carbohydrates you will feel full and good. This plan includes 5 lunches per week.',
    price: 5,
    category: 'meal_plan',
    menuType: 'plant_based'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))


Product.create({
    imageURL: 'https://res.cloudinary.com/dob3e36pp/image/upload/v1669741778/theOrchardwebsite/plantbased1horizontal_szyx0l.jpg',
    name: 'Monthly lunch & dinner',
    description: 'For people who would love to get a pro diet complete with a variety of dishes and tasty food.',
    price: 5,
    category: 'meal_plan',
    menuType: 'plant_based'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    imageURL: 'https://leafly-public.s3-us-west-2.amazonaws.com/products/photos/gqks4MzTm63v6ThueThO_Fudge1.jpg',
    name: 'Brownies',
    description: 'Kill your cravings with this 100% heahlty snack. No sugar and gluten free.',
    price: 3,
    category: 'snack',
    menuType: 'plant_based'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))

Product.create({
    imageURL: 'https://i.pinimg.com/originals/6e/21/11/6e211116518b42daddaef39007b2a63a.png',
    name: 'Matcha balls',
    description: 'Kill your cravings with this 100% heahlty snack. No sugar and gluten free.',
    price: 3,
    category: 'snack',
    menuType: 'plant_based'
})

    .then(createdProduct => console.log(createdProduct))
    .catch(err => console.log(err))