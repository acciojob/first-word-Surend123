function firstWord(s) {
  // your code here
	s=s.trim();
	let res="";
	for(let i=0;i<s.length;i++){
		if(s[i]==" "){
			break;
		}
		res+=s[i];
		
	}
	return res;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
