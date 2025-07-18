# Fund Acceptance

There are two products that fall under the category of funds acceptance which are Payment Link and Invoicing. 

Payment Link product will allow you to receive funds from your customers by choosing from our various payment channels such as bank transfer or cards. 

Similarly, Invoicing will let you to bill your customers for service/items purchased by sending a payment link to your customer's email by attatching/creating an invoice via our API.

All payment link and/or details can be monitored by using our dashboard and various API endpoints. 

## API Create (Payment Link)

An endpoint to create payment link URL which return parameters by encapsulation.

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/payment-checkout/create-v2 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'X-Api-Key: apikeymu' \
  -H 'X-Oy-Username: yourusername' \
  -d '{
        "partner_tx_id":"partnerTxId",
        "child_balance":"child123",
        "description":"description",
        "notes":"notes",
        "sender_name":"Sender name",
        "amount":50000,
        "email":"johndoe@gmail.com;jane@gmail.com",
        "phone_number":"",
        "is_open":false,
        "include_admin_fee":false,
        "list_disabled_payment_methods":"",
        "list_enabled_banks":"",
        "expiration":"2020-08-08 08:09:12",
        "va_display_name":"Display Name on VA"
    }'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/payment-checkout/create-v2'));
request.body = json.encode({
  "description": "Prod Test API",
  "partner_tx_id": "",
  "child_balance":"child123",
  "notes": "",
  "sender_name": "Mochamad Suryono",
  "amount": 10000,
  "email": "johndoe@gmail.com;jane@gmail.com",
  "phone_number": "085712163208",
  "is_open": true,
  "include_admin_fee": true,
  "list_disabled_payment_methods": "",
  "list_enabled_banks": "002, 008, 009, 013, 022",
  "list_enabled_ewallet": "shopeepay_ewallet",
  "expiration": "2021-06-14 13:00:00"
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

  url := "%7B%7Bbase_url%7D%7D/api/payment-checkout/create-v2"
  method := "POST"

  payload := strings.NewReader(`{
    "description": "Prod Test API",
    "partner_tx_id": "",
    "child_balance":"child123",
    "notes": "",
    "sender_name" : "Mochamad Suryono", 
    "amount" : 10000,
    "email": "johndoe@gmail.com;jane@gmail.com",
    "phone_number": "085712163208", 
    "is_open" : true,
    "include_admin_fee" : true,
    "list_disabled_payment_methods": "",
    "list_enabled_banks": "002, 008, 009, 013, 022",
    "list_enabled_ewallet": "shopeepay_ewallet",
    "expiration": "2021-06-14 13:00:00"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"description\": \"Prod Test API\",\n    \"partner_tx_id\": \"\",\n    \"notes\": \"\",\n    \"sender_name\" : \"Mochamad Suryono\", \n    \"amount\" : 10000,\n    \"email\": \"johndoe@gmail.com;jane@gmail.com\",\n    \"phone_number\": \"085712163208\", \n    \"is_open\" : true,\n    \"include_admin_fee\" : true,\n    \"list_disabled_payment_methods\": \"\",\n    \"list_enabled_banks\": \"002, 008, 009, 013, 022\",\n    \"list_enabled_ewallet\": \"shopeepay_ewallet\",\n    \"expiration\": \"2021-06-14 13:00:00\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/payment-checkout/create-v2")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "description": "Prod Test API",
  "partner_tx_id": "",
  "child_balance":"child123",
  "notes": "",
  "sender_name": "Mochamad Suryono",
  "amount": 10000,
  "email": "johndoe@gmail.com;jane@gmail.com",
  "phone_number": "085712163208",
  "is_open": true,
  "include_admin_fee": true,
  "list_disabled_payment_methods": "",
  "list_enabled_banks": "002, 008, 009, 013, 022",
  "list_enabled_ewallet": "shopeepay_ewallet",
  "expiration": "2021-06-14 13:00:00"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/payment-checkout/create-v2");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/payment-checkout/create-v2');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n    "description": "Prod Test API",\n    "partner_tx_id": "",\n    "notes": "",\n    "sender_name" : "Mochamad Suryono", \n    "amount" : 10000,\n    "email": "johndoe@gmail.com;jane@gmail.com",\n    "phone_number": "085712163208", \n    "is_open" : true,\n    "include_admin_fee" : true,\n    "list_disabled_payment_methods": "",\n    "list_enabled_banks": "002, 008, 009, 013, 022",\n    "list_enabled_ewallet": "shopeepay_ewallet",\n    "expiration": "2021-06-14 13:00:00"\n}');
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
  "description": "Prod Test API",
  "partner_tx_id": "",
  "child_balance":"child123",
  "notes": "",
  "sender_name": "Mochamad Suryono",
  "amount": 10000,
  "email": "business.support@oyindonesia.com",
  "phone_number": "085712163208",
  "is_open": True,
  "include_admin_fee": True,
  "list_disabled_payment_methods": "",
  "list_enabled_banks": "002, 008, 009, 013, 022",
  "list_enabled_ewallet": "shopeepay_ewallet",
  "expiration": "2021-06-14 13:00:00"
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/payment-checkout/create-v2", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```


### HTTPS Request

**[Production]** POST `https://partner.oyindonesia.com/api/payment-checkout/create-v2`<br/>
**[Staging]** POST `https://api-stg.oyindonesia.com/api/payment-checkout/create-v2`

> Json Response

```json
{
        "status": true,
        "url": "https://pay.oyindonesia.com/id",
        "message": "success",
        "email_status": "PROCESSED",
        "payment_link_id": "id"
        "child_balance":"child123",
}
```

### Request Headers

Parameters | Type | Description
---- | ---- | ----
X-Api-Key | String | API Key for establishing connection to this particular endpoint
X-Oy-Username | String | The registered partner's username with enabled access for payment link product

### Request Parameters

Parameters | Type | Required | Description | Limitation
---- | ---- | ---- | ------ | -------
partner_tx_id | String | FALSE | A unique transaction ID provided by partner. | A partner_tx_id that has been succesfully paid cannot be used anymore under the same username and only accepts alphanumerics. If empty then OY will generate automatically.
child_balance | String | FALSE | An optional parameter. Applicable for MAM transaction. Fill this with the username of your child account if you want to create a transaction on behalf of the child (the payment will go to the child account's balance)
description | String | FALSE | Description of the payment link. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
notes | String | FALSE | Notes. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
sender_name | String | TRUE | Name of the payer for a transaction. | Only accepts alphabets (A-Z) and space as input and cannot be empty.
amount | Integer | TRUE | The amount of a transaction to be paid. | The amount of a transaction to be paid, min. amount is 10000, except if you use unique code BCA which has min. amount 11000 or CARDS which has min. amount 15000
email | String | FALSE | The email addresses where the payment link will be sent to. | Up to 3 emails separated by ";"
phone_number | Numeric | FALSE | Phone number of the payer for a transaction. | Do not use special character (e.g. "+")
is_open	| Boolean | TRUE | Enable open/closed amount transaction method. | If is_open = TRUE and the amount parameter is defined, then a payer can pay any amount (greater than IDR 10,000) up to the defined amount. And in the case that is_open=false, then the amount and partner_tx_id parameters must be defined.
include_admin_fee | Boolean | TRUE | Admin fee will be added to the specified amount or amount inputted by user if this parameter is set as TRUE. | -
list_disabled_payment_methods | String | FALSE | To configure payment methods to be disabled (e.g. VA, CREDIT_CARD, QRIS, EWALLET, BANK_TRANSFER). When BANK_TRANSFER is included, you are disabling both VA and Unique Code. When CREDIT_CARD is included, you are disabling the ‘cards’ payment method as a whole - which means disabling both credit card and debit card. | There must be at least 1 payment method enabled. If this field is not included in the request, or filled with an empty String, then all payment methods will be enabled.
list_enabled_banks | String | TRUE | To configure banks to be enabled for BANK_TRANSFER payment method. | List of eligible bank codes: "002" (BRI), "008" (Mandiri), "009" (BNI), "013" (Permata), "022" (CIMB), "213" (SMBC), "451" (BSI), and "014" (BCA). Unique code is only available for BCA.
list_enabled_ewallet | String | TRUE | To configure list of e-wallets to be enabled on payment method page. | List of eligible e-wallet: "shopeepay_ewallet", "dana_ewallet", "linkaja_ewallet", "ovo_ewallet".
expiration | datetime | FALSE | To set the expiration of the payment link (yyyy-MM-dd HH:mm:ss) | Expiration date will be defaulted to 24 hours if it is not defined.
va_display_name | String | FALSE | Optional parameter, name to display on Bank Transfer VA Name | Can be omitted. Accepts alphabets (A-Z), numeric (0-9) and space as input.


### Response Parameters
Parameter | Type | Nullable | Description
---- | ---- | ----- | ----
status | Boolean | FALSE | true / false
url | String | TRUE | Payment link which used for payment. Only filled if payment checkout successfully created.
payment_link_id | String | TRUE | A unique transaction ID provided by partner. Only filled if payment checkout successfully created.
child_balance | String | TRUE | Applicable for MAM transaction. To be filled with the username of child account. If you do not pass the parameter in request, we will not pass this parameter in response. Only applicable for MAM transaction.
message | String | FALSE | Message response
email_status | String | TRUE | email status. Only filled if payment checkout successfully created.


## API Create (Invoicing)

Our Invoicing product is leveraging most parameters that are defined for our payment link in the above section with some additional parameters that are only applicable for Inovicing product. 

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/payment-checkout/create-invoice\
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'X-Api-key: apikeymu' \
  -H 'X-Oy-Username: yourusername' \
  -d '{
        "partner_tx_id":"partner tx id",
        "description":"desc invoice",
        "notes":"notes satu",
        "sender_name":"Sender Name API",
        "amount":"30000",
        "email":"",
        "phone_number":"",
        "is_open":"true",
        "include_admin_fee":false,
        "list_disabled_payment_methods":"",
        "list_enabled_banks":"013",
        "expiration":"2020-07-28 19:15:13",
        "due_date":"2020-07-28 18:00:00",
        "partner_user_id":"partner user id", 
        "full_name" : "Raymond",
        "is_va_lifetime": false,
        "attachment": "JVBERi0xLjQNJeLjz9MNCjYgMCBvYmogPDwvTGluZWFyaXplZCAxL0wgNzcxMjMvTyA4L0UgNzI5MDcvTiAxL1QgNzY5NTcvSCBbIDg5NiAyMDNdPj4NZW5kb2JqDSAgICAgICAgICAgICAgICAgICAgDQp4cmVmDQo2IDMwDQowMDAwMDAwMDE2IDAwMDAwIG4NCjAwMDAwMDEwOTkgMDAwMDAgbg0KMDAwMDAwMTE3NSAwMDAwMCBuDQowMDAwMDAxMzU3IDAwMDAwIG4NCjAwMDAwMDE0NzMgMDAwMDAgbg0KMDAwMDAwMTYwNyAwMDAwMCBuDQowMDAwMDAxODkwIDAwMDAwIG4NCjAwMDAwMDIwMTkgMDAwMDAgbg0KMDAwMDAwMjM5NSAwMDAwMCBuDQowMDAwMDAzNDU1IDAwMDAwIG4NCjAwMDAwMDQ0NzEgMDAwMDAgbg0KMDAwMDAwNTM1MSAwMDAwMCBuDQowMDAwMDA2MzMzIDAwMDAwIG4NCjAwMDAwMDczOTkgMDAwMDAgbg0KMDAwMDAwODM4NCAwMDAwMCBuDQowMDAwMDA5NDEwIDAwMDAwIG4NCjAwMDAwMTA0MTYgMDAwMDAgbg0KMDAwMDAyMjY0OCAwMDAwMCBuDQowMDAwMDIyOTAwIDAwMDAwIG4NCjAwMDAwMjMwODYgMDAwMDAgbg0KMDAwMDAyMzM3MCAwMDAwMCBuDQowMDAwMDM3OTgxIDAwMDAwIG4NCjAwMDAwMzgyMzQgMDAwMDAgbg0KMDAwMDA1MTU1NiAwMDAwMCBuDQowMDAwMDUxODAyIDAwMDAwIG4NCjAwMDAwNTE5ODMgMDAwMDAgbg0KMDAwMDA1MjI2OCAwMDAwMCBuDQowMDAwMDcyNTg0IDAwMDAwIG4NCjAwMDAwNzI4MzEgMDAwMDAgbg0KMDAwMDAwMDg5NiAwMDAwMCBuDQp0cmFpbGVyDQo8PC9TaXplIDM2L1ByZXYgNzY5NDcvUm9vdCA3IDAgUi9JbmZvIDUgMCBSL0lEWzw2Q0UwNTExNkQxMzc1QUFCMkEyRDgxMzU5QjQ3MUM2QT48N0E5OUJEMjY4NTM3MEM0MEI1ODU3QTk5NTMzNUEzRDc+XT4+DQpzdGFydHhyZWYNCjANCiUlRU9GDQogICAgICAgICAgICAgICAgDQozNSAw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ZW5kb2JqDTEgMCBvYmo8PC9OdW1zWzAgMiAwIFJdPj4NZW5kb2JqDTIgMCBvYmo8PC9TL0Q+Pg1lbmRvYmoNMyAwIG9iajw8L0NvdW50IDEvVHlwZS9QYWdlcy9LaWRzWzggMCBSXT4+DWVuZG9iag00IDAgb2JqPDwvU3VidHlwZS9YTUwvTGVuZ3RoIDM2MjIvVHlwZS9NZXRhZGF0YT4+c3RyZWFtDQo8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSIzLjEtNzAyIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6cGRmPSJodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvIj4KICAgICAgICAgPHBkZjpQcm9kdWNlcj5BY3JvYmF0IERpc3RpbGxlciA3LjAuNSAoV2luZG93cyk8L3BkZjpQcm9kdWNlcj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+UFNjcmlwdDUuZGxsIFZlcnNpb24gNS4yPC94YXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4YXA6TW9kaWZ5RGF0ZT4yMDEwLTAzLTA0VDEzOjA4OjM3KzAxOjAwPC94YXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhhcDpDcmVhdGVEYXRlPjIwMTAtMDMtMDRUMTM6MDgrMDE6MDA8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1ldGFkYXRhRGF0ZT4yMDEwLTAzLTA0VDEzOjA4OjM3KzAxOjAwPC94YXA6TWV0YWRhdGFEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5hcHBsaWNhdGlvbi9wZGY8L2RjOmZvcm1hdD4KICAgICAgICAgPGRjOnRpdGxlPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5NaWNyb3NvZnQgV29yZCAtIFRlc3QgZG9jdW1lbnQgV29yZC5kb2M8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QWx0PgogICAgICAgICA8L2RjOnRpdGxlPgogICAgICAgICA8ZGM6Y3JlYXRvcj4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGk+bWFuc2hhbmRlbjwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwvZGM6Y3JlYXRvcj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIj4KICAgICAgICAgPHhhcE1NOkRvY3VtZW50SUQ+dXVpZDowN2QwZjBmMC1jMDFmLTRhNjQtOTIzOC03OTdkOGE1MmY3MGM8L3hhcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4YXBNTTpJbnN0YW5jZUlEPnV1aWQ6ODU0ZjczN2MtN2NiYi00ODc3LTljMWQtZDljYmE4NzA1NTk5PC94YXBNTTpJbnN0YW5jZUlEPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+DQplbmRzdHJlYW0NZW5kb2JqDTUgMCBvYmo8PC9DcmVhdGlvbkRhdGUoRDoyMDEwMDMwNDEzMDgwMCswMScwMCcpL0F1dGhvcihtYW5zaGFuZGVuKS9DcmVhdG9yKFBTY3JpcHQ1LmRsbCBWZXJzaW9uIDUuMikvUHJvZHVjZXIoQWNyb2JhdCBEaXN0aWxsZXIgNy4wLjUgXChXaW5kb3dzXCkpL01vZERhdGUoRDoyMDEwMDMwNDEzMDgzNyswMScwMCcpL1RpdGxlKE1pY3Jvc29mdCBXb3JkIC0gVGVzdCBkb2N1bWVudCBXb3JkLmRvYyk+Pg1lbmRvYmoNeHJlZg0KMCA2DQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwNzI5MDcgMDAwMDAgbg0KMDAwMDA3Mjk0MCAwMDAwMCBuDQowMDAwMDcyOTYzIDAwMDAwIG4NCjAwMDAwNzMwMTMgMDAwMDAgbg0KMDAwMDA3NjcxMSAwMDAwMCBuDQp0cmFpbGVyDQo8PC9TaXplIDY+Pg0Kc3RhcnR4cmVmDQoxMTYNCiUlRU9GDQo=",
        "invoice_items": [
          {
            "item":"item name", 
            "description":"description", 
            "quantity": 10, 
            "date_of_purchase":"2020-09-20", 
            "price_per_item": 33000  
          }
        ]
    }'
```

```dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/payment-checkout/create-invoice'));
request.body = json.encode({
  "description": "testdesc",
  "notes": "testnote",
  "partner_tx_id": "ab9c",
  "sender_name": "Mochamad Suryono",
  "amount": "15000",
  "email": "business.support@oyindonesia.com",
  "phone_number": "085712163208",
  "is_open": true,
  "include_admin_fee": false,
  "list_disabled_payment_methods": "",
  "list_enabled_banks": "002, 008, 009, 013, 022",
  "expiration": "2021-03-13 00:00:00",
  "due_date": "2021-03-12 12:00:00",
  "partner_user_id": "OYON-CHECKOUT000003",
  "full_name": "Mochamad Suryono",
  "is_va_lifetime": false,
  "attachment": "JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDQ5Nj4+c3RyZWFtCnicrZVdb9MwFIbv/SsOd51EwrHjz0tKhxQk2IciJMS4CG46lbVNyYcE/HqcbNloh5xO8U3OUXJ8Hr/2aweBQkQBQRjhnnZLfpJ5RhIJQhjIluQ8I1eEwYfubVeHMFRnW/LmPQWKkK3I7Cz70dU+lfTN/hnE3ChJY9SPA0U3EPvP1S2ZXXx5Bemnzxfpu/OuGcLtfxp+/ebisp+QH8VkrNjhHJ9QaV23xRKyciKIGuCGjYPmv6cq0idKWuRNEYDlV7VoixAgwcdEXeZVsysqyH5BughA88t6uy3bXQNO3XRbCEq9pKr8sw5gPuXT8zGv7/JNCOeh9mAYMoxQRcyEMJ5KRlEmokkI63lVrSgqi8JEWlsV8ZURkRFMR1pILkVuZcJYCEd69V7vY3eZxYj4GvEkGsaMK5SAMTcauYsKje6aObskUsGWaKr7bPOYHUd7/8XIocZlx9H2DfuSh+Qw2AG4GZLDYMlqmLfHEQIS/XyBaOf++5uoqG213jfrcjfVfAYdi/tY0288noxBrpqpvwoh1AjjslrbqUo6j/kpWdnkG7iZpYvrm7MQmyOe045vBhkhDbFFI6gTz6Jvj9zqCd+frz/5MRMvOvyeBUxGRM3bvIHvRZXvmryGu7Jq901ZhTDJqEweC+xlvkTqX6+ILeYKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1RhYnMvUy9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L1R5cGUvR3JvdXAvQ1MvRGV2aWNlUkdCPj4vQ29udGVudHMgMyAwIFIvVHlwZS9QYWdlL1Jlc291cmNlczw8L0NvbG9yU3BhY2U8PC9DUy9EZXZpY2VSR0I+Pi9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXS9Gb250PDwvRjEgMiAwIFI+Pj4+L1BhcmVudCA0IDAgUi9Sb3RhdGUgOTAvTWVkaWFCb3hbMCAwIDU5NSA4NDJdPj4KZW5kb2JqCjUgMCBvYmoKWzEgMCBSL1hZWiAwIDYwNSAwXQplbmRvYmoKMiAwIG9iago8PC9TdWJ0eXBlL1R5cGUxL1R5cGUvRm9udC9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nPj4KZW5kb2JqCjQgMCBvYmoKPDwvS2lkc1sxIDAgUl0vVHlwZS9QYWdlcy9Db3VudCAxL0lUWFQoMi4xLjcpPj4KZW5kb2JqCjYgMCBvYmoKPDwvTmFtZXNbKEpSX1BBR0VfQU5DSE9SXzBfMSkgNSAwIFJdPj4KZW5kb2JqCjcgMCBvYmoKPDwvRGVzdHMgNiAwIFI+PgplbmRvYmoKOCAwIG9iago8PC9OYW1lcyA3IDAgUi9UeXBlL0NhdGFsb2cvUGFnZXMgNCAwIFIvVmlld2VyUHJlZmVyZW5jZXM8PC9QcmludFNjYWxpbmcvQXBwRGVmYXVsdD4+Pj4KZW5kb2JqCjkgMCBvYmoKPDwvTW9kRGF0ZShEOjIwMjAwNzI5MTE1MzE1WikvQ3JlYXRvcihKYXNwZXJSZXBvcnRzIExpYnJhcnkgdmVyc2lvbiBudWxsKS9DcmVhdGlvbkRhdGUoRDoyMDIwMDcyOTExNTMxNVopL1Byb2R1Y2VyKGlUZXh0IDIuMS43IGJ5IDFUM1hUKT4+CmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNTc4IDAwMDAwIG4gCjAwMDAwMDA4NjQgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwOTUyIDAwMDAwIG4gCjAwMDAwMDA4MjkgMDAwMDAgbiAKMDAwMDAwMTAxNSAwMDAwMCBuIAowMDAwMDAxMDY5IDAwMDAwIG4gCjAwMDAwMDExMDEgMDAwMDAgbiAKMDAwMDAwMTIwNCAwMDAwMCBuIAp0cmFpbGVyCjw8L0luZm8gOSAwIFIvSUQgWzwzZWMyMWUyNjkwNjcxYzViYTliNjUxODNhY2IxOTM3ND48NzZhNzM1MWE1YmY4ZmMxNDNmY2NlZmUwYjRjMzA4MWI+XS9Sb290IDggMCBSL1NpemUgMTA+PgpzdGFydHhyZWYKMTM1OAolJUVPRgo=",
  "invoice_items": [
    {
      "item": "McDonald's Big Mac",
      "description": "Oyon Meals",
      "quantity": 3,
      "date_of_purchase": "2021-03-12",
      "price_per_item": 50000
    }
  ]
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

  url := "%7B%7Bbase_url%7D%7D/api/payment-checkout/create-invoice"
  method := "POST"

  payload := strings.NewReader(`{
    "description": "testdesc",
    "notes": "testnote",
    "partner_tx_id": "ab9c",
    "sender_name" : "Mochamad Suryono", 
    "amount" : "15000",
    "email": "business.support@oyindonesia.com",
    "phone_number": "085712163208", 
    "is_open" : true,
    "include_admin_fee" : false,
    "list_disabled_payment_methods": "",
    "list_enabled_banks": "002, 008, 009, 013, 022",
    "expiration": "2021-03-13 00:00:00",
    "due_date": "2021-03-12 12:00:00",
    "partner_user_id": "OYON-CHECKOUT000003",
    "full_name": "Mochamad Suryono",
    "is_va_lifetime": false,
    "attachment": "JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDQ5Nj4+c3RyZWFtCnicrZVdb9MwFIbv/SsOd51EwrHjz0tKhxQk2IciJMS4CG46lbVNyYcE/HqcbNloh5xO8U3OUXJ8Hr/2aweBQkQBQRjhnnZLfpJ5RhIJQhjIluQ8I1eEwYfubVeHMFRnW/LmPQWKkK3I7Cz70dU+lfTN/hnE3ChJY9SPA0U3EPvP1S2ZXXx5Bemnzxfpu/OuGcLtfxp+/ebisp+QH8VkrNjhHJ9QaV23xRKyciKIGuCGjYPmv6cq0idKWuRNEYDlV7VoixAgwcdEXeZVsysqyH5BughA88t6uy3bXQNO3XRbCEq9pKr8sw5gPuXT8zGv7/JNCOeh9mAYMoxQRcyEMJ5KRlEmokkI63lVrSgqi8JEWlsV8ZURkRFMR1pILkVuZcJYCEd69V7vY3eZxYj4GvEkGsaMK5SAMTcauYsKje6aObskUsGWaKr7bPOYHUd7/8XIocZlx9H2DfuSh+Qw2AG4GZLDYMlqmLfHEQIS/XyBaOf++5uoqG213jfrcjfVfAYdi/tY0288noxBrpqpvwoh1AjjslrbqUo6j/kpWdnkG7iZpYvrm7MQmyOe045vBhkhDbFFI6gTz6Jvj9zqCd+frz/5MRMvOvyeBUxGRM3bvIHvRZXvmryGu7Jq901ZhTDJqEweC+xlvkTqX6+ILeYKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1RhYnMvUy9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L1R5cGUvR3JvdXAvQ1MvRGV2aWNlUkdCPj4vQ29udGVudHMgMyAwIFIvVHlwZS9QYWdlL1Jlc291cmNlczw8L0NvbG9yU3BhY2U8PC9DUy9EZXZpY2VSR0I+Pi9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXS9Gb250PDwvRjEgMiAwIFI+Pj4+L1BhcmVudCA0IDAgUi9Sb3RhdGUgOTAvTWVkaWFCb3hbMCAwIDU5NSA4NDJdPj4KZW5kb2JqCjUgMCBvYmoKWzEgMCBSL1hZWiAwIDYwNSAwXQplbmRvYmoKMiAwIG9iago8PC9TdWJ0eXBlL1R5cGUxL1R5cGUvRm9udC9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nPj4KZW5kb2JqCjQgMCBvYmoKPDwvS2lkc1sxIDAgUl0vVHlwZS9QYWdlcy9Db3VudCAxL0lUWFQoMi4xLjcpPj4KZW5kb2JqCjYgMCBvYmoKPDwvTmFtZXNbKEpSX1BBR0VfQU5DSE9SXzBfMSkgNSAwIFJdPj4KZW5kb2JqCjcgMCBvYmoKPDwvRGVzdHMgNiAwIFI+PgplbmRvYmoKOCAwIG9iago8PC9OYW1lcyA3IDAgUi9UeXBlL0NhdGFsb2cvUGFnZXMgNCAwIFIvVmlld2VyUHJlZmVyZW5jZXM8PC9QcmludFNjYWxpbmcvQXBwRGVmYXVsdD4+Pj4KZW5kb2JqCjkgMCBvYmoKPDwvTW9kRGF0ZShEOjIwMjAwNzI5MTE1MzE1WikvQ3JlYXRvcihKYXNwZXJSZXBvcnRzIExpYnJhcnkgdmVyc2lvbiBudWxsKS9DcmVhdGlvbkRhdGUoRDoyMDIwMDcyOTExNTMxNVopL1Byb2R1Y2VyKGlUZXh0IDIuMS43IGJ5IDFUM1hUKT4+CmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNTc4IDAwMDAwIG4gCjAwMDAwMDA4NjQgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwOTUyIDAwMDAwIG4gCjAwMDAwMDA4MjkgMDAwMDAgbiAKMDAwMDAwMTAxNSAwMDAwMCBuIAowMDAwMDAxMDY5IDAwMDAwIG4gCjAwMDAwMDExMDEgMDAwMDAgbiAKMDAwMDAwMTIwNCAwMDAwMCBuIAp0cmFpbGVyCjw8L0luZm8gOSAwIFIvSUQgWzwzZWMyMWUyNjkwNjcxYzViYTliNjUxODNhY2IxOTM3ND48NzZhNzM1MWE1YmY4ZmMxNDNmY2NlZmUwYjRjMzA4MWI+XS9Sb290IDggMCBSL1NpemUgMTA+PgpzdGFydHhyZWYKMTM1OAolJUVPRgo=",
    "invoice_items": [
        {
            "item": "McDonald's Big Mac",
            "description": "Oyon Meals",
            "quantity": 3,
            "date_of_purchase": "2021-03-12",
            "price_per_item": 50000
        }
    ]
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"description\": \"testdesc\",\n    \"notes\": \"testnote\",\n    \"partner_tx_id\": \"ab9c\",\n    \"sender_name\" : \"Mochamad Suryono\", \n    \"amount\" : \"15000\",\n    \"email\": \"business.support@oyindonesia.com\",\n    \"phone_number\": \"085712163208\", \n    \"is_open\" : true,\n      \"include_admin_fee\" : false,\n    \"list_disabled_payment_methods\": \"\",\n    \"list_enabled_banks\": \"002, 008, 009, 013, 022\",\n    \"expiration\": \"2021-03-13 00:00:00\",\n    \"due_date\":\"2021-03-12 12:00:00\",\n    \"partner_user_id\": \"OYON-CHECKOUT000003\",\n    \"full_name\": \"Mochamad Suryono\",\n    \"is_va_lifetime\": false,\n    \"attachment\": \"JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDQ5Nj4+c3RyZWFtCnicrZVdb9MwFIbv/SsOd51EwrHjz0tKhxQk2IciJMS4CG46lbVNyYcE/HqcbNloh5xO8U3OUXJ8Hr/2aweBQkQBQRjhnnZLfpJ5RhIJQhjIluQ8I1eEwYfubVeHMFRnW/LmPQWKkK3I7Cz70dU+lfTN/hnE3ChJY9SPA0U3EPvP1S2ZXXx5Bemnzxfpu/OuGcLtfxp+/ebisp+QH8VkrNjhHJ9QaV23xRKyciKIGuCGjYPmv6cq0idKWuRNEYDlV7VoixAgwcdEXeZVsysqyH5BughA88t6uy3bXQNO3XRbCEq9pKr8sw5gPuXT8zGv7/JNCOeh9mAYMoxQRcyEMJ5KRlEmokkI63lVrSgqi8JEWlsV8ZURkRFMR1pILkVuZcJYCEd69V7vY3eZxYj4GvEkGsaMK5SAMTcauYsKje6aObskUsGWaKr7bPOYHUd7/8XIocZlx9H2DfuSh+Qw2AG4GZLDYMlqmLfHEQIS/XyBaOf++5uoqG213jfrcjfVfAYdi/tY0288noxBrpqpvwoh1AjjslrbqUo6j/kpWdnkG7iZpYvrm7MQmyOe045vBhkhDbFFI6gTz6Jvj9zqCd+frz/5MRMvOvyeBUxGRM3bvIHvRZXvmryGu7Jq901ZhTDJqEweC+xlvkTqX6+ILeYKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1RhYnMvUy9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L1R5cGUvR3JvdXAvQ1MvRGV2aWNlUkdCPj4vQ29udGVudHMgMyAwIFIvVHlwZS9QYWdlL1Jlc291cmNlczw8L0NvbG9yU3BhY2U8PC9DUy9EZXZpY2VSR0I+Pi9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXS9Gb250PDwvRjEgMiAwIFI+Pj4+L1BhcmVudCA0IDAgUi9Sb3RhdGUgOTAvTWVkaWFCb3hbMCAwIDU5NSA4NDJdPj4KZW5kb2JqCjUgMCBvYmoKWzEgMCBSL1hZWiAwIDYwNSAwXQplbmRvYmoKMiAwIG9iago8PC9TdWJ0eXBlL1R5cGUxL1R5cGUvRm9udC9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nPj4KZW5kb2JqCjQgMCBvYmoKPDwvS2lkc1sxIDAgUl0vVHlwZS9QYWdlcy9Db3VudCAxL0lUWFQoMi4xLjcpPj4KZW5kb2JqCjYgMCBvYmoKPDwvTmFtZXNbKEpSX1BBR0VfQU5DSE9SXzBfMSkgNSAwIFJdPj4KZW5kb2JqCjcgMCBvYmoKPDwvRGVzdHMgNiAwIFI+PgplbmRvYmoKOCAwIG9iago8PC9OYW1lcyA3IDAgUi9UeXBlL0NhdGFsb2cvUGFnZXMgNCAwIFIvVmlld2VyUHJlZmVyZW5jZXM8PC9QcmludFNjYWxpbmcvQXBwRGVmYXVsdD4+Pj4KZW5kb2JqCjkgMCBvYmoKPDwvTW9kRGF0ZShEOjIwMjAwNzI5MTE1MzE1WikvQ3JlYXRvcihKYXNwZXJSZXBvcnRzIExpYnJhcnkgdmVyc2lvbiBudWxsKS9DcmVhdGlvbkRhdGUoRDoyMDIwMDcyOTExNTMxNVopL1Byb2R1Y2VyKGlUZXh0IDIuMS43IGJ5IDFUM1hUKT4+CmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNTc4IDAwMDAwIG4gCjAwMDAwMDA4NjQgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwOTUyIDAwMDAwIG4gCjAwMDAwMDA4MjkgMDAwMDAgbiAKMDAwMDAwMTAxNSAwMDAwMCBuIAowMDAwMDAxMDY5IDAwMDAwIG4gCjAwMDAwMDExMDEgMDAwMDAgbiAKMDAwMDAwMTIwNCAwMDAwMCBuIAp0cmFpbGVyCjw8L0luZm8gOSAwIFIvSUQgWzwzZWMyMWUyNjkwNjcxYzViYTliNjUxODNhY2IxOTM3ND48NzZhNzM1MWE1YmY4ZmMxNDNmY2NlZmUwYjRjMzA4MWI+XS9Sb290IDggMCBSL1NpemUgMTA+PgpzdGFydHhyZWYKMTM1OAolJUVPRgo=\",\n    \"invoice_items\": [\n        {\n            \"item\": \"McDonald's Big Mac\",\n            \"description\": \"Oyon Meals\",\n            \"quantity\": 3,\n            \"date_of_purchase\": \"2021-03-12\",\n            \"price_per_item\": 50000\n        }\n    ]\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/payment-checkout/create-invoice")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "description": "testdesc",
  "notes": "testnote",
  "partner_tx_id": "ab9c",
  "sender_name": "Mochamad Suryono",
  "amount": "15000",
  "email": "business.support@oyindonesia.com",
  "phone_number": "085712163208",
  "is_open": true,
  "include_admin_fee": false,
  "list_disabled_payment_methods": "",
  "list_enabled_banks": "002, 008, 009, 013, 022",
  "expiration": "2021-03-13 00:00:00",
  "due_date": "2021-03-12 12:00:00",
  "partner_user_id": "OYON-CHECKOUT000003",
  "full_name": "Mochamad Suryono",
  "is_va_lifetime": false,
  "attachment": "JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDQ5Nj4+c3RyZWFtCnicrZVdb9MwFIbv/SsOd51EwrHjz0tKhxQk2IciJMS4CG46lbVNyYcE/HqcbNloh5xO8U3OUXJ8Hr/2aweBQkQBQRjhnnZLfpJ5RhIJQhjIluQ8I1eEwYfubVeHMFRnW/LmPQWKkK3I7Cz70dU+lfTN/hnE3ChJY9SPA0U3EPvP1S2ZXXx5Bemnzxfpu/OuGcLtfxp+/ebisp+QH8VkrNjhHJ9QaV23xRKyciKIGuCGjYPmv6cq0idKWuRNEYDlV7VoixAgwcdEXeZVsysqyH5BughA88t6uy3bXQNO3XRbCEq9pKr8sw5gPuXT8zGv7/JNCOeh9mAYMoxQRcyEMJ5KRlEmokkI63lVrSgqi8JEWlsV8ZURkRFMR1pILkVuZcJYCEd69V7vY3eZxYj4GvEkGsaMK5SAMTcauYsKje6aObskUsGWaKr7bPOYHUd7/8XIocZlx9H2DfuSh+Qw2AG4GZLDYMlqmLfHEQIS/XyBaOf++5uoqG213jfrcjfVfAYdi/tY0288noxBrpqpvwoh1AjjslrbqUo6j/kpWdnkG7iZpYvrm7MQmyOe045vBhkhDbFFI6gTz6Jvj9zqCd+frz/5MRMvOvyeBUxGRM3bvIHvRZXvmryGu7Jq901ZhTDJqEweC+xlvkTqX6+ILeYKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1RhYnMvUy9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L1R5cGUvR3JvdXAvQ1MvRGV2aWNlUkdCPj4vQ29udGVudHMgMyAwIFIvVHlwZS9QYWdlL1Jlc291cmNlczw8L0NvbG9yU3BhY2U8PC9DUy9EZXZpY2VSR0I+Pi9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXS9Gb250PDwvRjEgMiAwIFI+Pj4+L1BhcmVudCA0IDAgUi9Sb3RhdGUgOTAvTWVkaWFCb3hbMCAwIDU5NSA4NDJdPj4KZW5kb2JqCjUgMCBvYmoKWzEgMCBSL1hZWiAwIDYwNSAwXQplbmRvYmoKMiAwIG9iago8PC9TdWJ0eXBlL1R5cGUxL1R5cGUvRm9udC9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nPj4KZW5kb2JqCjQgMCBvYmoKPDwvS2lkc1sxIDAgUl0vVHlwZS9QYWdlcy9Db3VudCAxL0lUWFQoMi4xLjcpPj4KZW5kb2JqCjYgMCBvYmoKPDwvTmFtZXNbKEpSX1BBR0VfQU5DSE9SXzBfMSkgNSAwIFJdPj4KZW5kb2JqCjcgMCBvYmoKPDwvRGVzdHMgNiAwIFI+PgplbmRvYmoKOCAwIG9iago8PC9OYW1lcyA3IDAgUi9UeXBlL0NhdGFsb2cvUGFnZXMgNCAwIFIvVmlld2VyUHJlZmVyZW5jZXM8PC9QcmludFNjYWxpbmcvQXBwRGVmYXVsdD4+Pj4KZW5kb2JqCjkgMCBvYmoKPDwvTW9kRGF0ZShEOjIwMjAwNzI5MTE1MzE1WikvQ3JlYXRvcihKYXNwZXJSZXBvcnRzIExpYnJhcnkgdmVyc2lvbiBudWxsKS9DcmVhdGlvbkRhdGUoRDoyMDIwMDcyOTExNTMxNVopL1Byb2R1Y2VyKGlUZXh0IDIuMS43IGJ5IDFUM1hUKT4+CmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNTc4IDAwMDAwIG4gCjAwMDAwMDA4NjQgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwOTUyIDAwMDAwIG4gCjAwMDAwMDA4MjkgMDAwMDAgbiAKMDAwMDAwMTAxNSAwMDAwMCBuIAowMDAwMDAxMDY5IDAwMDAwIG4gCjAwMDAwMDExMDEgMDAwMDAgbiAKMDAwMDAwMTIwNCAwMDAwMCBuIAp0cmFpbGVyCjw8L0luZm8gOSAwIFIvSUQgWzwzZWMyMWUyNjkwNjcxYzViYTliNjUxODNhY2IxOTM3ND48NzZhNzM1MWE1YmY4ZmMxNDNmY2NlZmUwYjRjMzA4MWI+XS9Sb290IDggMCBSL1NpemUgMTA+PgpzdGFydHhyZWYKMTM1OAolJUVPRgo=",
  "invoice_items": [
    {
      "item": "McDonald's Big Mac",
      "description": "Oyon Meals",
      "quantity": 3,
      "date_of_purchase": "2021-03-12",
      "price_per_item": 50000
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

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/payment-checkout/create-invoice");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/payment-checkout/create-invoice');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}'
));
$request->setBody('{\n    "description": "testdesc",\n    "notes": "testnote",\n    "partner_tx_id": "ab9c",\n    "sender_name" : "Mochamad Suryono", \n    "amount" : "15000",\n    "email": "business.support@oyindonesia.com",\n    "phone_number": "085712163208", \n    "is_open" : true,\n     "include_admin_fee" : false,\n    "list_disabled_payment_methods": "",\n    "list_enabled_banks": "002, 008, 009, 013, 022",\n    "expiration": "2021-03-13 00:00:00",\n    "due_date": "2021-03-12 12:00:00",\n    "partner_user_id": "OYON-CHECKOUT000003",\n    "full_name": "Mochamad Suryono",\n    "is_va_lifetime": false,\n    "attachment": "JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDQ5Nj4+c3RyZWFtCnicrZVdb9MwFIbv/SsOd51EwrHjz0tKhxQk2IciJMS4CG46lbVNyYcE/HqcbNloh5xO8U3OUXJ8Hr/2aweBQkQBQRjhnnZLfpJ5RhIJQhjIluQ8I1eEwYfubVeHMFRnW/LmPQWKkK3I7Cz70dU+lfTN/hnE3ChJY9SPA0U3EPvP1S2ZXXx5Bemnzxfpu/OuGcLtfxp+/ebisp+QH8VkrNjhHJ9QaV23xRKyciKIGuCGjYPmv6cq0idKWuRNEYDlV7VoixAgwcdEXeZVsysqyH5BughA88t6uy3bXQNO3XRbCEq9pKr8sw5gPuXT8zGv7/JNCOeh9mAYMoxQRcyEMJ5KRlEmokkI63lVrSgqi8JEWlsV8ZURkRFMR1pILkVuZcJYCEd69V7vY3eZxYj4GvEkGsaMK5SAMTcauYsKje6aObskUsGWaKr7bPOYHUd7/8XIocZlx9H2DfuSh+Qw2AG4GZLDYMlqmLfHEQIS/XyBaOf++5uoqG213jfrcjfVfAYdi/tY0288noxBrpqpvwoh1AjjslrbqUo6j/kpWdnkG7iZpYvrm7MQmyOe045vBhkhDbFFI6gTz6Jvj9zqCd+frz/5MRMvOvyeBUxGRM3bvIHvRZXvmryGu7Jq901ZhTDJqEweC+xlvkTqX6+ILeYKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1RhYnMvUy9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L1R5cGUvR3JvdXAvQ1MvRGV2aWNlUkdCPj4vQ29udGVudHMgMyAwIFIvVHlwZS9QYWdlL1Jlc291cmNlczw8L0NvbG9yU3BhY2U8PC9DUy9EZXZpY2VSR0I+Pi9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXS9Gb250PDwvRjEgMiAwIFI+Pj4+L1BhcmVudCA0IDAgUi9Sb3RhdGUgOTAvTWVkaWFCb3hbMCAwIDU5NSA4NDJdPj4KZW5kb2JqCjUgMCBvYmoKWzEgMCBSL1hZWiAwIDYwNSAwXQplbmRvYmoKMiAwIG9iago8PC9TdWJ0eXBlL1R5cGUxL1R5cGUvRm9udC9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nPj4KZW5kb2JqCjQgMCBvYmoKPDwvS2lkc1sxIDAgUl0vVHlwZS9QYWdlcy9Db3VudCAxL0lUWFQoMi4xLjcpPj4KZW5kb2JqCjYgMCBvYmoKPDwvTmFtZXNbKEpSX1BBR0VfQU5DSE9SXzBfMSkgNSAwIFJdPj4KZW5kb2JqCjcgMCBvYmoKPDwvRGVzdHMgNiAwIFI+PgplbmRvYmoKOCAwIG9iago8PC9OYW1lcyA3IDAgUi9UeXBlL0NhdGFsb2cvUGFnZXMgNCAwIFIvVmlld2VyUHJlZmVyZW5jZXM8PC9QcmludFNjYWxpbmcvQXBwRGVmYXVsdD4+Pj4KZW5kb2JqCjkgMCBvYmoKPDwvTW9kRGF0ZShEOjIwMjAwNzI5MTE1MzE1WikvQ3JlYXRvcihKYXNwZXJSZXBvcnRzIExpYnJhcnkgdmVyc2lvbiBudWxsKS9DcmVhdGlvbkRhdGUoRDoyMDIwMDcyOTExNTMxNVopL1Byb2R1Y2VyKGlUZXh0IDIuMS43IGJ5IDFUM1hUKT4+CmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNTc4IDAwMDAwIG4gCjAwMDAwMDA4NjQgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwOTUyIDAwMDAwIG4gCjAwMDAwMDA4MjkgMDAwMDAgbiAKMDAwMDAwMTAxNSAwMDAwMCBuIAowMDAwMDAxMDY5IDAwMDAwIG4gCjAwMDAwMDExMDEgMDAwMDAgbiAKMDAwMDAwMTIwNCAwMDAwMCBuIAp0cmFpbGVyCjw8L0luZm8gOSAwIFIvSUQgWzwzZWMyMWUyNjkwNjcxYzViYTliNjUxODNhY2IxOTM3ND48NzZhNzM1MWE1YmY4ZmMxNDNmY2NlZmUwYjRjMzA4MWI+XS9Sb290IDggMCBSL1NpemUgMTA+PgpzdGFydHhyZWYKMTM1OAolJUVPRgo=",\n    "invoice_items": [\n        {\n            "item": "McDonald\'s Big Mac",\n            "description": "Oyon Meals",\n            "quantity": 3,\n            "date_of_purchase": "2021-03-12",\n            "price_per_item": 50000\n        }\n    ]\n}');
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
  "description": "testdesc",
  "notes": "testnote",
  "partner_tx_id": "ab9c",
  "sender_name": "Mochamad Suryono",
  "amount": "15000",
  "email": "business.support@oyindonesia.com",
  "phone_number": "085712163208",
  "is_open": True,
  "include_admin_fee": False,
  "list_disabled_payment_methods": "",
  "list_enabled_banks": "002, 008, 009, 013, 022",
  "expiration": "2021-03-13 00:00:00",
  "due_date": "2021-03-12 12:00:00",
  "partner_user_id": "OYON-CHECKOUT000003",
  "full_name": "Mochamad Suryono",
  "is_va_lifetime": False,
  "attachment": "JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDQ5Nj4+c3RyZWFtCnicrZVdb9MwFIbv/SsOd51EwrHjz0tKhxQk2IciJMS4CG46lbVNyYcE/HqcbNloh5xO8U3OUXJ8Hr/2aweBQkQBQRjhnnZLfpJ5RhIJQhjIluQ8I1eEwYfubVeHMFRnW/LmPQWKkK3I7Cz70dU+lfTN/hnE3ChJY9SPA0U3EPvP1S2ZXXx5Bemnzxfpu/OuGcLtfxp+/ebisp+QH8VkrNjhHJ9QaV23xRKyciKIGuCGjYPmv6cq0idKWuRNEYDlV7VoixAgwcdEXeZVsysqyH5BughA88t6uy3bXQNO3XRbCEq9pKr8sw5gPuXT8zGv7/JNCOeh9mAYMoxQRcyEMJ5KRlEmokkI63lVrSgqi8JEWlsV8ZURkRFMR1pILkVuZcJYCEd69V7vY3eZxYj4GvEkGsaMK5SAMTcauYsKje6aObskUsGWaKr7bPOYHUd7/8XIocZlx9H2DfuSh+Qw2AG4GZLDYMlqmLfHEQIS/XyBaOf++5uoqG213jfrcjfVfAYdi/tY0288noxBrpqpvwoh1AjjslrbqUo6j/kpWdnkG7iZpYvrm7MQmyOe045vBhkhDbFFI6gTz6Jvj9zqCd+frz/5MRMvOvyeBUxGRM3bvIHvRZXvmryGu7Jq901ZhTDJqEweC+xlvkTqX6+ILeYKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1RhYnMvUy9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L1R5cGUvR3JvdXAvQ1MvRGV2aWNlUkdCPj4vQ29udGVudHMgMyAwIFIvVHlwZS9QYWdlL1Jlc291cmNlczw8L0NvbG9yU3BhY2U8PC9DUy9EZXZpY2VSR0I+Pi9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXS9Gb250PDwvRjEgMiAwIFI+Pj4+L1BhcmVudCA0IDAgUi9Sb3RhdGUgOTAvTWVkaWFCb3hbMCAwIDU5NSA4NDJdPj4KZW5kb2JqCjUgMCBvYmoKWzEgMCBSL1hZWiAwIDYwNSAwXQplbmRvYmoKMiAwIG9iago8PC9TdWJ0eXBlL1R5cGUxL1R5cGUvRm9udC9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nPj4KZW5kb2JqCjQgMCBvYmoKPDwvS2lkc1sxIDAgUl0vVHlwZS9QYWdlcy9Db3VudCAxL0lUWFQoMi4xLjcpPj4KZW5kb2JqCjYgMCBvYmoKPDwvTmFtZXNbKEpSX1BBR0VfQU5DSE9SXzBfMSkgNSAwIFJdPj4KZW5kb2JqCjcgMCBvYmoKPDwvRGVzdHMgNiAwIFI+PgplbmRvYmoKOCAwIG9iago8PC9OYW1lcyA3IDAgUi9UeXBlL0NhdGFsb2cvUGFnZXMgNCAwIFIvVmlld2VyUHJlZmVyZW5jZXM8PC9QcmludFNjYWxpbmcvQXBwRGVmYXVsdD4+Pj4KZW5kb2JqCjkgMCBvYmoKPDwvTW9kRGF0ZShEOjIwMjAwNzI5MTE1MzE1WikvQ3JlYXRvcihKYXNwZXJSZXBvcnRzIExpYnJhcnkgdmVyc2lvbiBudWxsKS9DcmVhdGlvbkRhdGUoRDoyMDIwMDcyOTExNTMxNVopL1Byb2R1Y2VyKGlUZXh0IDIuMS43IGJ5IDFUM1hUKT4+CmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNTc4IDAwMDAwIG4gCjAwMDAwMDA4NjQgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwOTUyIDAwMDAwIG4gCjAwMDAwMDA4MjkgMDAwMDAgbiAKMDAwMDAwMTAxNSAwMDAwMCBuIAowMDAwMDAxMDY5IDAwMDAwIG4gCjAwMDAwMDExMDEgMDAwMDAgbiAKMDAwMDAwMTIwNCAwMDAwMCBuIAp0cmFpbGVyCjw8L0luZm8gOSAwIFIvSUQgWzwzZWMyMWUyNjkwNjcxYzViYTliNjUxODNhY2IxOTM3ND48NzZhNzM1MWE1YmY4ZmMxNDNmY2NlZmUwYjRjMzA4MWI+XS9Sb290IDggMCBSL1NpemUgMTA+PgpzdGFydHhyZWYKMTM1OAolJUVPRgo=",
  "invoice_items": [
    {
      "item": "McDonald's Big Mac",
      "description": "Oyon Meals",
      "quantity": 3,
      "date_of_purchase": "2021-03-12",
      "price_per_item": 50000
    }
  ]
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}'
}
conn.request("POST", "/api/payment-checkout/create-invoice", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```



### HTTPS Request

**[Production]** POST `https://partner.oyindonesia.com/api/payment-checkout/create-invoice`<br/>
**[Staging]** POST `https://api-stg.oyindonesia.com/api/payment-checkout/create-invoice`

> Json Response

```json
{
        "status": true,
        "url": "https://pay.oyindonesia.com/invoice/id",
        "message": "success",
        "email_status": "PROCESSED",
        "payment_link_id": "id"
}
```

### Request Headers

Parameters | Type | Description
---- | ---- | ----
X-Api-Key | String | API Key for establishing connection to this particular endpoint
X-Oy-Username | String | The registered partner's username with enabled access for payment link product

### Request Parameters

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
partner_tx_id | String | A unique transaction ID provided by partner. | A partner_tx_id that has been succesfully paid cannot be used anymore under the same username and only accepts alphanumerics. If empty then OY will generate automatically.
description | String | Description of the payment link. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
notes | String | Notes. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
sender_name | String | Name of the payer for a transaction. | Only accepts alphabets (A-Z) and space as input and cannot be empty.
amount | Integer | The amount of a transaction to be paid. | The amount of a transaction to be paid, min. amount is 10000, except if you use unique code BCA which has min. amount 11000 or CARDS which has min. amount 15000
email | String | The email address where the payment link will be sent to. | Up to 3 emails separated by ";"
phone_number | Numeric | Phone number of the payer for a transaction. | Do not use special character (e.g. "+").
is_open	| Boolean | Enable open/closed amount transaction method. | If is_open = TRUE and the amount parameter is defined, then a payer can pay any amount (greater than IDR 10,000) up to the defined amount. And in the case that is_open=false, then the amount and partner_tx_id parameters must be defined.
include_admin_fee | Boolean | Admin fee will be added to the specified amount or amount inputted by user if this parameter is set as TRUE. | -
list_disabled_payment_methods | String | To configure payment methods to be disabled (e.g. VA, CREDIT_CARD, QRIS, EWALLET, BANK_TRANSFER). When BANK_TRANSFER is included, you are disabling both VA and Unique Code. When CREDIT_CARD is included, you are disabling the ‘cards’ payment method as a whole - which means disabling both credit card and debit card. | There must be at least 1 payment method is enabled.
list_enabled_banks | String | To configure banks to be enabled for VA payment method. | List of eligible bank codes: "002" (BRI), "008" (Mandiri), "009" (BNI), "013" (Permata), "022" (CIMB), "213" (SMBC), "451" (BSI), and "014" (BCA).
expiration | datetime | To set the expiration of the payment link (yyyy-MM-dd HH:mm:ss) | -
due_date | datetime | To set the transaction due date of the payment (yyyy-MM-dd HH:mm:ss) | Transaction due date should equal or before expiration. As default, transaction due date will be same as expiration if it is not defined.
partner_user_id | String | Username assigned to the customer by partner. | - 
full_name | String | The customer's full name. | -
is_va_lifetime | Boolean | To enable VA static confirugation for a payment . | If this is set as true and the partner_user_id is already associated to specific VAs, then the same VA numbers will be used for this partner_tx_id instead of generating new VA number. Partner_user_id and VA payment method must be specified to use this parameter.
invoice_items | List | List of items to be invoiced that can be generated via API in the following format: [item, description, quantity, date_of_purchase, price_per_item ]  | -
attachment | - | Upload attachment (string base 64 pdf) and can be downloaded via the webview | There is a maximum limit of 1 PDF attachment (maximum 2 MB) to be uploaded per URL

### Response Parameters
Parameter | Type | Nullable | Description
---- | ---- | ----- | ----
status | Boolean | FALSE | true / false
url | String | TRUE | Payment link which used for payment. Only filled if payment checkout successfully created.
message | String | FALSE | Message response
payment_link_id | String | TRUE | A unique payment link transaction ID. Only filled if payment checkout successfully created.
email_status | String | TRUE | email status. Only filled if payment checkout successfully created.


## API Create (Recurring Invoice) (Coming soon)

This endpoint is to enable the capability to send recurring invoice with the same invoice configuration (e.g. payment method, amount, attachment) via email.

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/TBD\
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \
  -H 'x-api-key: apikeymu' \
  -H 'x-oy-username: yourusername' \
  -d '{
        "username":"testaccount",
        "partner_tx_id":"ABC123456527",
        "sender_name":"Roberto F",
        "sender_note":"bill payment",
        "sender_phone": "082114845847", 
        "amount":75000,
        "is_open":false,
        "list_disabled_payment_methods":"CREDIT_CARD",
        "list_enabled_payment_banks": "008", 
        "included_admin_fee": true, 
        "expiration": 7,
        "description":"payment for March 2020", 
        "partner_user_id": "merchant A", 
        "is_va_lifetime" : true , 
        "email" : "johndoe@gmail.com;jane@gmail.com",
        "recurring_start_date" : "10/11/2020", 
        "recurring_end_date": "10/11/2021", 
        "recurring_frequency": 30
    }'
```

### HTTPS Request

**[Production]** POST `https://partner.oyindonesia.com/api/TBD`<br/>
**[Staging]** POST `https://api-stg.oyindonesia.com/api/TBD`

> Json Response

```json
{
        "status": true,
        "url": "https://pay.oyindonesia.com/v2?98999987uydfuiwk73636hehnrm",
        "email_status" : "delivered"
}
```

### Request Parameters

*Note: all parameters from API Create (Payment Link and Invoicing) are still applicable. Below is the list of the additional specific parameters for Recurring Invoice feature.

Parameters | Type | Description
---- | ---- | ------
recurring_start_date | String | Defining the date when the first invoice will be sent.
recurring_end_date | String | Username assigned to the customer by partner. 
recurring_frequency | Integer | The interval of a recurring invoice to be sent to customers (in days).

## Payment Link Callback Parameters

The data on the callback will be sent using JSON format via POST data to your web hook.

### Callback for Delayed Settlement (Non-Real Time Settlement)

If your settlement is non-real time, for every transaction whose payment method is settled H+>0 from the time of transaction, you will receive two callbacks with details as follows:

1.  1st Callback -> To be sent after your customer successfully executes the transaction. For example, if your customer executes the transaction on 11 May 2021 at 14:00:00, that is also when we send the 1st Callback to you. In the 1st callback, the settlement status is set to WAITING (because it is not yet settled to your Account Statement balance)
2.  2nd Callback -> To be sent after the settlement status is changed from WAITING into SUCCESS. For example, if the settlement status is changed into SUCCESS on 12 May 2021 at 15:00:00, that is also when we send the 2nd Callback to you. In the 2nd callback, the settlement status is SUCCESS


```shell
curl -X POST \
  https://partner.url.com/api/callback\
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
        "partner_tx_id":"938bca2f-7771-47a1-9315-13507cf7bba3",
        "amount":60000,
        "sender_phone":"082114845847",
        "sender_note":"sender notes",
        "created":"2020-09-29T20:57:41",
        "tx_ref_number":"20097G1X2329",
        "sender_name":"Sender Name",
        "is_invoice":false,
        "updated":"2020-09-29T20:59:08",
        "payment_method":"VA",
        "status":"complete",
        "sender_bank":"008",
        "settlement_type":"non_realtime",
        "description":"description",
        "payment_reference_number": "",
        "expiration":"2020-10-18T15:00:00",
        "due_date": "2020-10-18T14:00:00",
        "email":"johndoe@gmail.com;jane@gmail.com",
        "paid_amount": 70000,
        "settlement_time": "2020-09-30T15:00:00",
        "settlement_status": "WAITING"
      }'

```

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -----------
partner_tx_id | String | FALSE | A unique transaction ID provided by partner.
child_balance | String | TRUE | Applicable for MAM transaction. To be filled with the username of child account. If you do not pass the parameter in request, we will not pass this parameter in Callback.
tx_ref_number | String | FALSE | OY's internal unique transaction ID.
amount | BigDecimal | FALSE | The amount of a transaction that is paid.
sender_name | String | FALSE | Name of a payer for a transaction.
sender_phone | String | TRUE | Phone number of a payer for a transaction. This parameter will only be sent if end user fill the data.
sender_note | String | TRUE | Additional notes from a payer for a transaction. This parameter will only be sent if end user fill the data.
status | String | FALSE | The status of a transaction (e.g. success/failed/processing).
sender_bank | String | FALSE | The bank code used by a payer to do payment.
payment_method | String | FALSE | The payment method used by user to complete a payment.
settlement_type | String | FALSE | Indicate if a transaction will be settled in realtime/non-realtime.
created | DateTime | FALSE | The timestamp which indicates the creation time of a payment link.
updated | DateTime | FALSE | The timestamp which indicates the latest updated time of a payment link due to status update.
payment_received_time | DateTime | TRUE | Indicates the time when payment routing is marked as COMPLETE (this parameter will only be sent once status of the payment link is set to ‘COMPLETE’).
is_invoice | Boolean | FALSE | The invoice which indicates the transaction is invoice or not.
description | String | FALSE | The description of the payment link/invoice link.
payment_reference_number| String | TRUE | Identifier of a payment attempt when the end user successfully completes the payment. The reference number is also stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code. Available for: QRIS.
expiration | DateTime | FALSE | The expiration time of the payment link/invoice link.
due_date | DateTime | FALSE | The transaction due date of the payment link/invoice.
email | String | FALSE | The email addresses for the payment link/invoice link to be sent. You can add up to 3 emails separated by ";".
paid_amount | BigDecimal | FALSE | The total amount that a user has paid.
settlement_time | DateTime | TRUE | The timestamp (in UTC+7) indicating when the fund will be settled to partner’s account statement. This parameter will only be sent once status of the payment link is set to 'COMPLETE'.
settlement_status | String | TRUE | Status of the settlement (e.g. success/waiting). This parameter will only be sent once status of the payment link is set to 'COMPLETE'.

Additional data on the callback if invoice = true

Parameter | Type | Nullable | Description
--------- | ---- | ----- | -----------
invoice_ID | String | FALSE | The invoice id.
full_name | String | FALSE | The full name.

## Payment Link Status

Payment Status | Type | Description
---- | ---- | ----
created | String | Status that will be returned when the payment link is first created and user has not selected a payment method
waiting_payment | String | Status that indicates that the user has selected a payment method
expired | String | The payment link has expired
charge_in_progress | String | Payment currently in processed
failed | String | OTP for card payment method has been succesfully entered but payment is rejected or the selected payment channel has expired (but the link is still not yet expired)
complete | String | Transaction has been succesfully completed
closed | String | Payment link has been deleted

## API Payment Status

An endpoint to retrieve and/or re-send the latest callback status of a transaction. We can also provide a static IP for the callback to ensure the callback sent is from OY that can be whitelisted by partners.

Please contact us to submit a request of an API Key and IP whitelisting.

### HTTPS Request

**[Production]** GET `https://partner.oyindonesia.com/api/payment-checkout/status`<br/>
**[Staging]** GET `https://api-stg.oyindonesia.com/api/payment-checkout/status`

> To retrieve a callback result for a particular transaction, use following code from your platform:

```shell
curl -X GET \
  'https://partner.oyindonesia.com/api/payment-checkout/status?partner_tx_id=OY123456&send_callback=false' \
  -H 'x-oy-username:yourusername' \
  -H 'x-api-key:yourapikey'
```

```dart
var headers = {
  'Content-Type': 'application/json'
};
var request = http.Request('GET', Uri.parse('https://partner.oyindonesia.com/api/payment-checkout/status?partner_tx_id=abc6&send_callback=false'));

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

  url := "https://partner.oyindonesia.com/api/payment-checkout/status?partner_tx_id=abc6&send_callback=false"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")

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
  .url("https://partner.oyindonesia.com/api/payment-checkout/status?partner_tx_id=abc6&send_callback=false")
  .method("GET", null)
  .addHeader("Content-Type", "application/json")
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

xhr.open("GET", "https://partner.oyindonesia.com/api/payment-checkout/status?partner_tx_id=abc6&send_callback=false");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/payment-checkout/status?partner_tx_id=abc6&send_callback=false');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json'
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

conn = http.client.HTTPSConnection("partner.oyindonesia.com")
payload = ''
headers = {
  'Content-Type': 'application/json'
}
conn.request("GET", "/api/payment-checkout/status?partner_tx_id=abc6&send_callback=false", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "partner_tx_id": "partner000001",
  "tx_ref_number": "1234567",
  "child_balance": "child123",
  "amount": 15000,
  "sender_name": "Budi",
  "sender_phone": "+6281111111",
  "sender_note": "Mohon dikirim segera",
  "status": "success",
  "settlement_type": "realtime",
  "sender_bank": "008",
  "payment_method": "CC",
  "created": "2021-01-12T16:25:33",
  "description": "",
  "payment_reference_number": "",
  "paid_amount": 100000,
  "expiration": "2021-01-13T16:25:14",
  "due_date": "2021-01-13T15:00:00",
  "is_invoice": false,
  "updated": "2021-01-12T16:26:17",
  "email": "johndoe@gmail.com;jane@gmail.com",
  "settlement_time": "2021-01-13T15:00:00",
  "settlement_status": "WAITING"
}
```

### Request Headers

Parameters | Type | Description
---- | ---- | ----
x-api-key | String | API Key for establishing connection to this particular endpoint
X-Oy-Username | String | The registered partner's username with enabled access for payment link product

### Request Parameters

Parameters | Type | Description
---- | ---- | ----
partner_tx_id | String | A unique transaction ID which callback status to be checked
payment_reference_number | String | A unique reference ID only for QRIS transactions. Used to identify which callback status to be checked. The reference number is stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code
send_callback | Boolean | A flag to indiciate if the latest callback of a transaction need to be re-sent or not

<aside class="warning">
Note: All requests made must contain "partner_trx_id" or "payment_reference_number" parameter, but not both at the same time, otherwise will return error.
</aside>

### Response Parameters
Parameter | Type | Nullable | Description
---- | ---- | ----- | ----
partner_tx_id | String | FALSE | A unique transaction ID provided by partner.
child_balance | String | FALSE | Applicable for MAM transaction. To be filled with the username of child account. If you do not pass the parameter in request Create Payment Link, we will not pass this parameter in the response.
tx_ref_number | String | FALSE | OY's internal unique transaction ID.
amount | BigDecimal | FALSE | The amount of a transaction that is paid.
sender_name | String | FALSE | Name of a payer for a transaction.
sender_phone | String | FALSE | Phone number of a payer for a transaction.
sender_note | String | FALSE | Additional notes from a payer for a transaction.
status | String | FALSE | The status of a payment link.
payment_received_time | String | TRUE | Indicates the time when payment routing is marked as COMPLETE (this parameter will only be sent once status of the payment link is set to ‘COMPLETE’).
settlement_type | String | FALSE | Indicate if a transaction will be settled in realtime/non-realtime.
sender_bank | String | FALSE | The bank code used by a payer to do payment.
payment_method | String | FALSE | The payment method used in a transaction. Choices are: CC (Cards), QRIS, EWALLET (shopeepay_ewallet, dana_ewallet, linkaja_ewallet, ovo_ewallet), VA (Virtual Account), or BANK_TRANSFER (Unique Code).
created | String | FALSE | The timestamp which indicates the creation time of a payment link.
description | String | FALSE | Description of the payment link.
payment_reference_number | String | FALSE | Identifier of a payment attempt when the end user successfully completes the payment. The reference number is also stated in the end user’s receipt/proof of transaction. Note that if a QRIS transaction is paid using OVO, the payment reference number is only the first 12 characters from the given transaction code. Available for: QRIS.
paid_amount | BigDecimal | FALSE | the total amount that a user has paid.
expiration | String | FALSE | To set the expiration of the payment link (yyyy-MM-dd HH:mm:ss).
due_date | String | FALSE | To set the transaction due date of the payment (yyyy-MM-dd HH:mm:ss).
is_invoice | Boolean | FALSE | The invoice which indicates the transaction is invoice or not.
updated | String | FALSE | The timestamp which indicates the latest updated time of a payment link due to status update.
email | String | FALSE | The email addresses where the payment link will be sent to. You can add up to 3 emails separated by ";".
settlement_time | String | FALSE | The timestamp (in UTC+7) indicating when the fund will be settled to partner’s account statement (this parameter will only be sent once status of the payment link is set to ‘COMPLETE’).
settlement_status | String | FALSE | The status of the settlement (this parameter will only be sent once status of the payment link is set to ‘COMPLETE’).

## API Delete

An endpoint to ***Delete*** Payment / Invoice Link based on ***payment_link_id*** or ***partner_tx_id*** that is still active and a payment method has not been selected.

```shell
curl -X DELETE \
  https://partner.oyindonesia.com/api/payment-checkout/{payment_link_id_or_partner_tx_id}\
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'X-Api-key: apikeymu' \
  -H 'X-Oy-Username: yourusername' 
```

```dart
var headers = {
  'Content-Type': 'application/json'
};
var request = http.Request('DELETE', Uri.parse('https://partner.oyindonesia.com/api/payment-checkout/4fce3338-e2b7-400d-98d1-f117c0e0fcb4'));

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

  url := "https://partner.oyindonesia.com/api/payment-checkout/4fce3338-e2b7-400d-98d1-f117c0e0fcb4"
  method := "DELETE"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")

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
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/payment-checkout/4fce3338-e2b7-400d-98d1-f117c0e0fcb4")
  .method("DELETE", body)
  .addHeader("Content-Type", "application/json")
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

xhr.open("DELETE", "https://partner.oyindonesia.com/api/payment-checkout/4fce3338-e2b7-400d-98d1-f117c0e0fcb4");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/payment-checkout/4fce3338-e2b7-400d-98d1-f117c0e0fcb4');
$request->setMethod(HTTP_Request2::METHOD_DELETE);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json'
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

conn = http.client.HTTPSConnection("partner.oyindonesia.com")
payload = ''
headers = {
  'Content-Type': 'application/json'
}
conn.request("DELETE", "/api/payment-checkout/4fce3338-e2b7-400d-98d1-f117c0e0fcb4", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

### HTTPS Request

**[Production]** DELETE `https://partner.oyindonesia.com/api/payment-checkout/{payment_link_id_or_partner_tx_id}`<br/>
**[Staging]** DELETE `https://api-stg.oyindonesia.com/api/payment-checkout/{payment_link_id_or_partner_tx_id}`

> The above command returns JSON structured similar like this:

```json
{
  "status" : true,
  "message" : "success delete payment checkout data"
}
```

### Request Parameters

Parameters | Type | Description
---- | ---- | ------
payment_link_id_or_partner_tx_id | String | payment_link_id or partner_tx_id in url param

### Response Parameters

Parameters | Type | Nullable | Description
---- | ---- | -----| ------
status | Boolean | FALSE | TRUE if delete is successful and FALSE otherwise.
message | String | FALSE | Return message.
child_balance | String | TRUE | Applicable for MAM transaction. To be filled with the username of child account. If you do not pass the parameter in request, we will not pass this parameter in Callback.


### Return Message

Reason | Message
---- | ----
**Successful Deletion** | Payment link has been deleted
**Data Not Found** | The payment_link_id or partner_trx_id cannot be found in our system
**Invalid Payment Link Id** | The payment_link_id or partner_trx_id is null or invalid
**Username Not Found** | Username is not found
**Invalid IP Address** | Invalid IP Address
**Invalid API Key** | Invalid API Key
**Restricted Access** | User does not have access to delete the payment link
**Invalid Payment Status** | Cannot delete payment link status other than CREATED/INITIATIED 

## API Get

An endpoint to get a payment/invoice data.

```shell
curl -X GET \
  https://partner.oyindonesia.com/api/payment-checkout/{payment_link_id_or_partner_tx_id}\
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'X-Api-key: apikeymu' \
  -H 'X-Oy-Username: yourusername'
```

```dart
var headers = {
  'Content-Type': 'application/json'
};
var request = http.Request('GET', Uri.parse('https://partner.oyindonesia.com/api/payment-checkout/aa2d30f7-6e45-464b-bd4f-7e042f7e114b'));

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

  url := "https://partner.oyindonesia.com/api/payment-checkout/aa2d30f7-6e45-464b-bd4f-7e042f7e114b"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")

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
  .url("https://partner.oyindonesia.com/api/payment-checkout/aa2d30f7-6e45-464b-bd4f-7e042f7e114b")
  .method("GET", null)
  .addHeader("Content-Type", "application/json")
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

xhr.open("GET", "https://partner.oyindonesia.com/api/payment-checkout/aa2d30f7-6e45-464b-bd4f-7e042f7e114b");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/payment-checkout/aa2d30f7-6e45-464b-bd4f-7e042f7e114b');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json'
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

conn = http.client.HTTPSConnection("partner.oyindonesia.com")
payload = ''
headers = {
  'Content-Type': 'application/json'
}
conn.request("GET", "/api/payment-checkout/aa2d30f7-6e45-464b-bd4f-7e042f7e114b", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

### HTTPS Request

**[Production]** GET `https://partner.oyindonesia.com/api/payment-checkout/{payment_link_id_or_partner_tx_id}`<br/>
**[Staging]** GET `https://api-stg.oyindonesia.com/api/payment-checkout/{payment_link_id_or_partner_tx_id}`

> The above command returns JSON structured similar like this:

```json
{
    "data": {
        "partnerTxId": "abc10",
        "child_balance":"child123",
        "paymentLinkId": "703e05c0-48e3-47bd-9c22-670941d4d5fe",
        "amount": 15000,
        "username": "justkhals",
        "senderName": "John Doe",
        "senderPhoneNumber": null,
        "senderNotes": null,
        "status": "CREATED",
        "txRefNumber": null,
        "description": "testdesc",
        "isOpen": true,
        "notes": "testnote",
        "phoneNumber": "085248395555",
        "email": "maskalgrr@gmail.com",
        "includeAdminFee": false,
        "listDisabledPaymentMethods": "",
        "listEnabledBanks": "008",
        "expirationTime": "2020-08-12 00:00:00",
        "due_date": "2020-08-11 12:00:00",
        "invoiceData": {
            "fullName": "John Dooe",
            "isVaLifetime": false,
            "isScheduled": false,
            "recurringStartDate": null,
            "recurringEndDate": null,
            "recurringFrequency": null,
            "invoiceItems": "[{\"item\": \"Semen Gresik\", \"quantity\": 2000, \"description\": \"Grade B\", \"price_per_item\": 2250000, \"date_of_purchase\": 1590969600000}]"
        }
    },
    "message": "return payment checkout data",
    "status": true
}
```

### Request Parameters

Parameters | Type | Description
---- | ---- | ------
payment_link_id_or_partner_tx_id | String | payment_link_id or partner_tx_id in url param


### Payment Response Parameters

Parameters | Type | Nullable | Description | Example Value
---- | ---- | ----- | ------ | -------
partnerTxId | String | FALSE | Payment Partner Tx Id | abc123
child_balance | String | TRUE | Applicable for MAM transaction. To be filled with the username of child account. If you do not pass the parameter in request, we will not pass this parameter in Callback | child123
paymentLinkId | String | FALSE | Payment Link Id | 35281815-4784-4f55-9a61-090f5c17a191
amount | Integer | FALSE | Payment Amount | 30000
username | String | FALSE | Partner Username | johndoe
senderName | String | FALSE | Payment Sender Name | Budi
senderPhoneNumber | String | TRUE | Payment Sender Phone Number. This parameter will only be sent if end user fill the data | 081234567890
senderNotes | String | TRUE | Payment Notes / Subject. This parameter will only be sent if end user fill the data | Cicilan Mobil - 5
status | String | FALSE | Payment Status | COMPLETE
txRefNumber | String | FALSE | Payment Transaction Reference Number | GTY67JJU
description | String | FALSE | Payment Description | Tagihan Cicilan Mobil
isOpen | Boolean | FALSE | Payment Editable Amount Capability | true
notes | String | FALSE | Payment Notes / Subject | Cicilan Mobil - 5
email | String | FALSE | Payment Sender Email(s).You can add up to 3 emails separated by ";" | johndoe@gmail.com;jane@gmail.com
senderPhoneNumber | String | FALSE | Payment Sender Phone Number | 081234567890
includeAdminFee | Boolean | FALSE | Admin fee bills destination between partner or user | true
listDisabledPaymentMethods | String | FALSE | List Of Disable Payment Method.
listEnabledBanks | String | FALSE | Payment Method List Enable Bank for VA or Unique Code Payment Method | 002,008
expirationTime | String | FALSE | Payment Expiration Date and Time | "2020-08-12 00:00:00"
due_date | String | FALSE | Transaction Due Date | "2020-08-11 12:00:00"
invoiceData | Invoice | TRUE | Data For Invoice Payment will be null | CREDIT_CARD)** | null

### Invoice Response Parameters

Parameters | Type | Description | Example Value
---- | ---- | ------ | -------
fullName | String | Invoice Payer Name | John Doe
isVaLifetime | String | Invoice static VA status | true
isScheduled | Boolean | Invoice Scheduled status | true
invoiceItems | String JSON | Invoice Item List JSON | "[{\"item\": \"Semen Gresik\", \"quantity\": 2000, \"description\": \"Grade B\", \"price_per_item\": 2250000, \"date_of_purchase\": 1590969600000}]"

### Failed Response Parameters

Parameters | Type | Description
---- | ---- | ------
status | Boolean | Return FALSE if data is not found
message | String | Return message


### Failed Return Message

Reason | Message
---- | ----
**Data Not Found** | The payment_link_id or partner_trx_id cannot be found in our system
**Invalid Payment Link Id** | The payment_link_id or partner_trx_id is null or invalid
**Username Not Found** | Username is not found
**Invalid IP Address** | Invalid IP Address
**Invalid API Key** | Invalid API Key
**Restricted Access** | User does not have access to the payment link

## Pop!: Seamless Payment Experience

With Pop!, displaying our payment link page on your front-end web environment is now made easier than ever. Our payment link offers a seamless user experience in a way that can be catered to your UI needs.

This section covers a demonstration and a snippet code on how to display a payment link page in 4 styles/locations: Center, Right, Left, and Slide Right.

### Pop! - Center

```jsx
import React from 'react';
import classNames from 'classnames';
import styles from './paycheckout_popup.module.css';

function PaycheckoutPopUp({
  position = "center",
  show,
  onClose,
  paymentLinkId,
}) {

  return (
    <div>
      {/* The Modal container*/}
      
        {/* Modal content */}
        
          <iframe 
            width="400"
            height="800"
            src={`https://pay-dev.oyindonesia.com/${paymentLinkId}`}
            title="OY! Indonesia Payment Link">
          </iframe>

          {/* Trigger/Close The Modal */}
    </div>
  );
}
```

<p class="lottie" id="payment-link-demo-middle"></p>


### Pop! - Left

```jsx
import React from 'react';
import classNames from 'classnames';
import styles from './paycheckout_popup.module.css';

function PaycheckoutPopUp({
  position = "left",
  show,
  onClose,
  paymentLinkId,
}) {

  return (
    <div>
      {/* The Modal container*/}
      
        {/* Modal content */}
        
          <iframe 
            width="400"
            height="800"
            src={`https://pay-dev.oyindonesia.com/${paymentLinkId}`}
            title="OY! Indonesia Payment Link">
          </iframe>

          {/* Trigger/Close The Modal */}
    </div>
  );
}
```

<p class="lottie" id="payment-link-demo-left"></p>


### Pop! - Right

```jsx
import React from 'react';
import classNames from 'classnames';
import styles from './paycheckout_popup.module.css';

function PaycheckoutPopUp({
  position = "right",
  show,
  onClose,
  paymentLinkId,
}) {

  return (
    <div>
      {/* The Modal container*/}
      
        {/* Modal content */}
        
          <iframe 
            width="400"
            height="800"
            src={`https://pay-dev.oyindonesia.com/${paymentLinkId}`}
            title="OY! Indonesia Payment Link">
          </iframe>

          {/* Trigger/Close The Modal */}
    </div>
  );
}
```

<p class="lottie" id="payment-link-demo-right"></p>


### Pop! - Slide Right

```jsx
import React from 'react';
import styles from './paycheckout_slide.module.css';

function PaycheckoutSlide({
    show, 
    onClose,
    paymentLinkId,
  }) {

  return (
    <div>
      {/* The Modal container*/}
        {/* Modal content */}
          <iframe 
            width="400"
            src={`https://pay-dev.oyindonesia.com/${paymentLinkId}`}
            title="OY! Indonesia Payment Link">
          </iframe>
    </div>
  );
}
```

<p class="lottie" id="payment-link-demo-right-stick"></p>

## Fund Acceptance Response Codes

Below is the list of HTTP Status Code for API Fund Acceptance:

HTTP Status Code | Description
---------- | -------
200 | Response success without error
403 | Forbidden (IP address is not whitelisted or request is deemed suspicious e.g SQL injection or XSS)
404 | Not Found (wrong URL)
429 | Request Rejected (Too Many Request to specific endpoint)
500 | Internal Server Error (OY! system encountered unknown error)
503 | Service Unavailable (OY! system is unable to process the request temporarily)
504 | Gateway Timeout (OY! system took too long processing the request and was unable to respond in time)
