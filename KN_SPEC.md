
# Service Logins and Service Tokens on First-Party Apps. 


Kabeer Identity Platform Working Spec. 
| | | 
|-|- |
Version | k-f3ef6e
Author(s) | Fatima Jaffri


![Verified](https://github.com/kabeer11000/biowire/raw/master/.github/assets/badges/Verified.svg)
## Abstract

As our services have increased in complexity Authorization and Authentication is not simple and easy anymore. Multiple redirects in the regular OAuth flow and additional redirects to assist our first-party apps have exposed us to multiple threats and provide an attack surface.

We are introducing a completely new flow for granting Auth to internal apps and services in a secured and controlled fashion with as few redirects as possible. We call this spec the Service Login spec and we are adding it to Kabeer IDP. 


## Introduction
As defined above Service Login spec helps in reducing API calls and redirect round trips.
for that, we rely on a single OAuth:2.0 Redirect without scopes or response and a secure back channel cross-origin request.


## Authorization 
A first Party's backend sends a request to Kabeer IDP Authorization Server at ```/internals/service-login/token``` endpoint [1].
Request object contains Account-Session(user_id, session_id),  Device Id and App Credentials(app_id, app_secret).

Authorization Server will check if the request was indeed made from a ```first_party``` source which can be predefined. It then checks Account-Session for their 2 Factor Authentication devices against the given device_id. Authorization Server will finally return a signed non-revocable (May change in the future) access_token [2].

## Authentication

Identity: however with this Service token spec does not account for authentication of the end-user, for that Kabeer Internal Communication Protocol, relies's on a bunch of other Specs and Technologies. for example when getting user info. 

Internal Service will depend on Authorization Servers ```/auth/user/accounts/active``` Endpoint which provides a list of Active and Signed-in sessions. 

However this route uses an account-chooser cookie which is tied to the parent domain and available across all sub-domains, However, in a cross-domain scenario Service Login uses a Cookie Sync technology called [```cross-sync```](https://developers.kabeersnetwork.tk/#/docs/cross-sync) which eliminates the need for third-party cookies and quickly syncs named cookies across hundreds of domains. 

Here the account-chooser cookie and the device-id cookies are synced across Kabeers Network Domains And are used when requesting active accounts. 


## Refrences

[1]: API Endpoint expects HTTP POST request. With Data Serialized as ```application/x-www-form-urlencoded```
and an attached ```"Content-Type": "application/x-www-form-urlencoded"``` Header to the request Object

[2]: This is a Special kind of ```access_token``` called a Service Token. It is scoped to all abilities granted to the first party app before the authentication process (e.g. When first registered). 

The [JWT](https://jwt.io) token is valid for 2 hours and is signed with the regular Kabeer IDP Private RSA Key. All claims are common with a regular access_token with the addition of ```__kn_contains``` claim which will be ```ACCESS+USER+CONSENT```
If the authentication process was successful and unless the user had not previously and explicitly denied access.

