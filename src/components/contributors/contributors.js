import React from "react";
import style from "./contributors.module.css";
import Card from "react-bootstrap/Card";
import Data from "./data";
import { Button } from "react-bootstrap";

const Contributor = () => {
  return (
    <div>
      {/* <Button>GO Back to the main website</Button> */}
      <main>
        <div className={style["hero"]}>
          <div className={style["heading"]}>
            <div className={style["title"]}>
              Contributors&nbsp;<i className="fa fa-users"></i>
            </div>
          </div>
        </div>
        <div className={style["all-cards"]}>
          {Data.map((element, i) => {
            return (
              <Card className={style["card-item"]}>
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
                  <Card.Link href={element[3]} className={style["social"]}>
                    <i class="fa fa-github fa-2x"></i>
                  </Card.Link>
                  <Card.Link href={element[4]} className={style["social"]}>
                    <i className="fa fa-telegram fa-2x"></i>
                  </Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};
export default Contributor;
