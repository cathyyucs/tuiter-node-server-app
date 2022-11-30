import * as tuitsDao from '../tuits/tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;

    newTuit.dislikes = 0;
    newTuit.disliked = false;
    newTuit.time = "2h";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.title = "An interesting tuit from NASA";
    newTuit.topic = "Space";
    newTuit.userName = "NASA";
    newTuit.handle = "@nasa";
    newTuit.image = "/images/nasa2.png";

    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
    res.json(status);
}


const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
