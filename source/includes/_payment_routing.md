# Payment Routing

Payment Routing offers you with end to end solutions from accept payment to disburse the money. You can disburse the money up to 10 recipients.

## Payment Routing Base URL

**[Production Base URL]** : `https://partner.oyindonesia.com`<br/>
**[Staging Base URL]** : `https://api-stg.oyindonesia.com`

## Create and Update Payment Routing

This endpoint will trigger the **creation** of payment routing and will be using the same API to handle the **update** requests.


``` shell
curl --location --request POST 'https://partner.oyindonesia.com/api/payment-routing/create-transaction' \
--header 'Content-Type: application/json' \
--header 'x-oy-username: yourusername' \
--header 'x-api-key: apikeymu' \
--data-raw '{
    "partner_user_id": "USR-20211117-1029",
    "partner_trx_id": "TRX-20211117-1030",
    "need_frontend": false,
    "sender_email": "sender@gmail.com",
    "receive_amount": 14000,
    "list_enable_payment_method": "VA",
    "list_enable_sof": "002",
    "va_display_name": "partner_brand",
    "payment_routing": [{
        "recipient_bank": "014",
        "recipient_account": "1234567890",
        "recipient_amount": 10000,
        "recipient_email": "recipient_bca@gmail.com"
    }]
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
  "partner_trx_id": "TRX-20211117-1030",
  "need_frontend": false,
  "sender_email": "sender@gmail.com",
  "receive_amount": 14000,
  "list_enable_payment_method": "VA",
  "list_enable_sof": "002",
  "va_display_name": "partner_brand",
  "payment_routing": [
    {
      "recipient_bank": "014",
      "recipient_account": "1234567890",
      "recipient_amount": 10000,
      "recipient_email": "recipient_bca@gmail.com"
    }
  ]
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
    "partner_trx_id": "TRX-20211117-1030",
    "need_frontend": false,
    "sender_email": "sender@gmail.com",
    "receive_amount": 14000,
    "list_enable_payment_method": "VA",
    "list_enable_sof": "002",
    "va_display_name": "partner_brand",
    "payment_routing": [{
        "recipient_bank": "014",
        "recipient_account": "1234567890",
        "recipient_amount": 10000,
        "recipient_email": "recipient_bca@gmail.com"
    }]
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_user_id\": \"USR-20211117-1029\",\n    \"partner_trx_id\": \"TRX-20211117-1030\",\n    \"need_frontend\": false,\n    \"sender_email\": \"sender@gmail.com\",\n    \"receive_amount\": 14000,\n    \"list_enable_payment_method\": \"VA\",\n    \"list_enable_sof\": \"002\",\n    \"va_display_name\": \"partner_brand\",\n    \"payment_routing\": [{\n        \"recipient_bank\": \"014\",\n        \"recipient_account\": \"1234567890\",\n        \"recipient_amount\": 10000,\n        \"recipient_email\": \"recipient_bca@gmail.com\"\n    }]\n}");
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
  "partner_trx_id": "TRX-20211117-1030",
  "need_frontend": false,
  "sender_email": "sender@gmail.com",
  "receive_amount": 14000,
  "list_enable_payment_method": "VA",
  "list_enable_sof": "002",
  "va_display_name": "partner_brand",
  "payment_routing": [
    {
      "recipient_bank": "014",
      "recipient_account": "1234567890",
      "recipient_amount": 10000,
      "recipient_email": "recipient_bca@gmail.com"
    }
  ]
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
$request->setBody('{\n    "partner_user_id": "USR-20211117-1029",\n    "partner_trx_id": "TRX-20211117-1030",\n    "need_frontend": false,\n    "sender_email": "sender@gmail.com",\n    "receive_amount": 14000,\n    "list_enable_payment_method": "VA",\n    "list_enable_sof": "002",\n    "va_display_name": "partner_brand",\n    "payment_routing": [{\n        "recipient_bank": "014",\n        "recipient_account": "1234567890",\n        "recipient_amount": 10000,\n        "recipient_email": "recipient_bca@gmail.com"\n    }]\n}');
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
  "partner_trx_id": "TRX-20211117-1030",
  "need_frontend": False,
  "sender_email": "sender@gmail.com",
  "receive_amount": 14000,
  "list_enable_payment_method": "VA",
  "list_enable_sof": "002",
  "va_display_name": "partner_brand",
  "payment_routing": [
    {
      "recipient_bank": "014",
      "recipient_account": "1234567890",
      "recipient_amount": 10000,
      "recipient_email": "recipient_bca@gmail.com"
    }
  ]
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
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "trx_expiration_time": "2021-12-02 18:59:31",
    "payment_info": {
        "va_number": "103406000000006289",
        "va_display_name": "partner_brand"
    }
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
|partner_user_id   | String    |   Only applicable for VA Aggregator. If you want the VA to be reusable for each users (multiple use), you are required define this parameter.| - |  Unique partner user id |
| partner_trx_id  | String     |  FALSE | - | Unique partner transaction ID |
| need_frontend | Boolean     |  TRUE | -| Partner need UI or not, if true, we will route to payment link, otherwise will be route to API-based solution. |
| sender_email | String     |  FALSE | - | Email of sender |
| receive_amount | Numeric     |  TRUE | - | The amount of a transaction to be paid, min. amount is 10000 |
| list_enable_payment_method | String; comma separated     |  TRUE | - | To configure payment methods to be enabled in the payment method page; For example, if need_frontend is TRUE, you can fill it with VA,EWALLET,QRIS,CREDIT_CARD. If need_frontend is FALSE only can accept VA and QRIS. |
| list_enable_sof | String; comma separated      |  TRUE | - | To configure list of source of fund (banks or ewallets) to be enabled in the payment method page; For example, if need_frontend is TRUE, you can fill it with 008,009,dana_ewallet,linkaja_ewallet. If need_frontend is FALSE, this parameter should have only have one bank code. |
| va_display_name | String     |  FALSE | Partner's brand name | Display name for VA that will be displayed once user do inquiry. If empty VA name will be set using partner brand name |
| trx_expiration_time| Date string; yyyy-mm-dd hh:mm:ss format     |  FALSE | 24 hours | Set expiration time of transaction. If empty use default 24h.  Min exp time is 1 hour.|
| trx_counter | Numeric     |  FALSE | 1/-1 | Only applicable if you choose VA. It is a transaction counter to limit number of transaction that can be receive by va number. For example, if you put 3, it means that the VA number can only accept transaction 3 times. |
| payment_routing | List of Objects     |  TRUE | - | List of disburse recipient; min. is 1, max. is 10 |
| recipient_bank | String     |  TRUE | - | Bank code of the recipient account |
| recipient_account | String     |  TRUE| - | Recipient bank account number. For testing purpose, please see List of Disbursment Mock Account below |
| recipient_amount | Numeric     |  TRUE| - | The amount of transaction to be disbursed |
| recipient_note | String     |  TRUE | - | Notes for the disbursement|
| recipient_email | String     |  TRUE | - | Email for disbursement notification, email can be up to 5, seperated by a whitespace|

### Response Parameters
| Parameter  | Type |  Description   |
| ------------- |:-------------:| :----------: |
|status|Object|Status of response in Object|
|trx_id|String|Payment Routing ID defined by OY!|
|partner_user_id|String|Partner user ID that you defined in the request parameter|
|partner_trx_id|String|Partner transaction ID that you defined in the request parameter|
|receive_amount|Numeric|amount to be received|
|trx_expiration_time|Date string; yyyy-MM-dd HH:mm:ss format|Trasnaction Expiration Time|
|payment_info|Object|Payment info object|
|payment_checkout_url|String|generated url for payment link; conditional, only exist if request need_frontend is TRUE|
|va_number|String|Generated VA number; conditional, only exist if request need_frontend is FALSE and payment_method is VA|
|va_display_name|String|VA display name; conditional, only exist if request need_frontend is FALSE and payment_method is VA|
|qris_url|String|the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS|

<aside class="warning">
Note: For payments and inquiries involving a BSI VA using BSI Mobile or Banking Syariah Indonesia Net, please only input the last 12 digits of the va_number (remove 6059 from the va_number with format "6059xxxxxxxxxxxx"). This does not apply to payments and inquiries involving a BSI VA using other methods
</aside>

### List of Disbursement Mock Account for Testing Purpose 
Use those mock receiver bank account for testing Payment Routing purpose. To simulate all available status of Payment Routing, you can combine those mocked bank account numbers. For example, if you want to see `INCOMPLETE` status, put two recipients in the payment_routing object with mocked bank account number `1234567890` and `1234567891`. For more information about payment Routing status, see List of Payment Routing section.

| Mocked Account Number  | Mocked Disbursement Status | 
| :-------------: |:-------------:|
| 1234567890 | SUCCESS |
|1234567891|FAILED|
|1234567892|FAILED FORCE CREDIT|
|1234567893|PENDING|
|1234567894|PENDING FORCE CREDIT|


## Check Status Payment Routing Transaction

And endpoint to check status of payment routing transaction.

```shell
curl --location --request POST 'https://partner.oyindonesia.com/api/payment-routing/check-status' \
--header 'Content-Type: application/json' \
--header 'x-oy-username: yourusername' \
--header 'x-api-key: apikeymu' \
--data-raw '{
    "partner_trx_id": "TRX-20211117-1030",
    "send_callback": true
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

  url := "https://partner.oyindonesia.com/api/payment-routing/check-status"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_trx_id": "TRX-20211117-1030",
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
  "send_callback": true
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
$request->setBody('{\n    "partner_trx_id": "TRX-20211117-1030",\n    "send_callback": true\n}');
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
  "send_callback": True
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
    "partner_user_id": "USR-20211117-1029",
    "partner_trx_id": "TRX-20211117-1030",
    "request_amount": 14000,
    "received_amount": 0,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_info": {
        "va_number": "103406000000006289",
        "va_display_name": "partner_brand"
    },
    "payment_routing": [
        {
            "recipient_bank": "014",
            "recipient_account": "1234567890",
            "recipient_account_name": "Katelin Bode",
            "recipient_amount": 10000.0000,
            "disbursement_trx_id": "35ff4e6b-e240-44b3-aff1-1151289e912e",
            "trx_status": "WAITING"
        }
    ]
}
```

### HTTP Request
Endpoint:  
**[Production]** `POST https://partner.oyindonesia.com/api/payment-routing/check-status`<br/> 
**[Staging]** `POST https://api-stg.oyindonesia.com/api/payment-routing/check-status`

### Header
| Field  | Description |  Example   |
| ------------- |:-------------:| ---------- |
| x-oy-username    |Partner username    |   username    |
| x-api-key      | Partner api key     | 6e87432c-2726-11ec-9621-0242ac130002 |

### Request Parameter
| Parameter  | Type |  Required   | Default | Description |
| ------------- |:-------------:| :----------: | :-------------:| :----------: |
|partner_trx_id|String|TRUE|-|Unique partner transaction ID
|send_callback|Boolean|FALSE|-|If set true, we also send response as a callback to partner|


### Responses Parameter

| Parameter  | Type |  Description   |
| ------------- |:-------------:| :----------: |
|status|Object|Status of response in Object|
|trx_id|String|payment routing transaction id|
|partner_user_id|String|Partner user ID|
|partner_trx_id|String|Partner transaction ID|
|request_amount|Numeric|Amount requested to be paid by end user|
|received_amount|Numeric|Amount received. If user has paid, then the amount will be equal to request_amount|
|payment_status|String|Receive money status|
|trx_expiration_time|partner_user_id|Transaction expiration time|
|need_frontend|Boolean|Partner need UI or not, if true, we will route to payment link, otherwise will be route to va aggregator.|
|payment_info|Object|Payment info Object|
|payment_checkout_url|String|generated url for payment link; conditional, only exist if request need_frontend is TRUE|
|va_number|String|Generated VA number; conditional, only exist if request need_frontend is FALSE and payment_method is VA|
|va_display_name|String|VA display name; conditional, only exist if request need_frontend is FALSE and payment_method is VA|
|qris_url|String|the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS|
|payment_routing|List of Object|List of payment routing recipients. See row belows|
|recipient_bank|String|Bank code of the recipient account|
|recipient_account|String|Recipient's account number|
|recipient_account_name|String|Recipient's bank account name|
|recipient_amount|Numeric|The amount of transaction to be disbursed|
|recipient_email|String; e-mail format|Email for disbursement notification, email can be up to 5, seperated by a whitespace|
|disbursement_trx_id|String|Disbursement transaction id|
|disbursement_trx_notes|String|Disbursement Transaction notes|
|disbursement_trx_status|String|Disbursement transaction status. See List of Disbursement Status below|
|email_status|String|Email sending status; Possible status:- SENT- UNSENT|

<aside class="warning">
Note: For payments and inquiries involving a BSI VA using BSI Mobile or Banking Syariah Indonesia Net, please only input the last 12 digits of the va_number (remove 6059 from the va_number with format "6059xxxxxxxxxxxx"). This does not apply to payments and inquiries involving a BSI VA using other methods
</aside>

## Partner Callback Payment Routing
Once user successfully do the payment, our system will make a callback via HTTP POST request to your system

```json
{
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_user_id": "USR-20211117-1029",
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_info": {
        "va_number": "103406000000006289",
        "va_display_name": "partner_brand"
    },
    "payment_routing": [
        {
            "recipient_bank": "014",
            "recipient_account": "1234567890",
            "recipient_account_name": "Katelin Bode",
            "recipient_amount": 10000.0000,
            "disbursement_trx_id": "35ff4e6b-e240-44b3-aff1-1151289e912e",
            "trx_status": "WAITING"
        }
    ]
}
```

### Callback Parameter

| Parameter  | Type |  Description   |
| ------------- |:-------------:| :----------: |
|trx_id|String|payment routing transaction id|
|partner_user_id|String|Partner user ID|
|partner_trx_id|String|Partner transaction ID|
|receive_amount|String|Amount to be received|
|payment_status|String|Receive money status|
|trx_expiration_time|partner_user_id|Transaction expiration time|
|need_frontend|Boolean|Partner need UI or not, if true, we will route to payment link, otherwise will be route to va aggregator.|
|payment_info|Object|Payment info Object|
|payment_checkout_url|String|generated url for payment link; conditional, only exist if request need_frontend is TRUE|
|va_number|String|Generated VA number; conditional, only exist if request need_frontend is FALSE and payment_method is VA|
|va_display_name|String|VA display name; conditional, only exist if request need_frontend is FALSE and payment_method is VA|
|qris_url|String|the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS|
|payment_routing|List of Object|List of payment routing recipients. See row belows|
|recipient_bank|String|Bank code of the recipient account|
|recipient_account|String|Recipient's account number|
|recipient_account_name|String|Recipient's bank account name|
|recipient_amount|Numeric|The amount of transaction to be disbursed|
|recipient_email|String; e-mail format|Email for disbursement notification, email can be up to 5, seperated by a whitespace|
|disbursement_trx_id|String|Disbursement transaction id|
|disbursement_trx_notes|String|Disbursement Transaction notes|
|disbursement_trx_status|String|Disbursement transaction status. See List of Disbursement Status below|
|email_status|String|Email sending status; Possible status:- SENT- UNSENT|

<aside class="warning">
Note: For payments and inquiries involving a BSI VA using BSI Mobile or Banking Syariah Indonesia Net, please only input the last 12 digits of the va_number (remove 6059 from the va_number with format "6059xxxxxxxxxxxx"). This does not apply to payments and inquiries involving a BSI VA using other methods
</aside>

## List of Payment Routing Status
| Status               | Description                                                                                                                                            |
|:----------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
| CREATED              | For Payment Link, Payment Link has been created.                                                                                         |
| WAITING PAYMENT      | For Payment Link, user already choose a payment method in payment link but has not done the payment yet.   For VA, VA number has been created. |
| PAYMENT IN PROGRESS  | User has made a payment and currently being processed by OY!                                                                                           |
| DISBURSE IN PROGRESS | Money has been successfuly received and is being forwared to each recipient.                                                                           |
| COMPLETE             | Money has been successfully received by recipients.                                                                                                    |
| INCOMPLETE           | Money received but forwarding money to recipients process is totally or partially failed.                                                              |
| EXPIRED              | Payment Link or VA number has been expired.                                                                                                   |

## List of Disbursement Status

| Status               | Description                                                                               |
|----------------------|-------------------------------------------------------------------------------------------|
| WAITING              | When status payment routing: Created / Waiting Payment / Payment In Progress              |
| IN PROGRESS          | Money is being forwared to each recipient.                                                |
| PENDING              | Disbursement pending because of disbursement channel                                      |
| PENDING FORCE CREDIT | When force credit process is pending                                                      |
| SUCCESS              | Money has been successfully received by recipients.                                       |
| CANCEL               | Not receiving any payment so system will automatically cancel sending money to recipients |
| FAILED               | Sending money to recipient process is failed                                              |
| FAILED FORCE CREDIT  | When force credit process is failed                                                       |
