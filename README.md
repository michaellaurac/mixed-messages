# Hospital appointment reminder

<img src=".//resources/images/screenshot.jpg" width="1000px">

---

## Description :mag_right:

The project models the page of a simplified hospital :hospital: online system on which the patient can find details about his or her next medical appointment and confirm the appointment.

A message including all necessary details for the patient not to miss the appointment :ambulance: with the medical professional :mask: is displayed.

The project constructs a fictional :sparkles: message :envelope: randomly generated according to the requirements of the [**Mixed Message**](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-22-portfolio-project-mixed-messages/modules/becp-22-mixed-messages/kanban_projects/mixed-messages) project from [**Codecademy**](https://www.codecademy.com/).

<img src=".//resources/images/logo-codecademy.png" width="1000px">

---

## Features :star::star::star:

The project features the following main elements:
1. An straight-forward title and an evocative illustration
3. A sober style respecting the theme
4. A couple of patient actions described in the [instructions](#instructions)

### Dynamic behaviors :dizzy: 

Taking into account, the features implemented in the project a special attention was paid to allowing some level of **_dynamism_** to the behaviors of each of the elements in order to practice with some **_event management_** aspects of the project.

### Object and data :package:

Additionally **_objects_** described by their respective **_classes_**, and **_data_** were included in separate **_modules_** and then integrated together.

### Code redaction :pen:

A reasonable quality of code redaction was sought during refactoring using for example guard clauses. Additional care was taken in the JavaScript as practice in this language was the main exercise while improved refactoring of the HTML, CSS and Markdown code was left as a possible future improvement.

### Project documentation :notebook:

Eventually, a significant amount of time was spent in properly **_documenting_** the project.

### Error handling and test management :x:

Although error handling was introduced in the course, **_error handling_** was not deemed necessary due to the reduced level of interaction. Test management was also limited to the required minimum during the actual development. As both areas were not the primary focus of the project they were left as possible future improvements.

---

## Instructions :mega::mega::mega:

### Appointment details

<img src=".//resources/images/appointment-details.jpg" width="500px">

When landing on the page the patient can immediately read every appointment detail:

1. Date and time

2. Type of medical act

3. Name of the medical professional

4. Name of medical department

5. Floor of the house

6. Address

A text reminds the patient to bring the full relevant medical record to the appointment.

### Appointment options

<img src=".//resources/images/appointment-options.jpg" width="500px">

The patient is then invited to make a choice:

1. With the first checkbox the patient can confirm the appointment

2. With the second checkbox the patient can request the appointment to be rescheduled

Each choice will trigger a set of two buttons

### Appointment confirmation

<img src=".//resources/images/appointment-confirmation.jpg" width="500px">

The patient can then either decide to ATTEND the appointment or CANCEL the choice previously made.

The patient is also reminded that confirmed appointment missed might be charged directly by the hospital.

When cancelling the user returns to the two initial options.

<img src=".//resources/images/appointment-options.jpg" width="500px">

When clicking on ATTEND a message is displayed and the user is invited to generate a new appointment.

<img src=".//resources/images/appointment-generation.jpg" width="500px">

### Appointment postponing

<img src=".//resources/images/appointment-postponing.jpg" width="500px">

The patient can otherwise decide to POSTPONE the appointment or CANCEL the choice previously made.

<img src=".//resources/images/appointment-options.jpg" width="500px">

When cancelling the user returns to the two initial options.

<img src=".//resources/images/appointment-postponed.jpg" width="500px">

When clicking on POSTPONE a new date and time later than the previously given appointment date and time is suggested and the user is provided with the two initial options.

---

## Technologies :computer:

### Front-End

<img src=".//resources/images/HTML-CSS-JS.png" height="100px">

The page structure is coded in [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/HTML) while the style is coded with [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS). The dynamic behaviors is coded in [**JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

> A state machine was the design of choice reflecting user interaction.

### Back-end

<img src=".//resources/images/JS.png" height="100px">

Object modeling and data storage were also written in [**JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript) in order to exercise in the language.

> An `Appointment` class is the key item of the data model. Note that since only a single appointment was created in the project an appointment object would be sufficient.

### Read Me

<img src=".//resources/images/MD.png" height="60px">

The present README.md file was composed with [**Markdown**](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Markdown_in_MDN) with the purpose to be shown on the [**README.md**](https://github.com/michaellaurac/mixed-messages#readme)  page of the project as seen on [**GitHub**](https://github.com/).

---

## Future improvements :rocket:

The following future improvement might be considered:

- A **_database_** reflecting the adequate data structure so that a random medical act is performed by the right professional coming from the right department at a specific location from a particular hospital
- A **_RESTful API_** to adjust the database based on availabilities
- An **_API using JSON_** to export the appointment details when it is confirmed 
- Some **_printing_** capabilities in a predetermined format
- A **_calendar_** to display the appointment and to select next possible availabilities
- A **_map_** to display the physical location of the appointment
- Some level of **_error handling_**
- Some **_test environment_** to verify that all functions coordinate as expected before launch

---

## Contributors :woman::man:

The author of the project is [*Michaël L.*](https://github.com/michaellaurac).

---

## Hours of development :watch:

About 40 hours were spent on this project.

---

## License :briefcase:

This project is developed and made available under an [**MIT License**](https://choosealicense.com/licenses/mit/).
