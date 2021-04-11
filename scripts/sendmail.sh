#!/bin/sh

title="Blog | $(sed -n 's/\s*title:\s*"\(.*\)"/\1/p' $1 | head -n1)"
url="http://tim.clifford.lol/blog/$(echo $1 | perl -pe 's|.*?/(.*)\.md$|\1|')"

header="\
To: gbw1vcf49@lists.mailjet.com
Subject: $title
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
<p><a href=\"[[UNSUB_LINK]]\">Unsubscribe</a></p>
"
echo "$header$(pandoc $1)$footer" | msmtp -t -a mailjet
