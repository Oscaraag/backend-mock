const express = require('express')
const app = express()
const port = 3000

const data = [
  {
    id: 1,
    name: 'Oficina Central',
    online: true,
    lines: [
      {
        waiting: 5,
        elapsed: 1200,
      },
      {
        waiting: 3,
        elapsed: 900,
      },
    ],
  },
  {
    id: 2,
    name: 'ZeroQ Oficina Secundaria',
    online: true,
    lines: [
      {
        waiting: 8,
        elapsed: 1200,
      },
      {
        waiting: 3,
        elapsed: 1900,
      },
    ],
  },
  {
    id: 3,
    name: 'ZeroQ Demo',
    online: true,
    lines: [
      {
        waiting: 3,
        elapsed: 1000,
      },
      {
        waiting: 7,
        elapsed: 1800,
      },
    ],
  },
  {
    id: 4,
    name: 'Demo web frontend',
    online: true,
    lines: [
      {
        waiting: 7,
        elapsed: 2200,
      },
      {
        waiting: 4,
        elapsed: 1300,
      },
    ],
  },
  {
    id: 5,
    name: 'ZeroQ Fisico',
    online: true,
    lines: [
      {
        waiting: 8,
        elapsed: 1700,
      },
      {
        waiting: 3,
        elapsed: 700,
      },
    ],
  },
  {
    id: 6,
    name: 'ZeroQ Local',
    online: false,
    lines: [
      {
        waiting: 12,
        elapsed: 2000,
      },
      {
        waiting: 20,
        elapsed: 3900,
      },
    ],
  },
  {
    id: 7,
    name: 'Comercial',
    online: false,
    lines: [
      {
        waiting: 9,
        elapsed: 4200,
      },
      {
        waiting: 7,
        elapsed: 2900,
      },
    ],
  },
  {
    id: 8,
    name: 'Comercial II',
    online: true,
    lines: [
      {
        waiting: 21,
        elapsed: 3200,
      },
      {
        waiting: 5,
        elapsed: 1900,
      },
    ],
  },
  {
    id: 9,
    name: 'QA Fisico',
    online: false,
    lines: [
      {
        waiting: 10,
        elapsed: 3300,
      },
      {
        waiting: 3,
        elapsed: 5400,
      },
    ],
  },
  {
    id: 10,
    name: 'Demo web backend',
    online: true,
    lines: [
      {
        waiting: 16,
        elapsed: 1800,
      },
      {
        waiting: 13,
        elapsed: 2600,
      },
    ],
  },
]

app.use(express.json())

app.get('/api/offices', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
