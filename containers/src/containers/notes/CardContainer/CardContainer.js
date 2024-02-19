import { useState } from "react"
import Card from "./Crad/card"

function CardContainer({cards=[], rateChangeHandler}){
  if(!cards || !cards.length) return null
  const card = cards.sort((a,b)=> a.interval - b.interval)[0]
  const {
   id, ques, createdAt, easinessFactor
  } = card
  return(
    <div className='m-8 '>

    <Card view='full' id={id} rateChangeHandler={rateChangeHandler} ques={ques} createdAt={createdAt} rate={easinessFactor}/>
    <div className='flex w-1/2  justify-around gap-8 mx-auto mt-6'>
      {
        new Array(5).fill(0).map((_, index) => {
          return (
            <div key ={index} className='border-2 py-2 px-2 rounded-lg' onClick={()=>rateChangeHandler(id, index)}>
              {index + 1}
            </div>
          )
        })
      }
      </div>

      <div className="flex gap-8 flex-wrap">
        {
          cards.map((card)=>{
            const {
              id, ques, createdAt, easinessFactor
             } = card
            return(
              <Card view="short" key={id} id={id} rateChangeHandler={rateChangeHandler} ques={ques} createdAt={createdAt} rate={easinessFactor}/>
            )
          })
        }
      </div>
    </div>
  )

}

export default CardContainer