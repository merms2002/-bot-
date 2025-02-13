let timeout = 60000; // مدة اللعبة

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera || {};
    let id = m.chat;

    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '「❗¦ جـواب عـلـي هـذا الـسـؤال اولا ¦❗」', conn.tebakbendera[id][0]);
        return;
    }

    try {
        let src = await (await fetch(`https://raw.githubusercontent.com/SungReved/games/main/Src/${command}.json`)).json();
        let json = src[Math.floor(Math.random() * src.length)];

        let caption = `
⌝🎮┆⌝${command.toUpperCase()}⌞┆🎮⌞
╮ ⋅ ⋅ ── ⋅ ⋅ ── ─ ── ⋅ ⋅ ── ⋅ ⋅ ╭ـ
*┆⌊❁╎الوقت⌊🕧⌉↞ ↜ ˼${(timeout / 1000).toFixed(2)}˹ *
*⌊※╎استخدم."استسلم" للاِستسلام╎‼️ ⌉*
*⌊※╎رد علی هاذه الرسالة بالجواب╎📌⌉*
╯ ⋅ ⋅ ── ⋅ ⋅ ── ─ ── ⋅ ⋅ ── ⋅ ⋅ ╰ـ
*『┇${global.gt}┇』*
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

handler.help = ['guessflag'];
handler.tags = ['game'];
handler.command = ['علم', 'عين', 'احزر', 'كوره','اختلاف','فنانين','افلام'];

export default handler;