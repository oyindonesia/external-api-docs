# Biller API COMINGSOON

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
    "partner_tx_id": "DEV123456789"
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
    "partner_tx_id": "DEV123456789"
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
    "partner_tx_id": "DEV123456789"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"customer_id\": \"12345678910\",\n\t\"product_id\": \"plnprepaid\",\n\t\"partner_tx_id\": \"DEV123456789\"\n}");
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
    "partner_tx_id": "DEV123456789"
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
$request->setBody('{\n  "customer_id": "12345678910",\n  "product_id": "plnprepaid",\n  "partner_tx_id": "DEV123456789"\n}');
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
    "partner_tx_id": "DEV123456789"
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
    "total_amount": "835000", 
    "additional_data": {
      "customer_id":"000372190053",
      "customer_name":"FIRDAUS",
      "admin_fee":15000,
      // and other data that is passed by Biller from vendor
    }
  },
}
```

Use this API to do Inquiry and get detail information on the Bill before paying.

### HTTPS Request
**[Production]** `Coming Soon`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/v2/bill`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
customer_id | String(255) | TRUE | Customer ID for specific biller product
product_id | String(255) | TRUE | OY's Biller ID, see [Biller Products List]()
partner_tx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
amount | BigInteger | FALSE | Product denom/amount, only for PLN Prepaid 20.000, 50.000, 100.000, 200.000, 500.000, 1.000.000
additional_data | String(255) | FALSE | Additonal data for BPJS (number of months) or PBB (tax year)

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
data | Object | Data object that wraps the response parameters
tx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
customer_id | String(255) | Customer ID for specific biller product
product_id | String(255) | OY's Biller ID, see [Biller Products List]
partner_tx_id | String(255) | Unique Payout ID for a specific request, generated by partner
customer_name | String(255) | Customer Name from biller
total_amount | BigDecimal | Bill's total amount (including admin fee, penalty, or other applicable fees)
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
        "total_amount": 835000,
    }
}
```

This API will enable you to do payment for your bill. You need to do inquiry first before calling this API.

### HTTPS Request
**[Production]** `Coming Soon`<br>
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
product_id | String(255) | OY's Biller ID, see [Biller Products List]
partner_tx_id | String(255) | Unique Payout ID for a specific request, generated by partner
customer_name | String(255) | Customer Name from biller
note | String(255) | Partner defined note for bill payment
total_amount | BigDecimal | Bill's total amount (including admin fee, penalty, or other applicable fees)


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
    "total_amount": "835000", 
    "additional_data": {
      "customer_id":"000372190053",
      "customer_name":"FIRDAUS",
      "admin_fee":15000,
      "receipt_code":"123123123123",
      "settlement_date":"2020-10-19 17:16:17",
      // and other data that is passed by Biller from vendor
    }
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
product_id | String(255) | OY's Biller ID, see [Biller Products List]
partner_tx_id | String(255) | Unique Payout ID for a specific request, generated by partner
customer_name | String(255) | Customer Name from biller
total_amount | BigDecimal | Bill's total amount (including admin fee, penalty, or other applicable fees)
additional_data | Object | Additional detailed data from biller

## Get Bill Payment Status

```shell
curl -X \
GET https://partner.oyindonesia.com/api/v2/bill/status \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_tx_id": "partner-tx-id-001"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/v2/bill/status'));
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

  url := "%7B%7Bbase_url%7D%7D/api/v2/bill/status"
  method := "GET"

  payload := strings.NewReader(`{
	"partner_tx_id": "partner-tx-id-001"
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
  .url("{{base_url}}/api/v2/bill/status")
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
  "partner_tx_id": "partner-tx-id-001"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/v2/bill/status");
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
$request->setUrl('{{base_url}}/api/v2/bill/status');
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
$request->setBody('{\n	"partner_tx_id": "partner-tx-id-001"\n}');
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
  "partner_tx_id": "partner-tx-id-001"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("GET", "/api/v2/bill/status", payload, headers)
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
    "total_amount": "835000", 
    "additional_data": {
      "customer_id":"000372190053",
      "customer_name":"FIRDAUS",
      "admin_fee":15000,
      "receipt_code":"123123123123",
      "settlement_date":"2020-10-19 17:16:17",
      // and other data that is passed by biller from vendor
    }
  }
}
```

This endpoint allows you to get the status of an inquiried bill.

#### HTTPS Request
**[Production]** `Coming Soon`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/v2/bill/list`

#### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_tx_id | String(255) | TRUE | Unique Payout ID which partner put on scheduled disburse creation

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
data | Object | Data object that wraps the response parameters
tx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
customer_id | String(255) | Customer ID for specific biller product
product_id | String(255) | OY's Biller ID, see [Biller Products List]
partner_tx_id | String(255) | Unique Payout ID for a specific request, generated by partner
customer_name | String(255) | Customer Name from biller
total_amount | BigDecimal | Bill's total amount (including admin fee, penalty, or other applicable fees)
additional_data | Object | Additional detailed data from biller

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
conn.request("GET", "/api/v2/bill/status", payload, headers)
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

This endpoint allows you to get the status of an inquiried bill.

#### HTTPS Request
**[Production]** `Coming Soon`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/v2/bill/products`

#### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
data | Object | Data object that wraps the response parameters
product_list | Array of Object | List of API Biller Product Object
product_id | String(255) | OY's Biller ID, see [Biller Products List]
description | String(255) | Product Description / Name
amount | BigDecimal | Bill's amount (excluding admin fee). Value will be 0 if bill is postpaid.
admin_fee | BigDecimal | Bill's total amount (including admin fee, penalty, or other applicable fees)
is_available | Boolean | Product availabilty 

## API Biller Response Codes

These are the list of possible response codes for API Offline:

Status         | State     | Meaning
-------------- | --------- | -------
000            | Final     | Inquiry or Payment Request has been completed (SUCCESS)
102            | Non-Final | Request is In Progress
300            | Final     | Transaction Failed (FAILED) 
400            | Final     | Transaction Pending (PENDING)

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


## Biller Products List
Here is the list of available bill products in our Biller Service

### Insurance
Product Id | Product Description
---------- | -------------------
BPJSKS	|	BPJS KESEHATAN
ASRJWS	|	ASURANSI JIWASRAYA/ASURANSI IFG LIFE
ASRTOKIOS	|	TOKIO MARINE
ASRBINT1	|	ASURANSI BINTANG PAKET 1
ASRBINT2	|	ASURANSI BINTANG PAKET 2
ASRCAR	|	CENTRAL ASIA RAYA
ASRPRU	|	PRUDENTIAL PREMI LANJUTAN

### PLN
Product Id | Product Description
---------- | -------------------
PLNPOST	|	PLN POSTPAID
PLNPRE	|	PLN PREPAID

### Internet
Product Id | Product Description
---------- | -------------------
TELKOM	|	TELKOM / TELKOM SPEEDY
MYREPUBLIC	|	MYREPUBLIC

### TV Cable
Product Id | Product Description
---------- | -------------------
TVBIG	|	BIG TV
TVINDVS	|	INDOVISION
TVINDVS	|	TOPTV
TVINDVS	|	OKEVISION
TVNEX	|	NEX MEDIA
TVTLKMV	|	TRANSVISION
TVTLKMV	|	TELKOMVISION
TVTLKMV	|	YESTV
TVTOPAS	|	TOPAS TV

### Multifinance
Product Id | Product Description
---------- | -------------------
ALF	|	AL IJARAH FINANCE
APF	|	ARTHA PRIMA FINANCE
BPFI	|	BATAVIA FINANCE
BMF	|	BIMA FINANCE
BPRKM	|	BPR KM
BPRNBP	|	BPR NBP
CITRA	|	CAKRAWALA CITRAMEGA MULTIFINANCE
EDV	|	ESTA DANA VENTURA
JGDR	|	JAGADIRI
KAMM	|	KOPERASI ANUGRAH MEGA MANDIRI
NRC	|	KOPERASI NRC
MDL	|	MANDALA
MTF	|	MANDIRI TUNAS FINANCE
MAF	|	MEGA AUTO FINANCE
MCF	|	MEGA CENTRAL FINANCE
MF	|	MEGA FINANCE
MBF	|	MIZUHO BALIMOR FINANCE
PMT	|	PERMATA FINANCE
DTPR	|	PRIMA PEGADAIAN
DTPU	|	PUTRA PEGADAIAN
SMMF	|	SINARMAS
SMF	|	SMART FINANCE
SOL	|	SOLITE
TOP	|	TOP FINANCE
TPF	|	TRANS PACIFIC
THR	|	TRIHAMAS FINANCE

### PDAM
Product Id | Product Description
---------- | -------------------
PDAMKAB.MOJOKERTO	| PDAM KAB MOJOKERTO
PDAMKAB.SIDOARJO	| PDAM KAB SIDOARJO
PDAMKAB.BOJONEGORO	| PDAM KAB BOJONEGORO
PDAMKAB.MALANG	| PDAM KAB MALANG
PDAMKAB.BOGOR	| PDAM KAB BOGOR
PDAMAETRA	| PDAM AETRA
PDAMPALYJA	| PDAM PALYJA
PDAMKAB.BANDUNG	| PDAM BANDUNG KOT
PDAMKAB.BANGKALAN	| PDAM BANGKALAN KAB
PDAMKAB.CILACAP	| PDAM CILACAP KAB
PDAMKAB.JEMBER	| PDAM JEMBER KAB
PDAMKOT.LAMPUNG	| PDAM LAMPUNG KOT
PDAMKOT.MATARAM	| PDAM MATARAM KOT
PDAMKOT.PALEMBANG	| PDAM PALEMBANG KOT
PDAMKAB.SEMARANG	| PDAM SEMARANG KAB
PDAMKOT.SURABAYA	| PDAM SURABAYA KOT
PDAMKAB.TAPIN	| PDAM TAPIN KAB
PDAMKETAPANG	|	PDAM KETAPANG
PDAMMAKASAR	|	PDAM MAKASAR

### PBB
Product Id | Product Description
---------- | -------------------
PBBDKI.JAKARTA	| PBB DKI JAKARTA
PBBKAB.BANDUNG	| PBB KAB. BANDUNG
PBBKAB.BANDUNGBARAT	| PBB KAB. BANDUNG BARAT
PBBKAB.BANJARNEGARA	| PBB KAB. BANJAR NEGARA
PBBKAB.BANYUMAS	| PBB KAB. BANYUMAS
PBBKAB.BATANG	| PBB KAB. BATANG
PBBKAB.BEKASICIKARANG	| PBB KAB. BEKASI CIKARANG
PBBKAB.BLORA	| PBB KAB. BLORA
PBBKAB.BOGORCIBINONG	| PBB KAB. BOGOR CIBINONG
PBBKAB.BOYOLALI	| PBB KAB BOYOLALI
PBBKAB.BREBES	| PBB KAB. BREBES
PBBKAB.CIAMIS	| PBB KAB. CIAMIS
PBBKAB.CIANJUR	| PBB KAB. CIANJUR
PBBKAB.CILACAP	| PBB KAB. CILACAP
PBBKAB.CIREBON	| PBB KAB. CIREBON
PBBKAB.DEMAK	| PBB KAB. DEMAK
PBBKAB.GARUT	| PBB KAB. GARUT
PBBKAB.GROBOGAN	| PBB KAB. GROBOGAN
PBBKAB.INDRAMAYU	| PBB KAB. INDRAMAYU
PBBKAB.JEPARA	| PBB KAB. JEPARA
PBBKAB.KARANGAYAR	| PBB KAB. KARANGAYAR
PBBKAB.KARAWANG	| PBB KAB. KARAWANG
PBBKAB.KEBUMEN	| PBB KAB. KEBUMEN
PBBKAB.KENDAL	| PBB KAB. KENDAL
PBBKAB.KLATEN	| PBB KAB. KLATEN
PBBKAB.KUDUS	| PBB KAB. KUDUS
PBBKAB.KUNINGAN	| PBB KAB. KUNINGAN
PBBKAB.LEBAK	| PBB KAB. LEBAK
PBBKAB.MAGELANG	| PBB KAB. MAGELANG
PBBKAB.MAJALENGKA	| PBB KAB. MAJALENGKA
PBBKAB.PANDEGLANG	| PBB KAB. PANDEGLANG
PBBKAB.PANGANDARAN	| PBB KAB. PANGANDARAN
PBBKAB.PATI	| PBB KAB.PATI
PBBKAB.PEKALONGAN	| PBB KAB. PEKALONGAN
PBBKAB.PEMALANG	| PBB KAB. PEMALANG
PBBKAB.PURBALINGGA	| PBB KAB.PURBALINGGA
PBBKAB.PURWAKARTA	| PBB KAB. PURWAKARTA
PBBKAB.PURWOREJO	| PBB KAB. PURWOREJO
PBBKAB.REMBANG	| PBB KAB. REMBANG
PBBKAB.SEMARANG	| PBB KAB. SEMARANG
PBBKAB.SERANG	| PBB KAB. SERANG
PBBKAB.SRAGEN	| PBB KAB. SRAGEN
PBBKAB.SUBANG	| PBB KOTA SUBANG
PBBKAB.SUKABUMI	| PBB KAB. SUKABUMI
PBBKAB.SUKAHARJO	| PBB KAB. SUKAHARJO
PBBKAB.SUMEDANG	| PBB KAB. SUMEDANG
PBBKAB.TANGERANG	| PBB KAB. TANGERANG
PBBKAB.TASIKMALAYA	| PBB KAB. TASIKMALAYA
PBBKAB.TEGAL	| PBB KAB.TEGAL
PBBKAB.TEMANGGUNG	| PBB KAB. TEMANGGUNG
PBBKAB.WONOGIRI	| PBB KAB.WONOGIRI
PBBKAB.WONOSOBO	| PBB KAB. WONOSOBO
PBBKOT.BANDUNG	| PBB KOTA BANDUNG
PBBKOT.BANJAR	| PBB KOTA BANJAR
PBBKOT.BATAM	| PBB KOTA BATAM
PBBKOT.BEKASI	| PBB KOTA BEKASI
PBBKOT.BOGOR	| PBB KOTA BOGOR
PBBKOT.CILEGON	| PBB KOTA CILEGON
PBBKOT.CIMAHI	| PBB KOTA CIMAHI
PBBKOT.CIREBON	| PBB KOTA CIREBON
PBBKOT.DEPOK	| PBB KOTA DEPOK
PBBKOT.MAGELANG	| PBB KOTA MAGELANG
PBBKOT.PEKALONGAN	| PBB KOTA PEKALONGAN
PBBKOT.PEKANBARU	| PBB KOTA PEKAN BARU
PBBKOT.SALATIGA	| PBB KOTA SALATIGA
PBBKOT.SEMARANG	| PBB KOTA SEMARANG
PBBKOT.SERANG	| PBB KOTA SERANG
PBBKOT.SUKABUMI	| PBB KOTA SUKABUMI
PBBKOT.SURAKARTA	| PBB KOTA SURAKARTA
PBBKOT.TANGERANG	| PBB KOTA TANGERANG
PBBKOT.TANGERANGSELATAN	| PBB KOTA TANGERANG SELATAN
PBBKOT.TASIKMALAYA	| PBB KOTA TASIKMALAYA
PBBKOT.TEGAL	| PBB KOTA TEGAL

### Voucher
Product Id | Product Description
---------- | -------------------
AS100	|	AS 100.000
AS10	|	AS 10.000
AS25	|	AS 25.000
AS50	|	AS 50.000
AS5	|	AS 5.000
SIM100	|	SIMPATI 100.000
SIM10	|	SIMPATI 10.000
SIM20	|	SIMPATI 20.000
SIM50	|	SIMPATI 50.000
SIM5	|	SIMPATI 5.000
MR20	|	MENTARI REGULAR 20.000
MR100	|	MENTARI REGULAR 100.000
MR10	|	MENTARI REGULAR 10.000
MR25	|	MENTARI REGULAR 25.000
MR50	|	MENTARI REGULAR 50.000
MR5	|	MENTARI REGULAR 5.000
IMR100	|	IM3 REGULAR 100.000
IMR10	|	IM3 REGULAR 10.000
IMR25	|	IM3 REGULAR 25.000
IMR50	|	IM3 REGULAR 50.000
IMR5	|	IM3 REGULAR 5.000
IMR20	|	IM3 REGULAR 20.000
AXP100	|	AXIS 100.000
AXP10	|	AXIS 10.000
AXP25	|	AXIS 25.000
AXP50	|	AXIS 50.000
AXP5	|	AXIS 5.000
XLV100	|	XL VOUCHER 100.000
XLV10	|	XL VOUCHER 10.000
XLV25	|	XL VOUCHER 25.000
XLV50	|	XL VOUCHER 50.000
XLV5	|	XL VOUCHER 5.000