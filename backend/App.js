import express from "express"
import mongoose from "mongoose";
import route_ticket from "./Route/route_ticket.js"
import route_user from "./Route/route_user.js"
import cors from "cors"

let app = express()
app.use(cors({
    origin: ["https://test-kpmg-backend.vercel.app/"],
    methods : ["POST","GET","PUT","PATCH","DELETE"],
    credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({extended : true})); 

let URI = 'mongodb+srv://Moncef:moncef123@cluster0.yruvkt3.mongodb.net/test1_kpmg?retryWrites=true&w=majority' ; 
mongoose.connect(URI)
.then(()=> console.log("Connexion a Mongo réussie !"))
.catch(()=> console.log("Connexion a Mongo échouée"));

app.use('/ticket', route_ticket)
app.use('/user', route_user)

const port = 3000;
app.listen( process.env.PORT , () => console.log(`Le serveur tourne sur le port: ${port}`));