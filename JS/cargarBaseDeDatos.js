function fillBase(){

    function Product(title,description,price){
        this.title = title;
        this.description = description;
        this.price = price;
    }

    var titleCapture = document.getElementById('productTitle').value;
    var descriptionCapture = document.getElementById('productDescription').value;
    var pricesCapture = document.getElementById('price').value;

    newProduct = new Product(titleCapture,descriptionCapture,pricesCapture);
    console.log(newProduct);
    addNewProduct();

}

var dataBase = [];

function addNewProduct(){
    dataBase.push(newProduct);
    console.log(dataBase);
    document.getElementById("table").innerHTML += '<tbody><td>'+newProduct.title+'</td><td>'+newProduct.description+'</td><td>'+newProduct.price+'</td></tbody>'

};



function Export() {
    html2canvas(document.getElementById('table'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Base_de_datos.pdf");
            
        }
    });
}
    
    
    
function sendEmail(){ 
    
    const btn = document.getElementById('SendEmailId');
    document.getElementById('formEmail')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_44gzlvk';
        
        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
    });}