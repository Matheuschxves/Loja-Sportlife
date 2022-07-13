var produtos =[
    {
        imagem: 'imgs/arsenalcms.jpeg',
        nome: 'Arsenal Retrô - R$ 150,00',
        texto:'Preto - Retrô', 
        
    },
    {
        imagem: 'imgs/cortaliverpool.jpeg',
        nome: 'Corta Vento Liverool (GG)',
        texto:'Por: R$310,00', 
        
    },
    {
        imagem: 'imgs/bermajuve.jpeg',
        nome: 'Short Juventus (M)',
        texto:'Por: R$150,00', 
        
    },

]
produtos.map((produto) => {
    document.getElementById('produtos').innerHTML +=`
    <div class="produto">
    <img src="${produto.imagem}">
    <div>
        <h2>${produto.nome}</h2>
        <hr></hr>
        <p>${produto.texto}</p>
        <button>comprar</button>
    </div>
    </div>
    `
})