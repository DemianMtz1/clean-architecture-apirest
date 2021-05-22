const router = require('express').Router();
const app = require('../server');
const koderUseCases = require('../usecases/koders')

router.get('/', async (req, res) => {
    try {
        const allKoders = await koderUseCases.getAll();
        res.status(200);
        res.json({
            success: true,
            message: 'All Koders',
            data: {
                koders: allKoders
            }
        });
    } catch (error) {
        res.status(400);
        res.json({
            success: false,
            message: 'Error at getAllKoders',
            error: error.message
        });
    }
})

router.post('/', async (req, res) => {
    try {
        const newKoder = req.body;

        const createdKoder = await koderUseCases.createKoder(newKoder)
        res.status(200);
        res.json({
            succes: true,
            message: 'New Koder',
            data: {
                koder: createdKoder
            }
        })
    } catch (error) {
        res.status(400);
        res.json({
            succes: false,
            message: 'Error at createKoder',
            error: error.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const idKoder = req.params.id;
        await koderUseCases.removeKoder(idKoder);

        res.status(200);
        res.json({
            succes: true,
            message: 'Deleted Koder',
            data: {}
        });

    } catch (error) {
        res.status(400);
        res.json({
            succes: false,
            message: 'Error at removeKoder',
            error: error.message
        });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const koderUpdated = await koderUseCases.updateById(id, req.body);

        res.status(200);
        res.json({
            succes: true,
            message: 'Koder updated',
            data: koderUpdated
        })
    } catch (error) {
        res.status(400);
        res.json({
            succes: false,
            message: 'Error at removeKoder',
            error: error.message
        });
    }
})

module.exports = router;