import express from 'express'
import { encodeBase64, decodeBase64 } from '../helpers/base64.js'

const router = express.Router()

router.get('/base64encode', (req, res) => {
    const { text } = req.query
    if (!text) return res.status(400).json({ success: false, error: "Missing 'text' parameter" })
    if (req.params.json) {
        return res.json({ success: true, base64: encodeBase64(text) })
    }
    return res.send(encodeBase64(text))

})

router.get('/base64decode', (req, res) => {
    const { text } = req.query
    if (!text) return res.status(400).json({ success: false, error: "Missing 'text' parameter" })
    if (req.params.json) {
        return res.json({ success: true, base64: decodeBase64(text) })
    }
    return res.send(decodeBase64(text))
})

export default router