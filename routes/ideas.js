const express = require ('express')
const router = express.Router()

const ideas = [
    {
        id:1,
        text:'positive newsLetter, a newslatter that only shares positive news',
        tag:'Technology',
        username:'TonyStacrk',
        date:'2022-01-02',
        },
        
        {
        id:2,
        text:'milk cartons that turn a diffrent color',
        tag:'Invention',
        username:'SteveRogers',
        date:'2022-01-02',
        },
        {
        id:3,
        text:'ATM location app which lets you know where the closest ATM is and if it is',
        tag:'software',
        username:'BruceBanner',
        date:'2022-01-02',
        },
]

// get all ideas
router.get('/', (req, res) => {
    res.json({ success: true, data: ideas })
})

// get single idea
router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id)

    if(!idea){
        return res.status(404)
        .json({ success: false, error: 'Rescource not found'})
    }

    res.json({ success: true, data: idea})
})

// add an idea
router.post('/',(req, res) =>{
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10),
    }

    ideas.push(idea)

    res.json({ success:true, data: idea })

})

module.exports = router