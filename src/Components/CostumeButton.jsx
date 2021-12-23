

export default function Card({ icon, meaning, callBack }) {

  return (
    <div className={`button ${meaning}`} onClick={callBack}>
      <i className={`fa ${icon}`} aria-hidden="true"></i>
    </div>
  )
}