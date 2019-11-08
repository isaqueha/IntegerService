# Incrementing Integers As A Service

## User Story
As a developer, I need a way to get integers that automatically increment so that I can generate identifiers from within my code. I’m in a hurry and would like to call a REST endpoint that returns the next available integer so that I can get on with building my feature. Why I need to generate identifiers using sequential integers is not important ;) Suffice it to say that this challenge is based on a real-world scenario.

## Your Task

Develop a REST service that:

1. Allows me to register as a user. At a minimum, this should be a REST endpoint that accepts an email address and a password and returns an API key.

2. Returns the next integer in my sequence when called. For example, if my current integer is 12, the service should return 13 when it is called. The endpoint should be secured by an API key. I should not have to provide the previous value of the integer for this to work. Fetching the next integer should cause my current integer to increment by 1 on the server so that if I call the endpoint again, I get the next integer in the sequence.

3. Allows me to fetch my current integer. For example, if my current integer is 12, the service should return 12. The endpoint should be secured by API key.

4. Allows me to reset my integer to an arbitrary, non-negative value. For example, my integer may be currently 1005. I would like to reset it to 1000. The endpoint should be secured by API key.

### Examples:
- Get the next integer in the sequence:
	- curl https://myapi.com/v1/next -H “Authorization: Bearer XXXXXX”
- Get the current integer:
	- curl https://myapi.com/v1/current -H “Authorization: Bearer XXXXX”
- Reset the current integer:
	- curl -X “PUT” https://myapi.com/v1/current -H “Authorization: Bearer XXXXX” --data “current=1000”

## Stretch Goals
1. Build a UI for the service, especially the account creation functionality.
	1. Take it a step further and build the UI as a single page app that consumes your API.

2. Allow sign up using OAuth
	1. Github, Facebook, Google—anything that supports it!

3. Deploy your API and include the link in your README so we can try it out without having to run it.

## Notes
Please work independently without code review by others—state any assumptions you made or questions you had along the way. When complete, note how much time you spent from beginning to end.

The service can be written in a language of your choosing, however, we ask that you submit code for us to review so using something like Oracle Apex (or any other tool/framework that does auto-generation of code) is not recommended.

One of the main goals of this REST service is to remove the need in the calling application for maintaining the state of the last integer. Imagine that the calling application just wants the next integer and has no idea what the current integer is.

Fetching the next integer should cause the current integer to increment by 1 on the server. For example, if I fetch the next integer and my current integer is 10, the API should return 11 and my current integer should be 11.

	Pseudo Code (assuming my current integer is 10):
	
	int current_int = call_endpoint() # Now current_int will = 11 because 10 + 1
	current_int = call_endpoint() # Now current_int will = 12 because 11 + 1
	current_int = call_endpoint() # Now current_int will = 13 because 12 + 1
	current_int = call_endpoint() # Now current_int will = 14 because 13 + 1
	current_int = call_endpoint() # Now current_int will = 15 because 14 + 1

The service should conform to the JSON API spec (http://jsonapi.org) as closely as possible.

No UI is necessary. If your service can be called using cURL that is acceptable.

Your service can be sent to us as a zip file or as a link to a Github (or other) repository if you’ve stored it there. Please be sure to include any notes regarding how to run it and assumptions you made in a README.

This challenge is designed to mimic the real world (in other words, it is slightly vague on purpose). Feel free to ask questions or for clarification as needed.

Feel free to be creative with your solution—there is no 100% correct solution. We are just as interested in how you approach the problem as we are in the actual solution.