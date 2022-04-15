
## Markdown and XSS

Cross-side scripting is a well known technique to gain access to private information of the users of a website. The attacker injects spurious HTML content (a script) on the web page which will read the user’s cookies and do something bad with it (like steal credentials). As a countermeasure, you should filter any suspicious content coming from user input. Markdown doesn’t include an XSS filter, so you must provide your own. But be careful in how you do it…

The basic rule is this: **filter for XSS _after_ Markdown has processed any input, not before**. If you filter before, it’ll break some of Markdown’s features and will leave security holes. Also take note that even if you use PHP Markdown in [no markup](https://michelf.ca/blog/2007/php-markdown-no-markup/) mode, where it strips HTML tags, you aren’t safe from XSS. Let me show you why.

Here is an example of mixed HTML/Markdown XSS attack. It’s a link containing a script (this script is innocuous, but a real attacker’s script will not be).

    > hello <a name="n"
    > href="javascript:alert('xss')">*you*</a>

Now, let’s say we’re wrongly applying an XSS filter _before_ Markdown to filter bad HTML. The XSS filter, expecting HTML, will likely think the `<a>` tag ends with the first character on the second line and will leave the text snippet untouched. It’ll fail to see that the `href="javascript:…"` thing is part of the `<a>` element and leave it alone. But when Markdown converts this to HTML, you get this:

    <blockquote>
     <p>hello <a name="n"
     href="javascript:alert('xss')"><em>you</em></a></p>
    </blockquote>

After parsing with Markdown, the first `>` on the second line disappears because it is used as the [blockquote marker](https://daringfireball.net/projects/markdown/syntax#blockquote) in the Markdown blockquote syntax, and now you’ve got a link containing an XSS attack!

Did Markdown generate the HTML? No, the HTML was already in plain sight in the input. The XSS filter couldn’t catch it because the input doesn’t follow HTML’s rules: it’s a mix of Markdown and HTML and the filter doesn’t know a dime about Markdown.

As for why disallowing HTML markup within Markdown doesn’t solve the problem, consider this other attack vector using the Markdown syntax itself to create dangerous links:

    [some text](javascript:alert('xss'))

Once the text is processed by Markdown, you get this:

    <a href="javascript:alert('xss')">some text</a>

The XSS attack is still there! Markdown isn’t an XSS filter, it just makes a link from the URL you give it.

Again, if you apply the XSS filter before Markdown, it won’t filter anything as it’ll see the whole a plain text. But, most importantly, it shows that you need an XSS filter even if you have set Markdown to allow no markup, otherwise you risk javascript injection on your site.

So the conclusion is that, if you want real security, you need to filter Markdown’s _output_, not the input. There’s no other choice.

Note that if you’re using Wordpress, it is already using the [kses](http://sourceforge.net/projects/kses/) XSS filter that should work correctly with PHP Markdown.
