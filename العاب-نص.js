let handler = async (m, { conn }) => {
    let id = m.chat;

    // التحقق من وجود اللعبة والرسالة المقتبسة
    if (!m.quoted || !conn.tekateki || !(id in conn.tekateki)) return;

    let game = conn.tekateki[id];
    let json = game[1];
    let correctAnswer = json.response.toLowerCase().trim();
    let userAnswer = m.text.toLowerCase().trim();

    // التحقق من أن الرد موجه للسؤال المحدد
    if (m.quoted.id !== game[0].id) return;

    if (userAnswer === correctAnswer) {
        let user = global.db.data.users[m.sender];
        user.bank = (user.bank || 0) + game[2]; // إضافة النقاط للبنك
        conn.reply(m.chat, `「🎉¦ مبروك! إجابة صحيحة! ¦🎉」\nتمت إضافة ${game[2]} جنيه إلى حسابك البنكي.`, m);
        clearTimeout(game[3]); // إيقاف المؤقت
        delete conn.tekateki[id];
    } else {
        conn.reply(m.chat, `「❌¦ إجابة خاطئة ¦❌」\nحاول مرة أخرى!`, m);
    }
};

handler.before = async (m, { conn }) => {
    await handler(m, { conn });
};

export default handler;