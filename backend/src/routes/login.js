import express from 'express';
import mongoUtil from '../db/mongoUtil';
import { createHash } from '../utils/hash';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const db = mongoUtil.getLoginDb();
        const { username, password } = req.query;
        // hash username and password
        const hashedId = createHash(username, password);
        // retrieve all the collections 
        const allCollections = await db.collections();
        // go through collections and check if it exists
        const userExists = allCollections.find(collection => collection.collectionName === hashedId);
        if (!userExists) {
            throw new Error("Username or Password is incorrect");
        }
        res.send("User exists and is logged in successfully");
    } catch (err) {
        res.status(404).send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const loginDb = mongoUtil.getLoginDb();
        const { username, password } = req.body;
        // hash username and password together
        const hashedId = createHash(username, password);
        const allCollections = await loginDb.collections();
        // go through collections and check if it exists
        const userExists = allCollections.find(collection => collection.collectionName === hashedId);
        if (!userExists) {
            const usersDb = mongoUtil.getUsersDb();
            // make collection from that
            await loginDb.createCollection(hashedId);
            // add document to collection (username, password, email, name)
            await loginDb.collection(hashedId).insertOne({...req.body, lastLogin: new Date()});
            //creates collection for user db
            await usersDb.createCollection(username);
            // add document with hashed id for future changes to account info
            await usersDb.collection(username).insertOne({hashedId: hashedId});
            // return 200 and send message saying "user is added successfully"
            res.send("User added successfully");
        } else {
            res.status(409).send("Account already exists");
        }
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`);
    }
});

export default router;