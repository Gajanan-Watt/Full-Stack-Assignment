const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);


mongoose.connect(
    "mongodb+srv://library:lib12345@cluster0.esqfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
).then(() => console.log("connected to database"))
.then(() => {
    app.listen(5000);
}).catch((err) => console.log(err))