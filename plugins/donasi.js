/**
 * GOSAH GANTI NOMORKU LAH KAK
 * MENDING KALIAN TAMBAHIN NOMOR MU AJA DARIPADA GANTI
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*────── 「 DONATE 」 ──────*
Kalian Bisa Nih Dukung Nathan Dengan Cara Donasi Ke:
┌〔 Donasi • Pulsa 〕
├ 087834993722 (OVO/GOPAY/DANA/SHOPEEPAY/PULSA)
├ 081329411749 (PULSA)
└────
Berapapun Donasimu.
Bakalan Berarti Banget Bagi Owner 😁`
let message = await prepareWAMessageMedia({ image: {url: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=Donasi' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             callButton: {
               displayText: 'XL-Axiata',
               phoneNumber: '+62 878-3499-3722'
             }

           },
               {
             callButton: {
               displayText: 'TELKOMSEL',
               phoneNumber: '+62 813-2941-1749'
             }
           },           
               {
             quickReplyButton: {
               displayText: 'CONTACT OWNER',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
