
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/YOUR_TAWKTO_PROPERTY_ID/DEFAULT';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var hiddenContent = document.getElementById("hiddenContent");
    
    span.onclick = function() {
        modal.style.display = "none";
        hiddenContent.style.display = "block";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            hiddenContent.style.display = "block";
        }
    }
    
    // Ensure the modal is initially displayed and the hidden content is hidden
    document.addEventListener('DOMContentLoaded', (event) => {
        modal.style.display = "block";
        hiddenContent.style.display = "none";
    });