<?php

	//$to = "kmamamori@miners.utep.edu";
	//$subject = "x10: contact-email!";
	//$name = $_POST['fname'] .' '. $_POST['lname'];
	//$email = $_POST['email'];
	//$c = $_POST['comment'];
	//$message = 'Name: ' . $_POST['fname'] .' '. $_POST['lname']; . '		E-mail: ' . $email . '		Message: ' . $c;
	

	$message = "
		<html><title>Email from x10Hosting</title></html>
		<body>
			<p>FROM: ".$_POST['fname'].' '.$_POST['lname']."</p>
			<p>EMAIL: ".$_POST['email']."</p>
			<p>COMMENT: ".$_POST['comment'].".</p>
		</body>
	";

	//mail("kmamamori@miners.utep.edu, ken.amamori@gmail.com", "x10: contact", $message) && mail(".$_POST['email'].","Keep up email", "Testing if this happens." );

	($to, $subject, $message)
	if(mail("kmamamori@miners.utep.edu, ken.amamori@gmail.com", "x10: contact", $message) && mail(".$_POST['email'].","Keep up email", "Testing if this happens." )){ 
		echo "sent email";
	}else{
		echo "could not send email";
	}


?>
