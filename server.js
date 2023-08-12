const express = require('express')
const port = 5000

const app = express()

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

app.get('/', (req, res) => {
    res.json('Welcome to the randomideas API')
})

// get all ideas
app.get('/api/ideas', (req, res) => {
    res.json({ success: true, data: ideas })
})

app.get('/api/ideas/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id)

    if(!idea){
        return res.status(404).json({ success: false, error: 'Rescource not found'})
    }

    res.json({ success: true, data: idea})
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
