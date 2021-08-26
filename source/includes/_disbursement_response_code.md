## Fund Disbursement Response Codes

Below is the list of response codes for fund disbursement:

Response Code | State | Description
---------- | ------- | -------
000 | Final | Disbursement Request has been completed (success)
101 | Non-Final | Request is Processed
102 | Non-Final | Request is In Progress
203 | Final | Request is Rejected (Duplicate Partner Tx ID)
204 | Final | Request is Rejected (Partner Tx ID is Not Found)
205 | Final | Request is Rejected (Beneficiary Bank Code is Not Supported)
206 | Final | Request is Rejected (Partner Deposit Balance is Not Enough)
207 | Final | Request is Rejected (Request IP Address is not Registered)
208 | Final | Request is Rejected (API Key is not Valid)
209 | Final | Request is Rejected (Bank Account is not found)
210 | Final | Request is Rejected (Amount is not valid)
225 | Final | Request is Rejected (Max amount per transaction exceed for disburse)
300 | Final | Disbursement is FAILED
301 | Non-Final | Pending (When there is a unclear answer from Banks Network)
999 | Non-Final | Internal Server Error

IMPORTANT! The following response codes mean that your request is not received by OY! and do not represent any information related to your transaction activity/status:

Response Code | Description
---------- | -------
201 | Request is Rejected (User ID is not Found)
202 | Request is Rejected (User ID is not Active)
429 | Request Rejected (Too Many Request to specific endpoint)
990 | Request is Rejected (Invalid Format)
