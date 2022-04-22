# API Send WhatsApp NEW

OY's API Collection for sending Whatsapp Notifications. Currently, WhatsApp can only be enabled for Payment Link and Invoice product. Contact your Business Representative if you'd like to activate this feature.

## Send Payment/Invoice Link WhatsApp Notification

Use this API to send a payment link and/or invoice link through WhatsApp (using OY’s pre-defined template).

```shell
`curl -X POST \
  https://partner.oyindonesia.com/api/whatsapp/send-link \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'X-Api-Key: apikeymu' \
  -H 'X-Oy-Username: yourusername' \
  -d '{
        "partner_tx_id":"partnerTxId",
        "whatsapp_number":"621234567890"
    }'`
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/whatsapp/send-link'));
request.body = json.encode({
  "partner_tx_id":"partnerTxId",
  "whatsapp_number":"621234567890"
});
request.headers.addAll(headers);

http.StreamedResponse response = await request.send();

if (response.statusCode == 200) {
  print(await response.stream.bytesToString());
}
else {
  print(response.reasonPhrase);
}
```

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "%7B%7Bbase_url%7D%7D/api/whatsapp/send-link"
  method := "POST"

  payload := strings.NewReader(`{
		"partner_tx_id":"partnerTxId",
		"whatsapp_number":"621234567890"
	}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Accept", "application/json")
  req.Header.Add("x-oy-username", "{{username}}")
  req.Header.Add("x-api-key", "{{api-key}}")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n\"partner_tx_id\": \"partnerTxId\",\n \"whatsapp_number\": \"621234567890\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/whatsapp/send-link")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("Accept", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_tx_id":"partnerTxId",
	"whatsapp_number":"621234567890"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/whatsapp/send-link");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/whatsapp/send-link');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n	"partner_tx_id": "partnerTxId",\n	"whatsapp_number": "621234567890"\n}');
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```

```python
import http.client
import json

conn = http.client.HTTPSConnection("{{base_url}}")
payload = json.dumps({
  "partner_tx_id":"partnerTxId",
  "whatsapp_number":"621234567890"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/whatsapp/send-link", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> JSON Response

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "data": {
        "partner_tx_id": "partnerTxId",
        "whatsapp_number": "621234567890",
        "success_queued": true,
        "message_id" : "98ndyfs98fdysdf98y-sdiufhnudfsh4hr9h8"
    }
}
```

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/whatsapp/send-link`

**[Staging]** `POST https://api-stg.oyindonesia.com/api/whatsapp/send-link`

### Request Headers

|Parameter	|Type	|Description	|
|---	|---	|---	|
|X-Api-Key	|String	|API Key used to connect to this particular endpoint	|
|X-Oy-Username	|String	|Your OY! account username	|

### Request Parameters

|Parameter	|Type	|Required	|Default	|Description	|
|---	|---	|---	|---	|---	|
|partner_tx_id	|String(255)	|TRUE	|-	|ID generated by Partner for a specific transaction	|
|whatsapp_number	|String(255)	|TRUE	|-	|The WhatsApp number of your users. (format 628xxxxxxxxxx)	|

### Response Parameters

|Parameter	|Type	|Description	|
|---	|---	|---	|
|status	|Object	|Status of response in Object `{code: <status_code>, message: <status_message>}`.	|
|data	|Object	|The API's response data in an Object, details are in the [Response Data Parameters table](#response-data-parameters-send-payment-invoice-link-whatsapp-notification).	|

### Response Data Parameters

|Parameter	|Type	|Description	|
|---	|---	|---	|
|partner_tx_id	|String(255)	|ID generated by Partner for a specific transaction	|
|whatsapp_number	|String(255)	|The WhatsApp number of your users. (format 628xxxxxxxxxx)	|
|success_queued | Boolean	|Filled with TRUE if a WA has successfully been successfully queued for sending	|
|message_id | String(255) |Unique ID generated for each WhatsApp message being sent (null if unsuccessfully queued)|

## Callback WhatsApp Sending

Because of the asynchronous behavior of sending a WhatsApp message, we provide a callback for you to track the status of your message. To activate this feature please contact your business representative to provide a callback url to be sent to.

We can send multiple callback status updates for a single message depending on the situation. Each message is represented by the `message_id` we have provided. 
The general order of a successful callback status request will however be:
sent -> delivered -> read

### Status Descriptions

|Status |Description |
|--- |--- |
|sent |Message has been sent by our system. If the WhatsApp user blocks OY!'s WhatsApp business acount, this status will be final and will not be updated (there will be no following callback status for the message) |
|delivered |Message has been delivered to the WhatsApp user but hasn't been read |
|read |Message has been delivered to the WhatsApp user and has been read by the user. This status is final and will not be updated (there will be no following callback status for the message) |
|undelivered |Message has not been delivered. This status is final and will not be updated (there will be no following callback status for the message) |
|failed |Message has failed to be delivered. This status is final and will not be updated (there will be no following callback status for the message) |

### Callback Request Parameters

|Parameter |Type |Description |
|partner_tx_id |String(255) |ID generated by partner for a specific transaction |
|whatsapp_number |String(255) |The WhatsApp number of your user (format: 62xxxxxxxx) |
|message_id |String(255) |Message ID of the individual message that we sent |
|status |String(255) |Status of the message. Possible values are as provided in the previous table |