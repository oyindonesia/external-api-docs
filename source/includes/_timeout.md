# Timeout

Timeouts can be set by partners when making requests to our API. This allows partners to control the maximum duration for which they are willing to wait for a response from our server.

## Timeout Durations for OY's API

Below is the list of timeout durations for OY's API:

API | Timeout in seconds 
---------- | ------- 
VA Aggregator | 60 
Fund Acceptance (Payment Link) | 120
E-Wallet Aggregator | 60 
Payment Routing | 120
Account Linking | ...

## Setting Timeout

Partners can set the timeout by including the `timeout` parameter in the request headers. The value of the `timeout` parameter should be specified in seconds.

## Example

```http
POST https://partner.oyindonesia.com/api/e-wallet-aggregator/create-transaction
Host: partner.oyindonesia.com
Content-Type: application/json
X-Oy-Username: yourusername
X-Api-Key: yourapikey
Timeout: 60
```

In this example, the partner is setting a timeout of 60 seconds for the request to POST /api/e-wallet-aggregator/create-transaction. Please note that OY's server will respond within this specified timeout duration.