## VA Aggregator Response Codes

Below is the list of response codes for API VA aggregator:

Response Code | State | Description
---------- | ------- | -------
000 | Final | Response success without error
207 | Final | Request is Rejected (Request IP Address is not Registered)
208 | Final | Request is Rejected (API Key is not Valid)
211 | Final | Request is Rejected (Bank code is not available for this service)
212 | Final | Request is Rejected (Given amount are lesser than allowed value for static va)
214 | Final | Request is Rejected (Failed to generate static va)
216 | Final | Request is Rejected (VA Id is empty)
217 | Final | Request is Rejected (VA Number is still active for this partner user id)
999 | Non-Final | Internal Server Error

IMPORTANT! The following response codes mean that your request is not received by OY! and do not represent any information related to your transaction activity/status:

Response Code | Description
---------- | -------
201 | Request is Rejected (User ID is not Found)
202 | Request is Rejected (User ID is not Active)
429 | Request Rejected (Too Many Request to specific endpoint)
990 | Request is Rejected (Invalid Format)
