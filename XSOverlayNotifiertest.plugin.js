/**
 * @name XSOverlayNotifier
 * @description Sends your notifications to XSOverlay.
 * @version 0.1
 * @author Arsenic
 */

module.exports = class XSOverlayNotifier {

  start() 
  {

    console.log("AAAAAAA");
    let data = JSON.stringify(
    {
      messageType: 1,
      index: 0,
      timeout: 5,
      height: 100,
      opacity: 1,
      volume: 0,
      audioPath: '',
      title: "formatTitle(channel, msg, author)",
      content: "formattedMessage",
      useBase64Icon: true,
      //icon: Buffer.from(buffer).toString('base64'),
      sourceApp: 'XSOverlay-Discord-Notifications'
    });

    let server = require('dgram').createSocket('udp4');
    server.send(data, 42069, '127.0.0.1', () => {
      server.close();
    });
  }

  stop()
  {

  }
};
