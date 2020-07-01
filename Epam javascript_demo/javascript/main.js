	
	function sign()
	{
		           if(confirm("are you want to submit ?"))
					 {
						login();
					  
					 }
					 else{
					 alert(" form is not submitted");
					 }
	}

function login()
 {
  var x = document.forms["das"]["eml"].value;
   var y = document.forms["das"]["pas"].value;
   
   // if email is ssamanta166@gmail.com and password is 1234 then print login successfully
   if (x=="ssamanta166@gmail.com" & y=="1234")
	  {
	
         alert("login successfully!!!");
	  }
	  else
	  {
        alert("Invalid login or wrong user and password \n"+"\n your emaild is :  "+x+"\n your password is :  "+y);
	  }
	
 }
 
 function fg()
 {
		 if(confirm("are you want to submit ?"))
					 {
						inside_fg();
					  
					 }
					 else{
					 alert(" form is not submitted");
					 }
					 
 }
 
function inside_fg()
 {
  var x = document.forms["my"]["emailid"].value;
	  
	  if (x=="ssamanta166@gmail.com"){
	  
    alert("you will get an email to "+x+ " \n please check your mail. Thank you !!!");
	close();
	
	}
	
	else
		{
	      alert("your email id "+x+" is not registered or invalid");
	   }
	
  }
  
  
  
  
  	function registration(){
		 if(confirm("are you want to submit ?"))
					 {
						reg();
					  
					 }
					 else{
					 alert("form is not submitted");
					 }
					 
				}
function reg() {
  var n = document.forms["das"]["fname"].value;
    var e = document.forms["das"]["emailid"].value;
	var cn = document.forms["das"]["cn"].value;
	var db = document.forms["das"]["dob"].value;
	var gen = document.forms["das"]["dept"].value;
	 var p = document.forms["das"]["ps"].value;
	  var cp= document.forms["das"]["cpa"].value;
	  if (p==cp)
	  {
	  
	alert("your given  details are... \n"+"Name :  "+n+"\n Email :  "+e+"\n Contact :  "+cn+"\n DOB :  "+db+"\n Gender :  "+gen+"\n Password :  "+p);
	
    alert("your registration is completed sucessfully !!! \n we will send you to log in page...");
    close();
	}
	else{
	alert("password do not match!!!! \n your password and confirm password must be same.\n please check it and try again...")
	
	}
	
	
	
	
  }
  
  
  function gml()
  {
	 window.open("https://accounts.google.com/servicelogin","_blank");
	 //alert("gmail");
	  
  }
  
  
    
  function fb()
  {
	 window.open("https://www.facebook.com/login","_blank");
	 //alert("facebook");
	  
  }
  
  
    
  function epam()
  {
	  window.open("https://login.epam.com/","_blank");
	 //alert("epam");
	  
  }