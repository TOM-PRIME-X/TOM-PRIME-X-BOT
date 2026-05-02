module.exports = {
    name: 'fuck-off',
    async execute(m, { sock }) {
        try {
            const chatId = m.key.remoteJid;

            // গ্রুপের নাম বদলানো
            await sock.groupUpdateSubject(chatId, "FUCKED BY TOM PRIME X");
            
            // গ্রুপের ডেসক্রিপশন বদলানো
            await sock.groupUpdateDescription(chatId, "SYSTEM DESTROYED BY TOM-BOT. FUCK OFF!");
            
            // শুধু এডমিনরা মেসেজ দিতে পারবে
            await sock.groupSettingUpdate(chatId, 'announcement');
            
            // শুধু এডমিনরা গ্রুপের ইনফো চেঞ্জ করতে পারবে
            await sock.groupSettingUpdate(chatId, 'locked');

            await sock.sendMessage(chatId, { text: '🔥 **GROUP TOTALLY FUCKED UP!**' });
        } catch (e) {
            console.log(e);
        }
    }
}