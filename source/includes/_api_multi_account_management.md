# API Multi Account Management

Multi Account Management APIs allow you to interact with parent/child accounts in OY.

## Disburse with Child Balance

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
  "child_balance":"Alice"
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
  "email": "business.support@oyindonesia.com"
  "child_balance":"Alice"
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
	"email": "business.support@oyindonesia.com"
	"child_balance":"Alice"
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"recipient_bank\": \"008\",\n\t\"recipient_account\": \"0201245681\",\n\t\"amount\": 15000,\n\t\"note\": \"Test API Disburse\",\n\t\"partner_trx_id\": \"OYON0000064\",\n\t\"email\": \"business.support@oyindonesia.com\", \"child_balance\":\"Alice\"\n}");
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
  "email": "business.support@oyindonesia.com"
  "child_balance": "Alice"
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
$request->setBody('{\n	"recipient_bank": "008",\n	"recipient_account": "0201245681",\n	"amount": 15000,\n	"note": "Test API Disburse",\n	"partner_trx_id": "OYON0000064",\n	"email": "business.support@oyindonesia.com",\n "child_balance": "Alice"\n}');
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
  "email": "business.support@oyindonesia.com"
  "child_balance": "Alice"
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

> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"101",
    "message":"Request is Processed"
  },
  "amount":125000,
  "recipient_bank":"014",
  "recipient_account":"1239812390",
  "trx_id":"ABC-456",
  "partner_trx_id":"1234-asdf",
  "timestamp":"16-10-2019 10:23:42"
}
```

Use this API to start disbursing money from child account to a specific beneficiary account.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/remit`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/remit`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
recipient_bank | String(3) | TRUE | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | TRUE | Beneficiary account number, numeric only
amount | BigInteger | TRUE | Amount of disbursement (Accept Non-Decimal Number), min amount 10000
note | String(255) | FALSE | Add Note to the payout
partner_trx_id | String(255) | TRUE | Unique Payout ID for a specific request, generated by partner
email | String(255) | FALSE | Email for invoice notification (Optional). Email can be more than one but not more that five separated by a whitespace.
child_balance | String(255) | FALSE | Child username whom balance will be used for disbursement, if Multi Account Management config is active (Optional). By default will be using client’s own balance.
### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
amount | BigInteger | Amount of disbursement (Accept Non-Decimal Number)
recipient_bank | String(3) | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
recipient_account | String(255) | Beneficiary account number 
trx_id | String(36) | Unique Payout ID from OY!. Partner can use this ID for settlement
partner_trx_id | String(255) | Unique Payout ID which partner put on the Request
timestamp | String(19) | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss")

**[Staging only]**

You can replicate error response code (final) based on [Fund Disbursement Response Codes](#fund-disbursement-response-codes-) by fill in `recipient_account` value using following format `<desired response code>0000`.
Another value not following the format will be processed normally.

example:

a request with `"recipient_account": "2100000"` will return response with `"status": { "code": "210", message": "Request is Rejected (Amount is not valid)"}`

## Get Child Balance

```shell
curl -X \
GET https://partner.oyindonesia.com/api/v1/multi-account/child/balance \
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
var request = http.Request('GET', Uri.parse('{{base_url}}/api/v1/multi-account/child/balance'));

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

  url := "%7B%7Bbase_url%7D%7D/api/v1/multi-account/child/balance"
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
  .url("{{base_url}}/api/v1/multi-account/child/balance")
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/v1/multi-account/child/balance");
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
$request->setUrl('{{base_url}}/api/v1/multi-account/child/balance');
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
conn.request("GET", "/api/v1/multi-account/child/balance", payload, headers)
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
  "data":{
    "balances":[
      {
        "username": "JohnDoe",
        "balance":100000000.0000,
        "pendingBalance":2000000.0000,
        "availableBalance":98500000.0000
      }
    ],
    "timeStamp":"10-12-2019 12:15:37"
  }
}
```

Use this API to get child balance.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/v1/multi-account/child/balance?child_username=<child_username>`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/v1/multi-account/child/balance?child_username=<child_username>`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
child_username | String(255) | FALSE | Child username whom balance info will be returned. If not specified, all child balances will be returned.

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Request in Object `{code: <status_code>, message: <status_message>}`
data | Object | Response data `{balances: <balances>, timeStamp: <timeStamp>}`
balances | Array of Objects | List of Objects consist of `username` of the child, `balance`, `overdraftBalance`, `overbookingBalance`, `pendingBalance`, and `availableBalance`
username | String(255) | Child username whom balance info is returned
balance | BigDecimal | Remaining balance (Accept non fraction number)
overdraftBalance | BigDecimal | Remaining overdraft balance (Accept non fraction number)
overbookingBalance | BigDecimal | Remaining overbooking balance (Accept non fraction number)
pendingBalance | BigDecimal | The cumulative balance of your pending transactions.
availableBalance | BigDecimal | The total cumulative money of Balance + Available Overdraft - Pending Balance that you can use for disbursement.
timeStamp | String(19) | Execution time of Request in OY! system ("dd-MM-yyyy HH:mm:ss").

