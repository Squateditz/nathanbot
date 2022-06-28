let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Contoh:\n${usedPrefix + command} Nama Bug/Error nya <copy/tag pesan erornya>`
    if (text.length < 10) throw `Laporan Terlalu Pendek, Minimal 10 Karakter!`
    if (text.length > 1000) throw `Laporan Terlalu Panjang, Maksimal 1000 karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan Telah Disampaikan Ke Owner Bot, Jika ${command.toLowerCase()} Palsu/Hanya Main-Main Tidak Akan Ditanggapi Dan User Akan Kami Banned._`)
}
handler.help = ['report', 'request'].map(v => v + ' <text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
module.exports = handler
