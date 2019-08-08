
function signIn(){

            var hallName=$("#name").val();
            var hallAdress=$("#ha").val();
            var hallCategory=$("#hc").val();
            var hallDescription=$("#hd").val();
            var hallPrice=$("#hp").val();
            var hallLocationLong=$("#hl").val();
            var hallLocationLat=$("#hla").val();
            var hallSpecialOffers=$("#hs").val();
            var hallPhoneNumber=$("#hp").val();
            var hallImage=$("#hi").val();
    
            let requestBody = {
                hallName : hallName,
                hallAdress : hallAdress,
                hallCategory : hallCategory,
                hallDescription : hallDescription,
                hallPrice : hallPrice,
                hallLocationLong : hallLocationLong,
                hallLocationLat : hallLocationLat,
                hallSpecialOffers : hallSpecialOffers,
                hallPhoneNumber : hallPhoneNumber,
                hallImage : hallImage
            }
            console.log(requestBody)
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("res").innerHTML = this.responseText;
                }
            };
            xmlhttp.open("POST",  "https://hidden-ocean-87285.herokuapp.com/halls", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
            xmlhttp.send();
            
                
}