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
                                <Card.Title className={style["card-title"]}>{element[0]}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{element[1]}</Card.Subtitle>
                                <Card.Text className={style["card-content"]}>
                                {element[2]}
                                </Card.Text>
                                <Card.Link href={element[3]} className={style["social"]}><i class="fa fa-github fa-2x"></i></Card.Link>
                                <Card.Link href={element[4]} className={style["social"]}><i className="fa fa-telegram fa-2x"></i></Card.Link>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </main>
    );
};
export default Contributor;