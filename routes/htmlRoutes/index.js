const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Develop/public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Develop/public/zookeepers.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

module.exports = router;
