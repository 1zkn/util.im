import express from 'express'
import { generateQR } from '../helpers/qrcode.js';

const router = express.Router()

router.get('/qr', async (req, res) => {
    const { text } = req.query
    if (!text) return res.status(400).json({ success: false, error: "Missing 'text' parameter" });

    const result = await generateQR(text)
    return res.json(result)
})

export default router