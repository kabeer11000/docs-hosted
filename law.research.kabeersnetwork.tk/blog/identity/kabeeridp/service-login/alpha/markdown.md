### Service Login Flow - Alpha Spec
This document was written as an internal documentation. The content may be outdated and wrong.

First Party backend sends a request to Kabeer IDP at <code>/internals/service-login/token</code> endpoint - [1]

Request object contains Account Session ```(user_id, session_id)``` + Device Id, App Credentials ```(app_id, app_secret)```
Kabeer IDP will check if the request was indeed made from a ```first_party``` source. 
Then Verifies the user and their Verified 2-Factor Authentication devices against given ```device_id```.
IDP will Finally return a signed non-revocable ```access_token``` - [2].

### References:

[1]: API Endpoint expects HTTP POST request. With Data Serialized as ```application/x-www-form-urlencoded```
and an attached ```"Content-Type": "application/x-www-form-urlencoded"```
Header to the request Object

[2]: This is a Special Kind of ```access_token``` called a Service Token. 
It is scoped to all abilities granted to the first party app before the authentication process (e.g. When first registered). 
The JWT token is valid for 2 Hours and is signed with the regular KabeerIDP Private RSA Key.
All Claims are inline with the regular ```access_token``` with an addition of ```__kn_contains``` claim which will be ```ACCESS+USER+CONSENT```
If the authentication process was successful and the user had previously granted access.
