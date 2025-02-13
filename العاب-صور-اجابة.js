let timeout = 60000; // مدة اللعبة

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera || {};
    let id = m.chat;

    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '*「❗¦ جـواب عـلـي هـذا الـسـؤال اولا ¦❗」*', conn.tebakbendera[id][0]);
        return;
    }

    try {
        let src = await (await fetch(`https://raw.githubusercontent.com/SungReved/games/main/Src/${command}.json`)).json();
        let json = src[Math.floor(Math.random() * src.length)];

        let caption = ` ╮ ⋅ ⋅ ── ⋅ ⋅ ── ─ ── ⋅ ⋅ ── ⋅ ⋅ ╭ـ
*${command.toUpperCase()}*
*┆⌊❁╎الوقت⌊🕧⌉↞ ↜ ˼${(timeout / 1000).toFixed(2)}˹ *
*⌊※╎الجائزة [ ${poin} ] إكس بي╎💰⌉*
*⌊※╎استخدم."استسلم" للاِستسلام╎‼️ ⌉*
*⌊※╎رد علی هاذه الرسالة بالجواب╎📌⌉*
╯ ⋅ ⋅ ── ⋅ ⋅ ── ─ ── ⋅ ⋅ ── ⋅ ⋅ ╰ـ
*『🎀┇${global.gt}┇🎀』*
         `.trim();

        conn.tebakbendera[id] = [
            await conn.sendFile(m.chat, json.img, '', caption, m),
            json, 0, // لا نحتاج إلى poin هنا، سيتم إضافة المال للبنك مباشرة
            setTimeout(() => {
                if (conn.tebakbendera[id]) {
                    conn.reply(m.chat, `「⏰¦ انـتـهـي الـوقـت ¦⏰」\nالإجابة هي: *${json.name}*`, conn.tebakbendera[id][0]);
                    delete conn.tebakbendera[id];
                }
            }, timeout)
        ];
    } catch (err) {
        console.error(err);
        conn.reply(m.chat, '「❗¦ حـدث خـطـأ أثـنـاء جـلـب الـبـيـانـات ¦❗」', m);
    }
};

// كود المعالجة للإجابات
handler.before = async (m, { conn }) => {
    let id = m.chat;
    if (!m.quoted || !conn.tebakbendera || !(id in conn.tebakbendera)) return;

    let json = conn.tebakbendera[id][1];
    let correctAnswer = json.name.toLowerCase().trim(); // التأكد من تطابق النصوص بشكل صحيح
    let userAnswer = m.text.toLowerCase().trim();

    // التأكد من أن الرد هو على السؤال نفسه
    if (m.quoted.sender !== conn.tebakbendera[id][0].sender) return;

    // تجاهل إجابات البوت
    if (m.sender === conn.user.jid) return;

    // التحقق من الإجابة
    if (userAnswer === correctAnswer) {
        let user = global.db.data.users[m.sender]; // الحصول على بيانات المستخدم
        user.bank += 0; // إضافة 500 إلى رصيد البنك الخاص بالمستخدم

        conn.reply(m.chat, `「🎉¦ مبروك! إجابة صحيحة! ¦🎉`, m);
        clearTimeout(conn.tebakbendera[id][3]); // إيقاف المؤقت
        delete conn.tebakbendera[id];
    } else {
        conn.reply(m.chat, `「❌¦ إجابة خاطئة ¦❌」\nحاول مرة أخرى!`, m);
    }
};

export default handler;