import express from 'express';
import mongoUtil from '../db/mongoUtil';

export const workoutRouter = express.Router();

// Add an exercise
workoutRouter.post('/add-exercise', async (req, res) => {
    try {
        const uuid = req.headers.uuid;
        const usersDb = mongoUtil.getUsersDb();
        // retrieve all collections
        const allCollections = await usersDb.collections();
        // check to see if the collection with the user's name exists 
        const userExists = allCollections.find(collection => collection.collectionName === uuid);
        if (!userExists) {
            // creates collection with uuid
            await usersDb.createCollection(uuid);
        }
        // store the collection in a variable 
        const collection = usersDb.collection(uuid);
        // make a query with the exercise name 
        const query = { name: req.body.name };
        // check to see if the exercise is already in the collection
        const exerciseExists = await collection.findOne(query);
        if (exerciseExists) {
            // TODO reroute user to update method at this point
            res.status(400).send("Exercise already exists");
            return;
        }
        // add document to collection
        await usersDb.collection(uuid).insertOne(req.body);
        // return 200 and send message saying "exercise saved successfully"
        res.send(req.body);
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`);
    }
});

// Get an exercise
workoutRouter.get('/get-exercise', async (req, res) => {
    try {
        const uuid = req.headers.uuid;
        const usersDb = mongoUtil.getUsersDb();
        // retrieve all collections 
        const allCollections = await usersDb.collections();
        // check to see if the collection with the user's name exists 
        const userExists = allCollections.find(collection => collection.collectionName === uuid);
        if (!userExists) {
            res.status(400).send("User does not exist");
            return;
        }
        // store the collection in a variable 
        const collection = usersDb.collection(uuid);
        // query for the exercise 
        const { name } = req.query;
        const query = ({name: name});
        const response = await collection.findOne(query);
        // if the exercise doesn't exist, throw an error 
        if (response == null) {
            res.status(400).send("Exercise does not exist");
            return;
        }
        // send the exercise as a response
        res.json(response);
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`);
    }
});

// Get all exercises for one user
workoutRouter.get('/get-all', async (req, res) => {
    try {
        const uuid = req.headers.uuid;
        const usersDb = mongoUtil.getUsersDb();
        // retrieve all collections 
        const allCollections = await usersDb.collections();
        // check to see if the collection with the user's name exists 
        const userExists = allCollections.find(collection => collection.collectionName === uuid);
        if (!userExists) {
            res.status(400).send("User does not exist");
            return;
        }
        // store the collection in a variable 
        const collection = usersDb.collection(uuid);
        // query for the exercises 
        const response = await collection.find().toArray();
        // if the exercise doesn't exist, throw an error 
        if (response == null) {
            // TODO get this functionality working for a new user 
            res.status(400).send("No exercises found");
            return;
        }
        // send the exercise as a response
        res.json(response);
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`);
    }
});

// Update an exercise 
workoutRouter.put('/update-exercise', async (req, res) => {
    try {
        const uuid = req.headers.uuid;
        const usersDb = mongoUtil.getUsersDb();
        // retrieve all collections 
        const allCollections = await usersDb.collections();
        // check to see if the collection with the user's name exists 
        const userExists = allCollections.find(collection => collection.collectionName === uuid);
        if (!userExists) {
            res.status(400).send("User does not exist");
            return;
        }
        // store the collection in a variable 
        const collection = usersDb.collection(uuid);
        // store the params in a constant
        const { name, weight, sets, reps } = req.body;
        // query for the exercise 
        const response = await collection.findOneAndUpdate(
            { name: name },
            {
                $set: {
                    name: name,
                    weight: weight,
                    sets: sets,
                    reps: reps
                }
            }, 
            {
                upsert: true
            }
        );
        // if the exercise doesn't exist, throw an error 
        if (response == null) {
            // TODO get this functionality working for a new user 
            res.status(400).send("No exercises found");
            return;
        }
        // send the exercise as a response
        res.json(req.body);
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`);
    }
});

// Delete an exercise 
workoutRouter.delete('/delete-exercise', async (req, res) => {
    try {
        const uuid = req.headers.uuid;
        const usersDb = mongoUtil.getUsersDb();
        // retrieve all collections 
        const allCollections = await usersDb.collections();
        // check to see if the collection with the user's name exists 
        const userExists = allCollections.find(collection => collection.collectionName === uuid);
        if (!userExists) {
            res.status(400).send("User does not exist");
            return;
        }
        // store the collection in a variable 
        const collection = usersDb.collection(uuid);
        // query for the exercise 
        const query = { name: req.query.name};
        const exerciseExists = await collection.findOne(query);
        if (exerciseExists) {
            await collection.deleteOne(query);
            res.send("Exercise deleted successfully");
        } else {
            res.status(400).send("Exercise does not exist");
            return;
        }
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`);
    }
});

export default workoutRouter;