let handler = async (m, { conn }) => {

    const dev = 'مـرحـبـا بـك في بوت جاتس';

    const channel = 'https://whatsapp.com/channel/0029Vax6gw1HgZWkzZCvVx1C';

    const icons = 'https://qu.ax/lTDKF.jpg';

    const imageUrls = [

        'https://qu.ax/fqMqP.jpg',

        'https://qu.ax/aoihp.jpg',

        'https://qu.ax/aoihp.jpg'

    ];

    const newsletterName = `${global.gt}`;

    const newsletterJid = '120363367117086064@newsletter';

    let randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    await conn.sendMessage(m.chat, {

        image: { url: randomImage },

        caption: '*˼🖤˹↵ اهـلا بـك:↧*\n\nلاسـتـعـمـال بـوت جاتس اطـلـب الاوامـر و اخـتـر الـقـسـم الـذي تـريـد',

        footer: `$𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐`,

        buttons: [

            {

                buttonId: '.الاوامر',

                buttonText: {

                    displayText: '↬⌯الاوامــ📜ــــر‹◝'

                },

                type: 1

            }

        ],

        headerType: 4,

        viewOnce: true,

        contextInfo: {

            mentionedJid: [m.sender],

            isForwarded: true,

            forwardingScore: 999,

            forwardedNewsletterMessageInfo: {

                newsletterJid,

                newsletterName,

                serverMessageId: -1,

            },

            externalAdReply: {

                title: newsletterName,

                body: dev,

                thumbnailUrl: icons,

                sourceUrl: channel,

                mediaType: 1,

                renderLargerThumbnail: false,

            },

        },

    }, { quoted: m });

    await m.react('🖤');

    return;

};

handler.customPrefix = /^جاتس|بوت$/i;

handler.command = new RegExp;

export default handler;