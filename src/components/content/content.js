import React from "react"

import SpotifyImage from "../../images/spotify.svg"
import ItunesImage from "../../images/itunes.svg"
import AnchorFm from "../../images/anchor_fm.svg"

const Content = () => {
  return (
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
  )
}

export default Content;
