const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  // Deze gegevens sla je vervolgens op in de database met MongoDB/Mongoose
  console.log(req.body);

  // vervolgens stuur je een reactie terug naar de client dat het successvol is verstuurd.
  res.json(req.body);
});

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}/`),
);
