# API Offline

API Offline enables your user to withdraw and deposit money from OY offline channel such as Cash Recycle Machine (CRM) and convenience store.

## Initiate Transaction

```shell
curl -X \
POST https://partner.oyindonesia.com/api/offline-create \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:7654321' \
-d '{
   "partner_trx_id":"withdraw_request_123",
   "receiver_phone_number":"081234567890",
   "amount":50000,
   "transaction_type":"CASH_OUT",
   "offline_channel":"CRM"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/offline-create'));
request.body = json.encode({
  "partner_trx_id": "oyonoy-00007",
  "receiver_phone_number": "081223738047",
  "amount": 50000,
  "transaction_type": "CASH_IN",
  "offline_channel": "CRM"
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

  url := "%7B%7Bbase_url%7D%7D/api/offline-create"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_trx_id": "oyonoy-00007",
    "receiver_phone_number": "081223738047",
    "amount": 50000,
    "transaction_type": "CASH_IN",
    "offline_channel": "CRM"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_trx_id\": \"oyonoy-00007\",\n    \"receiver_phone_number\": \"081223738047\",\n    \"amount\": 50000,\n    \"transaction_type\": \"CASH_IN\",\n    \"offline_channel\": \"CRM\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/offline-create")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "oyonoy-00007",
  "receiver_phone_number": "081223738047",
  "amount": 50000,
  "transaction_type": "CASH_IN",
  "offline_channel": "CRM"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/offline-create");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/offline-create');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n    "partner_trx_id": "oyonoy-00007",\n    "receiver_phone_number": "081223738047",\n    "amount": 50000,\n    "transaction_type": "CASH_IN",\n    "offline_channel": "CRM"\n}');
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
  "partner_trx_id": "oyonoy-00007",
  "receiver_phone_number": "081223738047",
  "amount": 50000,
  "transaction_type": "CASH_IN",
  "offline_channel": "CRM"
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/offline-create", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "amount": 50000,
    "code": "897412",
    "timestamp": "14-10-2020 17:12:16",
    "receiver_phone_number": "+6281234567890",
    "partner_trx_id": "withdrawal-request-123",
    "trx_id": "1234-5678",
    "transaction_type": "CASH_OUT",
    "inactive_at": "2020-10-14 13:12:16.786",
    "expired_at": "2020-10-15 10:12:16.786"
}
```

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/offline-create`<br>
**[Staging]** `TBD`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
receiver_phone_number | String(255) | TRUE | User's phone number that will be used for withdraw or deposit process
amount | BigDecimal | TRUE | The amount that going to withdraw or deposit (Accepts multiple of 50.000)
transaction_type | String(255) | TRUE | Type of transaction. CASH_OUT for withdrawal and CASH_IN for deposit.
offline_channel | String(255) | TRUE | Offline Channel which the transaction will be processed. 

### Response Parameters
 Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
partner_trx_id | String(255) | Unique Payout ID for a specific request, generated by partner.
trx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement.
amount | BigDecimal | Amount of transaction
code | String(6) | Required unique code for Deposit or Withdrawal process
receiver_phone_number | String(255) | User's phone number that will be used for withdraw or deposit process
transaction_type | String(255) | Type of transaction. CASH_OUT for withdrawal and CASH_IN for deposit.
timestamp | String(19) | Execution time of the request in OY! system ("yyyy-MM-dd HH:mm:ss.SSS")
inactive_at | String(19) | The time that the unique code will expire and need to be refreshed ("yyyy-MM-dd HH:mm:ss.SSS")
expired_at | String(19) | The time that the transaction will expire and won't be able to be withdrawn or deposited ("yyyy-MM-dd HH:mm:ss.SSS")

## Cancel Transaction

```shell
curl -X \
POST https://partner.oyindonesia.com/api/offline-cancel \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:7654321' \
-d '{
   "partner_trx_id":"withdraw_request_123"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/offline-cancel'));
request.body = json.encode({
  "partner_trx_id": "oyonoy-00003"
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

  url := "%7B%7Bbase_url%7D%7D/api/offline-cancel"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_trx_id": "oyonoy-00003"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_trx_id\": \"oyonoy-00003\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/offline-cancel")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "oyonoy-00003"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/offline-cancel");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/offline-cancel');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n    "partner_trx_id": "oyonoy-00003"\n}');
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
  "partner_trx_id": "oyonoy-00003"
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/offline-cancel", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code":"299",
        "message":"Transaction Canceled"
    },
    "partner_trx_id":"withdraw_request_123",
    "timestamp":"2021-04-05 20:38:23.953"
}
```

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/offline-cancel`<br>
**[Staging]** `TBD`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner

### Response Parameters
 Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
partner_trx_id | String(255) | Unique Payout ID for a specific request, generated by partner.
timestamp | String(19) | Execution time of the request in OY! system ("yyyy-MM-dd HH:mm:ss.SSS")

## Transaction Info

```shell
curl -X \
POST https://partner.oyindonesia.com/api/offline-info \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:7654321' \
-d '{
   "partner_trx_id":"withdraw_request_123",
   "send_callback":"true"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api-offline/tx-info'));
request.body = json.encode({
  "partner_trx_id": "oyonoy-00002",
  "send_callback": false
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

  url := "%7B%7Bbase_url%7D%7D/api-offline/tx-info"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_trx_id": "oyonoy-00002",
    "send_callback": false
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_trx_id\": \"oyonoy-00002\",\n    \"send_callback\": false\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api-offline/tx-info")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "oyonoy-00002",
  "send_callback": false
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api-offline/tx-info");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api-offline/tx-info');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n    "partner_trx_id": "oyonoy-00002",\n    "send_callback": false\n}');
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
  "partner_trx_id": "oyonoy-00002",
  "send_callback": False
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api-offline/tx-info", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "amount": 50000,
    "code": "897412",
    "timestamp": "14-10-2020 17:12:16",
    "receiver_phone_number": "+6281234567890",
    "partner_trx_id": "withdrawal-request-123",
    "trx_id": "1234-5678",
    "transaction_type": "CASH_OUT",
    "inactive_at": "2020-10-14 13:12:16.786",
    "expired_at": "2020-10-15 10:12:16.786"
}
```

To get status of a transaction request, you can call this API. You may need to call this API few times until getting a final status (success / failed) or implement callback transaction.

This API offers an option to send you a callback status of the transaction request to a specific URL.
Please contact us and submit a callback URL if you need a callback status of a transaction request.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/offline-info`<br>
**[Staging]** `TBD`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
send_callback | Boolean | FALSE | A flag to indiciate if the status of the transaction request need to be re-sent as a callback or not

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
partner_trx_id | String(255) | Unique Payout ID for a specific request, generated by partner.
trx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement.
amount | BigDecimal | Amount of transaction
code | String(6) | Required unique code for Deposit or Withdrawal Process
receiver_phone_number | String(255) | User's phone number that will be used for withdraw or deposit process
transaction_type | String(255) | Type of transaction. CASH_OUT for withdrawal and CASH_IN for deposit.
timestamp | String(19) | Execution time of the request in OY! system ("yyyy-MM-dd HH:mm:ss.SSS")
inactive_at | String(19) | The time that the unique code will expire and need to be refreshed ("yyyy-MM-dd HH:mm:ss.SSS")
expired_at | String(19) | The time that the transaction will expire and won't be able to be withdrawn or deposited ("yyyy-MM-dd HH:mm:ss.SSS")

## Refresh Code

```shell
curl -X \
POST https://partner.oyindonesia.com/api/offline-refresh-code \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:7654321' \
-d '{
   "partner_trx_id":"withdraw_request_123"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api-offline/refresh-code'));
request.body = json.encode({
  "partner_trx_id": "oyonoy-00002"
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

  url := "%7B%7Bbase_url%7D%7D/api-offline/refresh-code"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_trx_id": "oyonoy-00002"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_trx_id\": \"oyonoy-00002\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api-offline/refresh-code")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "oyonoy-00002"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api-offline/refresh-code");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api-offline/refresh-code');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n    "partner_trx_id": "oyonoy-00002"\n}');
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
  "partner_trx_id": "oyonoy-00002"
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api-offline/refresh-code", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```


> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "code": "970524",
    "partner_trx_id": "withdraw_request_123",
    "inactive_at": "2020-10-14 13:12:16.786",
    "expired_at": "2020-10-15 10:12:16.786"
}
```

A transaction will be valid for 24 hours with a default 3-hours validity for each unique code . Use this API to refresh the unique code that have expired in which transaction is still valid.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/offline-refresh-code`<br>
**[Staging]** `TBD`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of refresh code request in Object `{code: <status_code>, message: <status_message>}`
code | String(6) | Required unique code for Deposit or Withdrawal Process
partner_trx_id | String(255) | Unique Payout ID for a specific request, generated by partner
inactive_at | String(19) | The time that the unique code will expire and need to be refreshed ("yyyy-MM-dd HH:mm:ss.SSS")
expired_at | String(19) | The time that the transaction will expire and won't be able to be withdrawn or deposited ("yyyy-MM-dd HH:mm:ss.SSS")

## Callback

> Response callback:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "amount": 50000,
    "code": "897412",
    "timestamp": "14-10-2020 17:12:16",
    "receiver_phone_number": "+6281234567890",
    "partner_trx_id": "withdrawal-request-123",
    "trx_id": "1234-5678",
    "transaction_type": "CASH_OUT",
    "created_date": "2020-10-14 13:12:16.786",
    "last_updated_date": "2020-10-15 10:12:16.786"
}
```

Once a transaction request is finished, our system will make a callback status of that transaction request to your system

Please contact us and submit a callback URL if you need a callback status of a transaction request.

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
partner_trx_id | String(255) | Unique Payout ID for a specific request, generated by partner.
trx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement.
amount | BigDecimal | Amount of transaction
code | String(6) | Required unique code for Deposit or Withdrawal process
receiver_phone_number | String(255) | User's phone number that will be used for withdraw or deposit process 
transaction_type | String(255) | Type of transaction. CASH_OUT for withdrawal and CASH_IN for deposit.
timestamp | String(19) | Execution time of the request in OY! system ("yyyy-MM-dd HH:mm:ss.SSS")
created_date | String(19) | Executionn time of trasaction in OY! system ("yyyy-MM-dd HH:mm:ss.SSS")
last_updated_date | String(19) | Latest status change of a transaction. Example from 'Pending' to 'Success' ("yyyy-MM-dd HH:mm:ss.SSS")

## API Offline Response Codes

These are the list of possible status codes for API Offline:

Payment Status | State     | Meaning
-------------- | --------- | -------
000            | Final     | Transaction Request has been completed (SUCCESS)
102            | Non-Final | Request is In Progress (Waiting for Deposit or Withdrawal)
222            | Final     | Transaction Expired (EXPIRED)
297            | Non-Final | Cash out/in in-progress
299            | Final     | Transaction Canceled (CANCELED)
300            | Final     | Transaction Failed (FAILED) 

The following status codes are for rejected requests

Payment Status | State     | Meaning
-------------- | --------- | -------
201            | Final     | Request is Rejected (User ID is not Found)
202            | Final     | Request is Rejected (User ID is not Active)
203            | Final     | Request is Rejected (Duplicate Partner Tx ID)
204            | Final     | Request is Rejected (Partner Tx ID is Not Found)
206            | Final     | Request is Rejected (Partner Deposit Balance is Not Enough)
207            | Final     | Request is Rejected (Request IP Address is not Registered)
208            | Final     | Request is Rejected (API Key is not Valid)
215            | Final     | Request is Rejected (Invalid denom amount request)
220            | Final     | Request is Rejected (Offline channel is not valid or not elegible to process Withdrawal/Deposit Transaction)
221            | Final     | Request is Rejected (Invalid transaction type)
224            | Final     | Request is Rejected (Amount disburse does not reach Min amount)
225            | Final     | Request is Rejected (Max amount per transaction exceed for disburse)
296            | Non-Final | There is still an active transaction for this phone number
298            | Non-Final | Transaction cannot be cancelled
429            | Final     | Request Rejected (Too Many Request to specific endpoint)
990            | Final     | Parameter / object is not valid


## API Offline Channel

These are the list of Oy! offline channel

Offline Channel | Transaction Type
--------------- | ----------------
CRM             | CASH IN, CASH OUT
ALFAMART        | CASH OUT

and their respective maximum amount per transaction is as follows

Offline Channel | Cash Out  | Cash In
--------------- | --------- | -------
CRM             | 5.000.000 | 5.000.000 
ALFAMART        | 2.500.000 | N/A 
