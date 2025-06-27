<<<<<<< HEAD
const addSong = async ()=> {

}

const listSong = async ()=> {

}

export { addSong, listSong }
=======
import { v2 as cloudinary } from 'cloudinary';


const addSong = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;

        console.log("Form Data:", {name,desc, album});
        console.log("Files:", req.files);

        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type:"video"});
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});

        console.log("Uploads:", { audioUpload, imageUpload });

        //const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;



        /*const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        console.log(name, desc, album, audioUpload, imageUpload);


        const song = songModel(songData);
        await song.save();*/

        res.json({ success:true, message:"Song Added", song })

    } catch (error) {
        //console.error("Error in addSong:", error); // This shows the real problem in the terminal
    //res.status(500).json({ success: false, message: error.message });
    }
}

const listSong = async (req, res) => {

}

export { addSong, listSong };

>>>>>>> fc0e8e948a35f7919425e40050e6a95e0e434f6d
