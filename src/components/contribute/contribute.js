import React from "react"

import ApoiaseImage from "../../images/apoiase.svg"
import PicpayImage from "../../images/picpay.svg"
import PadrimImage from "../../images/padrim.png"


const Contribute = () => {
  return (
    <section id="apoie" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Ajude como puder</h2>
            <p>
              O Opensanca não visa nenhum lucro. Todo o dinheiro arrecadado é
              usado para despesas e investido de volta na comunidade no formato
              de palestras, treinamentos, encontros e podcasts gratuitos.
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
  )
}

export default Contribute;
