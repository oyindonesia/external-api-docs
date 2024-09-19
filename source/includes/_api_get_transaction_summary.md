# API GET Transaction Summary
This API allows you to get a summary of how much balance that is still waiting for settlement time within a chosen time frame. You will receive data of:
* Count Transaction
* Sum transaction amount
* Sum admin fee amount
* Sum PPN tax amount
* Settlement balance after admin fee and tax.

You can select to get your pending settlement transaction summary within these time periods: today, tomorrow, or all time (all balance that has not been settled yet). "Today" means you will get summary of transaction that will be settled today. "Tommorow" means you will get summary of transaction that will be settled tommorow. While "All time" means you will get all the total balance that is still waiting for settlement. To be able to use this API, please contact our representative so we can activate this API for you.

Note: Soon, this API can provide you with the capability to get a summary of how much you have spent and earned during a time period.

### HTTPS Request

**[Production]** GET `https://partner.oyindonesia.com/api/transaction-summary` <br>
**[Staging]** GET `https://api-stg.oyindonesia.com/api/transaction-summary`


``` shell
curl --location --request GET `https://partner.oyindonesia.com/api/transaction-summary` \
--header 'Content-Type: application/json' \
--header 'x-oy-username: yourusername' \
--header 'x-api-key: yourapikey' \
--data-raw '{
    "product_group": "PENDING_SETTLEMENT",
    "time_period": "ALL_TIME"
}'
```

> The above command returns JSON structured similar like this:

```json
{
    "status": {
        "code": "000",
        "message": "Success"
    },
    "data": 
        {
         “product_group” : “PENDING_SETTLEMENT”,
         “time_period”: “ALL_TIME”,
         “amount” : 8000000,
         “admin_fee” : 800000,
         “ppn_tax” : 88000,
         “count” : 800,
         “settlement_balance” : 7112000

        }
}
```

### Request Headers

Parameters | Type | Description
---- | ---- | ----
X-Oy-Key | String | API Key for establishing connection to this particular endpoint
X-Oy-Username | String | The registered partner's username with enabled access for API Get Transaction Summary

### Request Parameters

Parameters | Type | Required | Description 
---- | ---- | ---- | ------ 
product_group | String | TRUE | Value must be: PENDING_SETTLEMENT (to get a summary of how much transaction that is still waiting for settlement)
time_period | String | TRUE | Time period that you need. You can select one from these values: TODAY, TOMORROW, and ALL_TIME.

### Response Parameters
Parameter | Type | Nullable | Description
---- | ---- | ----- | ----
status | WalletError | FALSE | Indicates the status of the request, it will return response code and response message
Data | Object | TRUE | Data that you requested.
Product_group: Product group that you requested, currently only PENDING SETTLEMENT
time_period: seleted time period (ALL_TIME, TODAY, or TOMMOROW)
Transfer_amount: SUM amount of transaction before admin fee and tax
Admin_fee: SUM admin fee
Ppn_tax: SUM of PPN tax
Count: count of transaction
Setlement_balance: total balance that will be settled, after admin fee and tax. 

### Response Codes and Messages

Below is the list of response codes that show the request status for API Get Transaction Summary:

Response Code | Response Message     | Description 
---------------|--------------|-------------- 
000 | Successful | Request successful
102 | Request is in progress. Please retry after several minutes | Request is in progress and you should retry after several minutes
201 | Username Not Found | Username not found error
202 | User is not active | This API has not yet been activated for you
207 | IP Address not registered | You have not registered your IP Address
208 | API Key is not valid | Your API Key is invalid
229 | Too many request | When you make requests too much and reached the rate limit
290 | Parameter / object is not valid | The param you requested is invalid




