# Email Send Service

This is a basic email sender that uses RabbitMQ to send queued email.

### Usage

<a name="usage"></a>

```shell
    yarn install

    # Initialize app
    node app.js

    # Initialize consumer
    node consumer.js
```

Send **POST** request to 'http://localhost:8080/register' endpoint with object which contains **email** field.
