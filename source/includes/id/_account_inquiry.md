# Account Inquiry

Ini gw kerjain versi bahasa indonesia

## Account Inquiry

```shell
curl -X \
POST https://partner.oyindonesia.com/api/account-inquiry \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
    "bank_code": "014", 
    "account_number": "1239812390"
}'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/account-inquiry'));
request.body = json.encode({
  "bank_code": "014",
  "account_number": "1280259361"
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

  url := "%7B%7Bbase_url%7D%7D/api/account-inquiry"
  method := "POST"

  payload := strings.NewReader(`{
    "bank_code": "014",
    "account_number": "1280259361"
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"bank_code\": \"014\",\n    \"account_number\": \"1280259361\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/account-inquiry")
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
  "bank_code": "014",
  "account_number": "1280259361"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/account-inquiry");
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
$request->setUrl('{{base_url}}/api/account-inquiry');
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
$request->setBody('{\n    "bank_code": "014",\n    "account_number": "1280259361"\n}');
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
  "bank_code": "014",
  "account_number": "1280259361"
})
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/account-inquiry", payload, headers)
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
    "bank_code": "014",
    "account_number": "1239812390",
    "account_name": "John Doe",
    "timestamp": "2020-11-19T17:01:17",
    "id": "59e11245-4b36-4ed7-97be-0c501b8ae3c8",
    "invoice_id": "c0503fa6-a5b3-4816-bc07-241473357f58"
}
```

Use this API to get beneficiary account details.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/account-inquiry`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-inquiry`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
bank_code | String(3) | TRUE | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
account_number | String(255) | TRUE | Beneficiary account number

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of inquiry `{code: <status_code>, message: <status_message>}`
bank_code | String | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
account_number | String | Account Number of the Beneficiary Account
account_name | String | Account Name of the Beneficiary Account
id | String | Unique ID of the inquiry. ID will be provided only for `000` or `209` status. Otherwise, the ID will be `null`.
invoice_id | String | ID of the invoice related to the inquiry result.
timestamp | Timestamp | UTC Timestamp api hit (Format: `yyyy-MM-ddTHH:mm:ss`)


## Get Account Inquiry Invoices

```shell
curl -X \
GET https://partner.oyindonesia.com/api/account-inquiry/invoices \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \ 
-H 'x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "total": 3,
    "status": {
        "code": "000",
        "message": "Success"
    },
    "timestamp": "2020-12-03T17:01:17",
    "data": [
        {
            "invoice_id": "e972bfcb-fcc4-4732-8887-91a589a0b54a",
            "tx_date": "2020-12-03",
            "amount": 2000.0000,
            "total_inquiry": 2,
            "paid_at": null,
            "invoice_status": "INITIATED",
            "due_at": "2020-12-04T16:59:59"
        }, {
            "invoice_id": "53f48b8a-1f53-4f56-aa91-7b32414a7513",
            "tx_date": "2020-12-02",
            "amount": 10000.0000,
            "total_inquiry": 10,
            "paid_at": null,
            "invoice_status": "UNPAID",
            "due_at": "2020-12-03T16:59:59"
        }, {
            "invoice_id": "53f48b8a-1f53-4f56-aa91-7b32414a7513",
            "tx_date": "2020-12-01",
            "amount": 10000.0000,
            "total_inquiry": 10,
            "paid_at": "2020-12-02T08:00:00",
            "invoice_status": "PAID",
            "due_at": "2020-12-02T16:59:59"
        }
    ]
}
```

Use this API to get inquiry invoices.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/account-inquiry/invoices?offset=<offset>&limit=<limit>&status=<status>`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-inquiry/invoices?offset=<offset>&limit=<limit>&status=<status>`

### Request Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
offset | Integer | FALSE | 0 | start offset, default is 0, if empty will used default value
limit | Integer | FALSE | 10 | max item to fetch, default is 10, if empty will used default value
status | String | FALSE | | invoice status to fetch. If empty will fetch invoice regardless of the status


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
total | Integer | Total number of invoices per username
status | Object | Status of inquiry `{code: <status_code>, message: <status_message>}`
timestamp | Timestamp | UTC Timestamp api hit (Format: `yyyy-MM-ddTHH:mm:ss`)
data | Array of objects | List of objects `{"invoice_id": <invoice_id>, "tx_date": <tx_date>, "amount": <amount>,"total_inquiry": <total_inquiry>, "paid_at": <paid-at>,"invoice_status": <invoice-status>,"due_at": <due-date>}` <br>- `invoice_id` invoice ID <br>- `tx_date` the UTC+7 date of inquiry transaction from 00:00 UTC+7 until 23:59 UTC+7 <br>- `amount` amount of the invoice<br>- `total_inquiry` the number of inquiries<br>- `paid_at` UTC invoice payment timestamp<br> - `invoice_status` status of the invoice: `INITIATED`, `UNPAID`, or `PAID`<br>- `due_at` UTC due timestamp for the invoice

## Get Account Inquiry Invoice by ID

```shell
curl -X \
GET https://partner.oyindonesia.com/api/account-inquiry/invoices/e972bfcb-fcc4-4732-8887-91a589a0b54a \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "invoice_id": "e972bfcb-fcc4-4732-8887-91a589a0b54a",
    "tx_date": "2020-12-03",
    "amount": 2000.0000,
    "total_inquiry": 2,
    "paid_at": null,
    "invoice_status": "INITIATED",
    "due_at": "2020-12-04T16:59:59",
    "timestamp": "2020-12-03T17:01:17"
}
```

Use this API to get inquiry invoice by ID.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/account-inquiry/invoices/<id>`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-inquiry/invoices/<id>`

### Request Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
id | String | TRUE |  | Invoice ID


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of inquiry `{code: <status_code>, message: <status_message>}`
invoice_id | String | invoice ID
tx_date | String | the UTC+7 date of inquiry transaction from 00:00 UTC+7 until 23:59 UTC+7
amount | String | amount of the invoice
total_inquiry | Integer | the number of inquiries
paid_at | String | UTC invoice payment timestamp
invoice_status | String | status of the invoice: `INITIATED`, `UNPAID`, or `PAID`
due_at | String | UTC due timestamp for the invoice

## Pay Account Inquiry Invoice

```shell
curl -X \
GET https://partner.oyindonesia.com/api/account-inquiry/invoices/pay \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
    "invoice_id": "53f48b8a-1f53-4f56-aa91-7b32414a7513"
}'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "invoice_id": "53f48b8a-1f53-4f56-aa91-7b32414a7513",
    "tx_date": "2020-12-02",
    "amount": 10000.0000,
    "total_inquiry": 10,
    "paid_at": "2020-12-03T01:01:18",
    "invoice_status": "PAID",
    "due_at": "2020-12-03T17:01:00",
    "timestamp": "2020-12-03T01:01:17"
}
```

Use this API to pay inquiry invoice.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/account-inquiry/invoices/pay`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-inquiry/invoices/pay`

### Request Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
invoice_id | String | TRUE |  | Invoice ID


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of inquiry `{code: <status_code>, message: <status_message>}`
invoice_id | String | invoice ID
tx_date | String | the UTC+7 date of inquiry transaction from 00:00 UTC+7 until 23:59 UTC+7
amount | String | amount of the invoice
total_inquiry | Integer | the number of inquiries
paid_at | String | UTC invoice payment timestamp
invoice_status | String | status of the invoice: `INITIATED`, `UNPAID`, or `PAID`
due_at | String | UTC due timestamp for the invoice
