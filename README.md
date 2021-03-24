#Color Generator

## Background

Write a program which will produce an image in which each colour occurs exactly once -- with no repetition and no used colours. Colours are formed by combining a red, green, and blue component in the range 0..256; your program will need to break each component into 32 steps -- 8, 16,24, .. 256 -- which means you will have 32,768 discrete colours. Your image will therefore need to be sized to accommodate exactly this number of unique colours -- for example, 256x128px (although other dimensions are possible).

## How to run

- npm install - install dependancy packages(node version should be greater than V13.2.0 to support es6 module)
- npm start - run and print information for example scenarios
- npm test - run unit tests

## Design
### Create a component which is a canvas element and create the 'draw' function.
> 
### Return Canvas element wrapped in a react component.
