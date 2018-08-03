const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
const port = process.env.PORT || 5000;


app.get('/api/hello', (req, res) => {
    const customers = [
        {id: '1' , name: 'muddabir' , age: 21},
        {id: '2' , name: 'muddabir chohan' , age: 212},
        {id: '3' , name: 'muddabir khan' , age: 211}
    ]
    res.send(customers);
//   res.send({ express: 'Hello From Express and node' });
});


app.post('/api/hello', (req, res) => {
    res.json(req.body);
    console.log(req.body)
  });
  


  
app.listen(port, () => console.log(`Listening on port ${port}`));

