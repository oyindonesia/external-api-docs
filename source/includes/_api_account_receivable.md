# API Account Receivable

API Account Receivable is the newest feature that allows Partners to manage customers and account receivable invoices via API. The differences between API Account Receivable API and API Invoicing is in the **customer management ability**. By utilizing API Account Receivable, Partners do not need to maintain manual data of the customers anymore when inputting invoice.

## Create New Customer
This endpoint enables the creation of new customers via API. Addition of new customer can also be done via dashboard at your convenience.

### HTTPS Request
**[Production]** `POST https://partner.oyindonesia.com/api/account-receivable/customers` <br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-receivable/customers`

### Request Headers

Parameters | Type | Description
---- | ---- | ----
X-Api-Key | String | API Key for establishing connection to this particular endpoint
X-Oy-Username | String | The registered partner username which access is enabled for payment link product


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
name | String | TRUE | Name of a payer / customer for a transaction
partner_customer_id | String | FALSE | A unique customer ID
tax_type | NO_TAX / PPN_11_INCLUSIVE / PPN_11_EXCLUSIVE / PPN_10_INCLUSIVE / PPN_10_EXCLUSIVE | TRUE | PPN Tax type that is applicable for the customer will be reflected in the invoice
address | String | FALSE | Customer's address
email | String | FALSE | The email address where the payment link will be sent to. Max up to 6 email separated by **;**
pic_name | String | FALSE | Name of the person in charge for handling the invoice
phone_number | String | FALSE | Phone number of the customer for a transaction. Do not use special character (e.g. +).
pph_tax | NO_TAX/ *PPH_23_NON_NPWP* / *PPH_23_NPWP* | TRUE | PPH Tax type that is applicable for the customer will be reflected in the invoice


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, name: <name>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | customer primary id
partner_customer_id | String | Inputted customer id name
status | ACTIVE | Customer's status, first creation always active.
name | String | Name of a customer for a transaction
tax_type | NO_TAX | Result of choosen enum tax type 
address | String | Inputted customer's address
email | String | Inputted customer's email
pic_name | String | Inputted PIC name
phone_number| String | Inputted customer's phone number
pph_tax | PPH_23_NON_NPWP | Result of choosen enum
Status | Object | Status of response in Object {code: <status_code>, message: <status_message>}
code | String | success status code
message | String | success status message for further explanation



## Edit Customer

This endpoint allows update of customer’s data, such as tax information or even deactivation of customer.

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/account-receivable/customers/:id` <br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-receivable/customers/:id`


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
name | String | TRUE | Name of a customer for a transaction
partner_customer_id | String | FALSE | A unique customer ID
tax_type | NO_TAX / PPN_11_INCLUSIVE / PPN_11_EXCLUSIVE / PPN_10_INCLUSIVE / PPN_10_EXCLUSIVE | TRUE | PPN Tax type that is applicable for the customer will be reflected in the invoice
address | String | FALSE | customer's address
email | String | FALSE | The email address where the payment link will be sent to. Max 6 email separate by *;*
pic_name | String | FALSE | Name of the person in charge for handling the invoice
phone_number | String with phone pattern | FALSE | Phone number of the customer for a transaction. Do not use special character (e.g. "+").
pph_tax | NO_TAX / *PPH_23_NON_NPWP* / *PPH_23_NPWP* | TRUE | PPH Tax type that is applicable for the customer will be reflected in the invoice
status | ACTIVE/INACTIVE | TRUE | Changing status from Active to Inactive **only applicable when there is not outstanding invoice**


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, name: <name>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | customer primary id
partner_customer_id | String | Inputted customer id name
status | ACTIVE | Customer's status, first creation always active.
name | String | Name of a customer for a transaction
tax_type | NO_TAX | Result of choosen enum tax type 
address | String | Inputted customer's address
email | String | Inputted customer's email
pic_name | String | Inputted PIC name
phone_number| String | Inputted customer's phone number
pph_tax | PPH_23_NON_NPWP | Result of choosen enum
Status | Object | Status of response in Object {code: <status_code>, message: <status_message>}
code | String | success status code
message | String | success status message for further explanation



## Retrieve Customer's Details

This endpoints allow Partners to retrieve existing customers details.

### HTTPS Request

**[Production]** `PUT https://partner.oyindonesia.com/api/account-receivable/customers/:id` <br>
**[Staging]** `PUT https://api-stg.oyindonesia.com/api/account-receivable/customers/:id`


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, name: <name>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | customer primary id
partner_customer_id | String | Inputted customer id name
status | ACTIVE | Customer's status, first creation always active.
name | String | Name of a customer for a transaction
tax_type | NO_TAX | Result of choosen enum tax type 
address | String | Inputted customer's address
email | String | Inputted customer's email
pic_name | String | Inputted PIC name
phone_number| String | Inputted customer's phone number
pph_tax | PPH_23_NON_NPWP | Result of choosen enum
Status | Object | Status of response in Object {code: <status_code>, message: <status_message>}
code | String | success status code
message | String | success status message for further explanation


## Filter & Search Customers

This endpoint filters customer data based on criteria that can be set through API

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/account-receivable/customers?*parameter*` <br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-receivable/customers?*parameter*`


### Request Parameters

Parameters | Required | Description | Example value
---- | ---- | ------ | -------
limit | FALSE | Number of records that should be returned to the API | 10
offset | FALSE |Filter invoice using customer name, it can be filtering using spesific value or just contain some text | 0
status |FALSE | Filter based on invoice status | Possible value: CREATED, OVERDUE, PAID | CREATED
partner_customer_id | FALSE | partner customer id name |USER001
name | FALSE | partner customer name |Aston
tax_type | FALSE | Filter based on PPN Tax Type | NO_TAX
pph_tax | FALSE | Filter based on PPh Tax Type |PPH_23_NON_NPWP




### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, name: <name>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | customer primary id
partner_customer_id | String | Inputted customer id name
status | ACTIVE | Customer's status, first creation always active.
name | String | Name of a customer for a transaction
tax_type | NO_TAX | Result of choosen enum tax type 
address | String | Inputted customer's address
email | String | Inputted customer's email
pic_name | String | Inputted PIC name
phone_number| String | Inputted customer's phone number
pph_tax | PPH_23_NON_NPWP | Result of choosen enum
Status | Object | Status of response in Object {code: <status_code>, message: <status_message>}
code | String | success status code
message | String | success status message for further explanation



## Create & Send Invoice

This endpoint allows Partners to create Account Receivable Invoice through API and send invoice directly to customers via email.

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com/api/account-receivable/invoices` <br>
**[Staging]** `POST https://api-stg.oyindonesia.com/api/account-receivable/invoices`


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
invoice_number | String | TRUE | Invoice number for identification purposes
invoice_date | Date string with pattern *yyyy-MM-dd* | TRUE | The date of the invoice
due_date | Date string with pattern *yyyy-MM-dd* | TRUE | Must be bigger than present time
customer_id | String| TRUE | Customer must be in ACTIVE state
expiration_date | Date string with pattern *yyyy-MM-dd HH:mm:ss* | TRUE | Experation date must be bigger than invoice date. Empty string will returns error and Null will be treated as lifetime value.
invoice_items| List Object of invoice items | TRUE | List Invoice Items object, Request in Object {price_per_item: <price_per_item>, description: <description>, quantity: <quantity>}
price_per_item | Integer | TRUE | Minimum is 0
description | String | TRUE | The description of the items
quantity | Integer | TRUE | Minimum is 1
additional_items | List Object of additional items | FALSE | List additional items object. Request in object {price_per_item: <price_per_item>, description: <description>, quantity: <quantity>}
price_per_item | Integer | TRUE | Can be negative to substract total price
description | String | TRUE | The description of the additional items
quantity | Integer | TRUE | Minimum is 1
message | String | FALSE | Additional footnote message inside invoice
attachments | String | FALSE | Max 4 Attachments and need to decode to String base64
payment_configuration | Object | TRUE | Status of request in Object {include_admin_fee: <include_admin_fee>, list_disabled_payment_methods: <list_disabled_payment_methods>, list_enabled_banks: <list_enabled_banks>, list_enabled_ewallet: <list_enabled_ewallet>, list_enabled_offline_channel: <list_enabled_offline_channel>}
include_admin_fee | Boolean | TRUE | true/false
list_disabled_payment_methods | String | TRUE | To configure payment methods to be disabled (e.g. VA, CREDIT_CARD, QRIS, EWALLET). When CREDIT_CARD is included, you are disabling the ‘cards’ payment method as a whole - which means disabling both credit card and debit card. There must be at least 1 payment method is enabled
list_enabled_banks | String | TRUE | To configure banks to be enabled for VA payment method. List of eligible bank codes: "002" (BRI), "008" (Mandiri), "009" (BNI), "013" (Permata), "022" (CIMB).
list_enabled_ewallet | String | TRUE | To configure list of e-wallets to be enabled on payment method page
list_enabled_offline_channel | String | TRUE | To configure list of offline channels to be enabled on payment method page



### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | Unique Payment ID for a specific invoice, that is generated after successful invoice creation.
status | String | Default status first time invoice created
customer_name | String | Inputted Customer name
invoice_number | String | Inputted invoice number
source_data | String | Default value will be "API" when create invoice through API
invoice_date | Date string with pattern *yyyy-MM-dd* |  Inputted invoice date
due_date | Date string with pattern *yyyy-MM-dd* | Inputted due date
expiration_date | Date string with pattern *yyyy-MM-dd HH:mm:ss* | Inputted experation date
invoice_items | List Object of invoice items | Inputted invoice items
price_per_item | Integer | Inputed price per items
description | String | Inputed description
quantity | Integer | Inputed quantity
message | String | Inputed message
attachments | String | inputted attachments
payment_url | String | Payment link to pay this invoice
Status | Object | Status of response in Object {code: <status_code>, message: <status_message>}
code | String | success status code
message | String | success status message



## Cancel Invoice

An endpoint that allows invoice cancellation after creation

### HTTPS Request

**[Production]** `PUT https://partner.oyindonesia.com/api/account-receivable/invoices/:id` <br>
**[Staging]** `PUT https://api-stg.oyindonesia.com/api/account-receivable/invoices/:id`


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
id | String | TRUE | Unique Payment ID for a specific invoice, that is generated after successful invoice creation.


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | Determine result of endpoint
error | Object | If success, this field is null
data | Object	
code | String | Success status code
message | String | Success reason message
reason | String | Reserve field to add additional notes for the response



## Get Invoice Details

An endpoints that can provide details of an invoice including amount and status.

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/account-receivable/invoices/:id` <br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-receivable/invoices/:id`


### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
id | String | TRUE | Unique Payment ID for a specific invoice, that is generated after successful invoice creation.


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
data | Object | Status of response in Object {id: <id>, partner_customer_id: <partner_customer_id>, status: <status>, tax_type: <tax_type>, address: <address>, email: <email>, pic_name: <pic_name>, phone_number: <phone_number>, pph_tax: <pph_tax>}
id | String | Unique Payment ID for a specific invoice, that is generated after successful invoice creation.
status | String | Default status first time invoice created
customer_id | String | Customer id for this invoice
customer_name | String | Inputted Customer name
customer_email | String | Customer email
customer_phone_number | String | Customer phone number
invoice_number | String | Inputted invoice number
source_data | String | Default value will be "API" when create invoice through API
invoice_date | Date string with pattern *yyyy-MM-dd* |  Inputted invoice date
payment_date | Date string with pattern *yyyy-MM-dd HH:mm:ss* | Date when invoice reach final status(CANCELLED or PAID)
due_date | Date string with pattern *yyyy-MM-dd* | Inputted due date
expiration_date | Date string with pattern *yyyy-MM-dd HH:mm:ss* | Inputted experation date
amount_billed | Integer | Sum of billed invoice price
amount_received | Integer | Sum of paid invoice
invoice_items | List Object of invoice items | Inputted invoice items
price_per_item | Integer | Inputed price per items
description | String | Inputed description
quantity | Integer | Inputed quantity
message | String | Inputed message
attachments | String | inputted attachments
payment_url | String | Payment link to pay this invoice
timeline_invoices | List of object | History list of invoice timeline. Object {status:<status>, action_stakeholder: <action_stakeholder>, action_date:<action_date>}
status | String | Status of the invoice at a point of time
action_stakeholder | String | Stakeholder that creates milestones
action_date | date | date of milestones (when it was create, cancelled, paid)
reason | String | Reserve Parameter to add additional notes for the response



## Filter and Search Invoice

This endpoint allows Partners to filter and search invoices based on certain criteria

### HTTPS Request

**[Production]** `GET https://partner.oyindonesia.com/api/account-receivable/invoices?*parameter*` <br>
**[Staging]** `GET https://api-stg.oyindonesia.com/api/account-receivable/invoices?*parameter*`



### Request Parameters

Parameters | Required | Description | Example value
---- | ---- | ------ | -------
limit | FALSE | Limit record need to show | 10
offset | FALSE | Filter invoice using customer name, it can be filtering using spesific value or just contain some text | 0
source_data | FALSE | Enum to choose source creation invoice | API/DASHBOARD
invoice_number | FALSE | Filter invoice using invoice number, it can be filtering using spesific value or just contain some text | 2022
customer_name | FALSE | Filter invoice using customer name, it can be filtering using spesific value or just contain some text | dev 2
status | FALSE | Filter invoice using invoice status |  possible value: CREATED, OVERDUE, PAID, CANCELLED
min_invoice_amount | FALSE | Filter invoice using minimum invoice amount | 10000
max_invoice_amount | FALSE | Filter invoice using maximum invoice amount | 100000



### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
success | Boolean | Determine result of endpoint
error | Object | If success, this field is null
data | List of object | List of invoice based on filter
code | String | Success status code
message | String | Success reason message
reason | String | Reserve field to add additional notes for the response
status_code | Integer | Succes status code



## Resend Invoice

This endpoint enables Partners to resend their invoices for reminder purposes. The API can be triggered to Email or Whatsapp. For Whatsapp, fees may occur.

### HTTPS Request

**[Production]** `POST https://partner.oyindonesia.com//api/account-receivable/invoices/b97a9a0d-d635-4e19-9086-031ef541c8c5/send` <br>
**[Staging]** `POST https://api-stg.oyindonesia.com//api/account-receivable/invoices/b97a9a0d-d635-4e19-9086-031ef541c8c5/send`



### Request Parameters

Parameters | Type | Required | Description
---- | ---- | ------ | -------
channel | String | True | **EMAIL**-> using partner email; **WHATSAPP**-> using partner phone number, but there is limit how many partner can use whatspp per day


### Response Parameters

Parameters | Type | Description 
---- | ---- | ------
Status | Object | Status of response in Object {code: <status_code>, message: <status_message>}
code | String | Success status code
message | String | Success status message


## Response Code

Code | Description
--- | ----
000 | Success
204 | Tx Id is not found
210 | Billed invoice less than threshold : Rp 10000
223 | Invoice status not eligible to cancel
247 | Email is not valid
247	| Phone number is not valid
300	| Failed to cancel invoice with id, please try again
400	| Payment configuration can't be null
400 | Invoice date can't be null or empty
400	| Invoice date is less than today
400	| Customer id can't be null or empty
400	| Customer ID Not Found
400	| Due date can't be null or empty
400	| Due date can't before invoice date
400	| Invalid expired Date time
400	| User is not active
400	| Please fix negative price in invoice items
400	| Attachments maximum is 4 item
400	| Tax type value is invalid
400	| Invalid tax type input
400	| Pph tax type value is invalid
400	| Pph tax can't be null
400	| Email address limit is 6
400	| Name cannot be null or empty
901	| Expiration date exceed invoice time


### Default Failed Responses in Each API
These parameters will show up as part of the response parameter.

Parameters | Type | Description 
---- | ---- | ------
Data | Object | 
Status | Object | Status of response in Object {code: <status_code>, message: <status_message>}
code | String | Failed status code
message | String | Failed reason message