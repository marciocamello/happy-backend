# Happy API - #NLW3

![alt text](https://github.com/marciocamello/happy-backend/blob/master/layout.png)

---

<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
  
  <a href="https://www.linkedin.com/in/marciocamello/">
    <img alt="My Linkedin" src="https://img.shields.io/badge/marciocamello-%230077B5?style=social&logo=linkedin">
  </a>

  <br />

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/marciocamello/readme_maker">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/marciocamello/readme_maker">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marciocamello/readme_maker">
</p>

---

:rocket: Technologies

- NodeJS
- ExpressJS
- Typescript
- TypeORM  
- Multer Upload
- Yup Validation
- JWT

:blue_book: Refs

- https://www.typescriptlang.org/docs/home/
- https://knexjs.org/
- https://expressjs.com/en/4x/api.html

## API Tools

Import this file in Insomnia
[https://insomnia.rest/](https://insomnia.rest/)

```shell script
insomnia.json
```

API Docs

- Endpoint Development `http://localhost:3333`
- Endpoint Production `https://happy-api.herokuapp.com`

**Orphanages**

### `GET /orphanages`    

List orphanages

Response
Status 200
```json
[
  {
    "id": 5,
    "name": "Lar das menina",
    "latitude": -20.1540336,
    "longitude": -44.9159928,
    "about": "Sobre o orfanato",
    "instructions": "Venha visitar",
    "opening_hours": "Das 8h até as 18h",
    "open_on_weekends": false,
    "images": [
      {
        "id": 9,
        "url": "http://192.168.0.105:3333/uploads/1602680580708-bg-linkedin.jpg"
      },
      {
        "id": 10,
        "url": "http://192.168.0.105:3333/uploads/1602680580710-1555147.png"
      }
    ]
  },
  {
    "id": 13,
    "name": "Outro orfanato",
    "latitude": -20.1561587,
    "longitude": -44.9266788,
    "about": "Sobre o orfanato",
    "instructions": "Venha visitar",
    "opening_hours": "Das 8h até as 18h",
    "open_on_weekends": true,
    "images": [
      {
        "id": 25,
        "url": "http://192.168.0.105:3333/uploads/1602683757092-bg-linkedin.jpg"
      },
      {
        "id": 26,
        "url": "http://192.168.0.105:3333/uploads/1602683757094-1555147.png"
      }
    ]
  },
  {
    "id": 15,
    "name": "Unidavi",
    "latitude": -27.21872379943681,
    "longitude": -49.648311138153076,
    "about": "Runf",
    "instructions": "Venha",
    "opening_hours": "8h as 19h",
    "open_on_weekends": true,
    "images": [
      {
        "id": 28,
        "url": "http://192.168.0.105:3333/uploads/1602687878112-bot.png"
      }
    ]
  },
  {
    "id": 16,
    "name": "Orfanato Campina Verde",
    "latitude": -20.14871003457989,
    "longitude": -44.923218414187424,
    "about": "teste",
    "instructions": "ok",
    "opening_hours": "8h as 14h",
    "open_on_weekends": true,
    "images": [
      {
        "id": 29,
        "url": "http://192.168.0.105:3333/uploads/1602864916621-image_0.jpg"
      }
    ]
  }
]
```

**Create Orphanages**

### `POST /orphanages`    

Create a new orphanage

  * `Headers`
  * `Content-Type: application/json`

Body
```json
{
	"name": "Nome da Entidade",
	"email": "emaildaentidade@gmail.com",
	"whatsapp": "37900000000",
	"latitude": -10.1540336,
	"longitude": -20.9159928,
	"city": "Divinopólis",
	"uf": "MG",
	"items": [1, 2, 3]
}
```

Response
Status 200
```json
{
  "name": "Outro orfanato",
  "latitude": "-20.1561587",
  "longitude": "-44.9266788",
  "about": "Sobre o orfanato",
  "instructions": "Venha visitar",
  "opening_hours": "Das 8h até as 18h",
  "open_on_weekends": true,
  "images": [
    {
      "path": "1602683757092-bg-linkedin.jpg",
      "id": 25
    },
    {
      "path": "1602683757094-1555147.png",
      "id": 26
    }
  ],
  "id": 13
}
```
