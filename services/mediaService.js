const Media = require('../models/Media');
const uploadMedia = async (file, user) => {
    const media = new Media({
        filename: file.originalname,
        url: `/uploads/${file.filename}`,
        type: file.mimetype.startsWith('image') ? 'image' : 'video',
        uploadedBy: user._id
    });
    await media.save();
    return { status: 201, data: { message: 'Media uploaded successfully', media } };
};

const getMedia = async (user) => {
    const media = await Media.find({ uploadedBy: user._id });
    return { status: 200, data: media };
};

module.exports = { uploadMedia, getMedia };
