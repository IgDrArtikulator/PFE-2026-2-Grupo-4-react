# Scrum — Projeto React — Grupo 4

## 1. Contribuições dos integrantes

| Integrante | Trabalho realizado |
|---|---|
| Arthur | Estrutura React, `index.html`, `main.jsx`, `App.jsx`, BrowserRouter e rotas; componentes `LinkAncora`, `MenuHamburguer`, `Cabecalho`, `Home` e `Rodape`; montagem das páginas PKZ e One to One. |
| Caio Abanca | Página Hub e componentes `HubHero`, `HubEscolha`, `CardMarca`, `HubFotos` e `HubRodape`. |
| Igor | Componentes `Sobre`, `Treinos`, `CardTreino` e `Galeria`, incluindo o carrossel e seus controles. |
| Matheus | Componentes `Planos`, `NossosPlanos`, `CardPlano` e `Unidades`; dados dos planos em `dados/planos.js`. |
| Guilherme | Componentes `Contato` e `CardContato`. |
| Lucas | Componente `Agendamento` e funções de datas e regras em `utils/agenda.js`. |
| Rodrigo | Sem contribuição realizada, conforme informado pela equipe. A Galeria foi realizada por Igor. |

Contribuições complementares informadas para o projeto: Igor criou as imagens e enviou a Arthur, que as inseriu no código; Arthur e Igor dividiram o CSS global; Lucas, Arthur e Caio trabalharam no JavaScript de agendamento, menu hambúrguer e algumas imagens. A divisão dos componentes React está detalhada na tabela acima.

## 2. Organização Scrum

- **Duração:** três sprints de uma semana.
- **Developers com contribuições informadas:** Arthur, Caio Abanca, Igor, Matheus, Guilherme e Lucas.
- **Product Owner:** Professor Thiago Marcondes Santos.
- **Scrum Master:** Igor. 

A distribuição semanal abaixo organiza o trabalho por dependências e entregas. Não representa um registro de datas ou reuniões já realizadas.

## 3. Backlog de trabalho

| Item | Entrega | Responsável |
|---|---|---|
| 01 | Estrutura React + Vite e ponto de entrada da aplicação | Arthur |
| 02 | Rotas e navegação interna com React Router | Arthur |
| 03 | Menu hambúrguer, cabeçalho, Home e rodapé reutilizáveis | Arthur |
| 04 | Hub com apresentação, escolha de marca, fotos e rodapé | Caio Abanca |
| 05 | Sobre nós reutilizável por marca | Igor |
| 06 | Treinos e cards reutilizáveis | Igor |
| 07 | Planos, cards e dados de planos | Matheus |
| 08 | Unidades e localização | Matheus |
| 09 | Contato e cards de contato | Guilherme |
| 10 | Agendamento com seleção de dia e horário | Lucas |
| 11 | Regras de datas, disponibilidade e armazenamento local | Lucas |
| 12 | Galeria com carrossel, contador, legendas e controles | Igor |
| 13 | Montagem das páginas PKZ e One to One | Arthur, com os componentes de cada integrante |
| 14 | Integração, ajustes visuais e revisão das funcionalidades | Todos os integrantes com entregas, cada um em sua área |

## 4. Semana 1 — Estrutura e componentes

**Meta da sprint:** estabelecer a base React e preparar os componentes de cada área para integração.

| Integrante | Trabalho da semana |
|---|---|
| Arthur | Configurar a estrutura de entrada, BrowserRouter e navegação; preparar `LinkAncora`, menu, cabeçalho, Home e rodapé. Disponibilizar `LinkAncora` antes da integração dos demais componentes. |
| Caio Abanca | Estruturar o Hub e separar Hero, escolha de marca, cards, fotos e rodapé em componentes. |
| Igor | Estruturar Sobre, Treinos e CardTreino; organizar textos e imagens por marca utilizando props. |
| Matheus | Estruturar Planos, NossosPlanos, CardPlano e Unidades; organizar os dados dos planos. |
| Guilherme | Estruturar Contato e CardContato, com os canais de cada marca. |
| Lucas | Preparar funções de datas e disponibilidade e a estrutura do Agendamento. |

**Entrega prevista:** base de navegação disponível e componentes preparados para compor as páginas. O site completo depende da integração dos componentes na semana seguinte.

**Verificação:** conferir imports, exports, caminhos de imagens e props esperadas por cada componente.

## 5. Semana 2 — Interações e integração

**Meta da sprint:** integrar as páginas e fazer funcionar as interações principais.

| Integrante | Trabalho da semana |
|---|---|
| Arthur | Montar PKZ e One to One com os componentes da equipe; integrar as rotas no App e conferir links, âncoras e menu. Inserir as imagens no código conforme o material preparado. |
| Caio Abanca | Integrar o Hub às rotas das marcas; implementar os controles de troca de imagens do Hero e revisar a escolha de marca. |
| Igor | Concluir Sobre e Treinos; implementar Galeria com `useState`, setas, indicadores, contador, legendas e navegação por teclado. Conferir as imagens e revisar o CSS global com Arthur. |
| Matheus | Integrar planos e unidades às duas marcas; conferir dados, cards e chamadas para agendamento ou contato. |
| Guilherme | Integrar os contatos e conferir destinos de WhatsApp, Instagram e e-mail. |
| Lucas | Integrar seleção de dias e horários, validação de campos, confirmação visual e persistência das reservas no navegador. |

**Entrega prevista:** Hub, PKZ e One to One integrados, com menu, galerias e agendamento interativos.

**Verificação:** percorrer Hub → marca → seções → agendamento; testar troca de imagens, links e validação dos formulários nas duas marcas. As reservas locais não equivalem a um sistema de reservas compartilhado com o estúdio.

## 6. Semana 3 — Revisão e entrega

**Meta da sprint:** revisar a versão integrada, corrigir problemas e preparar a apresentação.

| Integrante | Trabalho da semana |
|---|---|
| Arthur | Revisar estrutura, rotas, menu, imagens e composição das páginas; integrar as correções e conferir o build. |
| Caio Abanca | Revisar Hub no computador e no celular, seus links, imagens e controles. |
| Igor | Revisar Sobre, Treinos e Galeria nas marcas; conferir teclado, legendas, contador e imagens; ajustar o CSS global com Arthur. |
| Matheus | Revisar apresentação e conteúdo dos planos, chamadas, endereços e mapas. |
| Guilherme | Revisar contato, textos e links externos em diferentes telas. |
| Lucas | Testar campos obrigatórios, horários passados ou ocupados, confirmação e persistência após recarregar; conferir separação das reservas por marca. |
| Equipe | Fazer revisão cruzada, registrar correções, atualizar instruções de execução e preparar a demonstração final. |

**Entrega prevista:** versão integrada revisada, instruções atualizadas e demonstração preparada.

**Revisão cruzada sugerida:** Arthur e Caio conferem navegação e Hub; Igor e Matheus conferem conteúdo e layout das seções; Guilherme e Lucas conferem contatos e formulário.

## 7. Rotina de cada sprint

| Momento | Atividade | Resultado |
|---|---|---|
| Início da semana | Sprint Planning, até 45 minutos | Combinar a meta, as tarefas e a disponibilidade de cada integrante. |
| Dias de trabalho | Daily Scrum, 15 minutos | Conferir avanço, dificuldades e ajustes necessários para a meta da semana. |
| Durante a semana | Atualização do quadro | Manter responsáveis, tarefas e impedimentos visíveis. |
| Final da semana | Sprint Review, até 30 minutos | Demonstrar o que funciona e registrar ajustes. |
| Após a Review | Retrospectiva, até 20 minutos | Combinar uma melhoria para a próxima etapa. |

## 8. Quadro de acompanhamento

| Coluna | Uso |
|---|---|
| A fazer | Tarefas selecionadas que ainda não começaram. |
| Em andamento | Tarefas em desenvolvimento. |
| Em revisão | Implementação pronta, aguardando conferência de outro integrante. |
| Concluído | Trabalho integrado e verificado conforme os critérios de conclusão. |

Cada cartão deve conter tarefa, integrante responsável, semana e resultado da revisão. Impedimentos devem ser anotados no próprio cartão.

## 9. Critérios de conclusão

- Componente integrado à página correspondente, com imports e props corretos.
- Conteúdo e imagens correspondem à marca apresentada.
- Links e controles relacionados à tarefa funcionam.
- Layout conferido no computador e no celular.
- Funcionalidade revisada por outro integrante e problemas impeditivos corrigidos.
- Para a entrega final, build executado sem erros e instruções de execução atualizadas.

## 10. Complementos presentes na versão atual

O código atual também contém a rota de Fisioterapia, seletor de tema e configuração de publicação na Vercel, trabalho encarregado e executado por Igor, o Scrum Master e Articulador do projeto.
