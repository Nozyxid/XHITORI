let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let ch = db.data.chats[m.chat].premnsfw
	if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
let ahegao = (ch == true ? false : false)
let paptt = (ch == true ? false : false)
let ass = (ch == true ? false : false)
let blowjob = (ch == true ? false : false)
let cum = (ch == true ? false : false)
let ero = (ch == true ? false : false)
let yuri = (ch == true ? false : false)
let bdsm = (ch == true ? false : false)
let foot = (ch == true ? false : false)
let glasses = (ch == true ? false : false)
let jahy = (ch == true ? false : false)
let orgy = (ch == true ? false : false)
let next = 'ɴ ᴇ x ᴛ'
let fot = botdate
let txtprem = '❗ ɴsғᴡ ɪɴɪ ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ\nʜᴀʀᴀᴘ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ ! 📞'
let p = '🅟 | '
let f = 'Ⓕ | '

let tekk = `\`\`\`➩ Random Image Nsfw\`\`\` `
  let teks = `┊ 📮 Silahkan Pilih Dibawah!
┊› Atau ketik ${usedPrefix}ass
❏──···––`
const sections = [
   {
	title: '◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥',
	rows: [
	{title: `${ ahegao == true ? p : f}` + "A • Ahegao", rowId: ".ahegao"},
    {title: `${ paptt == true ? p : f}` + "P • Paptt", rowId: ".paptt"},
    {title: `${ blowjob == true ? p : f}` + "P • Blowjob", rowId: ".blowjob"},
    {title: `${ ass == true ? p : f}` + "P • Ass", rowId: ".ass"},
    {title: `${ yuri == true ? p : f}` + "P • Yuri", rowId: ".yuri"},
    {title: `${ bdsm == true ? p : f}` + "P • Bdsm", rowId: ".bdsm"},
    {title: `${ cum == true ? p : f}` + "P • Cum", rowId: ".cum"},
    {title: `${ ero == true ? p : f}` + "P • Ero", rowId: ".ero"},
    {title: `${ foot == true ? p : f}` + "P • Foot", rowId: ".foot"},
    {title: `${ glasses == true ? p : f}` + "P • Glasses", rowId: ".glasses"},
    {title: `${ jahy == true ? p : f}` + "P • Jahy", rowId: ".jahy"},
    {title: `${ orgy == true ? p : f}` + "P • Orgy", rowId: ".orgy"},
	]
    },
]

const listMessage = {
  text: teks,
  footer: '┏- - - - -  INFO - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Free\n┗•',
  title: `❏––––[ *NSFW* ]–––`,
  buttonText: "- -NSFW FREE- -",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['<type>', '<type>']
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfwfree|hentaifree)/i

export default handler
