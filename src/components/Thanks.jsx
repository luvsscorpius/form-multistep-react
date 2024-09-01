import React from 'react'
import "./Thanks.css"
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'
import "./ReviewForm.css"

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  verySatisfied: <BsFillEmojiHeartEyesFill/>
}

export const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você recebera um cupom de 10% de desconto para a proxima compra.</p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação</h3>

      <p className="review-data">
        <span>Satisfação do produto:</span>
        {emojiData[data.review]}
      </p>

      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
    </div>
  )
}
