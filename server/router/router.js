import express from 'express'
import { loginUser, signupUser } from '../controller/userController.js';
import upload from '../utils/upload.js';
import { getImage, uploadFile } from '../controller/imageController.js';
import { createBlog, deleteBlog, getAllBlogs, getBlog, getUserBlog, updateBlog, updateviews } from '../controller/blogController.js';

const router =express.Router();

router.post('/signup',signupUser);
router.post('/login',loginUser);

// router.post('/file/upload',uploadFile);
router.post('/file/upload',upload.single('file'),uploadFile);
router.get('/file/:filename',getImage);

router.post('/create/blog', createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blog/:id', getBlog);
router.get('/blogs/:user', getUserBlog);

router.put('/update/:id', updateBlog);
router.put('/update/view/:id', updateviews);
router.delete('/delete/:id', deleteBlog);

export default router