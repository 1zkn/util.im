import express from 'express'

import base64Routes from './routes/base64.js'
import generateQR from './routes/qrcode.js'
import generateHash from './routes/hash.js'
import domainDNS from './routes/dns.js'
import getIp from './routes/ip.js'
import pingTest from './routes/ping.js'
import generateuuidv4 from './routes/uuid.js'
import random from './routes/random.js'

const router = express.Router()
router.use(base64Routes)
router.use(generateQR)
router.use(generateHash)
router.use(domainDNS)
router.use(getIp)
router.use(pingTest)
router.use(generateuuidv4)
router.use(random)
export default router