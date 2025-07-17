const express = require('express');
const router = express.Router();
const Ranking = require('../models/Ranking');

// GET all rankings
router.get('/', async (req, res) => {
  try {
    const rankings = await Ranking.find();
    res.json(rankings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ranking by ID
router.get('/:id', async (req, res) => {
  try {
    const ranking = await Ranking.findById(req.params.id);
    if (!ranking) return res.status(404).json({ error: 'Ranking not found' });
    res.json(ranking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create ranking
router.post('/', async (req, res) => {
  try {
    const ranking = new Ranking(req.body);
    await ranking.save();
    res.status(201).json(ranking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update ranking
router.put('/:id', async (req, res) => {
  try {
    const ranking = await Ranking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ranking) return res.status(404).json({ error: 'Ranking not found' });
    res.json(ranking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE ranking
router.delete('/:id', async (req, res) => {
  try {
    const ranking = await Ranking.findByIdAndDelete(req.params.id);
    if (!ranking) return res.status(404).json({ error: 'Ranking not found' });
    res.json({ message: 'Ranking deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 