function registerProduct() {  
    var xhttp = new XMLHttpRequest();
    var formData = new FormData();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            formData = document.getElementById("info");  
            xhttp.send();
        }
    };
    xhttp.open("POST", "http://localhost:3000/registerProduct", true);
}
function showProduct(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhttp.responseText)

            var body = document.createElement("tbody");
            for (let index = 0; index < data.length; index++) {
                var product = document.createElement("tr");

                var name = document.createElement("th");
                name.innerHTML = data[index].name 
                document.body.appendChild(name)

                var price = document.createElement("th");
                price.innerHTML = data[index].price
                document.body.appendChild(price)

                document.body.appendChild(product)    
            }   
            document.body.appendChild(body)
        }
    }
    xhttp.open("GET","http://localhost:3000/showProducts",true)
    xhttp.send();
}