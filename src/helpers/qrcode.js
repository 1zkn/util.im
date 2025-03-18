import QRcode from 'qrcode'

export const generateQR = async (content) => {
    try{
        const QRcodeImage = await QRcode.toDataURL(content)
        return { success: true, qr: QRcodeImage} 
    }catch(err){
        return { success: false, error: "QR Code generation failed"} 
    }
    
}