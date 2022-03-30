// Created a web page that prints all of the lyrics to song "99 Bottles of beer"
function lyrics(){
	for(i=99;i>=0;i--){//Iterates from 99 to 0
		if(i==0){//Checks if iterator is 0 and prints some lyrics
			document.getElementById("main").innerHTML+="<br />"+"<br />"+"No more bottles of beer on the wall, no more bottles of beer"+"<br />"+"Go to the store and buy some more, 99 bottles of beer on the wall";
		}
		else if(i==1){////Checks if iterator is 1 and prints some lyrics
			document.getElementById("main").innerHTML+="<br />"+"<br />"+i+" bottle of beer on the wall, "+i+" bottle of beer"+"<br />"+"Take one down and pass it around, no more bottles of beer on the wall";	
		}
		else{
			document.getElementById("main").innerHTML+="<br />"+"<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer "+"<br />"+"Take one down and pass it around, "+i+" bottles of beer on the wall";
		}
	}
	
}