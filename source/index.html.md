---
title: OY! API Documentation

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - javascript

toc_footers:
  - <a href='mailto:business@oyindonesia.com'>Ask for Integration</a>

search: true
---

# Introduction

Welcome to OY! API Documentation. Our API services are organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer), accepts [form-encoded](https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms) request bodies and returns [JSON-encoded](https://www.json.org/json-en.html) responses.

# Definition

```javascript
/**
 * Welcome to Documentation page of
 * OY! API Services
 *
 * Here, you can get necessary info
 * for integration with OY! API
 *
 * Happy coding!
 ** /
```

For the purpose of standardization and to prevent any misunderstanding, below our the terms we are going to use in this documentation:

* Partner: OY! Business clients which utilise the API Services and Payment Portal
* Beneficiary: Destination account whereby the payout/transfer is intended to
* Deposit: Balance stored in OY! Account which will be deducted for any successful disbursement

# Business Flow
![Signup for Trial](images/img_business_flow.png)

After partner has acquired access to OY! API Services, then:

1. Partner can topup OY! Account Deposit via Virtual Accounts
2. Once Deposit balance is active, Partner can use the API services provided

# Authentication

OY! API uses pair of `API Key` and `IP Address` to authenticate a partner request. Partner needs to register a unique `IP Address` which will be used as originating request for the API Services.

<aside class="warning">
Note: Your machine which call request to OY! API Services should be originating from the registered IP Address
</aside>

## HTTPS Request

Disbursement API can be requested through HTTPS Request to OY! API Base URL endpoint. The HTTPS Header has to be used to allow proper authentication, additionally HTTPS Request should only be made from IP Address which has been registered in OY! System.

### API Base URL

Development Environment: `https://sandbox.oyindonesia.com/staging/partner`
Production Environment: `https://partner.oyindonesia.com`

## HTTPS Header

Use following HTTPS Headers when you make a call to OY! API

Header | Value | Description
--------- | --------- | -----------
Content-Type | application/json | The Content-Type field indicates that JSON type is acceptable to send to the recipient
Accept | application/json | The Accept field is used to specify that JSON type is acceptable for the response
X-OY-Username | `<Partner Username>` | Partner Username to access OY! API services
X-Api-Key | `<Partner API Key>` | Partner API Key to access OY! API services


# Fund Disbursement

Disbursement APIs allow you to instruct OY to disburse fund to any bank accounts in Indonesia easily and real-time.

## Bank Account Inquiry

```shell
curl -X POST https://partner.oyindonesia.com/api/inquiry -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654' -d '{"recipient_bank": "014", "recipient_account": "1239812390"}'
```

> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "recipient_bank":"014",
  "recipient_account":"1239812390",
  "recipient_name":"John Doe",
  "timestamp":"16-10-2019 09:55:31"
}
```

`This API is mandatory to hit before remit API.`
Use this API to get beneficiary account details.

### HTTPS Request
`POST BASE_URL/api/inquiry`

### Request Parameters

Parameter | Type | Description
--------- | ---- | -----------
recipient_bank | String | Bank Code of the Beneficiary account
recipient_account | String | Beneficiary account number

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
recipient_bank | String | Bank Code of the Beneficiary account
recipient_account | String | Account Number of the Beneficiary Account
recipient_name | String | Account Name of the Beneficiary Account
timestamp | Timestamp | Timestamp api hit (format: dd-MM-yyyy HH:mm:ss)

## Disbursement

```shell
curl -X POST https://partner.oyindonesia.com/api/remit -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321' -d '{"recipient_bank": "014", "recipient_account": "1239812390", "amount":125000, "note":"Split lunch bill", "partner_trx_id":"1234-asdf","email" :"napoleon@email.com test@email.com"}'
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

Use this API to start disbursing money to a specific beneficiary account.

### HTTPS Request
`POST BASE_URL/api/remit`

### Request Parameters

Parameter | Type | Description
--------- | ---- | -----------
recipient_bank | String | Bank Code of the Beneficiary account
recipient_account | String | Beneficiary account number
amount | BigDecimal | Amount of disbursement (Accept non fraction number)
note | String | Add Note to the payout
partner_trx_id | String | Unique Payout ID for a specific request, generated by partner
email | String | Email for invoice notification (Optional). Email can be more than one but not more that five separated by a whitespace.
### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of disbursement (Accept non fraction number)
recipient_bank | String | Bank Code of the Beneficiary account
recipient_account | String | Beneficiary account number
trx_id | String | Unique Payout ID from OY!. Partner can use this ID for settlement
partner_trx_id | String | Unique Payout ID which partner put on the Request
timestamp | String | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss")

## Get Disbursement Status

```shell
curl -X POST https://partner.oyindonesia.com/api/remit-status -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321' -d '{"partner_trx_id": "1234-asde"}'
```

> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "amount":125000,
  "recipient_name":"John Doe",
  "recipient_bank":"008",
  "recipient_account":"1234567890",
  "trx_id":"ABC-456",
  "partner_trx_id":"1234-asde",
  "timestamp":"16-10-2020 10:34:23",
  "created_date": "24-01-2020 06:48:08",
  "last_updated_date": "24-01-2020 06:48:39"
}
```

To get status of a disbursement request, you can call this API. You may need to call this API few times until getting a final status (success / failed)

### HTTPS Request
`POST BASE_URL/api/remit-status`

### Request Parameters

Parameter | Type | Description
--------- | ---- | -----------
partner_trx_id | String | Unique Payout ID for a specific request, generated by partner

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | String | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of disbursement (Accept non fraction number)
recipient_name | String | Account holder name of Beneficiary account number
recipient_bank | String | Bank Code of the Beneficiary account
recipient_account | String | Beneficiary account number
trx_id | String | Unique Payout ID from OY!. Partner can use this ID for settlement
partner_trx_id | String | Unique Payout ID which partner put on the Request, generated by partner
timestamp | String | Execution time of API remit status in OY! system ("dd-MM-yyyy HH:mm:ss")
created_date | String | Executionn time of Disbures in OY! system ("dd-MM-yyyy HH:mm:ss")
last_updated_date | String | Latest status change of a disbursement. Example from 'Pending' to 'Success' ("dd-MM-yyyy HH:mm:ss")

## Get Balance

```shell
curl -X GET 'https://partner.oyindonesia.com/api/balance' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'X-OY-Username: janedoe' -H 'X-Api-Key: 7654321'
```

> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "balance":125000,
  "overdraftBalance":2555555,
  "overbookingBalance":3000000,
  "timestamp":"10-12-2019 12:15:37"
}
```

Use this API to get partner balance.

### HTTPS Request
`GET BASE_URL/api/balance`

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | String | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
balance | BigDecimal | Remaining balance (Accept non fraction number)
overdraftBalance | BigDecimal | Remaining overdraft balance (Accept non fraction number)
overbookingBalance | BigDecimal | Remaining overbooking balance (Accept non fraction number)
timestamp | String | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss")

## Mock number Staging API

To get response code status of a disbursement inquiry request, you can use this mock:

 Parameter | Expected Result
--------- | -----------
2222222222 (recipient_account) | BANK_CODE_NOT_FOUND("205", "Bank Code is not found")
8888888888 (recipient_account) | BANK_ACCOUNT_NOT_FOUND("209", "Bank Account is not found")
other value (recipient_account) | SUCCESS("000", "Success")

To get response code status of a disbursement remit request, you can use this mock:

 Parameter | Expected Result
--------- | -----------
1234567890 (recipient_account) | INTERNAL_SERVER_ERROR("999", "Internal Server Error")
1111111111 (recipient_account) | DUPLICATE_PARTNER_TX_ID("203", "Duplicate Partner Tx Id")
2222222222 (recipient_account) | BANK_CODE_NOT_FOUND("205", "Bank Code is not found")
3333333333 (recipient_account) | TX_ID_NOT_FOUND("204", "Tx Id is not found")
4444444444 (recipient_account) | USER_IS_NOT_FOUND("201", "User is not found")
5555555555 (recipient_account) | USER_IS_NOT_ACTIVE("202", "User is not active")
other value (recipient_account) | PROCESSED("101", "Request is Processed")

To get response code status of a disbursement remit status request, you can use this mock:

 Parameter | Expected Result
--------- | -----------
1234567890 (recipient_account) | INTERNAL_SERVER_ERROR("999", "Internal Server Error")
6666666666 (recipient_account) | IN_PROGRESS("102", "Request is In progress")
7777777777 (recipient_account) | FAILED("300", "Failed")
8888888888 (recipient_account) | BANK_ACCOUNT_NOT_FOUND("209", "Bank Account is not found")
9999999999 (recipient_account) | SUSPECT(“301”, “Suspect”)
other value (recipient_account) | SUCCESS("000", "Success")

To get response code status of a disbursement balance request, you can use this mock:

 Parameter | Expected Result
--------- | -----------
\<Partner Username\> (X-OY-Username) | SUCCESS("000", "Success")
other value (X-OY-Username) | USER_IS_NOT_FOUND("201", "User is not found")

## Response Codes

These are the list of possible status codes for fund disbursement:

Payment Status | State | Meaning
---------- | ------- | -------
000 | Final | Disbursement Request has been completed (success)
101 | Non-Final | Request is Processed
102 | Non-Final | Request is In Progress
201 | Final | Request is Rejected (User ID is not Found)
202 | Final | Request is Rejected (User ID is not Active)
203 | Final | Request is Rejected (Duplicate Partner Tx ID)
204 | Final | Request is Rejected (Partner Tx ID is Not Found)
205 | Final | Request is Rejected (Beneficiary Bank Code is Not Supported)
206 | Final | Request is Rejected (Partner Deposit Balance is Not Enough)
207 | Final | Request is Rejected (Request IP Address is not Registered)
208 | Final | Request is Rejected (API Key is not Valid)
209 | Final | Request is Rejected (Bank Account is not found)
210 | Final | Request is Rejected (Amount is not valid)
211 | Final | Request is Rejected (Bank code is not available for this service)
212 | Final | Request is Rejected (Given amount are lesser than allowed value for static va)
213 | Final | Request is Rejected (Given amount are greater than allowed value for static va)
214 | Final | Request is Rejected (Failed to generate static va)
215 | Final | Request is Rejected (Max amount per transaction exceed for disburse)
216 | Final | Request is Rejected (VA Id is empty)
217 | Final | Request is Rejected (VA Number is still active for this partner user id)
300 | Final | Disbursement is FAILED
301 | Non-Final | Pending (When there is a unclear answer from Banks Network)
990 | Final | Request is Rejected (Request Parameter is not Valid)
999 | Non-Final | Internal Server Error

## Bank Codes

Supported Bank Codes to be used in the Disbursement Request

Bank Code | Bank Name
------------- | -------
002 | Bank BRI
008 | Bank Mandiri
009 | Bank BNI
011 | Bank Danamon
013 | Bank Permata
014 | Bank BCA
016 | BII Maybank
019 | Bank Panin
022 | CIMB Niaga
022 | CIMB Rekening Ponsel
023 | Bank UOB INDONESIA
028 | Bank OCBC NISP
031 | CITIBANK
036	| Bank Windu Kentjana International
037 | Bank ARTHA GRAHA
042 | Bank TOKYO MITSUBISHI UFJ
045	| Bank Nusantara Parahyangan
046 | Bank DBS
050 | Standard Chartered
054 | Bank CAPITAL
061	| ANZ Indonesia
069 | Bank OF CHINA
076	| Bank Bumi Arta
087	| Bank Ekonomi Raharja
088	| Bank Antardaerah
089	| Bank Rabobank
095 | Bank JTRUST INDONESIA
097 | Bank MAYAPADA
110 | Bank Jawa Barat
111 | Bank DKI
112	| Bank BPD DIY
113 | Bank JATENG
114 | Bank Jatim
115	| Bank Jambi
116	| Bank Aceh
117	| Bank SUMUT
118 | Bank NAGARI
119	| Bank Riau
120	| Bank SUMSEL BABEL
121	| Bank Lampung
122 | Bank KALSEL
123 | Bank KALBAR
124	| Bank BPD Kaltim
125	| Bank BPD Kalteng
126	| Bank SULSELBAR
127	| Bank Sulut
128	| Bank NTB
129	| Bank BPD Bali
130	| Bank NTT
131	| Bank Maluku
132	| Bank BPD Papua
133	| Bank Bengkulu
134	| Bank SULTENG
135	| Bank Sultra
137 | Bank BANTEN
145	| BNP
146	| Bank Of India Indonesia
147 | Bank Muamalat
151	| Bank Mestika
152 | Bank SHINHAN
153 | Bank Sinarmas
157	| Bank Maspion
161	| Bank Ganesha
164	| Bank ICBC
167	| Bank QNB indonesia
200 | Bank BTN
212	| Bank Woori Saudara
213 | Bank BTPN
405	| Bank Victoria Syariah
422 | Bank BRI Syariah
425	| Bank Jabar Banten Syariah
426 | Bank Mega
427 | Bank BNI SYARIAH
441 | Bank Bukopin
451 | Bank Syariah Mandiri
472 |	Bank Jasa Jakarta
484 | Bank KEB HANA
485 | Bank MNC INTERNATIONAL
490 | Bank YUDHA BHAKTI
494 |	Bank Rakyat Indonesia AGRONIAGA
498 |	Bank SBI Indonesia (Indomonex)
501 |	Bank Royal
503 |	Bank National Nobu
506 | Bank MEGA SYARIAH
513 |	Bank INA
517 | Bank PANIN SYARIAH
520 | PRIMA MASTER BANK
521 | Bank SYARIAH BUKOPIN
523 |	Bank Sahabat Sampoerna
526 | Bank DINAR
535 |	Bank KESEJAHTERAAN EKONOMI
536 | Bank BCA SYARIAH
542 | Bank ARTOS
547 |	Bank BTPN SYARIAH
548 | Bank MULTIARTA SENTOSA
553 |	Bank Mayora
555 |	Bank INDEX
558 |	Bank Pembangunan Daerah Banten
559	| CNB
564 | Bank MANTAP
566 | Bank VICTORIA INTL
567	| HARDA
945 |	Bank Agris
949 |	Bank CTBC Indonesia
950 | Bank COMMONWEALTH

# Static VA

Static VA API allows you to create a unique VA number as a payment method for your customers..

### API Base URL

Currently API static VA generator is only available in our Production Environment: `https://partner.oyindonesia.com` (Staging Environment will be available soon)

## Create VA

Use this API to create new VA number

```shell
curl -X POST https://partner.oyindonesia.com/api/generate-static-va -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321' -d '{"partner_user_id": "oy00000001","bank_code": "002","amount": 500000}'
```

> The above command returns JSON structured similar like this:

```json
{
    "id": "12345b1-23be-45670-a123-5ca678f12b3e",
    "status": {
        "code": "000",
        "message": "Success"
    },
    "amount": 10000,
    "va_number": "123456789182827272",
    "bank_code": "002",
    "is_open": false,
    "is_single_use": false,
    "expiration_time": 1582783668175,
    "va_status": "WAITING_PAYMENT",
    "username_display": "va name"
}
```

### HTTPS Request
`POST BASE_URL/api/generate-static-va`

### Request Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
partner_user_id | String | - | Your unique ID for specific user
bank_code | String | - | Bank code which the VA number will be generated
amount | BigDecimal | 0 | Amount your user must paid to complete the transaction
is_open | Boolean | true | If set true means VA number can accept any amount, field `amount` can be optional, if set false means VA number only accept the specified amount in the field amount. When you set `is_open` to false, you must specify amount field.
is_single_use | Boolean | false | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Int | - | Expiration time of the VA in minutes, if empty VA will be expired in 24 hour
is_lifetime | Boolean | false | If it is set to FALSE (default) then VA will expire based on the expiration time. Otherwise, it will remain active.
username_display | String | username | VA Name, default is using username

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of VA transaction
va_number | String | Generated VA number
id | String | Unique VA ID
bank_code | String | Bank code for VA, see [VA Bank Code](#static-va-bank-code)
is_open | Boolean | True means VA number can accept any amount, False means VA number only accept the specified amount in the field amount
is_single_use | Boolean | True means that this VA should be closed/complete once there is a successful payment that is being made to this VA. 
expiration_time | Int | Expiration time of VA on Unix timestamp, -1 means no expiration time.
va_status | String | Status of VA, see [VA Status](#static-va-status)
username_display | String | VA Name, default is using username

## Static VA Bank Code
### Available Bank for Static VA
Bank Code | Bank Name
--------- | -------
002 | Bank BRI
013 | Bank Permata
022 | Bank CIMB Niaga

## Static VA Status
### Available Status for Static VA
Status | Description
------ | -----------
WAITING_PAYMENT | This status means that VA is active and can receive a payment
PAYMENT_DETECTED | This status means that there are incoming payment to VA Number
EXPIRED | This status means that VA is expired. You cannot accept or make update to VA Number with this status.
COMPLETE | This status means that VA is closed/complete after get incoming payment. You cannot accept or make update to VA Number with this status. Only Static VA with attribute `is_single_use` true can have this status.

## Get VA Info

Get VA info using Unique VA id.

```shell
curl -X GET https://partner.oyindonesia.com/api/static-virtual-account/1414255-12121-21212121-212121 -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321'
```

> The above command returns JSON structured similar like this:

```json
{
    "id": "1414255-12121-21212121-212121",
    "status": {
        "code": "000",
        "message": "Success"
    },
    "amount": 10000.0000,
    "va_number": "1233456000000000001",
    "bank_code": "002",
    "is_open": true,
    "is_single_use": false,
    "expiration_time": 1582790250609,
    "va_status": "WAITING_PAYMENT",
    "username_display": "username",
    "amount_detected": 0,
    "partner_user_id": "123456"
}
```

### HTTPS Request
`GET BASE_URL/api/static-virtual-account/<ID>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | String | Unique VA id, you can get this once you success created VA

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | String |  Unique VA id
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of VA transaction
va_number | String | Generated VA number
bank_code | String | Bank code for VA
is_open | Boolean | True means VA number can accept any amount, False means VA number only accept the specified amount in the field amount
is_single_use | Boolean | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Int | Expiration time of VA on Unix timestamp, -1 means no expiration time.
va_status | String | Status of VA, see [VA Status](#static-va-status)
username_display | String | VA Name, default is using username
partner_user_id | String | Your unique ID for specific user

## Update VA

Update VA using unique VA id.

```shell
curl -X PUT https://partner.oyindonesia.com/api/static-virtual-account/1414255-12121-21212121-212121 -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321' -d '{"is_open" : true,"amount": 50000,"is_single_use" : false,"expiration_time": 30,"username_display" : "test","bank_code": "002"}'
```

```json
{
    "id": "1414255-12121-21212121-212121",
    "status": {
        "code": "000",
        "message": "Success"
    },
    "amount": 50000,
    "va_number": "1001234000000000001",
    "bank_code": "002",
    "is_open": true,
    "is_single_use": false,
    "expiration_time": 1582802205412,
    "va_status": "WAITING_PAYMENT",
    "username_display": "vaname",
    "partner_user_id": "12345677"
}
```

### HTTPS Request
`PUT BASE_URL/api/static-virtual-account/<ID>`

### URL Parameter
Parameter | Type | Description
--------- | ---- | -----------
ID | String | Unique VA ID, you can get this once you success created VA

### Request Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
amount | BigDecimal | - | Amount your user must paid to complete the transaction
is_open | Boolean | true | True means VA number can accept any amount, field `amount` can be optional, False means VA number only accept the specified amount in the field amount. When you set `is_open` to false, you must specify amount field.
is_single_use | Boolean |  false | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Int | - | Expiration time of the VA in minutes, if empty VA will be expired in 24 hour
is_lifetime | Boolean | false | If it is set to FALSE (default) then VA will expire based on the expiration time. Otherwise, it will remain active.


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | String |  Unique VA id
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of VA transaction
va_number | String | Generated VA number
bank_code | String | Bank code for VA
is_open | Boolean | True means VA number can accept any amount, False means VA number only accept the specified amount in the field amount
is_single_use | Boolean | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Int | Expiration time of VA on Unix timestamp, -1 means no expiration time.
va_status | String | Status of VA, see [VA Status](#static-va-status)
username_display | String | VA Name, default is using username
partner_user_id | String | Your unique ID for specific user

## Get list of created VA

Get list of created VA

```shell
curl -X GET https://partner.oyindonesia.com/api/static-virtual-account?offset=0&limit=10 -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321'
```

> The above command returns JSON structured similar like this:

```json
{
    "total": 5,
    "data": [
        {
            "id": "9a660428-3373-436b-b929-ef69698dd26f",
            "amount": 12000.0000,
            "va_number": "100536000000000006",
            "bank_code": "002",
            "is_open": true,
            "is_single_use": false,
            "expiration_time": 1582791896416,
            "va_status": "EXPIRED",
            "username_display": "username",
            "amount_detected": 400000,
            "partner_user_id": "12345"
        },
        {
            "id": "de51383f-1557-409c-8542-dcb74ca76375",
            "amount": 12000.0000,
            "va_number": "100536000000000005",
            "bank_code": "002",
            "is_open": true,
            "is_single_use": false,
            "expiration_time": 1582790250609,
            "va_status": "EXPIRED",
            "username_display": "username",
            "amount_detected": 500000,
            "partner_user_id": "54321"
        }
    ],
    "status": {
        "code": "000",
        "message": "Success"
    }
}
```

### HTTPS Request
`GET BASE_URL/api/static-virtual-account?offset=<offset>&limit=<limit>`

### Request Parameters
Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
offset | Integer | 0 | start offset, default is 0, if empty will used default value
limit | Integer | 10 | max item to fetch, default is 10, if empty will used default value

### Response Parameters
Parameter | Type | Description
--------- | ---- | -----------
total | Integer | total items
data  | Array of object | List of Object `{id: <id>, amount: <amount>, va_number: <va_number>, bank_code: <bank_code>, is_open: <is_open>, is_single_user: <is_single_user>, expiration_time: <expiration_time>, va_status: <va_status>, username_display: <username_display>, amount_detected: <amount_detected>, partner_user_id: <partner_user_id>}`
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`


## Get List of Transaction for VA

Get list of incoming transaction for specific va number.

```shell
curl -X GET https://partner.oyindonesia.com/api/va-tx-history/12345676788898?offset=0&limit=10 -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321'
```

> The above command returns JSON structured similar like this:

```json
{
    "id": "12345676788898",
    "status": {
        "code": "000",
        "message": "Success"
    },
    "data": [
        {
            "id": "d9c2963f-be14-4558-9380-5ba1db8ed156",
            "created": "2020-02-27 07:48:01",
            "name": "Static VA by username",
            "amount": 10000,
            "create_by": "Static VA by username",
            "last_update_by": "Static VA by username",
            "last_updated": 1582789681439,
            "admin_fee": 1000,
            "va_number": "123456000000000001"
        }
    ],
    "number_of_transaction": 1
}
```

### HTTPS Request
`GET BASE_URL/api/va-tx-history/<ID>?offset=<offset>&limit=<limit>`

### URL Parameter
Parameter | Type | Description
--------- | ---- | -----------
ID | String | Unique VA ID, you can get this once you success created VA

### Request Parameters
Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
offset | Integer | 0 | start offset, default is 0, if empty will used default value
limit | Integer | 10 | max item to fetch, default is 10, if empty will used default value

### Response Parameters
Parameter | Type | Description
--------- | ---- | -----------
id | Integer | Unique VA id
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`
data  | Array of Object  | List of Object `{id:  <id>, created: <created>, name: <name>, amount: <amount>, create_by: <create_by>, last_update_by: <last_update_by>, last_updated: <last_updated>, admin_fee: <admin_fee>, va_number: <va_number>}`
numberOfTransaction  | Integer | Total transaction

## Partner Callback

> Response callback:

```json
{
	"va_number": "1234567",
	"amount": 100000,
	"partner_user_id": "oy0000000001",
	"success": true
}
```

Once user successfully do the payment, our system will make a callback to your system

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
va_number | String | Generated VA number
amount | BigDecimal | Amount of VA transaction
partner_user_id | String | Your unique ID for specific user
success | boolean | payment status if success or not

# KYC (Coming Soon)

KYC APIs will allow you to verify whether the user-supplied identity card is valid or not. KYC API can be requested through HTTPS Request to OY! API Base URL endpoint.


<a href='mailto:business@oyindonesia.com'>Contact us if you are interested!</a>

## Verify ID-Card

Verification using id-card will be handle asynchronous, and we will send KYC response via callback url. For detail callback, you can see [KYC Response Callback](#kyc-response-callback)


```shell
curl -X POST https://partner.oyindonesia.com/api/kyc/id-card -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654' -d '{"name": "name of user", "address": "home address", "nik" : "id card number", "id_card_photo": "base64 encode of id card photo", "selfie_card_photo": "base64 encode of selfie with id card photo"}'
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

Parameter | Type | Description
--------- | ---- | -----------
name | String | Name of user
address | String | Home address
nik | String | ID card number
id_card_photo | String | Id Card Photo, encode to base64 string
selfie_card_photo | String | Selfie with id card, encode to base64 String

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
        "message" : "Verified"
    }
}
```

### HTTPS Request
`POST BASE_URL/kyc/phone-number`

### Request Parameters

Parameter | Type | Description
--------- | ---- | -----------
name | String | Name of user
address | String | Home address
nik | String | ID card number
phone_number | String | Phone number of user, use +62 format

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
	}
}
```

Once data have been verified, our system will make a callback to your system.

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [KYC Response Codes](#kyc-response-codes)


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

# PFM (Coming Soon)

PFM APIs will allow you to connect with internet banking account. You can use it to check accounts, balance and mutations. PFM API can be requested through HTTPS Request to OY! API Base URL endpoint.

<a href='mailto:business@oyindonesia.com'>Contact us if you are interested!</a>

## List of internet banking services

Check supported internet banking service. 


```shell
curl -X GET https://partner.oyindonesia.com/api/ibank/services -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code" : "000",
        "message" : "success"
    },
    "data": [
        {
            "bank_code": "008",
            "bank_name": "mandiri",
            "enable": true
        },
        {
            "bank_code": "014",
            "bank_name": "bca",
            "enable": false
        }
    ]
}
```

### HTTPS Request
`GET BASE_URL/api/ibank/services`


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)
data | Array of Object  | List of Object `{bank_code: <bank_code>, bank_name: <bank_name>, enable: <enable>}` 

## Connect internet banking

Login and connect internet banking. This process is asynchronous, we will send response using callback url that you registered to us. For detail of callback response, see [PFM Callback Response](#pfm-callback-response)


```shell
curl -X POST https://partner.oyindonesia.com/api/ibank/login -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654' -d '{"data":"encrypted username password", "bank_code":"008", "phone_number": "Phone number", "email":""}'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Processing login to internet banking"
    }
}
```

### HTTPS Request
`POST BASE_URL/api/ibank/login`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
data | String | True | Encripted json of username and password.
bank_code | String | True | Code of bank
phone_number | String | True | Phone number of user
email | String | False | Email of user


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)


## Get connected accounts

Get all connected accounts on specific Internet banking id (ibank ID)


```shell
curl -X GET https://partner.oyindonesia.com/api/ibank/:ibankId/accounts -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code" : "000",
        "message": "success"
    },
    "data": [
        {
            "id": "12345-132131-13213-1312131",
            "account_number": "12345678900",
            "account_type": "SAVING",
            "bank": {
                "code": "014",
                "name": "BCA"
            }
        },
        {
            "id": "2134-4315-1234-5123-12331411",
            "account_number": "************1234",
            "account_type": "CREDIT-CARD",
            "bank": {
                "code": "014",
                "name": "BCA"
            }
        }
    ]
}
```

### HTTPS Request
`GET BASE_URL/api/ibank/:ibankId/accounts`

### URL Parameter
Parameter | Type | Description
--------- | ---- | -----------
ibankId | String | Unique internet banking id


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)
data | Array of Object | List of object `{id: <id>, account_number: <account_number>, account_type: <account_type>, bank: { code: <code>, name: <name>}}`

## Get Balance

Get balance for specific account. This is required account ID as parameter.


```shell
curl -X GET https://partner.oyindonesia.com/api/accounts/:accountId/balance -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "success"
    },
    "data": {
        "id": "12345-132131-13213-1312131",
        "account_number": "12345678900",
        "account_type": "SAVING",
        "bank": {
            "code": "014",
            "name": "BCA"
        },
        "balance": 150000000,
        "last_updated": 150091892829299
    }
}
```

### HTTPS Request
`GET BASE_URL/api/ibank/:ibankId/accounts`


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)
data | Object | Object of `{id: <id>, account_number: <account_number>, account_type: <account_type>, bank: { code: <code>, name: <name>}, balance: <balance>, last_updated: <last_updated>}`

## Get Mutations

Get mutations for specific account with time range. This is required account ID as parameter, 


```shell
curl -X GET https://partner.oyindonesia.com/api/accounts/:accountId/mutations?startDate=2020-01-01&endDate=2020-01-30 -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "success"
    },
    "data": [
        {
            "id": "1234-123131-132132-131231",
            "category": "food",
            "amount": 50000,
            "balance_flow": -1,
            "transaction_date": 15818182101011,
            "description": "DB DEBIT DOMESTIK TANGGAL :21/09 TRN DEBIT DOM 008 KFC DRIVE THRU SAM",
            "status": "complete"
        },
        {
            "id": "1234-123131-132132-131231",
            "category": "food",
            "amount": 35000,
            "balance_flow": -1,
            "transaction_date": 15881818220012,
            "description": "DB DEBIT DOMESTIK TANGGAL :24/11 TRN DEBIT DOM 022 PANCIOUS PANCAKE H",
            "status": "pending"
        }
    ]
}
```

### HTTPS Request
`GET BASE_URL/api/ibank/:ibankId/mutations`

### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
startDate | String | Start date of transaction, using format yyyy-MM-dd
endDate | String | End date of transaction, using format yyyy-MM-dd

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)
data | Object | Object of `{id: <id>, category: <category>, amount: <amount>, balance_flow: <balance_flow>, transaction_date: <transaction_date>, description: <description>, status: <status>}`

## Update balance and mutations

Update balance and mutations. This request is asynchronous, we will send response using callback that you registered to us. For detail callback response, see [PFM Callback Response](#pfm-callback-response)


```shell
curl -X PUT https://partner.oyindonesia.com/api/ibank/:ibankId/update -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Request Processed"
    }
}
```

### HTTPS Request
`PUT BASE_URL/api/ibank/:ibankId/update`

### URL Parameter
Parameter | Type | Description
--------- | ---- | -----------
ibankId | String | Unique internet banking id

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)


## PFM Callback Response

> Response Callback

```json
{
    "status": {
        "code" : "000",
        "message": "Succeess"
    },
    "data": {
        "ibank_id" : "12313-13213-132141-131231"
    }
}
```

Once data have been connected, our system will make a callback to your system. You can start using our PFM API to get accounts, balance and mutation.

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)
data | Object | Data of response in Object `{ibank_id: <ibank_id>}`

## PFM Response Codes

These are the list of possible status codes for PFM response status:

Status Code | State | Meaning
---------- | ------- | -------
000 | Final | Response success without error
999 | Final | Internal Server Error

