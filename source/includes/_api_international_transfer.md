# International Transfer API

The International Transfer API allows businesses in Indonesia to seamlessly send cross-border payments to recipients in supported destination countries. It supports secure, compliant, and efficient international transfers for both personal and business recipients.

## Get Bank List

```shell
curl -X \
GET https://partner.oyindonesia.com/api/international/banks?destination_country_code=SG \
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
var request = http.Request('GET', Uri.parse('{{base_url}}/api/international/banks?destination_country_code=SG'));
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

  url := "%7B%7Bbase_url%7D%7D/api/international/banks?destination_country_code=SG"
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
  .url("{{base_url}}/api/international/banks?destination_country_code=SG")
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/international/banks?destination_country_code=SG");
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
$request->setUrl('{{base_url}}/api/international/banks?destination_country_code=SG');
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
conn.request("GET", "/api/international/banks?destination_country_code=SG", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> API Response for Valid Request (Transaction will be processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "banks": [
    {
      "bank_country": "SG",
      "bank_details": [
        {
          "bank_name": "Oversea-Chinese Banking Corporation Limited [OCBC Bank]",
          "bank_code": "TSSG0034"
        },
        {
          "bank_name": "Svenska Handelsbanken, Singapore Branch",
          "bank_code": "TSSG0043"
        }
      ]
    }
  ]
}
```

> API Response for Invalid Request (Transaction will be rejected and not processed in the OY! system):

```json
{
  "status": {
    "code": "990",
    "message": "Destination Country Code is not valid"
  },
  "banks": null
}
```

This endpoint is used to get a list of available Destination Banks for International Transfer API transactions in all Destination Countries.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/international/banks?destination_country_code=:destination_country_code`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/international/banks?destination_country_code=:destination_country_code`

### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
destination_country_code | String(2) | TRUE | Destination Country Code. Two-letter ISO 3166-2 country code.

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}` <br><br>See [Response Codes & Messages](#response-codes-amp-messages-get-bank-list) for more details.
banks | Object |  
bank_country | String | Destination Country Code. Two-letter ISO 3166-2 country code. 
bank_details | Object |  
bank_name | String | Bank Name 
bank_code | String | Bank Code 

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive International Transfer API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 400 Bad Request | 990 | Destination Country Code is required | Indicates that the destination_country_code parameter is missing from the request or contains an empty value. |
| 400 Bad Request | 990 | Destination Country Code is not valid | Indicates that the destination_country_code parameter does not match any valid ENUM value or contains an invalid value (e.g., OY). |
| 400 Bad Request | 990 | Destination Country Code must be 2 characters | Indicates that the destination_country_code parameter contains a value of less than or more than 2 characters. |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |

## Get Active Corridors

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

> API Response for Valid Request (Transaction will be processed in the OY! system):

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
          "country_code": "SG",
          "country_name": "Singapore"
        },
        {
          "country_code": "HK",
          "country_name": "Hong Kong"
        }
      ]
    }
  ]
}
```

> API Response for Invalid Request (Transaction will be rejected and not processed in the OY! system):

```json
{
  "status": {
    "code": "208",
    "message": "API Key is not valid"
  },
  "active_corridors": null
}
```

This endpoint is used to get the latest active corridor information in your account.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/international/active-corridors`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/international/active-corridors`

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}` <br><br>See [Response Codes & Messages](#response-codes-amp-messages-get-active-corridors) for more details.
active_corridors | Array | 
currency | Object | 
currency_code | String | Destination Currency Code. Three-letter ISO 4217 currency code.
currency_name | String | Description of Destination Currency Code
country_list | Object | 
country_code | String | Destination Country Code. Two-letter ISO 3166-2 country code.
country_name | String | Description of Destination Country Code

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive International Transfer API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |


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

  url := "%7B%7Bbase_url%7D%7D/api/international/fx-rate"
  method := "POST"

  payload := strings.NewReader(`{
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

> API Response for Valid Request (Transaction will be processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "fx_rate": 0.0000783637814888146,
  "transfer_fee": {
    "value": 64478,
    "currency": "IDR"
  },
  "source_amount": {
    "value": 200000,
    "currency": "IDR"
  },
  "destination_amount": {
    "value": 10.62,
    "currency": "SGD"
  }
}
```

> API Response for Invalid Request (Transaction will be rejected and not processed in the OY! system):

```json
{
  "status": {
    "code": "990",
    "message": "Destination Country Code is required"
  },
  "fx_rate": null,
  "transfer_fee": null,
  "source_amount": null,
  "destination_amount": null
}
```

This endpoint is used to get the latest Exchange Rate information.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/international/fx-rate`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/international/fx-rate`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
destination_country_code | String(2) | TRUE | Destination Country Code. Two-letter ISO 3166-2 country code.
destination_currency_code | String(3) | TRUE | Destination Currency Code. Three-letter ISO 4217 currency code.
source_amount | Number | FALSE | Amount in source currency (IDR). <br><br>• **Minimum Source Amount**: IDR 200,000. <br>• **Maximum Source Amount**: depends on each corridor.<br><br> <table> <thead> <tr> <th>Country</th> <th>Currency</th> <th>Maximum Amount (IDR)</th> </tr> </thead>  <tbody> <tr> <td>SG</td> <td>SGD</td> <td>35,000,000</td> </tr> <tr> <td>SG</td> <td>USD</td> <td>1,450,000,000</td> </tr> <tr> <td>CN</td> <td>CNH</td> <td>35,000,000</td> </tr> <tr> <td>CN</td> <td>USD</td> <td>1,450,000,000</td> </tr> <tr> <td>HK</td> <td>HKD</td> <td>35,000,000</td> </tr> <tr> <td>HK</td> <td>USD</td> <td>1,450,000,000</td> </tr> </tbody> </table>
destination_amount | String | FALSE | Amount in destination currency (with 2-digit decimal). Must be greater than 0.00 in any currency.

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}` <br><br>See [Response Codes & Messages](#response-codes-amp-messages-get-fx-rate) for more details.
fx_rate | BigDecimal | Conversion rate
transfer_fee | Object | 
value | Number | Transaction fee
currency | String | Transaction Fee Currency Code. Currently, only available for IDR.
source_amount | Object | 
value | Number | Amount in source currency
currency | String | Source Amount Currency Code. Currently, only available for IDR.
destination_amount | Object | 
value | Number | Amount in destination currency (with 2-digit decimal)
currency | String | Destination Currency Code. Three-letter ISO 4217 currency code.

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive International Transfer API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 400 Bad Request | 990 | Destination Country Code is required | Indicates that the destination_country_code parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Destination Country Code is not valid | Indicates that the destination_country_code parameter does not match any valid ENUM value or contains an invalid value (e.g., OY). |
| 400 Bad Request | 990 | Destination Country Code must be 2 characters | Indicates that the destination_country_code parameter contains a value of less than or more than 2 characters. |
| 400 Bad Request | 990 | Destination Currency Code is required | Indicates that the destination_currency_code parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Destination Currency Code is not valid | Indicates that the destination_currency_code parameter does not match any valid ENUM value or contains an invalid value (e.g., IDR). |
| 400 Bad Request | 990 | Destination Currency Code must be 3 characters | Indicates that the destination_currency_code parameter contains a value of less than or more than 3 characters. |
| 400 Bad Request | 990 | Source Amount or Destination Amount is required | Indicates that both source_amount and destination_amount parameters are missing from the request or contain an empty or null value. |
| 400 Bad Request | 990 | Source Amount must be between IDR 200,000 and IDR <maximum_amount> | Indicates that the source_amount parameter contains a value of less than IDR 200,000 or more than the Maximum Amount per corridor. |
| 400 Bad Request | 990 | Source Amount must be numeric | Indicates that the source_amount parameter contains a non-numeric value. |
| 400 Bad Request | 990 | Destination Amount must be greater than 0.00 | Indicates that the destination_amount parameter contains a value equal to 0.00. |
| 400 Bad Request | 990 | Destination Amount must be numeric with 2 decimal digits | Indicates that the destination_amount parameter contains a non-numeric value or a numeric value without 2 decimal places. |
| 403 Forbidden | 403 | Destination ${destination_country_code} with currency ${destination_currency_code} is not yet configured for your account | Indicates that the selected corridor is not configured for the provided account. |
| 503 Service Unavailable | 503 | Destination ${destination_country_code} with currency ${destination_currency_code} is currently unavailable | Indicates that the selected corridor is configured for the provided account, but is temporarily unavailable in OY!. |
| 500 Server Error | 500 | Failed to calculate price | Indicates that the request is valid, but the system cannot process it due to business logic failures (e.g., conversion issue). |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |

## Create Conversion Quotation

```shell
curl -X \
POST https://partner.oyindonesia.com/api/international/quotation \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "quotation_id": "TRX20250504001",
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
  "quotation_id": "TRX20250504001",
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
  "quotation_id": "TRX20250504001",
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"quotation_id\": \"TRX20250504001\",\n\t\"destination_country_code\": \"SG\",\n\t\"destination_currency_code\": \"SGD\",\n\t\"source_amount\": 200000,\n\t\"destination_amount\": \"\"\n}");
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
  quotation_id: "TRX20250504001",
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
$request->setBody('{\n\t"quotation_id": "TRX20250504001",\n\t"destination_country_code": "SG",\n\t"destination_currency_code": "SGD",\n\t"source_amount": 200000,\n\t"destination_amount": ""\n}');
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
  "quotation_id": "TRX20250504001",
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

> API Response for Valid Request (Transaction will be processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "tx_id": "9ca6e105-89bd-43ba-9346-641e09e9d574",
  "quotation_id": "TRX20250504001",
  "source_amount": 200000,
  "source_currency_code": "IDR",
  "destination_amount": "11.53",
  "destination_currency_code": "SGD",
  "fx_rate": 0.0000827042978087322,
  "transfer_fee": 60587,
  "converted_amount": 139413,
  "expiry_time": "2025-05-04 15:00:35",
  "created_time": "2025-05-04 14:30:35"
}
```

> API Response for Invalid Request (Transaction will be rejected and not processed in the OY! system):

```json
{
  "status": {
    "code": "990",
    "message": "Quotation ID is required"
  },
  "tx_id": null,
  "quotation_id": null,
  "source_amount": null,
  "source_currency_code": null,
  "destination_amount": null,
  "destination_currency_code": null,
  "fx_rate": null,
  "transfer_fee": null,
  "converted_amount": null,
  "expiry_time": null,
  "created_time": null
}
```

This endpoint is used to create a new Conversion Quotation.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/international/quotation`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/international/quotation`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
quotation_id | String(8,64) | TRUE | Unique Reference ID for a specific request, generated by the Client. Accepts only alphanumeric characters.
destination_country_code | String(2) | TRUE | Destination Country Code. Two-letter ISO 3166-2 country code.
destination_currency_code | String(3) | TRUE | Destination Currency Code. Three-letter ISO 4217 currency code.
source_amount | Number | FALSE | Amount in source currency (IDR). <br><br>• **Minimum Source Amount**: IDR 200,000. <br>• **Maximum Source Amount**: depends on each corridor.<br><br> <table> <thead> <tr> <th>Country</th> <th>Currency</th> <th>Maximum Amount (IDR)</th> </tr> </thead>  <tbody> <tr> <td>SG</td> <td>SGD</td> <td>35,000,000</td> </tr> <tr> <td>SG</td> <td>USD</td> <td>1,450,000,000</td> </tr> <tr> <td>CN</td> <td>CNH</td> <td>35,000,000</td> </tr> <tr> <td>CN</td> <td>USD</td> <td>1,450,000,000</td> </tr> <tr> <td>HK</td> <td>HKD</td> <td>35,000,000</td> </tr> <tr> <td>HK</td> <td>USD</td> <td>1,450,000,000</td> </tr> </tbody> </table>
destination_amount | String | FALSE | Amount in destination currency (with 2-digit decimal). Must be greater than 0.00 in any currency.

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}` <br><br>See [Response Codes & Messages](#response-codes-amp-messages-create-conversion-quotation) for more details.
tx_id | String | Unique Transaction ID, generated by OY!
quotation_id | String | Unique Reference ID for a specific request, generated by the Client
source_amount | Number | Amount in source currency
source_currency_code | String | Source Amount Currency Code. Currently, only available for IDR.
destination_amount | String | Amount in destination currency (with 2-digit decimal)
destination_currency_code | String | Destination Currency Code. Three-letter ISO 4217 currency code.
fx_rate | BigDecimal | Conversion rate
transfer_fee | Number | Transaction fee
converted_amount | Number | Source Amount imposed by Transfer Fee, will be converted to the Amount in destination currency.
expiry_time | Date | Validity of Quotation (in GMT+0)
created_time | Date | Conversion rate creation datetime  (in GMT+0)

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive International Transfer API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 402 Payment Required | 206 | Balance is not enough | • Indicates that the request was made while the Client’s Available Balance is below the minimum amount of IDR 200,000. <br>• Indicates that the request was made with a Send Amount that exceeds the Client’s Available Balance. <br>• Indicates that the send_amount, as calculated from the destination_amount conversion, exceeds the Client’s Available Balance. <br><br>This case applies if the Client uses Real Balance for their account. |
| 400 Bad Request | 990 | Quotation ID is required | Indicates that the quotation_id parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Quotation ID must be between 8 and 64 characters long | Indicates that the quotation_id parameter contains a value of less than 8 characters or more than 64 characters. |
| 400 Bad Request | 990 | Quotation ID must contain only alphanumeric characters | Indicates that the quotation_id parameter contains a non-alphanumeric value. |
| 400 Bad Request | 203 | Duplicate Quotation ID | Indicates that the quotation_id has already been used before. |
| 400 Bad Request | 990 | Destination Country Code is required | Indicates that the destination_country_code parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Destination Country Code is not valid | Indicates that the destination_country_code parameter does not match any valid ENUM value or contains an invalid value (e.g., OY). |
| 400 Bad Request | 990 | Destination Country Code must be 2 characters | Indicates that the destination_country_code parameter contains a value of less than or more than 2 characters. |
| 400 Bad Request | 990 | Destination Currency Code is required | Indicates that the destination_currency_code parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Destination Currency Code is not valid | Indicates that the destination_currency_code parameter does not match any valid ENUM value or contains an invalid value (e.g., IDR). |
| 400 Bad Request | 990 | Destination Currency Code must be 3 characters | Indicates that the destination_currency_code parameter contains a value of less than or more than 3 characters. |
| 400 Bad Request | 990 | Source Amount or Destination Amount is required | Indicates that both source_amount and destination_amount contain empty and null values, and the request is missing source_amount and destination_amount parameters. |
| 400 Bad Request | 990 | Source Amount must be between IDR 200,000 and IDR <maximum_amount> | Indicates that the source_amount parameter is invalid – either the source_amount is below IDR 200,000 or exceeds the Maximum Amount allowed per corridor, or the converted send_amount from the destination_amount is below IDR 200,000. |
| 400 Bad Request | 990 | Source Amount must be numeric | Indicates that the source_amount parameter contains a non-numeric value. |
| 400 Bad Request | 990 | Destination Amount must be greater than 0.00 | Indicates that the destination_amount parameter contains a value equal to 0.00. |
| 400 Bad Request | 990 | Destination Amount must be numeric with 2 decimal digits | Indicates that the destination_amount parameter contains a non-numeric value or a numeric value without 2 decimal places. |
| 403 Forbidden | 403 | Destination ${destination_country_code} with currency ${destination_currency_code} is not yet configured for your account | Indicates that the selected corridor is not configured for the provided account. |
| 503 Service Unavailable | 503 | Destination ${destination_country_code} with currency ${destination_currency_code} is currently unavailable | Indicates that the selected corridor is configured for the provided account, but is temporarily unavailable in OY!. |
| 500 Server Error | 500 | Failed to calculate price | Indicates that the request is valid, but the system cannot process it due to business logic failures (e.g., conversion issue). |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |

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

  filePath := "/path/to/document.pdf" // Replace with actual local document path
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

```python
import requests

url = "https://{{base_url}}/api/international/upload-document/:quotation_id"
headers = {
    'Accept': 'application/json',
    'x-oy-username': '{{username}}',
    'x-api-key': '{{api-key}}'
}
files = {
    "document": ("document.pdf", open("path/to/your/document.pdf", "rb"), "application/pdf")
}

response = requests.post(url, headers=headers, data=data, files=files)

print(response.text)
```

> API Response for Valid Request (Transaction will be processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "quotation_id": "TRX20250504001",
  "document_url": "username/TRX20250504001/document_file_name.png"
}
```

> API Response for Invalid Request (Transaction will be rejected and not processed in the OY! system):

```json
{
  "status": {
    "code": "213",
    "message": "Only PNG, JPG, PDF, DOCX, and XLSX formats are allowed"
  },
  "quotation_id": null,
  "document_url": null
}
```

This endpoint is used to upload a supporting document for a specific Quotation ID (such as an Invoice file). Only available for a Quotation ID that is still in the validity period and does not have status = IN_PROGRESS, SUCCESS, or FAILED.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/international/upload-document/:quotation_id`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/international/upload-document/:quotation_id`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
document | File | TRUE | Attachments to support transactions. <br><br>• Only available for PNG, JPG, PDF, DOCX, and XLSX formats. <br>• Maximum 10 MB per attachment. <br>• Maximum 10 attachments per Quotation ID.

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}` <br><br>See [Response Codes & Messages](#response-codes-amp-messages-upload-document) for more details.
quotation_id | String | Unique Reference ID for a specific request, generated by the Client
document_url | String | Uploaded document path

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive International Transfer API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 400 Bad Request | 990 | Quotation ID is required | Indicates that the Quotation ID value in the URL is missing from the request. |
| 404 Not Found | 204 | Quotation ID is not found | Indicates that the Quotation ID value in the URL contains a value that does not exist in the database. |
| 400 Bad Request | 203 | Quotation ID is running or has been completed | Indicates that the Quotation ID used in the request is not in the INITIATED status, such as: IN_PROGRESS, SUCCESS, or FAILED. |
| 410 Gone | 222 | Quotation ID has expired | Indicates that the Quotation ID used in the request has status INITIATED, but has expired. |
| 400 Bad Request | 990 | Document File  is required | Indicates that the document parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 203 | Duplicate Document File | Indicates that a document with the same file name and extension has already been successfully uploaded. |
| 415 Unsupported Media Type | 213 | Only PNG, JPG, PDF, DOCX, and XLSX formats are allowed | Indicates that the document has an unsupported file extension. |
| 413 Payload Too Large | 214 | File size exceeds the 10 MB limit | Indicates that the document exceeds the maximum allowed file size of 10 MB. |
| 400 Bad Request | 990 | Transaction already has 10 attachments and cannot accept more | Indicates that the Quotation ID already has 10 documents uploaded and cannot accept more. |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |

## Create Transfer

```shell
curl -X \
POST https://partner.oyindonesia.com/api/international/transfer \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "quotation_id": "TRX20250504001",
  "source_of_fund": "BI",
  "purpose_of_transfer": "SS",
  "sender_contact_details": {
    "type": "PERSONAL",
    "personal_contact": {
      "last_name": "Doe",
      "date_of_birth": "1990-08-25",
      "nationality": "ID",
      "id_type": "passport",
      "id_number": "987654321",
      "mobile_number_prefix": "+62",
      "mobile_number": "811131000",
      "address_line": "Pondok Indah Office Tower",
      "city": "South Jakarta",
      "state_or_province": "DKI Jakarta",
      "address_country": "ID",
      "postal": "12140",
      "first_name": "",
      "middle_name": "",
      "other_name": "",
      "gender": "male",
      "occupation": "Product Manager",
      "country_of_birth": "ID",
      "email": "sender@email.com",
      "residential_status": "Permanent Residency"
    }
  },
  "recipient_contact_details": {
    "type": "BUSINESS",
    "business_contact": {
      "business_name": "莲花 Corporation",
      "business_reg_number": "1122334455667788",
      "date_of_incorporation": "2010-05-15",
      "country_of_incorporation": "SG",
      "country_of_operation": "SG",
      "mobile_number_prefix": "+65",
      "mobile_number": "88097917",
      "address_line": "180 Kitchener Road #02-01",
      "city": "Singapore",
      "state_or_province": "Singapore",
      "address_country": "SG",
      "postal": "208539",
      "website": "https://www.example.com",
      "email": "recipient@email.com"
    },
    "bank": {
      "bank_code": "TSSG0043",
      "bank_account_number": "1234567890",
      "bank_account_name": "John Doe",
      "swift_bic_code": "",
      "bank_address": "180 Kitchener Road #02-01, Singapore 208539",
      "iban_code": null,
      "cnaps_code": null
    }
  }
}
	'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/international/transfer'));
request.body = json.encode({
  "quotation_id": "TRX20250504001",
  "source_of_fund": "BI",
  "purpose_of_transfer": "SS",
  "sender_contact_details": {
    "type": "PERSONAL",
    "personal_contact": {
      "last_name": "Doe",
      "date_of_birth": "1990-08-25",
      "nationality": "ID",
      "id_type": "passport",
      "id_number": "987654321",
      "mobile_number_prefix": "+62",
      "mobile_number": "811131000",
      "address_line": "Pondok Indah Office Tower",
      "city": "South Jakarta",
      "state_or_province": "DKI Jakarta",
      "address_country": "ID",
      "postal": "12140",
      "first_name": "",
      "middle_name": "",
      "other_name": "",
      "gender": "male",
      "occupation": "Product Manager",
      "country_of_birth": "ID",
      "email": "sender@email.com",
      "residential_status": "Permanent Residency"
    }
  },
  "recipient_contact_details": {
    "type": "BUSINESS",
    "business_contact": {
      "business_name": "莲花 Corporation",
      "business_reg_number": "1122334455667788",
      "date_of_incorporation": "2010-05-15",
      "country_of_incorporation": "SG",
      "country_of_operation": "SG",
      "mobile_number_prefix": "+65",
      "mobile_number": "88097917",
      "address_line": "180 Kitchener Road #02-01",
      "city": "Singapore",
      "state_or_province": "Singapore",
      "address_country": "SG",
      "postal": "208539",
      "website": "https://www.example.com",
      "email": "recipient@email.com"
    },
    "bank": {
      "bank_code": "TSSG0043",
      "bank_account_number": "1234567890",
      "bank_account_name": "John Doe",
      "swift_bic_code": "",
      "bank_address": "180 Kitchener Road #02-01, Singapore 208539",
      "iban_code": null,
      "cnaps_code": null
    }
  }
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

  url := "%7B%7Bbase_url%7D%7D/api/international/transfer"
  method := "POST"

  payload := strings.NewReader(`{
  "quotation_id": "TRX20250504001",
  "source_of_fund": "BI",
  "purpose_of_transfer": "SS",
  "sender_contact_details": {
    "type": "PERSONAL",
    "personal_contact": {
      "last_name": "Doe",
      "date_of_birth": "1990-08-25",
      "nationality": "ID",
      "id_type": "passport",
      "id_number": "987654321",
      "mobile_number_prefix": "+62",
      "mobile_number": "811131000",
      "address_line": "Pondok Indah Office Tower",
      "city": "South Jakarta",
      "state_or_province": "DKI Jakarta",
      "address_country": "ID",
      "postal": "12140",
      "first_name": "",
      "middle_name": "",
      "other_name": "",
      "gender": "male",
      "occupation": "Product Manager",
      "country_of_birth": "ID",
      "email": "sender@email.com",
      "residential_status": "Permanent Residency"
    }
  },
  "recipient_contact_details": {
    "type": "BUSINESS",
    "business_contact": {
      "business_name": "莲花 Corporation",
      "business_reg_number": "1122334455667788",
      "date_of_incorporation": "2010-05-15",
      "country_of_incorporation": "SG",
      "country_of_operation": "SG",
      "mobile_number_prefix": "+65",
      "mobile_number": "88097917",
      "address_line": "180 Kitchener Road #02-01",
      "city": "Singapore",
      "state_or_province": "Singapore",
      "address_country": "SG",
      "postal": "208539",
      "website": "https://www.example.com",
      "email": "recipient@email.com"
    },
    "bank": {
      "bank_code": "TSSG0043",
      "bank_account_number": "1234567890",
      "bank_account_name": "John Doe",
      "swift_bic_code": "",
      "bank_address": "180 Kitchener Road #02-01, Singapore 208539",
      "iban_code": null,
      "cnaps_code": null
    }
  }
}
`)

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
RequestBody body = RequestBody.create(mediaType, "{\n" +
    "\t\"quotation_id\": \"TRX20250504001\",\n" +
    "\t\"source_of_fund\": \"BI\",\n" +
    "\t\"purpose_of_transfer\": \"SS\",\n" +
    "\t\"sender_contact_details\": {\n" +
    "\t\t\"type\": \"PERSONAL\",\n" +
    "\t\t\"personal_contact\": {\n" +
    "\t\t\t\"last_name\": \"Doe\",\n" +
    "\t\t\t\"date_of_birth\": \"1990-08-25\",\n" +
    "\t\t\t\"nationality\": \"ID\",\n" +
    "\t\t\t\"id_type\": \"passport\",\n" +
    "\t\t\t\"id_number\": \"987654321\",\n" +
    "\t\t\t\"mobile_number_prefix\": \"+62\",\n" +
    "\t\t\t\"mobile_number\": \"811131000\",\n" +
    "\t\t\t\"address_line\": \"Pondok Indah Office Tower\",\n" +
    "\t\t\t\"city\": \"South Jakarta\",\n" +
    "\t\t\t\"state_or_province\": \"DKI Jakarta\",\n" +
    "\t\t\t\"address_country\": \"ID\",\n" +
    "\t\t\t\"postal\": \"12140\",\n" +
    "\t\t\t\"first_name\": \"\",\n" +
    "\t\t\t\"middle_name\": \"\",\n" +
    "\t\t\t\"other_name\": \"\",\n" +
    "\t\t\t\"gender\": \"male\",\n" +
    "\t\t\t\"occupation\": \"Product Manager\",\n" +
    "\t\t\t\"country_of_birth\": \"ID\",\n" +
    "\t\t\t\"email\": \"sender@email.com\",\n" +
    "\t\t\t\"residential_status\": \"Permanent Residency\"\n" +
    "\t\t}\n" +
    "\t},\n" +
    "\t\"recipient_contact_details\": {\n" +
    "\t\t\"type\": \"BUSINESS\",\n" +
    "\t\t\"business_contact\": {\n" +
    "\t\t\t\"business_name\": \"莲花 Corporation\",\n" +
    "\t\t\t\"business_reg_number\": \"1122334455667788\",\n" +
    "\t\t\t\"date_of_incorporation\": \"2010-05-15\",\n" +
    "\t\t\t\"country_of_incorporation\": \"SG\",\n" +
    "\t\t\t\"country_of_operation\": \"SG\",\n" +
    "\t\t\t\"mobile_number_prefix\": \"+65\",\n" +
    "\t\t\t\"mobile_number\": \"88097917\",\n" +
    "\t\t\t\"address_line\": \"180 Kitchener Road #02-01\",\n" +
    "\t\t\t\"city\": \"Singapore\",\n" +
    "\t\t\t\"state_or_province\": \"Singapore\",\n" +
    "\t\t\t\"address_country\": \"SG\",\n" +
    "\t\t\t\"postal\": \"208539\",\n" +
    "\t\t\t\"website\": \"https://www.example.com\",\n" +
    "\t\t\t\"email\": \"recipient@email.com\"\n" +
    "\t\t},\n" +
    "\t\t\"bank\": {\n" +
    "\t\t\t\"bank_code\": \"TSSG0043\",\n" +
    "\t\t\t\"bank_account_number\": \"1234567890\",\n" +
    "\t\t\t\"bank_account_name\": \"John Doe\",\n" +
    "\t\t\t\"swift_bic_code\": \"\",\n" +
    "\t\t\t\"bank_address\": \"180 Kitchener Road #02-01, Singapore 208539\",\n" +
    "\t\t\t\"iban_code\": null,\n" +
    "\t\t\t\"cnaps_code\": null\n" +
    "\t\t}\n" +
    "\t}\n" +
    "}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/international/transfer")
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
  "quotation_id": "TRX20250504001",
  "source_of_fund": "BI",
  "purpose_of_transfer": "SS",
  "sender_contact_details": {
    "type": "PERSONAL",
    "personal_contact": {
      "last_name": "Doe",
      "date_of_birth": "1990-08-25",
      "nationality": "ID",
      "id_type": "passport",
      "id_number": "987654321",
      "mobile_number_prefix": "+62",
      "mobile_number": "811131000",
      "address_line": "Pondok Indah Office Tower",
      "city": "South Jakarta",
      "state_or_province": "DKI Jakarta",
      "address_country": "ID",
      "postal": "12140",
      "first_name": "",
      "middle_name": "",
      "other_name": "",
      "gender": "male",
      "occupation": "Product Manager",
      "country_of_birth": "ID",
      "email": "sender@email.com",
      "residential_status": "Permanent Residency"
    }
  },
  "recipient_contact_details": {
    "type": "BUSINESS",
    "business_contact": {
      "business_name": "莲花 Corporation",
      "business_reg_number": "1122334455667788",
      "date_of_incorporation": "2010-05-15",
      "country_of_incorporation": "SG",
      "country_of_operation": "SG",
      "mobile_number_prefix": "+65",
      "mobile_number": "88097917",
      "address_line": "180 Kitchener Road #02-01",
      "city": "Singapore",
      "state_or_province": "Singapore",
      "address_country": "SG",
      "postal": "208539",
      "website": "https://www.example.com",
      "email": "recipient@email.com"
    },
    "bank": {
      "bank_code": "TSSG0043",
      "bank_account_number": "1234567890",
      "bank_account_name": "John Doe",
      "swift_bic_code": "",
      "bank_address": "180 Kitchener Road #02-01, Singapore 208539",
      "iban_code": null,
      "cnaps_code": null
    }
  }
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/international/transfer");
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
$request->setUrl('{{base_url}}/api/international/transfer');
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
$request->setBody('{\n' .
    '\t"quotation_id": "TRX20250504001",\n' .
    '\t"source_of_fund": "BI",\n' .
    '\t"purpose_of_transfer": "SS",\n' .
    '\t"sender_contact_details": {\n' .
    '\t\t"type": "PERSONAL",\n' .
    '\t\t"personal_contact": {\n' .
    '\t\t\t"last_name": "Doe",\n' .
    '\t\t\t"date_of_birth": "1990-08-25",\n' .
    '\t\t\t"nationality": "ID",\n' .
    '\t\t\t"id_type": "passport",\n' .
    '\t\t\t"id_number": "987654321",\n' .
    '\t\t\t"mobile_number_prefix": "+62",\n' .
    '\t\t\t"mobile_number": "811131000",\n' .
    '\t\t\t"address_line": "Pondok Indah Office Tower",\n' .
    '\t\t\t"city": "South Jakarta",\n' .
    '\t\t\t"state_or_province": "DKI Jakarta",\n' .
    '\t\t\t"address_country": "ID",\n' .
    '\t\t\t"postal": "12140",\n' .
    '\t\t\t"first_name": "",\n' .
    '\t\t\t"middle_name": "",\n' .
    '\t\t\t"other_name": "",\n' .
    '\t\t\t"gender": "male",\n' .
    '\t\t\t"occupation": "Product Manager",\n' .
    '\t\t\t"country_of_birth": "ID",\n' .
    '\t\t\t"email": "sender@email.com",\n' .
    '\t\t\t"residential_status": "Permanent Residency"\n' .
    '\t\t}\n' .
    '\t},\n' .
    '\t"recipient_contact_details": {\n' .
    '\t\t"type": "BUSINESS",\n' .
    '\t\t"business_contact": {\n' .
    '\t\t\t"business_name": "莲花 Corporation",\n' .
    '\t\t\t"business_reg_number": "1122334455667788",\n' .
    '\t\t\t"date_of_incorporation": "2010-05-15",\n' .
    '\t\t\t"country_of_incorporation": "SG",\n' .
    '\t\t\t"country_of_operation": "SG",\n' .
    '\t\t\t"mobile_number_prefix": "+65",\n' .
    '\t\t\t"mobile_number": "88097917",\n' .
    '\t\t\t"address_line": "180 Kitchener Road #02-01",\n' .
    '\t\t\t"city": "Singapore",\n' .
    '\t\t\t"state_or_province": "Singapore",\n' .
    '\t\t\t"address_country": "SG",\n' .
    '\t\t\t"postal": "208539",\n' .
    '\t\t\t"website": "https://www.example.com",\n' .
    '\t\t\t"email": "recipient@email.com"\n' .
    '\t\t},\n' .
    '\t\t"bank": {\n' .
    '\t\t\t"bank_code": "TSSG0043",\n' .
    '\t\t\t"bank_account_number": "1234567890",\n' .
    '\t\t\t"bank_account_name": "John Doe",\n' .
    '\t\t\t"swift_bic_code": "",\n' .
    '\t\t\t"bank_address": "180 Kitchener Road #02-01, Singapore 208539",\n' .
    '\t\t\t"iban_code": null,\n' .
    '\t\t\t"cnaps_code": null\n' .
    '\t\t}\n' .
    '\t}\n' .
    '}');
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
  "quotation_id": "TRX20250504001",
  "source_of_fund": "BI",
  "purpose_of_transfer": "SS",
  "sender_contact_details": {
    "type": "PERSONAL",
    "personal_contact": {
      "last_name": "Doe",
      "date_of_birth": "1990-08-25",
      "nationality": "ID",
      "id_type": "passport",
      "id_number": "987654321",
      "mobile_number_prefix": "+62",
      "mobile_number": "811131000",
      "address_line": "Pondok Indah Office Tower",
      "city": "South Jakarta",
      "state_or_province": "DKI Jakarta",
      "address_country": "ID",
      "postal": "12140",
      "first_name": "",
      "middle_name": "",
      "other_name": "",
      "gender": "male",
      "occupation": "Product Manager",
      "country_of_birth": "ID",
      "email": "sender@email.com",
      "residential_status": "Permanent Residency"
    }
  },
  "recipient_contact_details": {
    "type": "BUSINESS",
    "business_contact": {
      "business_name": "莲花 Corporation",
      "business_reg_number": "1122334455667788",
      "date_of_incorporation": "2010-05-15",
      "country_of_incorporation": "SG",
      "country_of_operation": "SG",
      "mobile_number_prefix": "+65",
      "mobile_number": "88097917",
      "address_line": "180 Kitchener Road #02-01",
      "city": "Singapore",
      "state_or_province": "Singapore",
      "address_country": "SG",
      "postal": "208539",
      "website": "https://www.example.com",
      "email": "recipient@email.com"
    },
    "bank": {
      "bank_code": "TSSG0043",
      "bank_account_number": "1234567890",
      "bank_account_name": "John Doe",
      "swift_bic_code": "",
      "bank_address": "180 Kitchener Road #02-01, Singapore 208539",
      "iban_code": null,
      "cnaps_code": null
    }
  }
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/international/transfer", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> API Response for Valid Request (Transaction will be processed in the OY! system):

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "tx_status": "IN_PROGRESS",
  "tx_id": "a79d3b21-fe4e-4460-aa8a-5c2c4321557e",
  "quotation_id": "TRX20250504001"
}
```

> API Response for Invalid Request (Transaction will be rejected and not processed in the OY! system):

```json
{
  "status": {
    "code": "203",
    "message": "Quotation ID is running or has been completed"
  },
  "tx_status": null,
  "tx_id": null,
  "quotation_id": null
}
```

This endpoint is used to create a new International Transfer API transaction.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/international/transfer`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/international/transfer`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
quotation_id | String(8,64) | TRUE | Unique Reference ID for a specific request, generated by the Client. Accepts only alphanumeric characters.
source_of_fund | String(ENUM) | TRUE | Fund Sources. <br><br>**Allowed values**: [See here](#source-of-funds-) 
purpose_of_transfer | String(ENUM) | TRUE | Transfer Purposes. <br><br>**Allowed values**: [See here](#transfer-purposes-)
sender_contact_details | Object | TRUE | Details of the Sender Contact object information. [See here](#sender-contact-details-)
recipient_contact_details | Object | TRUE | Details of the Recipient Contact object information. [See here](#recipient-contact-details-)

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}` <br><br>See [Response Codes & Messages](#response-codes-amp-messages-create-transfer) for more details.
tx_status | String | Transaction status (IN_PROGRESS)
tx_id | String | Unique Transaction ID, generated by OY!
quotation_id | String | Unique Reference ID for a specific request, generated by the Client

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive International Transfer API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 402 Payment Required | 206 | Balance is not enough | Indicates that the request is made when the Client’s Available Balance is insufficient (i.e., the Send Amount exceeds the current Available Balance). This case applies if the Client uses Real Balance for their account. |

| 400 Bad Request | 990 | Quotation ID is required | Indicates that the quotation_id parameter is missing from the request or contains an empty or null value. |
| 404 Not Found | 204 | Quotation ID is not found | Indicates that the quotation_id parameter contains a value that does not exist in the database. |
| 400 Bad Request | 203 | Quotation ID is running or has been completed | Indicates that the quotation_id parameter used in the request is not in the INITIATED status, such as: IN_PROGRESS, SUCCESS, or FAILED. |
| 410 Gone | 222 | Quotation ID has expired | Indicates that the quotation_id parameter used in the request has status INITIATED, but has expired. |
| 400 Bad Request | 990 | Source of Fund is required | Indicates that the source_of_fund parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Source of Fund is not valid | Indicates that the source_of_fund parameter does not match any valid ENUM value or contains an invalid value (e.g., OY). |
| 400 Bad Request | 990 | Purpose of Transfer is required | Indicates that the purpose_of_transfer parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Purpose of Transfer is not valid | Indicates that the purpose_of_transfer parameter does not match any valid ENUM value or contains an invalid value (e.g., OY). |
| 400 Bad Request | 990 | Sender Contact Details object is required | Indicates that the sender_contact_details object parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Recipient Contact Details object is required | Indicates that the recipient_contact_details object parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Type is required | Indicates that the type parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Type is not valid | Indicates that the type parameter does not match any valid ENUM value or contains an invalid value (e.g., OY). |
| 400 Bad Request | 990 | Personal Contact object is required when the Sender or Recipient Contact Type is set to Personal | Indicates that the personal_contact object parameter is missing from the request or contains an empty or null value when using type = PERSONAL. Used inside the sender_contact_details and recipient_contact_details object parameters. |
| 400 Bad Request | 990 | Business Contact object is required when the Sender or Recipient Contact Type is set to Business | Indicates that the business_contact object parameter is missing from the request or contains an empty or null value when using type = BUSINESS. Used inside the sender_contact_details and recipient_contact_details object parameters. |
| 400 Bad Request | 990 | Transfers to Destination Country CN only allow Recipient Type for BUSINESS | Indicates that the request uses type = PERSONAL in the recipient_contact_details object for a transfer to the Destination Country = CN. Only type = BUSINESS is allowed for transfers to CN. |
| 400 Bad Request | 990 | Bank object is required in the Recipient Contact Details object | Indicates that the bank object parameter is missing from the request or contains an empty or null value. Used inside the recipient_contact_details object parameter. |
| 400 Bad Request | 990 | Last Name is required | Indicates that the last_name parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Last Name must be a maximum of 255 characters | Indicates that the last_name parameter contains a value of more than 255 characters. |
| 400 Bad Request | 990 | Date of Birth is required | Indicates that the date_of_birth parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Date of Birth is not valid | Indicates that the date_of_birth parameter contains an invalid format value. |
| 400 Bad Request | 990 | Nationality is required | Indicates that the nationality parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Nationality is not valid Indicates that the nationality parameter does not match any valid ENUM value or contains an invalid value (e.g., OY). |
400 Bad Request
990
Nationality must be 2 characters
Indicates that the nationality parameter contains a value of less than or more than 2 characters.
400 Bad Request
990
ID Type is required
Indicates that the id_type parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
ID Type is not valid
Indicates that the id_type parameter does not match any valid ENUM value or contains an invalid value (e.g., OY).
400 Bad Request
990
ID Number is required
Indicates that the id_number parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
ID Number must be a maximum of 255 characters
Indicates that the id_number parameter contains a value of more than 255 characters.
400 Bad Request
990
Mobile Number Prefix is required
Indicates that the mobile_number_prefix parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Mobile Number Prefix must be a maximum of 255 characters
Indicates that the mobile_number_prefix parameter contains a value of more than 255 characters.
400 Bad Request
990
Mobile Number is required
Indicates that the mobile_number parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Mobile Number must be a maximum of 255 characters
Indicates that the mobile_number parameter contains a value of more than 255 characters.
400 Bad Request
990
Mobile Number must be numeric
Indicates that the mobile_number parameter contains a non-numeric value
400 Bad Request
990
Address Line is required
Indicates that the address_line parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Address Line must be a maximum of 255 characters
Indicates that the address_line parameter contains a value of more than 255 characters.
400 Bad Request
990
City is required
Indicates that the city parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
City must be a maximum of 255 characters
Indicates that the city parameter contains a value of more than 255 characters.
400 Bad Request
990
State or Province is required
Indicates that the state_or_province parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
State or Province must be a maximum of 255 characters
Indicates that the state_or_province parameter contains a value of more than 255 characters.
400 Bad Request
990
Address Country is required
Indicates that the address_country parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Address Country is not valid
Indicates that the address_country parameter does not match any valid ENUM value or contains an invalid value (e.g., OY).
400 Bad Request
990
Address Country must be 2 characters
Indicates that the address_country parameter contains a value of less than or more than 2 characters.
400 Bad Request
990
Postal is required
Indicates that the postal parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Postal must be a maximum of 255 characters
Indicates that the postal parameter contains a value of more than 255 characters.
400 Bad Request
990
First Name must be a maximum of 255 characters
Indicates that the first_name parameter contains a value of more than 255 characters.
400 Bad Request
990
Middle Name must be a maximum of 255 characters
Indicates that the middle_name parameter contains a value of more than 255 characters.
400 Bad Request
990
Other Name must be a maximum of 255 characters
Indicates that the other_name parameter contains a value of more than 255 characters.
400 Bad Request
990
Gender is not valid
Indicates that the gender parameter does not match any valid ENUM value or contains an invalid value (e.g., OY).
400 Bad Request
990
Occupation must be a maximum of 255 characters
Indicates that the occupation parameter contains a value of more than 255 characters.
400 Bad Request
990
Country of Birth is not valid
Indicates that the country_of_birth parameter does not match any valid ENUM value or contains an invalid value (e.g., OY).
400 Bad Request
990
Country of Birth must be 2 characters
Indicates that the country_of_birth parameter contains a value of less than or more than 2 characters.
400 Bad Request
990
Email must be a maximum of 255 characters
Indicates that the email parameter contains a value of more than 255 characters.
400 Bad Request
990
Email is not valid
Indicates that the email parameter contains an invalid format value.
400 Bad Request
990
Residential Status must be a maximum of 255 characters
Indicates that the residential_status parameter contains a value of more than 255 characters.
400 Bad Request
990
Business Name is required
Indicates that the business_name parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Business Name must be a maximum of 255 characters
Indicates that the business_name parameter contains a value of more than 255 characters.
400 Bad Request
990
Business Registration Number is required
Indicates that the business_reg_number parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Business Registration Number must be a maximum of 255 characters
Indicates that the business_reg_number parameter contains a value of more than 255 characters.
400 Bad Request
990
Date of Incorporation is required
Indicates that the date_of_incorporation parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Date of Incorporation is not valid
Indicates that the date_of_incorporation parameter contains an invalid format value.
400 Bad Request
990
Country of Incorporation is required
Indicates that the country_of_incorporation parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Country of Incorporation is not valid
Indicates that the country_of_incorporation parameter does not match any valid ENUM value or contains an invalid value (e.g., OY).
400 Bad Request
990
Country of Incorporation must be 2 characters
Indicates that the country_of_incorporation parameter contains a value of less than or more than 2 characters.
400 Bad Request
990
Country of Operation is required
Indicates that the country_of_operation parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Country of Operation is not valid
Indicates that the country_of_operation parameter does not match any valid ENUM value or contains an invalid value (e.g., OY).
400 Bad Request
990
Country of Operation must be 2 characters
Indicates that the country_of_operation parameter contains a value of less than or more than 2 characters.
400 Bad Request
990
Website URL must be a maximum of 255 characters
Indicates that the website parameter contains a value of more than 255 characters.
400 Bad Request
990
Website URL is not valid
Indicates that the website parameter contains an invalid URL format value.
400 Bad Request
990
Bank Code is required
Indicates that the bank_code parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Bank Code is not valid
Indicates that the bank_code parameter does not match any valid ENUM value or contains an invalid value (e.g., OY). It may also not be available for the selected Destination Country.
400 Bad Request
990
Bank Account Number is required
Indicates that the bank_account_number parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Bank Account Number must be a maximum of 255 characters
Indicates that the bank_account_number parameter contains a value of more than 255 characters.
400 Bad Request
990
Bank Account Name is required
Indicates that the bank_account_name parameter is missing from the request or contains an empty or null value.
400 Bad Request
990
Bank Account Name must be a maximum of 255 characters
Indicates that the bank_account_name parameter contains a value of more than 255 characters.
400 Bad Request
990
Bank Address must be a maximum of 255 characters
Indicates that the bank_address parameter contains a value of more than 255 characters.
400 Bad Request
990
SWIFT or BIC Code must be a maximum of 255 characters
Indicates that the swift_bic_code parameter contains a value of more than 255 characters.
400 Bad Request
990
IBAN Code must be a maximum of 255 characters
Indicates that the iban_code parameter contains a value of more than 255 characters.
400 Bad Request
990
CNAPS Code must be a maximum of 255 characters
Indicates that the cnaps_code parameter contains a value of more than 255 characters.






| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |

## Transfer Detail

```shell
curl -X \
POST https://partner.oyindonesia.com/api/international/transfer-details \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "quotation_id": "TRX20250325001",
  "send_callback": true
}	'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/international/transfer-details'));
request.body = json.encode({
  "quotation_id": "TRX20250325001",
  "send_callback": true
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

  url := "%7B%7Bbase_url%7D%7D/api/international/tranfer-details"
  method := "POST"

  payload := strings.NewReader(`{
  "quotation_id": "TRX20250325001",
  "send_callback": true
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"quotation_id\": \"TRX20250325001\",\n\t\"send_callback\": true\n}")
Request request = new Request.Builder()
  .url("{{base_url}}/api/international/transfer-details")
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
  quotation_id: "TRX20250325001",
  send_callback: true,
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/international/transfer-details");
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
$request->setUrl('{{base_url}}/api/international/transfer-details');
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
$request->setBody('{\n' .
    '\t"quotation_id": "TRX20250325001",\n' .
    '\t"send_callback": true\n' .
    '}');
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
  "send_callback": true
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/international/transfer-details", payload, headers)
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
  "tx_status": "SUCCESS",
  "tx_id": "049fa1a6-e051-4ec2-aff5-ffc601c3ce0c",
  "quotation_id": "TRX20250325001",
  "url_list": [
    "pejetaja/049fa1a6-e051-4ec2-aff5-ffc601c3ce0c/document_file_name.png"
  ],
  "sender_contact_details": {
    "type": "PERSONAL",
    "personal_contact": {
      "last_name": "Smith",
      "date_of_birth": "1990-08-25",
      "nationality": "ID",
      "id_type": "passport",
      "id_number": "987654321",
      "mobile_number_prefix": "+62",
      "mobile_number": "85712163208",
      "address_line": "Pondok Indah Office Tower",
      "city": "South Jakarta",
      "state_or_province": "DKI Jakarta",
      "address_country": "ID",
      "postal": "12140",
      "first_name": "",
      "middle_name": "",
      "other_name": "",
      "gender": "male",
      "occupation": "",
      "country_of_birth": "ID",
      "email": "sender@example.com",
      "residential_status": "Permanent Residency"
    }
  },
  "recipient_contact_details": {
    "type": "BUSINESS",
    "business_contact": {
      "business_name": "Example Corp",
      "business_reg_number": "1122334455667788",
      "date_of_incorporation": "2010-05-15",
      "country_of_incorporation": "SG",
      "country_of_operation": "SG",
      "mobile_number_prefix": "+65",
      "mobile_number": "88097917",
      "address_line": "180 Kitchener Road #02-01",
      "city": "Singapore",
      "state_or_province": "Singapore",
      "address_country": "SG",
      "postal": "208539",
      "website": "",
      "email": "recipient@example.com"
    },
    "bank": {
      "bank_code": "TSSG0043",
      "bank_name": "Svenska Handelsbanken, Singapore Branch",
      "iban_code": null,
      "cnaps_code": null,
      "bank_address": "180 Kitchener Road #02-01, Singapore 208539",
      "bank_country": "SG",
      "ts_bank_code": "TSSG0043",
      "swift_bic_code": "HANDSGSG",
      "bank_account_name": "PT DOMPET HARAPAN BANGSA",
      "bank_account_number": "1234567890",
      "bank_account_currency": "SGD"
    }
  }
}
```

> Response for invalid request (transaction will rejected & not processed in the OY! system):

```json
{
  "status": {
    "code": "990",
    "message": "Quotation ID is required"
  },
  "tx_status": null,
  "tx_id": null,
  "quotation_id": null,
  "url_list": null,
  "sender_contact_details": null,
  "recipient_contact_details": null
}
```

Use this API to get details of a specific International Transfer transaction.

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/international/transfer-details`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/international/transfer-details`

### Request Parameters

| Parameter     | Type       | Required | Description                                                                                                |
| ------------- | ---------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| quotation_id  | String(64) | TRUE     | Unique Reference ID for a specific request, generated by the Client. Accepts only alphanumeric characters. |
| send_callback | Boolean    | TRUE     | A flag to resend the transaction callback. Default value: false.                                           |

### Response Parameters

| Parameter                 | Type            | Description                                                                                                                                                                                                                                  |
| ------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status                    | Object          | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. `{code: <status_code>, message: <status_message>}` |
| tx_status                 | String          | Transaction status                                                                                                                                                                                                                           |
| tx_id                     | String          | Unique Transaction ID, generated by OY!                                                                                                                                                                                                      |
| quotation_id              | String          | Unique Reference ID for a specific request, generated by the Client                                                                                                                                                                          |
| source_of_fund            | String(Enum)    | [Fund Sources](#source-of-funds-)                                                                                                                                                                                                            |
| purpose_of_transfer       | String          | [Transfer Purposes](#transfer-purposes-)                                                                                                                                                                                                     |
| url_list                  | Array of String | Array of the uploaded document path                                                                                                                                                                                                          |
| sender_contact_details    | Object          | Details of the [Sender Contact object information](#sender-contact-details-api-international-transfer)                                                                                                                                       |
| recipient_contact_details | Object          | Details of the [Recipient Contact object information](#recipient-contact-details-api-international-transfer)                                                                                                                                 |

## Sender Contact Details

| Parameter        | Type         | Required | Description                                                                                                                  |
| ---------------- | ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type             | String(ENUM) | TRUE     | Type of Sender Contact. Allowed values: PERSONAL, BUSINESS                                                                   |
| personal_contact | Object       | FALSE    | Object for [Sender Personal Contact information](#personal-contact-api-international-transfer). Required if type = PERSONAL. |
| business_contact | Object       | FALSE    | Object for [Sender Business Contact information](#business-contact-api-international-transfer). Required if type = BUSINESS. |

## Recipient Contact Details

| Parameter        | Type         | Required | Description                                                                                                                  |
| ---------------- | ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type             | String(ENUM) | TRUE     | Type of Sender Contact. Allowed values: PERSONAL, BUSINESS                                                                   |
| personal_contact | Object       | FALSE    | Object for [Sender Personal Contact information](#personal-contact-api-international-transfer). Required if type = PERSONAL. |
| business_contact | Object       | FALSE    | Object for [Sender Business Contact information](#business-contact-api-international-transfer). Required if type = BUSINESS. |
| bank             | Object       | TRUE     | Object for [Recipient Bank information](#bank-detail-api-international-transfer)                                             |

## Personal Contact

| Parameter            | Type          | Required | Description                                                      |
| -------------------- | ------------- | -------- | ---------------------------------------------------------------- |
| last_name            | String        | TRUE     | Last Name                                                        |
| date_of_birth        | String        | TRUE     | Date of Birth. Use the format: yyyy-MM-dd.                       |
| nationality          | String        | TRUE     | Nationality. Two-letter ISO 3166-2 country code.                 |
| id_type              | String (ENUM) | TRUE     | Identification Type. Allowed values: passport, nric, unspecified |
| id_number            | String        | TRUE     | Identification Number                                            |
| mobile_number_prefix | String        | TRUE     | Prefix for Phone / Mobile Number. Example: +62, +65.             |
| mobile_number        | String        | TRUE     | Phone / Mobile Number without Prefix. Must be numeric.           |
| address_line         | String        | TRUE     | Address                                                          |
| city                 | String        | TRUE     | City                                                             |
| state_or_province    | String        | TRUE     | State / Province                                                 |
| address_country      | String        | TRUE     | Address Country. Two-letter ISO 3166-2 country code.             |
| postal               | String        | TRUE     | Postal Code                                                      |
| first_name           | String        | FALSE    | First Name                                                       |
| middle_name          | String        | FALSE    | Middle Name                                                      |
| other_name           | String        | FALSE    | Other Name                                                       |
| gender               | String (ENUM) | FALSE    | Gender. Allowed values: male, female                             |
| occupation           | String        | FALSE    | Occupation                                                       |
| country_of_birth     | String        | FALSE    | Country of Birth. Two-letter ISO 3166-2 country code.            |
| email                | String        | FALSE    | Email                                                            |
| residential_status   | String        | FALSE    | Residential Status                                               |

## Business Contact

| Parameter                | Type   | Required | Description                                                                   |
| ------------------------ | ------ | -------- | ----------------------------------------------------------------------------- |
| business_name            | String | TRUE     | Business Name                                                                 |
| business_reg_number      | String | TRUE     | Business Registration Number                                                  |
| date_of_incorporation    | String | TRUE     | Date the Business was registered. Use the format: yyyy-MM-dd.                 |
| country_of_incorporation | String | TRUE     | Country where the Business is registered. Two-letter ISO 3166-2 country code. |
| country_of_operation     | String | TRUE     | Country where the Business is operated. Two-letter ISO 3166-2 country code.   |
| mobile_number_prefix     | String | TRUE     | Prefix for Phone / Mobile Number. Example: +62, +65.                          |
| mobile_number            | String | TRUE     | Phone / Mobile Number without Prefix. Must be numeric.                        |
| address_line             | String | TRUE     | Address                                                                       |
| city                     | String | TRUE     | City                                                                          |
| state_or_province        | String | TRUE     | State / Province                                                              |
| address_country          | String | TRUE     | Address Country. Two-letter ISO 3166-2 country code.                          |
| postal                   | String | TRUE     | Postal Code                                                                   |
| website                  | String | FALSE    | Website                                                                       |
| email                    | String | FALSE    | Email                                                                         |

## Bank Detail

| Parameter           | Type   | Required | Description                     |
| ------------------- | ------ | -------- | ------------------------------- |
| bank_account_number | String | TRUE     | Bank Account Number             |
| bank_account_name   | String | TRUE     | Name of the Bank Account Holder |
| bank_code           | String | TRUE     | Bank Code                       |
| swift_bic_code      | String | FALSE    | SWIFT / BIC Code                |
| bank_address        | String | FALSE    | Bank Address                    |
| iban_code           | String | FALSE    | IBAN Code                       |
| cnaps_code          | String | FALSE    | CNAPS Code                      |
