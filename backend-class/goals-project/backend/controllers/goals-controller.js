const getGoals = (req, res) => {
    res.send({message: 'get goals'})
}

const createGoal = (req, res) => {
    res.send({message: 'create goals'}) 
}

const deleteGoal = (req, res) => {
    res.send({message: 'delete goals'}) 
}

const updateGoal = (req, res) => {
    console.log(req.body);
    if (!req.body.text) {
        console.log('text is missing');
        res.status(400)
        throw new Error('Provide text to update goal');
    }
    res.send({message: 'update goal'})
}

module.exports = { getGoals, createGoal, updateGoal, deleteGoal }