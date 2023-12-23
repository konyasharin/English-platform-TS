// Модуль содержит компонент Card

interface CardInterface{
  text: string
}

function Card({text}: CardInterface){
  return(
    <div className="card">
      {text}
    </div>
  )
}

export default Card