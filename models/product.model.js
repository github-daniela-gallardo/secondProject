const mongoose =require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema (
    {
        imageURL: String,
        name:String,
        description: String, 
        price: Number,
        category: {
            type: String,
            enum: [
                'snack',
                'meal_plan'
            ]
        },
        menuType: {
            type: String,
            enum:[
                'animal_protein',
                'plant_based'
            ]
        }
    }
)

const Product = mongoose.model ('Product', productSchema)
module.exports = Product