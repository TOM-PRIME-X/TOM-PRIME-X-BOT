const { handleGoodbye } = require('../lib/welcome');
const { isGoodByeOn, getGoodbye } = require('../lib/index');

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
