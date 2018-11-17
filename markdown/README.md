title: Markdown
author: Feng Tao
tags:
  - Useful Tool
categories: []
date: 2017-01-12 17:05:00
---
# Markdown Syntax Reference

From [http://daringfireball.net/projects/markdown/](http://daringfireball.net/projects/markdown/)
> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows
> you to write using an easy-to-read, easy-to-write plain text format, then
> convert it to structurally valid XHTML (or HTML).

Dataset summaries and discussions on data.world use the Markdown format. This
means that users can create beautiful documentation with simple markup that's
easy to write and read.

This document will show you how to take advantage of Markdown to format your
summary and discussion posts.

## Phrase Emphasis
```
*italic*   **bold**
_italic_   __bold__
```

*italic*   **bold**

<!-- more -->

## Links

Inline:
```
An [example](http://url.com/ "Title")
```
An [example](http://url.com/ "Title")

Reference style labels (titles are optional):

```
An [example][id]. Then, anywhere
else in the doc, define the link:

   [id]: http://example.com/  "Title"
```

## Images

Inline (title is optional):
```
![alt text](/path/img.jpg "Title")
```

Reference style:
```
![alt text][id]

    [id]: /url/to/img.jpg "Title"
```

## Headers

The following formats can all be used interchangeably for headers.
```
Header 1
========

Header 2
--------

# Header 1 #

## Header 2 ##

# Header 1

## Header 2
```


## Lists

Ordered, without paragraphs:
```
1.  Foo
2.  Bar
```

1.  Foo
2.  Bar

Unordered, with paragraphs:
```
*   A list item.
    With multiple paragraphs.
*   Bar
```

*   A list item.
    With multiple paragraphs.
*   Bar

You can nest them:
```
*   An unordered list item
    * A nested unordered list item
*   Another list item
    1.  The first nested ordered list item
    2.  A second nested ordered list item
        * A nested unordered list
    3. This is the last nested ordered list item
*   The last unordered list item
```

*   An unordered list item
    * A nested unordered list item
*   Another list item
    1.  The first nested ordered list item
    2.  A second nested ordered list item
        * A nested unordered list
    3. This is the last nested ordered list item
*   The last unordered list item

## Blockquotes
```
> Email-style angle brackets
> are used for blockquotes.
> > And, they can be nested.
> >
> * You can quote a list.
> * Etc.
```
> Email-style angle brackets
> are used for blockquotes.
> > And, they can be nested.
> >
> * You can quote a list.
> * Etc.


## Code Spans
```
`<code>` spans are delimited
by backticks.
```

```
You can include literal backticks
like `` `this` ``.
```

## Pre-formatted Code Blocks
Indent every line of a code block by at least 4 spaces or 1 tab, and use a
colon at the end of the preceding paragraph.

```
This is a normal paragraph:

    This is a preformatted
    code block.
```

```
Preceded by a space, the colon disappears. :

    This is a preformatted
    code block.
```

Wrapping code in three back-ticks will also format code blocks :

    ```
    Code goes here
    ```


## Horizontal Rules
Three or more dashes or asterisks:
```
---
* * *
- - - -
```

## Manual Line Breaks
End a line with two or more spaces:
```
Roses are red,••
Violets are blue.
```
(where • is a space)

## Video/Prezi Embeds
_(data.world dataset summaries only)_

Youtube
```
@[youtube](dQw4w9WgXcQ)
@[youtube](http://www.youtube.com/embed/dQw4w9WgXcQ)
@[youtube](https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=feedrec_centerforopenscience_index)
@[youtube](http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o)
@[youtube](http://www.youtube.com/v/dQw4w9WgXcQ?fs=1&amp;hl=en_US&amp;rel=0)
@[youtube](http://www.youtube.com/watch?v=dQw4w9WgXcQ#t=0m10s)
@[youtube](http://www.youtube.com/embed/dQw4w9WgXcQ?rel=0)
@[youtube](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
@[youtube](http://youtu.be/dQw4w9WgXcQ)
```

Vimeo
```
@[vimeo](19706846)
@[vimeo](https://vimeo.com/19706846)
@[vimeo](https://player.vimeo.com/video/19706846)
```

Prezi
```
@[prezi](1kkxdtlp4241)
@[prezi](https://prezi.com/1kkxdtlp4241/valentines-day/)
@[prezi](https://prezi.com/e3g83t83nw03/destination-prezi-template/)
@[prezi](https://prezi.com/prg6t46qgzik/anatomy-of-a-social-powered-customer-service-win/)
```

## Math Formulas (MathJax)
_(data.world dataset summaries only)_

```
When $a \ne 0$, there are two solutions to \\(ax^2 + bx + c = 0\\) and they are

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```
See [MathJax Homepage](http://docs.mathjax.org/) for more information.