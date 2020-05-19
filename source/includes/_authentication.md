# Authentication

OY! API uses pair of `API Key` and `IP Address` to authenticate a partner request. Partner needs to register a unique `IP Address` which will be used as originating request for the API Services.

<aside class="warning">
Note: Your machine which call request to OY! API Services should be originating from the registered IP Address
</aside>

## HTTPS Request

Disbursement API can be requested through HTTPS Request to OY! API Base URL endpoint. The HTTPS Header has to be used to allow proper authentication, additionally HTTPS Request should only be made from IP Address which has been registered in OY! System.

### API Base URL

Development Environment: `https://sandbox.oyindonesia.com/staging/partner`
Production Environment: `https://partner.oyindonesia.com`

## HTTPS Header

Use following HTTPS Headers when you make a call to OY! API

Header | Type | Description
------ | ----- | -----------
Content-Type | application/json | The Content-Type field indicates that JSON type is acceptable to send to the recipient
Accept | application/json | The Accept field is used to specify that JSON type is acceptable for the response
X-OY-Username | String(50) | Partner Username to access OY! API services
X-Api-Key | String(255) | Partner API Key to access OY! API services
