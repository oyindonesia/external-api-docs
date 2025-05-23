﻿# API E-Wallet Aggregator

E-Wallet Aggregator API allows partners to seamlessly charge and receive payments directly from top e-wallet issuers. With one integration, they are able to get access to all of OY’s available e-wallets ((OVO, ShopeePay, LinkAja, and DANA) and upcoming e-wallet integrations.

## Create E-Wallet Transaction
Use this API to create an e-wallet transaction for your user

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/e-wallet-aggregator/create-transaction ` <br/>

**[Staging]** `POST https://api-stg.oyindonesia.com/api/e-wallet-aggregator/create-transaction`

### Request Headers

Parameter | Type | Description
--------- | ---- | -------- |
X-Api-Key | String | API Key used to connect to this particular endpoint
X-Oy-Username | String | Your OY! account username

### Request Parameters

```shell
curl -X POST \
  <%= config[:endpoint_prod] %>/api/e-wallet-aggregator/create-transaction \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-api-key: yourapikey' \
  -H 'x-oy-username: yourusername' \
  -d '{
        "customer_id": "your_customer_user_id",
        "partner_trx_id": "YAYBC123456527",
        "sub_merchant_id": "sprx88989F",
        "amount": 125000,
        "email": "mirajane@yahoo.com",
        "ewallet_code": "dana_ewallet",
        "mobile_number": "628091486790",
        "success_redirect_url":"https://yourweb.com/usertx/123456",
        "expiration_time": 120
    }'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/e-wallet-aggregator/create-transaction'));
request.body = json.encode({
 "customer_id": "my_user_id",
 "partner_trx_id": "ABC123456527",
 "sub_merchant_id": "zx88989F",
 "amount": 75000,
 "email": "johndoe@gmail.com",
 "ewallet_code": "shopeepay_ewallet",
 "mobile_number": "6282114845847",
 "success_redirect_url":"https://myweb.com/usertx/123456",
 "expiration_time": 15
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

  url := "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/create-transaction"
  method := "POST"

  payload := strings.NewReader(`{
     "customer_id": "my_user_id",
     "partner_trx_id": "ABC123456527",
     "sub_merchant_id": "zx88989F",
     "amount": 75000,
     "email": "johndoe@gmail.com",
     "ewallet_code": "shopeepay_ewallet",
     "mobile_number": "6282114845847",
     "success_redirect_url":"https://myweb.com/usertx/123456",
     "expiration_time": 15
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("X-Oy-Username", "{{username}}")
  req.Header.Add("X-Api-Key", "{{api-key}}")

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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"customer_id\": \"my_user_id\",\n\t\"partner_trx_id\": \"ABC123456527\",\n\t\"sub_merchant_id\": \"zx88989F\",\n\t\"amount\": 75000,\n\t\"email\": \"john.doe@email.com\",\n\t\"ewallet_code\": \"shopeepay_ewallet\",\n\t\"mobile_number\": \"6282114845847\",\n\t\"expiration_time\": 15,\n\t\"success_redirect_url\": \"https://myweb.com/usertx/123456\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/e-wallet-aggregator/create-transaction")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("X-Oy-Username", "{{username}}")
  .addHeader("X-Api-Key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
    "customer_id": "my_user_id",
    "partner_trx_id": "ABC123456527",
    "sub_merchant_id": "zx88989F",
    "amount": 75000,
    "email": "johndoe@gmail.com",
    "ewallet_code": "shopeepay_ewallet",
    "mobile_number": "6282114845847",
    "success_redirect_url":"https://myweb.com/usertx/123456",
    "expiration_time": 15
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/create-transaction");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Oy-Username", "{{username}}");
xhr.setRequestHeader("X-Api-Key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/e-wallet-aggregator/create-transaction');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'X-Oy-Username' => '{{username}}',
  'X-Api-Key' => '{{api-key}}'
));
$request->setBody('{\n	"customer_id": "my_user_id",\n "partner_trx_id": "ABC123456527",\n "sub_merchant_id": "zx88989F",\n "amount": 75000,\n	"email": "johndoe@gmail.com",\n	"ewallet_code": "shopeepay_ewallet",\n	"mobile_number": "6282114845847",\n "success_redirect_url":"https://myweb.com/usertx/123456",\n "expiration_time": 15\n}');
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
  "customer_id": "my_user_id",
  "partner_trx_id": "ABC123456527",
  "sub_merchant_id": "zx88989F",
  "amount": 75000,
  "email": "johndoe@gmail.com",
  "ewallet_code": "shopeepay_ewallet",
  "mobile_number": "6282114845847",
  "success_redirect_url":"https://myweb.com/usertx/123456",
  "expiration_time": 15
})
headers = {
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
}
conn.request("POST", "/api/e-wallet-aggregator/create-transaction", payload, headers)
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
    "ewallet_trx_status": "WAITING_PAYMENT",
    "amount": 500000,
    "trx_id": "789467agf238893894rfcw7978iu7g7e",
    "customer_id": "my_user_id",
    "partner_trx_id": "ABC123456527",
    "ewallet_code": "shopeepay_ewallet",
    "ewallet_url": "https://someewalletlink.com"
}
```

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
customer_id | String(255) | TRUE | - | ID generated by Partner for a specific user/customer
sub_merchant_id | String(255) | FALSE | - | ID generated by Partner for a specific sub-merchant
partner_trx_id | String(255) | TRUE | - | ID generated by Partner for a specific transaction
amount | BigDecimal | TRUE| - | Transaction amount. Min = 100. Max = 10,000,000
email | String(255) | FALSE | - | Customer's email
ewallet_code | String(255) | TRUE | - | The ewallet issuer that the customer will use to pay. Refer to table "E-Wallet Details" for the list of codes
mobile_number | String(255) | CONDITIONAL | - | Customer mobile number (format 628xxxxxxxxxx) used on their ewallet account. Only required if ewallet_code is equal to "ovo_ewallet"
success_redirect_url | String(255) | CONDITIONAL | - | Indicates the URL of your environment (to redirect the customers back once payment has been  completed in e-wallet issuers.)  Accepts HTTP links and URL  scheme formats.  Required if ewallet_code = DANA or LINKAJA or SHOPEEPAY.
expiration_time | Long | FALSE | Maximum expiration time (in minutes) for each ewallet issuer | Expiration time of the transaction in minute  e.g If you want the transaction to be expired after 5 minutes, you just have to set expiration_time to 5.  Each ewallet type might have different expiration time rule, please see table "E-Wallet Details"

### Response Parameters

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -------- |
status | Object | FALSE | Status of response in Object `{code: <status_code>, message: <status_message>}`. See table "Response Code" for more details
ewallet_trx_status | String(20) | TRUE | Always filled with WAITING_PAYMENT if a transaction is successfully created
trx_id | String(255) | TRUE | Filled with a unique transaction identifier from OY
ref_number | String(255) | TRUE | Filled with a unique transaction identifier from OY, can also be used to mock callback in staging environment
customer_id | String(255) | TRUE | ID generated by Partner for a specific user/customer
partner_trx_id | String(255) | TRUE | ID generated by Partner for a specific transaction
amount | String(255) | TRUE | Transaction amount |
ewallet_code | String(255) | TRUE | The ewallet issuer that the customer will use to pay. Refer to this for the list of available ewallet codes
ewallet_url | String(255) | TRUE | EWallet URL generated by the the e-wallet issuers to be used for payment purposes


## E-Wallet Transaction Callback

The E-Wallet Transaction Callback will be sent as a POST request (using JSON format) to your web hook. Please inform your Callback web hook to our business representative or to partner@oyindonesia.com

You will receive the callback when your user has successfully paid the e-wallet transaction. (Note: We send the callback ONLY for a successful transaction.)

### Callback for Delayed Settlement (Non-Real Time Settlement)

If your settlement is non-real time, for every transaction whose payment method is settled H+>0 from the time of transaction, you will receive two callbacks with details as follows:

1.  1st Callback -> To be sent after your customer successfully executes the transaction. For example, if your customer executes the transaction on 11 May 2021 at 14:00:00, that is also when we send the 1st Callback to you. In the 1st callback, the settlement status is set to WAITING (because it is not yet settled to your Account Statement balance)
2.  2nd Callback -> To be sent after the settlement status is changed from WAITING into SUCCESS. For example, if the settlement status is changed into SUCCESS on 12 May 2021 at 15:00:00, that is also when we send the 2nd Callback to you. In the 2nd callback, the settlement status is SUCCESS

### Callback Parameters

> Response callback:

```json
{
    "success": true,
    "trx_id": "789467agf238893894rfcw7978iu7g7e",
    "customer_id": "my_user_id",
    "amount": 75000,
    "ewallet_code": "shopeepay_ewallet",
    "mobile_number": "6282114845847",
    "success_redirect_url": "https://myweb.com/usertx/123456",
    "settlement_time": "01/02/2020T15:00:00.000+0000",
    "settlement_status": "WAITING"
}
```

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -------- |
success | boolean | FALSE | The status of the payment and it is always set to to true
partner_trx_id  | String(255) | FALSE | ID generated by Partner for a specific transaction
trx_id | String(255) | FALSE | Filled with a unique transaction identifier from OY
ref_number | String(255) | FALSE | Filled with a unique transaction identifier from OY, can also be used to mock callback in staging environment
customer_id | String(255) | FALSE | ID generated by Partner for a specific user/customer
amount | BigDecimal | FALSE | Transaction amount
ewallet_code | String(255) | FALSE | The ewallet issuer that the customer used to pay. Refer to this for the list of available ewallet codes
mobile_number | String(255) | FALSE | Customer mobile number
success_redirect_url | String(255) | FALSE | Indicates the URL of your environment (to redirect the customers back once payment has been  completed in e-wallet issuers.)
settlement_time | Timestamp | FALSE | The timestamp (in UTC+7) indicating when the fund will be settled to partner’s account statement, format `dd/MM/yyyy'T'HH:mm:ss.SSSZZZZ`
settlement_status | String(255) | FALSE | Status of the settlement (e.g. success/waiting)

## Check E-Wallet Transaction Status
Use this API to check the status of an e-wallet transaction.

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/e-wallet-aggregator/check-status ` <br/>

**[Staging]** `POST https://api-stg.oyindonesia.com/api/e-wallet-aggregator/check-status`

### Request Headers

Parameter | Type | Description
--------- | ---- | -------- |
X-Api-Key | String | API Key used to connect to this particular endpoint
X-Oy-Username | String | Your OY! account username

### Request Parameters

```shell
curl -X POST \
  <%= config[:endpoint_prod] %>/api/e-wallet-aggregator/check-status \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-api-key: apikeymu' \
  -H 'x-oy-username: yourusername' \
  -d '{
        "partner_trx_id": "ABC123456527"
    }'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/e-wallet-aggregator/check-status'));
request.body = json.encode({
 "partner_trx_id": "ABC123456527"
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

  url := "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/check-status"
  method := "POST"

  payload := strings.NewReader(`{
     "partner_trx_id": "ABC123456527"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("X-Oy-Username", "{{username}}")
  req.Header.Add("X-Api-Key", "{{api-key}}")

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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"partner_trx_id\": \"ABC123456527\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/e-wallet-aggregator/check-status")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("X-Oy-Username", "{{username}}")
  .addHeader("X-Api-Key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
    "partner_trx_id": "ABC123456527"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/check-status");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Oy-Username", "{{username}}");
xhr.setRequestHeader("X-Api-Key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/e-wallet-aggregator/check-status');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'X-Oy-Username' => '{{username}}',
  'X-Api-Key' => '{{api-key}}'
));
$request->setBody('{\n	"partner_trx_id": "ABC123456527"\n}');
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
  "partner_trx_id": "ABC123456527"
})
headers = {
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
}
conn.request("POST", "/api/e-wallet-aggregator/check-status", payload, headers)
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
    "ewallet_trx_status": "WAITING_PAYMENT",
    "amount": 500000,
    "trx_id": "789467agf238893894rfcw7978iu7g7e",
    "customer_id": "my_user_id",
    "partner_trx_id": "ABC123456527",
    "ewallet_code": "shopeepay_ewallet",
    "ewallet_url": "https://someewalletlink.com",
    "reason": "marked as WAITING_PAYMENT by creation service"
}
```

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
partner_trx_id | String(255) | TRUE | - | ID generated by Partner for a specific transaction

### Response Parameters

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -------- |
status | Object | FALSE | Status of response in Object `{code: <status_code>, message: <status_message>}`
ewallet_trx_status | String(20) | TRUE | Current transaction status, refer to "E-Wallet Transaction Status" for more details. Will not be sent if request is failed.
trx_id | String(255) | TRUE | Filled with a unique transaction identifier from OY. Will not be sent if request is failed.
customer_id | String(255) | TRUE | ID generated by Partner for a specific user/customer. Will not be sent if request is failed.
partner_trx_id | String(255) | TRUE | ID generated by Partner for a specific transaction. Will not be sent if request is failed.
amount | String(255) | FALSE | Transaction Amount
ewallet_code | String(255) | TRUE | The ewallet issuer that the customer will use to pay. Will not be sent if request is failed.
ewallet_url | String(255) | TRUE | EWallet URL passed from the e-wallet issuers to be used for payment purposes. Empty for all ovo transaction. Also empty for other ewallet if request is failed.
reason | String(255) | TRUE | Reason for the status given. Will not be sent if request is failed.

## Refund E-Wallet Transaction
Use this API to refund an e-wallet transaction that has been completed. Please refer to table [E-wallet Details](#e-wallet-details-api-e-wallet-aggregator) to see refund capability of each e-wallet vendor.

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/e-wallet-aggregator/refund ` <br/>

**[Staging]** `POST https://api-stg.oyindonesia.com/api/e-wallet-aggregator/refund`

### Request Headers

Parameter | Type | Description
--------- | ---- | -------- |
X-Api-Key | String | API Key used to connect to this particular endpoint
X-Oy-Username | String | Your OY! account username

### Request Parameters

```shell
curl -X POST \
  <%= config[:endpoint_prod] %>/api/e-wallet-aggregator/refund \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-api-key: yourapikey' \
  -H 'x-oy-username: yourusername' \
  -d '{
        "partner_trx_id": "ABC123456527",
        "refund_amount": 10000
    }'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/e-wallet-aggregator/refund'));
request.body = json.encode({
 "partner_trx_id": "ABC123456527",
 "refund_amount": 10000
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

  url := "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/refund"
  method := "POST"

  payload := strings.NewReader(`{
     "partner_trx_id": "ABC123456527",
     "refund_amount": 10000
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("X-Oy-Username", "{{username}}")
  req.Header.Add("X-Api-Key", "{{api-key}}")

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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"partner_trx_id\": \"ABC123456527\",\n\t\"refund_amount\": 10000\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/e-wallet-aggregator/refund")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("X-Oy-Username", "{{username}}")
  .addHeader("X-Api-Key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
    "partner_trx_id": "ABC123456527",
    "refund_amount": 10000
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/refund");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Oy-Username", "{{username}}");
xhr.setRequestHeader("X-Api-Key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/e-wallet-aggregator/refund');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'X-Oy-Username' => '{{username}}',
  'X-Api-Key' => '{{api-key}}'
));
$request->setBody('{\n  "partner_trx_id": "ABC123456527",\n "refund_amount": 10000\n}');
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
  "partner_trx_id": "ABC123456527",
  "refund_amount": 10000
})
headers = {
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
}
conn.request("POST", "/api/e-wallet-aggregator/refund", payload, headers)
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
    "refund_id": "REFUND123",
    "trx_id": "789467agf238893894rfcw7978iu7g7e",
    "partner_trx_id": "ABC123456527",
    "refund_amount": 10000,
    "refund_status": "REFUND_ONPROCESS"
}
```

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
partner_trx_id | String(255) | TRUE | - | ID generated by Partner for a specific transaction
refund_amount | BigDecimal | TRUE | - | Amount to be refunded, must be greater than 0 and can't be greater than the e-wallet transaction amount

### Response Parameters

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -------- |
status | Object | FALSE | Status of response in Object `{code: <status_code>, message: <status_message>}`. See table "Response Code" for more details
refund_id | String(255) | TRUE | Filled with a unique refund identifier from OY. You will get refund ID if your request is successfully passed to e-wallet vendor. This can be used as a request parameter to call get refund status API
trx_id | String(255) | TRUE | Filled with a unique transaction identifier from OY. Will not be sent if request is failed.
partner_trx_id | String(255) | TRUE | ID generated by Partner for a specific transaction. Will not be sent if request is failed.
refund_amount | BigDecimal | TRUE | Requested refund amount. Will not be sent if request is failed. |
refund_status | String(255) | TRUE | Filled with status of refund request, refer to "E-Wallet Refund Status" for more details. Will not be sent if request is failed.

## E-Wallet Refund Callback

The E-Wallet Refund Callback will be sent as a POST request (using JSON format) to your web hook. Please inform your Callback web hook to our business representative or to partner@oyindonesia.com

You will receive the callback when you request to refund an e-wallet transaction and your request is successfully passed to e-wallet vendor.

### Callback Parameters

> Response callback:

```json
{
    "success": true,
    "refund_id": "REFUND123",
    "refund_status": "REFUNDED",
    "refund_amount": 10000
}
```

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -------- |
success | boolean | FALSE | Filled with true if refund is successfully processed by e-wallet vendor, and false if otherwise
refund_id | String(255) | FALSE | Filled with a unique refund identifier from OY
refund_status | String(255) | FALSE | Status of refund request, refer to "E-Wallet Refund Status" for more details
refund_amount | BigDecimal | FALSE | Requested refund amount

## Get E-Wallet Refund Status

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/e-wallet-aggregator/get-refund?refund_id=<refund_id> ` <br/>

**[Staging]** `GET https://api-stg.oyindonesia.com/api/e-wallet-aggregator/get-refund?refund_id=<refund_id>`

### Request Headers

Parameter | Type | Description
--------- | ---- | -------- |
X-Api-Key | String | API Key used to connect to this particular endpoint
X-Oy-Username | String | Your OY! account username

### Query Parameters

```shell
curl -X GET \
  <%= config[:endpoint_prod] %>/api/e-wallet-aggregator/get-refund?refund_id=<refund_id> \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-api-key: yourapikey' \
  -H 'x-oy-username: yourusername'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/e-wallet-aggregator/get-refund?refund_id=<refund_id>'));
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

  url := "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/get-refund?refund_id=<refund_id>"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("X-Oy-Username", "{{username}}")
  req.Header.Add("X-Api-Key", "{{api-key}}")

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
Request request = new Request.Builder()
  .url("{{base_url}}/api/e-wallet-aggregator/get-refund?refund_id=<refund_id>")
  .method("GET", null)
  .addHeader("Content-Type", "application/json")
  .addHeader("X-Oy-Username", "{{username}}")
  .addHeader("X-Api-Key", "{{api-key}}")
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/get-refund?refund_id=<refund_id>");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Oy-Username", "{{username}}");
xhr.setRequestHeader("X-Api-Key", "{{api-key}}");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/e-wallet-aggregator/get-refund?refund_id=<refund_id>');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'X-Oy-Username' => '{{username}}',
  'X-Api-Key' => '{{api-key}}'
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
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
}
conn.request("GET", "/api/e-wallet-aggregator/get-refund?refund_id=<refund_id>", payload, headers)
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
    "refund_id": "REFUND123",
    "refund_status": "REFUNDED",
    "refund_amount": 10000
}
```

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
refund_id | String(255) | TRUE | - | Unique refund ID, you can get this once you have requested refund for an e-wallet transaction and the request is passed to e-wallet vendor

### Response Parameters

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -------- |
status | Object | FALSE | Status of response in Object `{code: <status_code>, message: <status_message>}`. See table "Response Code" for more details
refund_id | String(255) | TRUE | Requested e-wallet refund ID. Will not be sent if request is failed.
refund_status | String(255) | TRUE | Status of refund request, refer to "E-Wallet Refund Status" for more details. Will not be sent if request is failed.
refund_amount | BigDecimal | TRUE | Requested refund amount. Will not be sent if request is failed.

## Get List of E-Wallet Refund

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id> ` <br/>

**[Staging]** `GET https://api-stg.oyindonesia.com/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id>`

### Request Headers

Parameter | Type | Description
--------- | ---- | -------- |
X-Api-Key | String | API Key used to connect to this particular endpoint
X-Oy-Username | String | Your OY! account username

### Query Parameters

```shell
curl -X GET \
  <%= config[:endpoint_prod] %>/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id> \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-api-key: yourapikey' \
  -H 'x-oy-username: yourusername'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id>'));
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

  url := "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id>"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("X-Oy-Username", "{{username}}")
  req.Header.Add("X-Api-Key", "{{api-key}}")

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
Request request = new Request.Builder()
  .url("{{base_url}}/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id>")
  .method("GET", null)
  .addHeader("Content-Type", "application/json")
  .addHeader("X-Oy-Username", "{{username}}")
  .addHeader("X-Api-Key", "{{api-key}}")
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id>");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Oy-Username", "{{username}}");
xhr.setRequestHeader("X-Api-Key", "{{api-key}}");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id>');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'X-Oy-Username' => '{{username}}',
  'X-Api-Key' => '{{api-key}}'
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
  'Content-Type': 'application/json',
  'X-Oy-Username': '{{username}}',
  'X-Api-Key': '{{api-key}}'
}
conn.request("GET", "/api/e-wallet-aggregator/list-refund?partner_trx_id=<partner_trx_id>", payload, headers)
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
    "total": 2,
    "data": [
        {
            "refund_id": "REFUND123",
            "refund_status": "REFUNDED",
            "refund_amount": 10000
        },
        {
            "refund_id": "REFUND456",
            "refund_status": "REFUND_FAILED",
            "refund_amount": 10000
        }
    ]
}
```

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
partner_trx_id | String(255) | TRUE | - | ID generated by Partner for a specific transaction

### Response Parameters

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -------- |
status | Object | FALSE | Status of response in Object `{code: <status_code>, message: <status_message>}`. See table "Response Code" for more details
total | Integer | TRUE | Total items. Will not be sent if request is failed.
data | Array of object | TRUE | List of Object `{refund_id: <refund_id>, refund_status: <refund_status>, refund_amount: <refund_amount>}` Will not be sent if request is failed.

## E-Wallet Details

E-Wallet Issuer | E-Wallet Code| Minimum Expiration Time | Maximum Expiration Time | Redirection Feature | Refund Support
--------- | ---- | -------- | ------- | ------- | ------- |
OVO | ovo_ewallet | Parameter is ignored, always set to 55 seconds | Parameter is ignored, always set to 55 seconds | Not supported | Not supported
ShopeePay | shopeepay_ewallet | 1 minute | 60 minutes | Support | Support full refund only & can't do refund between 00.00 - 05.00 WIB
Linkaja | linkaja_ewallet | Parameter is ignored, always set to 5 minutes | Parameter is ignored, always set to 5 minutes | Support | Support full refund only
DANA | dana_ewallet | 1 minute | 60 minutes | Support | Support full and partial refund

## E-Wallet Transaction Status

Status | Trigger|
--------- | ---- |
WAITING_PAYMENT | Transaction is successfully created and currently active
FAILED | Payment failed
COMPLETE | Payment successfully received
REFUNDED | Payment successfully refunded
EXPIRED | Expiration time is reached with no payment received

## E-Wallet Refund Status

Status | Description|
--------- | ---- |
REFUNDED | Payment has been successfully refunded
REFUND_FAILED | Refund request failed
REFUND_ONPROCESS | Refund ongoing by e-wallet vendor
SUSPECTED | Refund request failed on e-wallet vendor, balance is being checked

## List of Status Codes

Response Code | State | Description
---------- | ------- | -------
000 | Final | Response success without error
990 | Final | Request is Rejected (Parameter is invalid)
202 | Final | Request is Rejected (User is not active/registered for this feature)
203 | Final | Request is Rejected (Duplicate Partner Trx ID)
204 | Final | Request is Rejected (Partner Trx ID not found)
206 | Final | Request is Rejected (Balance is not enough)
207 | Final | Request is Rejected (Request IP Address is not Registered)
208 | Final | Request is Rejected (API Key is not Valid)
248 | Non-Final | Request is Rejected (Ewallet/Vendor Server Error)
250 | Final | Request is Rejected (EWallet code is not available)
251 | Final | Request is rejected (EWallet code is disabled)
252 | Non-Final | Request is rejected (Creation/Check Status/Refund request failed)
253 | Final | Request is Rejected (Partner credential not found or invalid on e-wallet server)
254 | Final | Request is Rejected (User credential not found, blocked, or invalid)
255 | Final | Request is Rejected (Refund ID is not found)
999 | Non-Final | Internal Server Error

## List of HTTP Status Codes

HTTP Status Code | Description
---------- | -------
200 | Response success without error
403 | Forbidden (IP address is not whitelisted or request is deemed suspicious e.g SQL injection or XSS)
404 | Not Found (wrong URL or wrong HTTP method)
429 | Request Rejected (Too Many Request to specific endpoint)
500 | Internal Server Error (OY! system encountered unknown error)
503 | Service Unavailable (OY! system is unable to process the request temporarily)
504 | Gateway Timeout (OY! system took too long processing the request and was unable to respond in time)
