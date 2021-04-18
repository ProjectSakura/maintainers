import React, { useEffect } from "react";
import style from "./contributors.module.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

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
        "https://raw.githubusercontent.com/ProjectSakura/OTA/11/api/maintainers.json"
      );
      response = await response.json();
      setarr(response);
    }

    fetchMyAPI();
  }, []);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://raw.githubusercontent.com/ProjectSakura/OTA/11/api/contributors.json"
      );
      response = await response.json();
      setarr1(response);
    }

    fetchMyAPI();
  }, []);
  return (
    <div>
      <div className={style["go_back"]}>
        <Button>GO Back to the main website</Button>
      </div>

      <main>
        <div className={style["hero"]}>
          <div className={style["heading"]}>
            <div className={style["title"]}>
              Meet the Team&nbsp;<i className="fa fa-users"></i>
            </div>
          </div>
        </div>
        <div className={style["switch_button"]}>
          <Button onClick={() => maintainerClicked()}>Mantainers</Button>
          <Button onClick={() => contributorClicked()}>Contributors</Button>
        </div>
        {switchmaintainer && (
          <div className={style["all-cards"]}>
            {arr.map((element, i) => {
              return (
                <Card key={i} className={style["card-item"]}>
                  <Card.Body>
                    <img
                      src={element.maintainer_photo}
                      alt=""
                      style={{ width: "50%", borderRadius: "50%" }}
                    />
                    <Card.Title className={style["card-title"]}>
                      {element.maintainer_name}
                    </Card.Title>

                    <Card.Subtitle className="mb-2">
                      {element.devices_mantaining.map((device, idx) => {
                        if (idx === element.devices_mantaining.length - 1) {
                          return device;
                        }
                        return device + ", ";
                      })}
                    </Card.Subtitle>
                    <Card.Text className={style["card-content"]}>
                      <img
                        src={element.country_flag}
                        alt={""}
                        style={{ width: "30px" }}
                      />
                    </Card.Text>
                    <Card.Link
                      href={element.github_link}
                      className={style["social"]}
                    >
                      <i className="fa fa-github fa-2x"></i>
                    </Card.Link>
                    <Card.Link
                      href={element.telegram_link}
                      className={style["social"]}
                    >
                      <i className="fa fa-telegram fa-2x"></i>
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
        {switchcontributor && (
          <div className={style["all-cards"]}>
            {arr1.map((element, i) => {
              return (
                <Card key={i} className={style["card-item"]}>
                  <Card.Body>
                    <img
                      src={element.contributor_photo}
                      alt=""
                      style={{ width: "50%", borderRadius: "50%" }}
                    />
                    <Card.Title className={style["card-title"]}>
                      {element.contributor_name}
                    </Card.Title>

                    <Card.Subtitle className="mb-2">
                      {element.contributing_role.map((device, idx) => {
                        if (idx === element.contributing_role.length - 1) {
                          return device;
                        }
                        return device + ", ";
                      })}
                    </Card.Subtitle>
                    <Card.Text className={style["card-content"]}>
                      <img
                        src={element.country_flag}
                        alt={""}
                        style={{ width: "30px" }}
                      />
                    </Card.Text>
                    <Card.Link
                      href={element.github_link}
                      className={style["social"]}
                    >
                      <i className="fa fa-linkedin fa-2x"></i>
                    </Card.Link>
                    <Card.Link
                      href={element.linkedin_link}
                      className={style["social"]}
                    >
                      <i className="fa fa-telegram fa-2x"></i>
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
export default Contributor;
