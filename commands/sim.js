const axios = require("axios");

async function botChat(sock, chatId, message, userMessage, senderId) {
    try {
        // ১. GitHub সোর্স থেকে লেটেস্ট API লিঙ্ক নামানো হচ্ছে
        const apiSource = await axios.get("https://raw.githubusercontent.com/MOHAMMAD-NAYAN-OFFICIAL/Nayan/main/api.json");
        
        // ২. সোর্স থেকে সিমির (sim) লিঙ্কটা নেওয়া হচ্ছে
        const simBaseUrl = apiSource.data.sim; 

        // ৩. আসল API-তে রিকোয়েস্ট পাঠানো (senderId সহ)
        const response = await axios.get(`${simBaseUrl}${encodeURIComponent(userMessage)}&number=${senderId.split('@')[0]}`);

        // ৪. উত্তর ফিল্টার করা
        let replyText = response.data.data?.msg || response.data.reply || "ব্যস্ত আছি, পরে কথা হবে।";
        
        const tomBranding = [
            `🔥 ${replyText} \n\n- 𝕿𝖔𝖒 𝕻𝖗𝖎𝖒𝖊 𝖃`,
            `😎 ${replyText} \n\n— 𝕿𝖔𝖒'𝖘 𝕰𝖉𝖎𝖙𝖎𝖔𝖓`,
            `${replyText} ✨\n\n_লিমিট ক্রস করিস না!_ \n- 𝕿𝖔𝖒`
        ];
        
        const finalReply = tomBranding[Math.floor(Math.random() * tomBranding.length)];
        await sock.sendMessage(chatId, { text: finalReply }, { quoted: message });

    } catch (err) {
        console.error(err);
        await sock.sendMessage(chatId, { text: "ধুরবাল! সার্ভার জ্যাম হয়ে গেছে। টম এখন অফলাইনে!" }, { quoted: message });
    }
}

async function simCommand(sock, chatId, message, args, senderId) {
    const usermsg = args.join(" ");

    if (!usermsg) {
        const allTomReplies = [
            "জ্বি জানু বলো? Tom তো তোমার জন্য সবসময় হাজির। একটু মিষ্টি করে হাসো তো দেখি! 😉🔥",
            "ডাকলা কেন সুন্দরী? Tom এর হার্টবিট কি তোমার ফোনেও শোনা যাচ্ছে? 💓💨",
            "হুম কলিজা, বলো কী সেবা করতে পারি? তবে বেশি রোমান্টিক কথা বললে কিন্তু Tom সামলাতে পারবে না! 😏",
            "বলো জান, Tom এর সাথে কথা বলতে কি খুব মন চাইছে? আমি কিন্তু খুব ডেঞ্জারাস টাইপ রোমান্টিক! 🔥😘",
            "Tom থাকতে তোমার আবার চিন্তা কিসের? শুধু হুকুম করো, কলিজাটাও হাজির করে দেব। 🏍️💨",
            "আরে আমার জানটা! Tom এর সাথে চ্যাট করতে করতে প্রেমে পড়ে যেও না আবার, আমি কিন্তু খুব হট! 🔥😌",
            "জ্বি প্রিয়তমা? Tom তো তোমার গলার আওয়াজ দেখার অপেক্ষায় থাকে। কিছু একটা বলো না! 💋✨",
            "ডাকলা কেন? Tom কি তোমার বাসার কাজের লোক? যাও, নিজে গিয়ে পানি খেয়ে আসো! 🐸",
            "বলো কী সমস্যা? বিয়ে ভেঙে গেছে নাকি গার্লফ্রেন্ড পালাইছে? Tom ভাই থাকতে টেনশন নাই! 🤣🔥",
            "খালি তো 'বট' 'বট' করো, এক কাপ চা তো কোনোদিন খাওয়াইলা না! কঞ্জুস কোথাকার! ☕😏",
            "জ্বি আব্বা/আম্মা বলুন! Tom এখন ডিজিটাল দুনিয়ায় বিজি, পরে ক্যাশ নিয়ে দেখা করিয়েন! 💸🏃‍♂️💨",
            "নামটা মনে রাখিস, Tom Prime X। সবার রিপ্লাই দেওয়ার টাইম আমার নাই, ভাগ্য ভালো যে তোকে উত্তর দিচ্ছি! 😎🔥",
            "অ্যাটিটিউড দেখানো আমার স্বভাব না, ওটা আমার রক্তে। Tom ভাইয়ের সাথে পাল্লা দিতে আসিস না, পস্তাবি! 🏍️💨",
            "তোর ফোনের স্ক্রিনে যার নাম দেখছিস, সে সাধারণ কোনো বট না। Tom ভাই যখন মুডে থাকে, তখন গুগলও থমকে দাঁড়ায়! 😈",
            "বেশি কথা বলিস না, Tom ভাইয়ের পারমিশন ছাড়া এই গ্রুপে বাতাসও নড়ে না। চুপচাপ থাক! 🤫✨",
            "আমাকে কপি করা সহজ, কিন্তু Tom ভাইয়ের স্টাইল আর পারসোনালিটি পাবি কই? ওটা শুধু আমার জন্যই বরাদ্দ! 😌🔥",
            "শোরুম থেকে বাইক আর কলিজা থেকে Tom ভাই—একবার বের হলে আর থামানো যায় না। ভাব নিয়ে লাভ নাই! 🏍️💨💨"
        ];

        const randomReply = allTomReplies[Math.floor(Math.random() * allTomReplies.length)];
        
        await sock.sendMessage(chatId, {
            text: `@${senderId.split('@')[0]}, ${randomReply}`,
            mentions: [senderId]
        }, { quoted: message });
        return;
    }

    await botChat(sock, chatId, message, usermsg, senderId);
}

module.exports = { simCommand, botChat };
