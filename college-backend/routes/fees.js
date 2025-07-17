const express = require('express');
const router = express.Router();
const Fee = require('../models/Fee');

// GET all fees
router.get('/', async (req, res) => {
  try {
    const fees = await Fee.find();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET fee by ID
router.get('/:id', async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id);
    if (!fee) return res.status(404).json({ error: 'Fee not found' });
    res.json(fee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create fee
router.post('/', async (req, res) => {
  try {
    const fee = new Fee(req.body);
    await fee.save();
    res.status(201).json(fee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update fee
router.put('/:id', async (req, res) => {
  try {
    const fee = await Fee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fee) return res.status(404).json({ error: 'Fee not found' });
    res.json(fee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE fee
router.delete('/:id', async (req, res) => {
  try {
    const fee = await Fee.findByIdAndDelete(req.params.id);
    if (!fee) return res.status(404).json({ error: 'Fee not found' });
    res.json({ message: 'Fee deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 