//@ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';


import { Wrapper, QuesContainer } from './index.style'
import Input from '@/components/Input';

interface CardProps {
  id: string;
  view: 'full';
  ques: string;
  createdAt: Date;
  rate: number;
  deleteCardHandler: ()=>{};
  editClickHandler: (id: any, editQuesText: any)=>{};
}

const Card: React.FC<CardProps> = ({
  id,
  view,
  ques,
  createdAt,
  rate,
  deleteCardHandler,
  editClickHandler
}) => {
  const [editMode, setEditMode] = useState(false)
  const [editQuesText, setEditQuesText] = useState(ques)

  const onQuesTextHandler = (e: any) => {
    const { value } = e.target
    setEditQuesText(value)
  }

  const checkIconHandler = () =>{
    editClickHandler(id, editQuesText)
    setEditMode(false)
  }
  return (
    <Wrapper view={view} className='flex gap-4 border-2 px-8 py-8 text-center'>
      <QuesContainer className={`${view === 'full' ? 'w-7/12 border-r-4 border-black' : 'w-80'}`}>
        {editMode
          ?
          <div className='flex'>
            <Input value={editQuesText} onChangeHandler={onQuesTextHandler} />
            <div>
            <CheckIcon onClick={checkIconHandler} />
            </div>
          </div>
          :
            ques
        }
      </QuesContainer>
      {view === 'full'
        ? (
          <>
            <div className='text-xs col'>
              <div>added on:</div>
              {moment(createdAt).format('DD-MM-YYYY')}
            </div>
            <div>{rate}</div>
          </>
        )
        : null
      }
      <DeleteIcon onClick={() => deleteCardHandler(id)} />
      <EditIcon onClick={() => setEditMode(true)} />
    </Wrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  view: PropTypes.oneOf(['full', 'short']).isRequired,
  ques: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  rate: PropTypes.number.isRequired,
};

export default Card;
