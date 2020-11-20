## Account Inquiry Response Codes

These are the list of possible status codes for account inquiry:

Status | Meaning
------ | -------
000 | Inquiry is success
201 | Request is Rejected (User ID is not Found)
202 | Request is Rejected (User ID/product is not active)
205 | Request is Rejected (Beneficiary Bank Code is Not Supported)
207 | Request is Rejected (Request IP Address is not Registered)
208 | Request is Rejected (API Key is not Valid)
209 | Request is Rejected (Bank Account is not found)
990 | Request is Rejected (Request Parameter is not Valid)
999 | Internal server error

Notes: there will be additional status code once the payment feature is released