// endpoint -> caso de uso -> modelo
const Koders = require('../models/koders');

function getAll() {
    return Koders.find({});
}

function createKoder(koders){
    return Koders.create(koders);
}

function removeKoder(id){
    return Koders.findByIdAndDelete(id);
}
function updateById(id, dataToUpdate){
    return Koders.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
    getAll,
    createKoder,
    removeKoder,
    updateById
};