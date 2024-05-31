//routes component
import express from 'express'
import convertMarkdownHtml from './controller.js';

const router = express.Router();
router.post(`/convert`,convertMarkdownHtml)


export default router;
