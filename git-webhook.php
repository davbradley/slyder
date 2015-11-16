<?php
// Set Variables
$LOCAL_REPO = dirname(__FILE__);
$BRANCH = "master";
if (/* $_POST['payload'] */ true) {
	// Only respond to POST requests from Github
	shell_exec("cd $LOCAL_REPO && git pull origin $BRANCH");
	die("git pull done " . time());
}
