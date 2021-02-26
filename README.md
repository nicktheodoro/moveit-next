Projeto criado durante o bootcamp da @Rocketseat na trilha de React


Projeto criado utilizando next.js um framework React muito utilizado atualmente para criação de páginas
dinâmicas e suas funcionalidades. Neste projeto também está incluido css modules para a criação da estilização
do conteúdo nesta aplicação.

Através de estados + hooks + JS foi elaborado um contador dinâmico para a aplicação, utilizando o setTimeOut em
conjunto com useEffect() podemos atulizar o estado do contador a cada segundo e com isso gerando um ContDown 
totalmente funcional.

Utilizando a API de Contexts do react foi desenvolvida uma lógica de contexto para permitir a comunicação entre os componentes, possibilitando que seja criado um contexto em que a aplicação irá disparar diversos eventos e 
funcões ligadas a desafios confome o uso da aplicação. -- ChallengesContext.tsx 

Acrescentado a funcionalidade cookies na aplicação para que o usuário possa continuar avançando de nível e suas informações persistam dentro de ChallengesContext. Para isso foi utilizada a biblioteca JS-COOKIE em conjunto com o "backEnd" que roda no Next.js fazendo com que as informações fiquem salvas no app e não apenas no navegar. Com isso é possibilitado que o usuário continue acessando as informações mesmo que feche o navegador ou abra outras abas da aplicação.

Tecngologias do projeto: HTML, CSS, CSSMODULES, JAVASCRIPT, TYPESCRIPT, REACT, NEXTJS.