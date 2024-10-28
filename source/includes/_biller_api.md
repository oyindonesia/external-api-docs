# Biller API

Biller APIs allow you to instruct OY to do inquiry and pay bill to any available biller in Indonesia with ease and in real-time.

## Bill Inquiry

```shell
curl -X \
POST https://partner.oyindonesia.com/api/v2/bill \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
    "customer_id": "12345678910",
    "product_id": "plnprepaid",
    "partner_tx_id": "DEV123456789",
    "amount": null,
    "additional_data": null
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/v2/bill'));
request.body = json.encode({
    "customer_id": "12345678910",
    "product_id": "plnprepaid",
    "partner_tx_id": "DEV123456789",
    "amount": null,
    "additional_data": null
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

  url := "%7B%7Bbase_url%7D%7D/api/v2/bill"
  method := "POST"

  payload := strings.NewReader(`{
    "customer_id": "12345678910",
    "product_id": "plnprepaid",
    "partner_tx_id": "DEV123456789",
    "amount": null,
    "additional_data": null
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"customer_id\": \"12345678910\",\n\t\"product_id\": \"plnprepaid\",\n\t\"partner_tx_id\": \"DEV123456789\",\n\t\"amount\": null,\n\t\"additional_data\": null\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/v2/bill")
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
    "customer_id": "12345678910",
    "product_id": "plnprepaid",
    "partner_tx_id": "DEV123456789",
    "amount": null,
    "additional_data": null
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/v2/bill");
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
$request->setUrl('{{base_url}}/api/v2/bill');
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
$request->setBody('{\n  "customer_id": "12345678910",\n  "product_id": "plnprepaid",\n  "partner_tx_id": "DEV123456789",\n  "amount": null,\n  "additional_data": null\n}');
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
    "customer_id": "12345678910",
    "product_id": "plnprepaid",
    "partner_tx_id": "DEV123456789",
    "amount": null,
    "additional_data": null
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/v2/bill", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "status": {
    "code": "000",
    "message": "Success",
  },
  "data": {
    "tx_id": "12345-12345-12345-12345",
    "partner_tx_id": "DEV123456789",
    "product_id": "BPFI",
    "customer_id": "000372190053",
    "customer_name": "FIRDAUS", 
    "amount": 832500,
    "admin_fee": 2500,
    "additional_data": "{\"customer_id\":\"000372190053\",\"customer_name\":\"FIRDAUS\",\"total_amount\":835000}"
  },
}
```

Use this API to do Inquiry and get detail information on the Bill before paying.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/v2/bill`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/v2/bill`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
customer_id | String(255) | TRUE | Customer ID for specific biller product
product_id | String(255) | TRUE | OY's Biller ID, see [Biller Products List](#biller-products-list-biller-api)
partner_tx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
amount | BigInteger | FALSE | Product denom/amount, only for PLN Prepaid 20.000, 50.000, 100.000, 200.000, 500.000, 1.000.000
additional_data | String(255) | FALSE | Required for BPJS and PBB, <br>BPJS (number of months, ex : `3` is for 3 months), <br>PBB (tax year, ex `2023` is for tax 2023)

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
data | Object | Data object that wraps the response parameters
tx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
customer_id | String(255) | Customer ID for specific biller product
product_id | String(255) | OY's Biller ID, see [Biller Products List](#biller-products-list-biller-api)
partner_tx_id | String(255) | Unique Payout ID for a specific request, generated by partner
customer_name | String(255) | Customer Name from biller
amount | BigDecimal | Bill's amount (excluding admin fee).
admin_fee | BigDecimal | Bill's admin fee
additional_data | Object | Additional detailed data from biller

## Pay Bill

```shell
curl -X \
POST https://partner.oyindonesia.com/api/v2/bill/payment \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_tx_id": "DEV123456789",
  "note": "Payment for bill #001"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/v2/bill/payment'));
request.body = json.encode({
  "partner_tx_id": "DEV123456789",
  "note": "Payment for bill #001"
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

  url := "%7B%7Bbase_url%7D%7D/api/v2/bill/payment"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_tx_id": "DEV123456789",
    "note": "Payment for bill #001",
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"partner_tx_id\": \"DEV123456789\",\n\t\"note\": \"Payment for bill #001\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/v2/bill/payment")
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
  "partner_tx_id": "DEV123456789",
  "note": "Payment for bill #001"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/v2/bill/payment");
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
$request->setUrl('{{base_url}}/api/v2/bill/payment');
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
$request->setBody('{\n "partner_tx_id": "DEV123456789",\n "note": "Payment for bill #001"\n}');
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
  "partner_tx_id": "DEV123456789",
  "note": "Payment for bill #001"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/v2/bill/payment", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "101",
        "message": "In Progress",
    },
    "data": {
        "tx_id": "12345-12345-12345-12345",
        "customer_id": "000372190053",
        "product_id": "BPFI",
        "partner_tx_id": "DEV123456789",
        "note": "note for payment",
        "customer_name": "FIRDAUS", 
        "amount": 835000,
        "admin_fee": 2500,
    }
}
```

This API will enable you to do payment for your bill. You need to do inquiry first before calling this API.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/v2/bill/payment`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/v2/bill/payment`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_tx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
note | String(255) | FALSE | Partner defined note for bill payment

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
data | Object | Data object that wraps the response parameters
tx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
customer_id | String(255) | Customer ID for specific biller product
product_id | String(255) | OY's Biller ID, see [Biller Products List](#biller-products-list-biller-api)
partner_tx_id | String(255) | Unique Payout ID for a specific request, generated by partner
customer_name | String(255) | Customer Name from biller
note | String(255) | Partner defined note for bill payment
amount | BigDecimal | Bill's amount (excluding admin fee).
admin_fee | BigDecimal | Bill's admin fee

## Partner Callback

> Response callback:

```json
{
  "status": {
    "code": "000",
    "message": "Success",
  },
  "data": {
    "tx_id": "12345-12345-12345-12345",
    "partner_tx_id": "DEV123456789",
    "product_id": "BPFI",
    "customer_id": "000372190053",
    "customer_name": "FIRDAUS", 
    "amount": 835000,
    "admin_fee": 2500,
    "note": "note for payment",
    "additional_data": "{\"customer_id\":\"000372190053\",\"customer_name\":\"FIRDAUS\",\"total_amount\":835000,\"receipt_code\":\"123123123123\",\"settlement_date\":\"2020-10-1917:16:17\"}"
  },
}
```

Once a bill payment request has finished, our system will make a callback status of that payment request to your system

Please contact us and submit a callback URL if you need a callback status of a bill payment request.

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
data | Object | Data object that wraps the response parameters
tx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
customer_id | String(255) | Customer ID for specific biller product
product_id | String(255) | OY's Biller ID, see [Biller Products List](#biller-products-list-biller-api)
partner_tx_id | String(255) | Unique Payout ID for a specific request, generated by partner
customer_name | String(255) | Customer Name from biller
amount | BigDecimal | Bill's amount (excluding admin fee).
admin_fee | BigDecimal | Bill's admin fee
additional_data | Object | Additional detailed data from biller
note | String(255) | Partner defined note for bill payment

## Get Bill Payment Status

```shell
curl -X \
GET https://partner.oyindonesia.com/api/v2/bill/status?partner_tx_id=partner-tx-id-001 \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/v2/bill/status?partner_tx_id=partner-tx-id-001'));
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

  url := "%7B%7Bbase_url%7D%7D/api/v2/bill/status?partner_tx_id=partner-tx-id-001"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

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
  .url("{{base_url}}/api/v2/bill/status?partner_tx_id=partner-tx-id-001")
  .method("GET", null)
  .addHeader("Content-Type", "application/json")
  .addHeader("Accept", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/v2/bill/status?partner_tx_id=partner-tx-id-001");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/v2/bill/status?partner_tx_id=partner-tx-id-001');
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
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("GET", "/api/v2/bill/status?partner_tx_id=partner-tx-id-001", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```


> The above command returns JSON structured similar like this:

```json
{
  "status": { 
    "code": "000",
    "message": "Success",
  },
  "data": {
    "tx_id":"12345-12345-12345-12345", 
    "partner_tx_id": "DEV123456789",
    "product_id": "BPFI",
    "customer_id": "000372190053",
    "customer_name": "FIRDAUS", 
    "amount": 835000, 
    "admin_fee": 2500, 
    "status": "SUCCESS",
    "tx_status_description": "",
    "additional_data": "{\"customer_id\":\"000372190053\",\"customer_name\":\"FIRDAUS\",\"total_amount\":835000,\"receipt_code\":\"123123123123\",\"settlement_date\":\"2020-10-1917:16:17\"}"
  }
}
```

This endpoint allows you to get the status of an inquiried bill.

#### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/v2/bill/status?partner_tx_id=<partner_tx_id>`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/v2/bill/status?partner_tx_id=<partner_tx_id>`

#### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_tx_id | String(255) | TRUE | Unique Payout ID which partner put on scheduled disburse creation

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Check Status hit in Object `{code: <status_code>, message: <status_message>}`
data | Object | Data object that wraps the response parameters
tx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
customer_id | String(255) | Customer ID for specific biller product
product_id | String(255) | OY's Biller ID, see [Biller Products List](#biller-products-list-biller-api)
partner_tx_id | String(255) | Unique Payout ID for a specific request, generated by partner
customer_name | String(255) | Customer Name from biller
amount | BigDecimal | Bill's amount (excluding admin fee).
admin_fee | BigDecimal | Bill's admin fee
additional_data | Object | Additional detailed data from biller
status | String | Biller Transaction Status, Refer to [API Biller Status](#api-biller-status-biller-api)
tx_status_description | String | Error reason if exists, field is blank if status is SUCCESS

## Get Bill Products List

```shell
curl -X \
GET https://partner.oyindonesia.com/api/v2/bill/products \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/v2/bill/products'));
request.body = json.encode({
  "partner_tx_id": "partner-tx-id-001"
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

  url := "%7B%7Bbase_url%7D%7D/api/v2/bill/products"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url)

  if err != nil {
    fmt.Println(err)
    return
  }
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
  .url("{{base_url}}/api/v2/bill/products")
  .method("GET", null)
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/v2/bill/products");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/v2/bill/products');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
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
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
conn.request("GET", "/api/v2/bill/products", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```


> The above command returns JSON structured similar like this:

```json
{
  "status": { 
    "code": "000",
    "message": "Success",
  },
  "data": {
    "product_list": [
      {
        "product_id": "plnpre",
        "description": "pln prepaid",
        "admin_fee": 2500.0000,
        "amount": 50000.0000,
        "is_available": true
      },
      ...
  }
}
```

This endpoint allows you to get the list of bill products available.

#### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/v2/bill/products`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/v2/bill/products`

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
data | Object | Data object that wraps the response parameters
product_list | Array of Object | List of API Biller Product Object
product_id | String(255) | OY's Biller ID, see [Biller Products List](#biller-products-list-biller-api)
description | String(255) | Product Description / Name
amount | BigDecimal | Bill's amount (excluding admin fee).
admin_fee | BigDecimal | Bill's admin fee
is_available | Boolean | Product availabilty 

## API Biller Response Codes

These are the list of possible response codes for API Biller:

Status         | State     | Meaning
-------------- | --------- | -------
000            | Final     | Inquiry or Payment Request has been completed (SUCCESS)
102            | Non-Final | Request is In Progress
300            | Final     | Transaction Failed (FAILED) 
302            | Final     | Customer ID Not Found (FAILED)
303            | Final     | Product Not Exist or Not Available (FAILED)
304            | Final     | Invalid Data (FAILED)
305            | Final     | Customer ID Already Paid (FAILED)
306            | Final     | System on the Cut-off Schedule (FAILED)
307            | Final     | Biller System Error (FAILED)
400            | Non-Final | Transaction Pending (PENDING)

The following status codes are for rejected requests

Status         | State     | Meaning
-------------- | --------- | -------
201            | Final     | Request is Rejected (User ID is not Found)
202            | Final     | Request is Rejected (User ID is not Active)
203            | Final     | Request is Rejected (Duplicate Partner Tx ID)
204            | Final     | Request is Rejected (Partner Tx ID is Not Found)
205            | Final     | Request is Rejected (Biller product_id is not available at this moment)
206            | Final     | Request is Rejected (Partner Deposit Balance is Not Enough)
207            | Final     | Request is Rejected (Request IP Address is not Registered)
208            | Final     | Request is Rejected (API Key is not Valid)
210            | Final     | Request is Rejected (Invalid denom amount request)
223            | Final     | Request is Rejected (Duplicate payment request)
290            | Final     | Request is Rejected (Parameter / object is not valid)
999            | Final     | Internal Server Error

## API Biller Status

These are all the status that apply to API Biller product

Status         | Meaning
-------------- | -------
INQUIRY        | Bill has been inquired and may be paid
IN_PROGRESS    | Processing payment request to biller provider
PENDING        | Unknown status from biller provider and will be resolved manually
SUCCESS        | Bill payment success
FAILED         | Bill payment failed

## Mock Value for Staging

### Inquiry

You can mock the inquiry to return failed status. To do this, fill in the `customer_id` to any number with the last number being `9`. When inquiring this customer id to any product, it will return failed response. `customer_id` with last character other than `9` will return success inquiry.

example:

a request with `"customer_id": "123456789"` will mock the inquiry to return failed inquiry status with reason <b>Internal Server Error.</b><br />
a request with `"customer_id": "1234563059"` will mock the inquiry to return failed inquiry status with reason <b>Bill is Already Paid or Not Found.</b><br />
a request with `"customer_id": "1234563029"` will mock the inquiry to return failed inquiry status with reason <b>Customer Id is Not Found.</b>
a request with `"customer_id": "987654321"` will return success inquiry.

### Payment

You can replicate error response code (final) by filling in `customer_id` value using following format `<desired response code>0000`.
Another value not following the format will be processed normally. The response codes that are available are `300` for FAILED, and `301` for PENDING.

example:

a request with `"customer_id": "3010000"` will mock the payment callback to return pending status.

### Test Scenario

To test out all scenarios of API Biller and ensure the flows in your integration are handled correctly, please visit [this link](https://docs.google.com/spreadsheets/d/1hKEfHOD5tvFptSzabncQpssCG5ECDlpO/edit#gid=1888060716)

## Biller Products List
Here is the list of available bill products in our Biller Service

### Insurance
Product Id | Product Description
---------- | -------------------
bpjsks	|	BPJS KESEHATAN
bpjs-ketenagakerjaan	|	BPJS KETENAGAKERJAAN
bpjs-denda  | BPJS DENDA
asrjws	|	ASURANSI JIWASRAYA/ASURANSI IFG LIFE
asrtokios	|	TOKIO MARINE
asrbint1	|	ASURANSI BINTANG PAKET 1
asrbint2	|	ASURANSI BINTANG PAKET 2
asrcar	|	CENTRAL ASIA RAYA
asrpru	|	PRUDENTIAL PREMI LANJUTAN

### PLN
Product Id | Product Description
---------- | -------------------
plnpost	|	PLN POSTPAID
plnpre	|	PLN PREPAID

### Internet
Product Id | Product Description
---------- | -------------------
telkom	|	TELKOM / TELKOM SPEEDY
myrepublic	|	MYREPUBLIC
cbn	|	CBN
centrin-online	|	CENTRIN ONLINE
comet-internet	|	MYREPUBLIC
indihome	|	INDIHOME
mnc-play	|	MNC PLAY


### TV Cable
Product Id | Product Description
---------- | -------------------
tvbig | BIG TV
tvindvs | INDOVISION
tvindvs | TOPTV
tvindvs | OKEVISION
tvnex | NEX MEDIA
tvtlkmv | TRANSVISION
tvtlkmv | TELKOMVISION
tvtlkmv | YESTV
tvtopas | TOPAS TV
k-vision  | K VISION
mnc-vision  | MNC VISION

### Multifinance
Product Id | Product Description
---------- | -------------------
alf | AL IJARAH FINANCE
apf | ARTHA PRIMA FINANCE
bpfi  | BATAVIA FINANCE
bmf | BIMA FINANCE
bprkm | BPR KM
bprnbp  | BPR NBP
citra | CAKRAWALA CITRAMEGA MULTIFINANCE
edv | ESTA DANA VENTURA
jgdr  | JAGADIRI
cvk | KOPERASI ANUGRAH MEGA MANDIRI
nrc | KOPERASI NRC
mdl | MANDALA
mtf | MANDIRI TUNAS FINANCE
maf | MEGA AUTO FINANCE
mcf | MEGA CENTRAL FINANCE
mf  | MEGA FINANCE
mbf | MIZUHO BALIMOR FINANCE
pmt | PERMATA FINANCE
dtpr  | PRIMA PEGADAIAN
dtpu  | PUTRA PEGADAIAN
smmf  | SINARMAS
smf | SMART FINANCE
sol | SOLITE
top | TOP FINANCE
tpf | TRANS PACIFIC
trh | TRIHAMAS FINANCE

### PDAM
Product Id | Product Description
---------- | -------------------
pdamkab.mojokerto | PDAM KAB MOJOKERTO
pdamkab.sidoarjo  | PDAM KAB SIDOARJO
pdamkab.bojonegoro  | PDAM KAB BOJONEGORO
pdamkab.malang  | PDAM KAB MALANG
pdamkab.bogor | PDAM KAB BOGOR
pdamaetra | PDAM AETRA
pdampalyja  | PDAM PALYJA
pdamkab.bandung | PDAM BANDUNG KOT
pdamkab.bangkalan | PDAM BANGKALAN KAB
pdamkab.cilacap | PDAM CILACAP KAB
pdamkab.jember  | PDAM JEMBER KAB
pdamkot.lampung | PDAM LAMPUNG KOT
pdamkot.mataram | PDAM MATARAM KOT
pdamkot.palembang | PDAM PALEMBANG KOT
pdamkab.semarang  | PDAM SEMARANG KAB
pdamkot.surabaya  | PDAM SURABAYA KOT
pdamkab.tapin | PDAM TAPIN KAB
pdamketapang  | PDAM KETAPANG
pdammakasar | PDAM MAKASAR

### PBB
Product Id | Product Description
---------- | -------------------
pbbdki.jakarta  | PBB DKI JAKARTA
pbbkab.bandung  | PBB KAB. BANDUNG
pbbkab.bandungbarat | PBB KAB. BANDUNG BARAT
pbbkab.banjarnegara | PBB KAB. BANJAR NEGARA
pbbkab.banyumas | PBB KAB. BANYUMAS
pbbkab.batang | PBB KAB. BATANG
pbbkab.bekasicikarang | PBB KAB. BEKASI CIKARANG
pbbkab.blora  | PBB KAB. BLORA
pbbkab.bogorcibinong  | PBB KAB. BOGOR CIBINONG
pbbkab.boyolali | PBB KAB BOYOLALI
pbbkab.brebes | PBB KAB. BREBES
pbbkab.ciamis | PBB KAB. CIAMIS
pbbkab.cianjur  | PBB KAB. CIANJUR
pbbkab.cilacap  | PBB KAB. CILACAP
pbbkab.cirebon  | PBB KAB. CIREBON
pbbkab.demak  | PBB KAB. DEMAK
pbbkab.garut  | PBB KAB. GARUT
pbbkab.grobogan | PBB KAB. GROBOGAN
pbbkab.indramayu  | PBB KAB. INDRAMAYU
pbbkab.jepara | PBB KAB. JEPARA
pbbkab.karangayar | PBB KAB. KARANGAYAR
pbbkab.karawang | PBB KAB. KARAWANG
pbbkab.kebumen  | PBB KAB. KEBUMEN
pbbkab.kendal | PBB KAB. KENDAL
pbbkab.klaten | PBB KAB. KLATEN
pbbkab.kudus  | PBB KAB. KUDUS
pbbkab.kuningan | PBB KAB. KUNINGAN
pbbkab.lebak  | PBB KAB. LEBAK
pbbkab.magelang | PBB KAB. MAGELANG
pbbkab.majalengka | PBB KAB. MAJALENGKA
pbbkab.pandeglang | PBB KAB. PANDEGLANG
pbbkab.pangandaran  | PBB KAB. PANGANDARAN
pbbkab.pati | PBB KAB.PATI
pbbkab.pekalongan | PBB KAB. PEKALONGAN
pbbkab.pemalang | PBB KAB. PEMALANG
pbbkab.purbalingga  | PBB KAB.PURBALINGGA
pbbkab.purwakarta | PBB KAB. PURWAKARTA
pbbkab.purworejo  | PBB KAB. PURWOREJO
pbbkab.rembang  | PBB KAB. REMBANG
pbbkab.semarang | PBB KAB. SEMARANG
pbbkab.serang | PBB KAB. SERANG
pbbkab.sragen | PBB KAB. SRAGEN
pbbkab.subang | PBB KOTA SUBANG
pbbkab.sukabumi | PBB KAB. SUKABUMI
pbbkab.sukaharjo  | PBB KAB. SUKAHARJO
pbbkab.sumedang | PBB KAB. SUMEDANG
pbbkab.tangerang  | PBB KAB. TANGERANG
pbbkab.tasikmalaya  | PBB KAB. TASIKMALAYA
pbbkab.tegal  | PBB KAB.TEGAL
pbbkab.temanggung | PBB KAB. TEMANGGUNG
pbbkab.wonogiri | PBB KAB.WONOGIRI
pbbkab.wonosobo | PBB KAB. WONOSOBO
pbbkot.banjar | PBB KOTA BANJAR
pbbkot.bekasi | PBB KOTA BEKASI
pbbkot.bogor  | PBB KOTA BOGOR
pbbkot.cilegon  | PBB KOTA CILEGON
pbbkot.cimahi | PBB KOTA CIMAHI
pbbkot.cirebon  | PBB KOTA CIREBON
pbbkot.depok  | PBB KOTA DEPOK
pbbkot.magelang | PBB KOTA MAGELANG
pbbkot.pekalongan | PBB KOTA PEKALONGAN
pbbkot.pekanbaru  | PBB KOTA PEKAN BARU
pbbkot.salatiga | PBB KOTA SALATIGA
pbbkot.semarang | PBB KOTA SEMARANG
pbbkot.serang | PBB KOTA SERANG
pbbkot.sukabumi | PBB KOTA SUKABUMI
pbbkot.surakarta  | PBB KOTA SURAKARTA
pbbkot.tangerang  | PBB KOTA TANGERANG
pbbkot.tangerangselatan | PBB KOTA TANGERANG SELATAN
pbbkot.tasikmalaya  | PBB KOTA TASIKMALAYA

### Voucher Pulsa
Product Id | Product Description
---------- | -------------------
as100 | PULSA AS 100.000
as10  | PULSA AS 10.000
as25  | PULSA AS 25.000
as50  | PULSA AS 50.000
as5 | PULSA AS 5.000
sim100  | PULSA SIMPATI 100.000
sim10 | PULSA SIMPATI 10.000
sim20 | PULSA SIMPATI 20.000
sim50 | PULSA SIMPATI 50.000
sim5  | PULSA SIMPATI 5.000
mr20  | PULSA MENTARI REGULAR 20.000
mr100 | PULSA MENTARI REGULAR 100.000
mr10  | PULSA MENTARI REGULAR 10.000
mr25  | PULSA MENTARI REGULAR 25.000
mr50  | PULSA MENTARI REGULAR 50.000
mr5 | PULSA MENTARI REGULAR 5.000
imr100  | PULSA IM3 REGULAR 100.000
imr10 | PULSA IM3 REGULAR 10.000
imr25 | PULSA IM3 REGULAR 25.000
imr50 | PULSA IM3 REGULAR 50.000
imr5  | PULSA IM3 REGULAR 5.000
imr20 | PULSA IM3 REGULAR 20.000
axp100  | PULSA AXIS 100.000
axp10 | PULSA AXIS 10.000
axp25 | PULSA AXIS 25.000
axp50 | PULSA AXIS 50.000
axp5  | PULSA AXIS 5.000
xlv100  | PULSA XL VOUCHER 100.000
xlv10 | PULSA XL VOUCHER 10.000
xlv25 | PULSA XL VOUCHER 25.000
xlv50 | PULSA XL VOUCHER 50.000
xlv5  | PULSA XL VOUCHER 5.000
sf5 | PULSA SMARTFREN 5.000
sf10  | PULSA SMARTFREN 10.000
sf20  | PULSA SMARTFREN 20.000
sf25  | PULSA SMARTFREN 25.000
sf50  | PULSA SMARTFREN 50.000
sf60  | PULSA SMARTFREN 60.000
sf100 | PULSA SMARTFREN 100.000
sf150 | PULSA SMARTFREN 150.000
tri1  | PULSA THREE 1.000
tri2  | PULSA THREE 2.000
tri5  | PULSA THREE 5.000
tri10 | PULSA THREE 10.000
tri15 | PULSA THREE 15.000
tri20 | PULSA THREE 20.000
tri25 | PULSA THREE 25.000
tri30 | PULSA THREE 30.000
tri50 | PULSA THREE 50.000
tri100  | PULSA THREE 100.000
tri150  | PULSA THREE 150.000
tri200  | PULSA THREE 200.000
tri300  | PULSA THREE 300.000
tri500  | PULSA THREE 500.000

### e-Wallet
Product Id | Product Description
---------- | -------------------
dana  | E-WALLET TOP UP DANA
shopeepay | E-WALLET TOP UP SHOPEEPAY
ovo | E-WALLET TOP UP OVO
linkaja | E-WALLET TOP UP LINKAJA
grab  | TOP UP DRIVER GRAB
maxim | TOP UP DRIVER MAXIM

