import express from 'express'
import { isValidIpv4, jsonToText, resolveDns } from '../helpers/dns.js'


const router = express.Router()
const DEFAULT_DNS = "1.1.1.1"

router.get('/dns', async (req, res) => {
    let { domain, dns: dnsServer, type } = req.query

    if(!dnsServer){
        dnsServer = DEFAULT_DNS
    }

    if(!domain || !type){
        return res.status(400).json({ success: false, error: "Missing 'domain' or 'type' parameter" })
    }

    if(!isValidIpv4(dnsServer)){
        return res.status(400).json({ success: false, error: "Invalid DNS IP address (IPv4)" })
    }

    type = type.toUpperCase()
    const validTypes = ["A", "AAAA", "CNAME", "MX", "TXT", "NS", "SOA", "SRV"];
    if (!validTypes.includes(type)) {
        return res.status(400).json({ success: false, error: "Invalid DNS record type" });
    }

    const result = await resolveDns(domain, type, dnsServer)
    return res.json(result)
    
})

export default router