# API International Transfer

## Get Fx Rate

```shell
curl -X \
POST https://partner.oyindonesia.com/api/international/fx-rate \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "destination_country_code": "SG",
  "destination_currency_code": "SGD",
  "source_amount": 200000,
  "destination_amount": ""
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/international/fx-rate'));
request.body = json.encode({
  "destination_country_code": "SG",
  "destination_currency_code": "SGD",
  "source_amount": 15000,
  "destination_amount": ""
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

  url := "%7B%7Bbase_url%7D%7D/api/international/fx-rate"
  method := "POST"

  payload := strings.NewReader(`{
    "destination_country_code": "SG",
    "destination_currency_code": "SGD",
    "source_amount": 15000,
    "destination_amount": ""
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"destination_country_code\": \"SG\",\n\t\"destination_currency_code\": \"SGD\",\n\t\"source_amount\": 200000,\n\t\"destination_amount\": \"\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/international/fx-rate")
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
  destination_country_code: "SG",
  destination_currency_code: "SGD",
  source_amount: 200000,
  destination_amount: "",
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/international/fx-rate");
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
$request->setUrl('{{base_url}}/api/international/fx-rate');
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
$request->setBody('{\n\t\"destination_country_code\": \"SG\",\n\t\"destination_currency_code\": \"SGD\",\n\t\"source_amount\": 200000,\n\t\"destination_amount\": \"\"\n}');
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
  "destination_country_code": "SG",
  "destination_currency_code": "SGD",
  "source_amount": 200000,
  "destination_amount": ""
}
)
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/international/fx-rate", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> Response for valid request (transaction will processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "source_amount": {
    "value": 200000,
    "currency": "IDR"
  },
  "destination_amount": {
    "value": "14.97",
    "currency": "SGD"
  },
  "fx_rate": 0.0001,
  "transfer_fee": {
    "value": 50300,
    "currency": "IDR"
  }
}
```

> Response for invalid request (transaction will rejected & not processed in the OY! system):

```json
Status: 400 Bad Request

{
  "status": {
    "code": "990",
    "message": "Destination Country Code is required"
  },
  "source_amount": null,
  "destination_amount": null,
  "fx_rate": null,
  "transfer_fee": null
}

```

Use this API to get the latest Exchange Rate information.

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/international/fx-rate`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/international/fx-rate`

### Request Parameters

| Parameter                 | Type       | Required | Description                                                     |
| ------------------------- | ---------- | -------- | --------------------------------------------------------------- |
| destination_country_code  | String(2)  | TRUE     | Destination Country Code. Two-letter ISO 3166-2 country code.   |
| destination_currency_code | String(3)  | TRUE     | Destination Currency Code. Three-letter ISO 4217 currency code. |
| source_amount             | BigInteger | FALSE    | Amount in source currency (IDR).                                |

Minimum Source Amount: IDR 200,000.
Maximum Source Amount: depends on each corridor.
SG/SGD: IDR 35,000,000
SG/USD: 1,450,000,000
CN/CNH: 35,000,000
CN/USD: 1,450,000,000
HK/HKD: 35,000,000
HK/USD: 1,450,000,000
|
| destination_amount | String(255) | FALSE | Amount in destination currency (with 2-digit decimal). Must be greater than 0.00 in any currency.|

### Response Parameters

| Parameter | Type   | Description                                                                                                                                                                               |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status    | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. |

`{code: <status_code>, message: <status_message>}`
|
| source_amount | Object | |
| value | BigInteger | Amount in source currency |
| currency | String | Amount Currency Code. Currently, only available for IDR. |
| destination_amount | Object | |
| value | BigInteger | Amount in destination currency (with 2-digit decimal). |
| currency | String | Destination Currency Code. Three-letter ISO 4217 currency code. |
| fx_rate | BigInteger | Conversion rate |
| transfer_fee | Object | |
| value | BigInteger | Transaction fee |
| currency | String | Transaction Fee Currency Code. Currently, only available for IDR. |

## Get Corridor Active

```shell
curl -X \
GET https://partner.oyindonesia.com/api/international/active-corridors \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/international/active-corridors'));
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

  url := "%7B%7Bbase_url%7D%7D/api/international/active-corridors"
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
Request request = new Request.Builder()
  .url("{{base_url}}/api/international/active-corridors")
  .method("GET", body)
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

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/international/active-corridors");
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
$request->setUrl('{{base_url}}/api/international/active-corridors');
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
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("GET", "/api/international/active-corridors", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> Response for valid request (transaction will processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "active_corridors": [
    {
      "currency": {
        "currency_code": "CNH",
        "currency_name": "Chinese Yuan Offshore"
      },
      "country_list": [
        {
          "country_code": "CN",
          "country_name": "China"
        }
      ]
    },
    {
      "currency": {
        "currency_code": "HKD",
        "currency_name": "Hong Kong Dollar"
      },
      "country_list": [
        {
          "country_code": "HK",
          "country_name": "Hong Kong"
        }
      ]
    },
    {
      "currency": {
        "currency_code": "SGD",
        "currency_name": "Singapore Dollar"
      },
      "country_list": [
        {
          "country_code": "SG",
          "country_name": "Singapore"
        }
      ]
    },
    {
      "currency": {
        "currency_code": "USD",
        "currency_name": "United States Dollar"
      },
      "country_list": [
        {
          "country_code": "CN",
          "country_name": "China"
        },
        {
          "country_code": "HK",
          "country_name": "Hong Kong"
        },
        {
          "country_code": "SG",
          "country_name": "Singapore"
        }
      ]
    }
  ]
}
```

> Response for invalid request (transaction will rejected & not processed in the OY! system):

```json
Status: 400 Bad Request

{
  "status": {
    "code": "208",
    "message": "API Key is not valid"
  },
  "active_corridors": null
}


```

Use this API to get the latest active corridor information on a given Client.

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/international/active-corridors`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/international/active-corridors`

### Response Parameters

| Parameter | Type   | Description                                                                                                                                                                               |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status    | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. |

`{code: <status_code>, message: <status_message>}`
|
| active_corridors | Array | |
| currency | Object | |
| currency_code | String | Destination Currency Code. Three-letter ISO 4217 currency code. |
| currency_name | String | Description of destination currency code |
| country_list | Object | |
| country_code | String | Destination Country Code. Two-letter ISO 3166-2 country code. |
| country_name | String | Description of destination country code |

## Create Conversion Quotation

```shell
curl -X \
POST https://partner.oyindonesia.com/api/international/quotation \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "quotation_id": "TRX20250325001",
  "destination_country_code": "SG",
  "destination_currency_code": "SGD",
  "source_amount": 200000,
  "destination_amount": ""
}	'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/international/quotation'));
request.body = json.encode({
  "quotation_id": "TRX20250325001",
  "destination_country_code": "SG",
  "destination_currency_code": "SGD",
  "source_amount": 200000,
  "destination_amount": ""
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

  url := "%7B%7Bbase_url%7D%7D/api/international/quotation"
  method := "POST"

  payload := strings.NewReader(`{
  "quotation_id": "TRX20250325001",
  "destination_country_code": "SG",
  "destination_currency_code": "SGD",
  "source_amount": 200000,
  "destination_amount": ""
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"quotation_id\": \"TRX20250325001\",\n\t\"destination_country_code\": \"SG\",\n\t\"destination_currency_code\": \"SGD\",\n\t\"source_amount\": 200000,\n\t\"destination_amount\": \"\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/international/quotation")
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
  destination_country_code: "SG",
  destination_currency_code: "SGD",
  source_amount: 200000,
  destination_amount: "",
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/international/quotation");
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
$request->setUrl('{{base_url}}/api/international/quotation');
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
$request->setBody('{\n\t"quotation_id": "TRX20250325001",\n\t"destination_country_code": "SG",\n\t"destination_currency_code": "SGD",\n\t"source_amount": 200000,\n\t"destination_amount": ""\n}');
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
  "quotation_id": "TRX20250325001",
  "destination_country_code": "SG",
  "destination_currency_code": "SGD",
  "source_amount": 200000,
  "destination_amount": ""
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/international/quotation", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> Response for valid request (transaction will processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "tx_id": "049fa1a6-e051-4ec2-aff5-ffc601c3ce0c",
  "quotation_id": "TRX20250325001",
  "source_amount": 200000,
  "source_currency_code": "IDR",
  "destination_amount": "14.97",
  "destination_currency_code": "SGD",
  "fx_rate": 0.0001,
  "transfer_fee": 50300,
  "converted_amount": 149700,
  "expiry_time": "2025-03-25 00:30:00",
  "created_time": "2025-03-25 00:00:00"
}
```

> Response for invalid request (transaction will rejected & not processed in the OY! system):

```json
{
  "status": {
    "code": "990",
    "message": "Quotation ID is required"
  },
  "tx_id": null,
  "quotation_id": "TRX20250325001",
  "source_amount": 200000,
  "source_currency_code": "IDR",
  "destination_amount": null,
  "destination_currency_code": "SGD",
  "fx_rate": null,
  "transfer_fee": null,
  "converted_amount": null,
  "expiry_time": null,
  "created_time": null
}
```

Use this API to create a new Conversion Quotation.

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/international/quotation`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/international/quotation`

### Request Parameters

| Parameter                 | Type       | Required | Description                                                                                                |
| ------------------------- | ---------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| quotation_id              | String(64) | TRUE     | Unique Reference ID for a specific request, generated by the Client. Accepts only alphanumeric characters. |
| destination_country_code  | String(2)  | TRUE     | Destination Country Code. Two-letter ISO 3166-2 country code.                                              |
| destination_currency_code | String(3)  | TRUE     | Destination Currency Code. Three-letter ISO 4217 currency code.                                            |
| source_amount             | BigInteger | FALSE    | Amount in source currency (IDR).                                                                           |

Minimum Source Amount: IDR 200,000.
Maximum Source Amount: depends on each corridor.
SG/SGD: IDR 35,000,000
SG/USD: 1,450,000,000
CN/CNH: 35,000,000
CN/USD: 1,450,000,000
HK/HKD: 35,000,000
HK/USD: 1,450,000,000
|
| destination_amount | String(255) | FALSE | Amount in destination currency (with 2-digit decimal). Must be greater than 0.00 in any currency.|

### Response Parameters

| Parameter | Type   | Description                                                                                                                                                                               |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status    | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. |

`{code: <status_code>, message: <status_message>}`
|
| tx_id | String | Unique Transaction ID, generated by OY! |
| quotation_id | String | Unique Reference ID for a specific request, generated by the Client |
| source_amount | BigInteger | Amount in source currency |
| source_currency_code | String | Amount Currency Code. Currently, only available for IDR |
| destination_amount | String | Amount in destination currency (with 2-digit decimal). |
| destination_currency_code | String | Destination Currency Code. Three-letter ISO 4217 currency code. |
| fx_rate | BigInteger | Conversion rate |
| transfer_fee | BigInteger | Transaction fee |
| converted_amount | BigInteger | Source Amount imposed by Transfer Fee, will be converted to the Amount in destination currency. |
| expiry_time | Date | Validity of Quotation (in GMT+0) |
| created_time | Date | Conversion rate creation datetime (in GMT+0) |

## Upload Document

```shell
curl -X \
POST https://partner.oyindonesia.com/api/international/upload-document/:quotation_id \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-F 'document={file}' \
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/international/upload-document/:quotation_id'));
var filePath = 'file-path';
request.files.add(await http.MultipartFile.fromPath('document', filePath));
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

  url := "%7B%7Bbase_url%7D%7D/api/international/upload-document/:quotation_id"
  method := "POST"

  var body bytes.Buffer
  writer := multipart.NewWriter(&body)

  filePath := "/path/to/document.pdf" // Replace with the actual local file path
  file, err := os.Open(filePath)
  if err != nil {
	fmt.Println("Error opening file:", err)
	return
  }
  defer file.Close()

  part, err := writer.CreateFormFile("document", filepath.Base(filePath))
  if err != nil {
    fmt.Println("Error creating form file:", err)
	return
  }
  _, err = io.Copy(part, file)
  if err != nil {
    fmt.Println("Error copying file content:", err)
	return
  }

  if err := writer.Close(); err != nil {
    fmt.Println("Error closing writer:", err)
	return
  }

  client := &http.Client {
  }

  req, err := http.NewRequest(method, url, &body)
  if err != nil {
	fmt.Println("Error creating request:", err)
	return
  }

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

File file = new File("/path/to/document.pdf");
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = new MultipartBody.Builder()
    .setType(MultipartBody.FORM)
    .addFormDataPart("document", file.getName(),
    RequestBody.create(file, MediaType.parse("application/octet-stream"))).build();
Request request = new Request.Builder()
  .url("{{base_url}}/api/international/upload-document/:quotation_id")
  .method("POST", body)
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

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

var formData = new FormData();
var fileInput = document.querySelector('input[type="file"]');
if (fileInput && fileInput.files.length > 0) {
  formData.append("document", fileInput.files[0]);
} else {
  console.error("No file selected");
  return;
}

xhr.open(
  "POST",
  "%7B%7Bbase_url%7D%7D/api/international/upload-document/:quotation_id"
);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send(formData);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/international/upload-document/:quotation_id');
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
$filePath = '/path/to/document.pdf';
$request->addUpload('document', $filePath, basename($filePath), 'application/octet-stream');
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

> Response for valid request (transaction will processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "quotation_id": "TRX20250325001",
  "document_url": "pejetaja/049fa1a6-e051-4ec2-aff5-ffc601c3ce0c/document_file_name.png"
}
```

> Response for invalid request (transaction will rejected & not processed in the OY! system):

```json
{
  "status": {
    "code": "990",
    "message": "Only PNG, JPG, PDF, DOCX, and XLSX formats are allowed"
  },
  "quotation_id": null,
  "document_url": null
}
```

Use this API to upload a supporting document for a specific transaction (such as an Invoice).

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/international/upload-document/:quotation_id`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/international/upload-document/:quotation_id`

### Request Parameters

| Parameter | Type | Required | Description                          |
| --------- | ---- | -------- | ------------------------------------ |
| document  | File | TRUE     | Attachments to support transactions. |

Only available for a Quotation ID that is still in validity period and does not have status = IN_PROGRESS, SUCCESS, or FAILED.
Only available for PNG, JPG, PDF, DOCX, and XLSX formats.
Maximum 10 MB per attachment.
Maximum 10 attachments per Quotation ID.
|

### Response Parameters

| Parameter | Type   | Description                                                                                                                                                                               |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status    | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. |

`{code: <status_code>, message: <status_message>}`
|
| quotation_id | String | Unique Reference ID for a specific request, generated by the Client |
| document_url | String | Uploaded document path |
