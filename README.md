# Memory Game
Esse projeto contém um jogo de memória automatizado.
## Funcionamento
 - ***flipCard()***: No *event* de *click* de uma carta, a função *flipCard()* é chamada a essa mesma carta, adicionando a classe 'flip' à carta, liberando a animação de giro da carta no CSS, mostrando assim a segunda imagem da carta. Essa função chama a funçao *disableCards()* caso a segunda carta clickada tenha a mesma imagem da primeira. Caso isso não aconteça, chama-se a função *unflipCards()*.
 - ***disableCards()***: Essa função desabilita o EventListener de click sobre as cartas iguais e soma uma unidade à *let* 'counter'. Caso counter atinja o valor de 6, a página irá recarregar.
 - ***unflipCards()***: Essa função remove a classe 'flip' das duas cartas selecionadas, gerando a animação reversa de giro no CSS.
 - **lockboard**: Essa *let* bloqueia o tabuleiro enquanto a função *unflipCards()* é executada.
 - ***resetBoard()***: Essa função retorna as variáveis aos valores iniciais para evitar conflitos.

## Recursos Implementados
 - addEventListener;
 - removeEventListener;
 - classList;
 - createElement;
 - querySelectorAll;
 - setAttribute;
 - map;
 - sort;
 - Math.random;
 - insertBefore;
 - window.location.reload();
 - setTimeout;
 - forEach;

### Créditos
Código criado por **Carlos Daniel Penaforte de Souza**.