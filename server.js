const express =require("express");
const mongoose =require("mongoose");
const cors =require("cors");
const path = require("path");
require("dotenv").config();

//set up express
const app = express();
app.use(express.json());
app.use(cors());

const PORT =process.env.PORT || 5000;


//set up mongoose
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},(err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
});

//set up route
app.use("/users",require("./routes/userRouter"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static('frontend/build'));
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
    })
}

//Starting app
app.listen(PORT,() => console.log(`THE SERVER HAS STARTED ON PORT : ${PORT}`));

