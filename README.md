# Start Project

In the project directory, you run:

##### `npm install`

##### `npm start`

I had to change PORT to 8080, because server runs on PORT 3000
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

**Technologies Used:**

- React - ( Create Single Page Application )
- @reduxjs/toolkit - ( State Management )
- redux-thunk - ( redux middleware - to write async logic )
- Axios - (Make Http Requests)
- @material-ui/core - ( Create Layout/Design )
- @material-ui/icons - ( Create Icons )

**Features:**

- Fetch and view all devices
- Filter devices by device type
- Sort devices by hdd capacity and system name
- Add new device
- Edit device
- delete device

**Endpoints:**
Content-Type: 'application/json'

- Fetch devices - ( GET - http://localhost:3000/devices )
  1. Data - [{system_name: 'String', type: 'String', hdd_capacity: string}]
- Add device - ( POST - http://localhost:3000/devices )
  1. Body - {system_name: 'String', type: 'String', hdd_capacity: string}
- Edit device - ( PUT - http://localhost:3000/devices/:id )
  1. Body - {system_name: 'String', type: 'String', hdd_capacity: string}
- Delete device - ( DELETE - http://localhost:3000/devices/:id )
