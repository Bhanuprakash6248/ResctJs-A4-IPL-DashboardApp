// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplDataDetails} = props

  const {id, name, teamImgUrl} = iplDataDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="teamCard-con">
        <img src={teamImgUrl} alt={`${name}`} className="teamCard-logo" />
        <h1 className="teamCard-head">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
