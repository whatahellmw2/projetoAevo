<?php 
require_once 'header.php';
?>
<?php /*
require_once 'nav.php';*/
?>
<?php 
require_once 'main.php';
?>
<?php 
require_once 'footer.php';
?>
<script>
    var m = window.matchMedia("(max-width: 700px)")
    myFunction(m) // Call listener function at run time
   
    
    function myFunction(x) {
        if (x.matches) { // If media query matches
            document.querySelector("nav ul").style.visibility="hidden";
            //document.querySelector("nav").innerHTML = "<i class=\"material-icons\">menu</i>"        
        } else {            
            document.querySelector("nav ul").style.visibility="visible";
            //document.querySelector("nav i").style.display="none";
        }
        
    }
    m.addListener(myFunction) // Attach listener function on state changes
</script>
</body>
</html>