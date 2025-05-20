# Claim Fund API

Claim Fund API enables you to make disbursements without knowing the recipient's Bank Account first. You simply create a Claim Fund Link for the recipient to fill in their Bank Account information and the payment will be processed by OY! system. Claim Fund API will eliminate the hassle of manually collecting recipient information.

## Create Claim Fund

```shell
curl -X \
POST https://partner.oyindonesia.com/api/claim-fund \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "expiration": "10"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/claim-fund'));
request.body = json.encode({
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "expiration": "10"
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

  url := "%7B%7Bbase_url%7D%7D/api/claim-fund"
  method := "POST"

  payload := strings.NewReader(`{
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "expiration": "10"
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
RequestBody body = RequestBody.create(mediaType, "{\n"
                    + "  \"amount\": 500000,\n"
                    + "  \"partner_trx_id\": \"TRX-20250408-001\",\n"
                    + "  \"recipient_email\": \"recipient@mail.com\",\n"
                    + "  \"recipient_name\": \"Recipient\",\n"
                    + "  \"note\": \"note\",\n"
                    + "  \"expiration\": \"10\"\n"
                    + "}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/claim-fund")
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
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "expiration": "10"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/claim-fund");
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
$request->setUrl('{{base_url}}/api/claim-fund');
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
$request->setBody('{
  \"amount\": 500000,
  \"partner_trx_id\": \"TRX-20250408-001\",
  \"recipient_email\": \"recipient@mail.com\",
  \"recipient_name\": \"Recipient\",
  \"note\": \"note\",
  \"expiration\": \"10\"
}');
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
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "expiration": "10"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/claim-fund", payload, headers)
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
  "tx_status": "INITIATED",
  "tx_status_description": "The Claim Fund link has successfully been created and is awaiting the end user's response",
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "claim_fund_link": "https://claimfund.oyindonesia.com/claim-fund/claim/251280aa-95cb-41f2-84c3-8d2b247aa2b4?token=1ac006ce-82d9-4cb6-9afd-a621ca8dafa0",
  "expiration": "2025-04-08 12:10:00",
  "created": "2025-04-08 02:10:00",
  "updated": "2025-04-08 02:10:00"
}

```

This endpoint is used to create a new Claim Fund API transaction.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/claim-fund`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/claim-fund`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
amount | BigInteger | TRUE | Amount to be claimed in IDR
partner_trx_id | String(255) | TRUE | Unique Transaction ID for a specific request, generated by the Client
recipient_email | String(255) | TRUE | Recipient Email to receive the Claim Fund Link
recipient_name | BigInteger | FALSE | Recipient Name
note | String(255) | FALSE | Claim Fund Notes. Accepts alphanumeric characters.
expiration | String(255) | FALSE | Expiration for the Claim Fund Link (in hours format). <br>• Default: 24 hours<br>• Minimum: 1 hour<br>• Maximum: 24 hours

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}`. <br><br> See [Response Codes & Messages](#response-codes-amp-messages-create-claim-fund) for more details.
tx_status | String | Claim Fund Transaction Status
tx_status_description | String | Description of the Claim Fund Transaction Status
amount | BigInteger | Amount to be claimed
partner_trx_id | String | Unique Transaction ID for a specific request, generated by the Client
recipient_email | String | Recipient Email to receive the Claim Fund Link
recipient_name | String | Recipient Name
note | String | Claim Fund Notes. Accepts alphanumeric characters.
claim_fund_link | String | Claim Fund Link which will be used to fill in Bank Account information
expiration | String | Expiration for the Claim Fund Link. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.
created | String | Claim Fund Link creation datetime. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.
updated | String | Claim Fund last update datetime, based on the latest status update. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive Claim Fund API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 400 Bad Request | 203 | Duplicate Partner Trx ID | Indicates that the partner\_trx\_id has already been used before. |
| 400 Bad Request | 990 | Amount is required | Indicates that the amount parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Invalid request body: Invalid format value 'xxxxxx' for field 'amount' | Indicates that the amount parameter contains a non-numeric value or uses a Data Type other than BigInteger. |
| 400 Bad Request | 990 | Amount must be greater than or equal to IDR 100 | Indicates that the amount parameter contains a value less than IDR 100\. |
| 400 Bad Request | 225 | Transaction amount exceeds the maximum limit | Indicates that the amount parameter contains a value greater than the MAXIMUM\_TRANSACTION\_AMOUNT limit configured for your account. |
| 400 Bad Request | 990 | Partner Trx ID is required | Indicates that the partner\_trx\_id parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Partner Trx ID must be a maximum of 255 characters | Indicates that the partner\_trx\_id parameter contains a value of more than 255 characters. |
| 400 Bad Request | 990 | Recipient Email is required | Indicates that the recipient\_email parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Recipient Email is not valid | Indicates that the recipient\_email parameter is either in an invalid format or more than 255 characters. |
| 400 Bad Request | 990 | Recipient Name must be a maximum of 64 characters | Indicates that the recipient\_name parameter contains a value of more than 255 characters. |
| 400 Bad Request | 990 | Note must be a maximum of 255 characters | Indicates that the note parameter contains a value of more than 255 characters. |
| 400 Bad Request | 990 | Note must be alphanumeric | Indicates that the note parameter contains a non-alphanumeric value. |
| 400 Bad Request | 990 | Expiration must be numeric | Indicates that the expiration parameter contains a non-numeric value. |
| 400 Bad Request | 990 | Expiration must be between 1 and 24 hours | Indicates that the expiration parameter contains a value of less than 1 hour or more than 24 hours. |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |

## Approve/Reject Claim Fund

```shell
curl -X \
PUT https://partner.oyindonesia.com/api/claim-fund/approval \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_trx_id": "TRX-20250408-001",
  "action": "APPROVE"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('PUT', Uri.parse('{{base_url}}/api/claim-fund/approval'));
request.body = json.encode({
  "partner_trx_id": "TRX-20250408-001",
  "action": "APPROVE"
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

  url := "%7B%7Bbase_url%7D%7D/api/claim-fund/approval"
  method := "PUT"

  payload := strings.NewReader(`{
  "partner_trx_id": "TRX-20250408-001",
  "action": "APPROVE"
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
RequestBody body = RequestBody.create(mediaType, "{\n"
                    + "  \"partner_trx_id\": \"TRX-20250408-001\",\n"
                    + "  \"action\": \"APPROVE\"\n"
                    + "}\n");
Request request = new Request.Builder()
  .url("{{base_url}}/api/claim-fund/approval")
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
  "partner_trx_id": "TRX-20250408-001",
  "action": "APPROVE"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "%7B%7Bbase_url%7D%7D/api/claim-fund/approval");
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
$request->setUrl('{{base_url}}/api/claim-fund/approval');
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
$request->setBody('{
  \"partner_trx_id\": \"TRX-20250408-001\",
  \"action\": \"APPROVE\"
}');
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
  "partner_trx_id": "TRX-20250408-001",
  "action": "APPROVE"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("PUT", "/api/claim-fund/approval", payload, headers)
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
  "tx_status": "IN_PROGRESS",
  "tx_status_description": "The Claim Fund transaction is being processed",
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "claim_fund_link": "https://claimfund.oyindonesia.com/claim-fund/claim/251280aa-95cb-41f2-84c3-8d2b247aa2b4?token=1ac006ce-82d9-4cb6-9afd-a621ca8dafa0",
  "expiration": "2025-04-08 12:10:00",
  "created": "2025-04-08 02:10:00",
  "updated": "2025-04-08 02:10:00"
}

```

This endpoint is used to approve or reject a Claim Fund API transaction. This only applies to a Claim Fund API with status = WAITING_APPROVAL.

### HTTPS Request
**[Production]** `PUT https://partner.oyindonesia.com/api/claim-fund/approval`<br>
**[Staging]** `PUT https://api-stg.oyindonesia.com/api/claim-fund/approval`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Transaction ID for a specific request, generated by the Client. partner_trx_id should have status = WAITING_APPROVAL.
action | String(255) | TRUE | Type of Claim Fund approval. <br>**Allowed values:** APPROVE, REJECT

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}`. <br><br> See [Response Codes & Messages](#response-codes-amp-messages-approve-reject-claim-fund) for more details.
tx_status | String | Claim Fund Transaction Status
tx_status_description | String | Description of the Claim Fund Transaction Status
amount | BigInteger | Amount to be claimed
partner_trx_id | String | Unique Transaction ID for a specific request, generated by the Client
recipient_email | String | Recipient Email to receive the Claim Fund Link
recipient_name | String | Recipient Name
note | String | Claim Fund Notes. Accepts alphanumeric characters.
claim_fund_link | String | Claim Fund Link which will be used to fill in Bank Account information
expiration | String | Expiration for the Claim Fund Link. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.
created | String | Claim Fund Link creation datetime. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.
updated | String | Claim Fund last update datetime, based on the latest status update. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive Claim Fund API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 400 Bad Request | 990 | Partner Trx ID is required | Indicates that the partner\_trx\_id parameter is missing from the request or contains an empty or null value. |
| 404 Not Found | 204 | Partner Trx ID is not found | Indicates that the partner\_trx\_id parameter contains a value that either does not exist in the database or is associated with a product named CLAIM\_FUND. |
| 400 Bad Request | 203 | The provided Partner Trx ID has a status that is not eligible for this action | Indicates that the partner\_trx\_id used in the request is not in the WAITING\_APPROVAL status, such as: INITIATED, IN\_PROGRESS, SUCCESS, FAILED, EXPIRED, or REJECTED. |
| 409 Conflict | 257 | An API request with the same Partner Trx ID is already in progress | Indicates that a request with the same partner\_trx\_id is already in progress when the Client sends the request multiple times (more than 1). |
| 400 Bad Request | 990 | Action is required | Indicates that the action parameter is missing from the request or contains an empty or null value. |
| 400 Bad Request | 990 | Action must be either APPROVE or REJECT | Indicates that the action parameter does not match any valid ENUM value or contains an invalid value (e.g., YES). |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |


## Void Claim Fund

```shell
curl -X \
PUT https://partner.oyindonesia.com/api/claim-fund/void \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_trx_id": "TRX-20250408-001"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('PUT', Uri.parse('{{base_url}}/api/claim-fund/void'));
request.body = json.encode({
  "partner_trx_id": "TRX-20250408-001"
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

  url := "%7B%7Bbase_url%7D%7D/api/claim-fund/void"
  method := "PUT"

  payload := strings.NewReader(`{
  "partner_trx_id": "TRX-20250408-001"
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
RequestBody body = RequestBody.create(mediaType, "{\n"
                    + "  \"partner_trx_id\": \"TRX-20250408-001\"\n"
                    + "}\n");
Request request = new Request.Builder()
  .url("{{base_url}}/api/claim-fund/void")
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
  "partner_trx_id": "TRX-20250408-001",
  "action": "APPROVE"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "%7B%7Bbase_url%7D%7D/api/claim-fund/void");
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
$request->setUrl('{{base_url}}/api/claim-fund/void');
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
$request->setBody('{
  \"partner_trx_id\": \"TRX-20250408-001\"
}');
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
  "partner_trx_id": "TRX-20250408-001"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("PUT", "/api/claim-fund/void", payload, headers)
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
  "tx_status": "EXPIRED",
  "tx_status_description": "The Claim Fund link has expired or has been voided",
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "claim_fund_link": "https://claimfund.oyindonesia.com/claim-fund/claim/251280aa-95cb-41f2-84c3-8d2b247aa2b4?token=1ac006ce-82d9-4cb6-9afd-a621ca8dafa0",
  "expiration": "2025-04-08 12:10:00",
  "created": "2025-04-08 02:10:00",
  "updated": "2025-04-08 02:10:00"
}

```

This endpoint is used to deactivate the Claim Fund Link. This only applies to a Claim Fund API with status = INITIATED.

### HTTPS Request
**[Production]** `PUT https://partner.oyindonesia.com/api/claim-fund/void`<br>
**[Staging]** `PUT https://api-stg.oyindonesia.com/api/claim-fund/void`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Transaction ID for a specific request, generated by the Client. partner_trx_id should have status = INITIATED.

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}`.<br><br> See [Response Codes & Messages](#response-codes-amp-messages-void-claim-fund) for more details.
tx_status | String | Claim Fund Transaction Status
tx_status_description | String | Description of the Claim Fund Transaction Status
amount | BigInteger | Amount to be claimed
partner_trx_id | String | Unique Transaction ID for a specific request, generated by the Client
recipient_email | String | Recipient Email to receive the Claim Fund Link
recipient_name | String | Recipient Name
note | String | Claim Fund Notes. Accepts alphanumeric characters.
claim_fund_link | String | Claim Fund Link which will be used to fill in Bank Account information
expiration | String | Expiration for the Claim Fund Link. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.
created | String | Claim Fund Link creation datetime. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.
updated | String | Claim Fund last update datetime, based on the latest status update. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive Claim Fund API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 400 Bad Request | 990 | Partner Trx ID is required | Indicates that the partner\_trx\_id parameter is missing from the request or contains an empty or null value. |
| 404 Not Found | 204 | Partner Trx ID is not found | Indicates that the partner\_trx\_id parameter contains a value that either does not exist in the database or is associated with a product named CLAIM\_FUND. |
| 400 Bad Request | 203 | The provided Partner Trx ID has a status that is not eligible for this action | Indicates that the partner\_trx\_id used in the request is not in the INITIATED status, such as: WAITING\_APPROVAL, IN\_PROGRESS, SUCCESS, FAILED, EXPIRED, or REJECTED. |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |

## Get Detail Claim Fund

```shell
curl -X \
GET https://partner.oyindonesia.com/api/claim-fund?partner_trx_id=TRX-20250408-001&send_callback=false \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/claim-fund?partner_trx_id=TRX-20250408-001&send_callback=false'));
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

  url := "%7B%7Bbase_url%7D%7D/api/claim-fund?partner_trx_id=TRX-20250408-001&send_callback=false"
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
  .url("{{base_url}}/api/claim-fund?partner_trx_id=TRX-20250408-001&send_callback=false")
  .method("GET")
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/claim-fund?partner_trx_id=TRX-20250408-001&send_callback=false");
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
$request->setUrl('{{base_url}}/api/claim-fund?partner_trx_id=TRX-20250408-001&send_callback=false');
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
conn.request("GET", "/api/claim-fund?partner_trx_id=TRX-20250408-001&send_callback=false", headers)
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
  "tx_status": "SUCCESS",
  "tx_status_description": "The Claim Fund transaction has completed",
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "claim_fund_link": "https://claimfund.oyindonesia.com/claim-fund/claim/251280aa-95cb-41f2-84c3-8d2b247aa2b4?token=1ac006ce-82d9-4cb6-9afd-a621ca8dafa0",
  "expiration": "2025-04-08 12:10:00",
  "created": "2025-04-08 02:10:00",
  "updated": "2025-04-08 02:10:00"
}

```

This endpoint is used to get Claim Fund API transaction details and resend the callback.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/claim-fund?partner_trx_id=:partner_trx_id&send_callback=:send_callback`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/claim-fund?partner_trx_id=:partner_trx_id&send_callback=:send_callback`

### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Transaction ID for a specific request, generated by the Client
send_callback | Boolean | FALSE | A flag to resend the transaction callback. Default value: false.

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Information about the result of the API request. It does not indicate the status of the transaction itself but rather confirms whether the request was successfully processed by the API. <br><br> `{code: <status_code>, message: <status_message>}`. <br><br> See [Response Codes & Messages](#response-codes-amp-messages-get-detail-claim-fund) for more details.
tx_status | String | Claim Fund Transaction Status
tx_status_description | String | Description of the Claim Fund Transaction Status
amount | BigInteger | Amount to be claimed
partner_trx_id | String | Unique Transaction ID for a specific request, generated by the Client
recipient_email | String | Recipient Email to receive the Claim Fund Link
recipient_name | String | Recipient Name
note | String | Claim Fund Notes. Accepts alphanumeric characters.
claim_fund_link | String | Claim Fund Link which will be used to fill in Bank Account information
expiration | String | Expiration for the Claim Fund Link. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.
created | String | Claim Fund Link creation datetime. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.
updated | String | Claim Fund last update datetime, based on the latest status update. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone.

### Response Codes & Messages

| HTTP Status | Case Code | Response Message | Description |
| ----- | ----- | :---- | :---- |
| 200 OK | 000 | Success | Request successful |
| 403 Forbidden | 201 | User is not found | Indicates that the x-oy-username Header is either missing from the request or is present but empty. It may also indicate that the provided x-oy-username value does not exist in the database. |
| 403 Forbidden | 202 | User is not active | Indicates that the x-oy-username Header contains a value with an inactive Claim Fund API product. |
| 403 Forbidden | 207 | IP Address not registered | Indicates that the Client IP Address is not whitelisted in OY\!. |
| 403 Forbidden | 208 | API Key is not valid | Indicates that the x-api-key Header is either missing from the request or is present but empty. It may also indicate that the provided x-api-key value does not match the one registered in OY\!. |
| 400 Bad Request | 990 | Partner Trx ID is required | Indicates that the partner\_trx\_id parameter is missing from the request or contains an empty value. |
| 404 Not Found | 204 | Partner Trx ID is not found | Indicates that the partner\_trx\_id parameter contains a value that either does not exist in the database or is associated with a product named CLAIM\_FUND. |
| 400 Bad Request | 990 | Send Callback must be either true or false | Indicates that the send\_callback parameter contains a non-boolean value. |
| 429 Too Many Requests | 429 | Too Many Requests | Indicates that the Client has sent too many requests within a given period, exceeding the allowed rate limit. |
| 504 Gateway Timeout | 504 | Request Timeout | Indicates that the server does not receive a timely response from an OY\! Service. |
| 500 Server Error | 999 | Oops\! Something went wrong\! Sorry for the inconvenience. \\n The application has encountered an unknown error. \\n We have been automatically notified and will be looking into this with the utmost urgency. | Indicates failures due to an unexpected issue on the server side, including unhandled NPEs and database issues. |

## Transaction Callback

> Response for waiting approval callback:

```json
{
  "tx_status": "WAITING_APPROVAL",
  "tx_status_description": "The Claim Fund transaction is awaiting approval",
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "claim_fund_link": "https://claimfund.oyindonesia.com/claim-fund/claim/251280aa-95cb-41f2-84c3-8d2b247aa2b4?token=1ac006ce-82d9-4cb6-9afd-a621ca8dafa0",
  "expiration": "2025-04-08 12:10:00",
  "created": "2025-04-08 02:10:00",
  "updated": "2025-04-08 02:15:00"
}
```

> Response for successful callback:

```json
{
  "tx_status": "SUCCESS",
  "tx_status_description": "The Claim Fund transaction has completed",
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "claim_fund_link": "https://claimfund.oyindonesia.com/claim-fund/claim/251280aa-95cb-41f2-84c3-8d2b247aa2b4?token=1ac006ce-82d9-4cb6-9afd-a621ca8dafa0",
  "expiration": "2025-04-08 12:10:00",
  "created": "2025-04-08 02:10:00",
  "updated": "2025-04-08 02:15:00"
}
```

> Response for failed callback:

```json
{
  "tx_status": "FAILED",
  "tx_status_description": "The Claim Fund transaction has failed",
  "amount": 500000,
  "partner_trx_id": "TRX-20250408-001",
  "recipient_email": "recipient@mail.com",
  "recipient_name": "Recipient",
  "note": "note",
  "claim_fund_link": "https://claimfund.oyindonesia.com/claim-fund/claim/251280aa-95cb-41f2-84c3-8d2b247aa2b4?token=1ac006ce-82d9-4cb6-9afd-a621ca8dafa0",
  "expiration": "2025-04-08 12:10:00",
  "created": "2025-04-08 02:10:00",
  "updated": "2025-04-08 02:15:00"
}
```

Our system will send a callback to your system when the Claim Fund API transaction status changes to: WAITING_APPROVAL, SUCCESS, and FAILED.

You can set your own Callback URL in the OY! Business Dashboard settings. You can open the "Settings" tab, click the "Developer Option" menu, click the "Callback Configuration" tab, and fill in your Callback URL in the Claim Fund API field.

We also have a resend callback feature which you can read about [here](https://docs.oyindonesia.com/#feature-resend-callback-sending-payments). 

### Callback Parameters

| Parameter | Data Type | Description |
| :---- | :---- | :---- |
| tx\_status | String | Claim Fund Transaction Status |
| tx\_status\_description | String | Description of the Claim Fund Transaction Status |
| amount | BigInteger | Amount to be claimed |
| partner\_trx\_id | String | Unique Transaction ID for a specific request, generated by the Client |
| recipient\_email | String | Recipient Email to receive the Claim Fund Link |
| recipient\_name | String | Recipient Name |
| note | String | Claim Fund Notes. Accepts alphanumeric characters. |
| claim\_fund\_link | String | Claim Fund Link which will be used to fill in Bank Account information |
| expiration | String | Expiration for the Claim Fund Link. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone. |
| created | String | Claim Fund Link creation datetime. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone. |
| updated | String | Claim Fund last update datetime, based on the latest status update. Using yyyy-MM-dd HH:mm:ss format in GMT+0 time zone. |

## Transaction Status
Below is the list of transaction status of Claim Fund API transaction:

| Transaction Status <br> (Parameter: tx\_status) | Description <br> (Parameter: tx\_status\_description) | Details |
| :---- | :---- | :---- |
| INITIATED | The Claim Fund link has successfully been created and is awaiting the end user's response | State: Non-Final <br> The Claim Fund Link has been successfully created and sent to the Recipient’s Email. The Recipient needs to fill in the Bank Account information in the Claim Fund Link before the expiration date. |
| EXPIRED | The Claim Fund link has expired or has been voided | State: Final <br> There are 2 cases: (1) The Claim Fund Link has expired because the Recipient did not fill in the Bank Account information before the expiration date occurred. (2) The Claim Fund Link has been cancelled or voided by the Owner before the expiration date occurs and the Recipient did not fill in the Bank Account information. |
| WAITING\_APPROVAL | The Claim Fund transaction is awaiting approval | State: Non-Final <br> The Recipient has successfully filled in the Bank Account information and is waiting for the Owner’s approval to carry out the disbursement process. |
| IN\_PROGRESS | The Claim Fund transaction is being processed | State: Non-Final <br> The Owner has approved the transaction and the disbursement process is in progress. |
| SUCCESS | The Claim Fund transaction has completed | State: Final <br> The Claim Fund transaction is successful and the Recipient receives the Claimed Amount. |
| FAILED | The Claim Fund transaction has failed | State: Final <br> The Claim Fund transaction failed and the Recipient did not receive the Claim Amount. No retry disbursement process. |
| REJECTED | The Claim Fund transaction has been rejected | State: Final <br> The Owner has rejected the transaction. No disbursement process. |