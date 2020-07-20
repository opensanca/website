import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"

import "../main.css"

import LogoImage from "../images/logo.png"
import ApoiaseImage from "../images/apoiase.svg"
import PicpayImage from "../images/picpay.svg"
import PadrimImage from "../images/padrim.png"
import SpotifyImage from "../images/spotify.svg"
import ItunesImage from "../images/itunes.svg"
import AnchorFm from "../images/anchor_fm.svg"
import ArquiveiImage from "../images/arquivei.png"
import LuzImage from "../images/luz.png"
import SoftboxImage from "../images/softbox.png"
import LogoMonitoraImage from "../images/logo-monitora.png"
import InvilliaImage from "../images/invillia.png"
import LogoFasttrackImage from "../images/logo-fasttrack.png"
import LogoSerasaImage from "../images/logo-serasa.png"
import CristofersousaImage from "../images/cristofersousa.jpg"
import LucasMarquesImage from "../images/lucas_marques.jpg"
import DeyseSandeImage from "../images/deyse_sande.jpg"
import GuilhermeCabriniImage from "../images/guilherme_cabrini.jpg"
import JoaoGorlaImage from "../images/joao_gorla.jpg"
import CarlosRibeiroImage from "../images/carlos_ribeiro.jpeg"
import LuizMenezesImage from "../images/luiz_menezes.jpeg"
import MarceloMikymineImage from "../images/marcelomikymine.jpg"
import LeticiArostirolaImage from "../images/leticiarostirola.jpeg"
import AndreLuisgomesImage from "../images/andreluisgomes.jpeg"
import JoseDamianiImage from "../images/josedamiani.jpg"
import LeonardoferreiraImage from "../images/leonardoferreira.jpeg"
import RafaelpereiraImage from "../images/rafaelpereira.jpeg"
import PaulamilaniImage from "../images/paulamilani.jpeg"
import SamuelgrigolatoImage from "../images/samuelgrigolato.jpeg"
import JuliofalboImage from "../images/juliofalbo.jpeg"
import DaviImage from "../images/davi.jpg"

const Index = () => {
  return (
    <>
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-main-collapse"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <img
                src={LogoImage}
                alt=""
                className="img-responsive pull-left"
                width="15%"
              />
              <span className="light">opensanca</span>
            </a>
          </div>

          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a className="page-scroll" href="#about">
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="https://www.meetup.com/opensanca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eventos
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opensanca"
                  target="_blank"
                  rel="noreferrer"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#apoie">
                  Apoie
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#podcast">
                  Podcast
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#parceiro">
                  Parceiros
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">Opensanca</h1>
                <p className="intro-text">
                  Seja bem vindo! Somos um grupo que organiza Meetups sobre
                  opensource, inovação, tecnologia e happy hour!
                  <br />
                  Faça parte!
                </p>
                <a href="#about" className="btn btn-circle page-scroll">
                  <i className="fa fa-angle-double-down animated"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="container content-section text-center">
        <div className="row">
          <div className="col-lg-12">
            <h2>Sobre</h2>
            <p>
              Olá, antes de tudo, agradecemos pela sua visita aqui no{" "}
              <a
                href="https://www.meetup.com/pt-BR/opensanca"
                target="_blank"
                rel="noreferrer"
              >
                OpenSanca
              </a>
              o objetivo nosso é trazer a cultura dos meetup e realizar reuniões
              e workshop periodicamente no interior paulista (São Carlos,
              Araraquara, Matão, Ibaté), buscamos trazer a tona discussão sobre
              tecnologias Open Source, e esperamos que esses encontros sejam
              além de tecnologias, esperamos que ele forneça apoio em diversos
              segmentos de qualquer área independente da tecnologia, afinal a
              tecnologia é um meio e não um fim! ;) <br /> <br />
              Seja parte disso e ajude a comunidade, não importa se você é
              iniciante, ninja-samurai ou goku das profundezas do Egeu. <br />{" "}
              <br />
              Afinal, o que a comunidade espera de você{" "}
              <a href="/#">desenvolvedor</a>? Quando você ouve a palavra{" "}
              <a href="/#">contribua</a>, espera-se que possa ir além de
              githubs, palestras, workshops entre outros. Por isto você é uma
              peça importante no mundo, contribua!
              <br /> <br />
              Queremos fazer um bate papo no qual todos possam colaborar e
              fomentar um networking com empresas, desenvolvedores, comunidades
              acadêmicas. <br />
              <br />
              Faça parte do{" "}
              <a
                href="https://www.meetup.com/pt-BR/opensanca/"
                target="_blank"
                rel="noreferrer"
              >
                OpenSanca
              </a>{" "}
              ele é livre e sempre será, traga seus amigos, independente da
              carreira que segue, aqui oferecemos workshops, palestras,
              churrasco, e tudo aquilo que acharmos que é bacana para você!
              Entre, agora!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="https://slack-opensanca.herokuapp.com/">
              <i className="fab fa-slack fa-5x"></i>
            </a>
            <h3>
              Slack{" "}
              <img src="https://slack-opensanca.herokuapp.com/badge.svg" alt="Slack badge"/>
            </h3>
            <p>
              Tá afim de conversar com uma galera "hibrída" que não importa a
              linguagem, seja Java, Ruby, Python, Swift, não acredita que tem
              tudo isso misturado? Crie seu networking, agora mesmo! Tem dúvidas
              sobre alguma lib ou tecnologia? <br /> <br />
              <a
                href="https://slack-opensanca.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-default btn-lg"
              >
                Quero entrar!
              </a>
            </p>
          </div>

          <div className="col-md-4">
            <a
              href="https://www.facebook.com/groups/398166953717267/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook fa-5x"></i>
            </a>
            <h3>Facebook</h3>
            <p>
              Para facilitar a comunicação e a veiculação de informações, além
              da plataforma do Meetup, nos divulgamos nossos workshops, vagas,
              sorteios entre outros mimos bacanas pelo nosso grupo do facebook,
              sendo assim! Não fique de fora! ;) <br /> <br />
              <a
                href="https://www.facebook.com/groups/398166953717267/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-default btn-lg"
              >
                PartiuuuUU!
              </a>
            </p>
          </div>

          <div className="col-md-4">
            <a
              href="https://www.meetup.com/pt-BR/opensanca"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-star fa-5x"></i>{" "}
            </a>
            <h3>Meetup</h3>
            <p>
              Ficou interessado nos workshops e palestras, como você vai fazer
              para participar? Entre no nosso canal do meetup, que você irá
              receber um e-mail nosso de cada evento que criarmos, já estamos
              com programação agendada até junho. <br /> <br />
              <a
                href="https://www.meetup.com/pt-BR/opensanca/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-default btn-lg"
              >
                Cola Aêêêê!
              </a>
            </p>
          </div>

          <div className="col-md-4">
            <a
              href="https://www.youtube.com/c/opensanca"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube fa-5x"></i>{" "}
            </a>
            <h3>YouTube</h3>
            <p>
              O QUEEEE? Não pode ir no nosso último encontro? Não tem problema,
              se inscreva no nosso canal e fique por dentro.
              <br /> <br />
              <a
                href="https://www.youtube.com/c/opensanca"
                target="_blank"
                rel="noreferrer"
                className="btn btn-default btn-lg"
              >
                Bora Assistir!
              </a>
            </p>
          </div>
          <div className="col-md-4 mt-5">
            <a
              href="https://www.instagram.com/opensanca/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-5x"></i>{" "}
            </a>
            <h3>Instagram</h3>
            <p>
              Para tudo! Ainda não segue a gente? Segue a gente ai e fique por
              dentro das nossas histórias e nossas publicações!
              <br /> <br />
              <a
                href="https://www.instagram.com/opensanca/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-default btn-lg"
              >
                Segue Aêêêê!
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <a
              href="https://medium.com/opensanca"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-medium fa-5x"></i>{" "}
            </a>
            <h3>Medium</h3>
            <p>
              Quer ler alguns dos nossos artigos? Segue nosso Medium e fique por
              dentro das novas atualizações para ler no busão.
              <br /> <br />
              <a
                href="https://medium.com/opensanca"
                target="_blank"
                rel="noreferrer"
                className="btn btn-default btn-lg"
              >
                Bora Ler!
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.linkedin.com/company/opensanca/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-5x"></i>{" "}
            </a>
            <h3>Linkedin</h3>
            <p>
              Conecte-se ao nosso perfil e fique por dentro da nossa comunidade
              e faça conexão com os membros também.
              <br /> <br />
              <a
                href="https://www.linkedin.com/company/opensanca/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-default btn-lg"
              >
                Bora Conectar!
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="apoie" className="container content-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Ajude como puder</h2>
              <p>
                O Opensanca não visa nenhum lucro. Todo o dinheiro arrecadado é
                usado para despesas e investido de volta na comunidade no
                formato de palestras, treinamentos, encontros e podcasts
                gratuitos.
              </p>
              <p>Acesse alguma das opções abaixo e contribua!</p>
            </div>
          </div>
          <div className="row support-options">
            <div className="col-sm-4">
              <a
                href="https://apoia.se/opensanca"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ApoiaseImage} alt="Apoiase" />
              </a>
            </div>
            <div className="col-sm-4">
              <a
                href="https://picpay.me/opensanca"
                target="_blank"
                rel="noreferrer"
              >
                <img src={PicpayImage} alt="PicPay" />
              </a>
            </div>
            <div className="col-sm-4">
              <a
                href="https://www.padrim.com.br/opensanca"
                target="_blank"
                rel="noreferrer"
              >
                <img src={PadrimImage} alt="Padrim" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="podcast" className="container text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Escute onde quiser!</h2>
              <p>
                Tá no ônibus e não sabe o que escutar? Escute o nosso podcast na
                plataforma que você mais curtir e aproveite a viagem!!!
              </p>
            </div>
            <div className="podcast-options col-md-12">
              <div className="spotify-option col-sm-4">
                <div>
                  <a
                    href="https://open.spotify.com/show/1CtIJ3aoBNjPytImxFcBhv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="spotify-option"
                      src={SpotifyImage}
                      alt="Logo da plataforma spotify"
                    />
                  </a>
                </div>
              </div>
              <div className="itunes-option col-sm-4">
                <div>
                  <a
                    href="https://podcasts.apple.com/us/podcast/opensanca-podcast/id1235919084"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="itunes-option"
                      src={ItunesImage}
                      alt="Logo da plataforma itunes"
                    />
                  </a>
                </div>
              </div>
              <div className="anchor-option col-sm-4">
                <div>
                  <a
                    href="https://anchor.fm/opensanca"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="itunes-option"
                      src={AnchorFm}
                      alt="Logo da plataforma anchor.fm"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parceiro" className="container content-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Parceiros</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-centered partner-logo">
              <a
                href="http://www.arquivei.com.br/"
                title="Ir para Arquivei"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img
                    src={ArquiveiImage}
                    width="235"
                    title="Arquivei"
                    alt="Logo Arquivei"
                  />
                  <figcaption></figcaption>
                </figure>
              </a>
            </div>
            <div className="col-md-4 col-centered partner-logo">
              <a
                href="https://www.luz-ef.com/"
                title="Ir para Luz"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img src={LuzImage} width="235" title="Luz" alt="Logo Luz" />
                  <figcaption></figcaption>
                </figure>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-centered partner-logo">
              <a
                href="https://medium.com/luizalabs"
                title="Ir para LuizaLabs"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img
                    src={SoftboxImage}
                    title="LuizaLabs"
                    alt="Logo LuizaLabs"
                  />
                  <figcaption></figcaption>
                </figure>
              </a>
            </div>
            <div className="col-md-4 col-centered partner-logo">
              <a
                href="http://monitoratec.com.br/"
                title="Ir para Monitora"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img
                    src={LogoMonitoraImage}
                    title="Monitora"
                    alt="Logo Monitora"
                  />
                  <figcaption>
                    Empresa localizada em São Carlos, com mais de 60
                    colaboradores, todos focados em encontrar soluções para a
                    sua empresa. Nosso desafio é criar, inovar e atender!
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-centered partner-logo">
              <a
                href="http://www.Invillia.com"
                title="Ir para Invillia"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img
                    src={InvilliaImage}
                    title="Invillia"
                    width="235"
                    alt="Logo Invillia"
                  />
                  <figcaption>
                    Somos uma empresa formada por mais de duzentas pessoas
                    inquietas e comprometidas, incessantes na busca pela
                    inovação e tecnologia.
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-centered partner-logo">
              <a
                href="http://ft.ventures"
                title="Ir para Fast Track"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img
                    src={LogoFasttrackImage}
                    width="235"
                    title="Fast Track"
                    alt="Logo Fast Track"
                  />
                  <figcaption>
                    Somos uma empresa focada em investir capital financeiro,
                    know-how e relacionamento para desenvolver empresas digitais
                    e modelos de negócios escaláveis.
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-centered partner-logo">
              <a
                href="https://www.serasaexperian.com.br"
                title="Ir para Serasa Experian"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img
                    src={LogoSerasaImage}
                    width="235"
                    title="Serasa Experian"
                    alt="Logo Serasa Experian"
                  />
                  <figcaption>
                    Na Serasa Experian, desvendamos o poder dos dados para que
                    consumidores e empresas ampliem oportunidades.
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="staff" className="content-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Gente que faz acontecer!</h1>
              <p>
                Sem essas pessoas, isso aqui não sairia do papel, em meio a um
                "Toró de Parpite" surge o{" "}
                <strong>
                  OPENSANCA! <i className="fa fa-heart"></i>
                </strong>
              </p>
            </div>
          </div>
          <div className="members">
            <div className="row">
              <div className="col-sm-4">
                <img src={CristofersousaImage} className="img-circle" alt="" />
                <h5>Cristofer Sousa @ContaAzul</h5>
                <span className="input-group-btn">
                  <a
                    href="https://br.linkedin.com/in/cristofersousa"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    Who?
                  </a>
                </span>
              </div>
              <div className=" col-sm-4">
                <img src={LucasMarquesImage} className="img-circle" alt="..." />
                <h5>Lucas Marques @ReclameAqui </h5>
                <span className="input-group-btn">
                  <a
                    href="https://br.linkedin.com/in/marquesds/pt"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img
                  src={DeyseSandeImage}
                  className="img-circle img-border"
                  alt=""
                />
                <h5>Deyse Sande @Exactaworks</h5>
                <span className="input-group-btn">
                  <a
                    href="https://br.linkedin.com/in/deyse-sande-8975a311/pt"
                    target="blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    Who?{" "}
                  </a>
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <img
                  src={GuilhermeCabriniImage}
                  className="img-circle"
                  alt="Guilherme Cabrini"
                />
                <h5>Guilherme Cabrini @Exactaworks</h5>
                <span className="input-group-btn">
                  <a
                    href="https://br.linkedin.com/in/guilherme-cabrini-da-silva-ab2a5089"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img src={JoaoGorlaImage} className="img-circle" alt="" />
                <h5>João Gorla @ContaAzul </h5>
                <span className="input-group-btn">
                  <a
                    href="https://br.linkedin.com/in/joão-paulo-ferro-gorla-aaaa785b"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img src={CarlosRibeiroImage} className="img-circle" alt="" />
                <h5>Carlos Ribeiro @Red Hat</h5>
                <span className="input-group-btn">
                  <a
                    href="https://br.linkedin.com/in/carloseduribeiro"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?
                  </a>
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <img src={LuizMenezesImage} className="img-circle" alt="Luiz Menezes"/>
                <h5>Luiz Menezes @Stoq</h5>
                <span className="input-group-btn">
                  <a
                    href="https://github.com/lamenezes"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img src={MarceloMikymineImage} className="img-circle" alt="" />
                <h5>Marcelo Miky Mine @USP </h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/marcelomiky"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img
                  src={LeticiArostirolaImage}
                  className="img-circle"
                  alt=""
                />
                <h5>Leticia Rostirola @Arquivei</h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/lrostirola/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?
                  </a>
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <img src={AndreLuisgomesImage} className="img-circle" alt="André Luis Gomes"/>
                <h5>André Luis Gomes @Arquivei</h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/andreluisgomes/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img src={JoseDamianiImage} className="img-circle" alt="" />
                <h5>José Damiani @Sapium </h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/damianijr/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img
                  src={LeonardoferreiraImage}
                  className="img-circle"
                  alt=""
                />
                <h5>Leonardo Ferreira @Invillia</h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/leonardo-ferreira-071431123/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?
                  </a>
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <img src={RafaelpereiraImage} className="img-circle" alt="Rafael Pereira"/>
                <h5>Rafael Pereira Girolineto @Arquivei</h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/girolineto/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img src={PaulamilaniImage} className="img-circle" alt="Paula Milani" />
                <h5>Paula Milani @Beblue </h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/paula-milani-917ab365/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img src={SamuelgrigolatoImage} className="img-circle" alt="Samuel Grigolato" />
                <h5>Samuel Grigolato @Quasar</h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/samuel-grigolato"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?
                  </a>
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <img src={JuliofalboImage} className="img-circle" alt="Julio Falbo"/>
                <h5>Júlio Falbo @Tradeshift</h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/juliofalbo/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?{" "}
                  </a>
                </span>
              </div>
              <div className="col-sm-4">
                <img src={DaviImage} className="img-circle" alt="Davi"/>
                <h5>Davi Erba @Luizalabs</h5>
                <span className="input-group-btn">
                  <a
                    href="https://www.linkedin.com/in/daviguelfi/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default btn-green"
                  >
                    {" "}
                    Who?{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container content-section text-center">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <h2>Faça contato!</h2>
            <p>
              <a href="mailto:opensanca@gmail.com">opensanca@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container text-center" id="openFooter"></div>
      </footer>
    </>
  )
}

export default Index
