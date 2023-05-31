# Transaction Detail

API to get transaction detail by partner_tx_id

## Get Transaction Detail

This endpoint will trigger the **creation** of payment routing and will be using the same API to handle the **update** requests.


``` shell
curl --location --request GET 'https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>' \
--header 'content-type: application/json' \
--header 'accept: application/json' \
--header 'x-oy-username: yourusername' \
--header 'x-api-key: apikeymu'
```

``` dart
var headers = {
  'content-type': 'application/json',
  'accept: application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'apikeymu'

};
var request = http.Request('GET', Uri.parse('https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>'));
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

  url := "https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

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
Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>")
  .method("GET", null)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "yourusername")
  .addHeader("x-api-key", "apikeymu")
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

xhr.open("GET", "https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "yourusername");
xhr.setRequestHeader("x-api-key", "apikeymu");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => 'yourusername',
  'x-api-key' => 'apikeymu'
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

conn = http.client.HTTPSConnection("https://partner.oyindonesia.com", undefined)
payload = ''
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'apikeymu'
}
conn.request("GET", "/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this: // TODO @hanif

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
**[Production]** `GET https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>` <br/>
**[Staging]** `GET https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&producet_type=<product_type>`

### Header
| Field  | Description |  Example   |
| ------------- |:-------------:| ---------- |
| x-oy-username    |Partner username    |   username    |
| x-api-key      | Partner api key     | 6e87432c-2726-11ec-9621-0242ac130002 |

### Request Parameters
| Parameter  | Type |  Required   | Default | Description |
| ------------- |:-------------:| :----------: |:-----:|:-----:|
|partner_user_id   | String    |   Only applicable for VA Aggregator. If you want the VA to be reusable for each users (multiple use), you are required define this parameter.| - |  Unique partner user id. Will automatically be generated if left empty on VA payment method with `need_frontend: false`. |
| partner_trx_id  | String     |  FALSE | - | Unique partner transaction ID. Will automatically be generated if left empty. |
| need_frontend | Boolean     |  TRUE | -| Partner need UI or not, if true, we will route to payment link, otherwise will be route to API-based solution. |
| list_enable_payment_method | String; comma separated     |  TRUE | - | To configure payment methods to be enabled in the payment method page.  |
| list_enable_sof | String; comma separated      |  TRUE | - | To configure list of source of fund (banks or ewallets) to be enabled in the payment method page. For additional detail please refer to [List Allowed Payment Methods and SOF](https://api-docs.oyindonesia.com/#if-need_frontend-true-list-of-allowed-payment-methods-and-sof) |
| sender_email | String     |  FALSE | - | Email of sender |
| receive_amount | Numeric     |  TRUE | - | The amount of a transaction to be paid, min. amount is 10000, except if you use unique code BCA which has min. amount 11000 |
| va_display_name | String     |  FALSE | Partner's brand name | Display name for VA that will be displayed once user do inquiry. If empty VA name will be set using partner brand name. This parameter will be used only if you use BANK_TRANSFER payment method and routed to VA. |
| trx_expiration_time | Date string; yyyy-mm-dd hh:mm:ss format (UTC+7)    |  FALSE | Refer to [Default Expiration Time](https://api-docs.oyindonesia.com/#transaction-expiration-time-guidelines-create-and-update-payment-routing) | Set expiration time of transaction. Please refer to [Transaction Expiration Time Guidelines](https://api-docs.oyindonesia.com/#transaction-expiration-time-guidelines-create-and-update-payment-routing) |
| trx_counter | Numeric     |  FALSE | 1/-1 | A transaction counter to limit number of transaction that can be receive by va number. For example, if you put 3, it means that the VA number can only accept transaction 3 times. This parameter will be used only if you use BANK_TRANSFER payment method and routed to VA. |
| success_redirect_url | String | CONDITIONAL | - | Indicates the URL of your environment to redirect customers back to once payment has been completed. Accepts both HTTP links and URL scheme formats. Required if payment method is either "EWALLET" or "CARDS", and `need_frontend` is set to false. |
| failed_redirect_url | String | CONDITIONAL | - | Indicates the URL of your environment to redirect customers back to once payment cannot be completed. Accepts both HTTP links and URL scheme formats. Required if payment method is "CARDS", and `need_frontend` is set to false. |
| payment_routing | List of Objects     |  FALSE | - | List of disburse recipient; max. is 10 |
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
|receive_amount|Numeric|amount to be received. If you use unique code BCA, this number will contain the amount to be received subtracted by 3 digits generated unique code.|
|trx_expiration_time|Date string; yyyy-MM-dd HH:mm:ss format|Transaction Expiration Time|
|payment_info|Object|Payment info object|
|payment_checkout_url|String|generated url for payment link; conditional, only exist if request need_frontend is TRUE|
|account_number|String|Generated VA number if you use VA or account number destination if you use unique code BCA; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|account_name|String|VA display name if you use VA or bank account's owner name if you use unique code BCA; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|bank_code|String|Bank code for the destination VA number or bank account; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER|
|qris_url|String|the URL of QR image; conditional, only exist if request need_frontend is FALSE and payment_method is QRIS. This returned URL can only be accessed for 5 minutes after initial response was received, and is independent to the actual QRIS validity / expiration time.|
|ewallet_url|String| A deep link URL that allows user to access the specific e-wallet vendor's application for making a payment. Currently, only Linkaja, ShopeePay and Dana are supported options. This attribute will only be present if the request parameter 'need_frontend' is set to 'FALSE' and the payment method selected is 'EWALLET'.|
|cards_url|String| URL that allows user to make payment using their Credit Card. This attribute will only be present if the request parameter 'need_frontend' is set to 'FALSE' and the payment method selected is 'CARDS'.|
|unique_code_detail|Object|Contains two objects of number: `amount` which is the requested amount and `unique_code` which is the generated 3 digits unique code ; conditional, only exist if request need_frontend is FALSE and payment_method is BANK_TRANSFER and you use unique code BCA.|

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

If you use BANK_TRANSFER payment method with BCA bank code (014) as sof, you can either be routed to use VA BCA or unique code BCA. For other sof with BANK_TRANSFER payment method, you will be routed to use VA.

#### If need_frontend: false
The request should be filled only with 1 list_enable_payment_method and 1 list_enable_sof.

| Payment Method |  SOF |
| :---------: | :---------------: |
| BANK_TRANSFER | 002, 008, 009, 011, 014, 016, 022, 213, 451, 484 |
| QRIS | QRIS |
| EWALLET | dana_ewallet, shopeepay_ewallet, linkaja_ewallet |
| CARDS | CC_DC |

If you use BANK_TRANSFER payment method with BCA bank code (014) as sof, you can either be routed to use VA BCA or unique code BCA. For other sof with BANK_TRANSFER payment method, you will be routed to use VA.

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
| CARDS | CC_DC | 60 minutes | 60 minutes, regardless of the expiration time specified in the request.
| BANK_TRANSFER (unique code BCA only) | 014 | 3 hours | Limited to 1 minute - 3 hours after the request is sent, and maximum at 20:30 (UTC+7). If default expiration time (3 hours) exceeds 20:30, then the expiration time will be 20:30.

### List of Disbursement Mock Account for Testing Purpose 
Use those mock receiver bank account for testing Payment Routing purpose. To simulate all available status of Payment Routing, you can combine those mocked bank account numbers. For example, if you want to see `INCOMPLETE` status, put two recipients in the payment_routing object with mocked bank account number `1234567890` and `1234567891`. For more information about payment Routing status, see List of Payment Routing section.

| Mocked Account Number  | Mocked Disbursement Status | 
| :-------------: |:-------------:|
| 1234567890 | SUCCESS |
|1234567891|FAILED|
|1234567892|FAILED FORCE CREDIT|
|1234567893|PENDING|
|1234567894|PENDING FORCE CREDIT|


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
