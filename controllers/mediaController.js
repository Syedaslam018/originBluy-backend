const mediaService = require('../services/mediaService');
exports.uploadMedia = async (req, res) => {
    try {
        const response = await mediaService.uploadMedia(req.file, req.user);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMedia = async (req, res) => {
    try {
        const response = await mediaService.getMedia(req.user);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};