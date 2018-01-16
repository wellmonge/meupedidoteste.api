import Person from "../models/person";
import utils from "../utils/index";
  
//const urlBase = "/api/person";
const urlBase = "/person";

module.exports = function (app) {          

    app.get(urlBase + '/findAll', function(req, res) {
        Person.find({}, function(err, persons) {
            res.json(persons);    
        });
    });
       
    app.post(urlBase + '/create', function(req, res) {
        
        if (!req.body) return; 

        var newPerson = new Person(req.body);
        
        var promise = newPerson.save(function (err) {
            if (err) {
                res.json({
                    Success: true,
                    Message: 'Pessoa já existe!'
                });    
            }
        });
    });

    app.put(urlBase + '/update', function(req, res) {
        
        var person = req.body;
                    
        if (!person) return; 

        Person.findOneAndUpdate({name : person.name },person,{new: true}, function(err, personResult) {            
              if (err) {
                res.json({
                    Success: true,
                    Message: err.message
                });    
            }
        });    

    });

    app.delete(urlBase + '/remove', function(req, res) {
        
        var person = req.body;
        
        if (!person) return; 

        Person.findOneAndRemove({name : person.name }, function(err, personResult) {            
            if (err) {
                res.json({
                    Success: true,
                    Message: err.message
                    });    
            }
        });    

    });

}