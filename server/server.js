const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

// mongoose.connect(
//   "mongodb+srv://Drew_Trumbaturi:Mfzth41bjEmak3YM@crud.z7qlv.mongodb.net/food?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//   }
// );

// app.post("/insert", async (req, res) => {
//   const foodName = req.body.foodName;
//   const days = req.body.days;
//   const food = new FoodModel({ foodName: foodName, daysSinceIAte: days });

//   try {
//     await food.save();
//     res.send("inserted data");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.put("/update", async (req, res) => {
//   const newFoodName = req.body.newFoodName;
//   const id = req.body.id;

//   try {
//     await FoodModel.findById(id, (err, updatedFood) => {
//       updatedFood.foodName = newFoodName;
//       updatedFood.save();
//       res.send("updated");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.get("/read", async (req, res) => {
//   // FoodModel.find({ foodName: {$eq: "Apple"}}, (err, result) => {
//   //     if(err) {
//   //         res.send(err);
//   //     }

//   //     res.send(result);
//   // })

//   FoodModel.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }

//     res.send(result);
//   });
// });

// app.delete("/delete/:id", async (req, res) => {
//     const id = req.params.id;

//     await FoodModel.findByIdAndRemove(id).exec();
//     res.send("deleted");
// });

// app.listen(3001, () => {
//   console.log("Server running on port 3001...");
// });
