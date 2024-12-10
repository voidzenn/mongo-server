### MongoDB server
Based on this awesome repo https://github.com/fega/mongo-server

### Documentation
https://nomadas.gitbook.io/mongo-server


### Installation
- run in terminal with `yarn` or `npm install`
- run docker compose with `docker compose up` ( docker should be installed in your system )
- run server with `yarn start`

### Configuration
You can configure settings in `config.js`

### Authentication
You can use Postman to request to server.
We need to be signed up first before doing any further API requests because we have added username and password to our server container.

- Signup -- {base_url}/auth/users/sign-up

  ```
  {
      "email": "user@user.com",
      "password": "password"
  }
  ```
- Login -- {base_url}/auth/users/log-in

  ```
  {
      "email": "user@user.com",
      "password": "password"
  }
  ```

### API Requests
After login, it will respond with token and you will need to that add in headers like:


```Authorization: Bearer test_token```


You can now request to server.

---

POST {base_url}/employees

  ```
  {
      "fullname": "Juan Cruz",
      "age": "25"
  }
  ```

---
Server will automatically create the API endpoints and you can do request like:

GET {base_url}/employees

PATCH {base_url}/employees/1

DELETE {base_url}/employees/1
