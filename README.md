# Work-Load-Manager

```
ABOUT
```

I track my hours of work in terms of 52 minutes on, 17 minutes off. I thought since i'm learning a bit about fullstack development I should build a project. Automating such a tracker would be pretty nifty, going to try to make it functional for anyone interested in managing their time in such a way.

```
INSTRUCTIONS
```

node server.js to run program

package.json is run with npm start, and we put a script there to be run called start, which runs
this bitch (webpack.config.js), which in turn uses babel via module to transpile all of our code
in /src that is a .js file, and forms a ES5 friendly version in the public folder
which index.html is going to point to budle.js which is compiled by webpack based on our js files
ALSO, npm start updates the bundle.js file
