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

Development Environment: `https:/sandbox.oyindonesia.com/staging/partner`
Production Environment: `https:/partner.oyindonesia.com`

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
curl -X POST https:/partner.oyindonesia.com/api/inquiry -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:987654' -d '{"recipient_bank": "014", "recipient_account": "1239812390"}'
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
curl -X POST https:/partner.oyindonesia.com/api/remit -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321' -d '{"recipient_bank": "014", "recipient_account": "1239812390", "amount":125000, "note":"Split lunch bill", "partner_trx_id":"1234-asdf"}'
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
curl -X POST https:/partner.oyindonesia.com/api/remit-status -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-api-key:7654321' -d '{"partner_trx_id": "1234-asde"}'
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
  "timestamp":"16-10-2019 10:34:23"
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
timestamp | String | Execution time of Disbursement in OY! system ("dd-MM-yyyy HH:mm:ss")

## Get Balance

```shell
curl -X GET https:/partner.oyindonesia.com/api/balace -H 'content-type: application/json, accept: application/json, x-oy-username:janedoe, x-api-key:7654321' -d '{"username": "janedoe"}'
```

> The above command returns JSON structured similar like this:

```json
{
  "status":{
    "code":"000",
    "message":"Success"
  },
  "amount":125000,
  "timestamp":"10-12-2019 12:15:37"
}
```

Use this API to get partner balance.

### HTTPS Request
`GET BASE_URL/api/balance`

### Request Parameters

Parameter | Type | Description
--------- | ---- | -----------
username | String | Partner Username to access OY! API services

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | String | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of disbursement (Accept non fraction number)
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
\<partner_username\> (username) | SUCCESS("000", "Success")
other value (username) | USER_IS_NOT_FOUND("201", "User is not found")

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
300 | Final | Disbursement is FAILED
301 | Non-Final | Pending (When there is a unclear answer from Banks Network)
990 | Final | Request is Rejected (Request Parameter is not Valid)
999 | Non-Final | Internal Server Error

# KYC (Coming Soon)

KYC APIs will allow you to verify whether the user-supplied identity card is valid or not.

<a href='mailto:business@oyindonesia.com'>Contact us if you are interested!</a>

# Bank Codes

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
036	| Bank Windu Kentjana International
045	| Bank Nusantara Parahyangan
046 | Bank DBS
050 | Standard Chartered
061	| ANZ Indonesia
076	| Bank Bumi Arta
087	| Bank Ekonomi Raharja
088	| Bank Antardaerah
089	| Bank Rabobank
110 | Bank Jawa Barat
112	| Bank BPD DIY
114 | Bank Jatim
115	| Bank Jambi
116	| Bank Aceh
117	| Bank SUMUT
119	| Bank Riau
120	| BANK SUMSEL BABEL
121	| Bank Lampung
124	| Bank BPD Kaltim
125	| Bank BPD Kalteng
126	| BANK SULSELBAR
127	| Bank Sulut
128	| Bank NTB
129	| Bank BPD Bali
130	| Bank NTT
131	| Bank Maluku
132	| Bank BPD Papua
133	| Bank Bengkulu
134	| BANK SULTENG
135	| Bank Sultra
145	| BNP
146	| Bank Of India Indonesia
147 | Bank Muamalat
151	| Bank Mestika
153 | Bank Sinarmas
157	| Bank Maspion
161	| Bank Ganesha
164	| BANK ICBC
167	| Bank QNB indonesia
200 | Bank BTN
212	| Bank Woori Saudara
213 | Bank BTPN
405	| Bank Victoria Syariah
422 | Bank BRI Syariah
425	| Bank Jabar Banten Syariah
426 | Bank Mega
427 | Bank BNI Syariah
441 | Bank Bukopin
451 | Bank Syariah Mandiri
472 |	Bank Jasa Jakarta
494 |	Bank Rakyat Indonesia AGRONIAGA
498 |	Bank SBI Indonesia (Indomonex)
501 |	Bank Royal
503 |	Bank National Nobu
513 |	Bank INA
523 |	Bank Sahabat Sampoerna
535 |	BANK KESEJAHTERAAN EKONOMI
547 |	BANK BTPN SYARIAH
553 |	Bank Mayora
555 |	BANK INDEX
558 |	Bank Pembangunan Daerah Banten
559	| CNB
567	| HARDA
889	| BPR KS
945 |	Bank Agris
949 |	Bank CTBC Indonesia
