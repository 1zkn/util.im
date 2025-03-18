import express from 'express'

const router = express.Router()

router.get('/ip', (req, res) => {
    let ip = req.headers["x-forwarded-for"] || 
    req.connection.remoteAddress ||
    "Unknown";
  
  res.json({ ip })
})

export default router