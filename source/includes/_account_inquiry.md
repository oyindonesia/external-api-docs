# Account Inquiry

Account Inquiry APIs allow you to get beneficiary account details.
Invoice will be created on the first API hit of the day with status `INITIATED`. The next day, invoice will be updated with status `UNPAID`. `UNPAID` invoice can be paid via payment endpoint. This will update the invoice status to `PAID`

## Account Inquiry

```shell
curl -X POST https://partner.oyindonesia.com/api/account-inquiry 
-H 'content-type: application/json' -H 'accept: application/json' -H 'x-oy-username:myuser' -H 'x-api-key:987654' -d '{"bank_code": "014", "account_number": "1239812390"}'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "bank_code": "014",
    "account_number": "1239812390",
    "account_name": "John Doe",
    "timestamp": "2020-11-19T17:01:17",
    "id": "59e11245-4b36-4ed7-97be-0c501b8ae3c8",
    "invoice_id": "c0503fa6-a5b3-4816-bc07-241473357f58
}
```

Use this API to get beneficiary account details.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/account-inquiry`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-inquiry`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
bank_code | String(3) | TRUE | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
account_number | String(255) | TRUE | Beneficiary account number

### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of inquiry `{code: <status_code>, message: <status_message>}`
bank_code | String | Bank Code of the Beneficiary account, see [Disbursement Bank Codes](#disbursement-bank-codes)
account_number | String | Account Number of the Beneficiary Account
account_name | String | Account Name of the Beneficiary Account
id | String | Unique ID of the inquiry. ID will be provided only for `000` or `209` status. Otherwise, the ID will be `null`.
invoice_id | String | ID of the invoice related to the inquiry result.
timestamp | Timestamp | UTC Timestamp api hit (Format: `yyyy-MM-ddTHH:mm:ss`)


## Get Account Inquiry Invoices

```shell
curl -X GET https://partner.oyindonesia.com/api/account-inquiry/invoices 
-H 'content-type: application/json' -H 'accept: application/json' -H 'x-oy-username:myuser' -H 'x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "total": 3,
    "status": {
        "code": "000",
        "message": "Success"
    },
    "timestamp": "2020-12-03T17:01:17",
    "data": [
        {
            "invoice_id": "e972bfcb-fcc4-4732-8887-91a589a0b54a",
            "tx_date": "2020-12-03",
            "amount": 2000.0000,
            "total_inquiry": 2,
            "paid_at": null,
            "invoice_status": "INITIATED",
            "due_at": "2020-12-04T16:59:59"
        }, {
            "invoice_id": "53f48b8a-1f53-4f56-aa91-7b32414a7513",
            "tx_date": "2020-12-02",
            "amount": 10000.0000,
            "total_inquiry": 10,
            "paid_at": null,
            "invoice_status": "UNPAID",
            "due_at": "2020-12-03T16:59:59"
        }, {
            "invoice_id": "53f48b8a-1f53-4f56-aa91-7b32414a7513",
            "tx_date": "2020-12-01",
            "amount": 10000.0000,
            "total_inquiry": 10,
            "paid_at": "2020-12-02T08:00:00",
            "invoice_status": "PAID",
            "due_at": "2020-12-02T16:59:59"
        }
    ]
}
```

Use this API to get inquiry invoices.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/account-inquiry/inovices?offset=<offset>&limit=<limit>&status=<status>`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-inquiry/invoices?offset=<offset>&limit=<limit>&status=<status>`

### Request Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
offset | Integer | FALSE | 0 | start offset, default is 0, if empty will used default value
limit | Integer | FALSE | 10 | max item to fetch, default is 10, if empty will used default value
status | String | FALSE | | invoice status to fetch. If empty will fetch invoice regardless of the status


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
total | Integer | Total number of invoices per username
status | Object | Status of inquiry `{code: <status_code>, message: <status_message>}`
timestamp | Timestamp | UTC Timestamp api hit (Format: `yyyy-MM-ddTHH:mm:ss`)
data | Array of objects | List of objects `{"invoice_id": <invoice_id>, "tx_date": <tx_date>, "amount": <amount>,"total_inquiry": <total_inquiry>, "paid_at": <paid-at>,"invoice_status": <invoice-status>,"due_at": <due-date>}` <br>- `invoice_id` invoice ID <br>- `tx_date` the UTC+7 date of inquiry transaction from 00:00 UTC+7 until 23:59 UTC+7 <br>- `amount` amount of the invoice<br>- `total_inquiry` the number of inquiries<br>- `paid_at` UTC invoice payment timestamp<br> - `invoice_status` status of the invoice: `INITIATED`, `UNPAID`, or `PAID`<br>- `due_at` UTC due timestamp for the invoice

## Get Account Inquiry Invoice by ID

```shell
curl -X GET https://partner.oyindonesia.com/api/account-inquiry/invoices/e972bfcb-fcc4-4732-8887-91a589a0b54a
-H 'content-type: application/json' -H 'accept: application/json' -H 'x-oy-username:myuser' -H 'x-api-key:987654'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "invoice_id": "e972bfcb-fcc4-4732-8887-91a589a0b54a",
    "tx_date": "2020-12-03",
    "amount": 2000.0000,
    "total_inquiry": 2,
    "paid_at": null,
    "invoice_status": "INITIATED",
    "due_at": "2020-12-04T16:59:59",
    "timestamp": "2020-12-03T17:01:17"
}
```

Use this API to get inquiry invoice by ID.

### HTTPS Request
**[Production]** `GET https://partner.oyindonesia.com/api/account-inquiry/inovices/<id>`<br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-inquiry/invoices/<id>`

### Request Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
id | String | TRUE |  | Invoice ID


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of inquiry `{code: <status_code>, message: <status_message>}`
invoice_id | String | invoice ID
tx_date | String | the UTC+7 date of inquiry transaction from 00:00 UTC+7 until 23:59 UTC+7
amount | String | amount of the invoice
total_inquiry | Integer | the number of inquiries
paid_at | String | UTC invoice payment timestamp
invoice_status | String | status of the invoice: `INITIATED`, `UNPAID`, or `PAID`
due_at | String | UTC due timestamp for the invoice

## Pay Account Inquiry Invoice

```shell
curl -X GET https://partner.oyindonesia.com/api/account-inquiry/invoices/pay
-H 'content-type: application/json' -H 'accept: application/json' -H 'x-oy-username:myuser' -H 'x-api-key:987654' -d '{"invoice_id": "53f48b8a-1f53-4f56-aa91-7b32414a7513"}
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "invoice_id": "53f48b8a-1f53-4f56-aa91-7b32414a7513",
    "tx_date": "2020-12-02",
    "amount": 10000.0000,
    "total_inquiry": 10,
    "paid_at": "2020-12-03T01:01:18",
    "invoice_status": "PAID",
    "due_at": "2020-12-03T17:01:00",
    "timestamp": "2020-12-03T01:01:17"
}
```

Use this API to pay inquiry invoice.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/account-inquiry/inovices/pay`<br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-inquiry/invoices/pay`

### Request Parameters

Parameter | Type | Required | Default | Description
--------- | ---- | -------- | ------- | -----------
invoice_id | String | TRUE |  | Invoice ID


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
status | Object | Status of inquiry `{code: <status_code>, message: <status_message>}`
invoice_id | String | invoice ID
tx_date | String | the UTC+7 date of inquiry transaction from 00:00 UTC+7 until 23:59 UTC+7
amount | String | amount of the invoice
total_inquiry | Integer | the number of inquiries
paid_at | String | UTC invoice payment timestamp
invoice_status | String | status of the invoice: `INITIATED`, `UNPAID`, or `PAID`
due_at | String | UTC due timestamp for the invoice
