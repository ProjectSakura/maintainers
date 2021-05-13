import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import style from './contributors.module.css';
import Image from './logo.png';
import AdComponent from '../AdComponent/AdComponent';

const Contributor = () => {
  const [arr, setarr] = React.useState([]);
  const [arr1, setarr1] = React.useState([]);
  const [switchcontributor, setSwitchcontributor] = React.useState(false);
  const [switchmaintainer, setSwitchmaintainer] = React.useState(true);
  const contributorClicked = () => {
    setSwitchcontributor(true);
    setSwitchmaintainer(false);
  };
  const maintainerClicked = () => {
    setSwitchcontributor(false);
    setSwitchmaintainer(true);
  };
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        'https://raw.githubusercontent.com/ProjectSakura/OTA/11/api/maintainers.json',
      );
      response = await response.json();
      setarr(response);
    }

    fetchMyAPI();
  }, []);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        'https://raw.githubusercontent.com/ProjectSakura/OTA/11/api/contributors.json',
      );
      response = await response.json();
      setarr1(response);
    }

    fetchMyAPI();
  }, []);
  return (
    <div>
      <div className={style.go_back}>
        <a href="https://projectsakura.xyz">
          <div
            style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '20px',
                paddingBottom: '2px',
              }}
              src={Image}
              alt="logo"
            />
            <div>
              <h2 className={style['Main-logo']}>
                <span>Project</span>
                <span className={style.Sakura}> Sakura</span>
              </h2>
            </div>
          </div>
        </a>
      </div>

      <main>
        <div className={style.hero}>
          <div className={style.heading}>
            <div className={style.title}>
              Meet the Team&nbsp;
              <i className="fa fa-users" />
            </div>
          </div>
        </div>
        <div className={style.switch_button}>
          <Button onClick={() => maintainerClicked()}>Mantainers</Button>
          <Button onClick={() => contributorClicked()}>Web Developers</Button>
        </div>
        {switchmaintainer && (
          <div className={style['all-cards']}>
            {arr.map((element) => (
              <Card key={element.id} className={style['card-item']}>
                <Card.Body>
                  <img
                    src={element.maintainer_photo}
                    alt=""
                    style={{ width: '50%', borderRadius: '50%' }}
                  />
                  <Card.Title
                    className={style['card-title']}
                    style={{ fontSize: '20px' }}
                  >
                    <b>{element.maintainer_name}</b>
                  </Card.Title>

                  <Card.Subtitle
                    className="mb-2"
                    style={{ fontSize: '15px' }}
                  >
                    {element.devices_mantaining[0]}
                  </Card.Subtitle>
                  <Card.Text className={style['card-content']}>
                    <img
                      src={element.country_flag}
                      alt=""
                      style={{ width: '30px' }}
                    />
                  </Card.Text>
                  <Card.Link
                    href={element.github_link}
                    className={style.social}
                  >
                    <i className="fa fa-github fa-2x" />
                  </Card.Link>
                  <Card.Link
                    href={element.telegram_link}
                    className={style.social}
                  >
                    <i className="fa fa-telegram fa-2x" />
                  </Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        {switchcontributor && (
          <div className={style['all-cards']}>
            {arr1.map((element) => (
              <Card key={element.id} className={style['card-item']}>
                <Card.Body>
                  <img
                    src={element.contributor_photo}
                    alt=""
                    style={{ width: '50%', borderRadius: '50%' }}
                  />
                  <Card.Title className={style['card-title']}>
                    {element.contributor_name}
                  </Card.Title>

                  <Card.Subtitle className="mb-2" style={{ size: '15px;' }}>
                    {element.contributing_role.map((device, idx) => {
                      if (idx === element.contributing_role.length - 1) {
                        return device;
                      }
                      return `${device}, `;
                    })}
                  </Card.Subtitle>
                  <Card.Text className={style['card-content']}>
                    <img
                      src={element.country_flag}
                      alt=""
                      style={{ width: '30px' }}
                    />
                  </Card.Text>
                  <Card.Link
                    href={element.github_link}
                    className={style.social}
                  >
                    <i className="fa fa-github fa-2x" />
                  </Card.Link>
                  <Card.Link
                    href={element.linkedin_link}
                    className={style.social}
                  >
                    <i className="fa fa-linkedin fa-2x" />
                  </Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </main>
      <center>
        <AdComponent />
      </center>
    </div>
  );
};
export default Contributor;
