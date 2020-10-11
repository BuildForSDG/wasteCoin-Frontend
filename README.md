## PROJECT WASTECOIN

![web banner wastecoin-1](https://user-images.githubusercontent.com/26861798/95692044-95437680-0bd8-11eb-9dc1-951075b60949.jpg)



## CODACY BADGE
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d2d98e9d430a4cd385ff24e5d43b2d51)](https://app.codacy.com/gh/BuildForSDG/wasteCoin-Backend?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDG/wasteCoin-Backend&utm_campaign=Badge_Grade_Settings)

## Inspiration
It is no longer news that the world is battling with environmental challenges, chiefly amongst them is Environmental pollution caused by Non-biodegradable waste such as Plastic, Cartons, Cans, Nylons etc. Nigeria particular is said to produce no less than 150kilotons of recyclable waste as less than ten percent actually gets recycled. The rest ends up in dumps, drainage and in water bodies. This is evident as Nigeria is 9th most significant contributor to ocean plastic in the world. As environmental degradation has increased to unprecedented levels. The WasteCoin team came together via the Build for SDG Challenge Cohort 1, to identify three key problems:

●	Poor Waste Management processes

●	Wrong waste disposal perception

●	Little or no communication between buyers and sellers of waste.

## What it does
Thus, we came up with a solution – a mobile/web application that connects waste producers (sellers or users) to buyers (vendors or recycling firms). From the Seller perspective, a mobile app to collect, accumulate and withdraw earnings. While for the buyer, an e-portal to effectively monitor and manage waste collection. Thus, via this solution we could:

●	Develop a community of waste conscious society

●	Reduce waste drastically as we target over 15% of waste recycled in the next two years.

## How it works
### User Journey (Recycler)
1.	Malik downloaded the WasteCoin app and onboarded. 
2.	So, in his spare time, he collects plastics and nylons and store them OR
3.	He was in charge of office cleaning and he discovered that the office or the premises was used for some party with lots of PET bottles on the round. He picks them and store them somewhere safe OR
4.	He decided to collect these NWBs at home, from his neighbors and environment.
5.	While on his way to work, he walked into our collection center
6.	 weighted the waste and dropped it for collection and waited to be credited
7.	As measured, the equivalent amount of coins would be transferred to Malik's account.
8.	When it is sufficient for exchange, Malik could exchange it for cash, recharge card, data or any other incentives.
So, let’s say Malik was able to gather and save up to 1,000 WasteCoins after one month, that’s an equivalent of N1000 which he could cash out or request for a recharge card worth N1000.
 
### Vendor Journey (Recycling Firms)
1.	ABC recycling Ltd subscribe to use our application and as such are given access to a customized e-portal. While their cliente also access to the Mobile app.
2.	For every waste collected from Malik and other recyclers, they monitor from the e-portal. 
3.	Withdrawal requests are being processed on the portal as payment could be manual or automated.
4.	Waste data collection and Analytics can be done for modelling and other purposes.

## Building the Application
### Pre-requisites
To develop a similar application as WasteCoin, you will require that you can use and fairly be efficient in:

●	ReactJS: An open-source JavaScript library used to develop frontend applications. There is no argument that ReactJS is the go-to frontend framework for developers since it was first deployed in 2012 by Facebook. If you ask any developer, why ReactJS? Here the most common and consistent answers – it is fast, scalable and can be used to develop large-scale applications that require data change without reloading the page. Key features of ReactJS that makes it the most preferred framework include: JSX syntax, Virtual DOM and its Single-way data flow process. However, to use ReactJs, one must consider the following as prerequisites:Good understanding of HTML/CSS; Basic knowledge of JavaScript; Familiarity with ES6 syntax; and Familiar with NodeJS and yarn installation

●	Django: Framework used to develop the Backend api endpoints

●	Github: A popular cloud repository platform where you can save your code

●	VS code: A code editor. You need to download and install on your local machine.

●	Git: Version control application. You need to download and install on your local machine.

### Frontend (React)

**React Setup**

For a beginner, the easiest way to start a react project is to use the Create React App Installation instructions. The Create React App sets up the required environment on the local machine. To use it:

Go to your Command line. To do that enter CMD on the search bar 

![CMD_Image](https://user-images.githubusercontent.com/26861798/95689645-ff532000-0bc6-11eb-8bd2-0a6cea5bc5ce.png)

Click on Command Prompt. The Command Line will open.

![CMD_2](https://user-images.githubusercontent.com/26861798/95689663-30cbeb80-0bc7-11eb-9403-7be617ec6ee0.png)

To create project, run:
```npx create-react-app wastecoin
cd my-app
npm start```

Where **wastecoin** is the name I choose to give the project You could name your whatever you like.
Note: **npx** is a package runner tool that works with npm 5.2+ version

Running the above command will generate a folder called wastecoin which contains some directory as shown below

```wastecoin
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
   ├── App.css
   ├── App.js
   ├── App.test.js
   ├── index.css
   ├── index.js
   ├── logo.svg
   └── serviceWorker.js
```

Restructure your project folder structure to resemble the screenshot below

![No5](https://user-images.githubusercontent.com/26861798/95689842-91a7f380-0bc8-11eb-9fb5-11ad9e20b937.png)

**Redux Setup**

The next setup is setting up redux. This is necessary because react projects general needs a global state that stores all the information needed across the components. There is also a local state variable that is scoped to each component i.e. the variable is destroyed at the end of the component lifecycle.

To set up a redux, we need to store redux, redux-thunk using the command below

```yarn add redux redux-thunk```

After finish installing the above libraries, create a file in the redux folder, and name it **store.js**, we are going to configure the store in this file. Update this file with the code on the screenshot below:

```
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./index";

const composedEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);


export default function configureStore() {
 return createStore(
  rootReducer,
   composedEnhancers
 );
}
```

From the above the root index of our reducer  was imported which hasn’t be been created yet, don’t worry we will do that next. Next is **composedEnhancers**  setup that enables us to be able to see our global variables on the browser through the use of the React dev tools (you can browse on how to install the extension to your preferred browser). While the **configureStore** function gives us the final configuration of our global store.
The course of action is to create the root index of our reducer. Go to the root directory of the redux folder and create another called **index.js**.

```
import { combineReducers } from "redux";

import newUser from "./reducers/signUp";
import loginUser from "./reducers/signin";
import dashboard from "./reducers/dashboard";
import wallet from "./reducers/wallet";
import profile from "./reducers/profile";
import verify from "./reducers/verify";


export default combineReducers({
  newUser,
  loginUser,
  dashboard,
  wallet,
  profile,
  verify
});
```

The file connects all our reducers to the global state. The reducer is used to connect the application to the API. What it means is that this file gives access to the response or data received from the backend and makes that available on the global store which can be accessed by any component.

From the screen above, you will see that first, all the reducer from a directory called **reducers** were imported, so let create that directory. Go to the redux folder root directory and create a folder called reducers. This folder will house all our reducer where each reducer file contains the action, action creator, and the reducer function. The screen below shows a Sign In reducer file as **signin.js**.

```
import axios from "axios";
import { toast } from "react-toastify";

import { LOGIN_USER, PAGE_LOADING, PAGE_LOADED } from "./constant";
import { isLoading, isLoaded } from "../util";
import Auth from "../../components/Auth";

const loginUserAsync = (response) => ({
  type: LOGIN_USER,
  payload: response
});


export const loginUser = (userDetails, history) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/signin`, userDetails);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    }
  }

  dispatch(loginUserAsync(res.data));
  localStorage.setItem("token", res.data.token);

  Auth.login(() => {
    
  });

};

function SignIn(state = {isLoading: false}, action) {
  switch (action.type) {
    

  }
}

export default SignIn;
```

**Features**

We are done with the minimum requirement to get started for now. The whole application has different features but the main features is divided into two categories

#### a.	User onboarding (Sign in and sign up)
This comprises of signin and signout functionalities. First let creates the signin and sign up screens. Creates two folders inside the views folder directory and name them [SignIn] (https://github.com/BuildForSDG/wasteCoin-Frontend/tree/develop/src/views/SignIn) and [SignUp] (https://github.com/BuildForSDG/wasteCoin-Frontend/tree/develop/src/views/SignUp) respectively. Inside each folder create an index file called **index.jsx** (Please refer to the github link to get the html for each screens.

To validate user entry for each screens, a third party library called **react-hook-form**. To install this library run **yarn add react-hook-form** [click here for documentation] (https://react-hook-form.com/).

For complete functionality, we need to create an action and action creator (API integration).

Go to the redux directory and create a **signin.js** file inside the reducer folder. Create an action and action creator with reducer as shown below

```
const loginUserAsync = (response) => ({
  type: LOGIN_USER,
  payload: response
});


export const loginUser = (userDetails, history) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/signin`, userDetails);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    localStorage.setItem("token", res.data.token);
    if(res.data.message === "User is not verified"){
      history.push("/verify");
    }
    return toast.error(res.data.message);
  }

  dispatch(loginUserAsync(res.data));
  localStorage.setItem("token", res.data.token);

  Auth.login(() => {
    history.push("/dashboard");
  });

};

```
To authenticate user, the **onSubmit** function on the form in **View/SignIn/index.jsx** is called as shown on the screenshot below which in otherwords dispatch a loginUser function which send a post request to the login api.

```
const onSubmit = (data) => {
    dispatch(loginUser(data, props.history));
  };

```
The signup flows looks similar to the signin flow. You can check the signup flows on the github link.


#### b.     Wallet System
This is the most important feature of WasteCoin application. The flow is divided into two phrases, the user wallet system phrase and the agent/vendor system. The two phrases will be implemented inside a folder.

Let create a folder inside the view directory called **Wallet** and also create an **index.js** file inside the **Wallet** directory created. Create the wallet page design using html, css (material UI). Since we are using the same file to create the functionality for both the user phrase and the agent/vendor phrase, we need an implementation that check which view to render per time.

We are using the user role for that which is saved to the global state during login. First we will retrieve user role from the global using the hook **useSelector**

```
const userDetails = useSelector((state) => state.profile.userDetails);
  const roleTitle = userDetails && userDetails.user_details && (userDetails.user_details.role === "agent");

```
Then we use the above to determine what view to render for an agent and user i.e. it will determine either to render the **RedeemCoin** Modal or **AllocateCoin** Modal as shown below:

```
<RedeemCoinModal
        id="redeem_coin"
        history={props.history}
        exchangeRate={dashboardDetails.exchangeRate}
      />
<AllocateCoinModal
        id="allocate_coin"
        history={props.history}
        exchangeRate={dashboardDetails.exchangeRate}
     />

```
The user can redeem their coins for money exchange using the **RedeemCoinModal**. To do so, we can the create a modal with forms. When the form is submitted it calls the api that send notification to the agent which then transfer the money equivalent to the user bank.

### Backend (Django)
**Django Setup**

Head over to python.org to download python for windows and if you use Linux or a Mac upgrade to the recent python 3 using the command below

```
sudo apt-get install python3.7
```
Then install pip3 using the command below:

```
sudo apt install python3-pip
```
Since we now have python and pip installed we need to create a virtual environment where we install our dependencies for our Django application.

Install the venv library using the command below:

```
pip3 install env
```
Now create a virtual environment using the command below:

```
python3 -m venv wastecoinenv
```
where **wastecoinenv** is the name given to the virtual environment created. You can name yours whatever you wish.

Now activate your virtual environment using the command below (for Linux and Mac): 

```
source wastecoinenv/bin/activate
```
For Windows:
```
C:\Users\PATH\wastecoinenv\Scripts\activate.bat
```
Now that you’ve activated your virtual environment, install Django using the command below:

```
pip install Django
```
Now that you have Django installed, create a new project using the command below:

```
django-admin startproject wastecoinproject
```
where wastecoinproject is the name given to the new project created. You can name yours whatever you wish.

Now enter into the directory(folder) of the project and create a Django app using the command below:

```
django-admin startapp wastecoinapp
```
where wastecoinapp is the name given to the new app created. You can name yours whatever you wish. At this point, your WasteCoin Project structure should look like this:

```
[wastecoin]/				<- project root
├── [wastecoinproject]/			<- Django root
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── [wastecoinapp]/			<- app root
│   ├── __init__.py
│   ├── admin.py
│   ├── models.py
│   └── tests.py
│   ├── views.py
└── manage.py
```


If the above instructions is duly followed, let test and see. Enter this command to start your Django application server:

```
python manage.py runserver
```

And you should see the following screen below:

![No10](https://user-images.githubusercontent.com/26861798/95690366-0e889c80-0bcc-11eb-8120-c7dae7aa38a5.png)

**Setting Up  a Simple Wallet System using Django**

In this Tutorial, we cannot cover all the apis created as some are typical CRUD apis which can be found on several tutorials out there. And Django is one of the most easiest framework to develop REST apis as it makes serialization easy. While you can check out the Backend repository (Check below for the link). We shall concentrate on the Wallet System Api. 
Now that you’ve set up your Django Project, let’s create a simple wallet system. Make Migrations in your Django Project using the command below:

```
python manage.py makemigrations
```
Then Migrate:

```
python manage.py migrate
```
Create a simple user and wallet table in your models.py file, with the following code:
User Table:

```
from django.db import models
from django.utils import timezone
# Create your models here.
class User(models.Model):
   class Meta:
       db_table = "WasteCoin_user_table"
   user_id = models.CharField(max_length=500,unique=True)
   firstname = models.CharField(max_length=30,verbose_name="Firstname",blank=True)
   lastname = models.CharField(max_length=30,verbose_name="Lastname",blank=True)
   email = models.EmailField(max_length=90, unique=True,verbose_name="Email")
   user_phone = models.CharField(max_length=15, unique=True, null=True, verbose_name="Telephone number")
   user_gender = models.CharField(max_length=15, verbose_name="Gender")
   user_password = models.TextField(max_length=200,verbose_name="Password")
   user_address = models.TextField(max_length=200,verbose_name="Address")
   user_state = models.TextField(max_length=200,verbose_name="State")
   user_LGA = models.TextField(max_length=200,verbose_name="LGA")
   user_country = models.TextField(max_length=200,verbose_name="Country")
   date_added = models.DateTimeField(default=timezone.now)
   role = models.TextField(max_length=50,verbose_name="User role",default="user")
```

Wallet:

```
class UserCoins(models.Model):
   class Meta:
       db_table = "User_Coins"
   user = models.ForeignKey(User, on_delete=models.CASCADE)
   minerID = models.CharField(max_length=500,unique=True,verbose_name="miner_ID")
   redeemedWasteCoin = models.FloatField(verbose_name="redeemedWasteCoin",default=0)
   minedCoins = models.FloatField(verbose_name="minedCoins",default=0)
   date_added = models.DateTimeField(default=timezone.now)
```
Also, less we forget we need to create a table that take every transaction history when ever coins ever come in or out, so let’s add that to our code.

```
class UserTrasactionHistory(models.Model):
   class Meta:
       db_table = "User_Transaction_History"
   user = models.ForeignKey(User, on_delete=models.CASCADE)
   transaction_id = models.TextField(verbose_name="trans_id",unique=True)
   amount = models.FloatField(verbose_name="CoinAmount")
   coin_redeemed_amount = models.FloatField(verbose_name="CoinunminedAmount",default=0)
   transaction = models.TextField(max_length=10,verbose_name="Transactions")
   date_added = models.DateTimeField(default=timezone.now)
```
In the code shown above, what I simply did was create a simple table, then for every table that requires the user, I use a foreign key to reference the user name with the User coins and **UserTransactionHistory** table. Now make migrations then migrate to see the new changes in your database.

Now head over to the **views.py** file and let’s create a function that adds coins to the user and also saves that data in the transaction history

```
from api.models import User, UserCoins, UserTrasactionHistory
from CustomCode import string_generator
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["POST"])
@autentication.token_required
def credit_user(request,decrypedToken):
   try:
       coins_allocated = float(request.data.get("coins_allocated",None))
       user_MinerID = request.data.get("miner_id",None)
       field = [coins_allocated,user_MinerID]
       if not None in field and not "" in field:
           if UserCoins.objects.filter(minerID=user_MinerID).exists() == False:
               return_data = {
                   "error": "1",
                   "message": "User does not exist"

                   }
           elif User.objects.get(user_id= decrypedToken['user_id']).role != "agent":
               return_data = {
                   "error": "2",
                   "message": "Unauthorized User"

                   }
           else:
               wastecoin_user = UserCoins.objects.get(minerID=user_MinerID)  #--------------------(0)
               user = wastecoin_user.user
               user_coins = UserCoins.objects.get(user__user_id=user.user_id)
               string_generator.alphanumeric(15)
               #credit User
               add_coins = user_coins.minedCoins + coins_allocated
               user_coins.minedCoins = add_coins   #-------------------(1)
               allocate = UserTrasactionHistory(user=user,transaction_id=string_generator.alphanumeric(15),
                                                amount=coins_allocated,transaction="Credit") #-------------(2)
               user_coins.save()
               allocate.save()
               return_data = {
                   "error": "0",
                   "message": f"Successful. WasteCoin is allocated to {user.firstname} {user.lastname}"
               }
       else:
           return_data = {
               "error": "2",
               "message": "Invalid Parameters"
           }
   except Exception:
       return_data = {
           "error": "3",
           "message": "An eror occured"
           }
```
What I did here was simply import the necessary libraries and custom libraries and models we created in our models.py file. Then I added a python decorator. Before you can have access to the function created we have to make sure you are sending a POST request and also you have a token which you will provide to access the function the token is either send via the request header or query parameter, reason for this is because the wallet is a very important area in an application and you want only your users you have in your database only to be authorized to access that area. Now that we’re in the function, the request we’ll be taking from the user is the coins you want to send to her/him and the ID which in the case I refer to the Miner ID. Then we simply did some basic authentication to verify if the user details are correct using Django ORM to fetch data from the database to verify the data we collected from the user. If it’s successful and the user details are correct, we then use his miner id to fetch the user coins data, this will return an Object (0). After getting the user coins details we update the user coins with the new coins we allocated to him (1), then save the new details to his database and also in the transaction history table add his detail of the transaction. And you’re done, you’ve successfully credited that user with coins

**Withdrawing From the wallet**

```
@api_view(["POST"])
@autentication.token_required
def withdraw(request,decrypedToken):
   try:
       coins_amount = request.data.get("amount",None)
       if coins_amount is not None and coins_amount is not "":
           coins_amount = float(coins_amount)
           if coins_amount == float(0) or coins_amount < float(0):
               return_data = {
                   "error": 2,
                   "message": "Number is negative or zero"
               }
           else:
               user_coins = UserCoins.objects.get(user__user_id=decrypedToken["user_id"])
               exchange_rate = fixed_var.exchange_rate
               numofCoins = user_coins.minedCoins
               user_data = User.objects.get(user_id=decrypedToken["user_id"])
               if coins_amount > numofCoins:
                   return_data = {
                       "error": "1",
                       "message": "Not enough coins"
                   }
               else:
                   transactionid = string_generator.alphanumeric(15)
                   toNaira = exchange_rate * coins_amount
                   user_coins.minedCoins = numofCoins - coins_amount
                   user_coins.redeemedWasteCoin = coins_amount
                   user_coins.save()
                   #Save Transaction
                   transaction = UserTrasactionHistory(user=user_data,transaction_id=transactionid,
                                                       amount=coins_amount,coin_redeemed_amount=toNaira,transaction="Debit")
                   transaction.save()
                   #Add coin to the coin repository
                   return_data = {
                       "error": "0",
                       "message": "Successfully redeemed coins",
                       "transaction_id": f"{transactionid}",
                       "amount": f"{toNaira}"
                   }
       else:
           return_data = {
               "error": 2,
               "message": "Invalid Parameter"
           }
   except Exception as e:
       return_data = {
           "error": "3",
           "message": “An error occured”
       }
   return Response(return_data)
```
Just like we did for adding to the wallet, you’ll also want to withdraw from the wallet also, the block of code above gives you that ability to do so. What I did here was, added two python decorators to make sure we’re sending a POST request and the user must provide a token in the request header, through the token we get the user ID when we decrypt it using JWT (JSON web token). After that, we request the number of coins the user wants to withdraw and check for the reason why a transaction may not be successful such as insufficient balance or requesting for 0 or a negative number due to a typo. If all things go well, we deduct the coins from his current account, save the data in the transaction history and return the response to the client.

## Team
[Aminu Israel] (https://github.com/AminuIsrael) - Backend Developer

[Olarewaju Temitope Albert] (https://github.com/albert85) - Frontend Developer 

[Mohammed Bayero] (https://github.com/byruzyayandy1) - Product Manager 

[Mohammed Zubairu] (https://github.com/moxeey) - Android App Developer/Frontend Developer 

[Olagunju Daniel] (https://github.com/todak2000) - Frontend Developer, Project Manager, UI/UX (TTL) 

[Stephen Kamau] (https://github.com/stephen-kamau) - Team Mentor

## Links
[Frontend (React)] (https://github.com/BuildForSDG/wasteCoin-Frontend) 

[Backend (Django)] (https://github.com/BuildForSDG/wasteCoin-Backend)

Application: https://waste1234.herokuapp.com


## Accomplishments that the WasteCoin Team is proud of
The WasteCoin project was one of the Top 5 projects featured in Cohort 1 of the BuildForSDG program sponsored by Andela and Facebook.

We have been able to sustain the momentum of making WasteCoin a reality as we have completed the features and re-iterate base on feedback. We have our test MVP on google play store. Check it out [HERE] (https://play.google.com/store/apps/details?id=com.buildforsdg.wastecoin&hl=en)

## What We learnt

We came to understand the power of teamwork and effective communication. It really helped us during our down moments. Moreso, for some of us in the team, we took up leadership roles, some learnt new technologies, other improved their skills code-wise.

## What's next for WasteCoin
We are currently using the feedback from our Test MVP to redesign and develop a Market Fit Product (MFP). While we work on our Business and Financial Plan/Model. Though currently, we are bootstrapping, we are open to ideas, partnership and investors.

## LICENSE
MIT
