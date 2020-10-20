# VA Aggregator

API VA aggregator allows you to create a unique Virtual Account (VA) number as a payment method for your customers.

### VA Aggregator API Base URL

Currently API VA generator is only available in our Production Environment: `https://partner.oyindonesia.com` (Staging Environment will be available soon)

## Create VA

Use this API to create new VA number

```shell
curl --location --request POST https://partner.oyindonesia.com/api/generate-static-va
--header 'content-type: application/json' \
--header 'accept: application/json' \
--header 'x-oy-username: username' \
--header 'x-api-key: apikey' \
-d '{"partner_user_id":"51200021","bank_code": "002","amount": 0,"is_open" : true,"is_single_use" : false,"is_lifetime": false,"expiration_time": 5,"username_display" : "va name","email": "email@mail.com"}'
```

> The above command returns JSON structured similar like this:

```json
{
    "id": "12345b1-23be-45670-a123-5ca678f12b3e",
    "status": {
        "code": "000",
        "message": "Success"
    },
    "amount": 500000,
    "va_number": "123456789182827272",
    "bank_code": "002",
    "is_open": false,
    "is_single_use": false,
    "expiration_time": 1582783668175,
    "va_status": "WAITING_PAYMENT",
    "username_display": "va name",
    "trx_expiration_time" : 1582783668175,
    "partner_trx_id" : "TRX0001",
    "trx_counter": -1
}
```

### HTTPS Request
`POST BASE_URL/api/generate-static-va`

### Request Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
partner_user_id | String(255) | TRUE | - | Partner unique ID for specific user
bank_code | String(3) | TRUE | - | Bank code which the VA number will be generated
amount | BigDecimal | FALSE | 0 | Amount your user must paid to complete the transaction, if is_open is false, amount is required.
is_open | Boolean | FALSE | true | If set true means VA number can accept any amount, field `amount` can be optional, if set false means VA number only accept the specified amount in the field amount. When you set `is_open` to false, you must specify amount field.
is_single_use | Boolean | FALSE | false | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Long | FALSE | - | Expiration time of the VA in minutes, e.g If VA want to be expired after 5 minutes, you just have to set expiration_time to 5. If empty VA will be expired in 24 hour
is_lifetime | Boolean | FALSE | FALSE | If it is set to FALSE (default) then VA will expire based on the expiration time. Otherwise, it will remain active.
username_display | String(255) | FALSE | username | Customizable VA display name that will be seen by user, If empty willl be using partner username
email | String(50) | FALSE | - | Email of user, using email standard format
trx_expiration_time | Long | FALSE | - | Transaction expiration time in minutes, e.g If Transaction want to be expired after 5 minutes, you just have to set expiration_time to 5. If empty transaction expiration time will be the same with va expiration time
partner_trx_id | String(255) | FALSE | - | Partner unique Transaction ID for specific transaction
trx_counter | Int | FALSE | -1/1 | Transaction counter to limit number of transaction that can be receive by va number, if empty will be use default value -1 for multiple use va, and 1 for single use va. If counter reach zero, va cannot be inquiry or accept payment.

### Response Parameters 

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of VA transaction
va_number | String(20) | Generated VA number
id | String(36) | Unique VA ID
partner_user_id | String(255) | Your unique ID for specific user
bank_code | String(3) | Bank code for VA, see [VA Bank Code](#static-va-bank-code)
is_open | Boolean | True means VA number can accept any amount, False means VA number only accept the specified amount in the field amount
is_single_use | Boolean | True means that this VA should be closed/complete once there is a successful payment that is being made to this VA. 
expiration_time | Long | Expiration time of VA on Unix timestamp in milliseconds, -1 means no expiration time.
va_status | String(16) | Status of VA, see [VA Status](#static-va-status)
username_display | String(255) | Customizable VA display name that will be seen by user, If empty willl be using partner username
trx_expiration_time | Long | Transaction expiration time on Unix timestamp in milliseconds, -1 means no expiration time.
partner_trx_id | String(255) | Partner unique Transaction ID for specific transaction
trx_counter | Int | Transaction counter to limit number of transaction that can be receive by va number, if empty will be use default value -1 for multiple use va, and 1 for single use va. If counter reach zero, va cannot be inquiry or accept payment.


## Get VA Info

Get VA info using Unique VA id.

```shell
curl --location --request GET https://partner.oyindonesia.com/api/static-virtual-account/1414255-12121-21212121-212121
--header 'content-type: application/json' \
--header 'accept: application/json' \
--header 'x-oy-username: username' \
--header 'x-api-key: apikey'
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
    "partner_user_id": "123456",
    "trx_expiration_time": 1582790250609,
    "partner_trx_id": "TRX0001",
    "trx_counter" : -1
}
```

### HTTPS Request
`GET BASE_URL/api/static-virtual-account/<ID>`

### URL Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
ID | String(255) | TRUE | - | Unique VA id, you can get this once you success created VA

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | String |  Unique VA id
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of VA transaction
va_number | String(20) | Generated VA number
bank_code | String(3) | Bank code for VA
is_open | Boolean | True means VA number can accept any amount, False means VA number only accept the specified amount in the field amount
is_single_use | Boolean | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Long | Expiration time of VA on Unix timestamp in milliseconds, -1 means no expiration time.
va_status | String(16) | Status of VA, see [VA Status](#static-va-status)
username_display | String(255) | Customizable VA display name that will be seen by user, If empty willl be using partner username
partner_user_id | String(255) | Partner unique ID for specific user,
trx_expiration_time | Long | Transaction expiration time on Unix timestamp in milliseconds, -1 means no expiration time.
partner_trx_id | String(255) | Partner unique Transaction ID for specific transaction
trx_counter | Int | Transaction counter to limit number of transaction that can be receive by va number, if empty will be use default value -1 for multiple use va, and 1 for single use va. If counter reach zero, va cannot be inquiry or accept payment.


## Update VA

Update VA using unique VA id.

```shell
curl --location --request PUT https://partner.oyindonesia.com/api/static-virtual-account/1414255-12121-21212121-212121
--header 'content-type: application/json' \
--header 'accept: application/json' \
--header 'x-oy-username: username' \
--header 'x-api-key: apikey' \
-d '{"is_open" : true,"amount": 50000,"is_single_use" : false,"expiration_time": 30,"username_display" : "test","bank_code": "002","trx_expiration_time":5,"partner_trx_id":"TRX0002"}'
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
    "partner_user_id": "12345677",
    "trx_expiration_time": 1582802205412,
    "partner_trx_id": "TRX0002",
    "trx_counter": 1
}
```

### HTTPS Request
`PUT BASE_URL/api/static-virtual-account/<ID>`

### URL Parameter
Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
ID | String(36) | TRUE | - | Unique VA ID, you can get this once you success created VA

### Request Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
amount | BigDecimal | FALSE | - | Amount your user must paid to complete the transaction
is_open | Boolean | FALSE | true | True means VA number can accept any amount, field `amount` can be optional, False means VA number only accept the specified amount in the field amount. When you set `is_open` to false, you must specify amount field.
is_single_use | Boolean | FALSE |  false | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Long | FALSE | - | Expiration time of the VA in minutes, if empty VA will be expired in 24 hour
username_display | String | - | - | Customizable VA display name that will be seen by user, If empty willl be using partner username
is_lifetime | Boolean | FALSE | - | false | If it is set to FALSE (default) then VA will expire based on the expiration time. Otherwise, it will remain active.
email | String(50) | FALSE | - | Email of user, using email standard format
trx_expiration_time | Long | FALSE | - | Transaction expiration time in minutes, e.g If Transaction want to be expired after 5 minutes, you just have to set expiration_time to 5. 
partner_trx_id | String(255) | - | Partner unique Transaction ID for specific transaction
trx_counter | Int | FALSE | -1/1 | Update transaction counter to limit number of transaction that can be receive by va number

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | String |  Unique VA id
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`
amount | BigDecimal | Amount of VA transaction
va_number | String(20) | Generated VA number
bank_code | String(3) | Bank code for VA
is_open | Boolean | True means VA number can accept any amount, False means VA number only accept the specified amount in the field amount
is_single_use | Boolean | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Long | Expiration time of VA on Unix timestamp in milliseconds, -1 means no expiration time.
va_status | String(16) | Status of VA, see [VA Status](#static-va-status)
username_display | String(255) | Customizable VA display name that will be seen by user, If empty willl be using partner username
partner_user_id | String(255) | Partner unique ID for specific user
trx_expiration_time | Long | Transaction expiration time on Unix timestamp in milliseconds, -1 means no expiration time.
partner_trx_id | String(255) | Partner unique Transaction ID for specific transaction
trx_counter | Int | Transaction counter to limit number of transaction that can be receive by va number, if empty will be use default value -1 for multiple use va, and 1 for single use va. If counter reach zero, va cannot be inquiry or accept payment.

## Get list of created VA

Get list of created VA

```shell
curl --location --request GET https://partner.oyindonesia.com/api/static-virtual-account?offset=0&limit=10
--header 'content-type: application/json' \
--header 'accept: application/json' \
--header 'x-oy-username: username' \
--header 'x-api-key: apikey'
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
            "partner_user_id": "12345",
            "trx_expiration_time": 1582802205412,
            "partner_trx_id": "TRX0002"
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
            "partner_user_id": "54321",
            "trx_expiration_time": 1582802205412,
            "partner_trx_id": "TRX0002"
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
curl --location --request GET https://partner.oyindonesia.com/api/va-tx-history/12345676788898?offset=0&limit=10
--header 'content-type: application/json' \
--header 'accept: application/json' \
--header 'x-oy-username: username' \
--header 'x-api-key: apikey'
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
Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
ID | String(36) | TRUE | - | Unique VA ID, you can get this once you success created VA

### Request Parameters
Parameter | Type | Required | Default | Description
--------- | ---- | ---------- | -------- | ------- | -----------
offset | Integer | FALSE | 0 | start offset, default is 0, if empty will used default value
limit | Integer | FALSE | 10 | max item to fetch, default is 10, if empty will used default value

### Response Parameters
Parameter | Type | Description
--------- | ---- | -----------
id | Integer | Unique VA id
status | Object | Status of response in Object `{code: <status_code>, message: <status_message>}`
data  | Array of Object  | List of Object `{id:  <id>, created: <created>, name: <name>, amount: <amount>, create_by: <create_by>, last_update_by: <last_update_by>, last_updated: <last_updated>, admin_fee: <admin_fee>, va_number: <va_number>}`
numberOfTransaction  | Integer | Total transaction

## Partner Callback Va Aggregator

> Response callback:

```json
{
	"va_number": "1234567",
	"amount": 100000,
	"partner_user_id": "oy0000000001",
	"success": true,
    "tx_date" : "31/01/2020T01:01:01.000+0000",
    "username_display": "VA Name",
    "trx_expiration_date": "31/01/2020T01:01:01.000+0000",
    "partner_trx_id": "TRX0002"
}
```

Once user successfully do the payment, our system will make a callback to your system

### Callback Parameters

Parameter | Type | Description
--------- | ---- | -----------
va_number | String(20) | Generated VA number
amount | BigDecimal | Amount of VA transaction
partner_user_id | String(255) | Your unique ID for specific user
success | boolean | Payment status if success or not
tx_date | Timestamp | Incoming payment transaction date, format `dd/MM/yyyy'T'HH:mm:ss.SSSZZZZ`
username_display | String(255) | Customizable VA display name that will be seen by user, If empty willl be using partner username
trx_expiration_date | Long | Transaction expiration date, format `dd/MM/yyyy'T'HH:mm:ss.SSSZZZZ`
partner_trx_id | String(255) | Partner unique Transaction ID for specific transaction


## VA aggregator Bank Code
### Available Bank for VA aggregator
Bank Code | Bank Name
--------- | ---------
002 | Bank BRI
013 | Bank Permata
022 | Bank CIMB Niaga
008 | Bank Mandiri
009 | Bank BNI
014 | Bank BCA

## List of Documents
To enable VA Bank BCA, we need partner to send documents using email, directly to our business representative. 

### Common Documents
No | Document
--- | ---------
1 | Taxpayer Registration Number
2 | National ID

### Documents for Foundation, or Donation Partner
No | Documents
--- | ---------
1 | Akta Pendirian Perusahaan
2 | Keputusan Dewan Pembina Yayasan
3 | Persetujuan Menhumham
4 | Taxpayer Registration Number Organization
5 | Izin Usaha
6 | Surat Keterangan Domisili
7 | Sertifikat Yayasan

### Documents for Other Company 
No | Documents
--- | ---------
1 | Trade Business License
2 | Company's Deed
3 | Company Registration Certificate
4 | Decree of Minister Justine and Human Right

## VA aggregator Status
### Available Status for VA aggregator
Status | Description
------ | -----------
WAITING_PAYMENT | This status means that VA is active and can receive a payment
PAYMENT_DETECTED | This status means that there are incoming payment to VA Number
EXPIRED | This status means that VA is expired. You cannot accept or make update to VA Number with this status.
STATIC_TRX_EXPIRED | This status means that Transaction is expired. If VA have a unlimited lifetime, you can create a new transaction using update va info.
COMPLETE | This status means that VA is closed/complete after get incoming payment. You cannot accept or make update to VA Number with this status. Only Static VA with attribute `is_single_use` true can have this status.
