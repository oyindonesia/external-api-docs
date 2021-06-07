# API Transactions Data

API Transactions Data allows you to retrieve your user bank account statement data whom has successfully linked their bank account(s) to OY 

![import](images/api_tx_data_flow.png)

## Account Linking Process

```shell
curl --location --request \
POST 'https://partner.oyindonesia.com/api/transaction-data/account/register' \
--header 'X-Api-Key: 1234' \
--header 'x-oy-username: satsat' \
--header 'Content-Type: application/json' \
--data-raw '{
    "partner_user_id": "username0001"
}'
```

> The above command returns JSON structured similar like this:

```json
{
   {
    "registration_link": "register-transactions.oyindonesia.com/register-transactions/a3cfeaf9c84047708545cbd650b47afe",
    "token": "a3cfeaf9c84047708545cbd650b47afe",
    "status": {
        "code": "000",
        "message": "Success"
    }
}
}
```

Use this API to link a bank account so it's historical transaction data can be retrieved.


### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/transaction-data/account/register`<br>
**[Staging]** `UPCOMING`

### Header Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
X-Oy-Username | String | TRUE | Partner username
X-Api-Key | String | TRUE | Partner API Key

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_user_id | String | TRUE | A unique identifier of a user which transaction data will be retrieved


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
registration_link | String | Registration link
token | String | Registration link token to validate the registration link
status | Object | Status of request registration link `{code: <status_code>, message: <status_message>}`

Once a link is returned with its temporary token, user will need to access the link and input their banking credentials by checking the consent check box for the product’s terms and condition and clicking the “Register” button.

User will be prompted with a page to notify that the linking process is still in progress since the process might take a few minutes. User can safely close the pop-up and linking status can be checked using [API Check Registration Status endpoint](#check-registration-status).

### List of Response Codes 

Code | Description
---- | -----------
000 | Success
201 | User is not found
202 | User is not active
207 | IP Address is not registered
208 | API Key is not valid
900 | Unexpected error

## Check Registration Status

```shell
  curl --location --request \
  POST 'https://partner.oyindonesia.com/api/transaction-data/account/check-registration-status' \
--header 'X-Api-Key: 1234' \
--header 'x-oy-username: satsat' \
--header 'Content-Type: application/json' \
--data-raw '{
    "registration_token": "a3cfeaf9c84047708545cbd650b47afe"
}'
```

> The above command returns JSON structured similar like this, when token on the payload is invalid:

```json
{
    "permanent_token": null,
    "status": {
        "code": "237",
        "message": "Temporary token is invalid"
    }
}
```

> The above command returns JSON structured similar like this, when the registration is in process:

```json
{
    "permanent_token": null,
    "status": {
        "code": "102",
        "message": "Request is In progress"
    }
}
```

> The above command returns JSON structured similar like this, when the registration is success:

```json
{
    "permanent_token": "f2eaf327ec23dac249d82dc75734941b5e3752f9583ab5752ca9292d6d4eb1dc",
    "status": {
        "code": "000",
        "message": "Success"
    }
}
```

Use this API to check the status of a bank account registration/linking process

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/transaction-data/account/check-registration-status`<br>
**[Staging]** `UPCOMING`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
registration_token | string | TRUE | Registration token

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
permanent_token | String | The token to be used to retrieve users' banking historical transaction data
status | Object | The status of a bank account registration/linking process `{code: <status_code>, message: <status_message>}`

### List of Response Codes

Code | Description
---- | -----------
000 | Success
102 | In progress
201 | User is not found
202 | User is not active
207 | IP Address is not registered
208 | API Key is not valid
237 | Invalid temporary token
300 | Failed
900 | Unexpected error

## List of Registered Accounts

```shell
  curl --location --request \
  POST 'https://partner.oyindonesia.com/api/transaction-data/account/registered-accounts' \
--header 'X-Api-Key: 1234' \
--header 'x-oy-username: satsat' \
--header 'Content-Type: application/json' \
--data-raw '{
    "partner_user_id": "username0001"
}'
```

> The above command returns JSON structured similar like this:

```json
{
    "data": [
        {
            "bank_code": "014",
            "account_numbers": [
                "0952736319"
            ],
            "permanent_token": "69e6a50a90d71f2191aab78b1a184acbb96b898a0b0833361cc45e9a0b5d7fcb",
            "linking_date": "2021-04-30 03:11:03",
            "account_status": "ACTIVE",
            "account_type": "INDIVIDUAL"
        },
        {
            "bank_code": "014",
            "account_numbers": [
                "0952736319"
            ],
            "permanent_token": "d2f61174a3c0c98c8f736a964e13b06865bde95cf88aebc264732593ebfe4a1e",
            "linking_date": "2021-04-29 06:47:45",
            "account_status": "ACTIVE",
            "account_type": "INDIVIDUAL"
        },
    ],
    "status": {
        "code": "000",
        "message": "Success"
    }
}
```

Use this API to retrieve bank accounts related information of a user ID that has been successfully linked to a user ID

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/transaction-data/account/registered-accounts`<br>
**[Staging]** `UPCOMING`

### Header Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
X-Oy-Username | String | TRUE | Partner username
X-Api-Key | String | TRUE | Partner API Key

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
partner_user_id | String | TRUE | A unique identifier of a user which transaction data will be retrieved

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
data | array of Object | Array of registered account data `{ bank_code: string, bank_account_number: string[], permanent_token: string linking_date: string, account_status: string }`
status | Object | The status of a bank account registration/linking process `{code: <status_code>, message: <status_message>}`


### List of Response Codes

Code | Description
---- | -----------
000 | Success
201 | User is not found
202 | User is not active
207 | IP Address is not registered
208 | API Key is not valid
244 | Invalid partner user id
900 | Unexpected error

## Bank Codes

These are the lis of available bank on our API Transactions Data service:

Bank Code | Bank Name | Limitation
--------- | --------- | ----------
008 | Mandiri | Maximum of 12 months historical account statement data
014 | BCA | Maximum of 3 months historical account statement data
009 | BNI | Maximum of 6 months historical account statement data

## Initialize Account Statement

```shell
  curl --location --request \
  POST 'https://partner.oyindonesia.com/api/transaction-data/account-statement/init' \
--header 'X-Api-Key: 1234' \
--header 'X-Oy-Username: satsat' \
--header 'Content-Type: application/json' \
--data-raw '{
    "account_number": "8691502376",
    "bank_code": "014",
    "account_type": "INDIVIDUAL",
    "start_date": "2021-02-13",
    "end_date": "2021-04-13",
    "permanent_token": "f2eaf327ec23dac249d82dc75734941b5e3752f9583ab5752ca9292d6d4eb1dc",
    "ignore_start_date": true
```

> The above command returns JSON structured similar like this, when success:

```json
{
    "account_statement_id": "ljhahd12je8sdca93",
    "status": {
        "code": "102",
        "message": "Preparing data"
    }
}
```

> The above command returns JSON structured similar like this, when failed:

```json
{
    "account_statement_id": null,
    "status": {
        "code": "101",
        "message": "Bank account not found"
    }
}
```

Use this API to initialize the account statement data to be fetched. Upon successful account statement initialization, Partner will receive a callback that a data is ready.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/transaction-data/account-statement/init`<br>
**[Staging]** `UPCOMING`

### Header Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
X-Oy-Username | String | TRUE | Partner username
X-Api-Key | String | TRUE | Partner API Key

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
bank_code | String | TRUE | The bank code of the user's bank account (please refer to [the Bank Codes section](#bank-codes))
account_type | String | TRUE | Type of bank accounts (currently only "Individual" is available)
account_number | String | TRUE | The account number which data will be retrieved that has been successfully linked
start_date | String | TRUE | Start date of account statement in "YYYY-MM-dd" format
end_date | String | TRUE | End date of account statement in "YYYY-MM-dd" format
permanent_token | String | TRUE | Permanent token to access credentials related to account number


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
account_statement_id | Array of Object | ID of account statement used for fetching the data, if the data is available
status | Object | The status of initialization account statement process `{code: <status_code>, message: <status_message>}`

### List of Response Codes

Code | Description
---- | -----------
000 | Success
101 | Request is processed
201 | User is not found
202 | User is not active
207 | IP Address is not registered
208 | API Key is not valid
211 | Bank code is not available for this service
238 | Invalid permanent token
242 | Start date tx data unavailable
300 | Failed
900 | Unexpected error
990 | Invalid object or parameter

## Get Account Statement

```shell
  curl --location --request \
  POST 'https://partner.oyindonesia.com/api/transaction-data/account-statement/status' \
  --header 'X-Oy-Username: satsat' \
  --header 'x-api-key: 1234' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "id": "eb74c36d-efb3-4b98-97aa-ad23940e4cde",
      "send_callback": false
  }'
```

> The above command returns JSON structured similar like this, when success:

```json
{
  "data": [
    {
        "date": "2021-03-01",
        "description": "Transfer from Aldo Adiyasa",
        "type": "DB",
        "amount": 1000000
    }
  ],
  "status": {
    "code": "103",
    "message": "Data ready for retrieval"
  }
}
```

> The above command returns JSON structured similar like this, when failed:

```json
{
  "data": [],
  "status": {
    "code": "300",
    "message": "Failed"
  }
}
```

> The above command returns JSON structured similar like this, when in progress:

```json
{
  "data": [],
  "status": {
    "code": "102",
    "message": "Preparing data"
  }
}
```

Use this API to fetch transaction details based on initialized account statements


### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/transaction-data/account-statement/mutations?id=[account_statement_id]&page=[page_number]`<br>
**[Staging]** `UPCOMING`

### Header Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
X-Oy-Username | String | TRUE | Partner username
X-Api-Key | String | TRUE | Partner API Key

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | String | TRUE | Id of account statement
page | Integer | TRUE | Pagination offset - each page contains max. of 1000 row of transactions

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
data | Array of Object | List of object `{ date: <timestamp>, id: <id>, description: <description>, type: <CR/DB>, amount: <amount> }`
status | Object | The status of get account statement process `{code: <status_code>, message: <status_message>}`

### List of Response Codes

Code | Description
---- | -----------
000 | Success
101 | Request is processed
201 | User is not found
202 | User is not active
207 | IP Address is not registered
208 | API Key is not valid
209 | Bank account number is not found
211 | Bank code is not available for this service
238 | Invalid permanent token
239 | Account statement is not found
240 | Failed when trying to login to internet banking
242 | Start date tx data unavailable
300 | Failed
900 | Unexpected error
990 | Invalid object or parameter

## Check Account Statement Status/Callback

```shell
  curl --location --request \
  POST 'https://partner.oyindonesia.com/api/transaction-data/account-statement/status' \
  --header 'X-Oy-Username: satsat' \
  --header 'x-api-key: 1234' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "id": "eb74c36d-efb3-4b98-97aa-ad23940e4cde",
      "send_callback": false
  }'
```

> The above command returns JSON structured similar like this:

```json
{
    "total_transactions": 3000,
    "total_pages": 3,
    "status": {
        "code": "103",
        "message": "Data ready for retrieval"
    }
}
```

Use this API to check/re-send callbacks for initialized account statements. This endpoint should also be used to check how many pages an account statement has.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/transaction-data/account-statement/status`<br>
**[Staging]** `UPCOMING`

### Header Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
X-Oy-Username | String | TRUE | Partner username
X-Api-Key | String | TRUE | Partner API Key

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | String | TRUE | Id of account statement
resend-callback | Boolean | TRUE | Flag to indicate if callback need to be resend or not


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
total_transactions |  Integer| Amount of transactions in account statement
total_pages | Integer | Amount of pages in account statement
status | Object | The status of check status of get account statement process `{code: <status_code>, message: <status_message>}`

### List of Response Codes

Code | Description
---- | -----------
000 | Success
101 | Request is processed
201 | User is not found
202 | User is not active
207 | IP Address is not registered
208 | API Key is not valid
209 | Bank account number is not found
211 | Bank code is not available for this service
238 | Invalid permanent token
239 | Account statement is not found
240 | Failed when trying to login to internet banking
242 | Start date tx data unavailable
300 | Failed
900 | Unexpected error
990 | Invalid object or parameter

## Account Deactivate Process

```shell
  curl --location --request \
  POST 'https://partner.oyindonesia.com/api/transaction-data/account/unlink' \
  --header 'X-Api-Key: 1234' \
  --header 'x-oy-username: satsat' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "permanent_token": "f2eaf327ec23dac249d82dc75734941b5e3752f9583ab5752ca9292d6d4eb1dc",
      "partner_user_id": "username0001"
  }'
```

> The above command returns JSON structured similar like this:

```json
{
     "status": {
        "code": "000",
        "message": "Success"
    }
}
```

Use this API to revoke access to a user’s banking credential. This endpoint is mandatory for Partner to provide to its users so they can revoke Partner’s access to user’s banking information at anytime.


### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/transaction-data/account/unlink`<br>
**[Staging]** `UPCOMING`

### Header Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
X-Oy-Username | String | TRUE | Partner username
X-Api-Key | String | TRUE | Partner API Key


### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
permanent_token | String | TRUE | The token that is retrieved after successful linking
partner_user_id | String | TRUE | A unique identifier of a user


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of account deactivate process `{code: <status_code>, message: <status_message>}`

### List of Response Codes

Code | Description
---- | -----------
000 | Success
201 | User is not found
202 | User is not active
207 | IP Address is not registered
208 | API Key is not valid
238 | Invalid permanent token
900 | Unexpected error