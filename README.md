# Strategy Hospital
### Frontend: React, React Router
### Backend: Django w/Rest Framework
### Database: SQLite

This application allows a user to create a new hospital contact and select which hospitals they are associated with. After validating the user, the dashboard shows statistics related to each hospital associated with the user: average staff salary, highest paid staff member, average procedure cost, highest cost procedure, and the total number of procedures.

The API has the following models available:
- <strong>Contact</strong>: The user that will log into the site. It has a one-to-one relationship with the Django User model to allow for built-in authentication. The other attributes include name, address, phone number, job title, and a many-to-many relationship with individual hospitals
- <strong>Hospital</strong>: It has a many-to-one relationship with a hospital group. The other attributes include the hospital name and address.
- <strong>Hospital Group</strong>: It is not implemented now, but will later help a contact be associated with an entire group instead of individual hospitals. The hospital group has the attribute name. 
- <strong>Staff</strong>: It has a many-to-many relationship with each individual hospital. The other attributes include a name, start date, job title, and salary.
- <strong>Procedures</strong>: It has a many-to-many relationship with Staff, a many-to-one relationship with each hospital, and a many-to-one relationship with a procedure category. The other attributes include a name, description, date, and cost.
- <strong>Procedure Category</strong>: It is not implemented now, but will later help validate attributes of procedures. The procedure category has the attribute name.

The frontend currently does not allow for a user/contact to add Staff, Procedures, and Procedure Categories.

### Phase 1:
- <strong>(current)</strong>Implement Redux to work with React Router to properly pass data to/from components.
- Add attributes to procedure category to include maximum cost and minumum cost.
- Create a detailed hospital page where a user can CRUD staff and procedures for the selected hospital.
- Valid a new procedure against the procedure categories.

### Phase 2:
- Allow a new contact to select a hospital group that will automatically select all of the hospitals under it.
- Create a different portal for administration users to CRUD hospitals and hospital groups.
- Move the database to PostgreSQL

### Additional Thoughts
- Maybe procedure categories should be per hospital or hospital group. I doubt the max/min of a procedure will be default across the board. Maybe there should be both global and "local" procedure cost validation.

## To run the application
### Backend:
Once the application is cloned or downloaded use the terminal/console to navigate to the reactdjango_hospital_server/stratHealthServer/ directory and run ```python manage.py runserver```.

### Frontend:
Once the application is cloned or downloaded use the terminal/console to navigate to the rreactdjango_hospital_server/strat_health_client/ directory and run ```npm install``` or ```yarn install```. Once it's complete run ```npm start``` or ```yarn start```.
