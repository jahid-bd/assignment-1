# assignment-1

## Random Number API

The RandomNumber API generates a random integer between the specified `start` and `end` values.

### Endpoint

```
POST /api/random-number

```

### Request Body

The request body must be a JSON object containing the following properties:

- `start` (required): The start of the range. Must be an integer.
- `end` (required): The end of the range. Must be an integer.

Example request body:

```
{
  "start": 1,
  "end": 10
}

```

### Response

The API responds with a JSON object containing a single property: `randomNumber`, which is a random integer between the specified `start` and `end` values (inclusive).

Example response:

```
{
  "randomNumber": 6
}

```

### Error Responses

If the request body is missing or invalid, the API will respond with a `400 Bad Request` status code and an error message in the response body.

If the `start` or `end` values are not integers, the API will respond with a `400 Bad Request` status code and an error message in the response body.

If the `start` value is greater than the `end` value, the API will respond with a `400 Bad Request` status code and an error message in the response body.

### Examples

### Generate a random number between 1 and 10

Request:

```
POST /api/random-number
{
  "start": 1,
  "end": 10
}

```

Response:

```
{
  "randomNumber": 6
}

```

### Generate a random number between -50 and 50

Request:

```
POST /api/random-number
{
  "start": -50,
  "end": 50
}

```

Response:

```
{
  "randomNumber": -10
}

```

## Generate Person API

The Generate Person API generates a random person based on the input provided by the client. The API retrieves data from a third-party API and returns a subset of that data based on the requested properties.

### Endpoint

```
POST /api/generate-person

```

### Request Body

The request body must be a JSON object containing an array of property names that the client wants to retrieve. The following properties are valid:

- `firstName`: The first name of the person.
- `lastName`: The last name of the person.
- `email`: The email address of the person.
- `avatar`: The URL of the person's avatar image.
- `age`: The age of the person.
- `address`: The address of the person.

Example request body:

```
{
  "properties": ["firstName", "lastName", "email", "avatar", "age"]
}

```

### Response

The API responds with a JSON object containing a subset of the data retrieved from the third-party API, based on the requested properties.

Example response:

```
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@example.com",
  "avatar": "<https://example.com/johndoe.jpg>",
  "age": 35
}

```

### Error Responses

If the request body is missing or invalid, the API will respond with a `400 Bad Request` status code and an error message in the response body.

If the API encounters an error while retrieving data from the third-party API, it will respond with a `500 Internal Server Error` status code and an error message in the response body.

### Examples

### Retrieve a person's first name, last name, email, avatar, and age

Request:

```
POST /api/generate-person
{
  "properties": ["firstName", "lastName", "email", "avatar", "age"]
}

```

Response:

```
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@example.com",
  "avatar": "<https://example.com/johndoe.jpg>",
  "age": 35
}

```

### Retrieve a person's first name, email, and address

Request:

```
POST /api/generate-person
{
  "properties": ["firstName", "email", "address"]
}

```

Response:

```
{
  "firstName": "Jane",
  "email": "janedoe@example.com",
  "address": "123 Main St, Anytown USA"
}

```
