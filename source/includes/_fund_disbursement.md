# Fund Disbursement

Disbursement APIs allow you to instruct OY to disburse fund to any bank accounts in Indonesia easily and real-time.

## Disbursement

```shell
curl -X \
POST https://partner.oyindonesia.com/api/remit \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "recipient_bank": "014", 
  "recipient_account": "1239812390", 
  "amount":125000, 
  "note":"Split lunch bill", 
  "partner_trx_id":"1234-asdf",
  "email" :"napoleon@email.com test@email.com"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/remit'));
request.body = json.encode({
  "recipient_bank": "008",
  "recipient_account": "0201245681",
  "amount": 15000,
  "note": "Test API Disburse",
  "partner_trx_id": "OYON0000064",
  "email": "yono@oyindonesia.com"
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

  url := "%7B%7Bbase_url%7D%7D/api/remit"
  method := "POST"

  payload := strings.NewReader(`{
	"recipient_bank": "008",
	"recipient_account": "0201245681",
	"amount": 15000,
	"note": "Test API Disburse",
	"partner_trx_id": "OYON0000064",
	"email": "yono@oyindonesia.com"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"recipient_bank\": \"008\",\n\t\"recipient_account\": \"0201245681\",\n\t\"amount\": 15000,\n\t\"note\": \"Test API Disburse\",\n\t\"partner_trx_id\": \"OYON0000064\",\n\t\"email\": \"yono@oyindonesia.com\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/remit")
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
  "recipient_bank": "008",
  "recipient_account": "0201245681",
  "amount": 15000,
  "note": "Test API Disburse",
  "partner_trx_id": "OYON0000064",
  "email": "yono@oyindonesia.com"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/remit");
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
$request->setUrl('{{base_url}}/api/remit');
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
$request->setBody('{\n	"recipient_bank": "008",\n	"recipient_account": "0201245681",\n	"amount": 15000,\n	"note": "Test API Disburse",\n	"partner_trx_id": "OYON0000064",\n	"email": "yono@oyindonesia.com"\n}');
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
  "recipient_bank": "008",
  "recipient_account": "0201245681",
  "amount": 15000,
  "note": "Test API Disburse",
  "partner_trx_id": "OYON0000064",
  "email": "yono@oyindonesia.com"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/remit", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"101",
    "message":"Request is Processed"
  },
  "amount":125000,
  "recipient_bank":"014",
  "recipient_account":"1239812390",
  "trx_id":"ABC-456",
  "partner_trx_id":"1234-asdf",
  "timestamp":"16-10-2019 10:23:42"
}
```

Use this API to start disbursing money to a specific beneficiary account.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/remit`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/remit`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
recipient_bank | String(3) | TRUE | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | TRUE | Beneficiary account number, numeric only
amount | BigInteger | TRUE | Amount of disbursement (Accept Non-Decimal Number), min amount 10000
note | String(255) | FALSE | Add Note to the payout
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
email | String(255) | FALSE | Email for invoice notification (Optional). Email can be more than one but not more that five separated by a whitespace.
### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number 
trx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request
timestamp | String(19) | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss")

> **[Staging]** You can replicate error response code (final) based on [Fund Disbursement Response Codes](#fund-disbursement-response-codes-) by fill in `recipient_account` value using following format `<desired response code>0000`.
> Another value not following the format will be processed normally.

example:

a request with `"recipient_account": "2100000"` will return response with `"status": { "code": "210", message": "Request is Rejected (Amount is not valid)"}`

## Partner Callback

> Response callback:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "tx_status_description":"Force Credit",
  "amount":125000,
  "recipient_name":"John Doe",
  "recipient_bank":"008",
  "recipient_account":"1234567890",
  "trx_id":"ABC-456",
  "partner_trx_id":"1234-asde",
  "timestamp":"16-10-2020 10:34:23",
  "created_date": "24-01-2020 06:48:08",
  "last_updated_date": "24-01-2020 06:48:39"
}
```

Once a disbursement request is finished, our system will make a callback status of that disbursement request to your system

Please contact us and submit a callback URL if you need a callback status of a disbursement request.

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
tx_status_description | String(255) | additional information of status code (e.g. FORCE CREDIT)
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
recipient_name | String(255) | Account holder name of Beneficiary account number
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number
trx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request, generated by partner
timestamp | String(19) | Execution time of API remit status in OY! system ("dd-MM-yyyy HH:mm:ss")
created_date | String(19) | Executionn time of Disbures in OY! system ("dd-MM-yyyy HH:mm:ss")
last_updated_date | String(19) | Latest status change of a disbursement. Example from 'Pending' to 'Success' ("dd-MM-yyyy HH:mm:ss")

## Get Disbursement Status

```shell
curl -X \
POST https://partner.oyindonesia.com/api/remit-status \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_trx_id": "1234-asde", 
  "send_callback": "true"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/remit-status'));
request.body = json.encode({
  "partner_trx_id": "OYON0000056"
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

  url := "%7B%7Bbase_url%7D%7D/api/remit-status"
  method := "POST"

  payload := strings.NewReader(`{
	"partner_trx_id": "OYON0000056"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"partner_trx_id\": \"OYON0000056\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/remit-status")
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
  "partner_trx_id": "OYON0000056"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/remit-status");
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
$request->setUrl('{{base_url}}/api/remit-status');
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
$request->setBody('{\n	"partner_trx_id": "OYON0000056"\n}');
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
  "partner_trx_id": "OYON0000056"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/remit-status", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "tx_status_description":"Force Credit",
  "amount":125000,
  "recipient_name":"John Doe",
  "recipient_bank":"008",
  "recipient_account":"1234567890",
  "trx_id":"ABC-456",
  "partner_trx_id":"1234-asde",
  "timestamp":"16-10-2020 10:34:23",
  "created_date": "24-01-2020 06:48:08",
  "last_updated_date": "24-01-2020 06:48:39"
}
```

To get status of a disbursement request, you can call this API. You may need to call this API few times until getting a final status (success / failed)

This API offers an option to send you a callback status of the disbursement request to a specific URL.
Please contact us and submit a callback URL if you need a callback status of a disbursement request.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/remit-status`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/remit-status`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
send_callback | Boolean | FALSE | A flag to indiciate if the status of the disbursement request need to be re-sent as a callback or not

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
tx_status_description | String(255) | additional information of status code (e.g. FORCE CREDIT)
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
recipient_name | String(255) | Account holder name of Beneficiary account number
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number
trx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request, generated by partner
timestamp | String(19) | Execution time of API remit status in OY! system ("dd-MM-yyyy HH:mm:ss")
created_date | String(19) | Executionn time of Disbures in OY! system ("dd-MM-yyyy HH:mm:ss")
last_updated_date | String(19) | Latest status change of a disbursement. Example from 'Pending' to 'Success' ("dd-MM-yyyy HH:mm:ss")

## Get Balance

```shell
curl -X \
GET https://partner.oyindonesia.com/api/balance \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'X-OY-Username: janedoe' \
-H 'X-Api-Key: 7654321'
```

```dart
var headers = {
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}',
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/balance'));

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
  "net/http"
  "io/ioutil"
)

func main() {

  url := "%7B%7Bbase_url%7D%7D/api/balance"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "{{username}}")
  req.Header.Add("x-api-key", "{{api-key}}")
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Accept", "application/json")

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
Request request = new Request.Builder()
  .url("{{base_url}}/api/balance")
  .method("GET", null)
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .addHeader("Content-Type", "application/json")
  .addHeader("Accept", "application/json")
  .build();
Response response = client.newCall(request).execute();
```

```javascript

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/balance");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/balance');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}',
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
));
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
payload = ''
headers = {
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}',
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
conn.request("GET", "/api/balance", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```


> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "balance":100000000.0000,
  "overdraftBalance":500000.0000,
  "overbookingBalance":200000.0000,
  "pendingBalance":2000000.0000,
  "availableBalance":98500000.0000,
  "timestamp":"10-12-2019 12:15:37"
}
```

Use this API to get partner balance.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/balance`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/balance`

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
balance | BigDecimal | Remaining balance (Accept non fraction number)
overdraftBalance | BigDecimal | Remaining overdraft balance (Accept non fraction number)
overbookingBalance | BigDecimal | Remaining overbooking balance (Accept non fraction number)
pendingBalance | BigDecimal | The cumulative balance of your pending transactions.
availableBalance | BigDecimal | The total cumulative money of Balance + Available Overdraft - Pending Balance that you can use for disbursement.
timestamp | String(19) | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss").

## Scheduled Disbursement

This set of APIs will allow you to schedule disbursement to any bank account on a specified date.

### Create Scheduled Disbursement

```shell
curl -X \
POST https://partner.oyindonesia.com/api/scheduled-remit \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "recipient_bank": "014", 
  "recipient_account": "1239812390",
  "amount": 50000,
  "note": "Split Lunch Bill",
  "partner_trx_id": "123-asdf",
  "email": "napolean@gmail.com test@email.com",
  "schedule_date": "19-11-2020"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/scheduled-remit'));
request.body = json.encode({
  "recipient_bank": "008",
  "recipient_account": "0393500100",
  "amount": 15000,
  "note": "note",
  "partner_trx_id": "partner-trx-id-006",
  "email": "yono@oyindonesia.com",
  "schedule_date": null,
  "is_trigger_based": true,
  "trigger_date": "01-07-2021",
  "trigger_email": "yono@oyindonesia.com",
  "cs_phone_number": "085712163208",
  "cs_email": "device_test@oyindonesia.com"
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

  url := "%7B%7Bbase_url%7D%7D/api/scheduled-remit"
  method := "POST"

  payload := strings.NewReader(`{
	"recipient_bank": "008",
    "recipient_account": "0393500100",
	"amount": 15000,
	"note": "note",
	"partner_trx_id": "partner-trx-id-006",
	"email": "yono@oyindonesia.com",
    "schedule_date": null,
    "is_trigger_based": true,
    "trigger_date": "01-07-2021",
    "trigger_email": "yono@oyindonesia.com",
    "cs_phone_number": "085712163208",
    "cs_email": "device_test@oyindonesia.com"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"recipient_bank\": \"008\",\n    \"recipient_account\": \"0393500100\",\n\t\"amount\": 15000,\n\t\"note\": \"note\",\n\t\"partner_trx_id\": \"partner-trx-id-006\",\n\t\"email\": \"yono@oyindonesia.com\",\n    \"schedule_date\": null,\n    \"is_trigger_based\": true,\n    \"trigger_date\": \"01-07-2021\",\n    \"trigger_email\": \"yono@oyindonesia.com\",\n    \"cs_phone_number\": \"085712163208\",\n    \"cs_email\": \"device_test@oyindonesia.com\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/scheduled-remit")
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
  "recipient_bank": "008",
  "recipient_account": "0393500100",
  "amount": 15000,
  "note": "note",
  "partner_trx_id": "partner-trx-id-006",
  "email": "yono@oyindonesia.com",
  "schedule_date": null,
  "is_trigger_based": true,
  "trigger_date": "01-07-2021",
  "trigger_email": "yono@oyindonesia.com",
  "cs_phone_number": "085712163208",
  "cs_email": "device_test@oyindonesia.com"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/scheduled-remit");
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
$request->setUrl('{{base_url}}/api/scheduled-remit');
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
$request->setBody('{\n	"recipient_bank": "008",\n    "recipient_account": "0393500100",\n	"amount": 15000,\n	"note": "note",\n	"partner_trx_id": "partner-trx-id-006",\n	"email": "yono@oyindonesia.com",\n    "schedule_date": null,\n    "is_trigger_based": true,\n    "trigger_date": "01-07-2021",\n    "trigger_email": "yono@oyindonesia.com",\n    "cs_phone_number": "085712163208",\n    "cs_email": "device_test@oyindonesia.com"\n}');
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
  "recipient_bank": "008",
  "recipient_account": "0393500100",
  "amount": 15000,
  "note": "note",
  "partner_trx_id": "partner-trx-id-006",
  "email": "yono@oyindonesia.com",
  "schedule_date": None,
  "is_trigger_based": True,
  "trigger_date": "01-07-2021",
  "trigger_email": "yono@oyindonesia.com",
  "cs_phone_number": "085712163208",
  "cs_email": "device_test@oyindonesia.com"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/scheduled-remit", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```


> The above command returns JSON structured similar like this:

```json
{
  "status": {
      "code": "103",
      "message": "Request is Scheduled"
  },
  "recipient_bank": "014",
  "recipient_account": "1239812390",
  "amount": 10000,
  "scheduled_trx_id": "ABC-456",
  "partner_trx_id": "123-asdf",
  "scheduled_trx_status": "SCHEDULED",
  "schedule_date": "19-11-2020",
  "is_trigger_based": false,
  "trigger_date": null,
  "trigger_email": null,
  "timestamp": "16-11-2020 03:21:15"
}
```

#### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/scheduled-remit`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/scheduled-remit`

There are two types of scheduled disbursement:

1. Non-trigger-based scheduled disbursement: OY! scheduler will run and execute the disbursement automatically on date specified in `schedule_date` field.
2. Trigger-based scheduled disbursement: We will send a fund acceptance email to beneficiary email provided in `trigger_email` field. Beneficiary will be able to execute disbursement by clicking URL provided in the email on or after the date specified in `trigger_date` field.

#### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
recipient_bank | String(3) | TRUE | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | TRUE | Beneficiary account number, numeric only
amount | BigInteger | TRUE | Amount of disbursement (Accept Non-Decimal Number), min amount 10000
note | String(255) | FALSE | Add Note to the payout
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
email | String(255) | FALSE | Email for invoice notification (Optional). Email can be more than one but not more than five separated by a whitespace
schedule_date | String(10) | FALSE | Date for scheduled non-trigger-based disburse in "dd-mm-yyyy" format. Required if If `is_trigger_based` = FALSE or not set. Date is based on GMT+7
is_trigger_based | Boolean | FALSE | Whether scheduled transfer is trigger-based. Default value is false, if set to true, `trigger_date` and `trigger_email` are required
trigger_date | String(10) | FALSE | Date when the disburse can be claimed by Beneficiary in "dd-mm-yyyy" format. Required if `is_trigger_based` = TRUE. Date is based on GMT+7
trigger_email | String(255) | FALSE | Email which the fund acceptance email and URL will be sent to. Required if is_trigger_based = TRUE. Only one email can be provided
cs_phone_number | String(255) | FALSE | Customer service phone number Beneficiary can contact when a trigger-based disbursement fails. This information will be shown to Beneficiary when trying to claim disbursement on a trigger-based disbursement and disburse execution fails due to insufficient balance. Required if `is_trigger_based` = TRUE
cs_email | String(255) | FALSE | Customer service email Beneficiary can contact when a trigger-based disbursement fails. This information will be shown to Beneficiary when trying to claim disbursement on a trigger-based disbursement and disburse execution fails due to insufficient balance. Required if `is_trigger_based` = TRUE

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Scheduled Disburse creation in Object `{code: <status_code>, message: <status_message>}`
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number 
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request
scheduled_trx_status | String(255) | Status of scheduled disbursement
schedule_date | String(10) | Date for scheduled non-trigger-based disburse in "dd-mm-yyyy" format. Null if scheduled disbursement is trigger-based
is_trigger_based | Boolean | Whether scheduled transfer is trigger-based
trigger_date | String(10) | Date when the disburse can be claimed by Beneficiary in "dd-mm-yyyy" format. Null if scheduled disbursement is non-trigger-based
trigger_email | String(255) | EEmail which the fund acceptance email and URL will be sent to. Null if scheduled disbursement is non-trigger-based
timestamp | String(19) | Time of scheduled disbursement creation in OY! system ("dd-MM-yyyy HH:mm:ss")

### Get Detail of Scheduled Disbursement
This endpoint allows you to get detail of a created scheduled disbursement.

```shell
curl -X \
GET https://partner.oyindonesia.com/api/scheduled-remit \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_trx_id": "123-asdf"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/scheduled-remit'));
request.body = json.encode({
  "partner_trx_id": "partner-trx-id-001"
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

  url := "%7B%7Bbase_url%7D%7D/api/scheduled-remit"
  method := "GET"

  payload := strings.NewReader(`{
	"partner_trx_id": "partner-trx-id-001"
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
Request request = new Request.Builder()
  .url("{{base_url}}/api/scheduled-remit")
  .method("GET", null)
  .addHeader("Content-Type", "application/json")
  .addHeader("Accept", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "partner-trx-id-001"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/scheduled-remit");
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
$request->setUrl('{{base_url}}/api/scheduled-remit');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n	"partner_trx_id": "partner-trx-id-001"\n}');
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
  "partner_trx_id": "partner-trx-id-001"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("GET", "/api/scheduled-remit", payload, headers)
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
  "recipient_bank": "014",
  "recipient_account": "1239812390",
  "amount": 10000,
  "scheduled_trx_id": "ABC-456",
  "partner_trx_id": "123-asdf",
  "scheduled_trx_status": "SUCCESS",
  "schedule_date": "19-11-2020",
  "is_trigger_based": false,
  "trigger_date": null,
  "trigger_email": null,
  "timestamp": "16-11-2020 03:21:15"
}
```

#### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/scheduled-remit`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/scheduled-remit`

#### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Payout ID which partner put on scheduled disburse creation

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of get detail Scheduled Disburse in Object `{code: <status_code>, message: <status_message>}`
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number 
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request
scheduled_trx_status | String(255) | Status of scheduled disbursement
schedule_date | String(10) | Date for scheduled non-trigger-based disburse in "dd-mm-yyyy" format. Null if scheduled disbursement is trigger-based
is_trigger_based | Boolean | Whether scheduled transfer is trigger-based
trigger_date | String(10) | Date when the disburse can be claimed by Beneficiary in "dd-mm-yyyy" format. Null if scheduled disbursement is non-trigger-based
trigger_email | String(255) | EEmail which the fund acceptance email and URL will be sent to. Null if scheduled disbursement is non-trigger-based
timestamp | String(19) | Time of scheduled disbursement creation in OY! system ("dd-MM-yyyy HH:mm:ss")

### Get List of Scheduled Disbursement
This endpoint allows you get list of scheduled disbursement with or without applying filter on status and processing date (`trigger_date`/`schedule_date`)

```shell
curl -X \
GET https://partner.oyindonesia.com/api/scheduled-remit/list \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "scheduled_trx_status": "SCHEDULED",
  "start_date": "20-11-2020",
  "end_date": "20-11-2020",
  "offset": 0,
  "limit": 100
}'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "start_date": "20-11-2020",
    "end_date": "20-11-2020",
    "scheduled_trx_status": "SCHEDULED",
    "total_scheduled_disburse": 2,
    "total_amount": 25000.0000,
    "offset": 0,
    "limit": 100,
    "data": [
        {
            "recipient_bank": "014",
            "recipient_account": "111",
            "amount": 10000.0000,
            "scheduled_trx_id": "scheduled-trx-123",
            "partner_trx_id": "partner-trx-123",
            "scheduled_trx_status": "SCHEDULED",
            "schedule_date": null,
            "is_trigger_based": true,
            "trigger_date": "20-11-2020",
            "trigger_email": "ivana.thomas@oyindonesia.com"
        },
        {
            "recipient_bank": "014",
            "recipient_account": "111",
            "amount": 15000.0000,
            "scheduled_trx_id": "scheduled-trx-456",
            "partner_trx_id": "partner-trx-456",
            "scheduled_trx_status": "SUCCESS",
            "schedule_date": "20-11-2020",
            "is_trigger_based": false,
            "trigger_date": null,
            "trigger_email": "ivana.thomas@oyindonesia.com"
        }
    ],
    "timestamp": "01-12-2020 11:42:12"
}
```

#### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/scheduled-remit/list`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/scheduled-remit/list`

#### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
start_date | String(10) | FALSE | Start date filter in "dd-mm-yyyy" format. List of scheduled disburse retrieved will be filtered and have `trigger_date`/`schedule_date` >= date defined in this parameter.
start_date | String(10) | FALSE | End date filter in "dd-mm-yyyy" format. List of scheduled disburse retrieved will be filtered and have `trigger_date`/`schedule_date` <= date defined in this parameter.
scheduled_trx_status | String(255) | FALSE | Status filter. List of scheduled disburse retrieved will be filtered with status defined with this parameter. Status for scheduled disbursement: `SCHEDULED`, `PENDING`, `SUCCESS`, `BALANCE_IS_NOT_ENOUGH`, `FAILED`
offset | Integer | FALSE | Offset for retrieved list of scheduled disburse. Default is 0
limit | Integer | FALSE | Limit for retrieved list of scheduled disburse. Default and maximum is 100

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of get list Scheduled Disburse in Object `{code: <status_code>, message: <status_message>}`
total_amount | BigInteger | Sum of amount of all scheduled disburse with given filter regardless of offset and limit
total_scheduled_disburse | BigInteger | Count of total scheduled disburse with given filter regardless of offset and limit
start_date | String(10) | Start date filter in "dd-mm-yyyy" format as given in request. Default is null.
end_date | String(10) | End date filter in "dd-mm-yyyy" format as given in request. Default is null.
scheduled_trx_status | String(10) | Status filter as given in request. Default is null.
offset | Integer | Offset for retrieved list of scheduled disburse as given in request. Default is 0
limit | Integer | Limit for retrieved list of scheduled disburse. Default and maximum is 100
data | List of Object | List of scheduled disburse detail according to given limit and offset. Parameter details of each scheduled disburse in the list is the same as response parameters in [Get Detail Scheduled Disburse](#get-detail-of-scheduled-disbursement)

### Update Scheduled Disbursement
This endpoint allows you to update created scheduled disbursement up to a day before the `schedule_date`/`trigger_date`. For non-trigger based scheduled disburse, only update to `schedule_date` is allowed. For trigger-based scheduled disburse, only update to `trigger_date` is allowed.

```shell
curl -X \
PUT https://partner.oyindonesia.com/api/scheduled-remit \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_trx_id": "123-asdf",
  "schedule_date": "21-11-2020"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('PUT', Uri.parse('{{base_url}}/api/scheduled-remit'));
request.body = json.encode({
  "partner_trx_id": "partner-trx-id-001",
  "schedule_date": null,
  "trigger_date": "17-03-2021"
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

  url := "%7B%7Bbase_url%7D%7D/api/scheduled-remit"
  method := "PUT"

  payload := strings.NewReader(`{
	"partner_trx_id": "partner-trx-id-001",
    "schedule_date": null,
    "trigger_date": "17-03-2021"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"partner_trx_id\": \"partner-trx-id-001\",\n    \"schedule_date\": null,\n    \"trigger_date\": \"17-03-2021\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/scheduled-remit")
  .method("PUT", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("Accept", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "partner-trx-id-001",
  "schedule_date": null,
  "trigger_date": "17-03-2021"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "%7B%7Bbase_url%7D%7D/api/scheduled-remit");
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
$request->setUrl('{{base_url}}/api/scheduled-remit');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n	"partner_trx_id": "partner-trx-id-001",\n    "schedule_date": null,\n    "trigger_date": "17-03-2021"\n}');
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
  "partner_trx_id": "partner-trx-id-001",
  "schedule_date": None,
  "trigger_date": "17-03-2021"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("PUT", "/api/scheduled-remit", payload, headers)
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
  "recipient_bank": "014",
  "recipient_account": "1239812390",
  "amount": 10000,
  "scheduled_trx_id": "ABC-456",
  "partner_trx_id": "123-asdf",
  "scheduled_trx_status": "SCHEDULED",
  "schedule_date": "21-11-2020",
  "is_trigger_based": false,
  "trigger_date": null,
  "trigger_email": null,
  "timestamp": "16-11-2020 03:21:15"
}
```

#### HTTPS Request
**[Production]** `PUT https://partner.oyindonesia.com/api/scheduled-remit`<br>
**[Staging]** `PUT https://api-stg.oyindonesia.com/api/scheduled-remit`

#### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
schedule_date | String(10) | FALSE | Updated date for scheduled non-trigger-based disburse in "dd-mm-yyyy" format. Required if scheduled disbursement is non-trigger-based. Date is based on GMT+7
trigger_date | String(10) | FALSE | Updated date when the disburse can be claimed by Beneficiary in "dd-mm-yyyy" format. Required if scheduled disbursement is trigger-based. Date is based on GMT+7

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Scheduled Disburse update in Object `{code: <status_code>, message: <status_message>}`
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number 
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request
scheduled_trx_status | String(255) | Status of scheduled disbursement
schedule_date | String(10) | Date for scheduled non-trigger-based disburse in "dd-mm-yyyy" format. Null if scheduled disbursement is trigger-based
is_trigger_based | Boolean | Whether scheduled transfer is trigger-based
trigger_date | String(10) | Date when the disburse can be claimed by Beneficiary in "dd-mm-yyyy" format. Null if scheduled disbursement is non-trigger-based
trigger_email | String(255) | Email which the fund acceptance email and URL will be sent to. Null if scheduled disbursement is non-trigger-based
timestamp | String(19) | Time of scheduled disbursement update in OY! system ("dd-MM-yyyy HH:mm:ss")

### Cancel Scheduled Disbursement
This endpoint allows you to cancel created scheduled disbursement up to a day before the `schedule_date`/`trigger_date`.

```shell
curl -X \
DELETE https://partner.oyindonesia.com/api/scheduled-remit \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_trx_id": "123-asdf"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('DELETE', Uri.parse('{{base_url}}/api/scheduled-remit'));
request.body = json.encode({
  "partner_trx_id": "partner-trx-id-001"
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

  url := "%7B%7Bbase_url%7D%7D/api/scheduled-remit"
  method := "DELETE"

  payload := strings.NewReader(`{
	"partner_trx_id": "partner-trx-id-001"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"partner_trx_id\": \"partner-trx-id-001\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/scheduled-remit")
  .method("DELETE", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("Accept", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "partner-trx-id-001"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "%7B%7Bbase_url%7D%7D/api/scheduled-remit");
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
$request->setUrl('{{base_url}}/api/scheduled-remit');
$request->setMethod(HTTP_Request2::METHOD_DELETE);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n	"partner_trx_id": "partner-trx-id-001"\n}');
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
  "partner_trx_id": "partner-trx-id-001"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("DELETE", "/api/scheduled-remit", payload, headers)
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
  "recipient_bank": "014",
  "recipient_account": "1239812390",
  "amount": 10000,
  "scheduled_trx_id": "ABC-456",
  "partner_trx_id": "123-asdf",
  "scheduled_trx_status": "CANCELLED",
  "schedule_date": "21-11-2020",
  "is_trigger_based": false,
  "trigger_date": null,
  "trigger_email": null,
  "timestamp": "16-11-2020 03:21:15"
}
```

#### HTTPS Request
**[Production]** `DELETE https://partner.oyindonesia.com/api/scheduled-remit`<br>
**[Staging]** `DELETE https://api-stg.oyindonesia.com/api/scheduled-remit`

#### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Scheduled Disburse cancellation in Object `{code: <status_code>, message: <status_message>}`
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number 
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request
scheduled_trx_status | String(255) | Status of scheduled disbursement
schedule_date | String(10) | Date for scheduled non-trigger-based disburse in "dd-mm-yyyy" format. Null if scheduled disbursement is trigger-based
is_trigger_based | Boolean | Whether scheduled transfer is trigger-based
trigger_date | String(10) | Date when the disburse can be claimed by Beneficiary in "dd-mm-yyyy" format. Null if scheduled disbursement is non-trigger-based
trigger_email | String(255) | EEmail which the fund acceptance email and URL will be sent to. Null if scheduled disbursement is non-trigger-based
timestamp | String(19) | Time of scheduled disbursement cancellation in OY! system ("dd-MM-yyyy HH:mm:ss")

### Retry Scheduled Disbursement
This endpoint will allow you to create a new scheduled disbursement based on the detail of a previous failed/cancelled scheduled disbursement.

```shell
curl -X \
POST https://partner.oyindonesia.com/api/scheduled-remit/retry \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "old_partner_trx_id": "123-asdf",
  "new_partner_trx_id": "456-asdf",
  "schedule_date": "22-11-2020"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('DELETE', Uri.parse('{{base_url}}/api/scheduled-remit'));
request.body = json.encode({
  "partner_trx_id": "partner-trx-id-001"
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

  url := "%7B%7Bbase_url%7D%7D/api/scheduled-remit"
  method := "DELETE"

  payload := strings.NewReader(`{
	"partner_trx_id": "partner-trx-id-001"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"partner_trx_id\": \"partner-trx-id-001\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/scheduled-remit")
  .method("DELETE", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("Accept", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "partner-trx-id-001"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "%7B%7Bbase_url%7D%7D/api/scheduled-remit");
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
$request->setUrl('{{base_url}}/api/scheduled-remit');
$request->setMethod(HTTP_Request2::METHOD_DELETE);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n	"partner_trx_id": "partner-trx-id-001"\n}');
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
  "partner_trx_id": "partner-trx-id-001"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("DELETE", "/api/scheduled-remit", payload, headers)
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
  "recipient_bank": "014",
  "recipient_account": "1239812390",
  "amount": 10000,
  "scheduled_trx_id": "DEF-456",
  "partner_trx_id": "456-asdf",
  "scheduled_trx_status": "SCHEDULED",
  "schedule_date": "22-11-2020",
  "is_trigger_based": false,
  "trigger_date": null,
  "trigger_email": null,
  "timestamp": "16-11-2020 03:21:15"
}
```

#### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/scheduled-remit/retry`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/scheduled-remit/retry`

#### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
old_partner_trx_id | String(255) | TRUE | Partner transaction ID of a failed/cancelled scheduled disbursement which you want to retry
new_partner_trx_id | String(255) | TRUE | New partner transaction ID which will be given to the newly created scheduled disbursement
schedule_date | String(255) | FALSE | Date for the newly created scheduled, non-trigger-based disburse, in "dd-mm-yyyy" format. Required if old scheduled disbursement is non-trigger-based
trigger_date | String(255) | FALSE | Date for the newly created scheduled disburse to be claimed by beneficiary, in "dd-mm-yyyy" format. Required if old scheduled disbursement is trigger-based

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of new Scheduled Disburse creation in Object `{code: <status_code>, message: <status_message>}`
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number 
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request
scheduled_trx_status | String(255) | Status of scheduled disbursement
schedule_date | String(10) | Date for scheduled non-trigger-based disburse in "dd-mm-yyyy" format. Null if scheduled disbursement is trigger-based
is_trigger_based | Boolean | Whether scheduled transfer is trigger-based
trigger_date | String(10) | Date when the disburse can be claimed by Beneficiary in "dd-mm-yyyy" format. Null if scheduled disbursement is non-trigger-based
trigger_email | String(255) | EEmail which the fund acceptance email and URL will be sent to. Null if scheduled disbursement is non-trigger-based
timestamp | String(19) | Time of new scheduled disbursement creation in OY! system ("dd-MM-yyyy HH:mm:ss")

### Partner Callback on Scheduled Disburse Execution

> Response callback:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "amount":125000,
  "recipient_name":"John Doe",
  "recipient_bank":"008",
  "recipient_account":"1234567890",
  "trx_id": "ABC-123",
  "scheduled-trx-id": "DEF-456",
  "scheduled_trx_status": "SUCCESS",
  "schedule_date": "22-11-2020",
  "is_trigger_based": false,
  "trigger_date": null,
  "trigger_email": null,
  "timestamp":"16-10-2020 10:34:23",
  "created_date": "24-01-2020 06:48:08",
  "last_updated_date": "24-01-2020 06:48:39"
}
```

Once a scheduled disbursement is executed, our system will make a callback status of that disbursement request to your system

Please contact us and submit a callback URL if you need a callback status of a scheduled disbursement request.

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Scheduled Disburse execution in Object `{code: <status_code>, message: <status_message>}`
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
recipient_name | String(255) | Account holder name of Beneficiary account number
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number
trx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request, generated by partner
scheduled_trx_id | String(255) | Unique ID for scheduled disbursement from OY!
schedule_date | String(10) | Date for scheduled non-trigger-based disburse in "dd-mm-yyyy" format. Null if scheduled disbursement is trigger-based
is_trigger_based | Boolean | Whether scheduled transfer is trigger-based
trigger_date | String(10) | Date when the disburse can be claimed by Beneficiary in "dd-mm-yyyy" format. Null if scheduled disbursement is non-trigger-based
timestamp | String(19) | Execution time of scheduled disburse in OY! system ("dd-MM-yyyy HH:mm:ss")
created_date | String(19) | Time when scheduled disburse was first scheduled ("dd-MM-yyyy HH:mm:ss")
last_updated_date | String(19) | Latest status change of a scheduled disbursement. Example from 'Scheduled' to 'Success' ("dd-MM-yyyy HH:mm:ss")

