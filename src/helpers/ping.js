import ping from 'ping'

export async function pingTest(host){
    let res = await ping.promise.probe(host)
    return {
        inputHost: host,
        host: res.host,
        alive: res.alive,
        time: res.time,
        packetLoss: res.packetLoss,
        ip: res.numeric_host
    }
}
    



