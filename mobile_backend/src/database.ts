import mongoose from 'mongoose';

const Connnect = async ()=>{
try {
  await mongoose.connect('mongodb://lucianoojeda36:yXStUdbfWLTgkywe@cluster0-shard-00-00.lq04m.mongodb.net:27017,cluster0-shard-00-01.lq04m.mongodb.net:27017,cluster0-shard-00-02.lq04m.mongodb.net:27017/restaurant_intern?ssl=true&replicaSet=atlas-p601l9-shard-0&authSource=admin&retryWrites=true&w=majority')
  
  console.log('DATABASE IS CONECTED')
} catch (error) {
  console.log(error)  
}
}

export default Connnect;