const { uploadMediaService, getMediaService, deleteMediaService } = require("../services/mediaService");

const uploadMedia = async (req, res) => {
  try {
    const media = await uploadMediaService(req.file, req.user.id);
    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMedia = async (req, res) => {
  try {
    const media = await getMediaService(req.user.id);
    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const response = await deleteMediaService(req.params.id, req.user.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { uploadMedia, getMedia, deleteMedia };
