#Color Generator

## Background

Write a program which will produce an image in which each colour occurs exactly once -- with no repetition and no used colours. Colours are formed by combining a red, green, and blue component in the range 0..256; your program will need to break each component into 32 steps -- 8, 16,24, .. 256 -- which means you will have 32,768 discrete colours. Your image will therefore need to be sized to accommodate exactly this number of unique colours -- for example, 256x128px (although other dimensions are possible).

## How to run

- npm install - install dependancy packages(node version should be greater than V13.2.0 to support es6 module)
- npm start - run the app. By default, it's running on (http://localhost:3000)
- npm test - run unit tests

## Design

I considered 3 ways of implementing this from the front-end: div, svg and canvas. I choose to use canvas since it has better performance and easy to implement. 
It creates a component which is a canvas element that is reusable.

React useEffect and useRef are used to implement this solution. 

The main algorithm of generating the color is to treat each RGB color as a 32-bit based number and using an iterator to go across and calculate the exact RGB at the given index. This will reduce three for loops into one.

## Code structure

- / public
- /----index.html - main entry of the project  
- / src
- |----App.js - Wrap the Canvas component inside it and return it to the main page.
- |----Canvas.js - Create the component which is a canvas element.
- |----helper.js - Common functions
- |----index.js - attach the App to the index.html
- / test - unit test

## Developing environment

- node version: v14.15.3
- npm version: 6.14.10

## TODOs

- Due to limited time, this only implemented the core logic of the color generator app. 
- The size of the picture is semi hard-coded, this can be parametrized and pass from the page.
- Time cost of the algorithm is now O(n2), this can be optimised by using some advanced algorithm.
- For the interview purpose, I used creat-react-app to generate the skeleton, the dependencies are too heavy. This can be optimised.
- Other unrelated functions (e.g. css, color switch etc.) are not in the place since color generating is the main task. 
