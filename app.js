'use strict';
import express from 'express';

const app = express();

app.listen(8090, () => {
  console.log('server is ready on 8090');
});