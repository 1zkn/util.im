import { Resolver } from 'dns/promises'

export const isValidIpv4 = (ip) => {
    const ipPattern = /^(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})){3}$/
    return ipPattern.test(ip)
}

export const jsonToText = (jsonData) => {
    if(Array.isArray(jsonData)){
        if (jsonData.length > 0 && typeof jsonData[0] === "object") {
            return jsonData.map(record => `${record.exchange} priority: ${record.priority}`).join('\n')
        }
        return jsonData.flat().join("\n");
    }else if(typeof jsonData == "object"){
        return Object.entries(jsonData)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");
    }else{
        return String(jsonData)
    }
}

export const resolveDns = async (domain, type, dnsServer) => {
    try{
        const resolver = new Resolver();
        resolver.setServers([dnsServer])
        const addresses = await resolver.resolve(domain, type)
        return { success: true, records: addresses }
    }catch(err){
        return { success: false, error: err.message }
    }
}