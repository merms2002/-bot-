import pkg from '@whiskeysockets/baileys';

const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

function clockString(ms) {

    let h = Math.floor(ms / 3600000);

    let m = Math.floor((ms % 3600000) / 60000);

    let s = Math.floor((ms % 60000) / 1000);

    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');

}

const handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    let d = new Date();

    d.setTime(d.getTime() + 3600000); // تعديل وقت الساعة بإضافة ساعة

    let locale = 'ar';

    let week = d.toLocaleDateString(locale, { weekday: 'long' });

    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });

    let _uptime = process.uptime() * 1000;

    let uptime = clockString(_uptime);

    let user = global.db.data.users[m.sender] || {};

    let name = conn.getName(m.sender) || 'مستخدم';

    let { money = 0, joincount = 0, diamond = 0 } = user;

    let { exp = 0, limit = 0, level = 0, role = 'مستخدم' } = user;

    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered === true).length;

    let more = String.fromCharCode(8206);

    let readMore = more.repeat(850);

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    // إرسال المقطع الصوتي أولاً

    await conn.sendMessage(m.chat, { 

        audio: { 

            url: 'https://files.catbox.moe/kdatvy.mp3' 

        }, 

        mimetype: 'audio/mpeg', 

        ptt: true 

    }, { quoted: m });

    // تجهيز الصورة والقائمة

    const images = [

        'https://qu.ax/akEmR.jpg',

        'https://qu.ax/uoGRB.jpg',

        'https://qu.ax/prsAW.jpg',

        'https://qu.ax/lTDKF.jpg',

        'https://qu.ax/aoihp.jpg', 

        'https://qu.ax/uQbLo.jpg', 

        'https://qu.ax/dedUM.jpg', 

        'https://qu.ax/RxZZi.jpg', 

        'https://qu.ax/zhqCm.jpg', 

        'https://qu.ax/NcBrn.jpg', 

        'https://qu.ax/PbOgC.jpg', 

        'https://qu.ax/dedUM.jpg'

    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    // إرسال القائمة

    conn.relayMessage(m.chat, {

        viewOnceMessage: {

            message: {

                interactiveMessage: {

                    body: {

                        text: `> ╮━━━━━━━━━━━━━━╭

        ┃    【 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 】    ┃

> ╯━━━━━━━━━━━━━━╰



> *┤────────────···* 

> *✧────[ الـوقـت ]────╮*

> *┤ 📆 التاريخ: ${date}*

> *┤ 📅 اليوم: ${week}*

> *┤ 🚀 وقت النشاط: ${uptime}*

> *┤────────────···*`
ق
                    },

                    footer: {

                        text: '𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐'

                    },

                    header: {

                        title: '',

                        hasMediaAttachment: true,

                        imageMessage: messa.imageMessage,

                    },

                    nativeFlowMessage: {

                        buttons: [

                            {

                                name: 'single_select',

buttonParamsJson: JSON.stringify({

    title: '『』اوامر البوت《',

    sections: [

        {

            title: '『』قسم المالك《',

            highlight_label: '𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓',

            rows: [

                { header: 'المطور', title: '⌬ ❛╏المطور', description: 'تواصل مع المطور', id: '.المطور', highlight_label: '𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓' },
                            ]

        }

    ]

}),

messageParamsJson: ''
                                },
                            {

    name: "cta_url",

    buttonParamsJson: JSON.stringify({

        display_text: "『』رقم المطور《",

        url: "https://wa.me/201114571370",

        merchant_url: "https://wa.me/201114571370"

    })

},

                        ]

                    }

                }

            }

        }

    }, {});

}

handler.help = ['info'];

handler.tags = ['main'];

handler.command = ['tst'];

export default handler;

``