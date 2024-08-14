import mongoose from "mongoose";

const bookSchema= mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const Book = mongoose.model("Book", bookSchema);


export default Book;


// {
//     "id" : 7,
//     "name":"Mind Game",
//     "title": "lorem asdfdsf  asdf",
//     "price":0,
//     "category": "Free",
//     "image":"https://img.freepik.com/premium-photo/books-education_884653-21680.jpg?w=740"
// },