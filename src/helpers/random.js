export const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const generateRandomString = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
   
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * chars.length)
        result = result + chars[randomIndex]
    }
    return result
}