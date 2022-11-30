## Transaction Status: API Disbursement
Below is the list of response codes that show the transaction status for API disbursement:

| Response Code | State     | Description                                                                        |
|---------------|-----------|------------------------------------------------------------------------------------|
| 000           | Final     | Transaction has been completed (success). Note: only happens for overbooking flow. |
| 101           | Non-Final | Transaction is Processed                                                           |
| 102           | Non-Final | Transaction is In Progress                                                         |
| 206           | Final     | Transaction is FAILED (Partner Deposit Balance is Not Enough)                      |
| 300           | Final     | Transaction is FAILED                                                              |
| 301           | Non-Final | Pending (When there is an unclear answer from Banks Network)                       |

## Request Status: API Disbursement
Below is the list of response codes that show the request status for API disbursement

| Response Code | State     | Description                                                                        | Notes                                              |
|---------------|-----------|------------------------------------------------------------------------------------|----------------------------------------------------|
| 203           | Final     | Request is Rejected (Duplicate Partner Tx ID)                                      | Request Rejected. Transaction Not Created          |
| 201           | Final     | Request is Rejected (User ID is not Found)                                         | Request Rejected. Transaction Not Created          |
| 202           | Final     | Request is Rejected (User ID is not Active)                                        | Request Rejected. Transaction Not Created          |
| 205           | Final     | Request is Rejected (Beneficiary Bank Code is Not Supported)                       | Request Rejected. Transaction Not Created          |
| 207           | Final     | Request is Rejected (Request IP Address is not Registered)                         | Request Rejected. Transaction Not Created          |
| 208           | Final     | Request is Rejected (API Key is not Valid)                                         | Request Rejected. Transaction Not Created          |
| 209           | Final     | Request is Rejected (Bank Account is not found)                                    | Request Rejected. Transaction Not Created          |
| 210           | Final     | Request is Rejected (Amount is not valid)                                          | Request Rejected. Transaction Not Created          |
| 257           | Final     | Request is Rejected (Disbursement with the same Partner Tx ID is still in process) | Request Rejected. Transaction Not Created          |
| 429           | Final     | Request Rejected (Too Many Request to specific endpoint)                           | Request Rejected. Transaction Not Created          |
| 990           | Final     | Request is Rejected (Invalid Format)                                               | Request Rejected. Transaction Not Created          |
| 999           | Non-Final | Internal Server Error                                                              | Unclear answer from OY system, please check status |

