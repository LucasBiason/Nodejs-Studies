
import mongoose from "mongoose"

mongoose.connect("mongodb+srv://lucasbiason:0WwaXaKLRtVhSd6K@cluster0.9hvcq.gcp.mongodb.net/aluranode");

let db = mongoose.connection;

export default db;