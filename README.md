# Bootoons 

Bootoons is a comic sharing single page application, where users can peruse and add different comics they find online. The purpose of this app is to help other comic artists become inspired and keep creating! 

[Demo Guide](https://www.youtube.com/watch?v=crQeSL-C_N0&t=14s)

## Download and Installation Instructions

Begin by cloning the [Bootoons API Repo](https://github.com/BeccaN/bootoons-api) and following the API instructions below.

### API Instructions
* After opening and changing into the API directory make sure to install all dependencies with
```
bundle install
```
* Make sure Postgresql server is running (follow instructions on how to start that based the machine you are using)

* Run migrations and seed the database with
```
rails db:migrate && rails db:seed
```
* Start the bootoons server with 
```
rails s
```

### Frontend Instructions

* Clone the Bootoons repository and install any dependencies with
```
npm install
```

* Open the public/index.html in a live server and start exploring! 

The program is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
