var produtos =[
    {
        imagem: 'imgs/LOS ANGELES LAKERS.jpg',  
        nome: 'Lakers Casual (M)',
        preco: 'R$150,00',
        desconto: 'R$75,00'
    },
    {
        imagem: 'imgs/JORDAN.jpg',
        nome: 'Jordan Casual (M/G)',
        preco: 'R$150,00',
        desconto: 'R$75,00'
    },
    {
        imagem: 'imgs/BROOKLYN NETS.jpg',
        nome: 'Brooklyn Casual (GG)',
        preco: 'R$150,00',
        desconto: 'R$75,00'
    },
    {
        imagem: 'imgs/6.jpg',
        nome: 'Golden State Casual (P)',
        preco: 'R$150,00',
        desconto: 'R$75,00'
    },
    {
        imagem: 'imgs/BROOKLYN.jpg',
        nome: 'BrooKlyn Nets Jogo (G)',
        preco: 'R$360,00',
        desconto: 'R$200,00'
    },
    {
        imagem: 'imgs/BOSTON CELTICS.jpg',
        nome: 'Boston Celtics Jogo (M)',
        preco: 'R$360,00',
        desconto: 'R$200,00'
    },
    {
        imagem: 'imgs/ARIZONA CARDINALS.jpg', 
        nome: 'Arizona Cardinals (GG)',
        preco: 'R$180,00',
        desconto: 'R$100,00'
    },
    {
        imagem: 'imgs/SHORTT.jpg',
        nome: 'Short Arsenal (M)',
        preco: 'R$150,00',
        desconto: 'R$80,00'
    },
    {
        imagem: 'imgs/short1.jpg',
        nome: 'Short Arsenal (M)',
        preco: 'R$150,00',
        desconto: 'R$80,00'
    },
    {
        imagem: 'imgs/shro.jpg',
        nome: 'Short Arsenal(M)',
        preco: 'R$150,00',
        desconto: 'R$80,00',
    },
    {
        imagem: 'imgs/3.jpg',
        nome: 'Kit Infantil',
        preco: 'R$200,00',
        desconto: 'R$110,00',
    },
    {
        imagem: 'imgs/2.jpeg',
        nome: 'Kit Treino do México (G)',
        preco: 'R$300,00',
        desconto: 'R$110,00', 
        
    },
    {
        imagem: 'imgs/333.jpg',
        nome: 'Corta Vento Ajax (G)',
        preco: 'R$300,00',
        desconto: 'R$210,00',
    },
    {
        imagem: 'imgs/PSG.jpg',
        nome: 'Corta Vento Jordan (G)',
        preco: 'R$300,00',
        desconto: 'R$210,00',
    },
    {
        imagem: 'imgs/SANTOS.jpg',
        nome: 'Corta Vento Santos (G)',
        preco: 'R$300,00',
        desconto: 'R$210,00',
    },
]
produtos.map((produto) => {
    document.getElementById('produtos').innerHTML +=`
    <div class="produto">
    <img src="${produto.imagem}">
    <div>
        <h2>${produto.nome}</h2>
        <hr></hr>
        <p> <span class="preco-sem-desconto">De: ${produto.preco}</span> <strong>Por: ${produto.desconto}</strong></p>
        <button>comprar</button>
    </div>
    </div>
    `
})