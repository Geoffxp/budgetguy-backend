import express from "express";
import { methodNotAllowed } from "../errors/index.js";
import os from 'os';

const router = express.Router();

router.route("/")
    .get((req, res) => {
        const rss = (process.memoryUsage().rss / 1024 / 1024 * 100) / 100
        const heap = (process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100
        return res.status(200).json({
            serverTime: new Date().toLocaleString(),
            rss: `${rss} MB`,
            heap: `${heap} MB`,
            totalMemory: os.totalmem() / 1024 / 1024 / 1024 + "gb",
            freeMem: os.freemem() / 1024 / 1024 + "mb",
        });
    })
    .all(methodNotAllowed)

export default router;