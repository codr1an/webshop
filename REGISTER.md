# LA-Shop (webshop)

This is a webshop for consumer electronics developed for the course Web Engineering II at DHBW Mannheim. Below are the main functionalities of the project:

## TL;DR - Startup (with XAMPP, requires npm)

1.  Start your Apache and MySQL Actions in XAMPP
2.  Import the **_lashop_db.sql_** database into your phpMyAdmin
3.  In **_/resources/application.properties_** add following (if missing):
    - spring.datasource.url="..." (**_jdbc:mysql://localhost:3306/lashop_db_** by default)
    - spring.datasource.username= "..." (**_root_** by default)
    - spring.datasource.password= (**_empty_** by default)
4.  Run **_src\main\java\com\laweb\webshop\WebshopApplication.java_** to start the Spring Boot API
5.  cd into **_~/webshop/frontend_**
6.  run **_npm install_** and then **_npm start_** to start the frontend

If you don't host your Database locally using XAMPP you will have to update the datasource.url to match your database. Also don't forget about username and password

## Functionalities

- [x] **Registration of New Users**: Users can register for a new account by providing necessary details.

- [x] **User Login**: Registered users can log in to their accounts using their credentials.

- [ ] **User Management**: Admins can manage users, including viewing user details, updating user information, and deleting user accounts.

- [ ] **Product Management**: Admins can manage products available in the webshop, including adding new products, updating existing ones, and removing products.

- [x] **Shopping Cart**: Users can add products to their shopping cart, view the contents of the cart, update quantities, and proceed to checkout.

## Technologies

- **Frontend**: React
- **Backend**: Spring boot
- **Database**: MySQL (hosted through XAMPP)
- **Authentication**: Spring Security

## Optional if time allows:

- [ ] **Searchbar**: Functional searchbar for products

## Contributors

| Name        | Matrikel number | Github account |
| ----------- | --------------- | -------------- |
| Adrian Popa | matrikel no     | codr1an        |
| Lars Krickl | matrikel no     | Larsk7         |

## Using the app

Here are some users you can use to test the app, also, you can register yourself and create new users. All new accounts have the role "user" by default, the only way to give an account the role "admin" is by manually changing the role in the database.
| username | role | password |
| -------- | ----- | -------- |
| user | user | test |
| admin | admin | test |

The website itself it's pretty self explanatory and user friendly, I doubt a more in depth documentation is necessary. (Will add one if needed)

The product images are stored in **_/productImages_**. If you wanna add a new product or update a current one, you can simply set the image path to the name of one of the five images added and the path will be set in **_frontend\src\Components\Home\ProductDisplay\ProductDetailsExtended.js_**. You can also add more images if you feel like it but i recommend a 1:1 format like 900px x 900px so that they don't look streched. (In the real world scenario you typically host a separate server for images and you add the link to the necessary images in the database)
