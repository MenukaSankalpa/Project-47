import { v2 as cloudinary } from 'cloudinary';

const addSong = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type:"video"});
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});
        const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        console.log(name,desc,album,audioUpload,imageUpload);

        /*const newSong = new songModel({
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            durattion: "03.30"
        });

        await newSong.save();

        return res.status(201).json({
            message: "Song uploaded successfully",
            data: newSong
        });*/



    } catch (error) {
        
    }

}

const listSong = async (req, res) => {

}

export { addSong, listSong };

