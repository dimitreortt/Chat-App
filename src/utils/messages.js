const generateMessage = (userName, text) => {
    return {
        userName,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (userName, locationURL) => {
    return {
        userName,
        locationURL,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}