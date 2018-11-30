<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
One purpose is to save the state of te application while the user interacts with the application. It is a server-side storage of information for users. 

2. What does bcrypt do to help us store passwords in a secure manner.
bcrypt allows us to hash passwords and store the hash in the database as opposed to the plain string password. 

3. What does bcrypt do to slow down attackers?
IT also "salts" that are generated and appended to the hashed password.

4. What are the three parts of the JSON Web Token?
Headers, Payloads, and signatures