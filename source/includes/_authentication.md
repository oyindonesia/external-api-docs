# Authentication

OY! API uses pair of `API Key` and `IP Address` to authenticate a partner's request. Always ensure that you keep your API keys secure. Do not share your secret API keys in publicly accessible areas.
  
Here are the steps for the authentication;  
  
1) Submit your IPs and callback URLs (both for staging and production environment) to your business representative or to [partner@oyindonesia.com](mailto:partner@oyindonesia.com)
  
2) Request your staging and production API Keys to our business representative (note: you are not required to upgrade your account to request staging API Key. Upgrade is only required if you want to request Production API Key).
  
3) You have to include your API keys as part of the HTTPS headers when you make a call to OY! API  
  
All API requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure). Calls made over HTTP will fail. API requests without authentication will also fail.

<aside class="warning">
Note: Your machine which call request to OY! API Services should be originating from the registered IP Address
</aside>

## HTTPS Request

* HTTPS Request should only be made from IP Address that has been registered in OY! System.  
* The HTTPS Header should always be included as part of the request in order for us to do authentication


### API Base URL

Production Environment: `https://partner.oyindonesia.com`

Test/Staging Environment: `https://api-stg.oyindonesia.com/`

## HTTPS Header

Use the following HTTPS Headers when you make a call to OY! API

Header | Type | Description
------ | ----- | -----------
Content-Type | application/json | The Content-Type field indicates that JSON type is acceptable to send to the recipient
Accept | application/json | The Accept field is used to specify that JSON type is acceptable for the response
X-OY-Username | String(64) | Partner Username to access OY! API services
X-Api-Key | String(255) | Partner API Key to access OY! API services
