function sayhello(name){
    let defaultname = 'world';
    if (!name){
        return `hello ${defaultname}`
    }
    return `hello ${name}`
}

module.exports.sayhello = sayhello;