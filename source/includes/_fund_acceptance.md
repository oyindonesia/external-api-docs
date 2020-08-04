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

Postman is a HTTP client for testing web services which makes it easy to test APIs by providing a simple interface for making API requests and viewing responses. The easiest way to get started using our API is to use our Postman Collection. 

Postman is a free client application that enables you to make calls using API easily. To make integrating with our API easier, we have created Postman Collection of all our endpoints so that you can test our APIs more easily. You can get how to install Postman in [here](https://www.postman.com/downloads/)

### Import OY! Fund Acceptance Postman Collection in Postman

* Open Postman. Find Import button on the upper left corner and click Import
* Select Import from Link and paste this [URL](https://www.getpostman.com/collections/36bb9f0160c5e40c4893)
* Once imported, navigate to Collections tab on left sidebar and you can see a folder name Payment Checkout Postman that contains all Fund Acceptance APIs.

![import](images/postman_checkout_import_link.png)

### Authorize Your Account to Perform API Call

You can authorize your account by provide your OY! Fund Acceptance Username and API Key. Contact Us to obtain your API Key. Once you get your API Key follow this step:

* Open Postman and select any API in Payment Checkout Postman collection you would like to try (in this tutorial, let’s select GET DETAIL PAYMENT / INVOICE API)
* Once you have selected GET GET DETAIL PAYMENT / INVOICE API, navigate to Header tab. Add **Content-Type** with **application/json**, **X-Oy-Username** with your username and **X-Api-Key** with your **API Key**
* You have now authorized your API! You can find Authorization field alongside its value in Header tab > Temporary Header section to verify the result

![header](images/postman_checkout_header.png)

### Create Environment in Postman

To skip authorization processs for each API call, you can create a new environment to save your authorization credentials for future usage. Here’s how you can do it

* In Postman, navigate to Header tab. Find and copy Authorization value in Temporary Headers section
* Navigate to the upper right corner to find and click gear icon

![header](images/postman_checkout_add_environtment.png)

* In the Manage Environment window, add a name to the environment (let’s name it OY! Payment for now)
* Type **base_url** in Variable column and paste your **https://partner.oyindonesia.com** value in Current Value column
* Type **username** in Variable column and paste your **username** value in Current Value column
* Type **apiKey** in Variable column and paste your **API Key** value in Current Value column

![header](images/postman_checkout_setup_environtment.png)

* Click Add / Update button to save
* Close Manage Environment window
* On the left side of the gear icon, select your new OY! Payment environment
* Select an API and navigate to Header tab. Change your **username** value to **{{username}}**
* Change your **API Key value** to **{{api_key}}**

![header](images/postman_checkout_finish_environtment.png)


### Make Your First API Call

Try getting payment or invoice detail by hitting the blue Send button. In the response area below, you should get payment latest information. If you can get payment information successfully, you are all set up! Feel free to explore our other APIs by selecting it in the collection and launching it

![header](images/postman_checkout_detail.png)
