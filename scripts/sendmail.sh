#!/bin/sh

title="Blog | $(sed -n 's/\s*title:\s*"\(.*\)"/\1/p' $1 | head -n1)"
url="http://tim.clifford.lol/blog/$(echo $1 | perl -pe 's|.*?/(.*)\.md$|\1|')"

header="\
To: blog@clifford.lol
Subject: $title
Content-Type: text/html; charset=UTF-8
"
headertest="\
To: tim@clifford.lol
Subject: [Test] $title
Content-Type: text/html; charset=UTF-8
"
footer="
<hr />
<p>
  You are recieving this email because you opted in via
  <a href=\"https://tim.clifford.lol\">tim.clifford.lol</a>
</p>
<p>
  <a href=\"$url\">View in a browser</a>
</p>
<p><a href=\"\">Unsubscribe</a></p>
"
if echo "$headertest$(pandoc $1)$footer" | msmtp -t -a blog; then
	read -p "Ok? (y/N)" yn
	if echo $yn | grep '^y'; then
		echo "$header$(pandoc $1)$footer" | msmtp -t -a blog
	fi
fi
