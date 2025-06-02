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
    "use_linked_account": false,
    "partner_trx_id": "TRX-20211117-1030",
    "need_frontend": false,
    "sender_email": "sender@gmail.com",
    "receive_amount": 14000,
    "list_enable_payment_method": "BANK_TRANSFER",
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
  "use_linked_account": false,
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
    "use_linked_account": false,
    "partner_trx_id": "TRX-20211117-1030",
    "need_frontend": false,
    "sender_email": "sender@gmail.com",
    "receive_amount": 14000,
    "list_enable_payment_method": "BANK_TRANSFER",
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_user_id\": \"USR-20211117-1029\",\n    \"use_linked_account\": false,\n \"partner_trx_id\": \"TRX-20211117-1030\",\n    \"need_frontend\": false,\n    \"sender_email\": \"sender@gmail.com\",\n    \"receive_amount\": 14000,\n    \"list_enable_payment_method\": \"BANK_TRANSFER\",\n    \"list_enable_sof\": \"002\",\n    \"va_display_name\": \"partner_brand\",\n    \"payment_routing\": [{\n        \"recipient_bank\": \"014\",\n        \"recipient_account\": \"1234567890\",\n        \"recipient_amount\": 10000,\n        \"recipient_email\": \"recipient_bca@gmail.com\"\n    }]\n}");
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
  "list_enable_payment_method": "BANK_TRANSFER",
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
$request->setBody('{\n    "partner_user_id": "USR-20211117-1029",\n  "use_linked_account": false,\n  "partner_trx_id": "TRX-20211117-1030",\n    "need_frontend": false,\n    "sender_email": "sender@gmail.com",\n    "receive_amount": 14000,\n    "list_enable_payment_method": "BANK_TRANSFER",\n    "list_enable_sof": "002",\n    "va_display_name": "partner_brand",\n    "payment_routing": [{\n        "recipient_bank": "014",\n        "recipient_account": "1234567890",\n        "recipient_amount": 10000,\n        "recipient_email": "recipient_bca@gmail.com"\n    }]\n}');
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
  "list_enable_payment_method": "BANK_TRANSFER",
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
    "use_linked_account": false,
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "trx_expiration_time": "2021-12-02 18:59:31",
    "payment_method": "VA",
    "sender_bank": "009",
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
|partner_user_id   | String    |   Applicable for VA and EWallet with `need_frontend: false`. If you want the VA to be reusable for each users (multiple use) or create EWallet Direct Payment transaction, you are required define this parameter.| - |  Unique partner user id. Will automatically be generated if left empty on VA payment method with `need_frontend: false`. For EWallet Direct Payment, it is required to register `partner_user_id` using Account Linking API first.|
| use_linked_account | Boolean | Applicable for EWallet with `need_frontend: false`. | `false` | If `true`, then EWallet Direct Payment transaction will be created. Else, regular EWallet transaction will be created. |
| partner_trx_id  | String     |  FALSE | - | Unique partner transaction ID. Will automatically be generated if left empty. |
| need_frontend | Boolean     |  TRUE | -| Partner need UI or not, if true, we will route to payment link, otherwise will be route to API-based solution. |
| list_enable_payment_method | String; comma separated     |  TRUE | - | To configure payment methods to be enabled in the payment method page.  |
| list_enable_sof | String; comma separated      |  TRUE | - | To configure list of source of fund (banks or ewallets) to be enabled in the payment method page. For additional detail please refer to [List Allowed Payment Methods and SOF](https://api-docs.oyindonesia.com/#if-need_frontend-true-list-of-allowed-payment-methods-and-sof) |
| sender_email | String     |  CONDITIONAL | - | Email of sender. Required only when creating VA from Mandiri(008), Permata(013) or CIMB(022). |
| full_name | String       | CONDITIONAL | - | Fill with the name of end-user that will pay this transaction. Required only when creating VA from Mandiri(008), Permata(013) or CIMB(022). |
| receive_amount | Numeric     |  TRUE | - | The amount of a transaction to be paid, min. amount is 10000, except if you use unique code BCA which has min. amount 11000 or CARDS which has min. amount 15000 |
| va_display_name | String     |  FALSE | Partner's brand name | Display name for VA that will be displayed once user do inquiry. If empty VA name will be set using partner brand name. This parameter will be used only if you use BANK_TRANSFER payment method and routed to VA. |
| trx_expiration_time | Date string; yyyy-mm-dd hh:mm:ss format (UTC+7)    |  FALSE | Refer to [Default Expiration Time](https://api-docs.oyindonesia.com/#transaction-expiration-time-guidelines-create-and-update-payment-routing) | Set expiration time of transaction. Please refer to [Transaction Expiration Time Guidelines](https://api-docs.oyindonesia.com/#transaction-expiration-time-guidelines-create-and-update-payment-routing) |
| trx_counter | Numeric     |  FALSE | 1 | A transaction counter to limit number of transaction that can be receive by va number. Currently we only support single transaction (value = 1) in Payment Routing. This parameter will be used only if you use BANK_TRANSFER payment method and routed to VA. |
| success_redirect_url | String(512) | CONDITIONAL | - | Indicates the URL of your environment to redirect customers back to once payment has been completed. Accepts both HTTP links and URL scheme formats. Required if payment method is either "EWALLET" or "CARDS", and `need_frontend` is set to false. Specific for Shopeepay Direct Payment, Shopeepay will redirect to this url based on the result of the payment. If the payment is successful, ShopeePay will send an additional param `?result=100` following the redirect url. Otherwise, ShopeePay will send additional param `?result=201` for failed payment (insufficient balance, wrong pin, link has been paid, or user click back button). Example: `https://example.com/callback?result=100`. |
| failed_redirect_url | String(512) | CONDITIONAL | - | Indicates the URL of your environment to redirect customers back to once payment cannot be completed. Accepts both HTTP links and URL scheme formats. Required if payment method is "CARDS", and `need_frontend` is set to false. |
| payment_routing | List of Objects     |  FALSE | - | List of disburse recipient; max. is 10 |
| recipient_bank | String     |  TRUE | - | Bank code of the recipient account |
| recipient_account | String     |  TRUE| - | Recipient bank account number. For testing purpose, please see List of Disbursment Mock Account below |
| recipient_amount | Numeric     |  TRUE| - | The amount of transaction to be disbursed |
| recipient_note | String     |  TRUE | - | Notes for the disbursement|
| recipient_email | String     |  TRUE | - | Email for disbursement notification, email can be up to 5, seperated by a whitespace|

### Response Parameters
| Parameter  | Type | Nullable |  Description   |
| ------------- |:-------------:| ----- | :----------: |
|status|Object| FALSE |Status of response in Object|
|trx_id|String| FALSE |Payment Routing ID defined by OY!|
|partner_user_id|String| TRUE |Partner user ID that you defined in the request parameter. Only available for reusable VA or direct payment|
|use_linked_account|Boolean| FALSE |Applicable for EWallet with `need_frontend: false`. If `true`, the transaction created is an EWallet Direct Payment transaction (ShopeePay only). Else, it is a regular EWallet transaction.|
|partner_trx_id|String| FALSE |Partner transaction ID that you defined in the request parameter|
|receive_amount|Numeric| FALSE |amount to be received. If you use unique code BCA, this number will contain the amount to be received subtracted by 3 digits generated unique code.|
|trx_expiration_time|Date string; yyyy-MM-dd HH:mm:ss format| FALSE |Transaction Expiration Time|
|payment_method | String | TRUE | Only exist if request need_frontend is FALSE. The payment method used by user to complete a payment. Refer to Payment Method on [List of Allowed Payment Methods and SOF](#list-of-allowed-payment-methods-and-sof-create-and-update-payment-routing) |
|sender_bank | String | TRUE | Only exist if request need_frontend is FALSE. The bank code used by a payer to do payment. Refer to SOF on [List of Allowed Payment Methods and SOF](#list-of-allowed-payment-methods-and-sof-create-and-update-payment-routing) for Non QRIS Payment Method.<br><br>For QRIS Payment Method, it refers to the QRIS vendor integrated with the OY! system. |
|payment_info|Object| FALSE |Payment info object|
|payment_checkout_url|String| TRUE |generated url for payment link; conditional, only exist if request need_frontend is TRUE|
|account_number|String| TRUE |Generated VA number if you use VA or account number destination if you use unique code BCA; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|account_name|String| TRUE |VA display name if you use VA or bank account's owner name if you use unique code BCA; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|bank_code|String| TRUE |Bank code for the destination VA number or bank account; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|qris_url|String| TRUE |the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS. This returned URL can only be accessed for 5 minutes after initial response was received, and is independent to the actual QRIS validity / expiration time.|
|ewallet_url|String| TRUE | For `use_linked_account: true`: URL that prompt user to input PIN to authorize Direct Payment. For `use_linked_account: false`: A deep link URL that allows user to access the specific e-wallet vendor's application for making a payment. Currently, only Linkaja, ShopeePay and Dana are supported options. This attribute will only be present if the request parameter 'need_frontend' is set to 'FALSE' and the payment method selected is 'EWALLET'.|
|cards_url|String| TRUE | URL that allows user to make payment using their Credit Card. This attribute will only be present if the request parameter 'need_frontend' is set to 'FALSE' and the payment method selected is 'CARDS'.|
|unique_code_detail|Object| TRUE |Contains two objects of number: `amount` which is the requested amount and `unique_code` which is the generated 3 digits unique code ; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER and you use unique code BCA.|
|full_name | String | FALSE | If `full_name` is needed when creating the transaction, the inputted `full_name` value at creation will be shown here.|

<aside class="warning">
Note: For payments and inquiries involving a BSI VA using BSI Mobile or Banking Syariah Indonesia Net, please only input the last 12 digits of the va_number (remove 6059 from the va_number with format "6059xxxxxxxxxxxx"). This does not apply to payments and inquiries involving a BSI VA using other methods. Also note that BSI VAs currently do not support the reusable option, so make sure that partner_user_id is left empty if BSI is chosen in list_enable_sof.
</aside>

### List of Allowed Payment Methods and SOF
Below are the list and examples of possible values for both list_enable_payment_method and list_enable_sof based on the value of `need_frontend`. The requested SOF and/or payment method must be enabled on your account before your request is sent. Also note that the complete request examples provided only use `need_frontend = false`.

#### If need_frontend: true
The request should be filled with at least 1 list_enable_payment_method and 1 list_enable_sof.

| Payment Method |  SOF |
| :---------: | :---------------: |
| BANK_TRANSFER | 002, 008, 009, 011, 014, 016, 022, 213, 451, 484 |
| QRIS | QRIS |
| EWALLET | dana_ewallet, ovo_ewallet, shopeepay_ewallet, linkaja_ewallet |
| CARDS | CC_DC |

If you use BANK_TRANSFER payment method with BCA bank code (014) as SOF, you can either be routed to use VA BCA or unique code BCA. If you are routed to unique code BCA, you can either use addition or subtraction approach by requesting to our business representative. For other SOF with BANK_TRANSFER payment method, you will be routed to use VA.

#### If need_frontend: false
The request should be filled only with 1 list_enable_payment_method and 1 list_enable_sof.

| Payment Method |  SOF |
| :---------: | :---------------: |
| BANK_TRANSFER | 002, 008, 009, 011, 014, 016, 022, 213, 451, 484 |
| QRIS | QRIS |
| EWALLET | dana_ewallet, shopeepay_ewallet, linkaja_ewallet |
| CARDS | CC_DC |

- If you use BANK_TRANSFER payment method with BCA bank code (014) as SOF:
  - in our Staging environment, it will by default create a VA transaction: so please adjust your request’s `trx_expiration_time` accordingly
  - in our Production environment, you will be routed to use VA or unique code based on your commercial agreement with OY!. Contact our business representative to configure using addition or subtraction method
- Using BANK_TRANSFER with other SOFs will route to a VA transaction
- For EWallet Direct Payment (`use_linked_account: true`), only `shopeepay_ewallet` is supported.

#### Examples
| need_frontend | Case | list_enable_payment_method | list_enable_sof |
| :-----: | :------------: | :---------: | :---------: |
| TRUE | BANK_TRANSFER and QRIS | BANK_TRANSFER,QRIS | 008,451,QRIS,002 |
| TRUE | EWALLET, Credit Cards and BANK_TRANSFER | EWALLET,CARDS,BANK_TRANSFER | dana_ewallet,linkaja_ewallet,CARDS,484 |
| FALSE | BANK_TRANSFER Only | BANK_TRANSFER | 009 |
| FALSE | QRIS Only | QRIS | QRIS |
| FALSE | EWALLET Only | EWALLET | dana_ewallet |
| FALSE | CARDS Only | CARDS | CC_DC |

### Transaction Expiration Time Guidelines
The table below lists the valid expiration times for transactions based on the payment method and source of funds. Unless specified, the default expiration time is 24 hours and the minimum expiration time is 1 hour.

| Payment Method |  SOF | Default Expiration Time | Expiration Time |
| :---------: | :---------------: | :---------------: | :---------------: |
| QRIS | QRIS | 30 minutes | Limited to 1 minute - 1 hour after the request is sent. The QRIS validity period is dynamic within the aforementioned limit.
| EWALLET | dana_ewallet, shopeepay_ewallet | 60 minutes | 1 minute - 60 minutes.
| EWALLET | linkaja_ewallet | 5 minutes | 5 minutes, regardless of the expiration time specified in the request.
| EWALLET (Direct Payment) | shopeepay_ewallet | 30 minutes | 30 minutes, regardless of the expiration time specified in the request
| CARDS | CC_DC | 60 minutes | 60 minutes, regardless of the expiration time specified in the request.
| BANK_TRANSFER (unique code BCA only) | 014 | 3 hours | Limited to 1 minute - 3 hours after the request is sent, and maximum at 20:30 (UTC+7). If default expiration time (3 hours) exceeds 20:30, then the expiration time will be 20:30. This does not apply in Staging, as you will be routed to use VA by default in the staging environment. Please check the default transaction expiration time.

### List of Disbursement Mock Account for Testing Purpose 
Use those mock receiver bank account for testing Payment Routing purpose. To simulate all available status of Payment Routing, you can combine those mocked bank account numbers. For example, if you want to see `INCOMPLETE` status, put two recipients in the payment_routing object with mocked bank account number `1234567890` and `1234567891`. For more information about payment Routing status, see List of Payment Routing section.

| Mocked Account Number  | Mocked Disbursement Status | 
| :-------------: |:-------------:|
| 1234567890 | SUCCESS |
|1234567891|FAILED|
|1234567892|FAILED FORCE CREDIT|
|1234567893|PENDING|
|1234567894|PENDING FORCE CREDIT|

## Deactivate Payment Routing

Use this API to **deactivate** an existing **QRIS transaction** created via payment routing using the same partner_trx_id inputted at creation.
Currently, only QRIS transaction created with **need_frontend** param set as false are able to be deactivated. 

``` shell
curl --location --request DELETE 'https://partner.oyindonesia.com/api/payment-routing/mypartnertrxid123' \
--header 'Content-Type: application/json' \
--header 'x-oy-username: yourusername' \
--header 'x-api-key: apikeymu' \
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    }
}
```

### HTTPS Request
Endpoint:  
**[Production]** `DELETE https://partner.oyindonesia.com/api/payment-routing/<partnerTrxId>` <br/>
**[Staging]** `DELETE https://api-stg.oyindonesia.com/api/payment-routing/<partnerTrxId>`

### Header
| Field  | Description |  Example   |
| ------------- |:-------------:| ---------- |
| x-oy-username    |Partner username    |   username    |
| x-api-key      | Partner api key     | 6e87432c-2726-11ec-9621-0242ac130002 |

### URL Parameters
| Parameter  | Type | Required | Description |
| ------------- |:-------------:| :----------: |:-----:|
|partnerTrxId   | String  | TRUE | Unique id inputted in creation process |

### Response Parameters
| Parameter  | Type | Nullable |  Description   |
| ------------- |:-------------:| ----- | :----------: |
|status|Object| FALSE |Status of response in Object|


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
    "use_linked_account": false,
    "partner_trx_id": "TRX-20211117-1030",
    "request_amount": 14000,
    "received_amount": 0,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "VA",
    "sender_bank": "009",
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
|partner_trx_id|String|FALSE|-|Unique partner transaction ID
|payment_reference_number|String|FALSE|-|Unique reference ID for QRIS transactions. The reference number is stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code
|send_callback|Boolean|FALSE|-|If set true, we also send response as a callback to partner|

<aside class="warning">
Note: All requests made must contain "partner_trx_id" or "payment_reference_number", but not both at the same time, otherwise will return error.
</aside>

### Responses Parameter

| Parameter  | Type | Nullable |  Description   |
| ------------- |:-------------:| ----- | :----------: |
|status|Object| FALSE |Status of response in Object|
|trx_id|String| FALSE |payment routing transaction id|
|partner_user_id|String| TRUE |Partner user ID. Only available for reusable VA or direct payment|
|partner_trx_id|String| FALSE |Partner transaction ID|
|request_amount|Numeric| FALSE |Amount requested to be paid by end user|
|received_amount|Numeric| FALSE |Amount received. If user has paid, then the amount will be equal to request_amount. If you use unique code BCA, this number will contain the amount received subtracted by 3 digits generated unique code.|
|payment_status|String| FALSE |Receive money status|
|trx_expiration_time|Timestamp| FALSE |Transaction expiration time|
|payment_received_time|Timestamp| TRUE |Indicates the time when payment routing is marked as COMPLETE (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_time|String| TRUE | The timestamp (in UTC+7) indicating when the fund will be settled to partner’s account statement (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_status|String| TRUE | The status of the settlement (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_type|String| TRUE |Indicate if a transaction will be settled in realtime/non-realtime. (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|need_frontend|Boolean| FALSE |Partner need UI or not, if true, we will route to payment link, otherwise will be routed to payment aggregator.|
|payment_method | String | TRUE | The payment method used by user to complete a payment. Conditional, only exist if request need_frontend is FALSE. Refer to Payment Method on [List of Allowed Payment Methods and SOF](#list-of-allowed-payment-methods-and-sof-create-and-update-payment-routing) |
|sender_bank | String | TRUE | The bank code used by a payer to do payment. Conditional, only exist if request need_frontend is FALSE. Refer to SOF on [List of Allowed Payment Methods and SOF](#list-of-allowed-payment-methods-and-sof-create-and-update-payment-routing) for Non QRIS Payment Method.<br><br>For QRIS Payment Method, it refers to the QRIS vendor integrated with the OY! system. |
|payment_info|Object| FALSE |Payment info Object|
|payment_checkout_url|String| TRUE |generated url for payment link; conditional, only exist if request need_frontend is TRUE|
|account_number|String| TRUE |Generated VA number if you use VA or account number destination if you use unique code BCA; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|account_name|String| TRUE |VA display name if you use VA or bank account's owner name if you use unique code BCA; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|qris_url|String| TRUE |the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS. This returned URL can only be accessed for 5 minutes after initial response was received, and is independent to the actual QRIS validity / expiration time.|
|payment_reference_number|String| FALSE | Identifier of a payment attempt when the end user successfully completes the payment. The reference number is also stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code. Available for: QRIS
|ewallet_url|String| TRUE | For `use_linked_account: true`: URL that prompt user to input PIN to authorize Direct Payment. For `use_linked_account: false`: A deep link URL that allows user to access the specific e-wallet vendor's application for making a payment. Currently, only Linkaja, ShopeePay and Dana are supported options. This attribute will only be present if the request parameter 'need_frontend' is set to 'FALSE' and the payment method selected is 'EWALLET'.|
|cards_url|String| TRUE | URL that allows user to make payment using their Credit Card. This attribute will only be present if the request parameter 'need_frontend' is set to 'FALSE' and the payment method selected is 'CARDS'.|
|unique_code_detail|Object| TRUE |Contains two objects of number: `amount` which is the requested amount and `unique_code` which is the generated 3 digits unique code ; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER and you use unique code BCA.|
|payment_routing|List of Object| TRUE |List of payment routing recipients. Only available if exist upon creation. See row belows|
|recipient_bank|String| FALSE |Bank code of the recipient account|
|recipient_account|String| FALSE |Recipient's account number|
|recipient_account_name|String| FALSE |Recipient's bank account name|
|recipient_amount|Numeric| FALSE |The amount of transaction to be disbursed|
|recipient_email|String; e-mail format| TRUE |Email for disbursement notification, email can be up to 5, seperated by a whitespace. Only available if exist upon creation|
|disbursement_trx_id|String| FALSE |Disbursement transaction id|
|disbursement_trx_notes|String| TRUE |Disbursement Transaction notes. Only available if exist upon creation|
|disbursement_trx_status|String| FALSE |Disbursement transaction status. See List of Disbursement Status below|
|email_status|String| FALSE |Email sending status; Possible status:- SENT- UNSENT|

<aside class="warning">
Note: For payments and inquiries involving a BSI VA using BSI Mobile or Banking Syariah Indonesia Net, please only input the last 12 digits of the va_number (remove 6059 from the va_number with format "6059xxxxxxxxxxxx"). This does not apply to payments and inquiries involving a BSI VA using other methods
</aside>

## Partner Callback Payment Routing
Once user successfully do the payment, our system will make a callback via HTTP POST request to your system

> Callback Structure for Payment Link (need_frontend = true)

```json
{
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "VA",
    "sender_bank": "009",
    "payment_info": {
        "payment_checkout_url": "https://pay.oyindonesia.com/12345678-9012-3456-7890-123456789012"
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

> Callback Structure for VA

```json
{
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_user_id": "USR-20211117-1029",
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "VA",
    "sender_bank": "009",
    "payment_info": {
        "account_number": "103406000000006289",
        "account_name": "partner_brand",
        "bank_code": "009"
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

> Callback Structure for Unique Code

```json
{
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "BANK_TRANSFER",
    "sender_bank": "014",
    "payment_info": {
        "account_number": "123",
        "account_name": "PT. Dompet Harapan Bangsa",
        "bank_code": "014",
        "unique_code_detail": {
            "amount": 14123,
            "unique_code": 123,
            "unique_amount": 14000
        }
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

> Callback Structure for QRIS

```json
{
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "QRIS",
    "sender_bank": "QRIS",
    "payment_info": {
        "qris_url": "https://qris.url.com",
        "payment_reference_number": "120345030342784191"
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

> Callback Structure for E-wallet

```json
{
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "EWALLET",
    "sender_bank": "dana_ewallet",
    "payment_info": {
        "ewallet_url": "https://ewallet.url.com"
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

> Callback Structure for Cards

```json
{
    "trx_id": "23a009f5-24ce-4567-96b3-03c42a0fb7ae",
    "partner_trx_id": "TRX-20211117-1030",
    "receive_amount": 14000,
    "payment_status": "WAITING_PAYMENT",
    "trx_expiration_time": "2021-12-02 18:59:31",
    "need_frontend": false,
    "payment_method": "CARDS",
    "sender_bank": "CC_DC",
    "payment_info": {
        "card_url": "https://ccdc.link.com"
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

### Callback for Delayed Settlement (Non-Real Time Settlement)

If your settlement is non-real time, for every transaction whose payment method is settled H+>0 from the time of transaction, you will receive two callbacks with details as follows:

1.  1st Callback -> To be sent after your customer successfully executes the transaction. For example, if your customer executes the transaction on 11 May 2021 at 14:00:00, that is also when we send the 1st Callback to you. In the 1st callback, the settlement status is set to WAITING (because it is not yet settled to your Account Statement balance)
2.  2nd Callback -> To be sent after the settlement status is changed from WAITING into SUCCESS. For example, if the settlement status is changed into SUCCESS on 12 May 2021 at 15:00:00, that is also when we send the 2nd Callback to you. In the 2nd callback, the settlement status is SUCCESS

### Callback Parameter

| Parameter  | Type | Nullable |  Description   |
| ------------- |:-------------:| ----- | :----------: |
|trx_id|String| FALSE |payment routing transaction id|
|partner_user_id|String| TRUE |Partner user ID. Only available for reusable VA or direct payment|
|use_linked_account|Boolean| FALSE |Applicable for EWallet with `need_frontend: false`. If `true`, the transaction created is an EWallet Direct Payment transaction. Else, it is a regular EWallet transaction.|
|partner_trx_id|String| FALSE |Partner transaction ID|
|receive_amount|String| FALSE |Amount to be received. If you use unique code BCA, this number will contain the amount to be received subtracted by 3 digits generated unique code.|
|payment_status|String| FALSE |Receive money status|
|trx_expiration_time|Timestamp| FALSE |Transaction expiration time|
|need_frontend|Boolean| FALSE |Partner need UI or not, if true, we will route to payment link, otherwise will be routed to payment aggregator.|
|payment_received_time|Timestamp| FALSE |Indicates the time when payment routing is marked as COMPLETE (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_time|String| TRUE | The timestamp (in UTC+7) indicating when the fund will be settled to partner’s account statement (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_status|String| TRUE | The status of the settlement (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|settlement_type|String| TRUE |Indicate if a transaction will be settled in realtime/non-realtime. (this parameter will only be sent once status of the payment routing is set to ‘COMPLETE’).|
|payment_method | String | TRUE | The payment method used by user to complete a payment. Conditional, only exist if request need_frontend is FALSE. Refer to Payment Method on [List of Allowed Payment Methods and SOF](#list-of-allowed-payment-methods-and-sof-create-and-update-payment-routing) |
|sender_bank | String | TRUE | The bank code used by a payer to do payment. Conditional, only exist if request need_frontend is FALSE. Refer to SOF on [List of Allowed Payment Methods and SOF](#list-of-allowed-payment-methods-and-sof-create-and-update-payment-routing) for Non QRIS Payment Method.<br><br>For QRIS Payment Method, it refers to the QRIS vendor integrated with the OY! system. |
|payment_info|Object| FALSE |Payment info Object|
|payment_checkout_url|String| TRUE |generated url for payment link; conditional, only exist if request need_frontend is TRUE|
|account_number|String| TRUE |Generated VA number if you use VA or account number destination if you use unique code BCA; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|account_name|String| TRUE |VA display name if you use VA or bank account's owner name if you use unique code BCA; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|qris_url|String| TRUE |the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS. This returned URL can only be accessed for 5 minutes after initial response was received, and is independent to the actual QRIS validity / expiration time.|
|payment_reference_number|String| FALSE | Identifier of a payment attempt when the end user successfully completes the payment. The reference number is also stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code. Available for: QRIS
|ewallet_url|String| TRUE | For `use_linked_account: true`: URL that prompt user to input PIN to authorize Direct Payment. For `use_linked_account: false`: A deep link URL that allows user to access the specific e-wallet vendor's application for making a payment. Currently, only Linkaja, ShopeePay and Dana are supported options. This attribute will only be present if the request parameter 'need_frontend' is set to 'FALSE' and the payment method selected is 'EWALLET'.|
|cards_url|String| TRUE | URL that allows user to make payment using their Credit Card. This attribute will only be present if the request parameter 'need_frontend' is set to 'FALSE' and the payment method selected is 'CARDS'.|
|unique_code_detail|Object| TRUE |Contains two objects of number: amount which is the requested amount and unique_code which is the generated 3 digits unique code ; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER and you use unique code BCA.|
|payment_routing|List of Object| TRUE |List of payment routing recipients. Only available if exist upon creation. See row belows|
|recipient_bank|String| FALSE |Bank code of the recipient account|
|recipient_account|String| FALSE |Recipient's account number|
|recipient_account_name|String| FALSE |Recipient's bank account name|
|recipient_amount|Numeric| FALSE |The amount of transaction to be disbursed|
|recipient_email|String; e-mail format| TRUE |Email for disbursement notification, email can be up to 5, seperated by a whitespace. Only available if exist upon creation|
|disbursement_trx_id|String| FALSE |Disbursement transaction id|
|disbursement_trx_notes|String| TRUE |Disbursement Transaction notes. Only available if exist upon creation|
|disbursement_trx_status|String| FALSE |Disbursement transaction status. See List of Disbursement Status below|
|email_status|String| FALSE |Email sending status; Possible status:- SENT- UNSENT|

<aside class="warning">
Note: For payments and inquiries involving a BSI VA using BSI Mobile or Banking Syariah Indonesia Net, please only input the last 12 digits of the va_number (remove 6059 from the va_number with format "6059xxxxxxxxxxxx"). This does not apply to payments and inquiries involving a BSI VA using other methods
</aside>

## List of Payment Routing Status
| Status               | Description                                                                                                                                            |
|:----------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
| CREATED              | For Payment Link, Payment Link has been created.                                                                                         |
| WAITING_PAYMENT      | For Payment Link, user already choose a payment method in payment link but has not done the payment yet.   For VA, VA number has been created. |
| PAYMENT_IN_PROGRESS  | User has made a payment and currently being processed by OY!                                                                                           |
| DISBURSE_IN_PROGRESS | Money has been successfuly received and is being forwared to each recipient.                                                                           |
| COMPLETE             | Money has been successfully received by recipients.                                                                                                    |
| INCOMPLETE           | Money received but forwarding money to recipients process is totally or partially failed.                                                              |
| EXPIRED              | Payment Link or VA number has been expired.                                                                                                   |
| PAYMENT_FAILED       | Payment has been failed, no money has been received (currently for EWALLET only) |

## List of Disbursement Status

| Status               | Description                                                                               |
|----------------------|-------------------------------------------------------------------------------------------|
| WAITING              | When status payment routing: CREATED / WAITING_PAYMENT / PAYMENT_IN_PROGRESS              |
| IN_PROGRESS          | Money is being forwared to each recipient.                                                |
| PENDING              | Disbursement pending because of disbursement channel                                      |
| PENDING_FORCE_CREDIT | When force credit process is pending                                                      |
| SUCCESS              | Money has been successfully received by recipients.                                       |
| CANCEL               | Not receiving any payment so system will automatically cancel sending money to recipients |
| FAILED               | Sending money to recipient process is failed                                              |
| FAILED_FORCE_CREDIT  | When force credit process is failed                                                       |

## Payment Routing Response Codes

Below is the list of response codes for API Payment Routing:

Response Code | State | Description
---------- | ------- | -------
000 | Final | Response success without error
400 | Final | Request is rejected (Amount is not valid)
400 | Final | Request is rejected (Amount is empty)
400 | Final | Request is rejected (Invalid list payment method)
400 | Final | Request is rejected (Invalid list source of fund)
400 | Final | Request is rejected (Success redirect url is empty)
400 | Final | Request is rejected (Failed redirect url is empty)
400 | Final | Request is rejected (Reusable VA is not supported for the requested SOF)
400 | Final | Request is rejected (Transaction using linked account is not supported for the requested SOF)
400 | Final | Request is rejected (Format expiration is yyyy-MM-dd HH:mm:ss and must be greater than 1 hour)
400 | Final | Request is rejected (Format expiration is yyyy-MM-dd HH:mm:ss and must be within valid interval for each e-wallet type)
400 | Final | Request is rejected (Format expiration is yyyy-MM-dd HH:mm:ss and must be between 1 minute and 1 hour)
400 | Final | Request is rejected (Format expiration is yyyy-MM-dd HH:mm:ss, must be between 1 minute and 3 hours and not exceed 20:30:00)
400 | Final | Request is rejected (Invalid config product disburse or acceptance)
400 | Final | Request is rejected (Invalid partner user id)
400 | Final | Request is rejected (Token is already expired.)
429 | Final | Request Rejected (Too Many Request to specific endpoint)
203 | Final | Request is rejected (Duplicate Partner Tx Id)
204 | Final | Request is Rejected (Partner Trx ID not found on deactivation request)
247 | Final | Request is rejected (Email is not valid)
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
