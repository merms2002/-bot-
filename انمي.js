let handler = async (m, { conn, args, usedPrefix, command }) => {

 const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

 conn.relayMessage(m.chat, {

  viewOnceMessage: {

   message: {

    interactiveMessage: {

     header: {

      title: `*⟣┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈⟢*

*🐉✬⃝╿↵ مرحــبـا ➻${m.pushName}*

*⟣┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈⟢*

🌄│قسم الالعاب│`

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

           highlight_label: '𒌐ᶦᶰᵈ᭄𝗚𝗔𝗧𝗦࿐𒌐',

           rows: [

{ header: 'تجربه', title: '🎨 ❛╏فانرت', description: '', id: '.فانرت' },
               {header: 'تجربه', title: 'تجربه', description: '', id: '.اوامر'}


,





 

           ]

          }

         ]

        }),

        messageParamsJson: ''

       }

      ]

     }

    }

   }

  }

 },
     }
     
 })

}
  
        

handler.help = ['info']

handler.tags = ['main']

handler.command = ['تجربه']

export default handler