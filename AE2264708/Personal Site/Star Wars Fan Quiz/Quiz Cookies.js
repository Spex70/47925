// JavaScript Document
// Get form info
	function getFormInfo(url){
		//Split information using ?
		var info=url.split("?");
		//Take the second part for the
		//info array and split into
		//name-value pairs
		var nameValuePairs=info[1].split("&");
		//Map the information to the Get Object
		var obj=new Object();
		for(var i=0;i<nameValuePairs.length-1;i++){
			var map=nameValuePairs[i].split("=");
			var name=map[0];
			var value=map[1];
			obj[name]=value;
		}
		return obj;
	}
	
// Return the document's cookies as an object of name/value pairs.
// Assume that cookie values are encoded with encodeURIComponent().
function getCookies() {
    var cookies = {};           // The object we will return
    var all = document.cookie;  // Get all cookies in one big string
    if (all === "")             // If the property is the empty string
        return cookies;         // return an empty object
    var list = all.split("; "); // Split into individual name=value pairs
    for(var i = 0; i < list.length; i++) {  // For each cookie
        var cookie = list[i];
        var p = cookie.indexOf("=");        // Find the first = sign
        var name = cookie.substring(0,p);   // Get cookie name
        var value = cookie.substring(p+1);  // Get cookie value
        value = decodeURIComponent(value);  // Decode the value
        cookies[name] = value;              // Store name and value in object
    }
    return cookies;
}
// Store the name/value pair as a cookie, encoding the value with 
// encodeURIComponent() in order to escape semicolons, commas, and spaces.
// If daysToLive is a number, set the max-age attribute so that the cookie
// expires after the specified number of days. Pass 0 to delete a cookie.
function setCookie(name, value, secondsToLive) {
    var cookie = name + "=" + encodeURIComponent(value);
    if (typeof daysToLive === "number") 
        cookie += "; max-age=" + (daysToLive);
    document.cookie = cookie;
}

//Searches for a specific cookie by name.
		function getCookie(userName){
			var cVal = document.cookie;
			var cBeg = cVal.indexOf(" " + userName + "=");
			if (cBeg == -1){
				cBeg = cVal.indexOf(userName + "=");
			}
			if (cBeg == -1){
				cVal = null;
			}else{
				cBeg = cVal.indexOf("=", cBeg) + 1;
				var cEnd = cVal.indexOf(";", cBeg);
				if (cEnd == -1){
					cEnd = cVal.length;
				}
				cVal = unescape(cVal.substring(cBeg,cEnd));
			}
			return cVal;
		}		
		
//Place into the $_GET object
    var $_GET=getFormInfo(location.href);
//Test JSON to stringify and parse back
	var str=JSON.stringify($_GET);
	var obj=JSON.parse(str);
	//Print the new object
/*	document.write("</br> Display the JSON Object </br>");
	for(var name in obj){
		document.write(name+"="+obj[name]+"<br/>");
	}
*/	//Test the Cookie class
	var username = prompt("Enter your username.");
	var seconds=60*60*24*365.25; //All cookies will survive for one year.
	//Print the new object
	var cookiesObj=getCookies();
	
/*	document.write("</br> Display all the cookies </br>");
	for(var name in cookiesObj){
		document.write(name+"="+cookiesObj[name]+"<br/>");
	}
*/	
	//Display results function
	function results(){
		document.write("</br> Quiz Results </br>");
			for(var name in obj){
			document.write(name+"="+obj[name]+"<br/>");
	}
	}
	//Set a cookie with a function
	setCookie(username, str, seconds);
	//Get the cookie with a function
	cookiesObj=getCookies();
	/*document.write("</br> Display all the function cookies </br>");
	for(var name in cookiesObj){
		document.write(name+"="+cookiesObj[name]+"<br/>");
	}*/	