const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const time = new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'Asia/Dhaka' });
    const date = new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Dhaka' });

    const helpMessage = `✨ *COMMAND MENU* ✨
┠───────────────
┃ 💎 *Bot:* ${settings.botName || 'TOM-PRIME-X'}
┃ 👑 Owner: *${settings.botOwner || 'TOM PRIME-X'}*
┃ 🌍 Prefix: *${settings.prefix || '.'}*
┃ 🧩 Version: ${settings.version || '1.1.5'}
┃ 🕒 Time: ${time}
┃ 📅 Date: ${date}
┃ 🌐 Timezone: Asia/Dhaka
┃ 📜 Total Commands: 157
┠───────────────

│  ⚙️ *System & Admin*
│   ├── .ban
│   ├── .promote
│   ├── .demote
│   ├── .mute
│   ├── .unmute
│   ├── .delete
│   ├── .kick
│   ├── .warnings
│   ├── .warn
│   ├── .antilink
│   ├── .antibadword
│   ├── .clear
│   ├── .tag
│   ├── .tagall
│   ├── .tagnotadmin
│   ├── .hidetag
│   ├── .chatbot
│   ├── .resetlink
│   ├── .antitag
│   ├── .welcome
│   ├── .goodbye
│   ├── .setgdesc
│   ├── .setgname
│   └── .setgpp
│
┕━━━━━━━━━━━━━━━━━━

│  🧠 *AI & Chat*
│   ├── .gpt
│   ├── .gemini
│   ├── .imagine
│   ├── .flux
│   └── .sora
│
┕━━━━━━━━━━━━━━━━━━

│  🎞️ *Downloader*
│   ├── .play
│   ├── .song
│   ├── .spotify
│   ├── .instagram
│   ├── .facebook
│   ├── .tiktok
│   ├── .video
│   └── .ytmp4
│
┕━━━━━━━━━━━━━━━━━━

│  🎨 *Image & Sticker*
│   ├── .blur
│   ├── .simage
│   ├── .sticker
│   ├── .removebg
│   ├── .remini
│   ├── .crop
│   ├── .tgsticker
│   ├── .meme
│   ├── .take
│   ├── .emojimix
│   ├── .igs
│   └── .igsc
│
┕━━━━━━━━━━━━━━━━━━

│  🎭 *Fun & Games*
│   ├── .tictactoe
│   ├── .hangman
│   ├── .guess
│   ├── .trivia
│   ├── .answer
│   ├── .truth
│   ├── .dare
│   ├── .compliment
│   ├── .insult
│   ├── .flirt
│   ├── .shayari
│   ├── .goodnight
│   ├── .roseday
│   ├── .character
│   ├── .wasted
│   ├── .ship
│   ├── .simp
│   └── .stupid
│
┕━━━━━━━━━━━━━━━━━━

│  🧭 *General*
│   ├── .help
│   ├── .ping
│   ├── .alive
│   ├── .tts
│   ├── .owner
│   ├── .joke
│   ├── .quote
│   ├── .fact
│   ├── .weather
│   ├── .news
│   ├── .attp
│   ├── .lyrics
│   ├── .8ball
│   ├── .groupinfo
│   ├── .staff
│   ├── .vv
│   ├── .trt
│   ├── .ss
│   ├── .jid
│   └── .url
│
┕━━━━━━━━━━━━━━━━━━

│  🛡️ *Owner*
│   ├── .mode
│   ├── .clearsession
│   ├── .antidelete
│   ├── .cleartmp
│   ├── .update
│   ├── .settings
│   ├── .setpp
│   ├── .autoreact
│   ├── .autostatus
│   ├── .autotyping
│   ├── .autoread
│   ├── .anticall
│   ├── .pmblocker
│   ├── .setmention
│   └── .mention
│
┕━━━━━━━━━━━━━━━━━━

│  🔤 *Textmaker*
│   ├── .metallic
│   ├── .ice
│   ├── .snow
│   ├── .impressive
│   ├── .matrix
│   ├── .light
│   ├── .neon
│   ├── .devil
│   ├── .purple
│   ├── .thunder
│   ├── .leaves
│   ├── .1917
│   ├── .arena
│   ├── .hacker
│   ├── .sand
│   ├── .blackpink
│   ├── .glitch
│   └── .fire
│
┕━━━━━━━━━━━━━━━━━━

│  🖼️ *Pies & Anime*
│   ├── .pies
│   ├── .china
│   ├── .indonesia
│   ├── .japan
│   ├── .korea
│   ├── .hijab
│   ├── .nom
│   ├── .poke
│   ├── .cry
│   ├── .kiss
│   ├── .pat
│   ├── .hug
│   ├── .wink
│   └── .facepalm
│
┕━━━━━━━━━━━━━━━━━━

│  🧩 *MISC & Github*
│   ├── .heart
│   ├── .horny
│   ├── .circle
│   ├── .lgbt
│   ├── .lolice
│   ├── .its-so-stupid
│   ├── .namecard
│   ├── .oogway
│   ├── .tweet
│   ├── .ytcomment
│   ├── .comrade
│   ├── .gay
│   ├── .glass
│   ├── .jail
│   ├── .passed
│   ├── .triggered
│   ├── .git
│   ├── .github
│   ├── .sc
│   └── .repo
│
┕━━━━━━━━━━━━━━━━━━

🌟 *Powered by 𝐓𝐎𝐌 𝐏𝐑𝐈𝐌𝐄 𝐗*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        const contextInfo = {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '',
                newsletterName: 'TOM-PRIME-X Updates',
                serverMessageId: -1
            }
        };

        if (fs.existsSync(imagePath)) {
            await sock.sendMessage(chatId, { image: fs.readFileSync(imagePath), caption: helpMessage, contextInfo }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { text: helpMessage, contextInfo }, { quoted: message });
        }
    } catch (e) {
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
