class Produto {
    constructor(nome, codigo, preco, quantidade) {
      this.nome = nome;
      this.codigo = codigo;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }
  
  class Cliente {
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
      this.historicoCompras = [];
    }
  }
  
  class Venda {
    constructor(clienteAssociado) {
      this.produtosVendidos = [];
      this.clienteAssociado = clienteAssociado;
      this.valorTotal = 0;
    }
  
    adicionarProduto(produto) {
      this.produtosVendidos.push(produto);
      this.calcularTotal();
    }
  
    calcularTotal() {
      this.valorTotal = this.produtosVendidos.reduce((total, produto) => total + produto.preco, 0);
    }
  
    mostrarDetalhesVenda() {
      console.log(`Detalhes da Venda para o Cliente ${this.clienteAssociado.nome}:`);
      this.produtosVendidos.forEach(produto => {
        console.log(`  Produto: ${produto.nome}, Quantidade: 1, Valor: ${produto.preco}`);
      });
      console.log(`Valor Total da Venda: ${this.valorTotal}`);
    }
  }
  
  class CarrinhoDeCompras {
    constructor(clienteAssociado) {
      this.produtosNoCarrinho = [];
      this.clienteAssociado = clienteAssociado;
    }
  
    adicionarProduto(produto) {
      this.produtosNoCarrinho.push(produto);
    }
  
    calcularTotal() {
      return this.produtosNoCarrinho.reduce((total, produto) => total + produto.preco, 0);
    }
  
    mostrarDetalhesCarrinho() {
      console.log(`Detalhes do Carrinho de Compras para o Cliente ${this.clienteAssociado.nome}:`);
      this.produtosNoCarrinho.forEach(produto => {
        console.log(`  Produto: ${produto.nome}, Quantidade: 1, Valor: ${produto.preco}`);
      });
      console.log(`Valor Total do Carrinho: ${this.calcularTotal()}`);
    }
  }
  
  class Mercadinho {
    constructor() {
      this.produtosEmEstoque = [];
    }
  
    adicionarProduto(produto) {
      this.produtosEmEstoque.push(produto);
    }
  
    removerProduto(codigo) {
      this.produtosEmEstoque = this.produtosEmEstoque.filter(produto => produto.codigo !== codigo);
    }
  
    adicionarEstoque(codigo, quantidade) {
      const produto = this.produtosEmEstoque.find(produto => produto.codigo === codigo);
      if (produto) {
        produto.quantidade += quantidade;
      }
    }
  
    removerEstoque(codigo, quantidade) {
      const produto = this.produtosEmEstoque.find(produto => produto.codigo === codigo);
      if (produto && produto.quantidade >= quantidade) {
        produto.quantidade -= quantidade;
      } else {
        throw new EstoqueInsuficienteException("Estoque insuficiente para a remoção.");
      }
    }
  
    mostrarEstoque() {
      console.log("Produtos em Estoque:");
      this.produtosEmEstoque.forEach(produto => {
        console.log(`  Produto: ${produto.nome}, Quantidade: ${produto.quantidade}, Preço: ${produto.preco}`);
      });
    }
  }
  
  class EstoqueInsuficienteException extends Error {
    constructor(message) {
      super(message);
      this.name = "EstoqueInsuficienteException";
    }
  }
  
  class ClienteInexistenteException extends Error {
    constructor(message) {
      super(message);
      this.name = "ClienteInexistenteException";
    }
  }
  
  // Exemplo de uso
  const mercadinho = new Mercadinho();
  const produto1 = new Produto("Arroz", 1, 5.99, 50);
  const produto2 = new Produto("Feijão", 2, 3.99, 30);
  mercadinho.adicionarProduto(produto1);
  mercadinho.adicionarProduto(produto2);
  
  const cliente = new Cliente("João", "123.456.789-01");
  
  // Adicionando produtos ao carrinho
  const carrinho = new CarrinhoDeCompras(cliente);
  carrinho.adicionarProduto(produto1);
  carrinho.adicionarProduto(produto2);
  
  // Mostrando detalhes do carrinho
  carrinho.mostrarDetalhesCarrinho();
  
  // Realizando a venda
  const venda = new Venda(cliente);
  venda.adicionarProduto(produto1);
  venda.adicionarProduto(produto2);
  
  // Mostrando detalhes da venda
  venda.mostrarDetalhesVenda();
  
  // Mostrando o estoque atual
  mercadinho.mostrarEstoque();
  