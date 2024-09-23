# Test Automation Project

This repository contains two test automation projects:

1. **UI_Automation_Exercises**: Automated testing project for the user interface (UI) using Cypress with JavaScript.

2. **api_automation_exercises**: Automated API testing project using Rest Assured with Java and Maven.


### Project Requirements:
Make sure you have the following programs installed on your machine:

- [Node.js](https://nodejs.org/) (preferably lastest stable version).
- [Java JDK 8 o superior](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) 
- [Maven](https://maven.apache.org/download.cgi) 
- [Cypress](https://www.cypress.io/) installed globally or locally in the project.
- [Git](https://git-scm.com/) to clone the repository

## Clone the repository

Run the following command to clone the repository on your local machine:

```bash
git clone https://github.com/rosarioQA/QA_Automation_Challenge.git
cd QA_Automation_Challenge
```

# Cypress test execution #

- ### Running Instrucctions:
    - Open a terminal and navigate to the project directory (/UI_Automation_Exercises).
    - Run "npm install" to install the dependencies.
    - Modify the file 'UI_Automation_Exercises/fixtures/users.json' with a valid email and password.
    - Run "npm test" to start the Cypress test suite.
    - Select the "E2E Testing" option.
    - Select the "Chrome" option.
    - Select the "Start E2E Testing in Chrome" button.
    - Select the file you want to run.

 
  If you prefer to run the tests separately in headless mode use the following commands depending on the test you want to run:                                                                       
```bash
npm run exercise1  
npm run exercise2
```


# API test execution with Rest Assured #
- ### Running Instrucctions:
   - Open a terminal and navigate to the project directory (/api_automation_exercises).
    - Run "mvn clean install" to install the dependencies.
    - Modify the file 'api_automation_exercises/src/resources/config.properties' with a valid token and account.
    - Run "mvn test" to execute the test suite.