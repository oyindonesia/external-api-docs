# Fund Disbursement

Disbursement APIs allow you to send fund to any bank accounts in Indonesia easily and real-time.

## Create Disbursement

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
  "email": "business.support@oyindonesia.com"
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
	"email": "business.support@oyindonesia.com"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"recipient_bank\": \"008\",\n\t\"recipient_account\": \"0201245681\",\n\t\"amount\": 15000,\n\t\"note\": \"Test API Disburse\",\n\t\"partner_trx_id\": \"OYON0000064\",\n\t\"email\": \"business.support@oyindonesia.com\"\n}");
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
  "email": "business.support@oyindonesia.com"
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
$request->setBody('{\n	"recipient_bank": "008",\n	"recipient_account": "0201245681",\n	"amount": 15000,\n	"note": "Test API Disburse",\n	"partner_trx_id": "OYON0000064",\n	"email": "business.support@oyindonesia.com"\n}');
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
  "email": "business.support@oyindonesia.com"
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

| Parameter         | Type        | Required | Description                                                                                                                                                                                                                                        |
|-------------------|-------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recipient_bank    | String(255) | TRUE     | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes-)                                                                                                                                                     |
| recipient_account | String(255) | TRUE     | Beneficiary account number, numeric only                                                                                                                                                                                                           |
| amount            | BigInteger  | TRUE     | Amount of disbursement (Accept Non-Decimal Number), min amount 10000                                                                                                                                                                               |
| note              | String(255) | FALSE    | Add Note to the transaction                                                                                                                                                                                                                        |
| partner_trx_id    | String(255) | TRUE     | Unique disbursement ID for a specific request, generated by partner                                                                                                                                                                                |
| email             | String(255) | FALSE    | Email for invoice notification (Optional). Email can be more than one but not more that five separated by a whitespace.                                                                                                                            |
| child_balance     | String(255) | FALSE    | Child username whom balance will be used for disbursement, if [Multi Account Management](https://docs.oyindonesia.com/#multi-account-management-oy-dashboard-tutorial) config is active (Optional). By default will be using client’s own balance. |

### Response Parameters

| Parameter         | Type        | Description                                                                                    |
|-------------------|-------------|------------------------------------------------------------------------------------------------|
| status            | Object      | Status of Disbursement in Object `{code: <status_code>, message: <status_message>}`            |
| amount            | BigInteger  | Amount of disbursement (Accept Non-Decimal Number)                                             |
| recipient_bank    | String(255) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes-) |
| recipient_account | String(255) | Beneficiary account number                                                                     |
| trx_id            | String(36)  | Unique Disbursement ID from OY!. Partner can use this ID for settlement                        |
| partner_trx_id    | String(255) | Unique Disbursement ID which partner put on the Request                                        |
| timestamp         | String(19)  | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss in UTC Time zone")          |

### Transaction Status: API Create Disbursement

Below is the list of response codes that show the transaction status for API Create Disbursement:

| Response Code | State     | Description                                                                                                                                                                          |
|---------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 000           | Final     | Transaction has been completed (success). Note: only happens for overbooking flow.                                                                                                   |
| 101           | Non-Final | Transaction is Processed                                                                                                                                                             |
| 102           | Non-Final | Transaction is In Progress                                                                                                                                                           |
| 206           | Final     | Transaction is FAILED (Partner Deposit Balance is Not Enough)                                                                                                                        |
| 225           | Final     | Transaction is FAILED (Transaction amount exceeds the maximum limit)                                                                                                                 |
| 300           | Final     | Transaction is FAILED                                                                                                                                                                |
| 301           | Non-Final | Pending (When there is an unclear answer from Banks Network)                                                                                                                         |
| 504           | Non-Final | Remit Submission Timed Out. Note: the transaction status is uncertain - it may or may not have been successfully submitted, so we suggest resubmitting using the same partner_trx_id |


### Request Status: API Create Disbursement

Below is the list of response codes that show the request status for API Create Disbursement:

| Response Code | State     | Description                                                                        | Notes                                              |
|---------------|-----------|------------------------------------------------------------------------------------|----------------------------------------------------|
| 203           | Final     | Request is Rejected (Duplicate Partner Tx ID)                                      | Request Rejected. Transaction Not Created          |
| 201           | Final     | Request is Rejected (User ID is not Found)                                         | Request Rejected. Transaction Not Created          |
| 202           | Final     | Request is Rejected (User ID is not Active)                                        | Request Rejected. Transaction Not Created          |
| 205           | Final     | Request is Rejected (Beneficiary Bank Code is Not Supported)                       | Request Rejected. Transaction Not Created          |
| 207           | Final     | Request is Rejected (Request IP Address is not Registered)                         | Request Rejected. Transaction Not Created          |
| 208           | Final     | Request is Rejected (API Key is not Valid)                                         | Request Rejected. Transaction Not Created          |
| 209           | Final     | Request is Rejected (Bank Account is not found)                                    | Request Rejected. Transaction Not Created          |
| 210           | Final     | Request is Rejected (Amount is not valid)                                          | Request Rejected. Transaction Not Created          |
| 257           | Final     | Request is Rejected (Disbursement with the same Partner Tx ID is still in process) | Request Rejected. Transaction Not Created          |
| 429           | Final     | Request Rejected (Too Many Request to specific endpoint)                           | Request Rejected. Transaction Not Created          |
| 990           | Final     | Request is Rejected (Invalid Format)                                               | Request Rejected. Transaction Not Created          |
| 999           | Non-Final | Internal Server Error                                                              | Unclear answer from OY system, please check status |



**[Staging only]**

You can replicate error response code (final) based on [Transaction Status](#transaction-status-api-create-disbursement-create-disbursement) and [Request Status](#request-status-api-create-disbursement-create-disbursement) by fill in `recipient_account` value using following format `<desired response code>0000`.
Another value not following the format will be processed normally.

example:

a request with `"recipient_account": "2100000"` will return response with `"status": { "code": "210", message": "Request is Rejected (Amount is not valid)"}`

## Disbursement Callback

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

Once a disbursement request is finished, our system will make a callback status of that disbursement request to your system.

You can set your own callback URL in OY Business dashboard setting. You can Open “Settings” tab, choose “Developer Option”, Choose “Callback Configuration”, and Fill your callback URL in the API Disbursement field.

We also have a resend callback feature which you can read about [here](https://docs.oyindonesia.com/#feature-resend-callback-sending-payments). 

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Disbursement in Object `{code: <status_code>, message: <status_message>}`
tx_status_description | String(255) | additional information of status code (e.g. FORCE CREDIT)
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
recipient_name | String(255) | Account holder name of Beneficiary account number
recipient_bank | String(255) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes-)
recipient_account | String(255) | Beneficiary account number
trx_id | String(36) | Unique Disbursement ID from OY!. Partner can use this ID for settlement
partner_trx_id | String(255) | Unique Disbursement ID which partner put on the Request, generated by partner
timestamp | String(19) | Execution time of API remit status in OY! system ("dd-MM-yyyy HH:mm:ss" in UTC Time zone)
created_date | String(19) | Executionn time of Disbures in OY! system ("dd-MM-yyyy HH:mm:ss" in UTC Time zone)
last_updated_date | String(19) | Latest status change of a disbursement. Example from 'Pending' to 'Success' ("dd-MM-yyyy HH:mm:ss in UTC Time zone")

### Transaction Status: API Disbursement
Below is the list of response codes that show the transaction status for Disbursement Callback:

| Response Code | State     | Description                                                  |
|---------------|-----------|--------------------------------------------------------------|
| 000           | Final     | Transaction has been completed (success)                     |
| 300           | Final     | Transaction is FAILED                                        |
| 301           | Non-Final | Pending (When there is an unclear answer from Banks Network) |

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

To get status of a disbursement request, you can call this API. You may need to call this API few times until getting a final status (success/failed). We suggest to check the status after the remit API timed out or 60 seconds after the disbursement requested

This API offers an option to send you a callback status of the disbursement request to a specific URL.
You can set your own callback URL in OY Business dashboard setting. You can Open “Settings” tab, choose “Developer Option”, Choose “Callback Configuration”, and Fill your callback URL in the API Disbursement field.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/remit-status`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/remit-status`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Disbursement ID for a specific request, generated by partner
send_callback | Boolean | FALSE | A flag to indiciate if the status of the disbursement request need to be re-sent as a callback or not

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Disbursement in Object `{code: <status_code>, message: <status_message>}`
tx_status_description | String(255) | additional information of status code (e.g. FORCE CREDIT)
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
recipient_name | String(255) | Account holder name of Beneficiary account number
recipient_bank | String(255) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes-)
recipient_account | String(255) | Beneficiary account number
trx_id | String(36) | Unique Disbursement ID from OY!. Partner can use this ID for settlement
partner_trx_id | String(255) | Unique Disbursement ID which partner put on the Request, generated by partner
timestamp | String(19) | Execution time of API remit status in OY! system ("dd-MM-yyyy HH:mm:ss in UTC Time zone")
created_date | String(19) | Executionn time of Disbures in OY! system ("dd-MM-yyyy HH:mm:ss in UTC Time zone")
last_updated_date | String(19) | Latest status change of a disbursement. Example from 'Pending' to 'Success' ("dd-MM-yyyy HH:mm:ss in UTC Time zone")

### Transaction Status: API Get Disbursement Status
Below is the list of response codes that show the transaction status for API Get Disbursement Status:

| Response Code | State     | Description                                                   |
|---------------|-----------|---------------------------------------------------------------|
| 000           | Final     | Transaction has been completed (success)                      |
| 101           | Non-Final | Transaction is Processed                                      |
| 102           | Non-Final | Transaction is In Progress                                    |
| 204           | Final     | Transaction do not exist (Partner Tx ID is Not Found)         |
| 206           | Final     | Transaction is FAILED (Partner Deposit Balance is Not Enough) |
| 300           | Final     | Transaction is FAILED                                         |
| 301           | Non-Final | Pending (When there is an unclear answer from Banks Network)  |

### Request Status: API Get Disbursement Status
Below is the list of response codes that show the request status for API Get Disbursement Status:

| Response Code | State     | Description                                                | Notes                                                                                                                              |
|---------------|-----------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 201           | Non-Final | Request is Rejected (User ID is not Found)                 | Request check status rejected. Doesn't represent transaction status. This response usually appears during the integration process. |
| 202           | Non-Final | Request is Rejected (User ID is not Active)                | Request check status rejected. Doesn't represent transaction status. This response usually appears during the integration process. |
| 207           | Non-Final | Request is Rejected (Request IP Address is not Registered) | Request check status rejected. Doesn't represent transaction status. This response usually appears during the integration process. |
| 208           | Non-Final | Request is Rejected (API Key is not Valid)                 | Request check status rejected. Doesn't represent transaction status. This response usually appears during the integration process. |
| 429           | Non-Final | Request Rejected (Too Many Request to specific endpoint)   | Request check status rejected. Doesn't represent transaction status.                                                               |
| 990           | Non-Final | Request is Rejected (Invalid Format)                       | Request check status rejected. Doesn't represent transaction status.                                                               |
| 999           | Non-Final | Internal Server Error                                      | Request check status rejected. Doesn't represent transaction status.                                                               |


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
status | Object | Status of Disbursement in Object `{code: <status_code>, message: <status_message>}`
balance | BigDecimal | Remaining balance (Accept non fraction number)
overdraftBalance | BigDecimal | Remaining overdraft balance (Accept non fraction number)
overbookingBalance | BigDecimal | Remaining overbooking balance (Accept non fraction number)
pendingBalance | BigDecimal | The cumulative balance of your pending transactions.
availableBalance | BigDecimal | The total cumulative money of Balance + Available Overdraft - Pending Balance that you can use for disbursement.
timestamp | String(19) | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss in UTC Time zone").

### Request Status: API Get Balance
Below is the list of response codes that show the request status for API Get Balance:

| Response Code | Description                                                | Notes                           |
|---------------|------------------------------------------------------------|---------------------------------|
| 000           | Request get balance is success                             | -                               |
| 207           | Request is Rejected (Request IP Address is not Registered) | Request check balance rejected. |
| 208           | Request is Rejected (API Key is not Valid)                 | Request check balance rejected. |
| 999           | Internal Server Error                                      | Request check balance rejected. |
| 201           | Request is Rejected (User ID is not Found)                 | Request check balance rejected. |
| 202           | Request is Rejected (User ID is not Active)                | Request check balance rejected. |
| 429           | Request Rejected (Too Many Request to specific endpoint)   | Request check balance rejected. |
| 900           | Request is Rejected (Invalid Format)                       | Request check balance rejected. |
