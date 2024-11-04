## Account Inquiry Response Codes

These are the list of possible status codes for account inquiry:

Status | Meaning
------ | -------
000 | Inquiry is success
201 | Request is Rejected (User ID is not Found)
202 | Request is Rejected (User ID/product is not active)
204 | Request is Rejected (Invoice ID is not found)
205 | Request is Rejected (Beneficiary Bank Code is Not Supported)
206 | Failed doing payment (Balance is not enough)
207 | Request is Rejected (Request IP Address is not Registered)
208 | Request is Rejected (API Key is not Valid)
209 | Request is Rejected (Bank Account is not found)
225 | Request is Rejected (Account has exceeded the maximum amount for receiving money)
232 | Request is Rejected (User has unpaid invoices)
300 | Failed doing payment (invoice is not on `UNPAID` status)
301 | Request is Rejected (Bank Account is Blocked)
302 | Request is Rejected (Bank Account is Suspended)
304 | Request is Rejected (Invalid Recipient Info)
306 | Request is Rejected (Bank System Under Maintenance)
307 | Request is Rejected (Bank System Error)
429 | Request Rejected (Too Many Request to specific endpoint)
990 | Request is Rejected (Request Parameter is not Valid)
999 | Internal server error
