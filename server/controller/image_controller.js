const url = "http://localhost:8000";

const conn = mongoose.connection;

conn.once("open", () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, 
        {bucketName:'fs'
        
    });
})


export const uploadFile = async(request, response) => {

    if (!request.file){
        return response.status(404).json("File not found");
    }

    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);
}

export default uploadFile;