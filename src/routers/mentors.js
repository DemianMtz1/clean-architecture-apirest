const router = require('express').Router();
const mentorsUseCases = require('../usecases/mentors');

router.get('/', async (req,res) => {
    try {
        
        const mentors = await mentorsUseCases.getAll();
        res.status(200).json({
            success: true,
            message: 'All mentors',
            data: {
                mentors
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at getAll',
            data: error.message
        })
    }
})

router.post('/', async (req,res) => {
    try {
        const newMentor = req.body;
        const mentors = await mentorsUseCases.create(newMentor);
        res.status(200).json({
            success: true,
            message: 'New mentor',
            data: {
                mentors
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at create',
            data: error.message
        })
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const deletedMentor = await mentorsUseCases.deleteById(id);
        res.status(200).json({
            success: true,
            message: 'Deleted mentor',
            data: {
                deletedMentor
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at deleteById',
            data: error.message
        })
    }
})

router.patch('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body
        const updatedMentor = await mentorsUseCases.updateById(id,updatedData);
        res.status(200).json({
            success: true,
            message: 'Updated mentor',
            data: {
                updatedMentor
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at uodateById',
            data: error.message
        })
    }
})


module.exports = router;    