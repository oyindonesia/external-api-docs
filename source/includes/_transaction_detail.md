# Transaction Detail

Transaction detail API allows you to get the detail of a transaction

## Get Transaction Detail

The Transaction Detail Query API allows partners to retrieve transaction details using the partner transaction ID. Before making a query using this API, it is recommended to ensure that the transaction has been marked as successful through the Check Status API. 

``` shell
curl --location --request GET 'https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&product_type=<product_type>' \
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
var request = http.Request('GET', Uri.parse('https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&product_type=<product_type>'));
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

  url := "https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&product_type=<product_type>"
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
  .url("https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&product_type=<product_type>")
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

xhr.open("GET", "https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&product_type=<product_type>");
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
conn.request("GET", "/api/v1/transaction?partner_tx_id=<partner_tx_id>&product_type=<product_type>", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

> The above command returns JSON structured similar like this:

```json
{
  "status": {
    "code": "000",
    "message": "Success",
  },
  "data": {
    "transfer_amount": 10000, 
    "settlement_amount": 10150,
    "admin_fee": {
      "total_fee": 150
    },
  }
}
```

### HTTPS Request
Endpoint:  
**[Production]** `GET https://partner.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&product_type=<product_type>` <br/>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/v1/transaction?partner_tx_id=<partner_tx_id>&product_type=<product_type>`

### Header
| Field  | Description |  Example   |
| ------------- |:-------------:| ---------- |
| x-oy-username    |Partner username    |   username    |
| x-api-key      | Partner api key     | 6e87432c-2726-11ec-9621-0242ac130002 |

### Request Parameters
| Parameter      | Type         | Required | Description                                                                                     |
|----------------|--------------|----------|-------------------------------------------------------------------------------------------------|
| partner_tx_id  | String(255)  | TRUE     | The partner transaction ID of the transaction to be queried                                      |
| product_type   | Enum       | TRUE     | The product type of the transaction to be queried. Valid options are: `API_DISBURSE`, `API_BILLER`, `EWALLET_AGGREGATOR`, `VA_AGGREGATOR`, `PAYMENT_ROUTING`, `PAYMENT_LINK` |

### Response Parameters
| Parameter                | Type       | Description                                                                                                                                                                                                           |
|--------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| status                   | Object     | Status of the request in an object. `{code: \<status_code\>, message: \<status_message\>`                                                                                                                             |
| data                     | Object     | Data object that wraps the response parameters. Nullable if status is not success                                                                                                                                     |
| data.transfer_amount     | BigDecimal | The amount that must be paid or received by the end user.                                                                                                                                                             |
| data.settlement_amount   | BigDecimal | The total amount that is reflected in the partner's balance. The calculation of the settlement amount varies depending on the transaction type:<br>- For disbursement transactions: `(settlement_amount = transfer_amount + admin_fee)`<br>- For acceptance transactions: `(settlement_amount = transfer_amount - admin_fee)` |
| data.admin_fee           | Object     | Admin fee detail of the transaction                                                                                                                                                                                   |
| data.admin_fee.total_fee | BigDecimal | Total amount of the admin fee for this transaction.                                                                                                                                                                   |

### Product Type
For money-in product, this API can only be used for single-use transactions. For more detailed about each product type, please refer to the following table:


| Product Type        | Product Docs                                      | Notes                                                        |
|---------------------|---------------------------------------------------|--------------------------------------------------------------|
| API_DISBURSE        | [Api Disburse](#fund-disbursement)                |                                                              |
| API_BILLER          | [Api Biller](#biller-api)                         |                                                              |
| PAYMENT_LINK        | [Payment Link](#api-create-payment-link-fund-acceptance) | Excludes the use of reusable payment links.                 |
| PAYMENT_ROUTING     | [Payment Routing](#payment-routing)               | Excludes disbursement through payment routing.               |
| VA_AGGREGATOR       | [VA Aggregator](#va-aggregator)                   | Excludes the use of VA (Virtual Account) for multiple uses.  |
| EWALLET_AGGREGATOR  | [Ewallet Aggregator](#api-e-wallet-aggregator)    |                                                              |


