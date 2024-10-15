const express = require("express");
const app = express();

//Server Code
const PORT = 1802;


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


// Records Array
let records = [] ;



app.get("/", (req, res) => {
  return res.render("index",{records});
});


// Record Add Karva Mate

app.post("/add",(req,res)=>{
const newrecord = req.body.record;
if (newrecord) {
    records.push(newrecord)
} 
res.redirect("/");
})

// Record Edit Karva Mate

app.post("/edit/:index",(req,res)=>{
    const index = req.params.index;
    const editToBe = records[index];
    res.render("edit", { record: editToBe, index });


})

// Record Update Karva Mate

app.post("/update/:index",(req,res)=>{
    const ind = req.params.index;
    records[ind] = req.body.record;
    res.redirect("/");
})

// Recoed Delet Krava Mate

app.get("/delet/:index",(req,res)=>{
const ind = req.params.index
records.splice(ind,1)
res.redirect("/") 

})


app.listen(PORT, () => {
  console.log("Server Started");
});
