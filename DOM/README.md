
# Using the Document Object Model

The  _Document Object Model_  (DOM) is an API for manipulating DOM trees of HTML and XML documents (among other tree-like documents). This API is at the root of the description of a page and serves as a base for scripting on the web.

## What is a DOM tree?

A  **DOM tree**  is a  tree structure  whose nodes represent an HTML or XML document's contents. Each HTML or XML document has a DOM tree representation. For example, consider the following document:

```
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>

```

Copy to ClipboardCopy to Clipboard

It has a DOM tree that looks like this:

![The DOM as a tree-like representation of a document that has a root and node elements containing content](https://github.com/freelancres/Advanced_JS/blob/main/DOM/using_the_w3c_dom_level_1_core-doctree.jpg)

Although the above tree is similar to the above document's DOM tree, it's not identical, as  the actual DOM tree preserves whitespace.

When a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document.

## What does the Document API do?

The Document API, also sometimes called the DOM API, allows you to modify a DOM tree in  _any way you want_. It enables you to create any HTML or XML document from scratch or to change any contents of a given HTML or XML document. Web page authors can edit the DOM of a document using JavaScript to access the  `document`")}} property of the global object. This  `document`  object implements the  [`Document`] interface
