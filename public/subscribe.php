<?php
$email = $_POST["email"];
$return_path = $_POST["return-path"];
if (strlen($return_path) == 0)
	$return_path = "/";
$error = "";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $error.="Invalid email address. If you're trying to hack me I'll be mad 😠";
} else {
	if (!shell_exec("echo '".$email."' | ssh pip srcf-mailman-add tc565-blog >> /home/tc565/logs/web-mailman 2>&1"))
		$error = "Failed to add email address. Please email me so I can fix it :)";
}
?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Email subscription php stuff</title>
	</head>
	<body>
<?php
if (strlen($error) == 0) {
	echo '<span>Successfully subscribed '.$email.'</span>';
	echo '<p/><p>Thanks for the support! You should receive email ';
	echo 'confirmation. Make sure to note down the password included in the ';
	echo 'email, or you wont be able to unsubscribe!</p>';
	echo '<p/><p>To unsubscribe, email tc565-blog-request@srcf.net with ';
	echo 'subject line "unsubscribe &lt;password&gt;"</p>';
	echo '<p/><p>PS: I know this page is ugly, it\'s a PHP bodge :P';
} else {
	echo '<span style="color: red; font-weight: bold;">'.$error.'</span>';
}

echo '<p/><span><a href='.$return_path.'>Return to previous page</a></span>';
?>
	</body>
</html>
