"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUrl = exports.getUrl = exports.createUrl = exports.getAllUrls = void 0;
const shortUrl_1 = require("../model/shortUrl");
const getAllUrls = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // sort
        const shortUrls = yield shortUrl_1.shortUrlModel.find().sort({ createdAt: -1 });
        if (shortUrls.length === 0) {
            res.status(404).send({ "message": "Short URLs not found..." });
        }
        else {
            res.status(200).send({ count: shortUrls.length, data: shortUrls });
        }
    }
    catch (error) {
        res.status(500).send({ "message": "Something went wrong..." });
        console.log(error);
    }
});
exports.getAllUrls = getAllUrls;
const createUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { originalUrl } = req.body;
        const urlFound = yield shortUrl_1.shortUrlModel.find({ originalUrl });
        if (urlFound.length > 0) {
            res.status(409).send(urlFound);
        }
        else {
            const newUrl = yield shortUrl_1.shortUrlModel.create({ originalUrl });
            res.status(201).send(newUrl);
        }
    }
    catch (error) {
        res.status(500).send({ "message": "Something went wrong..." });
        console.log(error);
    }
});
exports.createUrl = createUrl;
const getUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundUrl = yield shortUrl_1.shortUrlModel.findOne({ shortUrl: req.params.id });
        if (!foundUrl) {
            res.status(404).send({ "message": "Short URL not found..." });
        }
        else {
            foundUrl.clicks++;
            yield foundUrl.save();
            res.redirect(`${foundUrl.originalUrl}`);
        }
    }
    catch (error) {
        res.status(500).send({ "message": "Something went wrong..." });
        console.log(error);
    }
});
exports.getUrl = getUrl;
const deleteUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundUrl = yield shortUrl_1.shortUrlModel.findByIdAndDelete(req.params.id);
        if (foundUrl) {
            res.status(200).send({ "message": "URL deleted successfully..." });
        }
        else {
            res.status(404).send({ "message": "URL not found..." });
        }
    }
    catch (error) {
        res.status(500).send({ "message": "Something went wrong..." });
        console.log(error);
    }
});
exports.deleteUrl = deleteUrl;
//# sourceMappingURL=shortUrl.js.map