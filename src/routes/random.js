import express from 'express'
import { generateRandomNumber, generateRandomString } from '../helpers/random.js'


const router = express.Router()

router.get('/random/number', (req, res) => {
    const min = req.query.min ? parseInt(req.query.min) : 1
    const max = req.query.min ? parseInt(req.query.max) : 100
    
    if(isNaN(min) || isNaN(max)){
        return res.json({ success: false, error: "Invalid min/max parameters" });
    }

    if (min > max) {
        return res.json({ success: false, error: "min cannot be greater than max" });
    }
    const number = generateRandomNumber(min, max)

    if (req.query.json) {
        res.json({ success: true, number })
    } else {
        res.send(String(number))
    }
})

router.get('/random/string', (req, res) => {
    randomStrHandler(req, res)
})

router.get('/random/string/:length', (req, res) => {
    randomStrHandler(req, res)
})

const randomStrHandler = (req, res) => {
    let length
    if(req.query.length){
        length = req.query.length ? parseInt(req.query.length) : 10
    }else if(req.params.length){
        length = req.params.length ? parseInt(req.params.length) : 10
    }else{
        length = 10
    }
    if(isNaN(length)){
        return res.json({ success: false, error: "Invalid length parameter" });
    }

    if (length < 1 || length > 1000) {
        return res.json({ success: false, error: "length must be between 1 and 1000" });
    }

    const randomStr = generateRandomString(length)
    
    if (req.query.json) {
        return res.json({ success: true, randomStr })
    } else {
        return res.send(randomStr)
    }
}
export default router