function sayhello(name){
    let deaultname = 'world';
    if (!name){
        return `hello ${deaultname}`
    }
    return `hello ${name}`
}

module.exports.sayhello = sayhello;