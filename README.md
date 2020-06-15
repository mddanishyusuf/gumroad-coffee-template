This Project Demo can be viewed here : [https://coffee.mohddanish.me/](https://coffee.mohddanish.me/)

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

It's Pretty simple, you just need basic coding skills, a vercel account and a gumroad account!

### Step 1:

Fork The Repo and Setup on your local system.

`git clone https://github.com/<your_github_username>/gumroad-coffee-template.git`

`cd gumroad-coffee-template`

### Step 2:

Create a New or link an existing product using gumroad, be creative name the product whatever you like maybe it's a ice chai latte or pizza. 

### Step 3:

Navigate to the \`\`\`data.json\`\`\` File and change the values to match your profile

```
{
    "gumroadProductURL": "https://gum.co/[your-product-url-ending]",
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

### Step 4:

Affter editing, push the code stright to your github.

### Step 5:

Genarate a New Gumroad Access Token, To do this go to [https://gumroad.com/api  ](https://gumroad.com/api) and register a new OUath Application following and using the docs. Copy the Access Token, You'll need soon :

### Step 6:

Go to https://vercel.com and go to import project, select your repo and start deploying

### Step 7:

After successful deployed, go to the `Envirement Variables` Section, name the env varible as GUMROAD\_ACCESS\_TOKEN, and add your Access Token To the Value.

### Step 8:

You're done! Wasn't that easy?

## Thanks

if you love my work you can support me here with `Caffee latte - cold` - [https://coffee.mohddanish.me/](https://coffee.mohddanish.me/)

If you need help to setup this template for you. DM on Twitter - [@mdddanishyusuf](https://twitter.com/mddanishyusuf)

☕️☕️☕️☕
