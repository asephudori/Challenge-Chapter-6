const router = require('express').Router();
const { image } = require('../libs/multer');
const {createPost, getAllPosts, getPostById, updatePostById, deletePost} = require('../controllers/media.controllers')

router.post('/create', image.single('image'), createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePostById);
router.delete('/:id', deletePost);

module.exports = router;