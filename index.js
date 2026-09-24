const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Aplicação a funcionar!');
});

app.listen(PORT, () => {
  console.log(`Servidor a rodar na porta ${PORT}`);
});
