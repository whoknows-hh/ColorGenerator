# Color Generation

## Background

Write a program which will produce an image in which each colour occurs exactly once -- with no repetition and no used colours. Colours are formed by combining a red, green, and blue component in the range 0..256; your program will need to break each component into 32 steps -- 8, 16,24, .. 256 -- which means you will have 32,768 discrete colours. Your image will therefore need to be sized to accommodate exactly this number of unique colours -- for example, 256x128px (although other dimensions are possible).

## How to run

- npm install - install dependancy packages(node version should be greater than V13.2.0 to support es6 module)
- npm start - run the app. By default, it's running on (http://localhost:3000)
- npm test - run unit tests

## Design

I considered 3 ways of implementing this from the front-end: div, svg and canvas. I choose to use canvas since it has better performance and easy to implement. 
It creates a component which is a canvas element that is reusable.

React is used to implement this solution along with Hook. 

Size of the image can be modified by selecting a width from the page, selecting "Auto" will result in auto-calculation of the size. Also, the size of the block can be modified from the slide.

The main algorithm of generating the color is to treat each RGB color as a 32-bit based number and using an iterator to go across and calculate the exact RGB at the given index. This will reduce three for loops into one.

## Code structure

- / public
- /----index.html - main entry of the project  
- / src
- |----App.css - CSS of the page
- |----App.js - Wrap the Canvas component inside it and return it to the main page
- |----Canvas.js - Create the component which is a canvas element
- |----helper.js - Common functions
- |----index.js - Attach the App to the index.html
- / test
- |----helper.test.js - Unit test

## Developing environment

- node version: v14.15.3
- npm version: v6.14.10

## Version History

- 1.0.1 Width selection and block size enabled by adding dropdown and slide
- 1.0.0 Color generation working

## TODOs

- Due to limited time, this only implemented the core logic of the color generation app. 
- Time cost of the algorithm is now O(n2), this can be optimised by using some advanced algorithm.
- For the interview purpose, I used creat-react-app to generate the skeleton, the dependencies are too heavy. This can be optimised.
