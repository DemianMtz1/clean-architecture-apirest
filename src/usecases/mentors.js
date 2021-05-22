const Mentor = require('../models/mentors');

/*
  GET /mentores
  POST /mentores
  DELETE /mentores/:id
  PATCH /mentores/:id
*/

function getAll (){
    return Mentor.find({});
}
function create({ name, lastName, age, gender, modulo}) {
    return Mentor.create({ name, lastName, age, gender, modulo})
}
function deleteById(id){
    return Mentor.findByIdAndDelete(id, { useFindAndModify: false});
}
function updateById(id, dataToUpdate) {
    return Mentor.findByIdAndUpdate(id, dataToUpdate, { useFindAndModify: false})
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}