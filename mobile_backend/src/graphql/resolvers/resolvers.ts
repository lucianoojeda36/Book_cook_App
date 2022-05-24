import Recipes from '../../models/recipes'



const Resolvers ={
  Query:{
    recipes: async () => {
      let data = await Recipes.find()
      return data
  },
  }

}

export default Resolvers