const express = require("express");
const burger = require("../models/burger")
const path = require("path")

const router = express.Router()


router.get("/", function(req, res){
    burger.all(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log("This is the HBS Object: ", hbsObject);
        res.render("index", hbsObject) 
    })
})

router.get("/assets/css/styles.css", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"))
})

router.get("/assets/js/burger.js", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/assets/js/burger.js"))
})

router.get("/public/assets/img/burger.png", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/assets/img/burger.png"))
})

router.post("/api/burgers", (req, res)=>{
    console.log(req.body.burger_name)
    burger.create(["burger_name"], [req.body.burger_name], function(result){
        res.json({ id: result.insertId })
    })
})

router.put("/api/burgers/:id", (req, res)=>{
    const condition = req.params.id;

    console.log("Condition: ", condition);

    burger.update({devoured: req.body.devoured},
        condition, 
        function(result){
            if(result.changedRows===0){
                return res.status(404).end()
            } else {
                res.status(200).end()
            }

        }
    );
});

module.exports= router;