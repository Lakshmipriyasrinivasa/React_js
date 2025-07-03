import { useParams } from "react-router-dom"

const useparams = () => {
    const {username}=useParams()
  return (
    <div>
      <h1>hi</h1>
      {username}
    </div>
  )
}

export default useparams
