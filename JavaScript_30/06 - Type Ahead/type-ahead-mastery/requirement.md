Mastery Task Scenario: The "Real-Time Dev Directory"
The Business Problem
Instead of searching for locations, you are building an internal User/Employee Directory Search for a tech company. The HR team needs to instantly search thousands of user profiles by their Name or their Company Catchphrase as they type.

Your Objectives
Fetch Live API Data: You will target a new, live public API endpoint that returns mock user data.

Dual-Field Filtering: Filter the data based on whether the search query matches the employee's name OR their company.catchPhrase.

Clean Template Separation: Instead of packing your entire template literal inside the main display loop, you will pass each matched user into a separate helper function to generate the HTML string.