# QRIS Aggregator

QRIS aggregator allows you to create QRIS transactions as a payment method to be displayed to your customer.

<aside class="info">
Note: QRIS as Aggregator is implemented using existing Payment Routing API. This section highlights only the parameters and setup relevant for QRIS Aggregator transactions. The base URL and core structure remain the same as those used in Payment Routing. All transactions will be displayed in OY! Dashboard under Payment Routing menu.
</aside>

## Create QRIS Transaction

Use this API to initiate QRIS transactions under the aggregator scheme.


``` shell
curl --location --request POST 'https://partner.oyindonesia.com/api/payment-routing/create-transaction' \
--header 'Content-Type: application/json' \
--header 'x-oy-username: yourusername' \
--header 'x-api-key: apikeymu' \
--data-raw '{
    "partner_user_id": "USR-20211117-1029",
    "use_linked_account": false,
    "partner_trx_id": "TRX-20211117-1030",
    "need_frontend": false,
    "sender_email": "sender@gmail.com",
    "receive_amount": 14000,
    "list_enable_payment_method": "QRIS",
    "list_enable_sof": "QRIS"
}'
```

``` dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'apikeymu'

};
var request = http.Request('POST', Uri.parse('https://partner.oyindonesia.com/api/payment-routing/create-transaction'));
request.body = json.encode({
  "partner_user_id": "USR-20211117-1029",
  "use_linked_account": false,
  "partner_trx_id": "TRX-20211117-1030",
  "need_frontend": false,
  "sender_email": "sender@gmail.com",
  "receive_amount": 14000,
  "list_enable_payment_method": "QRIS",
  "list_enable_sof": "QRIS"
});
request.headers.addAll(headers);

http.StreamedResponse response = await request.send();

if (response.statusCode == 200) {
  print(await response.stream.bytesToString());
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

  url := "https://partner.oyindonesia.com/api/payment-routing/create-transaction"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_user_id": "USR-20211117-1029",
    "use_linked_account": false,
    "partner_trx_id": "TRX-20211117-1030",
    "need_frontend": false,
    "sender_email": "sender@gmail.com",
    "receive_amount": 14000,
    "list_enable_payment_method": "QRIS",
    "list_enable_sof": "QRIS"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("x-oy-username", "yourusername")
  req.Header.Add("x-api-key", "apikeymu")

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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_user_id\": \"USR-20211117-1029\",\n    \"use_linked_account\": false,\n \"partner_trx_id\": \"TRX-20211117-1030\",\n    \"need_frontend\": false,\n    \"sender_email\": \"sender@gmail.com\",\n    \"receive_amount\": 14000,\n    \"list_enable_payment_method\": \"BANK_TRANSFER\",\n    \"list_enable_sof\": \"002\",\n    \"payment_routing\": [{\n        \"recipient_bank\": \"014\",\n        \"recipient_account\": \"1234567890\",\n        \"recipient_amount\": 10000,\n        \"recipient_email\": \"recipient_bca@gmail.com\"\n    }]\n}");
Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/payment-routing/create-transaction")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "yourusername")
  .addHeader("x-api-key", "apikeymu")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_user_id": "USR-20211117-1029",
  "use_linked_account": false,
  "partner_trx_id": "TRX-20211117-1030",
  "need_frontend": false,
  "sender_email": "sender@gmail.com",
  "receive_amount": 14000,
  "list_enable_payment_method": "QRIS",
  "list_enable_sof": "QRIS"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://partner.oyindonesia.com/api/payment-routing/create-transaction");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "yourusername");
xhr.setRequestHeader("x-api-key", "apikeymu");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/payment-routing/create-transaction');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => 'yourusername',
  'x-api-key' => 'apikeymu'
));
$request->setBody('{\n    "partner_user_id": "USR-20211117-1029",\n  "use_linked_account": false,\n  "partner_trx_id": "TRX-20211117-1030",\n    "need_frontend": false,\n    "sender_email": "sender@gmail.com",\n    "receive_amount": 14000,\n    "list_enable_payment_method": "QRIS",\n    "list_enable_sof": "QRIS"\n}');
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

conn = http.client.HTTPSConnection("https://partner.oyindonesia.com", undefined)
payload = json.dumps({
  "partner_user_id": "USR-20211117-1029",
  "use_linked_account": False,
  "partner_trx_id": "TRX-20211117-1030",
  "need_frontend": False,
  "sender_email": "sender@gmail.com",
  "receive_amount": 14000,
  "list_enable_payment_method": "QRIS",
  "list_enable_sof": "QRIS"
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'apikeymu'
}
conn.request("POST", "/api/payment-routing/create-transaction", payload, headers)
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
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_user_id": "USR-20211117-1029",
    "use_linked_account": false,
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "trx_expiration_time": "2021-12-02 18:59:31",
    "payment_info": {
       "qris_url": "www.qris-image-url.com"
    },
    "payment_method": "QRIS",
    "sender_bank": "danamon"
}
```

### HTTPS Request
Endpoint:  
**[Production]** `POST https://partner.oyindonesia.com/api/payment-routing/create-transaction` <br/>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/payment-routing/create-transaction`

### Header
| Field  | Description |  Example   |
| ------------- |:-------------:| ---------- |
| x-oy-username    |Partner username    |   username    |
| x-api-key      | Partner api key     | 6e87432c-2726-11ec-9621-0242ac130002 |

### Request Parameters
| Parameter  | Type |  Required   | Default | Description |
| ------------- |:-------------:| :----------: |:-----:|:-----:|
| partner_trx_id  | String     |  FALSE | - | Unique partner transaction ID. Will automatically be generated if left empty. |
| need_frontend | Boolean     |  TRUE | -| Fill with `false`. |
| list_enable_payment_method | String     |  TRUE | - | Fill with `QRIS`.  |
| list_enable_sof | String      |  TRUE | - | Fill with `QRIS`. |
| receive_amount | Numeric     |  TRUE | - | The amount of a transaction to be paid. For QRIS min. amount is 10.000 and max. amount is 10.000.000 |
| trx_expiration_time | Date string; yyyy-mm-dd hh:mm:ss format (UTC+7)    |  FALSE | 30 minutes | Limited to 1 minute - 1 hour after the request is sent. |

### Response Parameters
| Parameter  | Type | Nullable |  Description   |
| ------------- |:-------------:| ----- | :----------: |
|status|Object| FALSE |Status of response in Object|
|trx_id|String| FALSE |Payment Routing ID defined by OY!|
|partner_trx_id|String| FALSE |Partner transaction ID that you defined in the request parameter|
|receive_amount|Numeric| FALSE |amount to be received. |
|trx_expiration_time|Date string; yyyy-MM-dd HH:mm:ss format| FALSE |Transaction Expiration Time|
|payment_method | String | TRUE | Value is always `QRIS` |
|sender_bank | String | TRUE | Refers to the QRIS vendor integrated with the OY! system. |
|payment_info|Object| FALSE |Payment info object|
|qris_url|String| TRUE |The URL of QR image. This returned URL can only be accessed for 5 minutes after initial response was received, and independent to the actual QRIS validity / expiration time. |

## Check Status QRIS Transaction

Use this API to check the status of QRIS transactions.

```shell
curl --location --request POST 'https://partner.oyindonesia.com/api/payment-routing/check-status' \
--header 'Content-Type: application/json' \
--header 'x-oy-username: yourusername' \
--header 'x-api-key: apikeymu' \
--data-raw '{
    "partner_trx_id": "TRX-20211117-1030",
    "send_callback": false
}'

```

```dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'apikeymu'
};
var request = http.Request('POST', Uri.parse('https://partner.oyindonesia.com/api/payment-routing/check-status'));
request.body = json.encode({
  "partner_trx_id": "TRX-20211117-1030",
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

  url := "https://partner.oyindonesia.com/api/payment-routing/check-status"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_trx_id": "TRX-20211117-1030",
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
  req.Header.Add("x-oy-username", "yourusername")
  req.Header.Add("x-api-key", "apikeymu")

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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_trx_id\": \"TRX-20211117-1030\",\n    \"send_callback\": true\n}");
Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/payment-routing/check-status")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "yourusername")
  .addHeader("x-api-key", "apikeymu")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_trx_id": "TRX-20211117-1030",
  "send_callback": false
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://partner.oyindonesia.com/api/payment-routing/check-status");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "yourusername");
xhr.setRequestHeader("x-api-key", "apikeymu");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/payment-routing/check-status');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => 'yourusername',
  'x-api-key' => 'apikeymu'
));
$request->setBody('{\n    "partner_trx_id": "TRX-20211117-1030",\n    "send_callback": false\n}');
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

conn = http.client.HTTPSConnection("https://partner.oyindonesia.com", undefined)
payload = json.dumps({
  "partner_trx_id": "TRX-20211117-1030",
  "send_callback": False
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'apikeymu'
}
conn.request("POST", "/api/payment-routing/check-status", payload, headers)
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
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_trx_id": "TRX-20211117-1030",
    "request_amount": 14000,
    "received_amount": 0,
    "payment_status": "COMPLETE",
    "payment_received_time":"2021-12-02 18:45:47",
    "settlement_time":"2021-12-03 15:00:00",
    "settlement_type":"NON_REALTIME",
    "settlement_status":"WAITING",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "QRIS",
    "sender_bank": "danamon",
    "payment_info": {
        "qris_url": "https://checkout.oyindonesia.com/api/qris/image/123456789-abcd"
    },
    "payment_routing": [],
    "use_linked_account": false
}
```

### HTTPS Request
Endpoint:  
**[Production]** `POST https://partner.oyindonesia.com/api/payment-routing/check-status` <br/>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/payment-routing/check-status`

### Header
| Field  | Description |  Example   |
| ------------- |:-------------:| ---------- |
| x-oy-username    |Partner username    |   username    |
| x-api-key      | Partner api key     | 6e87432c-2726-11ec-9621-0242ac130002 |

### Request Parameter
| Parameter  | Type |  Required   | Default | Description |
| ------------- |:-------------:| :----------: | :-------------:| :----------: |
|partner_trx_id|String|FALSE|-|Unique partner transaction ID |
|payment_reference_number|String|FALSE|-|Unique reference ID for QRIS transactions. The reference number is stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code |
|send_callback|Boolean|FALSE|-|If set true, we also send response as a callback to partner|

<aside class="warning">
Note: All requests made must contain "partner_trx_id" or "payment_reference_number", but not both at the same time, otherwise will return error.
</aside>

### Responses Parameter

| Parameter  | Type | Nullable |  Description   |
| ------------- |:-------------:| ----- | :----------: |
|status|Object| FALSE |Status of response in Object|
|trx_id|String| FALSE |payment routing transaction id|
|partner_trx_id|String| FALSE |Partner transaction ID|
|request_amount|Numeric| FALSE |Amount requested to be paid by end user|
|received_amount|Numeric| FALSE |Amount received. If user has paid, then the amount will be equal to request_amount. |
|payment_status|String| FALSE |Status of the transaction|
|trx_expiration_time|Timestamp| FALSE |Transaction expiration time|
|payment_received_time|Timestamp| TRUE |Indicates the time when payment routing is marked as COMPLETE (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_time|String| TRUE | The timestamp (in UTC+7) indicating when the fund will be settled to partner’s account statement (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_status|String| TRUE | The status of the settlement (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_type|String| TRUE |Indicate if a transaction will be settled in realtime/non-realtime. (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|need_frontend|Boolean| FALSE |Value is always `false`|
|payment_method | String | TRUE | Value is always `QRIS` |
|sender_bank | String | TRUE | Refers to the QRIS vendor integrated with the OY! system. |
|payment_info|Object| FALSE |Payment info Object|
|qris_url|String| TRUE |the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS. This returned URL can only be accessed for 5 minutes after initial response was received, and is independent to the actual QRIS validity / expiration time.|
|payment_reference_number|String| FALSE | Identifier of a payment attempt when the end user successfully completes the payment. The reference number is also stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code.|

## Callback QRIS Transaction
Once user successfully do the payment, our system will make a callback via HTTP POST request to your system

<aside class="info">
Note: QRIS Aggregator is implemented using existing Payment Routing API. The transaction will trigger a callback to the callback URL configured in OY! Dashboard under Payment Routing settings.
</aside>

> QRIS Callback Structure

```json
{
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_trx_id": "TRX-20211117-1030",
    "received_amount": 14000,
    "payment_status": "COMPLETE",
    "payment_received_time":"2021-12-02 18:45:47",
    "settlement_time":"2021-12-03 15:00:00",
    "settlement_type":"NON_REALTIME",
    "settlement_status":"WAITING",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "QRIS",
    "sender_bank": "danamon",
    "payment_info": {
        "qris_url": "https://checkout.oyindonesia.com/api/qris/image/123456789-abcd"
    },
    "payment_routing": [],
    "use_linked_account": false
}
```

### Callback for Delayed Settlement (Non-Real Time Settlement)

If your settlement is non-real time, for every transaction whose payment method is settled H+>0 from the time of transaction, you will receive two callbacks with details as follows:

1.  1st Callback -> To be sent after your customer successfully executes the transaction. For example, if your customer executes the transaction on 11 May 2021 at 14:00:00, that is also when we send the 1st Callback to you. In the 1st callback, the settlement status is set to WAITING (because it is not yet settled to your Account Statement balance)
2.  2nd Callback -> To be sent after the settlement status is changed from WAITING into SUCCESS. For example, if the settlement status is changed into SUCCESS on 12 May 2021 at 15:00:00, that is also when we send the 2nd Callback to you. In the 2nd callback, the settlement status is SUCCESS

### Callback Parameter

| Parameter  | Type | Nullable |  Description   |
| ------------- |:-------------:| ----- | :----------: |
|trx_id|String| FALSE |payment routing transaction id|
|use_linked_account|Boolean| FALSE |Value is always `false`|
|partner_trx_id|String| FALSE |Partner transaction ID|
|received_amount|String| FALSE |Amount to be received. If you use unique code BCA, this number will contain the amount to be received subtracted by 3 digits generated unique code.|
|payment_status|String| FALSE |QRIS transaction status|
|trx_expiration_time|Timestamp| FALSE |Transaction expiration time|
|need_frontend|Boolean| FALSE |Value is always `false`|
|payment_received_time|Timestamp| FALSE |Indicates the time when payment routing is marked as COMPLETE (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_time|String| TRUE | The timestamp (in UTC+7) indicating when the fund will be settled to partner’s account statement (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_status|String| TRUE | The status of the settlement (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_type|String| TRUE |Indicate if a transaction will be settled in realtime/non-realtime. (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|payment_method | String | TRUE | Value is always `QRIS` |
|sender_bank | String | TRUE | Refers to the QRIS vendor integrated with the OY! system. |
|payment_info|Object| FALSE |Payment info Object|
|qris_url|String| TRUE |the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS. This returned URL can only be accessed for 5 minutes after initial response was received, and is independent to the actual QRIS validity / expiration time.|
|payment_reference_number|String| FALSE | Identifier of a payment attempt when the end user successfully completes the payment. The reference number is also stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code.

## QRIS Transaction Status
| Status               | Description                                                                                                                                            |
|:----------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
| WAITING_PAYMENT      | QRIS transaction has been successfully created and waiting for the end user to pay the transaction. |
| COMPLETE             | Money has been successfully received.                                                                                                    |
| EXPIRED              | QRIS transaction has expired.                                                                                                   |

## QRIS Transaction Response Codes

Below is the list of response codes for QRIS Aggregator:

Response Code | State | Description
---------- | ------- | -------
000 | Final | Response success without error
400 | Final | Request is rejected (Amount is not valid)
400 | Final | Request is rejected (Amount is empty)
400 | Final | Request is rejected (Invalid list payment method)
400 | Final | Request is rejected (Invalid list source of fund)
400 | Final | Request is rejected (Format expiration is yyyy-MM-dd HH:mm:ss and must be between 1 minute and 1 hour)
400 | Final | Request is rejected (Invalid config product disburse or acceptance)
402 | Final | Request is rejected (QR is currently under maintenance)
429 | Final | Request Rejected (Too Many Request to specific endpoint)
203 | Final | Request is rejected (Duplicate Partner Tx Id)
204 | Final | Request is Rejected (Partner Trx ID not found on deactivation request)
254 | Final | Request is Rejected (User credential not found, blocked, or invalid on deactivation request)
300 | Non Final | Request is rejected (Deactivation request failed)
901 | Non Final | General Error


Below is the list of HTTP Status Code for API Payment Routing:

HTTP Status Code | Description
---------- | -------
200 | Response success without error
403 | Forbidden (IP address is not whitelisted or request is deemed suspicious e.g SQL injection or XSS)
404 | Not Found (wrong URL)
429 | Request Rejected (Too Many Request to specific endpoint)
500 | Internal Server Error (OY! system encountered unknown error)
503 | Service Unavailable (OY! system is unable to process the request temporarily)
504 | Gateway Timeout (OY! system took too long processing the request and was unable to respond in time)
