# KYC (Coming Soon)

KYC APIs will allow you to verify whether the user-supplied identity card is valid or not. KYC API can be requested through HTTPS Request to OY! API Base URL endpoint.


<a href='mailto:business@oyindonesia.com'>Contact us if you are interested!</a>

## Verify ID-Card

Verification using id-card will be handle asynchronous, and we will send KYC response via callback url. For detail callback, you can see [KYC Response Callback](#kyc-response-callback)


```shell
curl -X POST https://partner.oyindonesia.com/api/kyc/id-card -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654' -d '{"personal_information": "rsa_encrypted_personal_information", "address": "rsa_encrypted_address", "id_card_photo": "aes_encrypted_base64_encode_of_id_card_photo", "selfie_card_photo": "aes_encrypted_base64_encode_of_selfie_with_id_card_photo"}'
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
personal_information | String | User personal information consisting of `{name: <name>, email: <email>, phone_number: <phone_number>, nik: <nik>, secret_key: <secret_key>}` | RSA
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
personal_information | String | Personal information consisting of `{name: <name>, phone_number: <phone_number>, nik: <nik>, secret_key: <secret_key>}` | RSA
address | String | Address consisting of `{home: <home>}` | RSA

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [KYC Response Codes](#kyc-response-codes)

## Check Status KYC
There are some cases send callback can be failed, so client cannot get kyc status from callback, to handle this we suggest to check kyc status using this API.

```shell
curl -X POST https://partner.oyindonesia.com/kyc/status -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654' -d '{"personal_information": "rsa_encryption_personal_information"}'
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
999 | Final | Internal Server Error
