const fs = require('fs')

const cmd = process.argv

const del = function(noteContent){
    const content = JSON.parse(noteContent)
    let objIndex = content.findIndex(x => x.id === cmd[3])

    content.splice(objIndex,1)

    let objectNote = JSON.stringify(content)
    fs.writeFileSync('note.txt', objectNote)

}
module.exports = del