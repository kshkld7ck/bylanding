import React, { useState } from 'react'
import Picture from '../Picture'
import './index.scss'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import ReactPlayer from 'react-player'

function Projects() {
  const [open, setOpen] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState('');
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const projectItems = [
    {
      picture: 'project1',
      badge: 'Фильм',
      title: "Девятаев",
      description: "Фильм Тимура Бекмамбетова",
      url: "https://www.youtube.com/embed/Y4GAuMZWGqM",
    },
    {
      picture: 'project2',
      badge: 'Культура',
      title: "Жорик",
      description: "Фильм Тимура Бекмамбетова",
      url: "https://www.youtube.com/embed/mf9yeIN_oAs",
    },
    {
      picture: 'project3',
      badge: 'Культура',
      title: "Монеточка с Буруновым",
      description: "Клип «Белые Розы»",
      url: "https://www.youtube.com/embed/aHUXuzMQvn4",
    },
    {
      picture: 'project4',
      badge: 'Спорт',
      title: "Карякин",
      description: "Неоднократный призер Ралли «Дакар»",
      url: "https://www.youtube.com/embed/lu6fO0UnGJ8",
    },
  ]
  return (
    <section className="projects" id="projects">
      <div className="ellipsis" />
      <div className="container">
        <h3>Специальные проекты <span>{"&"}</span> колоборации</h3>
        <div className="projects__list">

          {projectItems.map((el) => {
            return (
              <div className="projects__item" onClick={() => {
                setVideoUrl(el.url)
                handleOpen()
              }}>
                <Picture
                  pictureName={el.picture}
                  pictureAlt={el.title}
                />
                <span className="badge">{el.badge}</span>
                <h5 className="projects__name">{el.title}</h5>
                <hr />
                <p className="projects__description">{el.description}</p>
              </div>
            )
          })}

        </div>
      </div>

      {open &&
        <Rodal visible={open} onClose={handleClose} width="700" height="500">
          <div>
            <ReactPlayer
              url={videoUrl}
              playing={true}
              width="700px"
              height="500px"
              controls
            />

          </div>
        </Rodal>
      }
    </section>
  )
}

export default Projects
