function clockString(ms) {

  let h = Math.floor(ms / 3600000);

  let m = Math.floor(ms % 3600000 / 60000);

  let s = Math.floor(ms % 60000 / 1000);

  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');

}

import pkg from '@whiskeysockets/baileys';

const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {

  let d = new Date(new Date + 3600000);

  let locale = 'ar';

  let week = d.toLocaleDateString(locale, { weekday: 'long' });

  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });

  let _uptime = process.uptime() * 1000;

  let uptime = clockString(_uptime);

  let user = global.db.data.users[m.sender];

  let name = conn.getName(m.sender)

  let { money, joincount } = global.db.data.users[m.sender];

  let { exp, limit, level, role } = global.db.data.users[m.sender];

  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

  let more = String.fromCharCode(8206);

  let readMore = more.repeat(850);

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })

const PLUTO = 'https://telegra.ph/file/5fc26caa7580823ce9dda.jpg'

const mentionId = m.key.participant || m.key.remoteJid;

conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `gataVidMenu`}, body: { text: `*• ──╾⊱﹝𒌐﹞⊰╼── •*

*مــرحــبــا بــك/ي* @${mentionId.split('@')[0]}

╗──────¤مــعــومــاتــك

> •مــســتــواك : ${level}

> •بــريــمــيــوم : ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''}

> •رتــبــتــك : ${role}

*• ──╾⊱﹝𒌐﹞⊰╼── •*

╗───¤مــعلــومــات الــ🤖بــوت

> إســم الــبــوت:جاتس 

> • الــمــطــور :مرماس

> •مــدة الــتــشــغــيل : ${uptime}

*• ──╾⊱﹝🖥﹞⊰╼── •*

*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️

*𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐*

*• ──╾⊱﹝𒌐﹞⊰╼── •*

> Copyright © 2025 𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐`,subtitle: "PLUTO",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: PLUTO } }, { upload: conn.waUploadToServer }, {quoted: m}))},

                  contextInfo: {

                      mentionedJid: [m.sender],

                      isForwarded: false,

                  },nativeFlowMessage: { buttons: [

                          {

                              name: 'single_select',

                              buttonParamsJson: JSON.stringify({

                                  title: '⌈🛡╎الــقــوائـــم╎🛡⌋',

                                  sections: [

                                      {

                                          title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام بلوتو بـ🤖ـوت',

                                          highlight_label: 'بعبص براحتك يابرو 🤖',

                                          rows: [

                                              {

                                                  header: 'الــقـ👑ـســم الـاول',

                                                  title: 'استدعاء_قسم_الاعضاء #الاعضاء',

                                                  description: '',

                                                  id: '.م1'

                                              },

                                              {

                                                  header: 'الــقـ👨🏻‍💻ـســم الــثــانــي',

                                                  title: 'استدعاء_قسم_المشرفين #المشرفين',

                                                  description: '',

                                                  id: '.م11'

                                              },

                                              {

                                                  header: 'الــقـ🕋ـســم الــثــالــث',

                                                  title: 'استدعاء_قسم_الدين #الدين',

                                                  description: '',

                                                  id: '.م2'

                                              },

                                              {

                                                  header: 'الــقـ👑ـســم الــرابــع',

                                                  title: 'استدعاء_قسم_المطور #المطور',

                                                  description: '',

                                                  id: '.م3'

                                              },

                                              {

                                                  header: 'الــقـ🛡ـســم الــخــامــس',

                                                  title: 'استدعاء_قسم_التنزيلات #التنزيلات',

                                                  description: '',

                                                  id: '.م4'

                                              },

                                              {

                                                  header: 'الــقـ🕹ـســم الــســادس',

                                                  title: 'استدعاء_قسم_الالعاب #الالعاب',

                                                  description: '',

                                                  id: '.م5'

                                              },

                                              {

                                                  header: 'الــقـ🌀ـســم الــســابــع',

                                                  title: 'استدعاء_قسم_التحويلات #التحويلات',

                                                  description: '',

                                                  id: '.م6'

                                              },

                                              {

                                                  header: 'الــقـ🎧ـســم الــثــامـن',

                                                  title: 'استدعاء_قسم_الصوتيات #الصوتيات',

                                                  description: '',

                                                  id: '.م7'

                                              },

                                              {

                                                  header: 'الــقـ🤖ـســم الــتــاســع',

                                                  title: 'استدعاء_قسم_الذكاء #الذكاء',

                                                  description: '',

                                                  id: '.م8'

                                              },

                                              {

                                                  header: 'الــقـ🚨ـســم الــعــاشــر',

                                                  title: 'استدعاء_قسم_الدعم #الدعم',

                                                  description: '',

                                                  id: '.م9'

                                              },

                                              {

                                                  header: 'الــقـ🔍ـســم �لــحــاديــة عــشــر',

                                                  title: 'استدعاء_قسم_ابحث #البحث',

                                                  description: '',

                                                  id: '.م12'

                                              },

                                              {

                                                  header: 'الــقـ📽️ـســم الــثــانــي عــشــر',

                                                  title: 'استدعاء_قسم_الافلام #الافلام',

                                                  description: '',

                                                  id: '.م13'

                                              },

                                              {

                                                  header: 'الــقـ👨🏻‍💻ـســم الــثــانــي عــشــر',

                                                  title: 'سكربت_بوت_جاهز_للتعديل_👨🏻‍💻',

                                                  description: '',

                                                  id: '.م10'

                                             }

                                          ]

                                      }

                                  ]

                              }),

                messageParamsJson: ''

              },

              {

            name: "cta_url",

            buttonParamsJson: '{"display_text":"⌈🚀╎الدردشه المجهوله╎🚀⌋","url":"","merchant_url":""}'

                   },

                   {

                      name: "quick_reply",

            buttonParamsJson: '{"display_text":"مطورين","id":".المطور"}'

                   },

                   {

                      name: "quick_reply",

            buttonParamsJson: '{"display_text":"معلومات البوت#","id":".معلومات-البوت"}'

                   },

                   {

             name: "cta_url",

             buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"","merchant_url":""}'

                          }

                      ]

                  }

              }

          }

      }

  }, {});

}

handler.help = ['info'];

handler.tags = ['main'];

handler.command = ['menu', 'مهام', 'اوامر','الاوامر','قائمة','القائمة']

export default handler;