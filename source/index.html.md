---
title: OY! API Documentation

language_tabs: # must be one of https://git.io/vQNgJ
  - javascript
  - shell

toc_footers:
  - <a href='mailto:business@oyindonesia.com'>Ask for Integration</a>

search: true
---

# Introduction

OY! API services provide a way to disburse payment to any bank accounts in Indonesia easily and real-time.

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

# API For Money Disbursement

## HTTPS Request

Disbursement API can be requested through HTTPS Request to OY! API Base URL endpoint. The HTTPS Header has to be used to allow proper authentication, additionally HTTPS Request should only be made from IP Address which has been registered in OY! System.

### API Base URL

Development Environment: `https:/sandbox.oyindonesia.com/staging/partner`
Production Environment: `https:/partner.oyindonesia.com`

## Authentication

OY! API uses pair of `API Key` and `IP Address` to authenticate a partner request. Partner needs to register a unique `IP Address` which will be used as originating request for the API Services.

<aside class="warning">
Note: Your machine which call request to OY! API Services should be originating from the registered IP Address
</aside>

## HTTPS Header

Use following HTTPS Headers when you make a call to OY! API

Header | Value | Description
--------- | --------- | -----------
Content-Type | application/json | The Content-Type field indicates that JSON type is acceptable to send to the recipient
Accept | application/json | The Accept field is used to specify that JSON type is acceptable for the response
X-OY-Username | `<Partner Username>` | Partner Username to access OY! API services
X-Api-Key | `<Partner API Key>` | Partner API Key to access OY! API services

## API: Inquiry Bank Account

```shell
curl https:/partner.oyindonesia.com/api/inquiry
```

Use this API to get beneficiary account details.

### HTTPS Request
`POST BASE_URL/api/inquiry`

### Request Parameters

Parameter | Description
--------- | -----------
recipient_bank | Bank Code of the Beneficiary account
recipient_account | Beneficiary account number

### Response Parameters

Parameter | Description
--------- | -----------
status | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
bank_code | Bank Code of the Beneficiary account
account_number | Account Number of the Beneficiary Account
account_name | Account Name of the Beneficiary Account

## API: Disbursement Money

```shell
curl https:/partner.oyindonesia.com/api/remit
```

Use this API to start disbursing money to a specific beneficiary account.

### HTTPS Request
`POST BASE_URL/api/remit`

### Request Parameters

Parameter | Description
--------- | -----------
recipient_bank | Bank Code of the Beneficiary account
recipient_account | Beneficiary account number
amount | Amount of disbursement (Accept non fraction number)
note | Add Note to the payout
partner_trx_id | Unique Payout ID for a specific request

### Response Parameters

Parameter | Description
--------- | -----------
status | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
partner_trx_id | Unique Payout ID which partner put on the Request
trx_id | Unique Payout ID from OY!. Partner can use this ID for settlement
recipient_bank | Bank Code of the Beneficiary account
recipient_account | Beneficiary account number
amount | Amount of disbursement (Accept non fraction number)
timestamp | Execution time of Disbursement in OY! system

## API: Get Disbursement 

```shell
curl https:/partner.oyindonesia.com/api/remit
```

To get status of a disbursement request, you can call this API. You may need to call this API few times until getting a final status (success / failed)

### HTTPS Request
`POST BASE_URL/api/remit-status`

### Request Parameters

Parameter | Description
--------- | -----------
partner_trx_id | Unique Payout ID for a specific request

### Response Parameters

Parameter | Description
--------- | -----------
status | Status of Payout in Object `{code: <status_code>, message: <status_message>}`
partner_trx_id | Unique Payout ID which partner put on the Request
trx_id | Unique Payout ID from OY!. Partner can use this ID for settlement
recipient_bank | Bank Code of the Beneficiary account
recipient_account | Beneficiary account number
recipient_name | Account holder name of Beneficiary account number
amount | Amount of disbursement (Accept non fraction number)
timestamp | Execution time of Disbursement in OY! system

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
other value (recipient_account) | SUCCESS("000", "Success")


# Response Codes

Possible status codes on the Disbursement Response:

Payment Status | State | Meaning
---------- | ------- | -------
000 | Final | Disbursement Request has been completed
101 | Non-Final | Request is Processed
102 | Non-Final | Request is In Progress
300 | Final | Disbursement is FAILED
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
990 | Final | Request is Rejected (Request Parameter is not Valid)
999 | Non-Final | Internal Server Error

# Bank Codes

Supported Bank Codes to be used in the Disbursement Request

Bank Code | Bank Name
------------- | -------
008 | Bank Mandiri
002 | Bank BRI
009 | Bank BNI
014 | Bank BCA
451 | Bank Syariah Mandiri
422 | Bank BRI Syariah
213 | Bank BTPN
013 | Bank Permata
114 | Bank Jatim
145 | Bank Nusantara Parahyangan
110 | Bank Jawa Barat
046 | Bank DBS
022 | CIMB Niaga
011 | Bank Danamon
200 | Bank BTN
050 | Standard Chartered
gopay | GOPAY
mandiri_emoney | Mandiri E-Money
ovo | OVO
022 | CIMB Rekening Ponsel
019 | Bank Panin
016 | BII Maybank
441 | Bank Bukopin
147 | Bank Muamalat
426 | Bank Mega
153 | Bank Sinarmas