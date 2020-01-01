import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuizComponent = ({headerText, course, icon, topic, dueto, buttonText}) =>{
    return (
        <div className='quiz'>
          <div className='quiz__header'>
           <FontAwesomeIcon icon={icon} className='quiz__icon' />
           <span className='quiz__header-text'>{headerText}</span>
          </div>
          <div className='quiz__detail'>
          <span className='quiz__detail-title'>course:</span> <span>{course}</span>
          </div>
          <div className='quiz__detail'>
          <span className='quiz__detail-title'>topic:</span> <span>{topic}</span>
          </div>
          <div className='quiz__detail'>
          <span className='quiz__detail-title'>dueto:</span> <span>{dueto}</span>
          </div>
          <button className='quiz__button'>{buttonText}</button>
        </div>
    )
}
export default QuizComponent;