import multer from "multer";

const upload= multer({dest:'uploads/',
    limits:{fileSize: 5}
}
)

export default upload;