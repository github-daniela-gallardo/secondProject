const mongoose =require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema (
    {
        name:String,
        description: String, 
        price: String,
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