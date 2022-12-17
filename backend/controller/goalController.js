const asyncHandler = require("express-async-handler");

//@desc Get goals
//Route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//@desc Create goal
//Route POST /api/goals
//@access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  res.status(201).json({
    message: "Created a goal",
    goal: req.body,
  });
});

//@desc update goal
//Route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated goal of ${req.params.id}` });
});

//@desc Delete goal
//Route DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal of ${req.params.id}` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
