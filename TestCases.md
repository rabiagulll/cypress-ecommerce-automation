# Test Cases

## Login Functionality

### TC_LOGIN_001 - Login with valid credentials

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter a valid username.
2. Enter a valid password.
3. Click the Login button.

**Expected Result:**
The user should successfully log in.


### TC_LOGIN_002 - Login with valid username and invalid password

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter a valid username.
2. Enter an invalid password.
3. Click the Login button.

**Expected Result:**
The user should not log in and an error message should be displayed.


### TC_LOGIN_003 - Login with invalid username and valid password

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter an invalid username.
2. Enter a valid password.
3. Click the Login button.

**Expected Result:**
The user should not log in and an error message should be displayed.


### TC_LOGIN_004 - Login with empty username and valid password

**Precondition:** User is on the login page.

**Test Steps:**
1. Leave the username field empty.
2. Enter a valid password.
3. Click the Login button.

**Expected Result:**
The user should not log in and a validation message should be displayed for the username field.


### TC_LOGIN_005 - Login with valid username and empty password

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter a valid username.
2. Leave the password field empty.
3. Click the Login button.

**Expected Result:**
The user should not log in and a validation message should be displayed for the password field.


### TC_LOGIN_006 - Login with empty credentials

**Precondition:** User is on the login page.

**Test Steps:**
1. Leave the username field empty.
2. Leave the password field empty.
3. Click the Login button.

**Expected Result:**
The user should not log in and validation messages should be displayed for the required fields.