const mail = require("email-validator");
const express = require("express");
const { json } = require("express/lib/response");
const app = express();
// const importData = require("./data.json");
var fs = require("fs"); //อ่านไฟล์ user.json
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`)
})

// app.get("/", (res, req) => {
//     res.send("Hello World");
// })

// CORS policy for response from another website
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Content-Type", "application/json");
    next();
});
// Receive JSON request body with POST and PUT
app.use(express.json());

app.post("/create_ticket", (req, res) => {
    const localtime = new Date().toString();
    const time = localtime.substring(0, localtime.indexOf("G")-1);
    var json_data = JSON.parse(fs.readFileSync("ticket.json"));

    const ticket = {
        id: json_data["tickets"].length+1,
        title: req.body.title,
        description: req.body.description,
        contact_info: {
            name: req.body.name,
            tel: req.body.tel,
            email: req.body.email
        },
        status: "pending",
        create_time: time,
        update_time: time,
    }

    if(mail.validate(ticket["contact_info"]["email"]) && validateTel(ticket["contact_info"]["tel"])){
        json_data['tickets'].push(ticket);
        fs.writeFileSync("ticket.json", JSON.stringify(json_data));

        res.send(ticket);
    }
    else{
        res.status(400).send({
            error: "true",
            message: "Invalid Infomation"
        })
    }
})

app.put("/update_ticket", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const name = req.body.name;
    const tel = req.body.tel;
    const email = req.body.email;
    const status = req.body.status;
    var json_data = JSON.parse(fs.readFileSync("ticket.json"));
    const localtime = new Date().toString();
    const time = localtime.substring(0, localtime.indexOf("G")-1);
    let edited = {};
    let updated = false;

    if(id == undefined || id>json_data["tickets"].length || id<=0){
        res.status(400).send({
            error: "true",
            message: "Invalid ID"
        })
    }
    if(tel != undefined && !validateTel(tel)){
        res.status(400).send({
            error: "true",
            message: "Invalid Infomation"
        })
    }
    if(email != undefined && !mail.validate(email)){
        res.status(400).send({
            error: "true",
            message: "Invalid Infomation"
        })
    }

    for(let i=0; i<json_data["tickets"].length; i++){
        edited["id"] = id;

        if(id == json_data["tickets"][i]["id"]){
            edited = json_data["tickets"][i];

            if(title!=undefined && title!=json_data["tickets"][i]["title"]){
                json_data["tickets"][i]["title"] = title;
                edited["title"] = title;
                updated = true;
            }
            if(description!=undefined && description!=json_data["tickets"][i]["description"]){
                json_data["tickets"][i]["description"] = description;
                edited["description"] = description;
                updated = true;
            }
            if(name!=undefined && name!=json_data["tickets"][i]["contact_info"]["name"]){
                json_data["tickets"][i]["contact_info"]["name"] = name;
                edited["contact_info"]["name"] = name;
                updated = true;
            }
            if(tel!=undefined && tel!=json_data["tickets"][i]["contact_info"]["tel"]){
                json_data["tickets"][i]["contact_info"]["tel"] = tel;
                edited["contact_info"]["tel"] = tel;
                updated = true;
            }
            if(email!=undefined && email!=json_data["tickets"][i]["contact_info"]["email"]){
                json_data["tickets"][i]["contact_info"]["email"] = email;
                edited["contact_info"]["email"] = email;
                updated = true;
            }
            if(status!=undefined && status!=json_data["tickets"][i]["status"]){
                json_data["tickets"][i]["status"] = status;
                edited["status"] = status;
                updated = true;
            }
            if(updated){
                json_data["tickets"][i]["update_time"] = time;
                edited["update_time"] = time;
            }
            break;
        }
    }
    if(updated){
        fs.writeFileSync("ticket.json", JSON.stringify(json_data));
        res.send(edited);
    }
    else{
        res.send({
            error: "false",
            message: "No change detected"
        });
    }
}) 

app.get("/view_ticket/all", (req, res) => {
    var json_data = JSON.parse(fs.readFileSync("ticket.json"));
    const tickets = json_data["tickets"];

    res.send(tickets);
})

app.get("/view_ticket/all/sort_by_status", (req, res) => {
    var json_data = JSON.parse(fs.readFileSync("ticket.json"));
    const tickets = json_data["tickets"];
    let sorted = [];

    for(let ticket of tickets){
        if(ticket["status"] == "pending")
            sorted.push(ticket);
    }
    for(let ticket of tickets){
        if(ticket["status"] == "accepted")
            sorted.push(ticket);
    }
    for(let ticket of tickets){
        if(ticket["status"] == "resolved")
            sorted.push(ticket);
    }
    for(let ticket of tickets){
        if(ticket["status"] == "rejected")
            sorted.push(ticket);
    }
    
    res.send(sorted);
})

app.get("/view_ticket/all/sort_by_latest", (req, res) => {
    var json_data = JSON.parse(fs.readFileSync("ticket.json"));
    const tickets = json_data["tickets"];

    tickets.sort((a, b) => {
        let c = new Date(a["update_time"]);
        let d = new Date(b["update_time"]);
        return d-c;
    });

    res.send(tickets);
})

app.get("/view_ticket/filter_status", (req, res) => {
    const status = req.body.status;

    var json_data = JSON.parse(fs.readFileSync("ticket.json"));
    const tickets = json_data["tickets"];
    let filterd = [];

    for(let ticket of tickets){
        if(ticket["status"] == status)
            filterd.push(ticket);
    }

    res.send(filterd);
})

function validateTel(tel) {
    if(tel.length != 10)
        return false;

    if(tel.charAt(0) != '0')
        return false;

    for(let i=1; i<tel.length; i++){
        if(tel.charAt(i)<'0' && '9'<tel.charAt(i))
            return false;
    }
    return true;
}