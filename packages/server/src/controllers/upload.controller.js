const { format } = require("util");
const path = require("path");
const sharp = require("sharp");
const { Storage } = require("@google-cloud/storage");
const Minio = require("minio");
const uuidv4 = require("uuid/v4");

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: parseInt(process.env.MINIO_PORT),
  useSSL: true,
  accessKey: process.env.MINIO_ACCESSKEY,
  secretKey: process.env.MINIO_SECRETKEY,
});

module.exports.minioUpload = async (req, res) => {
  // random file name generator...
  let randomFileName =
    uuidv4() +
    "." +
    req.file.originalname.split(".")[
      req.file.originalname.split(".").length - 1
    ];
  let filename = req.file.originalname;
  sharp(req.file.buffer)
    .jpeg({
      quality: 30,
    })
    .withMetadata()
    .rotate()
    .toBuffer()
    .then((data) => {
      minioClient.putObject(
        "reports",
        randomFileName,
        data,
        function (err, etag) {
          if (err) {
            res.status(500).send({
              message: err,
              status: "failed to upload to minio",
            });
          } else {
            res.status(200).send({
              message: etag,
              status: `${randomFileName} uploaded successfully`,
              secure_url:
                minioClient.protocol +
                "//" +
                minioClient.host +
                ":" +
                minioClient.port +
                "/reports/" +
                randomFileName,
            });
          }
        }
      );
    });
};

// module.exports.upload = async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).send({ message: "Please upload a file!" });
//         }

//         const blob = bucket.file(req.file.originalname);
//         const blobStream = blob.createWriteStream();

//         blobStream.on("error", (err) => {
//             return res.status(400).send({ message: err.message });
//         })

//         blobStream.on("finish", async(data) => {
//             const publicUrl = format(
//                 `https://storage.googleapis.com/${bucket.name}/${blob.name}`
//             )

//             console.log(publicUrl);

//             try {
//                 await bucket.file(req.file.originalname).makePublic();
//             } catch {
//                 return res.status(200).send({
//                     message:
//                       `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
//                     url: publicUrl,
//                   });
//             }

//             return res.status(200).send({
//                 message: "Uploaded the file successfully: " + req.file.originalname,
//                 url: publicUrl,
//             })
//         })

//         await sharp(req.file.buffer)
//         .jpeg({
//             quality: 10,
//         })
//         .withMetadata()
//         .rotate()
//         .pipe(blobStream)

//     } catch (err) {
//         if (err.code == "LIMIT_FILE_SIZE") {
//             return res.status(500).send({
//                 message: "File size cannot be larger than 3MB!",
//             })
//         }

//         return res.status(500).send({
//             message: `Could not upload the file: ${req.file.originalname}. ${err}`
//         });
//     }
// }
