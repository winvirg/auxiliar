import './index.css';
import Menu from './components/menu';
import Projetos from './components/projetos';
import Time from './components/time';
import Contato from './components/contato';
import Rodape from './components/rodape';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Menu/>
      </header>
      <section className='slider'>
        <div>
          <h1>PROJETANDO E DESENVOLVENDO SOLUÇÕES</h1>
          <h2>PARA TODOS OS TIPOS DE NEGÓCIOS</h2>
        </div>
        <canvas></canvas>
      </section>
      <section className='oquefazemos'>
        <div>
          <div className='titulo'><h3>O QUE FAZEMOS?</h3></div>
          <p>Temos como objetivo oferecer ferramentas e serviços
             que auxiliem outras empresas a otimizar suas operações
             e aperfeiçoar seus processos internos através do Desenvolvimento de Sistemas e Software.</p>
        </div>
      </section>
      <section className='vantagens'>
        <div className='vantagem1'>
          <h4><strong>Inovação Tecnológica:</strong><br></br>
          A Steno Solutions se destaca com soluções tecnológicas inovadoras, como o app DOTI,
           posicionando-a na vanguarda das tendências e demandas do mercado.
          </h4>
        </div>
        <div className='vantagem2'> 
          <h4><strong>Abordagem Empática: </strong><br></br>
          A abordagem de sistemas empáticos da Steno Solutions reflete seu compromisso com a valorização das necessidades humanasgg</h4>
        </div>
        <div className='vantagem3'>
          <h4><strong>Soluções Multissetoriais: </strong><br></br>
          A Steno Solutions ampliou seu impacto ao aplicar sistemas empáticos em diversas indústrias, 
          além de solucionar a rotatividade na área de TI.</h4>
        </div>
      </section>
      <section className='quemsomos'>
      <div className='titulo'><h3>QUEM SOMOS?</h3></div>
        <p>Fundada em 2022 como parte do programa Clusters Corredores Digitais, 
          a startup Steno Solutions foi iniciada por alunos de TIC, desenvolvendo 
          o aplicativo DOTI para combater a rotatividade na área de TI. 
          A empresa ampliou sua atuação, abordando problemas em diferentes setores por meio de sistemas empáticos.</p>
      </section>
      <section>
    
       <Projetos />
       <Projetos />
       <Projetos />
      </section>
      <section>
        <h3 class="nossotime">NOSSO TIME</h3>
        <Time nome="Karine Sousa" foto="../../public/img/steno.png" cargo1="Chief Product Officer" cargo2="Chief Design Officer" />
        <Time nome="Thiago Winvirg" foto="../../public/img/steno.png" cargo1="Chief Executive Officer" cargo2="Chief Information Officer" />
      </section>
      <section>
        <h3>FALE CONOSCO</h3>
        <ol>
          <ul>solutionssteno@gmail.com</ul>
          <ul>(00) 9 0000 0000</ul>
          <ul>OU</ul>
        </ol>
        <form action="" method="get">
          <input type="text" name="name" placeholder='Nome Completo'/>
          <input type="text" name="empresa" placeholder='Empresa'/>
          <input type="email" name="email" placeholder='E-mail'/>
          <input type="tel" name="telefone" placeholder='Telefone'/>
          <input type="text" name="assunto" placeholder='Assunto'/>
          <textarea name="descricao" placeholder='Descrição'/>
          <button>ENTRE EM CONTATO</button>
        </form>
      </section>
      <footer>
        <ul>
          <li><h4>SIGA-NOS</h4></li>
          <li>
            <figure>
              <img src='' alt=''></img>
              <figcaption></figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src='' alt=''></img>
              <figcaption></figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src='' alt=''></img>
              <figcaption></figcaption>
            </figure>
          </li>
        </ul>
        <ul>
          <li>DOTI</li>
          <li>BLOG</li>
          <li>MEDICAL FINDER</li>
          <li>BRANDING</li>
        </ul>
        <ul>
          <li><h4>SUPORTE</h4></li>
          <li>(00) 9 0000 0000</li>
        </ul>
        <ul>
          <li><h4>ASSINE NOSSA NEWSLETTER</h4></li>
          <li>
            <form>
              <input type="email" name="email" placeholder='Seu melhor e-mail'/>
              <button>ASSINAR</button>
            </form>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
