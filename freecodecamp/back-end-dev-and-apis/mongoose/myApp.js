require('dotenv').config();
let mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
})

let Person = mongoose.model('Person', personSchema)

//let Person = require('./person')



const createAndSavePerson = (done) => {

  let person = new Person ({
    name: "Pedro",
    age: 27,
    favoriteFoods: ["Japonesa", "Churrasco"]
  })

  person.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
  
  //done(null, data);
};

const createManyPeople = (arrayOfPeople, done) => {

  console.log(arrayOfPeople)
  
   Person.create(arrayOfPeople,function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  })
  
  //done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {

  let matchers = Person.find({name: personName}, function(err,data){
    if (err) return console.error(err);
    done(null,data)
  })
  
  //done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  
  let matchers = Person.findOne({favoriteFoods: food}, function(err,data){
    if (err) return console.error(err);
    done(null,data)
  })
  
  //done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  let matchers = Person.findById(personId, function(err,data){
    if (err) return console.error(err);
    done(null,data)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  let matchers = Person.findById(personId, function(err, data) {
    if (err) return console.error(err);
    console.log("Find edit and then save function ", data);
    data.favoriteFoods.push(foodToAdd)
    data.save(function(err, updatedData) {
    if (err) return console.error(err);
    done(null, updatedData)
    });
  })

  
  
  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    {
      name: personName
    },
    {
      age: ageToSet
    },
    {
      new: true,
      runValidators: true
    },
    function(err,data){
      if(err) return console.error(err);
      done(null, data);
    })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function(err,data){
    if(err) return console.error(err)
    done(null,data)
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({name: nameToRemove}, function(err, data){
    if(err) return console.error(err)
    done(null,data)
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  
  var findQuery = Person.find({favoriteFoods: foodToSearch}).sort({name: 1}).limit(2).select({age: 0}).exec(function (err,data){
    if (err) return console.error(err)
    done(null,data)
  })
};
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
