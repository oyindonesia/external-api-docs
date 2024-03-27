## VA Aggregator Response Codes

Below is the list of response codes for API VA aggregator:

Response Code | State | Description
---------- | ------- | -------
000 | Final | Response success without error
203 | Final | Request is Rejected (Duplicate partner tx id)
207 | Final | Request is Rejected (Request IP address is not registered)
208 | Final | Request is Rejected (API key is not valid)
211 | Final | Request is Rejected (Bank code is not available for this service)
212 | Final | Request is Rejected (Given amount are lesser than allowed value for static VA)
213 | Final | Request is Rejected (Given amount are greater than allowed value for static VA)
214 | Final | Request is Rejected (Failed to generate static VA)
214 | Final | Request is Rejected (Amount type is not supported for the requested bank code)
216 | Final | Request is Rejected (VA id is empty)
217 | Final | Request is Rejected (VA number is still active for this partner user id)
219 | Final | Request is Rejected (Virtual account is not enabled for this bank)
219 | Final | Request is Rejected (Virtual account for this bank has reached daily limit transaction)
226 | Final | Request is rejected (Transaction expiry time exceeds VA expiry time)
245 | Final | Request is rejected (Minimum expiry time is 10 minutes for VA CIMB and Permata)
246 | Final | Request is rejected (Failed update VA)
260 | Final | Request is rejected (Given VA suffix is invalid)
262 | Final | Request is rejected (VA prefix for this username is not available)
999 | Non-Final | Internal Server Error

IMPORTANT! The following response codes mean that your request is not received by OY! and do not represent any information related to your transaction activity/status:

Response Code | Description
---------- | -------
201 | Request is Rejected (User ID is not found)
202 | Request is Rejected (User ID is not active)
202 | Request is Rejected (Multiple use VA is not allowed for use)
202 | Request is Rejected (Custom VA is not allowed for use)
990 | Request is Rejected (Invalid Format)

Below is the list of HTTP Status Code for API VA Aggregator:

HTTP Status Code | Description
---------- | -------
403 | Forbidden (IP address is not whitelisted or request is deemed suspicious e.g SQL injection or XSS)
404 | Not Found (wrong URL)
429 | Request Rejected (Too Many Request to specific endpoint)
500 | Internal Server Error (OY! system encountered unknown error)
503 | Service Unavailable (OY! system is unable to process the request temporarily)
504 | Gateway Timeout (OY! system took too long processing the request and was unable to respond in time)
