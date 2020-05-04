# KYC (Coming Soon)

KYC APIs will allow you to verify whether the user-supplied identity card is valid or not. KYC API can be requested through HTTPS Request to OY! API Base URL endpoint.


<a href='mailto:business@oyindonesia.com'>Contact us if you are interested!</a>

## Verify ID-Card

Verification using id-card will be handle asynchronous, and we will send KYC response via callback url. For detail callback, you can see [KYC Response Callback](#kyc-response-callback)


```shell
curl -X POST https://partner.oyindonesia.com/api/kyc/id-card -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654' -d '{"name": "name of user", "address": "home address", "nik" : "encrypted RSA of id card number", "id_card_photo": "encrypted RSA of base64 encode of id card photo", "selfie_card_photo": "encrypted RSA of base64 encode of selfie with id card photo", "phone_number" : "628123456789", "email" : "optional@gmail.com", "business_address": "BUSINESS ADDRESS"}'
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

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
name | String | True | Name of user
address | String | True | Home address based on ID Card
nik | String | True | ID card number, encrypted with RSA
id_card_photo | String | True | Id Card Photo, encode to base64 string, encrypted with RSA
selfie_card_photo | String | True | Selfie with id card, encode to base64 String, encrypted with RSA
phone_number | String | True | Phone number to be verified
email | String | False | Email
business_address | String | True | Business address

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [KYC Response Codes](#kyc-response-codes)

## Verify Phone Number

Verification using phone number.

```shell
curl -X POST https://partner.oyindonesia.com/kyc/id-card -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654' -d '{"name": "name of user", "address": "home address", "nik" : "id card number", "phone_number": "phone number"}'
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

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
name | String | True | Name of user
address | String | True | Home address
nik | String | True | ID card number, encrypted with RSA
phone_number | String | False | Phone number of user, use +62 format

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [KYC Response Codes](#kyc-response-codes)

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
001 | Non-Final | Data on request body is empty or invalid
002 | Non-Final | Request is rejected (Name is not the same as id card)
003 | Non-Final | Request is Rejected (Address is not the same as id card)
004 | Non-Final | Request is Rejected (NIK is not the same as id card)
005 | Non-Final | Request is Rejected (ID card photo is not clear)
006 | Non-Final | Request is Rejected (Face is not the same as photo on id card)
999 | Final | Internal Server Error
