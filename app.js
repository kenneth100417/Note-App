const add = require('./add')
const read = require('./read')
const write = require('./write')
const update = require('./update')
const del = require('./delete')


// get user input
const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {
    // Build Object
    note = { 
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note, oldNote)
}

if(cmd[2] == 'read') {
    // Import present
    const present = require('./present')
    
    present(read())
}

if(cmd[2] == 'update'){
    //get note.txt content
    var noteContent = read()
    //update txt

    update(noteContent)
}

if(cmd[2] == 'delete'){
    var noteContent = read()
    //update txt

    del(noteContent)
}
