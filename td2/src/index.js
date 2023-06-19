const express = require('express')
const app = express()
const port = 3000
const redis = require('redis')

const redisClient = redis.createClient({
    socket: {
        host: 'redis',
        port: 6379
    }
});

app.get('/', async (req, res) => {
    await redisClient.connect();

    const totalViews = await redisClient.incr('views');
    res.send(`${totalViews} people viewed this page`)

    await redisClient.disconnect();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})