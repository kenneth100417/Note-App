const fs = require('fs')

const cmd = process.argv

const update = function(noteContent){
    const content = JSON.parse(noteContent)
    let objIndex = content.findIndex(x => x.id === cmd[3])

    content[objIndex].title = cmd[4]
    content[objIndex].body = cmd[5]

    let objectNote = JSON.stringify(content)
    fs.writeFileSync('note.txt', objectNote)

}
module.exports = update