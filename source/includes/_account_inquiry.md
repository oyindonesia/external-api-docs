# Account Inquiry

Account Inquiry APIs allow you to get beneficiary account details.

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
    "invoice_id": null
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
invoice_id | String | ID of the invoice related to the inquiry result. Notes: This will be `null` until the payment feature for inquiry has been released.
timestamp | Timestamp | Timestamp api hit on UTC+7 (Format: `yyyy-MM-ddTHH:mm:ss`)
