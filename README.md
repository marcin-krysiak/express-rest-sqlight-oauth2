# express-rest-sqlight-oauth2

This node app is a simple demonstration of REST API with sqlight access and OAuth2 authorisation.

Before runnig the app please register your okta account at `https://developer.okta.com/signup` and create scope and application.

After that please fill in issuer, scope, client_is and client_secret fields in .env file.

You can use client.js to test the API working

Running the API:
```
node .
```   

running the test client app:

`node client http://localhost:3000/contacts post '{"firstName":"Marcin", "lastName":"K", "email":"mk@g.com", "description":"some description"}'`

`node client http://localhost:3000/contacts`

`node client http://localhost:3000/contacts/1 delete`

`node client http://localhost:3000/contacts`