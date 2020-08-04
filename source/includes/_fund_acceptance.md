# Fund Acceptance

There are two products that fall under the category of funds acceptance which are Payment Checkout and Invoicing. 

Payment Checkout product will allow you to receive funds from your customers by choosing from our various payment channels such as bank transfer or credit/debit card. 

Similarly, Invoicing will let you to bill your customers for service/items purchased by sending a payment checkout link to your customer's email by attatching/creating an invoice via our API.

All payment link and/or details can be monitored by using our dashboard and various API endpoints. 

## API Create (Payment Checkout)

An endpoint to create payment checkout URL which return parameters by encapsulation.

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/payment-checkout/create-v2 \
  -H 'cache-control: no-cache' -H 'content-type: application/json' \
  -H 'X-Api-Key: apikeymu' -H 'X-Oy-Username: yourusername' \
  -d '{
        "partner_tx_id":"partnerTxId",
        "description":"description",
        "notes":"notes",
        "sender_name":"Sender name",
        "amount":50000,
        "email":"",
        "phone_number":"",
        "is_open":false,
        "step":"input-amount",
        "include_admin_fee":false,
        "list_disabled_payment_methods":"",
        "list_enabled_banks":"",
        "expiration":"2020-08-08 08:09:12"
    }'
```

### HTTPS Request

POST `https://partner.oyindonesia.com/api/payment-checkout/create-v2`

> Json Response

```json
{
        "success": true,
        "url": "https://pay.oyindonesia.com/id",
        "message": "success"
}
```

### Request Headers

Parameters | Type | Description
---- | ---- | ----
X-Api-Key | String | API Key for establishing connection to this particular endpoint
X-Oy-Username | String | The registered partner username which access is enabled for payment checkout product

### Request Parameters

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
partner_tx_id | String | A unique transaction ID provided by partner. | A partner_tx_id that has been succesfully paid cannot be used anymore under the same username and only accepts alphanumerics.
description | String | Description of the payment checkout link. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
notes | String | Notes. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
sender_name | String | Name of the payer for a transaction. | Only accepts alphabets (A-Z) and space as input and cannot be empty.
amount | Integer | The amount of a transaction to be paid. | Minimum amount is IDR 15,000.
email | String | The email address where the payment checkout link will be sent to. | - 
phone_number | Numeric | Phone number of the payer for a transaction. | Do not use special character (e.g. "+")
is_open	| Boolean | Enable open/closed amount transaction method. | If is_open = TRUE and the amount parameter is defined, then a payer can pay any amount (greater than IDR 15,000) up to the defined amount. And in the case that is_open=false, then the amount and partner_tx_id parameters must be defined.
step | String | Accessing specific page of the payment checkout URL. Possible values for this parameter are either (input-amount, input-personal-info, select-payment-method). | If step = input-personal-info then the amount parameter must be defined. And if step = select-payment-method then the amount and sender_name parameters must be defined.
include_admin_fee | Boolean | Admin fee will be added to the specified amount or amount inputted by user if this parameter is set as TRUE. | -
list_disabled_payment_methods | String | To configure payment methods to be disabled (e.g. VA, CREDIT_CARD, DEBIT_CARD) | There must be at least 1 payment method is enabled.
list_enabled_banks | String | To configure banks to be enabled for VA payment method. | List of eligible bank codes: "002" (BRI), "008" (Mandiri), "009" (BNI), "013" (Permata), "022" (CIMB).
expiration | datetime | To set the expiration of the payment link (dd-MM-yyyy HH:mm:ss) | Expiration date will be defaulted to 24 hours if it is not defined.


### Response Parameters
Parameter | Type | Description | Limitation
---- | ---- | ---- | ----
success | Boolean | Action status | true / false
url | String | Payment link which used for payment | -
payment_link_id | String | A unique transaction ID provided by partner | -
message | String | Message response | -

## API Create (Invoicing)

Our Invoicing product is leveraging most parameters that are defined for our payment checkout in the above section with some additional parameters that are only applicable for Inovicing product. 

```shell
curl -X POST \
  https://partner.oyindonesia.com/api/payment-checkout/create-invoice\
  -H 'cache-control: no-cache' -H 'content-type: application/json' \
  -H 'X-Api-key: apikeymu' -H 'X-Oy-Username: yourusername' \
  -d '{
        "partner_tx_id":"partner tx id",
        "description":"desc invoice",
        "notes":"notes satu",
        "sender_name":"Sender Name API",
        "amount":"30000",
        "email":"",
        "phone_number":"",
        "is_open":"true",
        "step":"input-amount",
        "include_admin_fee":false,
        "list_disabled_payment_methods":"",
        "list_enabled_banks":"013",
        "expiration":"2020-07-28 19:15:13",
        "partner_user_id":"partner user id", 
    	  "full_name" : "Raymond",
    	  "is_va_lifetime": false,
        "attachment": "JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDQ5Nj4+c3RyZWFtCnicrZVdb9MwFIbv/SsOd51EwrHjz0tKhxQk2IciJMS4CG46lbVNyYcE/HqcbNloh5xO8U3OUXJ8Hr/2aweBQkQBQRjhnnZLfpJ5RhIJQhjIluQ8I1eEwYfubVeHMFRnW/LmPQWKkK3I7Cz70dU+lfTN/hnE3ChJY9SPA0U3EPvP1S2ZXXx5Bemnzxfpu/OuGcLtfxp+/ebisp+QH8VkrNjhHJ9QaV23xRKyciKIGuCGjYPmv6cq0idKWuRNEYDlV7VoixAgwcdEXeZVsysqyH5BughA88t6uy3bXQNO3XRbCEq9pKr8sw5gPuXT8zGv7/JNCOeh9mAYMoxQRcyEMJ5KRlEmokkI63lVrSgqi8JEWlsV8ZURkRFMR1pILkVuZcJYCEd69V7vY3eZxYj4GvEkGsaMK5SAMTcauYsKje6aObskUsGWaKr7bPOYHUd7/8XIocZlx9H2DfuSh+Qw2AG4GZLDYMlqmLfHEQIS/XyBaOf++5uoqG213jfrcjfVfAYdi/tY0288noxBrpqpvwoh1AjjslrbqUo6j/kpWdnkG7iZpYvrm7MQmyOe045vBhkhDbFFI6gTz6Jvj9zqCd+frz/5MRMvOvyeBUxGRM3bvIHvRZXvmryGu7Jq901ZhTDJqEweC+xlvkTqX6+ILeYKZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8L1RhYnMvUy9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L1R5cGUvR3JvdXAvQ1MvRGV2aWNlUkdCPj4vQ29udGVudHMgMyAwIFIvVHlwZS9QYWdlL1Jlc291cmNlczw8L0NvbG9yU3BhY2U8PC9DUy9EZXZpY2VSR0I+Pi9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXS9Gb250PDwvRjEgMiAwIFI+Pj4+L1BhcmVudCA0IDAgUi9Sb3RhdGUgOTAvTWVkaWFCb3hbMCAwIDU5NSA4NDJdPj4KZW5kb2JqCjUgMCBvYmoKWzEgMCBSL1hZWiAwIDYwNSAwXQplbmRvYmoKMiAwIG9iago8PC9TdWJ0eXBlL1R5cGUxL1R5cGUvRm9udC9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nPj4KZW5kb2JqCjQgMCBvYmoKPDwvS2lkc1sxIDAgUl0vVHlwZS9QYWdlcy9Db3VudCAxL0lUWFQoMi4xLjcpPj4KZW5kb2JqCjYgMCBvYmoKPDwvTmFtZXNbKEpSX1BBR0VfQU5DSE9SXzBfMSkgNSAwIFJdPj4KZW5kb2JqCjcgMCBvYmoKPDwvRGVzdHMgNiAwIFI+PgplbmRvYmoKOCAwIG9iago8PC9OYW1lcyA3IDAgUi9UeXBlL0NhdGFsb2cvUGFnZXMgNCAwIFIvVmlld2VyUHJlZmVyZW5jZXM8PC9QcmludFNjYWxpbmcvQXBwRGVmYXVsdD4+Pj4KZW5kb2JqCjkgMCBvYmoKPDwvTW9kRGF0ZShEOjIwMjAwNzI5MTE1MzE1WikvQ3JlYXRvcihKYXNwZXJSZXBvcnRzIExpYnJhcnkgdmVyc2lvbiBudWxsKS9DcmVhdGlvbkRhdGUoRDoyMDIwMDcyOTExNTMxNVopL1Byb2R1Y2VyKGlUZXh0IDIuMS43IGJ5IDFUM1hUKT4+CmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNTc4IDAwMDAwIG4gCjAwMDAwMDA4NjQgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwOTUyIDAwMDAwIG4gCjAwMDAwMDA4MjkgMDAwMDAgbiAKMDAwMDAwMTAxNSAwMDAwMCBuIAowMDAwMDAxMDY5IDAwMDAwIG4gCjAwMDAwMDExMDEgMDAwMDAgbiAKMDAwMDAwMTIwNCAwMDAwMCBuIAp0cmFpbGVyCjw8L0luZm8gOSAwIFIvSUQgWzwzZWMyMWUyNjkwNjcxYzViYTliNjUxODNhY2IxOTM3ND48NzZhNzM1MWE1YmY4ZmMxNDNmY2NlZmUwYjRjMzA4MWI+XS9Sb290IDggMCBSL1NpemUgMTA+PgpzdGFydHhyZWYKMTM1OAolJUVPRgo=",
    	  "invoice_items": [
          {
            "item":"item name", 
            "description":"description", 
            "quantity": 10, 
            "date_of_purchase":"2020-09-20", 
            "price_per_item": 33000  
          }
        ],
    	  "attachment": "string base 64 pdf"
    }'
```

### HTTPS Request

POST `https://partner.oyindonesia.com/api/payment-checkout/create-invoice`

> Json Response

```json
{
        "success": true,
        "url": "https://pay.oyindonesia.com/invoice/id",
        "message": "success"
}
```

### Request Parameters

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
partner_tx_id | String | A unique transaction ID provided by partner. | A partner_tx_id that has been succesfully paid cannot be used anymore under the same username and only accepts alphanumerics.
description | String | Description of the payment checkout link. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
notes | String | Notes. | Only accepts alphabets (A-Z), numeric (0-9) and space as input.
sender_name | String | Name of the payer for a transaction. | Only accepts alphabets (A-Z) and space as input and cannot be empty.
amount | Integer | The amount of a transaction to be paid. | Minimum amount is IDR 15,000.
email | String | The email address where the payment checkout link will be sent to. | - 
phone_number | Numeric | Phone number of the payer for a transaction. | Do not use special character (e.g. "+").
is_open	| Boolean | Enable open/closed amount transaction method. | If is_open = TRUE and the amount parameter is defined, then a payer can pay any amount (greater than IDR 15,000) up to the defined amount. And in the case that is_open=false, then the amount and partner_tx_id parameters must be defined.
step | String | Accessing specific page of the payment checkout URL. Possible values for this parameter are either (input-amount, input-personal-info, select-payment-method). | If step = input-personal-info then the amount parameter must be defined. And if step = select-payment-method then the amount and sender_name parameters must be defined.
include_admin_fee | Boolean | Admin fee will be added to the specified amount or amount inputted by user if this parameter is set as TRUE. | -
list_disabled_payment_methods | String | To configure payment methods to be disabled (e.g. VA, CREDIT_CARD, DEBIT_CARD) | There must be at least 1 payment method is enabled.
list_enabled_banks | String | To configure banks to be enabled for VA payment method. | List of eligible bank codes: "002" (BRI), "008" (Mandiri), "009" (BNI), "013" (Permata), "022" (CIMB).
expiration | datetime | To set the expiration of the payment link (dd-MM-yyyy HH:mm:ss) | -
partner_user_id | String | Username assigned to the customer by partner. | - 
full_name | String | The customer's full name. | -
is_va_lifetime | Boolean | To enable VA static confirugation for a payment . | If this is set as true and the partner_user_id is already associated to specific VAs, then the same VA numbers will be used for this partner_tx_id instead of generating new VA number. Partner_user_id and VA payment method must be specified to use this parameter.
invoice_items | List | List of items to be invoiced that can be generated via API in the following format: [item, description, quantity, date_of_purchase, price_per_item ]  | -
attachment | - | Upload attachment (string base 64 pdf) and can be downloaded via the webview | There is a maximum limit of 1 PDF attachment (maximum 2 MB) to be uploaded per URL


## API Create (Recurring Invoice) (Coming soon)

This endpoint is to enable the capability to send recurring invoice with the same invoice configuration (e.g. payment method, amount, attachment) via email.

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

## API Payment Status

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
curl -X DELETE \
  https://partner.oyindonesia.com/api/payment-checkout/{payment_link_id}\
  -H 'cache-control: no-cache' -H 'content-type: application/json' \
  -H 'X-Api-key: apikeymu' -H 'X-Oy-Username: yourusername' 
```

### HTTPS Request

DELETE `https://partner.oyindonesia.com/api/payment-checkout/{payment_link_id}`

> The above command returns JSON structured similar like this:

```json
{
  "status" : true,
  "message" : "success"
}
```

### Request Parameters

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
payment_link_id | String | payment_link_id in url param | -

### Response Parameters

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
status | Boolean | Action status | true / false
message | String | Action message | -


## API Get

An endpoint to get a payment/invoice data.

```shell
curl -X GET \
  https://partner.oyindonesia.com/api/payment-checkout/{payment_link_id}\
  -H 'cache-control: no-cache' -H 'content-type: application/json' \
  -H 'X-Api-key: apikeymu' -H 'X-Oy-Username: yourusername'
```

### HTTPS Request

GET `https://partner.oyindonesia.com/api/payment-checkout/{payment_link_id}`

> The above command returns JSON structured similar like this:

```json
{
    "data": {
        "partnerTxId": "partner tx id",
        "paymentLinkId": "35281815-4784-4f55-9a61-090f5c17a191",
        "amount": 30000,
        "username": "username",
        "senderName": "Sender Name",
        "senderPhoneNumber": "sender phone number",
        "senderNotes": "sender note",
        "status": "status",
        "txRefNumber": "tx_ref_number",
        "description": "description",
        "isOpen": true,
        "step": "step",
        "notes": "notes",
        "phoneNumber": "phone number",
        "email": "email",
        "includeAdminFee": false,
        "listDisabledPaymentMethods": "",
        "listEnabledBanks": "",
        "expirationTime": 1595679313000,
        "invoiceData": null
    },
    "message": "return payment checkout data",
    "status": true
}
```

### Request Parameters

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
payment_link_id | String | payment_link_id in url param | -


## POSTMAN

Postman is an of **free** web service testing which provide all web service testing schema. Its **easy**, **fast** and **solid** software for developer to learn and maintain web service contract both from provider and consumer. Many developer use Postman as part of their web service contract testing and reference because Postman has great User Experience.

Postman have collection archiving tech to make us easy to store and sharing to other people to keep data consistency. We provide our Postman Collection to our partner for increase their development and knowledge learning speed. You can get how to install Postman in [here](https://www.postman.com/downloads/)

### Import OY! Fund Acceptance Postman Collection to Postman

* Open Postman. select Import button on the upper left application
* Choose Link Tab and set url value with this [URL](https://www.getpostman.com/collections/36bb9f0160c5e40c4893)
* Collection has been imported named **Payment Checkout Postman** that contains all Fund Acceptance APIs.

![import](images/postman_checkout_import_link.png)

### API Authorization

You must provide your authorization information to us to access our feature. Our authorization consist of **Username** and **API Key**. Contact Us to obtain your API Key. After you get your API Key follow this step:

* Select one of our API in Payment Checkout Postman collection which provided by us. Example. GET DETAIL PAYMENT / INVOICE API
* Open Header tab. Add **Content-Type** with **application/json**, **X-Oy-Username** with your username and **X-Api-Key** with your **API Key**
* Your Autorization header configuration has been complete. You can access all our api list now.

![header](images/postman_checkout_header.png)

### Postman Global Variable Environment

You can reuse all authoorization header confguration with Postman Variable Environment. It will save your time to provide us authorization information. Just follow this step:

* Select gear icon in the upper right corner.

![header](images/postman_checkout_add_environtment.png)

* Give Environment name. Example OY! Payment.
* Add **base_url** in Variable column and set your **https://partner.oyindonesia.com** value in Current Value column
* Add **username** in Variable column and set your **username** value in Current Value column
* Add **apiKey** in Variable column and set your **API Key** value in Current Value column

![header](images/postman_checkout_setup_environtment.png)

* Add / Update button to save
* Select Environment Management on upper Right corner. Left of **eye** icon.
* Choose on of our API and navigate to Header tab. Change your **username** value to **{{username}}**
* Change your **API Key value** to **{{api_key}}**

![header](images/postman_checkout_finish_environtment.png)

You just set your authorization value header with environment variable which already configured.


### Make Your First API Call

Time to try!. Click Send Button which colored blue. Check your response window you will get your payment information response. Once you get your payment information correctly thats sign you are on the right track. You can do same thing with other API. Feel free to contact us if you have a problem to use our Postman Collection.

![header](images/postman_checkout_detail.png)