import pkg from '@whiskeysockets/baileys';

const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {

    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const harley = 'https://qu.ax/lTDKF.jpg';

    let messageContent = {

        viewOnceMessage: {

            message: {

                interactiveMessage: {

                    header: { title: '𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐' },

                    body: {

                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━

> 𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐

> المطور˹ ↶〕

*⋅ ───━ •﹝𒌐﹞• ━─── ⋅*

            *𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐*

*⋅ ───━ •﹝𒌐﹞• ━─── ⋅*

╗───¤﹝السعر ↶ 💵﹞

> •┊˹💬˼┊- كلم المطور واتفاهم معاه


╗───¤﹝اسباب دخولك للمطور↶ 🚀﹞

> •┊˹💬˼ عايز البوت لجروبك

> •┊˹💬˼┊-عايز الاسكريبت

> •┊˹💬˼┊- عايز تستفسر عن حاجه

╝───────────────¤

╗───¤﹝طرق الدفع ↶ 💰﹞

> •┊˹💬˼┊- روبل ارقام وهميه

> •┊˹💬˼┊- VodafoneCash

╝───────────────¤

*ملحوظة : الاشتراك المجاني يومين فقط*

*⋅ ───━ •﹝𒌐﹞• ━─── ⋅*

> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶

⌠𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐⌡

*⋅ ───━ •﹝𒌐﹞• ━─── ⋅*`,

                        subtitle: "𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐"

                    },

                    header: {

                        hasMediaAttachment: true,

                        ...(await prepareWAMessageMedia({ image: { url: harley } }, { upload: conn.waUploadToServer }, { quoted: m }))

                    },

                    nativeFlowMessage: {

                        buttons: [

                            {

                                name: "cta_url",

                                buttonParamsJson: '{"display_text":"⌈🚀╎كلم المطور من هنا╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+201114571370","merchant_url":"https://api.whatsapp.com/send?phone=+201114571370"}'

                            },

                            {

                                name: "cta_url",

                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029Vax6gw1HgZWkzZCvVx1C","merchant_url":"https://whatsapp.com/channel/0029Vax6gw1HgZWkzZCvVx1C"}'

                            }

                        ]

                    }

                }

            }

        }

    };

    conn.relayMessage(m.chat, messageContent, {});

};

handler.help = ['info'];

handler.tags = ['main'];

handler.command = ['مطور','المطور' ];

export default handler;