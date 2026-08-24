const ImageKit = require("@imagekit/nodejs")


const imagekit = new ImageKit({

    privateKey:"pvt_key"

})

async function uploadFile(buffer){

    const result = await imagekit.files.upload({
        file:buffer,
        filename:"image.jpg"
    })

    return result;
}

module.exports = uploadFile;