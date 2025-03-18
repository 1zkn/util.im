import crypto from 'crypto'

export const generateHash = (text, algorithm) => {
    return crypto.createHash(algorithm).update(text).digest("hex")
}