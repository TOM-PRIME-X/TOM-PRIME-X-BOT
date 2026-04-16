const axios = require("axios");

async function botChat(sock, chatId, message, userMessage, senderId) {
    try {
        const response = await axios.get(
            `https://nayan-sim-api-server.vercel.app/sim?type=ask&ask=${encodeURIComponent(userMessage)}&number=${senderId.split('@')[0]}`
        );

        let replyText = response.data.data?.msg || "ব্যস্ত আছি, পরে কথা হবে।";
        
        const attitudeReplies = [
            `🔥 ${replyText} \n\n- 𝕿𝖔𝖒 𝕻𝖗𝖎𝖒𝖊 𝖃`,
            `😎 ${replyText} \n\n— 𝕿𝖔𝖒'𝖘 𝕰𝖉𝖎𝖙𝖎𝖔𝖓`,
            `${replyText} ✨\n\nলিমিট ক্রস করিস না! \n- 𝕿𝖔𝖒`
        ];
        
        const finalReply = attitudeReplies[Math.floor(Math.random() * attitudeReplies.length)];
        await sock.sendMessage(chatId, { text: finalReply }, { quoted: message });

    } catch (err) {
        await sock.sendMessage(chatId, { text: "সার্ভার ডাউন। টম এখন অফলাইনে!" }, { quoted: message });
    }
}

async function simCommand(sock, chatId, message, args, senderId) {
    const usermsg = args.join(" ");

    if (!usermsg) {
        const attitudeGreetings = [
            "হুম, টম শুনছে। বল কি বলবি? 🔥",
            "বিনা কারণে ডিস্টার্ব করিস না, মুড নাই। 😎",
            "টম প্রাইম এক্স-কে তোর দরকার কেন? 🦅",
            "খালি খালি ট্যাগ দিস না, রাইডিং-এ আছি। 🏍️💨",
            "কি চাস? জলদি বল। ⚡",
            "নিজের কাজে মন দে, আমাকে ডেকে লাভ নাই। ✨"
        ];
        const randomGreeting = attitudeGreetings[Math.floor(Math.random() * attitudeGreetings.length)];
        await sock.sendMessage(chatId, {
            text: `@${senderId.split('@')[0]}, ${randomGreeting}`,
            mentions: [senderId]
        }, { quoted: message });
        return;
    }
    await botChat(sock, chatId, message, usermsg, senderId);
}

module.exports = { simCommand, botChat };
