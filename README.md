Demo of this project: [https://coffee.mohddanish.me/](https://coffee.mohddanish.me/)

## About Me
I'm 26y old Front-end Engineer with Master Degree but I can do anything related with technology. 🚀 I can make MVP in days, 🧙‍♀️ Magic with NodeJS, 🤖 Automate the boring stuffs, 👨‍💻 Hack the third party APIs for any use case, and I always get a solution of the problem. I'm foodie & love to cook 🍳.


## Why i built this
In my country, there are lots of developers who build awesome things and people use them for free. So, people love to support those developers.

But in India to get the money you have to hustle and you have to get an Import Export certificate from the government.

So, I was looking for a payment gateway that solved this problem. Just integrate and get money directly in your account without any problem.


I found gumroad is the best and easy way to collect people to support the "Buy Me Coffee" way.

## What Technology I'm using
I'm using **nextjs** for front-end and **nextjs API route** for gumroad API proxy to get your supporters message and display on the page.

I'm publishing this page on **https://vercel.com/** service for free and You can also setup your custom domain for free.

## How to Setup
You have know basic coding nothing more.

### Step 1:
Fork the repo in your account. and now clone on your machine.

`git clone https://github.com/<your_github_username>/gumroad-coffee-template.git`

`cd gumroad-coffee-template`

### Step 2:

Create a product in gumroad.

### Step 3:

Open file name `data.json` in your editor.

Here is the JSON file example:

```
{
    "gumroadProductURL": "https://gum.co/rxqNq",
    "name": "Mohd Danish",
    "subtitle": "Indie Hacker",
    "about": "I'm 26y old Front-end Engineer with Master Degree but I can do anything related with technology. 🚀 I can make MVP in days, 🧙‍♀️ Magic with NodeJS, 🤖 Automate the boring stuffs, 👨‍💻 Hack the third party APIs for any use case, and I always get a solution of the problem. I'm foodie & love to cook 🍳.",
    "profileImage": "mddanishyusuf.png",
    "links": [
        {
            "name": "Open Source Projects",
            "link": "https://github.com/mddanishyusuf",
            "type": "github",
            "category": "work"
        },
        {
            "name": "Open Source Projects",
            "link": "https://mohddanish.me/projects",
            "type": "projects",
            "category": "work"
        },
        {
            "name": "Let's Connect",
            "link": "https://twitter.com/mddanishyusuf",
            "type": "twitter",
            "category": "social"
        },
        {
            "name": "ProductHunt",
            "link": "https://www.producthunt.com/@mddanishyusuf",
            "type": "producthunt",
            "category": "social"
        }
    ]
}
```

Change the values with yours.

### Step 4:
After editing the file push the code on your github account. So, you will have your own githu repository.

### Step 5:
Get your Gumroad `Access Token` from your gumroad account. Read here is the official documentation to generate access token https://gumroad.com/api

### Step 6:
Go to https://vercel.com and click on `Import Project` and wait for to deploy.

### Step 7:
After successful deployed then add your `gumroad access token` vercel.com project settings into `Envirement Variables` Section.

### Step 8:
That's all.

## Thanks
if you love my work you can support me here with `Caffee latte - cold` - [https://coffee.mohddanish.me/](https://coffee.mohddanish.me/)

If you need help to setup this template for you. DM on Twitter - [@mdddanishyusuf](https://twitter.com/mddanishyusuf)

☕️☕️☕️

