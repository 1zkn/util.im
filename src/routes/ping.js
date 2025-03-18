import express from 'express'
import { pingTest } from '../helpers/ping.js'

const router = express.Router()

router.get('/ping', async (req, res) => {
    pingHandler(req, res)

})

router.get('/ping/:host', async (req, res) => {
    pingHandler(req, res)
})

const pingHandler = async (req, res) => {
    let host
    if (req.params.host) {
        host = req.params.host
    } else if (req.query.host) {
        host = req.query.host
    } else {
        return res.status(500).json({ success: false, error: "Internal Error" })
    }
    if (!host) return res.status(400).json({ success: false, error: "Missing 'host' parameter" })
    let pingResponse = await pingTest(host)

    if (req.query.json) {
        return res.json(pingResponse)
    } else {
        return res.send(`${pingResponse.ip} ${pingResponse.alive ? pingResponse.time + "ms" : "unreachable"} \n`)
    }
}
export default router