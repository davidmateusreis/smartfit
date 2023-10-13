<h1 align="center">
  Smart Fit
</h1>

O desafio original foi resolvido nesse [vídeo](https://www.youtube.com/watch?v=ozZXMkp8MnQ).

## Tecnologias
 
- [Angular](https://angular.io/)

## Layout

Um design responsivo para dispositivos mobile, tablets e desktops, mantendo a fidelidade do layout proposto.


## Funcionalidades

- Carrega unidades através do arquivo JSON [locations](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) com método GET.
- Busca todas as unidades.
- Busca unidades com filtros.
- Mostra previsão de resultados encontrados.
- Mostra unidades ao buscar.

## Regras de negócio
- Filtra unidades abertas ou fechadas.
- Filtra unidades por período de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando não há resultados.
- Valida para mostrar ícones corretos de acordo com o status.

## Como Executar

- Clonar repositório git:
```
git clone https://github.com/davidmateusreis/smartfit.git
```
- Instalar dependências
```
npm install
```
- Executar
```
npm start
```
- Servidor de desenvolvimento
```
Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar algum dos arquivos de origem.
```
- Construir
```
Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.
```
- Testes unitários
```
Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).
```
- Testes ponta a ponta
```
Execute `ng e2e` para executar os testes ponta a ponta através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste ponta a ponta.
```