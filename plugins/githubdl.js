let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'Usernamenya Mana?\nContoh ZeroChanBot'
if (!args[1]) throw 'Repo Nya Mana?\nContoh Scrappe'

let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
//ByRizkyAdi
m.reply(`Waiting For Compress To Zip`)
conn.sendFile( m.chat, url, 'repo.zip', null, m)

}
handler.help = ['githubdl']
handler.tags = ['github']
handler.command = /githubdl/i

handler.limit = 5

module.exports = handler
