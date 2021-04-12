import React from "react";
import style from "./contributors.module.css";
import Card from 'react-bootstrap/Card';
import Data from './data';

const Contributor = () => {
    return (
        <main>
            <div id={style["hero"]}>
                <div id={style["heading"]}>
                    <div id={style["title"]}>Contributors&nbsp;<i className="fa fa-users"></i></div>
                </div>
            </div>
            <div className={style["all-cards"]}>
                {Data.map((element, i) => {
                    return (
                        <Card className={style["card-item"]}>
                            <Card.Body>
                                <Card.Title className={style["card-title"]}>Demo Name</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Web Developer</Card.Subtitle>
                                <Card.Text className={style["card-content"]}>
                                Some quick example text to make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#" className={style["social"]}><i class="fa fa-github fa-2x"></i></Card.Link>
                                <Card.Link href="#" className={style["social"]}><i className="fa fa-telegram fa-2x"></i></Card.Link>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </main>
    );
};
export default Contributor;