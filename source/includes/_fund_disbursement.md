# Fund Disbursement

Disbursement APIs allow you to send fund to any bank accounts in Indonesia easily and real-time.

## Create Disbursement

```shell
curl -X \
POST https://partner.oyindonesia.com/api/remit \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "recipient_bank": "014", 
  "recipient_account": "1239812390", 
  "amount":125000, 
  "note":"Split lunch bill", 
  "partner_trx_id":"1234-asdf",
  "email" :"napoleon@email.com test@email.com",
  "sender_info": {
      "sender_account_name": "John Doe",
      "sender_account_number": "12341235",
      "sender_bank_code": "014"
  },
  "additional_data": {
      "partner_merchant_id": "merchant_abcd123"
  }
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/remit'));
request.body = json.encode({
  "recipient_bank": "008",
  "recipient_account": "0201245681",
  "amount": 15000,
  "note": "Test API Disburse",
  "partner_trx_id": "OYON0000064",
  "email": "business.support@oyindonesia.com",
  "sender_info": {
      "sender_account_name": "John Doe",
      "sender_account_number": "12341235",
      "sender_bank_code": "014"
  },
  "additional_data": {
      "partner_merchant_id": "merchant_abcd123"
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

  url := "%7B%7Bbase_url%7D%7D/api/remit"
  method := "POST"

  payload := strings.NewReader(`{
	"recipient_bank": "008",
	"recipient_account": "0201245681",
	"amount": 15000,
	"note": "Test API Disburse",
	"partner_trx_id": "OYON0000064",
	"email": "business.support@oyindonesia.com",
  "sender_info": {
      "sender_account_name": "John Doe",
      "sender_account_number": "12341235",
      "sender_bank_code": "014"
  },
  "additional_data": {
      "partner_merchant_id": "merchant_abcd123"
  }
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"recipient_bank\": \"008\",\n\t\"recipient_account\": \"0201245681\",\n\t\"amount\": 15000,\n\t\"note\": \"Test API Disburse\",\n\t\"partner_trx_id\": \"OYON0000064\",\n\t\"email\": \"business.support@oyindonesia.com\",\n  \"additional_data\": {\n      \"partner_merchant_id\": \"merchant_abcd123\"\n  }\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/remit")
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
  "recipient_bank": "008",
  "recipient_account": "0201245681",
  "amount": 15000,
  "note": "Test API Disburse",
  "partner_trx_id": "OYON0000064",
  "email": "business.support@oyindonesia.com",
  "sender_info": {
      "sender_account_name": "John Doe",
      "sender_account_number": "12341235",
      "sender_bank_code": "014"
  },
  "additional_data": {
      "partner_merchant_id": "merchant_abcd123"
  }
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/remit");
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
$request->setUrl('{{base_url}}/api/remit');
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
$request->setBody('{\n\t\"recipient_bank\": \"008\",\n\t\"recipient_account\": \"0201245681\",\n\t\"amount\": 15000,\n\t\"note\": \"Test API Disburse\",\n\t\"partner_trx_id\": \"OYON0000064\",\n\t\"email\": \"business.support@oyindonesia.com\",\n\t\"sender_info\": {\n\t\t\"sender_account_name\": \"John Doe\",\n\t\t\"sender_account_number\": \"12341235\",\n\t\t\"sender_bank_code\": \"014\"\n\t},\n\t\"additional_data\": {\n\t\t\"partner_merchant_id\": \"merchant_abcd123\"\n\t}\n}');
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
  "recipient_bank": "008",
  "recipient_account": "0201245681",
  "amount": 15000,
  "note": "Test API Disburse",
  "partner_trx_id": "OYON0000064",
  "email": "business.support@oyindonesia.com",
  "sender_info": {
      "sender_account_name": "John Doe",
      "sender_account_number": "12341235",
      "sender_bank_code": "014"
  },
  "additional_data": {
      "partner_merchant_id": "merchant_abcd123"
  }
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/remit", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> Response for valid request (transaction will processed in the OY! system):

```json
{
  "status": {
    "code": "101",
    "message": "Request is Processed"
  },
  "amount": 10000,
  "recipient_bank": "014",
  "recipient_account": "12341234",
  "trx_id": "d23ed68a-2a31-43a8-ac6f-15c0b45565c9",
  "partner_trx_id": "TRX-20231211-007",
  "timestamp": "11-12-2023 05:06:16"
}
```

> Response for invalid request (transaction will rejected & not processed in the OY! system):

```json
{
  "status": {
    "code": "264",
    "message": "The suggested routing from the client is not valid"
  },
  "amount": 10000,
  "recipient_bank": "014",
  "recipient_account": "12341234",
  "trx_id": "",
  "partner_trx_id": "TRX-20231211-007",
  "timestamp": "11-12-2023 05:06:16"
}
```

Use this API to start disbursing money to a specific beneficiary account.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/remit`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/remit`

### Request Parameters

| Parameter         | Type        | Required | Description                                                                                                                                                                                                                                        |
|-------------------|-------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recipient_bank      | String(255) | TRUE     | Please refer to the [Disbursement Bank Codes](#disbursement-bank-codes-) to find the bank code for the recipient's bank account. |
| recipient_account   | String(255) | TRUE     | Recipient bank account number, numeric only. |
| amount              | BigInteger  | TRUE     | Amount of disbursement, the minimum amount for bank is Rp10.000 and e-wallet is Rp100. |
| note                | String(255) | FALSE    | The transaction's message may or may not be reflected in the recipient's bank account statement, based on the bank's capabilities. Using alphanumeric characters and some common symbols (e.g. -, *, . ) |
| partner_trx_id      | String(255) | TRUE     | Unique disbursement ID for a specific request, generated by partner. |
| email               | String(255) | FALSE    | Multiple emails allowed, max. 5, separated by space. E.g. john.doe@example.com budi@example.com stark@example.com |
| child_balance       | String(255) | FALSE    | If the [Multi Account Management](https://docs.oyindonesia.com/#multi-account-management-oy-dashboard-tutorial) configuration is active, the disbursement will use the balance of child (sub-entity) account. Otherwise, the partner's own balance will be used by default. |
| sender_info      | Object      | FALSE    | Object related to sender information. This object contain : <br> `• sender_account_name String(255)` <br> `• sender_account_number String(255)` <br> `• sender_bank_code String(255)` <br> By default, if your request does not include the sender_info object, the system will automatically use your registered bank account from Accounts > Bank Accounts.|
| additional_data      | Object      | FALSE    | Object that includes the additional parameter for partner’s needs. This object contain `partner_merchant_id String(64) (Unique ID for each of partner’s merchant)` |

### Response Parameters

| Parameter         | Type        | Description                                                                                    |
|-------------------|-------------|------------------------------------------------------------------------------------------------|
| status            | Object      | Status of Disbursement in Object `{code: <status_code>, message: <status_message>}`            |
| amount            | BigInteger  | Amount to disburse.                                            |
| recipient_bank    | String(255) | Bank or Ewallet code of the recipient’s account, please refer to [Disbursement Bank Codes](#disbursement-bank-codes-) |
| recipient_account | String(255) | Recipient bank account number.                                                                 |
| trx_id            | String(36)  | Unique disbursement ID from OY!, partners can use this ID for reconciliation.                  |
| partner_trx_id    | String(255) | Unique disbursement ID which partner put on the request.                                       |
| timestamp         | String(19)  | Creation time of disbursement transaction in OY! system, using the format "dd-mm-yyyy hh:mm:ss" in UTC time. |

### Response Code: API Create Disbursement

Below is the list of response codes that show the request status for API Create Disbursement:

| Response Code | State     | State Details                                                                        | Description                                        |
|---------------|-----------|------------------------------------------------------------------------------------|----------------------------------------------------|
| 101           | Non-Final | Transaction In Progress | Transaction is processed.                                                          |
| 201           | Final     | Transaction Not Created | Request is Rejected (User ID is not Found)                                         |
| 202           | Final     | Transaction Not Created | Request is Rejected (User ID is not Active)                                        |
| 203           | Final     | Transaction Not Created | Request is Rejected (Duplicate Partner Tx ID)                                      |
| 205           | Final     | Transaction Not Created | Request is Rejected (Beneficiary Bank Code is Not Supported)                       |
| 207           | Final     | Transaction Not Created | Request is Rejected (Request IP Address is not Registered)                         |
| 208           | Final     | Transaction Not Created | Request is Rejected (API Key is not Valid)                                         |
| 209           | Final     | Transaction Not Created | Request is Rejected (Bank Account is not found)                                    |
| 210           | Final     | Transaction Not Created | Request is Rejected (Amount is not valid)                                          |
| 211           | Final     | Transaction Not Created | Request is Rejected (Bank Account is not Allowed)                                          |
| 257           | Final     | Transaction Not Created | Request is Rejected (Disbursement with the same Partner Tx ID is still in process) |
| 264           | Final     | Transaction Not Created | Request is rejected (The suggested routing from the partner is not valid)          |
| 300           | Final     | Transaction Failed      | Transaction is failed.                                                             |
| 301           | Non-Final | Transaction Pending     | Pending (when there is an unclear answer from bank network)                        |
| 429           | Final     | Transaction Not Created | Request Rejected (Too Many Request to specific endpoint)                           |
| 504           | Non-Final | Transaction Unknown     | Disbursement Submission Timed Out. Note: the transaction status is uncertain, it may or may not have been successfully submitted, so we suggest resubmitting using the same partner_trx_id. Please check your dashboard or contact our business representative. |
| 990           | Final     | Transaction Not Created | Request is Rejected (Invalid Format)                                               |
| 999           | Non-Final | Transaction Unknown     | Internal Server Error. Please check your dashboard or contact our business representative |


### Column State Details: Response Code API Create Disbursement

Below is the list of Explanation for column state details that show on response code API Create Disbursement:

| State Details | Description                                                       |
|---------------| ----------------------------------------------------              |
| Transaction Failed      | Transaction is failed to disburse.                      |
| Transaction In Progress | Transaction is still in progress.                       |
| Transaction Pending     | Transaction has an unclear status from the banks.       |
| Transaction Unknown     | Transaction status is uncertain, please wait the callback or hit check status API to make sure the status of transaction. Please check to your dashboard or contact our business representative. |
| Transaction Not Created | Transaction is not created in the OY! system due to not valid disbursement request. |


## Disbursement Callback

> Response for successful callback:

```json
{
  "status": {
    "code": "000",
    "message": "Success"
  },
  "amount": 10000.0000,
  "recipient_name": "John Doe",
  "recipient_bank": "014",
  "recipient_account": "12341234",
  "trx_id": "d23ed68a-2a31-43a8-ac6f-15c0b45565c9",
  "partner_trx_id": "TRX-20231211-007",
  "timestamp": "11-12-2023 05:07:20",
  "created_date": "11-12-2023 05:06:20",
  "last_updated_date": "11-12-2023 05:07:00"
}
```

> Response for failed callback:

```json
{
  "status": {
    "code": "300",
    "message": "Failed"
  },
  "tx_status_description": "Your transaction amount exceeds maximum routing limit. Please adjust the routing and try again",
  "amount": 10000.0000,
  "recipient_name": "John Doe",
  "recipient_bank": "014",
  "recipient_account": "12341234",
  "trx_id": "d23ed68a-2a31-43a8-ac6f-15c0b45565c9",
  "partner_trx_id": "TRX-20231211-007",
  "timestamp": "11-12-2023 05:07:20",
  "created_date": "11-12-2023 05:06:20",
  "last_updated_date": "11-12-2023 05:07:00"
}
```

Once a disbursement request is finished, our system will make a callback status of that disbursement request to your system.

You can set your own callback URL in OY Business dashboard setting. You can Open “Settings” tab, choose “Developer Option”, Choose “Callback Configuration”, and Fill your callback URL in the API Disbursement field.

We also have a resend callback feature which you can read about [here](https://docs.oyindonesia.com/#feature-resend-callback-sending-payments). 

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Disbursement in Object `{code: <status_code>, message: <status_message>}`
tx_status_description | String(255) | Additional information regarding status code, especially for Failed transactions, Force Credit transactions, and Queued transactions.<br><br>For example: “Account is blocked. Please create a new transaction with a different recipient account number.”<br><br>Note: This parameter will not appear in the response body for transactions with a Success status.
amount | BigDecimal | Amount to disburse.<br><br>Note: The amount field uses BigDecimal to maintain financial precision.<br>Decimal values (e.g. `10000.0000`) may appear in Get Disbursement Status and Callback responses due to standardized internal processing.
recipient_name | String(255) | Account holder name of recipient bank account.
recipient_bank | String(255) | Bank or Ewallet code of the recipient’s account, please refer to [Disbursement Bank Codes](#disbursement-bank-codes-)
recipient_account | String(255) | Recipient bank account number.
trx_id | String(36) | Unique disbursement ID from OY!, partners can use this ID for reconciliation.
partner_trx_id | String(255) | Unique disbursement ID which partner put on the request.
timestamp | String(19) | Time of API get disbursement status called by partner ("dd-MM-yyyy HH:mm:ss in UTC time zone").
created_date | String(19) | Execution time of disbursement in OY! system ("dd-MM-yyyy HH:mm:ss in UTC time zone").
last_updated_date | String(19) | Latest status change of a disbursement. Example from 'Pending' to 'Success' ("dd-MM-yyyy HH:mm:ss in UTC Time zone")

### Transaction Status: API Disbursement
Below is the list of response codes that show the transaction status for Disbursement Callback:

| Response Code | State     | Description                                                  |
|---------------|-----------|--------------------------------------------------------------|
| 000           | Final     | Transaction has been completed (success)                     |
| 300           | Final     | Transaction is FAILED                                        |
| 301           | Non-Final | Pending (When there is an unclear answer from Banks Network) |

## Get Disbursement Status

```shell
curl -X \
POST https://partner.oyindonesia.com/api/remit-status \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
  "partner_trx_id": "1234-asde", 
  "send_callback": "true"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/remit-status'));
request.body = json.encode({
  "partner_trx_id": "OYON0000056"
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

  url := "%7B%7Bbase_url%7D%7D/api/remit-status"
  method := "POST"

  payload := strings.NewReader(`{
	"partner_trx_id": "OYON0000056"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"partner_trx_id\": \"OYON0000056\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/remit-status")
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
  "partner_trx_id": "OYON0000056"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/remit-status");
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
$request->setUrl('{{base_url}}/api/remit-status');
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
$request->setBody('{\n	"partner_trx_id": "OYON0000056"\n}');
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
  "partner_trx_id": "OYON0000056"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/remit-status", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> Response for success transaction status:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "tx_status_description":"",
  "amount":10000.0000,
  "recipient_name":"John Doe",
  "recipient_bank":"014",
  "recipient_account":"12341234",
  "trx_id": "d23ed68a-2a31-43a8-ac6f-15c0b45565c9",
  "partner_trx_id": "TRX-20231211-007",
  "timestamp": "11-12-2023 05:07:20",
  "created_date": "11-12-2023 05:06:20",
  "last_updated_date": "11-12-2023 05:07:00"
}
```

> Response for failed transaction status:

```json
{
  "status":{
    "code":"300",
    "message":"Failed"
  },
  "tx_status_description":"Your transaction amount exceeds maximum routing limit. Please adjust the routing and try again",
  "amount":10000.0000,
  "recipient_name":"John Doe",
  "recipient_bank":"014",
  "recipient_account":"12341234",
  "trx_id": "d23ed68a-2a31-43a8-ac6f-15c0b45565c9",
  "partner_trx_id": "TRX-20231211-007",
  "timestamp": "11-12-2023 05:07:20",
  "created_date": "11-12-2023 05:06:20",
  "last_updated_date": "11-12-2023 05:07:00"
}
```

To get status of a disbursement request, you can call this API. You may need to call this API few times until getting a final status (success/failed). We suggest to check the status after the remit API timed out or 60 seconds after the disbursement requested

This API offers an option to send you a callback status of the disbursement request to a specific URL.
You can set your own callback URL in OY Business dashboard setting. You can Open “Settings” tab, choose “Developer Option”, Choose “Callback Configuration”, and Fill your callback URL in the API Disbursement field.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/remit-status`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/remit-status`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_trx_id | String(255) | TRUE | Unique Disbursement ID for a specific request, generated by partner
send_callback | Boolean | FALSE | A flag to indiciate if the status of the disbursement request need to be re-sent as a callback or not

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Disbursement in Object `{code: <status_code>, message: <status_message>}`
tx_status_description | String(255) | Additional information of status code, especially for failed status. E.g. Account is blocked. Please create a new transaction with a different recipient account number.
amount | BigDecimal | Amount to disburse.<br><br>Note: The amount field uses BigDecimal to maintain financial precision.<br>Decimal values (e.g. `10000.0000`) may appear in Get Disbursement Status and Callback responses due to standardized internal processing.
recipient_name | String(255) | Account holder name of recipient bank account.
recipient_bank | String(255) | Bank or Ewallet code of the recipient’s account, please refer to [Disbursement Bank Codes](#disbursement-bank-codes-)
recipient_account | String(255) | Recipient bank account number.
trx_id | String(36) | Unique disbursement ID from OY!, partners can use this ID for reconciliation.
partner_trx_id | String(255) | Unique disbursement ID which partner put on the request.
timestamp | String(19) | Time of API get disbursement status called by partner ("dd-MM-yyyy HH:mm:ss in UTC time zone").
created_date | String(19) | Execution time of disbursement in OY! system ("dd-MM-yyyy HH:mm:ss in UTC time zone").
last_updated_date | String(19) | Latest status change of a disbursement. Example from 'Pending' to 'Success' ("dd-MM-yyyy HH:mm:ss in UTC Time zone")

### Response Code: API Get Disbursement Status

Below is the list of response codes that show the request status for API Get Disbursement Status:

| Response Code | State     | State Details                                                                        | Description                                        |
|---------------|-----------|------------------------------------------------------------------------------------|----------------------------------------------------|
| 000           | Final     | Transaction Success     | Transaction has been completed.                                                    |
| 101           | Non-Final | Transaction In Progress | Transaction is processed.                                                          |
| 102           | Non-Final | Transaction In Progress | Transaction is in progress.                                                        |
| 201           | Non-Final | Transaction Unknown     | Request for Get Disbursement Status is rejected (user ID is not found)             |
| 202           | Non-Final | Transaction Unknown     | Request for Get Disbursement Status is rejected (user ID is not active)            |
| 204           | Final     | Transaction Not Created | Transaction do not exist (Partner Tx ID is Not Found)                              |
| 206           | Final     | Transaction Failed      | Transaction is failed (partner deposit balance is not enough)                      |
| 207           | Non-Final | Transaction Unknown     | Request for Get Disbursement Status is rejected (request IP Address is not registered) |
| 208           | Non-Final | Transaction Unknown     | Request for Get Disbursement Status is rejected (API key is not valid)             |
| 225           | Final     | Transaction Failed      | Transaction is failed (Transaction amount exceeds the maximum limit)               |
| 300           | Final     | Transaction Failed      | Transaction is failed.                                                             |
| 301           | Non-Final | Transaction Pending     | Pending (when there is an unclear answer from bank network)                        |
| 429           | Non-Final | Transaction Unknown     | Request for Get Disbursement Status is rejected (too many requests to specific endpoint) |
| 990           | Final     | Transaction Unknown     | Request for Get Disbursement Status is rejected (invalid format)                   |
| 999           | Non-Final | Transaction Unknown     | Internal Server Error                                                              |


### Column State Details: Response Code API Get Disbursement Status

Below is the list of Explanation for column state details that show on response code API Get Disbursement Status:

| State Details | Description                                                       |
|---------------| ----------------------------------------------------              |
| Transaction Success     | Transaction has been completed & successfully received on the recipient account |
| Transaction Failed      | Transaction is failed to disburse.                      |
| Transaction In Progress | Transaction is still in progress.                       |
| Transaction Pending     | Transaction has an unclear status from the banks.       |
| Transaction Unknown     | Transaction status is uncertain, please wait the callback or hit check status API to make sure the status of transaction. Please check to your dashboard or contact our business representative. |
| Transaction Not Created | Transaction is not created in the OY! system due to not valid disbursement request. |                                                              |

## Mock Data in Demo Environment

> Request body mock data in demo environment:

```json
{
    "recipient_bank": "014",
    "recipient_account": "2100000",
    "amount": 10000,
    "note": "Test Expose Route",
    "partner_trx_id": "TRX-20231211-007",
    "email": "yono@oyindonesia.com"
}
```

> Response body mock data in demo environment:

```json
{
    "status": {
        "code": "210",
        "message": "Request is Rejected (Amount is not valid)"
    },
    "amount": 10000,
    "recipient_bank": "014",
    "recipient_account": "2100000",
    "trx_id": "",
    "partner_trx_id": "TRX-20231211-007",
    "timestamp": "11-12-2023 05:06:16"
}
```

You can replicate final error response codes based on the Response Code by filling in the `recipient_account` value using this format: __\<desired response code\>0000__. You can input 4 to 15 characters consisting only of the digit 0 at the end of the response code. Any value that doesn’t follow this format as default will be processed as a Successful transaction.

For example, if you want to get the __"Request is Rejected (Amount is not valid)”__ error, you can trigger the response code __“210”__ by formatting the recipient_account as "2100000".

### Test Scenario
To test out all scenarios of API Disbursement and ensure the flows in your integration are handled correctly, please visit this [link](https://docs.google.com/spreadsheets/u/0/d/1M4OT1SF19FZIY3D_3x279WhhhSs98-XsjkF-YmySii4/edit).

## Disbursement Failed Reasons

If you receive a failed disbursement in the callback or check status response, this means that we tried processing the disbursement and failed.

We return failed reasons description in our callback & check status response in the `tx_status_description parameter`. Partners need to understand each failed reason to decide the appropriate action to take. Below is a list of the failed reasons that partners may receive:

### Explanation: Disbursement Failed Reasons

Failed Reason | Explanation | Should I retry?
------------- | ----------- | --------------
Account is blocked. Please create a new transaction with a different recipient account number. | Recipient account number is blocked by the bank & disbursement cannot proceed to this account. | If you retry with the same request, most likely it will return the same response. Please confirm to the recipient that the account number details are correct and can receive funds. After that, you can revise the request to the correct account number before trying again.
Account has exceeded the maximum amount for receiving money. Please contact the account owner. | Recipient account number has reached the balance limit amount that is set by the corresponding bank/e-wallet. | If you retry with the same request, most likely it will return the same response. Please confirm to the recipient that the account number details can receive funds for that amount. After that, you can revise the request to the correct account number and amount before trying again.
Account is no longer active. Please create a new transaction with a different recipient account number. | Recipient account number is no longer active in the bank & disbursement cannot proceed to this account. | If you retry with the same request, most likely it will return the same response. Please confirm to the recipient that the account number details are correct and can receive funds. After that, you can revise the request to the correct account number before trying again.
Account not found. Please create a new transaction with a different recipient account number.| Recipient account number is not found for the bank selected & disbursement cannot proceed to this account. | If you retry with the same request, most likely it will return the same response. Please confirm to the recipient that the account number details and the selected bank are correct and can receive funds. After that, you can revise the request to the correct account number before trying again.
The bank/e-wallet provider system is under maintenance. Please try again in a moment.| The bank/e-wallet is in downtime so there will be disturbances in the disbursement process. | Please ensure the information of the bank maintenance schedule to our customer service. If there is any clear information about the maintenance schedule from the banks, you can retry the transaction after the maintenance schedule is over.
The bank/e-wallet system encounters an error while disbursing the money. Try again in a moment. | The bank/e-wallet has an issue in their  system to process the disbursement. There may be intermittent issues in the bank system that are unpredictable. | You can retry the disbursement in the next few minutes. If you need any further information regarding the issue, you can contact our customer service.
System encounters an error while disbursing the money. Please try again in a moment. | There is an issue in the process of the disbursement. There may be intermittent issues that are unpredictable. | You can retry the disbursement in the next few minutes. If you need any further information regarding the issue, you can contact our customer service.
Your transaction exceeds the maximum limit amount. Please adjust the amount and try again. | The transaction has an amount that exceeds the maximum limit that is already set in the OY! system. | If you retry with the same request, it will return the same response. Please adjust the transaction amount according to the maximum limit that OY! gives to you. If you need any further information regarding the limit amount, you can contact our business representative.
Not enough balance to disburse the money, please top up your balance. | Insufficient partner’s deposit balance to process the disbursement transaction. | Please top up your deposit balance in the OY! dashboard. You can retry the disbursement transaction after ensuring that you have sufficient balance in your account.


## Get Balance

```shell
curl -X \
GET https://partner.oyindonesia.com/api/balance \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'X-OY-Username: janedoe' \
-H 'X-Api-Key: 7654321'
```

```dart
var headers = {
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}',
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
var request = http.Request('GET', Uri.parse('{{base_url}}/api/balance'));

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
  "net/http"
  "io/ioutil"
)

func main() {

  url := "%7B%7Bbase_url%7D%7D/api/balance"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "{{username}}")
  req.Header.Add("x-api-key", "{{api-key}}")
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
  .url("{{base_url}}/api/balance")
  .method("GET", null)
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/balance");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/balance');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}',
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
payload = ''
headers = {
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}',
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
conn.request("GET", "/api/balance", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```


> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "balance":100000000.0000,
  "overdraftBalance":500000.0000,
  "overbookingBalance":200000.0000,
  "pendingBalance":2000000.0000,
  "availableBalance":98500000.0000,
  "timestamp":"10-12-2019 12:15:37"
}
```

Use this API to get partner balance.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/balance`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/balance`

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Disbursement in Object `{code: <status_code>, message: <status_message>}`
balance | BigDecimal | Remaining balance (Accept non fraction number)
overdraftBalance | BigDecimal | Remaining overdraft balance (Accept non fraction number)
overbookingBalance | BigDecimal | Remaining overbooking balance (Accept non fraction number)
pendingBalance | BigDecimal | The cumulative balance of your pending transactions.
availableBalance | BigDecimal | The total cumulative money of Balance + Available Overdraft - Pending Balance that you can use for disbursement.
timestamp | String(19) | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss in UTC Time zone").

### Request Status: API Get Balance
Below is the list of response codes that show the request status for API Get Balance:

| Response Code | Description                                                | Notes                           |
|---------------|------------------------------------------------------------|---------------------------------|
| 000           | Request get balance is success                             | -                               |
| 207           | Request is Rejected (Request IP Address is not Registered) | Request check balance rejected. |
| 208           | Request is Rejected (API Key is not Valid)                 | Request check balance rejected. |
| 999           | Internal Server Error                                      | Request check balance rejected. |
| 201           | Request is Rejected (User ID is not Found)                 | Request check balance rejected. |
| 202           | Request is Rejected (User ID is not Active)                | Request check balance rejected. |
| 429           | Request Rejected (Too Many Request to specific endpoint)   | Request check balance rejected. |
| 900           | Request is Rejected (Invalid Format)                       | Request check balance rejected. |
