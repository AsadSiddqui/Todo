//  var user = 'pakistani'
// var result 
//  var volv = ['a','e','i','o','u']
// result = [ ]
// for (let i = 0; i < user.length; i++) {

//  if ( volv.includes(user[i])) {
    
//      result.push(user[i])
//     }
// }
// document.write(result)
// console.log(result);
// document.write("<br>")




// var arr = []
// do{
//     var user = prompt()
//     arr.push(user) 
 
//     document.write(arr.slice(0,-1))
// } while (user !== 'yes') 





// var i = 1
// var mult = +prompt("Enter Table Number")
// var num = +prompt("Enter Table Range")
// var result 
// do{
// result = ""
// result += i * mult
// i++
// document.write(`${mult} x ${num} = ${result}`);
// document.write('<br>');

// }while(i <= num)



// var i = 0
// var text  = ' '
// while (i <= 3) {
//     text += " <br> This number is " + i 
//     ++i;
// }
// document.write(text  )



// var month = +prompt()
// function kno(params){
//     switch (params) {
//         case 1:
//             return "Jan"
//             case 2:
//                 return "Feb"
//                 case 3:
//                     return "March"
//                     case 4:
//                         return "April"
//                         case 5:
//                             return "May"
//                             case 6:
//                                 return "June"
//                                 case 7:
//                                     return "July"
    
//         default:
//             return "Invalid Num"
//             break;
//     }
// }
// document.write(kno(month))



 


// var num = +prompt()
// function sub(p1) {
 
//     if (p1 === 1) {      
//         return 'A'
//     }else if(p1 === 2){
//         return "B"
//     }else if (p1 === 3){
//         return "C"
//     } else {
//         return " Put the Right Value"
//     }
// }
// document.write( sub(num) )




// var name1 = 'asad'
// var num =3 
// function sum(p1, p2 ){
//    var result = " "
// for (let i = 0; i < p2; i++) {
 
//     result +=  p1 + " " 
// }
// return result + " happy "

// }
// console.log(sum(name1,num ));


// var arr = [1,2,3,4]
// function sum(plus) { 
//     var result = 0
//     for (let i = 0; i < plus.length; i++) {
      
//                 result += plus[i]
//     } 
//     return result
// }

// document.write(sum(arr))

// var match = false
// var  num = +prompt()
 
// function prime(getPrime) {
//     for (let i = 2; i < num; i++) {
//     if ( getPrime % i === 0) {
//         match = true   
//     }    
// }
//     return match
// }
// var fuc = prime(num)
// if (fuc === true) {
//     alert('not prime number')
// }else {
//     alert(' prime number')
// }

// var sent = "He's very impatient and always interrupts me mid-sentence."
// var user = prompt()
// function sen(ser) {
//     return sent.includes(ser)
    
// }
// // alert("i have")
// console.log(sen(user))


// var user = prompt()
// var arr = []
// function arry(pas) {
//     arr.push(pas)
//     return arr
// }
// // console.log(arr);

// console.log(arry(user));

// console.log(prime(num))
// match = true
//     alert('not prime number')
//     match === false
//     alert(' prime number')


// var num = +prompt()
// function evod(divition) {
//     return divition % 2 === 0 

// }
// console.log(evod(num));




// if (num % 2 === 0) {
//     alert("its is even num")   
//    }else{
//        alert("its is Odd Number")
//    }


// var num = +prompt() 
// var num1 = +prompt()
// function plus(tNum) {
//     return num - num1
// }
// console.log(plus(num,num1));


// function asad(wel1) {
//     return wel1 + " Siddiqui"
// }
// var wel = prompt("ENTER NAME")
// console.log(asad(wel));

// function asad(params) {
//     var wel = "Hello World"
//     console.log(wel);
// }
// asad()

// var date = Date.now()
// var ne = date/1000/60/60 /24
// console.log(ne.toFixed());



// var  user = Math.random()*6
// var n = user.toFixed()
// console.log(n);  


// var user = prompt("Type Full Sentance")
// var fnd = prompt("Find Word")
// var replce = prompt("Replace Word")
// var result 
// result = user.replace(fnd, replce)
// document.write(result)
// document.write(user)

// if (user.includes(fnd)) {
    
// }

// var user = prompt("Type Full Sentance")
// var inp = prompt("Find Word")
// console.log(user.indexOf(inp));





// var inp = +prompt()
// var count 
// for (let i = 1; i <= inp ; i++) {
//     count = ""
//     for (let j = 1; j <= i; j++) {
        
//         count +=  `${i*j},`        
//         console.log(j);
//     }
//     document.write(`${i} (${count})`  )
//     document.write("<br>")
//     // break
// }







// var inp = +prompt()
// var count = " " 
// for (let i = 1; i <= inp; i++) {
//     // for (let j = 0; j < i; j++) {
//         count +=  `${i},`        
//   document.write(`${i} (${count.slice(0,count.length -1)})`  )
//   document.write("<br>")
//   console.log(count);
// //   break
// //  }
// }


// ${"("+count+")"}



// var inp = +prompt("abc")
// var count ;
// var spc ; 
// for (let i = 1; i <= inp; i++) {
//  count = ''
//  spc=''
//  for (let j = inp - i ; j >= 0 ; j-- ){
//     count+= "&nbsp;&nbsp;"
//     console.log(count);
// }
// for (let x = 0 ; x <i; x++) {
    
//     spc+= "*"
    
// }
// document.write(`${count}${spc}`)
// console.log(spc)

//     document.write("<br>")
// // break
// }






// var inp = +prompt()
// var count = ""
// var spc = ' '
// // var result 
// for (let i = 0; i <= inp; i++) {
//  for (let j = 0; j < i; j++) {
//   count += " "
    
//   document.write(count)
// document.write("<br>")

//   console.log(count);
//   break
// }
// for (let x = count; x < i; x--) {
//     spc += "*"
    
    
// }
// console.log(spc);
// document.write(spc)
// document.write("<br>")


// }



// var inp = +prompt()
// var count ;
// for (let i = 1; i <= inp; i++) {
//  count = ''
//  for (let j = inp - i ; j > 0 ; j-- ){
//     count+= "*"
// }
//  for (let j = inp - i ; j > 0 ; j-- ){
//     count+= "*"
// }
// document.write(count)
//     document.write("<br>")
// }





//  console.log(num.length);
//  console.log(arr);

// console.log(result);
// document.write(result)
// document.write('<br>')


// var inp = +prompt()
// var count ;
// for (let i = 1; i <= inp; i++) {
//  count = ''
//  for (let j = inp - i ; j > 0 ; j-- ){
//     count+= "*"
// }
// document.write(count)
//     document.write("<br>")
// }

 
// for (let i = inp; i > 1; i--) {
//     for (let j = inp; j > 0; j--) {
//     count +="*"
//     // console.log(i);
//     // console.log(count , i );
//     console.log(count);
//     document.write(`${count} <br>`)
// }
//     break
//     }






// var inp = +prompt("1st num")
// var user = +prompt("2nd num")
// var count = 0
// for (let i = 1; i <= inp ; i++) {
//     for (let j = 0; j <= user; j++) {  
//           count += user     
// console.log(count);
// document.write(`${count}`)
//     }
//     document.write(`<br>`)
// }
    
    
// var inp = +prompt()
// var user = +prompt()
// var count = ""
// for (let i = 0; i < user; i++) {
// for (let j = 0; j < inp; j++) {
//     count +=inp
//     console.log(count);
//  document.write(`${count}<br>`)
// }
    
// }
    




// var inp = +prompt("")
// var count = "" ; 
// for (let i = 1; i <= inp ; i++) {
//     for (let j = 0; j < i; j++) {
//         count += i + j

//         // document.write(`${i}`)
//         // document.write(`<br>`)
        
//         document.write(`${count}<br>`)
//         console.log(count);
//         break
        
//     }
    
// }




// var inp = +prompt("")
// for (let i = 1; i <= inp ; i++) {
//     for (let j = 1; j <= i; j++) {                  
//         document.write(`${i}`)         
//     }
//     document.write(`<br>`)
// }
    


// var inp = +prompt("1st num")
// var user = +prompt("2nd num")
// var count = 0
// for (let i = 1; i <= inp ; i++) {
//     for (let j = 1; j <= i; j++) {  
//         var mult = i * i                
//         document.write(`${mult}`)   
//         console.log(mult);      
//     }
//     document.write(`<br>`)\






// var num = prompt()
// var arr ='' ;
// var spc = ''
// var result 
// for (let i = 1; i <= num.length; i++) {
//     arr += '*'
//     for (let j = i; j > 0; j--) {
//  spc  += " "
 
// }
// result = spc + arr
// document.write(result)
// document.write('<br>')
// console.log(result)

// }




// function act(){
//     if (document.getElementById('fisInp').value.trim()==='') {
//         alert("remove input value")
//     }else{
//         var val = document.getElementById('fisInp').value 
//         document.getElementById("dd").innerHTML += ("<li>"+"<span class='edi'>"+val+"</span>"+"<button onclick='bal(event)'>X</button>"+"<button onclick='edit(event)'>Edit</button>"+"</li>" )
//         document.getElementById('fisInp').value=''
    
//     }
// }
// function bal(e) {
//     var a = e.target.parentNode.remove()

//     console.log(a)
// }
// // function sec(x) {
// //     document.getElementById('fisInp').value+=x.target.innerHTML
// //     console.log(x.target)
// // }
// function edit(c) {
//     document.getElementById('fisInp').value =c.target.parentNode. getElementsByClassName('edi')[0].innerHTML
//     console.log(c.target.parentNode)
// }