#!/bin/sh

title="Blog | $(sed -n 's/\s*title:\s*"\(.*\)"/\1/p' $1 | head -n1)"
url="http://tim.clifford.lol/blog/$(echo $1 | perl -pe 's|.*?/(.*)\.md$|\1|')"

envelope_real="\
To: blog@clifford.lol
Subject: $title"

envelope_test="\
To: tim@clifford.lol
Subject: [Test] $title"

header_html="
<p>
  <a href=\"$url\">View in a browser</a>
</p>
"
header_plain="\
View in a browser: $url
"

footer_html="
<hr />
<p>
  You are recieving this email because you opted in via
  <a href=\"https://tim.clifford.lol\">tim.clifford.lol</a>
</p>
<p>
  To unsubscribe, email tc565-blog-request@srcf.net with subject line
  \"unsubscribe &lt;password&gt;\"
</p>
"

footer_plain="
---

You are recieving this email because you opted in via tim.clifford.lol.
To unsubscribe, email tc565-blog-request@srcf.net with subject line
\"unsubscribe <password>\"
"

mail_noenvelope="\
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary=proprietarysoftwareismalware

--proprietarysoftwareismalware
Content-Type: text/html; charset=utf-8

$header_html
$(pandoc $1 --to html)
$footer_html

--proprietarysoftwareismalware
Content-Type: text/plain; charset=utf-8

$header_plain
$(pandoc $1 | ~/.config/neomutt/handle-html.sh)
$footer_plain

--proprietarysoftwareismalware--
"

mail_test="\
$envelope_test
$mail_noenvelope"

mail_real="\
$envelope_real
$mail_noenvelope"

if [ "$2" = "--test" ]; then
	echo "$mail_test" | msmtp -t -a blog
else
	echo "$mail_real" | msmtp -t -a blog
fi
