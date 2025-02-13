let handler = async (m, { conn, args, usedPrefix, command }) => {

 const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]await;
 

 conn.relayMessage(m.chat, {

  viewOnceMessage: {

   message: {

    interactiveMessage: {

     header: {

      title: `*⟣┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈⟢*

*🐉✬⃝╿↵ مرحــبـا ➻${m.pushName}*

*⟣┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈⟢*

🌄│قسم الانمي│`

     },

     body: {

      text: ''

     },

     nativeFlowMessage: {

      buttons: [

       {

        name: 'single_select',

        buttonParamsJson: JSON.stringify({

         title: 'الانمي',

         sections: [

          {

           title: 'الانمي',

           highlight_label: '𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓',

           rows: [

{ header: 'صور انمي', title: '🎨 ❛╏فانرت', description: '', id: '.فانرت' },

{ header: 'صور انمي', title: '💥 ❛╏هوسبو', description: '', id: '.هوسبو' },

{ header: 'صور انمي', title: '🌟 ❛╏كانا', description: '', id: '.كانا' },
           ]

          }

         ]

        }),

        messageParamsJson: ''

       },
          {                      name: "quick_reply",

            buttonParamsJson: '{"display_text":"مطورين","id":".المطور"}'
          }

      ]

     }

    }

   }

  }

 }, {});

}
handler.help = ['info']

handler.tags = ['main']

handler.command = ['تست']

export default handler