# expressLoginRegisterApi

### Simple api where jwt vs passport was practiced

## ⚙️ Dependencies:
- Node.js v16.13.1 or above

## 🖥️ How to start the server LOCALLY:

1- Clone this repository from the `main` branch.

2- In your preferred CLI do ```npm install``` at the repository's root folder.

3- Do ```npm start``` at the repository's root folder.
   It should be ready when it prints out `Listening to port 3001`.


## ➡️ ENDPOINTS

## Register [POST] /api/register

<details>
	
<summary>Request: Body</summary>

```

{
    "fullName":"Brian Bacarezza",
    "email":"Pancho@gmail.com",
    "password":"12345"
}
	
```
</details>

## Login [POST] /api/login
<details>
	
<summary>Request: Body</summary>

```

{
 "email":"Pancho@gmail.com",
  "password": "12345"
}
	
```

</details>

<details>
	
<summary>Response: JSON</summary>

```

{
    "message": "Welcome Back!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJQYW5jaG9AZ21haWwuY29tIiwiaWF0IjoxNjQzNzA5MjgxfQ.W1l8guMci7Oj-MOyn3v61_aZ6e3f9iTUjjG0YQM-dvA"
}
	
```

</details>

## Payment [GET] /api/payment
<details>
  
<summary>Response: JSON</summary>

```

{
  "msg": "your payment is..."
}
	
```

</details>

