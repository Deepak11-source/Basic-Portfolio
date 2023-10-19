function myonload()
            {
                alert("Successfully Loaded");
            }
            function myonresize()
            {
                alert("this will appear when page is minimized or maximized");

            }
            function myonbeforeprint()
            {
                alert("this will appear when user press ctrl+p");
            }
            function onanyerror()
            {
                alert("this will appear when error appear")
            }
           
            function formreset()
            {
                alert("Click to Reset the input fields");
            }  
            function usersubmitted()
            {
                alert("Click OK to confirm");
            }
            function mouseScroll()
            {
                document.getElementById("ta").style.backgroundColor="red";
            }
            function mouseScrollOut()
            {
                document.getElementById("ta").style.backgroundColor="lightgreen";
            }
            function userCopying()
            {
                document.getElementById("ta").innerHTML="user pressed ctl+c";
                alert("Copying Task is Successful");
            }
            function userCut()
            {
                document.getElementById("ta").innerHTML="user pressed ctl+x";
                alert("Cutting Task is Successful");
            }
            function userPasting()
            {
                document.getElementById("ta").innerHTML="user pressed ctl+v";
                alert("Pasting Task is Successful");
            }
        
            // function kp() 
            // {
            // alert("You pressed a key inside the input field");
            // }
            var check = function() 
            {
                if (document.getElementById('password').value == document.getElementById('confirm_password').value) 
                    {
                        document.getElementById('message').style.color = 'green';
                        document.getElementById('message').innerHTML = 'Matching';
                    } 
                else 
                    {
                        document.getElementById('message').style.color = 'red';
                        document.getElementById('message').innerHTML = 'Not Matching';
                    }
            }