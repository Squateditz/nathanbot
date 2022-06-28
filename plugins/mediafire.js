let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Url?\n\nCara Penggunaan:\n${usedPrefix + command} url\nContoh:\n${usedPrefix + command} https://www.mediafire.com/file/9w1ke8ve1dcz666/Glory+Ages+Samurai+Mod+Apk+Terbaru+2022+Unlimited+Money+BY+SAFRY+HITZ.apk/file`
    let res = await fetch(API('melcanz', '/mediafire', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.result.link, json.result.nama, wm, m)
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['download']
handler.command = /^(mediafire|mf)$/i

handler.limit = 1

module.exports = handler
