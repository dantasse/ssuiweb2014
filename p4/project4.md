<link href="../stylesheets/GitHub2.css" rel="stylesheet"></link>
## SSUI-05/633D Web Lab
# Project 4: Your Own Project

### Due: Tuesday, November 25, 2014 by 8:00 pm

##Project Overview
This one's up to you. You can define your own project. It must:

- contain a significant amount of javascript (beyond libraries that you use. You can use whatever libraries you want, but you should at least do something interesting in Javascript yourself too.)
- contain some server component (which you can just run locally, no need to put it up on Heroku or AWS or anything)
- have aesthetic (animation or something pretty), entertainment (game?), or practical value
- work. (no mockups. and no "oops, I guess there's a bug"; test it.)

Projects should be done on your own. This class focuses on UIs, so that's the most important part here. For example, if you're making a game, it's better to have a fluid, easy-to-play game with kind of dumb/simple mechanics than to have a complicated and ugly but fun game.

## Proposals
Due Thursday, Oct 30. Propose 1-3 topics, each with two paragraphs: a paragraph describing the end goal, and a paragraph describing how you plan to implement it. Send these in an email to me (dantasse@cmu.edu), with subject line starting with [SSUI p4]. I'll provide feedback and then the final topic will be due on November 6.

## Example ideas

- Take something you built from a previous project (i.e. a game for the drawing library or an interactive component from your state machines project) and build something really amazing from it.
- Build a game.
- Build a 3D model using WebGL (i.e. http://madebyevan.com/webgl-water/. Only attempt if you’re good at graphics and have a lot of free time!)
- Build a useful application, like a photo gallery, a memo, ...
- Make your personal website much more compelling/interactive (if you already had a website, save an old version of it so I can compare).

If you have an idea, but it's not hard enough, you can make it run nicely on mobile (dealing well with different screen sizes and touch events), or make it a reusable library so other developers can drop it in and use it.

If you have an idea, but you're worried that it's too hard, try to build a realistic failure plan if you can't get it all to work. That is, if you want to do A+B+C+D, then make sure that A+B or A+B+C would each be a good (if less amazing) project.

## Presentations
Thursday, Dec. 4th, 10:30-11:50am, SCR 172 (regular place)  

If you can't come because of classes or other reasons, let me know by the end of Dec. 3 or you will lose some points.
4-minute presentation, 1-minute for questions. No slides necessary, just tell us what you built, show us what's cool about it, and talk about the most challenging part.

## Turning Your Program In

This project has the same procedure as Projects 0-3. Make sure to include all files that your project requires to run. As before, include a README.txt; on this project, be sure to also describe what you did.
Also, be sure to cite every library you use, including libraries that you've built yourself previously (if applicable).

Because there's a server portion, you have a few options:

- use a Node server, and include a package.json file that shows me which dependencies to install
- use a python server, and include a requirements.txt file; I'll run "virtualenv env/" then "pip install -r requirements.txt" then run your server
- use whatever other server you want, and include detailed instructions in the README.txt for me to set it up myself
- run a server yourself (any way you want) and have your project point to it. You'll lose 5 points if the server happens to be down when I'm grading, so try your best to make sure it'll be up. Heroku (free plan) is not bad for this, AWS might work, App Engine is a little harder, or you can just run it on your machine and make sure it keeps running.

##Grading

100 points:  

- 70 points: Peer evaluation
  - based on technical implementation and presentation
- 20 points: Substantial and interesting use of Javascript
  - simple: 0-10 points; moderate: 10-15; difficult: 15-20.
  - I'll estimate how hard I think your project will be as part of the proposal feedback.
- 10 points: Participation in presentation and peer grading
