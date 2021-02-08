function sayhello(name){
    let defaultname = 'world';
    if (!name){
        return `hello ${defaultname}`
    }
    return `hello world`
}

module.exports.sayhello = sayhello;