const express = require('express')
const Place = require('../schemas/place')
const Category = require('../schemas/category')

const router = express.Router();

// Place Request will contain 
// name
// adress
// slug
// desc
// checkpoints []

router.post('/add-place', async(req, res) => {
    try {
        const { name, adress, slug, desc, category, checkpoints } = req.body;
        const placeFound = await Place.findOne({name});
        if (placeFound) throw new Error ('Place Already Exists in the DB')
        if (name.length===0) {
            throw new Error ("Name Field Empty");
        }
        if (adress.length===0) {
            throw new Error ("Adress Field Empty");
        }
        var replaced = slug.split('-').join(' ');
        if (replaced!=name) {
            throw new Error ('Incorrect Slug');
        }
        if (checkpoints.length===0) {
            throw new Error ('Please Enter at least one checkpoint');
        }
        const categoryId = await Category.findOne({name: category})
        console.log(categoryId._id);
        const place = new Place ({
            name: name,
            adress: adress,
            slug: slug,
            desc: desc,
            category: categoryId._id,
            checkpoints: checkpoints
        })
        await place.save().then(() => {
            res.send('Data Saved Successfully into the DB');
        }).catch((error) => {
            res.send({message: error});
        })
    } catch (err) {
        res.send(err.message);
    }
})

router.patch('/update-place', (req, res) => {
    try {
        const nametoupdate = req.name;
        const tobeUpdated = Place.findOne({nametoupdate});
        console.log(tobeUpdated)
        if (!tobeUpdated) {
            throw new Error ('The place was not found in the DB');
        }

    } catch (err) {
        res.send(err);
    }
})

module.exports = router;