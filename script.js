
  
$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fstname:{
                required:true, 
                minlength:4,
                maxlength:12
           },
           srname:{
               required:true, 
               minlength:2
           }, 
           moboremail:{
               required:true, 
               email:true,
               
           }, 
           npaswrd:{ 
               required:true,
               minlength:8
           }, 
           rnpaswrd:{
               required:true,
               minlength:8   
           }, 
           day:{
               required:true, 
       
           }, 
           month:{
               required:true,   
           }, 
           year:{
               required:true,   
           }, 
           gender:{
               required:true,   
           }        
        },
        messages:{
            fstname:{
                required:"Enter first name",
                minlength:"Enter a  tleast 4 Characters",
                maxlength:"Enter Maximum 12 Characters"
            }, 
            srname:{
                required:"Enter sur name",
                minlength:"Enter a  tleast 2 Characters",
                maxlength:"Enter Maximum 12 Characters"
            }, 
            moboremail:{
                required:"Enter Email or Mobile Number"
            }, 
            npaswrd:{
                required:"Enter New Password",
                minlength:"Enter a  tleast 8 Letters or numbers"
              
            }, 
            rnpaswrd:{
                required:"Re-Enter New Password",
                minlength:"Enter a  tleast 8 Letters or numbers"
              
            }, 
            day:{
                required:"Select a day"
                
            },
             month:{
                required:"Select a month"
                
            },
            year:{
               required:"Select a year"
               
           },
           gender:{
              required:"Select a Gender"
              
          }
        }
        
    })
})


