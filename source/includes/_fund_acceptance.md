# Fund Acceptance (Coming Soon)

There are two products that fall under the category of funds acceptance which are Payment Checkout and Invoicing. 

Payment Checkout product will allow you to receive funds from your customers by choosing from our various payment channels such as bank transfer or credit/debit card. 

Similarly, Invoicing will let you to bill your customers for service/items purchased by sending a payment checkout link to your customer's email by attatching/creating an invoice via our API.

All payment link and/or details can be monitored by using our dashboard and various API endpoints. 

## API Create (Payment Checkout)

An endpoint to create payment checkout URL which return parameters by encapsulation.

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/payment-checkout/create \
  -H 'cache-control: no-cache' -H 'content-type: application/json' \
  -H 'x-api-key: apikeymu' -H 'x-oy-username: yourusername' \
  -d '{"username":"testaccount","partner_tx_id":"ABC123456527","sender_name":"Roberto F",
        "sender_note":"bill payment","sender_phone": "082114845847", "amount":75000,"is_open":false,"step":"select-payment-method",
        "list_disabled_payment_methods":"CC"; "DC" , "list_enabled_payment_banks": "008"; "014", "included_admin_fee": true, "expiration": 7,
        "description":"payment for March 2020"
    }'
```

### HTTPS Request

POST `https://partner.oyindonesia.com/api/payment-checkout/create`

> Json Response

```json
{
        "success": true,
        "url": "https://pay.oyindonesia.com/v2?743826nfo3897hfdk113334"
}
```

### Request Headers

Parameters | Type | Description
---- | ---- | ----
x-api-key | String | API Key for establishing connection to this particular endpoint
x-oy-username | String | The registered partner username which access is enabled for payment checkout product

### Request Parameters

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
username | String | The username used by partner for registration with OY! | -
partner_tx_id | String | A unique transaction ID provided by partner. | A partner_tx_id that has been succesfully paid cannot be used anymore under the same username and only accepts alphanumerics.
amount | Integer | The amount of a transaction to be paid. | The amount that can be processed is between IDR 15,000 and IDR 25,000,000.
sender_name | String | Name of the payer for a transaction. | Only accepts alphabets (A-Z) and space as input and cannot be empty.
sender_phone | Numeric | Phone number of the payer for a transaction. | Do not use special character (e.g. "+") and cannot be empty.
sender_note | String | Additional notes from the payer for a transaction. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
description | String | Description of the payment checkout link. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
email | String | The email address where the payment checkout link will be sent to. | - 
include_admin_fee | Boolean | Admin fee will be added to the specified amount or amount inputted by user if this parameter is set as TRUE. | -
list_disabled_payment_methods | String | To configure payment methods to be disabled (e.g. VA, CC, DC) | There must be at least 1 payment method is enabled.
list_enabled_banks | String | To configure banks to be enabled for VA payment method. | -
expiration | Integer | To set the expiration of the payment link in day(s). | -
is_open	| Boolean | Enable open/closed amount transaction method. | If is_open = TRUE and the amount parameter is defined, then a payer can pay any amount (greater than IDR 15,000) up to the defined amount. And in the case that is_open=false, then the amount and partner_tx_id parameters must be defined. Once a partner_tx_id has ever been defined with is_open=false, the amount and the is_open parameters cannot be updated unless the transaction is completed for that particular partner_tx_id.
step | String | Accessing specific page of the payment checkout URL. Possible values for this parameter are either (input-amount, input-personal-info, select-payment-method). | If step = input-personal-info then the amount parameter must be defined. And if step = select-payment-method then the amount and sender_name parameters must be defined.


### Response Parameters
Parameter | Type | Description
---- | ---- | ----
success | Boolean | The username used by partner for registration with OY!
url | String | A unique transaction ID provided by partner

## API Create (Invoicing)

Our Invoicing product is leveraging most parameters that are defined for our payment checkout in the above section with some additional parameters that are only applicable for Inovicing product. 

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/TBD\
  -H 'cache-control: no-cache' -H 'content-type: application/json' \
  -H 'x-api-key: apikeymu' -H 'x-oy-username: yourusername' \
  -d '{"username":"testaccount","partner_tx_id":"ABC123456527","sender_name":"Roberto F",
        "sender_note":"bill payment","sender_phone": "082114845847", "amount":75000,"is_open":false,"step":"select-payment-method",
        "list_disabled_payment_methods":"CC"; "DC" , "list_enabled_payment_banks": "008"; "014", "included_admin_fee": true, "expiration": 7,
        "description":"payment for March 2020", "partner_user_id": "merchant A", "is_va_lifetime" : true , "email" : "johnsmith@example.com"
    }'
```

### HTTPS Request

POST `https://partner.oyindonesia.com/api/TBD`

> Json Response

```json
{
        "success": true,
        "url": "https://pay.oyindonesia.com/v2?783465983fnvsnjk73fsdf",
        "email_status" : "delivered"
}
```

### Request Parameters

*Note: all parameters from API Create (Payment Checkout) are still applicable. Below is the list of the additional specific parameters for Invoicing product.

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
full_name | String | The customer's full name. | -
partner_user_id | String | Username assigned to the customer by partner. | - 
is_va_lifetime | Boolean | To enable VA static confirugation for a payment . | If this is set as true and the partner_user_id is already associated to specific VAs, then the same VA numbers will be used for this partner_tx_id instead of generating new VA number. Partner_user_id and VA payment method must be specified to use this parameter.
invoice_items | List | List of items to be invoiced that can be generated via API in the following format: [item name, description, quantity, date of purchase, price per item ]  | -
attachments | - | Upload attachment to be sent by email and can be downloaded via the webview | -

## API Create (Recurring Invoice)

This endpoint is to enable the capability to send recurring invoice with the same invoice configuration (e.g. payment method, amount, attachments) via email.

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/TBD\
  -H 'cache-control: no-cache' -H 'content-type: application/json' \
  -H 'x-api-key: apikeymu' -H 'x-oy-username: yourusername' \
  -d '{"username":"testaccount","partner_tx_id":"ABC123456527","sender_name":"Roberto F",
        "sender_note":"bill payment","sender_phone": "082114845847", "amount":75000,"is_open":false,"step":"select-payment-method",
        "list_disabled_payment_methods":"CC"; "DC" , "list_enabled_payment_banks": "008"; "014", "included_admin_fee": true, "expiration": 7,
        "description":"payment for March 2020", "partner_user_id": "merchant A", "is_va_lifetime" : true , "email" : "johnsmith@example.com",
        "recurring_start_date" : "10/11/2020", "recurring_end_date": "10/11/2021", "recurring_frequency": 30
    }'
```

### HTTPS Request

POST `https://partner.oyindonesia.com/api/TBD`

> Json Response

```json
{
        "success": true,
        "url": "https://pay.oyindonesia.com/v2?98999987uydfuiwk73636hehnrm",
        "email_status" : "delivered"
}
```

### Request Parameters

*Note: all parameters from API Create (Payment Checkout and Invoicing) are still applicable. Below is the list of the additional specific parameters for Recurring Invoice feature.

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
recurring_start_date | String | Defining the date when the first invoice will be sent. | -
recurring_end_date | String | Username assigned to the customer by partner. | - 
recurring_frequency | Integer | The interval of a recurring invoice to be sent to customers (in days). | -

## Callback Parameters

The data on the callback will be sent using JSON format via POST data to your web hook.
Check here for example: [example](/?json#payment-result-callback-v2)

Parameter | Type | Description
--------- | ---- | -----------
partner_tx_id | String | A unique transaction ID provided by partner
tx_ref_number | String | OY's internal unique transaction ID
amount | BigDecimal | The amount of a transaction that is paid
sender_name | String | Name of a payer for a transaction
sender_phone | String | Phone number of a payer for a transaction
sender_note | String | Additional notes from a payer for a transaction
status | String | The status of a transaction (e.g. success/failed/processing)
sender_bank | String | The bank code used by a payer to do payment
payment_method | String | The payment method used in a transaction such as CC (Credit Card), DC (Debit Card) or VA (Virtual Account)
va_number | String | VA number to be used on payment if using Virtual Account
settlement_type | String | Indicate if a transaction will be settled in realtime/non-realtime
created | DateTime | The timestamp which indicates the creation time of a payment checkout link
updated | DateTime | The timestamp which indicates the latest updated time of a payment checkout link due to status update

## Callback Response Codes

Payment Status | Type | Payment Method | Description
---- | ---- | ---- | ----
waiting_payment | String | Bank Transfer | Payer triggers a payment status check for an unpaid VA
expired_va | String | Bank Transfer | An unpaid VA has expired and payer can retry a payment
charge_in_progress | String | Card | OTP for card payment method has been succesfully entered and processed
charge_sucess | String | Bank Transfer/Card | A payment has been successfully received by OY
charge_failed | String | Card | OTP for card payment method has been succesfully entered but payment is rejected
disburse_in_progress | String | Bank Transfer/Card | For "Realtime" settlement option, disbursement is currently in progress to partner's registered bank account
complete | String | Bank Transfer/Card | For "Realtime" settlement option, disbursement has been succesfully executed and received by partner
closed | String | N/A | Payment checkout link is deleted

## API Callback

An endpoint to retrieve and/or re-send the latest callback status of a transaction. We can also provide a static IP for the callback to ensure the callback sent is from OY that can be whitelisted by partners.

Please contact us to submit a request of an API Key and IP whitelisting.

### HTTPS Request

GET `https://partner.oyindonesia.com/api/payment-checkout/status`

> To retrieve a callback result for a particular transaction, use following code from your platform:

```shell
curl -X GET 'https://partner.oyindonesia.com/api/payment-checkout/status?partner_tx_id=OY123456&send_callback=false' -H 'x-oy-username:yourusername' -H ' x-api-key:yourapikey'
```

> The above command returns JSON structured similar like this:

```json
{
  "partner_tx_id": "partner000001",
  "tx_ref_number": "1234567",
  "amount": 15000,
  "sender_name": "Joko Widodo",
  "sender_phone": "+6281111111",
  "sender_note": "Mohon dikirim segera",
  "status": "success",
  "settlement_type": "realtime",
  "sender_bank": "008",
  "payment_method": "DC",
  "va_number" : ""
}
```

### Request Headers

Parameters | Type | Description
---- | ---- | ----
x-api-key | String | API Key for establishing connection to this particular endpoint
x-oy-username | String | The registered partner username which access is enabled for payment checkout product

### Request Parameters

Parameters | Type | Description
---- | ---- | ----
partner_tx_id | String | A unique transaction ID which callback status to be checked
send_callback | Boolean | A flag to indiciate if the latest callback of a transaction need to be re-sent or not

### Response Parameters
Parameter | Type | Description
---- | ---- | ----
partner_tx_id | String | A unique transaction ID provided by partner
tx_ref_number | String | OY's internal unique transaction ID
amount | BigDecimal | The amount of a transaction that is paid
sender_name | String | Name of a payer for a transaction
sender_phone | String | Phone number of a payer for a transaction
sender_note | String | Additional notes from a payer for a transaction
status | String | The status of a transaction
sender_bank | String | The bank code used by a payer to do payment
payment_method | String | The payment method used in a transaction such as CC (Credit Card), DC (Debit Card) or VA (Virtual Account)
va_number | String | VA number to be used on payment if using Virtual Account
settlement_type | String | Indicate if a transaction will be settled in realtime/non-realtime
created | String | The timestamp which indicates the creation time of a payment checkout link
updated | String | The timestamp which indicates the latest updated time of a payment checkout link due to status update

## API Delete

An endpoint to delete a payment/invoice URL that is still active and a payment method has not been selected.

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/TBD\
  -H 'cache-control: no-cache' -H 'content-type: application/json' \
  -H 'x-api-key: apikeymu' -H 'x-oy-username: yourusername' \
  -d '{"partner_tx_id":"ABC123456527","reason": "wrong partner tx id assignment"
    }'
```

### HTTPS Request

POST `https://partner.oyindonesia.com/api/payment-checkout/TBD`

> The above command returns JSON structured similar like this:

```json
{
  "created_time" : "08/07/2020 15:32:22",
  "updated_time" : "15/07/2020 21:22:13",
  "status" : "Closed"
}
```

### Request Parameters

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
created_time | String | The timestamp when the URL is created. | -
updated_time | String | The timestamp when the URL is closed. | - 
status | Integer | The status indicator that a URL has been successfully closed. | -

