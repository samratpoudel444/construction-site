import multer from "multer";

const upload= multer({dest:'uploads/',
    limits:{fileSize: 5* 1024*1024}
}
)

//file size is only 5 mb

export default upload;