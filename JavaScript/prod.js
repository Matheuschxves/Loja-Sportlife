var produtos =[
    {
        imagem: 'https://egyck2dge27.exactdn.com/wp-content/uploads/2021/05/9cfe4dd0.jpg',
        nome: 'Ajax III - R$ 150,00',
        texto:'Preto-Jogador 21/22', 
        
    },
    {
        imagem: 'https://cdn.awsli.com.br/1000x1000/1693/1693640/produto/114101855/1fe4ba18de.jpg',
        nome: 'PSG II - R$ 150,00 ',
        texto:' Visitante Temporada 21/22', 
        
    },
    {
        imagem: 'https://images.tcdn.com.br/img/img_prod/860761/camisa_roma_reserva_20_21_295_1_20200912140437.jpg',
        nome: 'Roma  Oficial - R$150,00',
        texto:' Visitante Temporada 20/21', 
        
    },
    {
        imagem: 'https://cf.shopee.com.br/file/9f80653d1e3ea91dae732f19ff2c9e3b',
        nome: 'B. Munique II  - R$ 150,00',
        texto:'Masculino Torcedor - Preto e Branco 21/22', 
        
    },
    {
        imagem: 'imgs/INGLATERRA.jpg',
        nome: 'Inglaterra II - R$ 150,00',
        texto:' Torcedor 20/21 - Azul', 
        
    },
    {
        imagem: 'imgs/CORÉIA DO SUL.jpg',
        nome: 'Coréia do Sul - R$ 150,00',
        texto:' 20/21 - Preta e Branca', 
        
    },
    {
        imagem: 'imgs/BRASIL.jpg',
        nome: 'Brasil Treino - R$ 150,00',
        texto:'20/21 Torcedor - Azul', 
        
    },
    {
        imagem: 'imgs/LIVERPOOL.jpg',
        nome: 'Liverpool II - R$ 150,00',
        texto:'21/22 Torcedor - Bege', 
        
    },
    {
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/603/076/products/derby-county-3-11-6bd4fa7a02bd0133c716184533036950-640-0.jpg',
        nome: 'Derby County - R$ 150,00',
        texto:'20/21 - Torcedor - Rosa e Branco - Umbro', 
        
    },
    {
        imagem: 'imgs/FLAMENGO.jpg',
        nome: 'Flamengo - R$ 150,00',
        texto:' Treino Verde - 2020', 
        
    },
    {
        imagem: 'imgs/MANCHESTER CITY.jpg',
        nome: 'M. City - R$ 150,00',
        texto:'21/22 - Torcedor - Branco e Azul - Puma', 
        
    },
    {
        imagem: 'data:image/jpeg;base64,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',
        nome: 'Argentina I - R$ 150,00',
        texto:'20/21 - Torcedor [Homenagem Maradona] ', 
        
    },
    {
        imagem: 'https://cdn.awsli.com.br/600x450/1827/1827225/produto/137715573/1d790bf540.jpg',
        nome: 'Brasil',
        texto:'Away 19/20 - Torcedor - Nike', 
        
    },
    {
        imagem: 'imgs/TURQUIA.jpg',
        nome: 'Turquia I Nike',
        texto:'20/21 - Torcedor - Vermelho', 
        
    },
    {
        imagem: 'imgs/NIGÉRIA.jpg',
        nome: 'Camisa Nigéria',
        texto:'Home 20/21 Torcedor Verde e Branco ', 
        
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