import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

router.get('/uuid', (req, res) => {
    const uuid = uuidv4()
    if (req.query.json) {
        res.json({ success: true, uuid });
    } else {
        res.type("text").send(uuid);
    }
})

export default router