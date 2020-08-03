const connection  = require("./connection");

function printQuestionMarks(num) {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

function objColVal(ob){
    const arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {

    //all my sql shit
    selectAll:(tableInput, cb)=>{
        let querystring = "SELECT * FROM " + tableInput +";"
        connection.query(querystring, (err, result)=>{
            if (err) throw err;
            cb(result)
        });
    },

    insertOne:(table, cols, vals, cb)=>{
        let querystring = "INSERT INTO "+ table;

        querystring +=  "(";
        querystring += cols.toString();
        querystring += ") VALUES (";
        querystring += printQuestionMarks(vals.length);
        querystring += ") ";

        console.log("querystring: ", querystring);

        connection.query(querystring, vals, (err, result)=>{
            if (err) throw err;

            console.log("Insert one result:", result)
            cb(result)
        })

    },

    updateOne:(table, objColVals, condition, cb)=>{
        let querystring = "UPDATE "+table;

        querystring+= " SET " + objColVal(objColVals);
        querystring+= " WHERE id=" + condition;

        connection.query(querystring, (err, result)=>{
            if (err) throw err;
            cb(result);
        })
    }
}


module.exports = orm;
