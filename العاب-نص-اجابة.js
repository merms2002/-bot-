import fetch from 'node-fetch';

let timeout = 15000; // مدة اللعبة
let poin = 300; // النقاط

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tekateki = conn.tekateki || {};
    let id = m.chat;

    if (id in conn.tekateki) {
        conn.reply(m.chat, '「❗¦ يجب الإجابة على السؤال الحالي أولاً ¦❗」', conn.tekateki[id][0]);
        return;
    }

    try {
        let tekateki = await (await fetch(`https://raw.githubusercontent.com/socona12/-/main/Src/${command}.json`)).json();
        let json = tekateki[Math.floor(Math.random() * tekateki.length)];

        let caption = `
ⷮ ⟣┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢
${json.question}
⟣⟤ المدة ⏲️ ⩥ ${(timeout / 1000).toFixed(2)} ثانية
⟣⟤ الجائزة 💵 ⩥ ${poin} نقاط
⟣┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢
`.trim();

        conn.tekateki[id] = [
            await conn.reply(m.chat, caption, m), // إرسال السؤال
            json, // تخزين السؤال والإجابة
            poin, // النقاط
            setTimeout(() => {
                if (conn.tekateki[id]) {
                    conn.reply(m.chat, `❮ ⏰¦ انتهى الوقت ¦⏰ ❯\nالإجابة هي: *${json.response}*`, conn.tekateki[id][0]);
                    delete conn.tekateki[id];
                }
            }, timeout)
        ];
    } catch (err) {
        console.error(err);
        conn.reply(m.chat, '「❗¦ حدث خطأ أثناء جلب البيانات ¦❗」', m);
    }
};

handler.help = ['رتب', 'ايموجي', 'فكك', 'انمي', 'خمن', 'كت', 'رياضه', 'دين'];
handler.tags = ['game'];
handler.command = ['رتب', 'ايموجي', 'فكك', 'انمي', 'خمن', 'كت', 'رياضه', 'دين'];

export default handler;