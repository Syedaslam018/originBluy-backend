const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const Media = require("../models/Media");

// Configure AWS S3 (If Using S3)
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

/**
 * Upload media file (AWS S3 or Local Storage)
 */
const uploadMediaService = async (file, userId) => {
  try {
    let fileUrl;
    if (process.env.USE_AWS_S3 === "true") {
      // Upload to AWS S3
      const uploadParams = {
        ACL: 'public-read',
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `uploads/${Date.now()}_${file.originalname}`,
        Body: fs.createReadStream(file.path),
        ContentType: file.mimetype,
      };
      const uploadResult = await s3.upload(uploadParams).promise();
      fileUrl = uploadResult.Location;

      // Remove temp file after upload
      fs.unlinkSync(file.path);
    } else {
      // Save file locally
      fileUrl = `/uploads/${file.filename}`;
    }

    // Save metadata in database
    const media = new Media({
      user: userId,
      filename: file.originalname,
      url: fileUrl,
      type: file.mimetype.startsWith("image") ? "image" : "video",
    });

    await media.save();
    return media;
  } catch (error) {
    throw new Error("Error uploading media: " + error.message);
  }
};

/**
 * Fetch user media
 */
const getMediaService = async (userId) => {
  try {
    return await Media.find({ user: userId }).sort({ createdAt: -1 });
  } catch (error) {
    throw new Error("Error fetching media: " + error.message);
  }
};

/**
 * Delete media file (AWS S3 or Local Storage)
 */
const deleteMediaService = async (mediaId, userId) => {
  try {
    const media = await Media.findOne({ _id: mediaId, user: userId });
    if (!media) {
      throw new Error("Media not found");
    }

    if (process.env.USE_AWS_S3 === "true") {
      // Delete from AWS S3
      const key = media.url.split(".amazonaws.com/")[1];
      await s3.deleteObject({ Bucket: process.env.AWS_S3_BUCKET, Key: key }).promise();
    } else {
      // Delete from local storage
      const filePath = path.join(__dirname, "../uploads", media.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // Remove from database
    await Media.deleteOne({ _id: mediaId });

    return { message: "Media deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting media: " + error.message);
  }
};

module.exports = {
  uploadMediaService,
  getMediaService,
  deleteMediaService,
};
