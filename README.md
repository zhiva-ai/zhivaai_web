<h1 align="center" style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
  <img src="src/components/NavModule/medvision_logo.svg" height="50px" /> ZhivaAI Website
</h1>

Page built with [GatsbyJS](https://www.gatsbyjs.com/).

## Getting started

1.  **Prerequisites**

    - Node 14+

2.  **Clone the repository**

    ```shell
    git clone https://github.com/zhiva-ai/zhivaai_web.git
    ```    

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd zhivaai_web/
    npm install
    npm run start
    ```

4.  **Open your site**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._
    
## Edit site content

- **config.js** - this file contains all editable sentences, edit and push changes to update website
- **blog posts** - see [blog Wiki](https://github.com/zhiva-ai/zhivaai_web/wiki/Add-article-on-Blog)
- **products** - see [product Wiki](https://github.com/zhiva-ai/zhivaai_web/wiki/Add-product-page)

## 🧐 What's inside?

A quick look at the top-level files and directories
```
.
├── node_modules
├── content
├── gatsby
├── images
├── src
├── static
├── .gitignore
├── .prettierignore
├── .prettierrc
├── config.js
├── gatsby-config.js
├── gatsby-node.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/content`**: This directory will contain all products and blog posts loaded into gatsby as a data source.

2.  **`/gatsby`**: This directory contains configs used by gatsby.

2.  **`/images`**: Images used by gatsby as data source.
    
2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
    
2.  **`/static`**: Files from this directory are directly copied to the server.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`config.js`**: Contains site metadata (including all texts from the site).
    
6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

10.  **`LICENSE`**: Gatsby is licensed under the MIT license.

11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

13. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
