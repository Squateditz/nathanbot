let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw 'Link Githubnya Mana? Contoh: https://github.com/ZeroChanBot/Scrappe'

    if (!regex.test(args[0])) throw 'Link Salah!'

    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    m.reply(`*Mohon Tunggu, Sedang Mengirim Repository..*`)
    conn.sendFile(m.chat, url, filename, null, m)

}
handler.help = ['gitclone <url>']
handler.tags = ['github']
handler.command = /gitclone/i

handler.limit = true

module.exports = handler
