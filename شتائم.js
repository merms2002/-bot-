let handler = m => m;

handler.before = async function (m, { conn, isAdmin }) {

  if (m.isGroup && isAdmin) return null;

  let delet = m.participant; 

  let bang = m.id;

  let bot = global.db.data.settings[this.user.jid] || {};

  let badWords = ["كسمك","كس","متناك","متناكة","متناكه","منيوك","منيوكة","منيوكه","زب","زبي","عيري","عير","قحبة","قحبه","خول","عرص","كس امك","زرقة","مص","جرار","عاهرة","شهواني","شهوانية","مصي","كسمكم","قحاب","زرقه","زرقها","يبن المتناك","يبن المتناك","ابن قحبه","ابن قحبة","مص زبي","مصي زبي","ديوث","كس عمتك","على زبي","كلكم على زبي","كس ام الحاله","كس ام حياتي","كس ام الدراسة"]; 

  for (let word of badWords) {

    let regex = new RegExp(`(?<=\\s|^)${word}(?=\\s|$)`, 'gi');

    if (m.text && m.text.match(regex)) {

      await conn.sendMessage(m.chat, {

        text: `*@${m.sender.split("@")[0]} لقد تم طردك من القروب بسبب الالفاظ الغير لائقة.*`,

        contextInfo: {

          mentionedJid: [m.sender],

        },

      });

      await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');

      return;

    }

  }

};

export default handler;