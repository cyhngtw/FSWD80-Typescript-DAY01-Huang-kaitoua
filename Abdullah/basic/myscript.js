var div = document.getElementById('math');
div.innerHTML = '';
for (var i = 1; i <= 10; ++i) {
    var divRight = document.createElement('div');
    divRight.setAttribute('class', 'mydiv');
    for (var j = 1; j <= 10; ++j) {
        var result2 = i * j;
        var output = document.createElement('p');
        var text = " " + i + " \u00D7 " + j + " = " + result2 + " ";
        divRight.appendChild(output);
        output.innerHTML += text;
        div.appendChild(divRight);
    }
}
/*var div =document.getElementById('math');
div.innerHTML = '';

  var divLeft = document.createElement('div');
  var divRight = document.createElement('div');

for (let i=1; i <= 10; ++i){

    var result1 : any = i * 1;



var output1 = document.createElement('p');

let text =`${result1} × 1 =${result1}`;


    
    divLeft.appendChild(output1);
    output1.innerHTML += text;

    div.appendChild(divLeft);


}


for (let i=1; i <= 10; ++i){

    var result1 : any = i * 1;
    var result2 : any = i * 2;



var output2 = document.createElement('p');

let text =`${result1} × 2 =${result2}`;


    
    divRight.appendChild(output2);
    output2.innerHTML += text;

    div.appendChild(divRight);


}



      /*   var div = document.getElementById('myteam');     // The parent <div>.
        //        div.innerHTML = '';



            //  for (var i =0;i< teamMembers.length ; i++) {

                var divLeft = document.createElement('div');
                            divLeft.innerHTML = teamMembers[i].name + '<br>' + teamMembers[i].email;

                var img = document.createElement('img');    // Create an <img> element.
                img.src = teamMembers[i].image;                // The image source from JSON array.


                var divRight = document.createElement('div');
                divRight.setAttribute('style', 'border-left: solid 1px #ddd;');
                divRight.appendChild(img);

               
               
                // Add the child DIVs to parent DIV.
                div.appendChild(divLeft);
                div.appendChild(divRight);



                
             

   
  }*/
