"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "dd838pt3q",
    api_key: "118281195315358",
    api_secret: "PXUHK"
});
exports.default = cloudinary_1.v2;
