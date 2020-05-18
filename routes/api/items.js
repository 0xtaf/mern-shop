const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

router.get('/', async (req,res)=>{
  const result = await Item.find({}).sort({date: -1})
  res.json(result)
})
router.post('/', async (req,res)=>{
  const item = new Item({
    name: 'Tayfun'
  }) 

  const result = await item.save()
  res.json(result)
})
router.delete('/:id', async (req,res)=>{
  try {
    await Item.findByIdAndRemove(req.params.id)
    res.json({success: true})
  } catch (error) {
    res.status(404).json({success: false})
  }
})

module.exports = router;
