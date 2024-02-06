const express = require('express')
const router = express.Router()

const url = 'https://scheduflow-json-server.fly.dev/schedules'

router.get('/schedules', async (req, res)=> {
        let schedules = null
        const data = await fetch(url)
        schedules = await data.json()
	res.json(schedules)
})

module.exports = router
