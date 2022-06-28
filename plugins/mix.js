const emojiUnicode = require("emoji-unicode");
const fs = require("fs")
const { createReadStream, unlinkSync, writeFileSync } = require('fs');

let handler = async (m, { conn, text, args }) => {
        var axios = require('axios');
            if (!args[0]) throw 'Contoh penggunaan:\n\n*.emojimix 😶+😶'
		let [emoji1, emoji2] = text.split`+`
                var emoji11 = "u"+emojiUnicode(emoji1),emoji22 = "u"+emojiUnicode(emoji2);
                    var { data } = await axios.get(`https://www.gstatic.com/android/keyboard/emojikitchen/20201001/${emoji11}/${emoji11}_${emoji22}.png`,{  method: 'GET',  responseType: 'arraybuffer' });
                writeFileSync(__dirname + "/tmp/emojimix.png", Buffer.from(data, 'utf-8'));
		let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
        }

handler.help = ['mix'].map(v => v + ' emoji|emoji')
handler.tags = ['sticker']

handler.command = /^(mix)$/i

module.exports = handler
