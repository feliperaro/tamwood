const express = require('express');
const router = express.Router();

const { createGoal, deleteGoal, getGoals, updateGoal } = require('../../controllers/goals-controller')

router.route('/').get(getGoals).post(createGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router