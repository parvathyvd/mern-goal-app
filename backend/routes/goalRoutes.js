const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, createGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
