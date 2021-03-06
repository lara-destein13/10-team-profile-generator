# 10-team-profile-generator

## Description

10-team-profile-generator is a command line application that takes in information about employes on a software engineering team and generates an HTML webpage that displays summaries for each person. 

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Built With

* JavaScript
* Inquirer package
* Jest package
* Node
* HTML
* CSS

## Usage

Application runs in the command line. Open terminal, run node index.js, and answer each question when prompted. Once your team is complete, select "done" from the dropdown menu. An object will appear containing your team's profile information. To view your team's profile information in the browser, type "open employee.html" in the command line. 

See link to a walkthorugh video: https://watch.screencastify.com/v/n13s6mgBL6SqXdNHTnIU

<img width="962" alt="Screen Shot 2022-01-20 at 6 07 43 PM" src="https://user-images.githubusercontent.com/88476888/150440694-c30f7a5e-21ae-4265-8794-0c97f1594bd0.png">



## Contributing
Made with &hearts; by Lara DeStein
