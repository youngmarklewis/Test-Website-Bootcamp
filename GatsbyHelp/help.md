# Set Up Your Development Environment

## Using the Gatsby CLI:

```
npm install -g gatsby-cli
```

```
gatsby --help
gatsby -v

```

## Create a new site from a starter:

```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

## Start the development mode:

Start server

```
npm run develop
```

Open up a new tab in your browser and navigate to: http://localhost:8000/

Stop server

```
ctrl + c
```

# Gatsby Basics

## Sample index page:

```
import React from 'react'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Mark and I'm learning Gatsby </h2>
    </div>

  )
}

export default IndexPage
```

## Link pages

Link to a page within the site:

```
<Link to="/contact">Contact me.</Link>
```

Link to an external page:

```
<a href="https://www.bbc.co.uk" target="_blank">BBC</a>
```

```
target="_blank"
```

Opens in a new window

# GraphQL

Open in the browser whilst gatsby developer is running:

```
http://localhost:8000/___graphql
```

Example basic query to fetch the site title:

```
query {
  site {
    siteMetadata {
      title
    }
  }
}
```

This returns:

```
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "My Full-Stack Website"
      }
    }
  }
}
```

Example basic query to fetch the site author:

```
query {
  site {
    siteMetadata {
      author
    }
  }
}

```

This returns:

```
{
  "data": {
    "site": {
      "siteMetadata": {
        "author": "Mark Young"
      }
    }
  }
}
```

# GraphQL alternative -

tbc

# Generating Slugs for posts

A Slug is a user friendly url for a specific post that we want to assign to an .md file

To create a slug we need to:
1. Take the .md file e.g Gatsby.md
2. Assign it a url e.g. /blog/gatsby


