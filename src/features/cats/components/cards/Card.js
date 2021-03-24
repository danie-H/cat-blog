import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import StyleCard from './StyledCards'; 

const Card = (props) => {

    const {breed: {name : title, intelligence, energy_level, reference_image_id}} = props;
    const imageSrc = `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`
    return (
        <StyleCard>
            <div className="poster_path">
                    <img src={imageSrc} alt={title} />
            </div>
            <div className="dateAndTitle">
                <p className="title">{title}</p>
            </div>
            <div className="vote_average">
                <div className="intelligence">
                <span>Intelligence</span>
                <Progress 
                    percent={intelligence *20}
                    status="default"
                    theme={{
                        default: {
                            symbol: '',
                            color : ( intelligence < 3) ? 'red' : 'green'
                        }
                    }}
                />
                </div>
                <div className="energy">
                    <span>Energy </span>
                    <Progress 
                        percent={energy_level *20}
                        status="default"
                        theme={{
                            default: {
                                symbol: '',
                                color : ( energy_level < 3) ? 'red' : 'green'
                            }
                        }}
                    />
                </div>
            </div>
        </StyleCard>
    )
}

export default Card;