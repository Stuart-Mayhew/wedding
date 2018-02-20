<?php

$EmailFrom = "sender@examplewedding.co.uk";
$EmailTo = "rsvp@examplewedding.co.uk";
$Subject = "RSVP";
$Name1 = Trim(stripslashes($_POST['name'][0]));
$Name2 = Trim(stripslashes($_POST['name'][1]));
$Name3 = Trim(stripslashes($_POST['name'][2]));
$Name4 = Trim(stripslashes($_POST['name'][3]));
$Name5 = Trim(stripslashes($_POST['name'][4]));
$Name6 = Trim(stripslashes($_POST['name'][5]));
$Attendance = Trim(stripslashes($_POST['attendance']));
$Invitation = Trim(stripslashes($_POST['invitationType']));
$Transport = Trim(stripslashes($_POST['guestTransport']));
$Meal1 = Trim(stripslashes($_POST['meal1']));
$Meal2 = Trim(stripslashes($_POST['meal2']));
$Meal3 = Trim(stripslashes($_POST['meal3']));
$Meal4 = Trim(stripslashes($_POST['meal4']));
$Meal5 = Trim(stripslashes($_POST['meal5']));
$Meal6 = Trim(stripslashes($_POST['meal6']));
$Diet = Trim(stripslashes($_POST['diet']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}



// prepare email body text
$Body = "";
$Body .= "Guest 1: ";
$Body .= $Name1;
$Body .= "\n";
if ($Invitation === "ceremony & reception") {
        $Body .= "";
        $Body .= "Meal choice: ";
        $Body .= $Meal1;
        $Body .= "\n";
    }
if ($Name2) {
    $Body .= "";
    $Body .= "Guest 2: ";
    $Body .= $Name2;
    $Body .= "\n";
    if ($Invitation === "ceremony & reception") {
        $Body .= "";
        $Body .= "Meal choice: ";
        $Body .= $Meal2;
        $Body .= "\n";
    }
}
if ($Name3) {
    $Body .= "";
    $Body .= "Guest 3: ";
    $Body .= $Name3;
    $Body .= "\n";
    if ($Invitation === "ceremony & reception") {
        $Body .= "";
        $Body .= "Meal choice: ";
        $Body .= $Meal3;
        $Body .= "\n";
    }
}
if ($Name4) {
    $Body .= "";
    $Body .= "Guest 4: ";
    $Body .= $Name4;
    $Body .= "\n";
    if ($Invitation === "ceremony & reception") {
        $Body .= "";
        $Body .= "Meal choice: ";
        $Body .= $Meal4;
        $Body .= "\n";
    }
}
if ($Name5) {
    $Body .= "";
    $Body .= "Guest 5: ";
    $Body .= $Name5;
    $Body .= "\n";
    if ($Invitation === "ceremony & reception") {
        $Body .= "";
        $Body .= "Meal choice: ";
        $Body .= $Meal5;
        $Body .= "\n";
    }
}
if ($Name6) {
    $Body .= "";
    $Body .= "Guest 6: ";
    $Body .= $Name6;
    $Body .= "\n";
    if ($Invitation === "ceremony & reception") {
        $Body .= "";
        $Body .= "Meal choice: ";
        $Body .= $Meal6;
        $Body .= "\n";
    }
}
$Body .= "";
$Body .= "Attendance: ";
$Body .= $Attendance;
$Body .= "\n";
if ($Attendance === "Yes") {
    $Body .= "";
    $Body .= "invitation type: ";
    $Body .= $Invitation;
    $Body .= "\n";
}
if ($Invitation === "ceremony & reception") {
    $Body .= "";
    $Body .= "Transport needed: ";
    $Body .= $Transport;
    $Body .= "\n";
    $Body .= "";
    $Body .= "Allergies listed: ";
    $Body .= $Diet;
    $Body .= "\n";
}

// send email
$success = mail($EmailTo, "$Subject from $Name1", $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html\">";
}

?>
