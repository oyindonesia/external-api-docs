# Fund Acceptance (Coming Soon)

There are two products that fall under the category of funds acceptance which are Payment Checkout and Invoicing. 

Payment Checkout product will allow you to receive funds from your customers by choosing from our various payment channels such as bank transfer or credit/debit card. 

Similarly, Invocing will let you to bill your customers for service/items purchased by sending a payment checkout link to your customer's email by attatching/creating an invoice via our API.

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
        "success": true;
        "url": "https://pay.oyindonesia.com/v2?743826nfo3897hfdk$#113334
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
        "success": true;
        "url": "https://pay.oyindonesia.com/v2?783465983fnvsnjk73fsdf
        "email_status" : "delivered"
}


```

### Request Parameters

*Note: all parameters from API Create (Payment Checkout) are still applicable. Below is the list of the additional specific parameters for Invocing product.

Parameters | Type | Description | Limitation
---- | ---- | ------ | -------
full_name | String | The customer's full name. | -
partner_user_id | String | Username assigned to the customer by partner. | - 
is_va_lifetime | Boolean | To enable VA static confirugation for a payment . | If this is set as true and the partner_user_id is already associated to specific VAs, then the same VA numbers will be used for this partner_tx_id instead of generating new VA number. Partner_user_id and VA payment method must be specified to use this parameter.
invoice_items | List | List of items to be invoiced that can be generated via API in the following format: [item name, description, quantity, date of purchase, price per item ]  | -
attachments | - | Upload attachment to be sent by email and can be downloaded via the webview | -

## API Create (Recurring Invoice)

To be updated
