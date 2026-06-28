const { handleGoodbye } = require('../lib/welcome');
const { isGoodByeOn, getGoodbye } = require('../lib/index');

const goodbyeCooldown = new Set(); // 🔥 2 bar block korar jonno

async function goodbyeCommand(sock, chatId, message, match) {
    if (!chatId.endsWith('@g.us')) {
        await sock.sendMessage(chatId, { text: 'This command can only be used in groups.' });
        return;
    }
    const text = message.message?.conversation || message.message?.extendedTextMessage?.text || '';
    const matchText = text.split(' ').slice(1).join(' ');
    await handleGoodbye(sock, chatId, message, matchText);
}

async function handleLeaveEvent(sock, id, participants) {
    const isGoodbyeEnabled = await isGoodByeOn(id);
    if (!isGoodbyeEnabled) return;

    for (const participant of participants) {
        try {
            const participantString = typeof participant === 'string'? participant : (participant.id || participant.toString());

            // 🔥 Eitai main fix. Duplicate hole skip
            const key = `${id}-${participantString}`;
            if (goodbyeCooldown.has(key)) continue;
            goodbyeCooldown.add(key);
            setTimeout(() => goodbyeCooldown.delete(key), 4000); // 4 sec por unblock

            const user = participantString.split('@')[0];
            const finalMessage = `@${user} *_has left the group, we will miss them! 👋_*`;

            await sock.sendMessage(id, {
                text: finalMessage,
                mentions: [participantString]
            });
        } catch (error) {
            console.error('Error sending goodbye message:', error);
        }
    }
}

module.exports = { goodbyeCommand, handleLeaveEvent };