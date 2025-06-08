


// String methods----------------------->

// const name = "Sandip";
// const surname= "yadav";

// String concatenate---------------------->

// const fulName = name + " "  + surname;
// const fulName  = `my name is ${name} and my surname is ${surname}`;

// console.log(fulName);



// const myNameLength = name.length;
// const surnameLength = surname.length;
// console.log(myNameLength);
// console.log(surnameLength);


// const newName = new String("Sandip");
// console.log(newName);

// console.log(typeof newName);
// console.log(name.replace("san","man"));



// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replace("Ruth's", "my"));


// const myname ="sandip";
// console.log(myname.replace("san","man"));



//  const myName = "Sandip Yadav";
//  console.log(myName.toUpperCase());
//  console.log(myName.toLowerCase());



// const myName = "Sandip-Y-adav";
// const myNameArray = myName.split("-");
// console.log(myNameArray);

// const myName= "Sandip Yadav";
// console.log(myName.charAt(4));
// console.log(myName.indexOf(" "));
// console.log(myName.substring(0,6));
// console.log(myName.slice(0,4));
// console.log(myName.search("Y"));


// let newDate = new Date();
// console.log(newDate);  
// console.log(newDate.getTime());
// console.log(newDate.getDay());

function reverseStr(str){
    debugger
    let newStr = "";
    for(let i=str.length-1;i>=0;i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseStr("Sandip"));