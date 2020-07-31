const orm = require("../config/orm");
const connection = require("../config/connection");


const burger= {
    //similar to a burger class with methods?

    all:function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },

    create: function(col, vals, cb){
        orm.insertOne("burgers", col, vals, function(res){
            cb(res)
        } )
    },

    update: function(objColVal, condition, cb){
        orm.updateOne("burgers", objColVal, condition, function(res){
            cb(res)
        })
    } 
}


module.exports = burger;