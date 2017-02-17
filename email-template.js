var linebreakStr = '\r\n'
var body = 'Once upon a time \r\n\
There was a guy \r\n\
He was a pretty great guy \r\n\
\r\n\
the end \r\n\
a concerned citizen'

var mailto = {
    address: 'citycomm@cityofgainesville.org',
    cc: '',
    bcc: 'connectedgainesivlle@gmail.com',
    subject: 'Support better internet',
    body: body,
}

var mailtolink = 'mailto:' + mailto.address + '?bcc=' + mailto.bcc + '&subject=' + encodeURI(mailto.subject) + '&body=' + encodeURI(mailto.body)

var link = document.getElementById('mailto-link')

link.href = mailtolink