const axios = require('axios');

// --- Tom, তুমি এখান থেকে রিপ্লাইগুলো চেঞ্জ করতে পারবে ---
const myBotReplies = [
    "হুম জান তোমার অইখানে উম্মমাহ😷😘",
    "ডাকলা কেন সুন্দরী? Tom হাজির! 💓💨",
    "আসো বুকে আসো, এতো ডাকো কেন! 🥱",
    "নামটা মনে রাখিস, Tom Prime X। 😎🔥",
    "বার বার আমাকে ডাকস কেন? গফ দিতে পারবি? 😡"
];
// --------------------------------------------------

const _0x1f2a = ['\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x4D\x4F\x48\x41\x4D\x4D\x41\x44\x2D\x4E\x41\x59\x41\x4E\x2D\x4F\x46\x46\x49\x43\x49\x41\x4C\x2F\x4E\x61\x79\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x61\x70\x69\x2E\x6A\x73\x6F\x6E', '\x64\x61\x74\x61', '\x61\x70\x69', '\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65', '\x73\x70\x6C\x69\x74', '\x40', '\x6A\x6F\x69\x6E', '\x74\x72\x69\x6D'];

async function simCommand(_0x44x1, _0x44x2, _0x44x3, _0x44x4, _0x44x5) {
    const _0x11x9 = _0x1f2a;
    try {
        const _0x22x1 = _0x44x4[_0x11x9[6]]("\x20")[_0x11x9[7]]();
        
        if (!_0x22x1) {
            const _0x33x2 = myBotReplies[Math.floor(Math.random() * myBotReplies.length)];
            return await _0x44x1[_0x11x9[3]](_0x44x2, { text: `\x40${_0x44x5[_0x11x9[4]](_0x11x9[5])[0]}, ${_0x33x2}`, mentions: [_0x44x5] }, { quoted: _0x44x3 });
        }

        const _0x99x1 = await axios.get(_0x11x9[0]);
        const _0x88x2 = await axios.get(`${_0x99x1[_0x11x9[1]][_0x11x9[2]]}\x2F\x73\x69\x6D\x3F\x74\x79\x70\x65\x3D\x61\x73\x6B\x26\x61\x73\x6B\x3D${encodeURIComponent(_0x22x1)}\x26\x6E\x75\x6D\x62\x65\x72\x3D${_0x44x5[_0x11x9[4]](_0x11x9[5])[0]}`);
        
        const _0x77x3 = _0x88x2[_0x11x9[1]][_0x11x9[1]]?.msg || "\uD83E\uDD16\x20\x42\x79\x61\x73\x74\x6F\x21";
        await _0x44x1[_0x11x9[3]](_0x44x2, { text: `\uD83D\uDD25\x20${_0x77x3}\x0A\x0A\x2D\x20\uD835\uDD11\uD835\uDD2C\uD835\uDD2A\x20\uD835\uDD13\uD835\uDD2F\uD835\uDD26\uD835\uDD2A\uD835\uDD1E\x20\uD835\uDD1B`, contextInfo: { isForwarded: false } }, { quoted: _0x44x3 });

    } catch (_0xerr) {
        await _0x44x1[_0x11x9[3]](_0x44x2, { text: "\u09A7\u09C1\u09B0\u09AC\u09BE\u09B2\u0021\x20\u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\x20\u099C\u09CD\u09AF\u09BE\u09AE\u0964" }, { quoted: _0x44x3 });
    }
}

module.exports = { simCommand };
