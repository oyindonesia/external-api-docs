# PFM (Coming Soon)

PFM APIs will allow you to connect with internet banking account. You can use it to check accounts, balance and mutations. PFM API can be requested through HTTPS Request to OY! API Base URL endpoint.

<a href='mailto:business@oyindonesia.com'>Contact us if you are interested!</a>

## Connect internet banking

Login and connect internet banking. This process is asynchronous, we will send response using callback url that you registered to us. For detail of callback response, see [PFM Callback Response](#pfm-callback-response)


```shell
curl -X POST https://partner.oyindonesia.com/api/ibank/login -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-oy-apikey:987654' -d '{"data": "<ENCRYPTED_USERNAME_PASSWORD>","bank_code": "008","phone_number" : "+62821123456789","email" : "","tx_history_start_date": 1586734844000,"tx_history_end_date": 1584056444000,"user_consent": true}'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Processing login to internet banking"
    }, 
    "data" : {
        "id": "1234-12341-1231-1231"
    }
}
```

### HTTPS Request
`POST BASE_URL/api/ibank/login`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
data | String | True | Encripted json of username and password.
bank_code | String | True | Code of bank, For list of bank code, see [PFM Bank Codes](#pfm-bank-codes)
phone_number | String | True | Phone number of user
email | String | False | Email of user
tx_history_start_date | Long | False | Start date mutations on millisecond, if empty will be used current date - 7
tx_history_end_date | Long | False | End date mutation on millisecond, if empty will be used current date
tx_history_month | Integer | False | Get mutation using month, 1 is for January, 2 for February and so on
user_consent | Boolean | True | User consent to share specific information about user and user's account to OY! Indonesia for processing the user's data, if false we are unauthorized to process the data further


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)
data | Object | Data of response in Object `{id:<request_id>}`


## Get connected accounts

Get all connected accounts on specific Internet banking id (ibank ID)


```shell
curl -X GET https://partner.oyindonesia.com/api/ibank/:ibankId/accounts -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-oy-apikey:987654'
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
curl -X GET https://partner.oyindonesia.com/api/accounts/:accountId/balance -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-oy-apikey:987654'
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
`GET BASE_URL/api/accounts/:accountId/balance`

### URL Parameter
Parameter | Type | Description
--------- | ---- | -----------
accountId | String | Unique account id


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)
data | Object | Object of `{id: <id>, account_number: <account_number>, account_type: <account_type>, bank: { code: <code>, name: <name>}, balance: <balance>, last_updated: <last_updated>}`

## Get Mutations

Get mutations for specific account with time range. This is required account ID as parameter, 


```shell
curl -X GET https://partner.oyindonesia.com/api/accounts/:accountId/mutations?startDate=2020-01-01&endDate=2020-01-30 -H 'content-type: application/json, accept: application/json, x-oy-username:myuser, x-oy-apikey:987654'
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
`GET BASE_URL/api/account/:accountId/mutations`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
accountId | String | Unique account id

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



## PFM Callback Response

> Response Callback

```json
{
    "status": {
        "code" : "000",
        "message": "Succeess"
    },
    "data": "encrypted callback response"
}
```

Once data have been connected, our system will make a callback to your system.

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`. For list of status code, see [PFM Response Codes](#pfm-response-codes)
data | Object | Data of response in Object in encrypted of `{"id":"1234-1234-1234-1241","phone_number":"<phone_number>","bank_code":"<bank_code>","tx_history_start_date":<start_date_of_mutation>,"tx_history_end_date":<end_date_of_mutations>,"accounts":[{"id":"<account_id>","account_number":"<account_number>","account_type":"<account_type>","bank":{"code":"<bank_code>","name":"<bank_name>"},"balance":<current_balance>,"last_updated":<last_updated_date>,"mutation":[{"id":"<transaction_id>","category":"<category>","amount":<balance>,"balance_flow":<flow>,"transaction_date":<transaction_date>,"description":"<description>","status":"<status>"}]}]}`

## PFM Bank Codes

These are the lis of available bank on our PFM service:

Bank Code | Bank Name 
--------- | ---------
008 | Mandiri
014 | BCA
009 | BNI
002 | BRI
022 | CIMB
013 | Permata

## PFM Response Codes

These are the list of possible status codes for PFM response status:

Status Code | State | Meaning
---------- | ------- | -------
000 | Final | Response success without error
001 | Final | Processing login to internet banking
300 | Final | Failed
301 | Final | Failed Authentication
302 | Final | Error wrong encryption
303 | Final | Bank code is not valid
304 | Final | User consent is false
999 | Final | Internal Server Error
