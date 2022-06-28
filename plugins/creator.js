const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard3 = 'BEGIN:VCARD\n' 
                    + 'VERSION:3.0\n' 
                    + 'N:Sy;Bot;;;'
                    + 'FN:Nathan\n'
                    + 'item1.TEL;waid=6287834993722:6287834993722\n'
                    + 'item1.X-ABLabel:👑 Creator\n'
                    + 'item2.EMAIL;type=INTERNET:nathanaelhananta09@gmail.com\n'
                    + 'item2.X-ABLabel:✉️ Email\n'
                    + 'item3.URL:https://youtube.com/c/ZEROBOT7/\n'
                    + 'item3.X-ABLabel:⚙️ YouTube Owner\n'
                    + 'item4.ADR:;;🇮🇩 Indonesia;;;;\n'
                    + 'item4.X-ABADR:ac\n'
                    + 'item4.X-ABLabel:🌍 Region\n'
                    + 'item5.X-ABLabel:⚔️ NataMD Owner\n'
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Nathan', contacts: [{ vcard3 }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler