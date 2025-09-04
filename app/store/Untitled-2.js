


function a(){

  var x=100; 

  console.log(x); // scope chain [a(),window]

  


}

console.log(x);   // scope chain [window]




// ModelModule{ 

           // providers:[productRepository]

//    StoreModule{

                 //store component --- productRepository 

              // yes 
    
//             AppModule{ 

                            // -- AppComponent --- <store></store>

                        


//              }



//         }



// }













