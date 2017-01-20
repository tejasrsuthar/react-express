import React, { Component } from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
It's time to install React!

React comes in two parts, React and ReactDOM. React includes the core component APIs and rendering logic. ReactDOM contains the necessary APIs to render to the browser DOM.

# Installation

Let's install both

${<pre><code>{
`npm install --save react react-dom`
}</code></pre>}

# Usage

Assuming a webpack + babel build setup like in the previous pages, we'll first want to modify our \`index.html\` to include a DOM node for us to render our React app into:

${<pre><code>{
`<!-- index.html -->
<div id="app"></div>
<script src="./bundle.js"></script>`
}</code></pre>}

Note: order matters! It's often best to load your \`bundle.js\` at the end of the html body, so that your DOM content (in this case, the \`div\`) has rendered prior to executing the bundle, since we need to access the DOM during rendering.

We can then change our \`index.js\` to look like this:

${<pre><code>{
`// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        Welcome to React!
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)`
}</code></pre>}

## Running the development server

Now we can run \`npm run dev\` to run the script we set up in the \`package.json\`. This will start the development server. If we navigation to \`localhost:8080\` in a browser, we should see our \`index.html\` file, which will run our \`index.js\` bundled into \`bundle.js\`, displaying \`Hello World!\` on the screen.

![Hello World](react-hello-world.png)

For reference, our directory should look like this:

![Hello World](react-sublime.png)

## That's it!

You now know how to set up a React app from scratch using Webpack and Babel. This should be a good enough starting point to build any kind of app in React. You can add more webpack and babel plugins incrementally as you start working with React.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
