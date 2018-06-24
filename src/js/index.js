import {Client} from '@xmpp/client';
import {jid} from '@xmpp/client';
import {xml} from "@xmpp/client/index";

// Config (get details from https://www.hipchat.com/account/xmpp)
const userJid = "<JARVIS_ID>@chat.hipchat.com";
const password = "JARVIS_PASSWORD";

const client = new Client();

client.on('input', data => console.log('👈', data));

client.on('online', jid => {
    console.log('jid', jid.toString());
    client.send(xml('presence'));

    // send a message to Jarvis
    client.send(
        xml('message', {to: userJid, type: 'chat'},
            xml('body', {}, 'hello')
        )
    )
});

client.start('xmpp://' + userJid);

client.on('error', err => {
    console.error('❌', err.toString())
});

client.on('stanza', stanza => {
    console.log('⮈', stanza.toString())
});

client.handle('authenticate', authenticate => {
    return authenticate('50759_2977265', password)
});
