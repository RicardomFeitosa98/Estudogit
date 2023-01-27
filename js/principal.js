<<<<<<< HEAD
var banners =
["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual = 0;
function trocaBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('h2#mensagem').textContent =
banners[bannerAtual];
}
=======
var banners =
["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var banners = ["Do lixo ao luxo!","Reaproveitar é aproveitar!"];
var bannerAtual = 0;
function trocaBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('h2#mensagem').textContent =
banners[bannerAtual];
}
>>>>>>> 88b8bce (alterando textos do banner)
setInterval(trocaBanner, 1000);