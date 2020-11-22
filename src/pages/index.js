import React from "react"

import Layout from "../components/layout/layout"
import Contact from "../components/contact/contact"
import Members from "../components/members/members"
import Partners from "../components/partners/partners"

import LogoImage from "../images/logo.png"
import ApoiaseImage from "../images/apoiase.svg"
import PicpayImage from "../images/picpay.svg"
import PadrimImage from "../images/padrim.png"
import SpotifyImage from "../images/spotify.svg"
import ItunesImage from "../images/itunes.svg"
import AnchorFm from "../images/anchor_fm.svg"

const Index = () => {
  return (
    <Layout>
        <nav
          className="navbar navbar-expand-lg navbar-custom fixed-top"
          role="navigation"
        >
      <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" style={{ background: "#fff" }}></i>
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

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav navbar-right ml-auto">
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
              </a>{" "}
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
              <img
                src="https://slack-opensanca.herokuapp.com/badge.svg"
                alt="Slack badge"
              />
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
          <div className="col-md-4">
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

      <section id="apoie" className="content-section text-center">
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

      <section id="podcast" className="text-center">
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

      <Partners />
      <Members />
      <Contact />
    </Layout>
  )
}

export default Index
