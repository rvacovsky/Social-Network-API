const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/<thoughtId>
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/<reactionId>
router
  .route('/:thoughtId/:reactionId')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
