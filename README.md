# CV Generator

My implementation of the [CV application project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application) for [The Odin Project](https://www.theodinproject.com/). Try it [here](https://cv-generator-react-app.vercel.app/)!

## Description:

This is a small react app where users can input their information and generate a CV/résumé. I set up the application using [Vite](https://vitejs.dev/) and deployed it using [Vercel](https://vercel.com/).

![Screenshot of generated example CV](./public/demo-img.png)

## Features:

- Button to automatically fill out input fields so that users can preview a generated example CV
- Button to clear all input fields
- Buttons for adding and deleting educational and work experiences
- When you done writing your resume, press the Generate my CV! button, print preview the page (cmd-p, ctrl-p), save to PDF, and you are all set!

## Future Features:

- Add a Technical Skills and Projects section to the form.
- Add built-in AI text generation tools to proof read and recommend improvements to your resume.

## What I learned:

- How to use Vite to set up a new React project
- Basics of writing JSX
- Basics of React, including:
  - Writing, rendering, importing and exporting components
  - Rendering lists of components using the `map()` method of Array
  - Conditionally rendering UI
  - Using keys appropriately so that React can handle the DOM effectively and efficiently
  - Passing data between components using props
  - Managing state and sharing state between components
  - Controlling components such as input fields