# Multi Account Management

Multi Account Management APIs allow you to interact with parent/child accounts in OY.

## Get Child Balance

```shell
curl -X \
GET https://partner.oyindonesia.com/api/v2/multi-account/child/balance \
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
var request = http.Request('GET', Uri.parse('{{base_url}}/api/v2/multi-account/child/balance'));

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

  url := "%7B%7Bbase_url%7D%7D/api/v2/multi-account/child/balance"
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
  .url("{{base_url}}/api/v2/multi-account/child/balance")
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

xhr.open("GET", "%7B%7Bbase_url%7D%7D/api/v2/multi-account/child/balance");
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
$request->setUrl('{{base_url}}/api/v2/multi-account/child/balance');
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
conn.request("GET", "/api/v2/multi-account/child/balance", payload, headers)
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
        "overdraftBalance":500000.0000,
        "overbookingBalance":200000.0000,
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
**[Production]** `GET https://partner.oyindonesia.com/api/v2/multi-account/child/balance?child_username=<child_username>`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/v2/multi-account/child/balance?child_username=<child_username>`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
child_username | String(255) | FALSE | Child username whom balance info will be returned. If not specified, all child balances will be returned.

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Request in Object `{code: <status_code>, message: <status_message>}`
data | Object | Response data `{balances: <balances>, timeStamp: <timeStamp>}`
balances | Array of Objects | List of Objects `{username: <username>, balance: <balance>, overdraftBalance: <overdraftBalance>, overbookingBalance: <overbookingBalance>, pendingBalance: <pendingBalance>, availableBalance: <availableBalance>}`
username | String(255) | Child username whom balance info is returned
balance | BigDecimal | Remaining balance (Accept non fraction number)
overdraftBalance | BigDecimal | Remaining overdraft balance (Accept non fraction number)
overbookingBalance | BigDecimal | Remaining overbooking balance (Accept non fraction number)
pendingBalance | BigDecimal | The cumulative balance of your pending transactions.
availableBalance | BigDecimal | The total cumulative money of Balance + Available Overdraft - Pending Balance that you can use for disbursement.
timeStamp | String(19) | Execution time of Request in OY! system ("dd-MM-yyyy HH:mm:ss").


