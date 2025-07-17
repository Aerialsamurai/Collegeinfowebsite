const express = require('express');
const router = express.Router();
const Placement = require('../models/Placement');

// GET all placements
router.get('/', async (req, res) => {
  try {
    const placements = await Placement.find();
    res.json(placements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET placement by ID
router.get('/:id', async (req, res) => {
  try {
    const placement = await Placement.findById(req.params.id);
    if (!placement) return res.status(404).json({ error: 'Placement not found' });
    res.json(placement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create placement
router.post('/', async (req, res) => {
  try {
    const placement = new Placement(req.body);
    await placement.save();
    res.status(201).json(placement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update placement
router.put('/:id', async (req, res) => {
  try {
    const placement = await Placement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!placement) return res.status(404).json({ error: 'Placement not found' });
    res.json(placement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE placement
router.delete('/:id', async (req, res) => {
  try {
    const placement = await Placement.findByIdAndDelete(req.params.id);
    if (!placement) return res.status(404).json({ error: 'Placement not found' });
    res.json({ message: 'Placement deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 