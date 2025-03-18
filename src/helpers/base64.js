export const encodeBase64 = (text) => {
    return Buffer.from(text).toString("base64")
}

export const decodeBase64 = (base64) => {
    return Buffer.from(base64, "base64").toString("utf-8")
}