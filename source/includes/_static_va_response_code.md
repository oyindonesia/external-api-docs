## VA Aggregator Response Codes

These are the list of possible status codes for API VA aggregator:

Payment Status | State | Description
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

IMPORTANT! The following status codes mean that your request is not received by OY! and do not represent any information related to your transaction status:

Payment Status | Description
---------- | -------
201 | Request is Rejected (User ID is not Found)
202 | Request is Rejected (User ID is not Active)
