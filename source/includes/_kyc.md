# KYC

KYC APIs will allow you to verify whether the user-supplied identity card is valid or not. KYC API can be requested through HTTPS Request to OY! API Base URL endpoint.


<a href='mailto:business@oyindonesia.com'>Contact us if you are interested!</a>

## Verify ID-Card

Verification using id-card will be handle asynchronous, and we will send KYC response via callback url. For detail callback, you can see [KYC Response Callback](#kyc-response-callback)

> Below is an example of the code for verify ID-card

```shell
curl -X \
POST https://partner.oyindonesia.com/api/kyc/id-card \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
    "personal_information": "rsa_encrypted_personal_information", 
    "address": "rsa_encrypted_address", 
    "id_card_photo": "aes_encrypted_base64_encode_of_id_card_photo", 
    "selfie_card_photo": "aes_encrypted_base64_encode_of_selfie_with_id_card_photo"
}'
```

```dart
var headers = {
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}',
  'Content-Type': 'application/json'
};
var request = http.Request('POST', Uri.parse('{{base_url}}/api/kyc/id-card'));
request.body = json.encode({
  "personal_information": "O/3qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFf/5+InjHJPQbbgsimBWKW5kfA0N4dgweqwe/IZmBJjuWKBsGDA5OdUlWRkjGvRW43qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFfrZ9xGwTYAeF9s/qGuZ+iq6yteEa8YZwvvHADQ3GJTZ4Is58YvPUatBY1b8zlqeqweqweqweYabbnS3uNMuSXgxULmobBEI5E+k5GI8M=",
  "address": "eqweqweqwe1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWzwe9wop/du1++we9wop/du1+/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVp/wdejklqwdblkqjVDvBjjRFvnnHpBF9OVgv0NnkQhQp7RMN1xqWtsszh5PVk=",
  "id_card_photo": "cfePPfibHpj+VengZFvAOvtm16Lt2DQlHS6kzGajYY1fOzga01r5/PpYFyIk9L05QtV2GGxym5zw2So9jBZl2Q4hPAZZWKRU+134124/HYlCtr8O40IsVFZlUp1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWz+SBs9LumK5obHMKwe9wop/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVpSFPSztYT6Nzv6uCtF/wdejklqwdblkqj/Sh4UD5YSF4VES7dTxJZxggq81jg4u4XXAMgMsmbmwDhcl2i+no+72JtkCczGYBrM2kTCzwddCm23f/Zv68a98Fl1P+W8Rwuxj7d2Z2AjikkZzaeDjmh1BysweFXkBa8ODSgGbgErGuEOuFjzubSjdx/nMN5FMy37UjD5Vs09pMBNza4WFln4MuT51EP44zONIHvdKc84+vaNx4Pq4pbvispFn2Wf04thTNBgv86svqL2//XFm/AFYISn4xx5yFxlp+n/zsdl4J+xG+PUkV1SxVS/pjP1TbFv6j+Tz180yiKdiVcWOQ7p1ChWg4x="
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

  url := "%7B%7Bbase_url%7D%7D/api/kyc/id-card"
  method := "POST"

  payload := strings.NewReader(`{
	"personal_information": "O/3qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFf/5+InjHJPQbbgsimBWKW5kfA0N4dgweqwe/IZmBJjuWKBsGDA5OdUlWRkjGvRW43qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFfrZ9xGwTYAeF9s/qGuZ+iq6yteEa8YZwvvHADQ3GJTZ4Is58YvPUatBY1b8zlqeqweqweqweYabbnS3uNMuSXgxULmobBEI5E+k5GI8M=",
    "address" : "eqweqweqwe1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWzwe9wop/du1++we9wop/du1+/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVp/wdejklqwdblkqjVDvBjjRFvnnHpBF9OVgv0NnkQhQp7RMN1xqWtsszh5PVk=",
	"id_card_photo": "cfePPfibHpj+VengZFvAOvtm16Lt2DQlHS6kzGajYY1fOzga01r5/PpYFyIk9L05QtV2GGxym5zw2So9jBZl2Q4hPAZZWKRU+134124/HYlCtr8O40IsVFZlUp1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWz+SBs9LumK5obHMKwe9wop/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVpSFPSztYT6Nzv6uCtF/wdejklqwdblkqj/Sh4UD5YSF4VES7dTxJZxggq81jg4u4XXAMgMsmbmwDhcl2i+no+72JtkCczGYBrM2kTCzwddCm23f/Zv68a98Fl1P+W8Rwuxj7d2Z2AjikkZzaeDjmh1BysweFXkBa8ODSgGbgErGuEOuFjzubSjdx/nMN5FMy37UjD5Vs09pMBNza4WFln4MuT51EP44zONIHvdKc84+vaNx4Pq4pbvispFn2Wf04thTNBgv86svqL2//XFm/AFYISn4xx5yFxlp+n/zsdl4J+xG+PUkV1SxVS/pjP1TbFv6j+Tz180yiKdiVcWOQ7p1ChWg4x="
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-oy-username", "{{username}}")
  req.Header.Add("x-api-key", "{{api-key}}")
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
RequestBody body = RequestBody.create(mediaType, "{\n\t\"personal_information\": \"O/3qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFf/5+InjHJPQbbgsimBWKW5kfA0N4dgweqwe/IZmBJjuWKBsGDA5OdUlWRkjGvRW43qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFfrZ9xGwTYAeF9s/qGuZ+iq6yteEa8YZwvvHADQ3GJTZ4Is58YvPUatBY1b8zlqeqweqweqweYabbnS3uNMuSXgxULmobBEI5E+k5GI8M=\",\n    \"address\" : \"eqweqweqwe1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWzwe9wop/du1++we9wop/du1+/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVp/wdejklqwdblkqjVDvBjjRFvnnHpBF9OVgv0NnkQhQp7RMN1xqWtsszh5PVk=\",\n\t\"id_card_photo\": \"cfePPfibHpj+VengZFvAOvtm16Lt2DQlHS6kzGajYY1fOzga01r5/PpYFyIk9L05QtV2GGxym5zw2So9jBZl2Q4hPAZZWKRU+134124/HYlCtr8O40IsVFZlUp1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWz+SBs9LumK5obHMKwe9wop/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVpSFPSztYT6Nzv6uCtF/wdejklqwdblkqj/Sh4UD5YSF4VES7dTxJZxggq81jg4u4XXAMgMsmbmwDhcl2i+no+72JtkCczGYBrM2kTCzwddCm23f/Zv68a98Fl1P+W8Rwuxj7d2Z2AjikkZzaeDjmh1BysweFXkBa8ODSgGbgErGuEOuFjzubSjdx/nMN5FMy37UjD5Vs09pMBNza4WFln4MuT51EP44zONIHvdKc84+vaNx4Pq4pbvispFn2Wf04thTNBgv86svqL2//XFm/AFYISn4xx5yFxlp+n/zsdl4J+xG+PUkV1SxVS/pjP1TbFv6j+Tz180yiKdiVcWOQ7p1ChWg4x=\"\n}");
Request request = new Request.Builder()
  .url("{{base_url}}/api/kyc/id-card")
  .method("POST", body)
  .addHeader("x-oy-username", "{{username}}")
  .addHeader("x-api-key", "{{api-key}}")
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
```

```javascript
var data = JSON.stringify({
  "personal_information": "O/3qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFf/5+InjHJPQbbgsimBWKW5kfA0N4dgweqwe/IZmBJjuWKBsGDA5OdUlWRkjGvRW43qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFfrZ9xGwTYAeF9s/qGuZ+iq6yteEa8YZwvvHADQ3GJTZ4Is58YvPUatBY1b8zlqeqweqweqweYabbnS3uNMuSXgxULmobBEI5E+k5GI8M=",
  "address": "eqweqweqwe1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWzwe9wop/du1++we9wop/du1+/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVp/wdejklqwdblkqjVDvBjjRFvnnHpBF9OVgv0NnkQhQp7RMN1xqWtsszh5PVk=",
  "id_card_photo": "cfePPfibHpj+VengZFvAOvtm16Lt2DQlHS6kzGajYY1fOzga01r5/PpYFyIk9L05QtV2GGxym5zw2So9jBZl2Q4hPAZZWKRU+134124/HYlCtr8O40IsVFZlUp1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWz+SBs9LumK5obHMKwe9wop/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVpSFPSztYT6Nzv6uCtF/wdejklqwdblkqj/Sh4UD5YSF4VES7dTxJZxggq81jg4u4XXAMgMsmbmwDhcl2i+no+72JtkCczGYBrM2kTCzwddCm23f/Zv68a98Fl1P+W8Rwuxj7d2Z2AjikkZzaeDjmh1BysweFXkBa8ODSgGbgErGuEOuFjzubSjdx/nMN5FMy37UjD5Vs09pMBNza4WFln4MuT51EP44zONIHvdKc84+vaNx4Pq4pbvispFn2Wf04thTNBgv86svqL2//XFm/AFYISn4xx5yFxlp+n/zsdl4J+xG+PUkV1SxVS/pjP1TbFv6j+Tz180yiKdiVcWOQ7p1ChWg4x="
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "%7B%7Bbase_url%7D%7D/api/kyc/id-card");
xhr.setRequestHeader("x-oy-username", "{{username}}");
xhr.setRequestHeader("x-api-key", "{{api-key}}");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{base_url}}/api/kyc/id-card');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-oy-username' => '{{username}}',
  'x-api-key' => '{{api-key}}',
  'Content-Type' => 'application/json'
));
$request->setBody('{\n	"personal_information": "O/3qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFf/5+InjHJPQbbgsimBWKW5kfA0N4dgweqwe/IZmBJjuWKBsGDA5OdUlWRkjGvRW43qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFfrZ9xGwTYAeF9s/qGuZ+iq6yteEa8YZwvvHADQ3GJTZ4Is58YvPUatBY1b8zlqeqweqweqweYabbnS3uNMuSXgxULmobBEI5E+k5GI8M=",\n    "address" : "eqweqweqwe1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWzwe9wop/du1++we9wop/du1+/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVp/wdejklqwdblkqjVDvBjjRFvnnHpBF9OVgv0NnkQhQp7RMN1xqWtsszh5PVk=",\n	"id_card_photo": "cfePPfibHpj+VengZFvAOvtm16Lt2DQlHS6kzGajYY1fOzga01r5/PpYFyIk9L05QtV2GGxym5zw2So9jBZl2Q4hPAZZWKRU+134124/HYlCtr8O40IsVFZlUp1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWz+SBs9LumK5obHMKwe9wop/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVpSFPSztYT6Nzv6uCtF/wdejklqwdblkqj/Sh4UD5YSF4VES7dTxJZxggq81jg4u4XXAMgMsmbmwDhcl2i+no+72JtkCczGYBrM2kTCzwddCm23f/Zv68a98Fl1P+W8Rwuxj7d2Z2AjikkZzaeDjmh1BysweFXkBa8ODSgGbgErGuEOuFjzubSjdx/nMN5FMy37UjD5Vs09pMBNza4WFln4MuT51EP44zONIHvdKc84+vaNx4Pq4pbvispFn2Wf04thTNBgv86svqL2//XFm/AFYISn4xx5yFxlp+n/zsdl4J+xG+PUkV1SxVS/pjP1TbFv6j+Tz180yiKdiVcWOQ7p1ChWg4x="\n}');
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
  "personal_information": "O/3qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFf/5+InjHJPQbbgsimBWKW5kfA0N4dgweqwe/IZmBJjuWKBsGDA5OdUlWRkjGvRW43qeqwiheqowieh4jgRAUjTQ9oVDgJ0o3X4yT5Cw3NUMec5GEMSjLxIxCHCDtyVUg7UTiKGAgrbRuscpXMGobVrPaqTkWXNFqywHOZFfrZ9xGwTYAeF9s/qGuZ+iq6yteEa8YZwvvHADQ3GJTZ4Is58YvPUatBY1b8zlqeqweqweqweYabbnS3uNMuSXgxULmobBEI5E+k5GI8M=",
  "address": "eqweqweqwe1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWzwe9wop/du1++we9wop/du1+/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVp/wdejklqwdblkqjVDvBjjRFvnnHpBF9OVgv0NnkQhQp7RMN1xqWtsszh5PVk=",
  "id_card_photo": "cfePPfibHpj+VengZFvAOvtm16Lt2DQlHS6kzGajYY1fOzga01r5/PpYFyIk9L05QtV2GGxym5zw2So9jBZl2Q4hPAZZWKRU+134124/HYlCtr8O40IsVFZlUp1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRF1rV/wqdebqwdjlq1B8TPi+YunepcdTWZSRFbkTlsyr3sk5Aan/cQUWKkbISCXYywjJ/RtvMkm+R3dLt1zL3NUH3L63ASAq+VoLbw/JwQAWz+SBs9LumK5obHMKwe9wop/du1+sF3qNjiZJPMUHq0satpdpgRSJ4+ZhVgEtUAhvUEr3ZzDhUCRX6wm8aRwDyz2ZRU3Vo8/3e12/NgKIWsXeqPcSNUn2FqnUugDToVpSFPSztYT6Nzv6uCtF/wdejklqwdblkqj/Sh4UD5YSF4VES7dTxJZxggq81jg4u4XXAMgMsmbmwDhcl2i+no+72JtkCczGYBrM2kTCzwddCm23f/Zv68a98Fl1P+W8Rwuxj7d2Z2AjikkZzaeDjmh1BysweFXkBa8ODSgGbgErGuEOuFjzubSjdx/nMN5FMy37UjD5Vs09pMBNza4WFln4MuT51EP44zONIHvdKc84+vaNx4Pq4pbvispFn2Wf04thTNBgv86svqL2//XFm/AFYISn4xx5yFxlp+n/zsdl4J+xG+PUkV1SxVS/pjP1TbFv6j+Tz180yiKdiVcWOQ7p1ChWg4x="
})
headers = {
  'x-oy-username': '{{username}}',
  'x-api-key': '{{api-key}}',
  'Content-Type': 'application/json'
}
conn.request("POST", "/api/kyc/id-card", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```


> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message" : "Request processed"
    }
}
```

### HTTPS Request
`POST BASE_URL/api/kyc/id-card`

### Request Attribute

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
name | String | True | Name of user
address | String | True | Home address based on ID Card
nik | String | True | ID card number
id_card_photo | String | True | Id Card Photo, encode to base64 string
selfie_card_photo | String | True | Selfie with id card, encode to base64 String
phone_number | String | True | Phone number to be verified
email | String | False | Email
business_address | String | True | Business address

### Request Body
Parameter | Type | Description | Encryption
--------- | ---- | ----------- | ----------
personal_information | String | User personal information consisting of `{name: <name>, email: <email>, phone_number: <phone_number>, nik: <nik>, secret: <secret>}` | RSA
address | String | Address information consisting of `{home: <home>, business: <business>}` | RSA
id_card_photo | String | Base64 encode of Id card photo | AES
selfie_card_photo | String | Base64 encode of selfie card photo | AES

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [KYC Response Codes](#kyc-response-codes)

## Verify Phone Number

Verification using phone number.

```shell
curl -X \
POST https://partner.oyindonesia.com/kyc/id-card \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \ 
-d '{
    "name": "name of user",
    "address": "home address",
    "nik": "id card number",
    "phone_number": "phone number"
}'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message" : "Request processed"
    }
}
```

### HTTPS Request
`POST BASE_URL/kyc/phone-number`

### Request Attributes

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
name | String | True | Name of user
address | String | True | Home address
nik | String | True | ID card number
phone_number | String | False | Phone number of user, use +62 format

### Request Body

Parameter | Type | Description | Encryption
--------- | ---- | ----------- | ----------
personal_information | String | Personal information consisting of `{name: <name>, phone_number: <phone_number>, nik: <nik>}` | RSA
address | String | Address consisting of `{home: <home>}` | RSA

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [KYC Response Codes](#kyc-response-codes)

## Check Status KYC
There are some cases send callback can be failed, so client cannot get kyc status from callback, to handle this we suggest to check kyc status using this API.

```shell
curl -X \
POST https://partner.oyindonesia.com/kyc/status \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-oy-username:myuser' \
-H 'x-api-key:987654' \
-d '{
    "personal_information": "rsa_encryption_personal_information"
}'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message" : "verified"
    },
    "data" : {
        "nik" : "ENCRYPTED_NIK",
        "signature" : "OY_GENERATE_SIGNATURE"
    }
}
```

### HTTPS Request
`POST BASE_URL/kyc/status`

### Request Attributes

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
nik | String | True | ID card number

### Request Body

Parameter | Type | Description | Encryption
--------- | ---- | ----------- | ----------
personal_information | String | Personal information consisting of `{nik: <nik>}` | RSA

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [KYC Response Codes](#kyc-response-codes)
data | Object | Detail data of response in Object `{nik: <encrypted nik>, signature: <OY! signature>}`

## KYC Response Callback

> Response callback:

```json
{
    "status": {
        "code": "000",
        "message" : "verified"
    },
    "data" : {
        "nik" : "ENCRYPTED_NIK",
        "signature" : "OY_GENERATE_SIGNATURE"
    }
}
```

Once data have been verified, our system will make a callback to your system.

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [KYC Response Codes](#kyc-response-codes)
data | Object | Detail data of response in Object `{nik: <encrypted nik>, signature: <OY! signature>}`

## KYC Response Codes

These are the list of possible status codes for KYC response status:

Status Code | State | Meaning
---------- | ------- | -------
000 | Final | Response success without error
001 | Final | Data on request body is empty or invalid
002 | Final | Request is rejected (Name is not the same as id card)
003 | Final | Request is Rejected (Address is not the same as id card)
004 | Final | Request is Rejected (NIK is not the same as id card)
005 | Final | Request is Rejected (ID card photo is not clear)
006 | Final | Request is Rejected (Face is not the same as photo on id card)
007 | Final | Data not found. ID Card number not registered
008 | Final | Image size more than 1MB
429 | Final | Request Rejected (Too Many Request to specific endpoint)
999 | Final | Internal Server Error
