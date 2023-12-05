$(document).ready(function() {
    
    $("nav a").click(function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        var offsetTop = $(href).offset().top;
        $("html, body").animate({scrollTop: offsetTop}, 500);
    });

  
    $(".produto button").click(function() {
        var produto = $(this).parent();
        var nome = produto.find("h3").text();
        var preco = Math.floor(Math.random() * 100) + 50; 
        alert("Você adicionou o produto " + nome + " ao carrinho por R$ " + preco + ",00.");
    });
});
