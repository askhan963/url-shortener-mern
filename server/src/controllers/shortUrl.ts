import express from 'express';
import { shortUrlModel } from '../model/shortUrl';

export const getAllUrls = async (req: express.Request, res: express.Response) => {
    try {
        // sort
        const shortUrls = await shortUrlModel.find().sort({createdAt : -1});
        if (shortUrls.length === 0) {
            res.status(404).send({ "message": "Short URLs not found..." });
        } else {
            res.status(200).send({ count: shortUrls.length, data: shortUrls });
        }
    } catch (error) {
        res.status(500).send({ "message": "Something went wrong..." });
        console.log(error);
    }
};

export const createUrl = async (req: express.Request, res: express.Response) => {
    try {
        const { originalUrl } = req.body;
        const urlFound = await shortUrlModel.find({ originalUrl });

        if (urlFound.length > 0) {
            res.status(409).send(urlFound);
        } else {
            const newUrl = await shortUrlModel.create({ originalUrl });
            res.status(201).send(newUrl);
        }
    } catch (error) {
        res.status(500).send({ "message": "Something went wrong..." });
        console.log(error);
    }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
    try {
        const foundUrl = await shortUrlModel.findOne({ shortUrl: req.params.id });
        if (!foundUrl) {
            res.status(404).send({ "message": "Short URL not found..." });
        } else {
            foundUrl.clicks++;
            await foundUrl.save();
            res.redirect(`${foundUrl.originalUrl}`);
        }
    } catch (error) {
        res.status(500).send({ "message": "Something went wrong..." });
        console.log(error);
    }
};

export const deleteUrl = async (req: express.Request, res: express.Response) => {
    try {
        const foundUrl = await shortUrlModel.findByIdAndDelete(req.params.id);
        if (foundUrl) {
            res.status(200).send({ "message": "URL deleted successfully..." });
        } else {
            res.status(404).send({ "message": "URL not found..." });
        }
    } catch (error) {
        res.status(500).send({ "message": "Something went wrong..." });
        console.log(error);
    }
};
