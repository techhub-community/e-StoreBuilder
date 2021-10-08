# HacktoberFest-2021 🏆

#### 🎯 HacktoberFest - The month long festival for developers

- This repository aims to give an introduction as to how the Open Source World functions. Use this project to make your first contribution to an open-source project on GitHub. Practice making your first pull request to a public repository before doing the real thing!

- Make sure to grab some cool swags during Hacktoberfest by getting involved in the open-source community and completing some simple tasks in this project.

- This repository is open to all members of the GitHub community. Any member can contribute to this project without being a collaborator. We encourage first time contributors, and also have interesting tasks for experienced developers.


# <b>What is Hacktoberfest?</b> 😕

A month-long celebration from October 1st to October 31st presented by Digital Ocean and DEV Community collaborated with GitHub to get people involved in Open Source. Create your very first pull request to any public repository on GitHub and contribute to the open-source developer community.

https://hacktoberfest.digitalocean.com/

## Rules ⚓

To earn your Hacktoberfest tee or tree reward, you must register and make four valid pull requests (PRs) between October 1-31 (in any time zone). PRs can be made to participating public repos on GitHub, those that have the Hacktoberfest topic. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate. This year, the first 70,000 participants who successfully complete the challenge will be eligible to receive a prize.

- <b>Read the participation details to learn how to earn your Hacktoberfest tee or tree reward. </b>

- <b>Those who have not registered yet for hacktoberfest can get themselves registered <a href="https://hacktoberfest.digitalocean.com/register">HERE</a></b>
<hr>

# How to Setup & Contribute 

<details>
 <summary> click here</summary>
 
 ### 0. Star The Repo :star2:

Star the repo by pressing the topmost-right button to start your wonderful journey.


### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [e-StoreBuilder](https://github.com/techhub-community/e-StoreBuilder) by using the <kbd><b>Fork</b></kbd></a> button on top-right of your screen.

 [![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)](https://github.com/ietebitmesra/Hacktoberfest-21/)


### 2. Clone it :busts_in_silhouette:

`NOTE: commands are to be executed on Linux, Mac, and Windows(using Powershell)`

You need to clone (download) it to local machine using

```sh
$ git clone https://Your_Username//e-StoreBuilder.git
```

> This makes a local copy of the repository in your machine.
Once you have cloned the `Hacktoberfest-21` repository in Github, move to that folder first using change directory command on Linux, Mac, and Windows(PowerShell to be used).

```sh
# This will change directory to a folder Hacktoberfest-21
$ cd Hacktoberfest-21
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/Your_Username/e-StoreBuilder.git (fetch)
origin  https://github.com/Your_Username/e-StoreBuilder.git (push)
```

Now, let's add a reference to the original [e-StoreBuilder](https://github.com/techhub-community/e-StoreBuilder) repository using

```sh
$ git remote add upstream https://github.com/techhub-community/e-StoreBuilder
```

> This adds a new remote named ***upstream***.
See the changes using

```sh
$ git remote -v
origin    https://github.com/Your_Username/e-StoreBuilder.git (fetch)
origin    https://github.com/Your_Username/e-StoreBuilder.git (push)
upstream  https://github.com/Remote_Username/e-StoreBuilder.git (fetch)
upstream  https://github.com/Remote_Username/e-StoreBuilder.git (push)
```
`In your case, you will see`
```sh
$ git remote -V
origin    https://github.com/Your_Username/e-StoreBuilder.git (fetch)
origin    https://github.com/Your_Username/e-StoreBuilder.git (push)
upstream  https://github.com/ietebitmesra/e-StoreBuilder.git (fetch)
upstream  https://github.com/ietebitmesra/e-StoreBuilder.git (push)
```

### 4. Sync it :recycle:

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune
# Switch to `master` branch
$ git checkout master
# Reset local `master` branch to match the `upstream` repository's `master` branch
$ git reset --hard upstream/master
# Push changes to your forked `Hacktoberfest-21` repo
$ git push origin master
```

### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/techhub-community/e-StoreBuilder/pulls).

### 6. Create a new branch :bangbang:

Whenever you are going to contribute. Please create a separate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and switch to branch Folder_Name
$ git checkout -b BranchName
```

Create a separate branch for contribution and try to use the same name of the branch as of folder.

To switch to the desired branch

```sh
# To switch from one folder to other
$ git checkout BranchName
```

To add the changes to the branch. Use

```sh
# To add all files to branch Folder_Name
$ git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin BranchName
```

Finally, go to your repository in the browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effor
 
 
 
 
 
</details>

# Hacktoberfest E-store Builder
 
 Link: 

Idea images:
(Final project may or may not look the same)

<!-- ![enter image description here](https://i.ibb.co/GMDG6BY/Screenshot-2021-10-06-at-11-07-22-PM.png) -->

<!-- ![enter image description here](https://i.ibb.co/984dNgX/Screenshot-2021-10-06-at-11-13-43-PM.png) -->

## About The Project:

This is an e-store builder, using which you can setup your own online store without any prerequisite knowledge of software development. We would like the application to be responsive and helpful to it's users.

We would also like to add support for frontend and backend part of user's online store by managing their 
order details,payment details and customer feedbacks.

**Features:**

1. Add Navbar (Home, Explore, About, etc..(as needed))

2. Better background

12. Make UI better

13. Make application responsive.


**Optional Feature:**



**Note:**

1. Users may open their own issues and also can implement any other awesome feature if they wish(as long as it is relevant to the project).

2. You may refer to docs of the api at .

3. We are using Next.js in this app.

4. You are always welcome to make the code functionality better and faster.

Any small/big but useful changes are welcome. Hope, it would be a great learning experience for you all :D


## Steps To follow: 📜

**(a) Go to the issues tab of this repository and find any issue that you would like to work on. You can also create your own issue.**

**(b) Get yourself assigned to that issue.**

**(c ) Open the cloned repository on your local machine.**

**(d) $cd e-StoreBuilder**

**(e) Create a separate branch for that issue $git checkout -b issueName/issueNumber**

**(f) Try your best to fix the issue (Good Luck! =))**

**(g) Once the issue is fixed, just give us a Pull Request, and you are done!!**

**Congratulations !!** **🥳**

**Humble Request !important**

All the enthusiastic contributors are requested to add their part carefully following the proper code block which is to be to be copy-pasted and then edited. Also, before sending a PR, it would be great if you yourself render the html page at least once to see how your changes are manifested. There have been instances where a single contribution destroyed the entire layout of the page, even affecting others' contributions.

© 2021 GitHub, Inc.
Terms
Privacy
Security
