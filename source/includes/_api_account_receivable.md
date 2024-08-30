# API Account Receivable

API Account Receivable is the newest feature that allows Partners to manage customers and account receivable invoices via API. The differences between API Account Receivable API and API Invoicing is in the **customer management ability**. By utilizing API Account Receivable, Partners do not need to maintain manual data of the customers anymore when inputting invoice.

## Create New Customer
This endpoint enables the creation of new customers via API. Addition of new customer can also be done via dashboard at your convenience.

```shell
curl --location --request POST 'https://partner.oyindonesia.com/api/account-receivable/customers' \
--header 'x-oy-username: username' \
--header 'x-api-key: api-key' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Acumen Metros",
    "partner_customer_id": "customer_id",
    "tax_type": "PPN_10_INCLUSIVE",
    "address": "address",
    "email": "email@address.com",
    "pic_name": "Pic name",
    "phone_number": "08123456789",
    "pph_tax":"PPH_23_NON_NPWP"
}'
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
};
var request = http.Request('POST', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/customers'));
request.body = json.encode({
  "name": "Acumen Metros",
  "partner_customer_id": "customer_id",
  "tax_type": "PPN_10_INCLUSIVE",
  "address": "address",
  "email": "email@address.com",
  "pic_name": "Pic Name",
  "phone_number": "0812345678",
  "pph_tax": "PPH_23_NON_NPWP"
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

  url := "https://partner.oyindonesia.com/api/account-receivable/customers"
  method := "POST"

  payload := strings.NewReader(`{
    "name": "Acumen Metros",
    "partner_customer_id": "customer_id",
    "tax_type": "PPN_10_INCLUSIVE",
    "address": "address",
    "email": "email@address.com",
    "pic_name": "Pic Name",
    "phone_number": "0812345678",
    "pph_tax":"PPH_23_NON_NPWP"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")
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
  RequestBody body = RequestBody.create(mediaType, "{\n    \"name\": \"Acumen Metros\",\n    \"partner_customer_id\": \"customer_id\",\n    \"tax_type\": \"PPN_10_INCLUSIVE\",\n    \"address\": \"address\",\n    \"email\": \"email@address.com\",\n    \"pic_name\": \"Pic Name\",\n    \"phone_number\": \"0812345678\",\n    \"pph_tax\":\"PPH_23_NON_NPWP\"\n}");
  Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/customers")
  .method("POST", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .addHeader("Content-Type", "application/json")
  .build();
  Response response = client.newCall(request).execute();
```

```javascript
// WARNING: For POST requests, body is set to null by browsers.
var data = JSON.stringify({
  "name": "Acumen Metros",
  "partner_customer_id": "customer_id",
  "tax_type": "PPN_10_INCLUSIVE",
  "address": "address",
  "email": "email@address.com",
  "pic_name": "Pic Name",
  "phone_number": "0812345678",
  "pph_tax": "PPH_23_NON_NPWP"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://partner.oyindonesia.com/api/account-receivable/customers");
xhr.setRequestHeader("x-oy-username", "username");
xhr.setRequestHeader("x-api-key", "api_key");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/customers');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key',
  'Content-Type' => 'application/json'
));
$request->setBody('{\n    "name": "Acumen Metros",\n    "partner_customer_id": "customer_id",\n    "tax_type": "PPN_10_INCLUSIVE",\n    "address": "address",\n    "email": "email@address.com",\n    "pic_name": "Pic Name",\n    "phone_number": "0812345678",\n    "pph_tax":"PPH_23_NON_NPWP"\n}');
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
payload = json.dumps({
  "name": "Acumen Metros",
  "partner_customer_id": "customer_id",
  "tax_type": "PPN_10_INCLUSIVE",
  "address": "address",
  "email": "email@address.com",
  "pic_name": "Pic Name",
  "phone_number": "0812345678",
  "pph_tax": "PPH_23_NON_NPWP"
})
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
}
conn.request("POST", "/api/account-receivable/customers", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "data": {
    "id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
    "name": "Acumen Metros",
    "partner_customer_id": "customer_id",
    "tax_type": "PPN_10_INCLUSIVE",
    "address": "address",
    "email": "email@address.com",
    "pic_name": "Pic Name",
    "phone_number": "0812345678",
    "pph_tax": "PPH_23_NON_NPWP",
    "status": "ACTIVE"
  },
  "error": null,
  "status": true,
  "reason": null,
  "status_code": 200
}
```

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/account-receivable/customers` <br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-receivable/customers`

### Request Headers

Parameters | Type | Description
---- | ---- | ----
X-Api-Key | String | API Key for establishing connection to this particular endpoint
X-Oy-Username | String | The registered partner username which access is enabled for payment link product


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
name | String | TRUE | Name of a payer / customer for a transaction
partner_customer_id | String | FALSE | A unique customer ID
tax_type | NO_TAX / PPN_11_INCLUSIVE / PPN_11_EXCLUSIVE / PPN_10_INCLUSIVE / PPN_10_EXCLUSIVE | TRUE | PPN Tax type that is applicable for the customer will be reflected in the invoice
address | String | FALSE | Customer's address
email | String | FALSE | The email address where the payment link will be sent to. Max up to 6 email separated by **;**
pic_name | String | FALSE | Name of the person in charge for handling the invoice
phone_number | String | FALSE | Phone number of the customer for a transaction. Do not use special character (e.g. +).
pph_tax | NO_TAX/ *PPH_23_NON_NPWP* / *PPH_23_NPWP* | TRUE | PPH Tax type that is applicable for the customer will be reflected in the invoice


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | To determine result of endpoint
error | Object | Specific code for cause of error and error message
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, name: <name>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | customer primary id
partner_customer_id | String | Inputted customer id name
status | ACTIVE | Customer's status, first creation always active.
name | String | Name of a customer for a transaction
tax_type | NO_TAX / PPN_11_INCLUSIVE / PPN_11_EXCLUSIVE / PPN_10_INCLUSIVE / PPN_10_EXCLUSIVE | Result of choosen enum tax type 
address | String | Inputted customer's address
email | String | Inputted customer's email
pic_name | String | Inputted PIC name
phone_number| String | Inputted customer's phone number
pph_tax | NO_TAX/ *PPH_23_NON_NPWP* / *PPH_23_NPWP* | Result of choosen enum
reason| String | Reserved field to add additional notes for the response
status_code | Integer | Response Status code  



## Edit Customer

This endpoint allows update of customer’s data, such as tax information or even deactivation of customer.

```shell
curl --location --request PUT 'https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15' \
--header 'x-oy-username: username' \
--header 'x-api-key: api_key' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Acumen Metros",
    "partner_customer_id": "customer_id",
    "tax_type": "NO_TAX",
    "address": "",
    "email": "new_email@address.com",
    "pic_name": 123,
    "phone_number": "082143207721",
    "pph_tax": "PPH_23_NON_NPWP",
    "status": "ACTIVE"
}'
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
};
var request = http.Request('PUT', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15'));
request.body = json.encode({
  "name": "Acumen Metros",
  "partner_customer_id": "customer_id",
  "tax_type": "NO_TAX",
  "address": "",
  "email": "new_email@address.com",
  "pic_name": 123,
  "phone_number": "082143207721",
  "pph_tax": "PPH_23_NON_NPWP",
  "status": "ACTIVE"
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

  url := "https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15"
  method := "PUT"

  payload := strings.NewReader(`{
    "name": "Acumen Metros",
    "partner_customer_id": "customer_id",
    "tax_type": "NO_TAX",
    "address": "",
    "email": "new_email@address.com",
    "pic_name": 123,
    "phone_number": "082143207721",
    "pph_tax": "PPH_23_NON_NPWP",
    "status": "ACTIVE"
}

`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")
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
  RequestBody body = RequestBody.create(mediaType, "{\n    \"name\": \"Acumen Metros\",\n    \"partner_customer_id\": \"customer_id\",\n    \"tax_type\": \"NO_TAX\",\n    \"address\": \"\",\n    \"email\": \"new_email@address.com\",\n    \"pic_name\": 123,\n    \"phone_number\": \"082143207721\",\n    \"pph_tax\": \"PPH_23_NON_NPWP\",\n    \"status\": \"ACTIVE\"\n}\n\n");
  Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15")
  .method("PUT", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .addHeader("Content-Type", "application/json")
  .build();
  Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "name": "Acumen Metros",
  "partner_customer_id": "customer_id",
  "tax_type": "NO_TAX",
  "address": "",
  "email": "new_email@address.com",
  "pic_name": 123,
  "phone_number": "082143207721",
  "pph_tax": "PPH_23_NON_NPWP",
  "status": "ACTIVE"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15");
xhr.setRequestHeader("x-oy-username", "username");
xhr.setRequestHeader("x-api-key", "api_key");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key',
  'Content-Type' => 'application/json'
));
$request->setBody('{\n    "name": "Acumen Metros",\n    "partner_customer_id": "customer_id",\n    "tax_type": "NO_TAX",\n    "address": "",\n    "email": "new_email@address.com",\n    "pic_name": 123,\n    "phone_number": "082143207721",\n    "pph_tax": "PPH_23_NON_NPWP",\n    "status": "ACTIVE"\n}\n\n');
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
payload = json.dumps({
  "name": "Acumen Metros",
  "partner_customer_id": "customer_id",
  "tax_type": "NO_TAX",
  "address": "",
  "email": "new_email@address.com",
  "pic_name": 123,
  "phone_number": "082143207721",
  "pph_tax": "PPH_23_NON_NPWP",
  "status": "ACTIVE"
})
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
}
conn.request("PUT", "/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "data": {
    "id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
    "name": "Acumen Metros",
    "partner_customer_id": "customer_id",
    "tax_type": "NO_TAX",
    "address": "",
    "email": "new_email@address.com",
    "pic_name": 123,
    "phone_number": "082143207721",
    "pph_tax": "PPH_23_NON_NPWP",
    "status": "ACTIVE"
  },
  "error": null,
  "status": true,
  "reason": null,
  "status_code": 200
}
```

### HTTPS Request

**[Production]** `PUT https://partner.oyindonesia.com/api/account-receivable/customers/:id` <br>
**[Staging]** `PUT https://api-stg.oyindonesia.com/api/account-receivable/customers/:id`


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
name | String | TRUE | Name of a customer for a transaction
partner_customer_id | String | FALSE | A unique customer ID
tax_type | NO_TAX / PPN_11_INCLUSIVE / PPN_11_EXCLUSIVE / PPN_10_INCLUSIVE / PPN_10_EXCLUSIVE | TRUE | PPN Tax type that is applicable for the customer will be reflected in the invoice
address | String | FALSE | customer's address
email | String | FALSE | The email address where the payment link will be sent to. Max 6 email separate by *;*
pic_name | String | FALSE | Name of the person in charge for handling the invoice
phone_number | String with phone pattern | FALSE | Phone number of the customer for a transaction. Do not use special character (e.g. "+").
pph_tax | NO_TAX / *PPH_23_NON_NPWP* / *PPH_23_NPWP* | TRUE | PPH Tax type that is applicable for the customer will be reflected in the invoice
status | ACTIVE/INACTIVE | TRUE | Changing status from Active to Inactive **only applicable when there is not outstanding invoice**


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | To determine result of endpoint
error | Object | Specific code for cause of error and error message
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, name: <name>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | customer primary id
partner_customer_id | String | Inputted customer id name
status | ACTIVE | Customer's status, first creation always active.
name | String | Name of a customer for a transaction
tax_type | NO_TAX / PPN_11_INCLUSIVE / PPN_11_EXCLUSIVE / PPN_10_INCLUSIVE / PPN_10_EXCLUSIVE | Result of choosen enum tax type 
address | String | Inputted customer's address
email | String | Inputted customer's email
pic_name | String | Inputted PIC name
phone_number| String | Inputted customer's phone number
pph_tax | NO_TAX / *PPH_23_NON_NPWP* / *PPH_23_NPWP* | Result of choosen enum
reason| String | Reserved field to add additional notes for the response
status_code | Integer | Response Status code  

## Retrieve Customer's Details

This endpoints allow Partners to retrieve existing customers details.

```shell
curl --location --request GET 'https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15' \
--header 'x-oy-username: username' \
--header 'x-api-key: api_key' 
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  
var request = http.Request('GET', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15'));

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

  url := "https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")

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
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15")
  .method("GET", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key'
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

conn = http.client.HTTPSConnection("partner.oyindonesia.com")
payload = ''
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key'
}
conn.request("GET", "/api/account-receivable/customers/8b57cbb0-41f9-48f2-b092-5fa999ddcb15", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "data": {
    "id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
    "status": "ACTIVE",
    "partner_customer_id": "customer_id",
    "name": "Acumen Metros",
    "pic_name": null,
    "phone_number": "082143207721",
    "tax_type": "NO_TAX",
    "pph_tax": "PPH_23_NON_NPWP",
    "email": "new_email@address.com",
    "address": "",
    "total_piutang": 0,
    "can_be_deactivated": true
  },
  "error": null,
  "status": true,
  "reason": null,
  "status_code": 200
}
```

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/account-receivable/customers/:id` <br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-receivable/customers/:id`


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | To determine result of endpoint
error | Object | Specific code for cause of error and error message
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, name: <name>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | customer primary id
partner_customer_id | String | Inputted customer id name
status | ACTIVE | Customer's status, first creation always active.
name | String | Name of a customer for a transaction
tax_type | NO_TAX | Result of choosen enum tax type 
address | String | Inputted customer's address
email | String | Inputted customer's email
pic_name | String | Inputted PIC name
phone_number| String | Inputted customer's phone number
pph_tax | PPH_23_NON_NPWP | Result of choosen enum
reason| String | Reserved field to add additional notes for the response
status_code | Integer | Response Status code  

 

## Filter & Search Customers

This endpoint filters customer data based on criteria that can be set through API

```shell
curl --location --request GET 'https://partner.oyindonesia.com/api/account-receivable/customers' \
--header 'x-oy-username: username' \
--header 'x-api-key: api_key' \
--header 'Content-Type: application/json' \
--data-raw '{
    
}'
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
};
var request = http.Request('GET', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/customers'));
request.body = json.encode({});
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

  url := "https://partner.oyindonesia.com/api/account-receivable/customers"
  method := "GET"

  payload := strings.NewReader(`{
    
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")
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
  RequestBody body = RequestBody.create(mediaType, "{\n    \n}");
  Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/customers")
  .method("GET", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .addHeader("Content-Type", "application/json")
  .build();
  Response response = client.newCall(request).execute();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/customers');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key',
  'Content-Type' => 'application/json'
));
$request->setBody('{\n    \n}');
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
payload = json.dumps({})
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
}
conn.request("GET", "/api/account-receivable/customers", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "data": [
    {
      "id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
      "status": "ACTIVE",
      "partner_customer_id": "customer_id",
      "name": "Acumen Metros",
      "pic_name": null,
      "phone_number": "082143207721",
      "tax_type": "NO_TAX",
      "pph_tax": "PPH_23_NON_NPWP",
      "email": "new_email@address.com",
      "address": "",
      "total_piutang": null,
      "can_be_deactivated": true
    }
  ],
  "error": null,
  "status": true,
  "reason": null,
  "status_code": 200
}
```

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/account-receivable/customers?*parameter*` <br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-receivable/customers?*parameter*`


### Request Parameters

Parameters | Required | Description | Example value
---- | ---- | ------ | -------
limit | FALSE | Number of records that should be returned to the API | 10
offset | FALSE | Offset number of records | 0
status |FALSE | Filter based on invoice status | Possible value: CREATED, OVERDUE, PAID | CREATED
partner_customer_id | FALSE | partner customer id name |USER001
name | FALSE | partner customer name |Aston
tax_type | FALSE | Filter based on PPN Tax Type | NO_TAX
pph_tax | FALSE | Filter based on PPh Tax Type |PPH_23_NON_NPWP




### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | To determine result of endpoint
error | Object | Specific code for cause of error and error message
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, name: <name>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | customer primary id
partner_customer_id | String | Inputted customer id name
status | ACTIVE | Customer's status, first creation always active.
name | String | Name of a customer for a transaction
tax_type | NO_TAX | Result of choosen enum tax type 
address | String | Inputted customer's address
email | String | Inputted customer's email
pic_name | String | Inputted PIC name
phone_number| String | Inputted customer's phone number
pph_tax | PPH_23_NON_NPWP | Result of choosen enum
reason| String | Reserved field to add additional notes for the response
status_code | Integer | Response Status code  

## Create & Send Invoice

This endpoint allows Partners to create Account Receivable Invoice through API and send invoice directly to customers via email.

```shell
curl --location --request POST 'https://partner.oyindonesia.com/api/account-receivable/invoices' \
--header 'x-oy-username: username' \
--header 'x-api-key: api_key' \
--header 'Content-Type: application/json' \
--data-raw '{
    "invoice_number": "INV/2022/12/210205",
    "invoice_date": "2022-12-21",
    "due_date": "2022-12-25",
    "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
    "expiration_date":"2022-12-25 12:58:01",
    "invoice_items": [{
        "price_per_item": 25600,
        "description": "kopi susu",
        "quantity": 4
    }],
    "additional_items": [{
        "description": "Diskon",
        "price_per_item": -5000,
        "quantity": 1
    }],
    "message": null,
    "attachments": [],
    "save_as_default_message": false,
    "payment_configuration": {
        "include_admin_fee": true,
        "list_disabled_payment_methods": "OFFLINE_CASH_IN",
        "list_enabled_banks": "002,008,009,013,213",
        "list_enabled_ewallet": "shopeepay_ewallet,linkaja_ewallet,dana_ewallet",
        "list_enabled_offline_channel": ""
    }
}'
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
};
var request = http.Request('POST', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/invoices'));
request.body = json.encode({
  "invoice_number": "INV/2022/12/210205",
  "invoice_date": "2022-12-21",
  "due_date": "2022-12-25",
  "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
  "expiration_date": "2022-12-25 12:58:01",
  "invoice_items": [
    {
      "price_per_item": 25600,
      "description": "kopi susu",
      "quantity": 4
    }
  ],
  "additional_items": [
    {
      "description": "Diskon",
      "price_per_item": -5000,
      "quantity": 1
    }
  ],
  "message": null,
  "attachments": [],
  "save_as_default_message": false,
  "payment_configuration": {
    "include_admin_fee": true,
    "list_disabled_payment_methods": "OFFLINE_CASH_IN",
    "list_enabled_banks": "002,008,009,013,213",
    "list_enabled_ewallet": "shopeepay_ewallet,linkaja_ewallet,dana_ewallet",
    "list_enabled_offline_channel": ""
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

  url := "https://partner.oyindonesia.com/api/account-receivable/invoices"
  method := "POST"

  payload := strings.NewReader(`{
    "invoice_number": "INV/2022/12/210205",
    "invoice_date": "2022-12-21",
    "due_date": "2022-12-25",
    "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
    "expiration_date":"2022-12-25 12:58:01",
    "invoice_items": [{
        "price_per_item": 25600,
        "description": "kopi susu",
        "quantity": 4
    }],
    "additional_items": [{
        "description": "Diskon",
        "price_per_item": -5000,
        "quantity": 1
    }],
    "message": null,
    "attachments": [],
    "save_as_default_message": false,
    "payment_configuration": {
        "include_admin_fee": true,
        "list_disabled_payment_methods": "OFFLINE_CASH_IN",
        "list_enabled_banks": "002,008,009,013,213",
        "list_enabled_ewallet": "shopeepay_ewallet,linkaja_ewallet,dana_ewallet",
        "list_enabled_offline_channel": ""
    }
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")
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
  RequestBody body = RequestBody.create(mediaType, "{\n    \"invoice_number\": \"INV/2022/12/210205\",\n    \"invoice_date\": \"2022-12-21\",\n    \"due_date\": \"2022-12-25\",\n    \"customer_id\": \"8b57cbb0-41f9-48f2-b092-5fa999ddcb15\",\n    \"expiration_date\":\"2022-12-25 12:58:01\",\n    \"invoice_items\": [{\n        \"price_per_item\": 25600,\n        \"description\": \"kopi susu\",\n        \"quantity\": 4\n    }],\n    \"additional_items\": [{\n        \"description\": \"Diskon\",\n        \"price_per_item\": -5000,\n        \"quantity\": 1\n    }],\n    \"message\": null,\n    \"attachments\": [],\n    \"save_as_default_message\": false,\n    \"payment_configuration\": {\n        \"include_admin_fee\": true,\n        \"list_disabled_payment_methods\": \"OFFLINE_CASH_IN\",\n        \"list_enabled_banks\": \"002,008,009,013,213\",\n        \"list_enabled_ewallet\": \"shopeepay_ewallet,linkaja_ewallet,dana_ewallet\",\n        \"list_enabled_offline_channel\": \"\"\n    }\n}");
  Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/invoices")
  .method("POST", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .addHeader("Content-Type", "application/json")
  .build();
  Response response = client.newCall(request).execute();
```

```javascript
// WARNING: For POST requests, body is set to null by browsers.
var data = JSON.stringify({
  "invoice_number": "INV/2022/12/210205",
  "invoice_date": "2022-12-21",
  "due_date": "2022-12-25",
  "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
  "expiration_date": "2022-12-25 12:58:01",
  "invoice_items": [
    {
      "price_per_item": 25600,
      "description": "kopi susu",
      "quantity": 4
    }
  ],
  "additional_items": [
    {
      "description": "Diskon",
      "price_per_item": -5000,
      "quantity": 1
    }
  ],
  "message": null,
  "attachments": [],
  "save_as_default_message": false,
  "payment_configuration": {
    "include_admin_fee": true,
    "list_disabled_payment_methods": "OFFLINE_CASH_IN",
    "list_enabled_banks": "002,008,009,013,213",
    "list_enabled_ewallet": "shopeepay_ewallet,linkaja_ewallet,dana_ewallet",
    "list_enabled_offline_channel": ""
  }
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://partner.oyindonesia.com/api/account-receivable/invoices");
xhr.setRequestHeader("x-oy-username", "username");
xhr.setRequestHeader("x-api-key", "api_key");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/invoices');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key',
  'Content-Type' => 'application/json'
));
$request->setBody('{\n    "invoice_number": "INV/2022/12/210205",\n    "invoice_date": "2022-12-21",\n    "due_date": "2022-12-25",\n    "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",\n    "expiration_date":"2022-12-25 12:58:01",\n    "invoice_items": [{\n        "price_per_item": 25600,\n        "description": "kopi susu",\n        "quantity": 4\n    }],\n    "additional_items": [{\n        "description": "Diskon",\n        "price_per_item": -5000,\n        "quantity": 1\n    }],\n    "message": null,\n    "attachments": [],\n    "save_as_default_message": false,\n    "payment_configuration": {\n        "include_admin_fee": true,\n        "list_disabled_payment_methods": "OFFLINE_CASH_IN",\n        "list_enabled_banks": "002,008,009,013,213",\n        "list_enabled_ewallet": "shopeepay_ewallet,linkaja_ewallet,dana_ewallet",\n        "list_enabled_offline_channel": ""\n    }\n}');
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
payload = json.dumps({
  "invoice_number": "INV/2022/12/210205",
  "invoice_date": "2022-12-21",
  "due_date": "2022-12-25",
  "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
  "expiration_date": "2022-12-25 12:58:01",
  "invoice_items": [
    {
      "price_per_item": 25600,
      "description": "kopi susu",
      "quantity": 4
    }
  ],
  "additional_items": [
    {
      "description": "Diskon",
      "price_per_item": -5000,
      "quantity": 1
    }
  ],
  "message": None,
  "attachments": [],
  "save_as_default_message": False,
  "payment_configuration": {
    "include_admin_fee": True,
    "list_disabled_payment_methods": "OFFLINE_CASH_IN",
    "list_enabled_banks": "002,008,009,013,213",
    "list_enabled_ewallet": "shopeepay_ewallet,linkaja_ewallet,dana_ewallet",
    "list_enabled_offline_channel": ""
  }
})
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
}
conn.request("POST", "/api/account-receivable/invoices", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "data": {
    "id": "c6733a50-f93b-489f-b12b-48f8cc67735e",
    "invoice_number": "INV/2022/12/210205",
    "invoice_date": "2022-12-21",
    "due_date": "2022-12-25",
    "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
    "expiration_date": "2022-12-25 12:58:01",
    "invoice_items": [
      {
        "price_per_item": 25600,
        "description": "kopi susu",
        "quantity": 4
      }
    ],
    "additional_items": [
      {
        "description": "Diskon",
        "price_per_item": -5000,
        "quantity": 1
      }
    ],
    "message": "None",
    "attachments": [],
    "save_as_default_message": "False",
    "payment_configuration": {
      "include_admin_fee": "True",
      "list_disabled_payment_methods": "OFFLINE_CASH_IN",
      "list_enabled_banks": "002,008,009,013,213",
      "list_enabled_ewallet": "shopeepay_ewallet,linkaja_ewallet,dana_ewallet",
      "list_enabled_offline_channel": ""
    },
    "payment_url": "https://pay-dev.oyindonesia.com/invoice/c6733a50-f93b-489f-b12b-48f8cc67735e"
  },
  "error": null,
  "status": true,
  "reason": null,
  "status_code": 200
}
```

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/account-receivable/invoices` <br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-receivable/invoices`


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
invoice_number | String | TRUE | Invoice number for identification purposes
invoice_date | Date string with pattern *yyyy-MM-dd* | TRUE | The date of the invoice
due_date | Date string with pattern *yyyy-MM-dd* | TRUE | Must be bigger than present time
customer_id | String| TRUE | Customer must be in ACTIVE state
expiration_date | Date string with pattern *yyyy-MM-dd HH:mm:ss* | TRUE | Experation date must be bigger than invoice date. Empty string will returns error and Null will be treated as lifetime value.
invoice_items| List Object of invoice items | TRUE | List Invoice Items object, Request in Object {price_per_item: <price_per_item>, description: <description>, quantity: <quantity>}
price_per_item | Integer | TRUE | Minimum is 0
description | String | TRUE | The description of the items
quantity | Integer | TRUE | Minimum is 1
additional_items | List Object of additional items | FALSE | List additional items object. Request in object {price_per_item: <price_per_item>, description: <description>, quantity: <quantity>}
price_per_item | Integer | TRUE | Can be negative to substract total price
description | String | TRUE | The description of the additional items
quantity | Integer | TRUE | Minimum is 1
message | String | FALSE | Additional footnote message inside invoice
attachments | String | FALSE | Max 4 Attachments and need to decode to String base64
payment_configuration | Object | TRUE | Status of request in Object {include_admin_fee: <include_admin_fee>, list_disabled_payment_methods: <list_disabled_payment_methods>, list_enabled_banks: <list_enabled_banks>, list_enabled_ewallet: <list_enabled_ewallet>, list_enabled_offline_channel: <list_enabled_offline_channel>}
include_admin_fee | Boolean | TRUE | true/false
list_disabled_payment_methods | String | TRUE | To configure payment methods to be disabled (e.g. VA, CREDIT_CARD, QRIS, EWALLET). When CREDIT_CARD is included, you are disabling the ‘cards’ payment method as a whole - which means disabling both credit card and debit card. There must be at least 1 payment method is enabled. If this field is not included in the request, or filled with an empty String, then all payment methods will be enabled.
list_enabled_banks | String | TRUE | To configure banks to be enabled for VA payment method. List of eligible bank codes: "002" (BRI), "008" (Mandiri), "009" (BNI), "013" (Permata), "022" (CIMB).
list_enabled_ewallet | String | TRUE | To configure list of e-wallets to be enabled on payment method page
list_enabled_offline_channel | String | TRUE | To configure list of offline channels to be enabled on payment method page



### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | To determine result of endpoint
error | Object | Specific code for cause of error and error message
data | Object | Status of response in Object {id: <id>, invoice_number: <invoice_number>, invoice_date: <invoice_date>, due_date: <due_date>, customer_id: <customer_id>, expiration_date: <expiration_date>, invoice_items: <invoice_items>,additional_items: <additional_items>, message: <message>, attachments: <attachments>,save_as_default_message: <save_as_default_message>, payment_configuration: <payment_configuration>, payment_url: <payment_url>}
id | String | Unique Payment ID for a specific invoice, that is generated after successful invoice creation.
invoice_number | String | Invoice number for identification purposes
invoice_date | Date string with pattern *yyyy-MM-dd* | The date of the invoice
due_date | Date string with pattern *yyyy-MM-dd* | Due date of invoice
customer_id | String| Customer must be in ACTIVE state
expiration_date | Date string with pattern *yyyy-MM-dd HH:mm:ss* | Expiration date of invoice payment.
invoice_items| List Object of invoice items | List Invoice Items object, Request in Object {price_per_item: <price_per_item>, description: <description>, quantity: <quantity>}
price_per_item | Integer | Price per item
description | String | The description of the items
quantity | Integer | Quantity of item
additional_items | List Object of additional items | List additional items object. Request in object {price_per_item: <price_per_item>, description: <description>, quantity: <quantity>}
price_per_item | Integer | Price per additional item
description | String | The description of the additional items
quantity | Integer | Quantity of additional item
message | String | Additional footnote message inside invoice
attachments | String | Attachment of invoice
payment_configuration | Object | Status of request in Object {include_admin_fee: <include_admin_fee>, list_disabled_payment_methods: <list_disabled_payment_methods>, list_enabled_banks: <list_enabled_banks>, list_enabled_ewallet: <list_enabled_ewallet>, list_enabled_offline_channel: <list_enabled_offline_channel>}
include_admin_fee | Boolean | Identifier whether admin fee included or not
list_disabled_payment_methods | String | List of disabled payment methods.
list_enabled_banks | String | List of enabled bank for VA payment.
list_enabled_ewallet | String | List of e-wallet for invoice payment.
list_enabled_offline_channel | String | List of offline channel
payment_url | String | Payment link to pay this invoice
reason| String | Reserved field to add additional notes for the response
status_code | Integer | Response Status code  

## Cancel Invoice

An endpoint that allows invoice cancellation after creation

```shell
curl --location --request PUT 'https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e' \
--header 'x-oy-username: username' \
--header 'x-api-key: api_key' \
--data-raw ''
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key'
};
var request = http.Request('PUT', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e'));
request.body = '''''';
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

  url := "https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e"
  method := "PUT"

  payload := strings.NewReader(``)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")

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
  MediaType mediaType = MediaType.parse("text/plain");
  RequestBody body = RequestBody.create(mediaType, "");
  Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e")
  .method("PUT", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .build();
  Response response = client.newCall(request).execute();
```

```javascript
var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e");
xhr.setRequestHeader("x-oy-username", "username");
xhr.setRequestHeader("x-api-key", "api_key");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key'
));
$request->setBody('');
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

conn = http.client.HTTPSConnection("partner.oyindonesia.com")
payload = ''
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key'
}
conn.request("PUT", "/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "success": true,
  "error": null,
  "data": "c6733a50-f93b-489f-b12b-48f8cc67735e",
  "reason": null,
  "status_code": 200
}
```

### HTTPS Request

**[Production]** `PUT https://partner.oyindonesia.com/api/account-receivable/invoices/:id` <br>
**[Staging]** `PUT https://api-stg.oyindonesia.com/api/account-receivable/invoices/:id`


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
id | String | TRUE | Unique Payment ID for a specific invoice, that is generated after successful invoice creation.


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | Determine result of endpoint
error | Object | If success, this field is null
data | String | Return invoice id that being cancelled	
code | String | Success status code
message | String | Success reason message
reason | String | Reserve field to add additional notes for the response
status_code | Integer | Response Status code  

## Get Invoice Details

An endpoints that can provide details of an invoice including amount and status.

```shell
curl --location --request GET 'https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e' \
--header 'x-oy-username: username' \
--header 'x-api-key: api_key'
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key'
};
var request = http.Request('GET', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e'));

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

  url := "https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")

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
  MediaType mediaType = MediaType.parse("text/plain");
  RequestBody body = RequestBody.create(mediaType, "");
  Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e")
  .method("GET", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .build();
  Response response = client.newCall(request).execute();
```

```javascript
// WARNING: For GET requests, body is set to null by browsers.

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e");
xhr.setRequestHeader("x-oy-username", "username");
xhr.setRequestHeader("x-api-key", "api_key");

xhr.send();
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key'
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

conn = http.client.HTTPSConnection("partner.oyindonesia.com")
payload = ''
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key'
}
conn.request("GET", "/api/account-receivable/invoices/c6733a50-f93b-489f-b12b-48f8cc67735e", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "success": true,
  "error": null,
  "data": {
    "id": "c6733a50-f93b-489f-b12b-48f8cc67735e",
    "status": "CANCELLED",
    "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
    "customer_name": "Acumen Metros",
    "customer_email": "new_email@address.com",
    "customer_phone_number": "082143207721",
    "invoice_number": "INV/2022/12/210205",
    "source_data": "API",
    "message": null,
    "attachments": [],
    "invoice_date": "2022-12-21",
    "payment_date": "2022-12-21 02:22:19",
    "due_date": "2022-12-25",
    "expiration_date": "2022-12-25 12:58:01",
    "amount_billed": 93304.0000,
    "amount_received": 0,
    "admin_fee": null,
    "payment_method": null,
    "payment_url": "https://pay-dev.oyindonesia.com/invoice/c6733a50-f93b-489f-b12b-48f8cc67735e",
    "invoice_items": [
      {
        "description": "kopi susu",
        "quantity": 4,
        "price_per_item": 25600
      }
    ],
    "timeline_invoices": [
      {
        "status": "CREATED",
        "action_stakeholder": "fajardev",
        "action_date": "2022-12-21 02:07:00"
      },
      {
        "status": "CANCELLED",
        "action_stakeholder": "Acumen Metros",
        "action_date": "2022-12-21 02:22:19"
      }
    ]
  },
  "reason": null,
  "status_code": 200
}
```

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/account-receivable/invoices/:id` <br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-receivable/invoices/:id`


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
id | String | TRUE | Unique Payment ID for a specific invoice, that is generated after successful invoice creation.


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | To determine result of endpoint
error | Object | Specific code for cause of error and error message
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | Unique Payment ID for a specific invoice, that is generated after successful invoice creation.
status | String | Default status first time invoice created
customer_id | String | Customer id for this invoice
customer_name | String | Inputted Customer name
customer_email | String | Customer email
customer_phone_number | String | Customer phone number
invoice_number | String | Inputted invoice number
source_data | String | Default value will be "API" when create invoice through API
invoice_date | Date string with pattern *yyyy-MM-dd* |  Inputted invoice date
payment_date | Date string with pattern *yyyy-MM-dd HH:mm:ss* | Date when invoice reach final status(CANCELLED or PAID)
due_date | Date string with pattern *yyyy-MM-dd* | Inputted due date
expiration_date | Date string with pattern *yyyy-MM-dd HH:mm:ss* | Inputted experation date
amount_billed | Integer | Sum of billed invoice price
amount_received | Integer | Sum of paid invoice
invoice_items | List Object of invoice items | Inputted invoice items
price_per_item | Integer | Inputed price per items
description | String | Inputed description
quantity | Integer | Inputed quantity
message | String | Inputed message
attachments | String | inputted attachments
payment_url | String | Payment link to pay this invoice
timeline_invoices | List of object | History list of invoice timeline. Object {status:<status>, action_stakeholder: <action_stakeholder>, action_date:<action_date>}
status | String | Status of the invoice at a point of time
action_stakeholder | String | Stakeholder that creates milestones
action_date | date | date of milestones (when it was create, cancelled, paid)
reason | String | Reserve Parameter to add additional notes for the response
status_code | Integer | Response Status code  

## Filter and Search Invoice

This endpoint allows Partners to filter and search invoices based on certain criteria

```shell
curl --location --request GET 'https://partner.oyindonesia.com/api/account-receivable/invoices?limit=10&offset=0&source_data=API' \
--header 'x-oy-username: username' \
--header 'x-api-key: api_key' \
--data-raw ''
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key'
};
var request = http.Request('GET', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/invoices?limit=10&offset=0&source_data=API'));
request.body = '''''';
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

  url := "https://partner.oyindonesia.com/api/account-receivable/invoices?limit=10&offset=0&source_data=API"
  method := "GET"

  payload := strings.NewReader(``)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")
  

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
  MediaType mediaType = MediaType.parse("text/plain");
  RequestBody body = RequestBody.create(mediaType, "");
  Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/invoices?limit=10&offset=0&source_data=API")
  .method("GET", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .build();
  Response response = client.newCall(request).execute();
```

```javascript
// WARNING: For GET requests, body is set to null by browsers.
var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://partner.oyindonesia.com/api/account-receivable/invoices?limit=10&offset=0&source_data=API");
xhr.setRequestHeader("x-oy-username", "username");
xhr.setRequestHeader("x-api-key", "api_key");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/invoices?limit=10&offset=0&source_data=API');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key'
));
$request->setBody('');
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

conn = http.client.HTTPSConnection("partner.oyindonesia.com")
payload = ''
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key'
}
conn.request("GET", "/api/account-receivable/invoices?limit=10&offset=0&source_data=API", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "success": true,
  "error": null,
  "data": {
    "page": 0,
    "total": 1,
    "limit": 10,
    "data": [{
      "id": "c6733a50-f93b-489f-b12b-48f8cc67735e",
      "status": "CANCELLED",
      "customer_id": "8b57cbb0-41f9-48f2-b092-5fa999ddcb15",
      "customer_name": "Acumen Metros",
      "customer_phone_number": "082143207721",
      "invoice_number": "INV/2022/12/210205",
      "source_data": "API",
      "invoice_date": 1671555600000,
      "due_date": 1671901200000,
      "expiration_date": 1671947881000,
      "invoice_items": [{
        "description": "kopi susu",
        "quantity": 4,
        "price_per_item": 25600
      }],
      "message": null,
      "attachments": null,
      "payment_url": "https://pay-dev.oyindonesia.com/invoice/c6733a50-f93b-489f-b12b-48f8cc67735e",
      "payment_date": null,
      "admin_fee": null,
      "amount_billed": 93304,
      "amount_received": 0,
      "customer_email": "new_email@address.com"
    }
    ]
  },
  "reason": null,
  "status_code": 200
}
```

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/account-receivable/invoices?*parameter*` <br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-receivable/invoices?*parameter*`



### Request Parameters

Parameters | Required | Description | Example value
---- | ---- | ------ | -------
limit | FALSE | Number of records that should be returned to the API | 10
offset | FALSE | Offset number of records | 0
source_data | FALSE | Enum to choose source creation invoice | API/DASHBOARD
invoice_number | FALSE | Filter invoice using invoice number, it can be filtering using spesific value or just contain some text | 2022
customer_name | FALSE | Filter invoice using customer name, it can be filtering using spesific value or just contain some text | dev 2
status | FALSE | Filter invoice using invoice status |  possible value: CREATED, OVERDUE, PAID, CANCELLED
min_invoice_amount | FALSE | Filter invoice using minimum invoice amount | 10000
max_invoice_amount | FALSE | Filter invoice using maximum invoice amount | 100000



### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | Determine result of endpoint
error | Object | If success, this field is null
data | List of object | List of invoice based on filter
code | String | Success status code
message | String | Success reason message
reason | String | Reserve field to add additional notes for the response
status_code | Integer | Succes status code

## Resend Invoice

This endpoint enables Partners to resend their invoices for reminder purposes. The API can be triggered to Email or Whatsapp. For Whatsapp, fees may occur.

```shell
curl --location --request POST 'http://172.11.25.113:8080/api/account-receivable/invoices/d24ee55f-7eaf-4269-b932-f123dec6f863/send' \
--header 'x-oy-username: username' \
--header 'x-api-key: api_key' \
--header 'Content-Type: application/json' \
--data-raw '{
    "channel" : "EMAIL"
}'
```

```dart
var headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
};
var request = http.Request('POST', Uri.parse('https://partner.oyindonesia.com/api/account-receivable/invoices/d24ee55f-7eaf-4269-b932-f123dec6f863/send'));
request.body = json.encode({
  "channel": "EMAIL"
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

  url := "https://partner.oyindonesia.com/api/account-receivable/invoices/d24ee55f-7eaf-4269-b932-f123dec6f863/send"
  method := "POST"

  payload := strings.NewReader(`{
    "channel" : "EMAIL"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "username")
  req.Header.Add("x-api-key", "api_key")
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
  RequestBody body = RequestBody.create(mediaType, "{\n    \"channel\" : \"EMAIL\"\n}");
  Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/account-receivable/invoices/d24ee55f-7eaf-4269-b932-f123dec6f863/send")
  .method("POST", body)
  .addHeader("x-oy-username", "username")
  .addHeader("x-api-key", "api_key")
  .addHeader("Content-Type", "application/json")
  .build();
  Response response = client.newCall(request).execute();
```

```javascript
// WARNING: For POST requests, body is set to null by browsers.
var data = JSON.stringify({
  "channel": "EMAIL"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://partner.oyindonesia.com/api/account-receivable/invoices/d24ee55f-7eaf-4269-b932-f123dec6f863/send");
xhr.setRequestHeader("x-oy-username", "username");
xhr.setRequestHeader("x-api-key", "api_key");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/account-receivable/invoices/d24ee55f-7eaf-4269-b932-f123dec6f863/send');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => 'username',
  'x-api-key' => 'api_key',
  'Content-Type' => 'application/json'
));
$request->setBody('{\n    "channel" : "EMAIL"\n}');
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
payload = json.dumps({
  "channel": "EMAIL"
})
headers = {
  'x-oy-username': 'username',
  'x-api-key': 'api_key',
  'Content-Type': 'application/json'
}
conn.request("POST", "/api/account-receivable/invoices/d24ee55f-7eaf-4269-b932-f123dec6f863/send", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "success":true,
  "error":null,
  "data": {
    "channel" : "EMAIL",
    "id": "d24ee55f-7eaf-4269-b932-f123dec6f863"
  },
  "reason":null,
  "status_code":200
}
```

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com//api/account-receivable/invoices/b97a9a0d-d635-4e19-9086-031ef541c8c5/send` <br>
**[Staging]** `POST https://api-stg.oyindonesia.com//api/account-receivable/invoices/b97a9a0d-d635-4e19-9086-031ef541c8c5/send`



### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
channel | String | True | **EMAIL**-> using partner email; **WHATSAPP**-> using partner phone number, but there is limit how many partner can use whatspp per day


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | To determine result of endpoint
error | Object | Specific code for cause of error and error message
data | Object | Status of response in Object {id: <id>, channel: <channel>}
id | String | invoice id used in request
channel | String | Channel used in request (**EMAIL** or **WHATSAPP**)
reason| String | Reserved field to add additional notes for the response
status_code | Integer | Response Status code  

## Response Code

Code | Description
--- | ----
000 | Success
204 | Tx Id is not found
210 | Billed invoice less than threshold : Rp 10000
223 | Invoice status not eligible to cancel
247 | Email is not valid
247	| Phone number is not valid
300	| Failed to cancel invoice with id, please try again
400	| Payment configuration can't be null
400 | Invoice date can't be null or empty
400	| Invoice date is less than today
400	| Customer id can't be null or empty
400	| Customer ID Not Found
400	| Due date can't be null or empty
400	| Due date can't before invoice date
400	| Invalid expired Date time
400	| User is not active
400	| Please fix negative price in invoice items
400	| Attachments maximum is 4 item
400	| Tax type value is invalid
400	| Invalid tax type input
400	| Pph tax type value is invalid
400	| Pph tax can't be null
400	| Email address limit is 6
400	| Name cannot be null or empty
901	| Expiration date exceed invoice time


### Default Failed Responses in Each API
These parameters will show up as part of the response parameter.

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | Determine result of endpoint
error | Object | Specific code for cause of error and error message
data | Object | Always null, use success to determine the result of request
reason | String | Reserved field to add additional notes for the response
status_code | Integer | Response Status code  
