



json-server 

     Fake REST api 


       .js or .json extension 

          
            Arrays (wrapped in a Node Module) ->  REST end point. 


          //  Model:   // data logic                                                          --- only services -- separation of concerns (loose coupling)

                                                                                            // separation of concerns promotes reusabulity 
                //  structure (typescript)                   -- product.model.ts
                //  data (static or dynamic)                 -- static.datasource.ts 
                //  data-repository  (CRUD methods)          -- product.repository.ts 



            // Store:
            
               // <store> </store>   - feature component ? are the dependencies ready ? no        --- only non services 

                                                            // -- store.component.ts

                                                            // -- store.component.html 




                                      // Modules (Angular) are 'Blackbox'  -- lexical scope  
                                      
                                      