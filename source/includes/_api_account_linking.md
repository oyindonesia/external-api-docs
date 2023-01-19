# API Account Linking

OY's API Collection to link user's phone number to e-wallets. Currently, this feature support to link user's phone number to DANA e-wallet. Contact your Business Representative if you'd like to activate this feature.

## Get Linking URL

Use this API to get the linking URL for your user.

```shell
curl --location --request POST 'https://partner.oyindonesia.com/api/tokenization/linking' \
--header 'Content-Type: application/json' \
--header 'X-Oy-Username: yourusername' \
--header 'X-Api-Key: yourapikey' \
--data-raw '{
    "partner_user_id": "USR-20230112-001",
    "phone_number": "082114845847",
    "channel_code": "dana_ewallet"
}
'
```

``` dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'yourapikey'

};
var request = http.Request('POST', Uri.parse('https://partner.oyindonesia.com/api/tokenization/linking'));
request.body = json.encode({
  "partner_user_id": "USR-20230112-001",
    "phone_number": "082114845847",
    "channel_code": "dana_ewallet"
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

  url := "https://partner.oyindonesia.com/api/tokenization/linking"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_user_id": "USR-20230112-001",
    "phone_number": "082114845847",
    "channel_code": "dana_ewallet"
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
  req.Header.Add("x-api-key", "yourapikey")

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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_user_id\": \"USR-20230112-001\",\n    \"phone_number\": \"082114845847\",\n    \"channel_code\": \"dana_ewallet\"\n}");
Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/tokenization/linking")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "yourusername")
  .addHeader("x-api-key", "yourapikey")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_user_id": "USR-20230112-001",
  "phone_number": "082114845847",
  "channel_code": "dana_ewallet"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://partner.oyindonesia.com/api/tokenization/linking");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "yourusername");
xhr.setRequestHeader("x-api-key", "yourapikey");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/tokenization/linking');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => 'yourusername',
  'x-api-key' => 'yourapikey'
));
$request->setBody('{\n    "partner_user_id": "USR-20230112-001",\n    "phone_number": "082114845847",\n    "channel_code": "dana_ewallet"\n}');
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
  "partner_user_id": "USR-20230112-001",
  "phone_number": "082114845847",
  "channel_code": "dana_ewallet"
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'yourapikey'
}
conn.request("POST", "/api/tokenization/linking", payload, headers)
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
    "partner_user_id": "USR-20230112-001",
    "channel_code": "dana_ewallet",
    "linking_url": "https://generated-linking-url"
}
```

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/tokenization/linking`

**[Staging]** `POST https://api-stg.oyindonesia.com/api/tokenization/linking`

### Request Headers

|Parameter	|Type	|Description	|
|---	|---	|---	|
|X-Api-Key	|String	|API Key used to connect to this particular endpoint	|
|X-Oy-Username	|String	|Your OY! account username	|

### Request Parameters

|Parameter	|Type	|Required	|Default	|Description	|
|---	|---	|---	|---	|---	|
|partner_user_id	|String(255)	|TRUE	|-	|ID generated by Partner for a specific user/customer	|
|phone_number	|String(30)	|TRUE	|-	|The user phone number (format 08xxxxxxxxxx)	|
|channel_code	|String(255)	|TRUE	|-	|The e-wallet type that user want to linked to (currently only support `dana_ewallet`)	|

### Response Parameters

|Parameter	|Type	|Description	|
|---	|---	|---	|
|status	|Object	|Status of response in Object `{code: <status_code>, message: <status_message>}`.	|
|partner_user_id	|String(255)	|ID generated by Partner for a specific user/customer	|
|channel_code	|String(255)	|The e-wallet type that user want to linked to (currently only support `dana_ewallet`)	|
|linking_url	|String	|Linking URL to be accessed by user to complete the account linking process	|

## How we notify account linking result?
1. The E-Wallet Account Linking Callback will be sent as a POST request (using JSON format) to your web hook. Please inform your callback web hook to our business representative or to partner@oyindonesia.com. (Note: We send the callback ONLY for a successful account linking)
> Response callback:

```json
{
    "username": "username",
    "partner_user_id": "789467agf238893894rfcw7978iu7g7e",
    "channel_code": "dana_ewallet",
    "phone_number": "082114845847",
    "status": "LINKED",
    "expiration_time": "01/02/2020T15:00:00.000+0000"
}
```

2. At the end of account linking process, we will redirect the user to your redirect page with result status embedded in your redirect URL. Below are the example of redirect url result.

|Redirect URL	|Result Status	|Redirect URL Embedded with Result Status	|
|---	|---	|---	|
|`https://url.com/redirect`	|SUCCESS	|`https://url.com/redirect?result=SUCCESS`	|
|`https://url.com/redirect`	|FAILED	|`https://url.com/redirect?result=FAILED`	|

## Get E-Wallet Account Balance

After do account linking, user have the capability to see their e-wallet balance. Use this API to get user e-wallet balance.

```shell
curl --location --request POST 'https://partner.oyindonesia.com/api/tokenization/balance' \
--header 'Content-Type: application/json' \
--header 'X-Oy-Username: yourusername' \
--header 'X-Api-Key: yourapikey' \
--data-raw '{
    "partner_user_id": "USR-20230112-001",
    "channel_code": "dana_ewallet"
}
'
```

``` dart
var headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'yourapikey'

};
var request = http.Request('POST', Uri.parse('https://partner.oyindonesia.com/api/tokenization/balance'));
request.body = json.encode({
  "partner_user_id": "USR-20230112-001",
    "channel_code": "dana_ewallet"
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

  url := "https://partner.oyindonesia.com/api/tokenization/balance"
  method := "POST"

  payload := strings.NewReader(`{
    "partner_user_id": "USR-20230112-001",
    "channel_code": "dana_ewallet"
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
  req.Header.Add("x-api-key", "yourapikey")

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
RequestBody body = RequestBody.create(mediaType, "{\n    \"partner_user_id\": \"USR-20230112-001\",\n    \"channel_code\": \"dana_ewallet\"\n}");
Request request = new Request.Builder()
  .url("https://partner.oyindonesia.com/api/tokenization/balance")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .addHeader("x-oy-username", "yourusername")
  .addHeader("x-api-key", "yourapikey")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "partner_user_id": "USR-20230112-001",
  "channel_code": "dana_ewallet"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://partner.oyindonesia.com/api/tokenization/balance");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-oy-username", "yourusername");
xhr.setRequestHeader("x-api-key", "yourapikey");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://partner.oyindonesia.com/api/tokenization/balance');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json',
  'x-oy-username' => 'yourusername',
  'x-api-key' => 'yourapikey'
));
$request->setBody('{\n    "partner_user_id": "USR-20230112-001",\n    "channel_code": "dana_ewallet"\n}');
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
  "partner_user_id": "USR-20230112-001",
  "channel_code": "dana_ewallet"
})
headers = {
  'Content-Type': 'application/json',
  'x-oy-username': 'yourusername',
  'x-api-key': 'yourapikey'
}
conn.request("POST", "/api/tokenization/balance", payload, headers)
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
    "partner_user_id": "USR-20230112-001",
    "channel_code": "dana_ewallet",
    "amount": 150000
}
```

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/tokenization/balance`

**[Staging]** `POST https://api-stg.oyindonesia.com/api/tokenization/balance`

### Request Headers

|Parameter	|Type	|Description	|
|---	|---	|---	|
|X-Api-Key	|String	|API Key used to connect to this particular endpoint	|
|X-Oy-Username	|String	|Your OY! account username	|

### Request Parameters

|Parameter	|Type	|Required	|Default	|Description	|
|---	|---	|---	|---	|---	|
|partner_user_id	|String(255)	|TRUE	|-	|ID generated by Partner for a specific user/customer	|
|channel_code	|String(255)	|TRUE	|-	|The e-wallet type that user want to linked to (currently only support `dana_ewallet`)	|

### Response Parameters

|Parameter	|Type	|Description	|
|---	|---	|---	|
|status	|Object	|Status of response in Object `{code: <status_code>, message: <status_message>}`.	|
|partner_user_id	|String(255)	|ID generated by Partner for a specific user/customer	|
|channel_code	|String(255)	|The e-wallet type that user want to linked to (currently only support `dana_ewallet`)	|
|amount	|BigDecimal	|User e-wallet balance amount	|

## Response Codes

Below is the list of response codes for API E-Wallet Account Linking:

Response Code | State | Description
---------- | ------- | -------
000 | Final | Response success without error.
201 | Final | Request is rejected with message “User not found”.
202 | Final | Request is rejected with message “User not active”.
207 | Final | Request is rejected with message “Request IP Address is not Registered”.
208 | Final | Request is rejected with message “API Key is not valid”.
400 | Final | Request is rejected with message “Unsupported e-wallet type for tokenization”. Currently, OY only support account linking for DANA e-wallet.
400 | Final | Account linking request is rejected with message “Phone number is linked”.
400 | Final | Get user balance request is rejected with message “User  account is not linked”.
999 | Non-Final | Internal Server Error.