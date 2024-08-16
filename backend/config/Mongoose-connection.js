import mongoose from 'mongoose'

export default function mongoConn(){
    mongoose.connect(`mongodb://localhost:27017/Fitness`)
       .then(() => console.log('MongoDB Connected'))
       .catch(err => console.log(err));

}