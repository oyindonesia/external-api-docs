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

Parameter | Type | Max Length | Required | Default | Description
--------- | ---- | ---------- | -------- | ------- | -----------
partner_user_id | String | 255 | TRUE | - | Your unique ID for specific user
bank_code | String | 3 | TRUE | - | Bank code which the VA number will be generated
amount | BigDecimal | - | FALSE | 0 | Amount your user must paid to complete the transaction, if is_open is false, amount is required.
is_open | Boolean | - | FALSE | true | If set true means VA number can accept any amount, field `amount` can be optional, if set false means VA number only accept the specified amount in the field amount. When you set `is_open` to false, you must specify amount field.
is_single_use | Boolean | - | FALSE | false | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Int | - | FALSE | - | Expiration time of the VA in minutes, if empty VA will be expired in 24 hour
is_lifetime | Boolean | - | FALSE | false | If it is set to FALSE (default) then VA will expire based on the expiration time. Otherwise, it will remain active.
username_display | String | 255 | FALSE | username | VA Name, default is using username
email | String | 50 | FALSE | - | Email of user, using email standard format

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
expiration_time | Int | Expiration time of VA on Unix timestamp in milliseconds, -1 means no expiration time.
va_status | String | Status of VA, see [VA Status](#static-va-status)
username_display | String | VA Name, default is using username


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

Parameter | Type | Max Length | Required | Default | Description
--------- | ---- | ---------- | -------- | ------- | -----------
ID | String | 255 | TRUE | - | Unique VA id, you can get this once you success created VA

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
expiration_time | Int | Expiration time of VA on Unix timestamp in milliseconds, -1 means no expiration time.
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
Parameter | Type | Max Length | Required | Default | Description
--------- | ---- | ---------- | -------- | ------- | -----------
ID | String | 255 | TRUE | - | Unique VA ID, you can get this once you success created VA

### Request Parameters

Parameter | Type | Max Length | Required | Default | Description
--------- | ---- | ---------- | -------- | ------- | -----------
amount | BigDecimal | - | FALSE | - | Amount your user must paid to complete the transaction
is_open | Boolean | - | FALSE | true | True means VA number can accept any amount, field `amount` can be optional, False means VA number only accept the specified amount in the field amount. When you set `is_open` to false, you must specify amount field.
is_single_use | Boolean | - | FALSE |  false | True means that this VA should be closed once there is a successful payment that is being made to this VA. 
expiration_time | Int | - | FALSE | - | Expiration time of the VA in minutes, if empty VA will be expired in 24 hour
is_lifetime | Boolean | - | FALSE | - | false | If it is set to FALSE (default) then VA will expire based on the expiration time. Otherwise, it will remain active.
email | String | 50 | FALSE | - | Email of user, using email standard format

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
expiration_time | Int | Expiration time of VA on Unix timestamp in milliseconds, -1 means no expiration time.
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
Parameter | Type | Max Length | Required | Default | Description
--------- | ---- | ---------- | -------- | ------- | -----------
ID | String | 255 | TRUE | - | Unique VA ID, you can get this once you success created VA

### Request Parameters
Parameter | Type | Max Length | Required | Default | Description
--------- | ---- | ---------- | -------- | ------- | -----------
offset | Integer | - | FALSE | 0 | start offset, default is 0, if empty will used default value
limit | Integer | - | FALSE | 10 | max item to fetch, default is 10, if empty will used default value

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

## Static VA Bank Code
### Available Bank for Static VA
Bank Code | Bank Name
--------- | -------
002 | Bank BRI
013 | Bank Permata
022 | Bank CIMB Niaga
008 | Bank Mandiri
009 | Bank BNI

## Static VA Status
### Available Status for Static VA
Status | Description
------ | -----------
WAITING_PAYMENT | This status means that VA is active and can receive a payment
PAYMENT_DETECTED | This status means that there are incoming payment to VA Number
EXPIRED | This status means that VA is expired. You cannot accept or make update to VA Number with this status.
COMPLETE | This status means that VA is closed/complete after get incoming payment. You cannot accept or make update to VA Number with this status. Only Static VA with attribute `is_single_use` true can have this status.

