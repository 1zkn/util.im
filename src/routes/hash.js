import express from 'express'
import { generateHash } from '../helpers/hash.js'

const router = express.Router()

router.get('/hash/md5', (req, res) => {
    hashHandler(req, res, "md5")
})

router.get('/hash/md5/:text', (req, res) => {
    hashHandler(req, res, "md5")
})

router.get("/hash/sha256/:text", (req, res) => {
    hashHandler(req, res, "sha256")
})

router.get("/hash/sha256/:text", (req, res) => {
    hashHandler(req, res, "sha256")
})

router.get("/hash/sha256/:text", (req, res) => {
    hashHandler(req, res, "sha256")
})

router.get("/hash/sha512", (req, res) => {
    hashHandler(req, res, "sha512")
})

const hashHandler = async (req, res, algorithm) => {
    let text
    if (req.query.text) {
        text = req.query.text
    } else if (req.params.text) {
        text = req.params.text
    } else {
        return res.status(500).json({ success: false, error: "Missing 'text' parameter" })
    }
    if (!text) return res.status(400).json({ success: false, error: "Missing 'text' parameter" });

    if (req.query.json) {
        return res.json({ success: true, algorithm: algorithm, hash: generateHash(text, algorithm) });
    }
    return res.send(generateHash(text, algorithm))

}


export default router