import express from 'express';
import { validationResult } from 'express-validator/check';
import { noticeValidator, salaryValidator } from '../validators/noticeValidator';
import { promisify } from 'util';
import { readFile, writeFile } from 'fs';

const router = express.Router();
const awaitReadFile = promisify(readFile);
const awaitWriteFile = promisify(writeFile);

router.get('/', async (req, res) => {

  const fileData = await awaitReadFile('db.json', 'utf8');

  const fileDataJson = JSON.parse(fileData);

  return res.send(fileDataJson);
});

router.post('/', noticeValidator, salaryValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ errors: errors.array() });

  const fileData = await awaitReadFile('db.json', 'utf8');

  const fileDataJson = JSON.parse(fileData);

  const newFileDataJson = [...fileDataJson, req.body];

  await awaitWriteFile('db.json', JSON.stringify(newFileDataJson), 'utf8');

  return res.send({ status: true });
});

export default router;
