import express from 'express';
const router = express.Router();
import fs from 'fs';

const PATH_NOTES = __dirname;

const removeExtension = (fileName: string) => {
  //TODO example [example, js]
  return fileName.split('.').shift();
};

const a = fs.readdirSync(PATH_NOTES).filter((file: any) => {
  const name = removeExtension(file);

  if (name !== 'index') {
    router.use(`/${name}`, require(`./${file}`).default);
  }
});

export { router };
