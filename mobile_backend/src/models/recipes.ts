import mongoose from 'mongoose';
const {Schema,model} = mongoose



const RecipesSchema = new Schema({
category:String,
description: String,
ingredients:[String],
calories:[String],
likes:Number,
comments:[String],
retweets:Number,
score:Number,
image:[String],
})


const Recipes = model('Recipes',RecipesSchema)

export default Recipes