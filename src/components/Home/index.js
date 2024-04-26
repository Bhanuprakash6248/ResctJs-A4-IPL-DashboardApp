// Write your code here
import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplData: [], isLoading: true}

  componentDidMount() {
    this.getIplDetails()
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getIplDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const formatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImgUrl: each.team_image_url,
    }))
    this.setState({iplData: formatedData, isLoading: false})
  }

  renderTeamList = () => {
    const {iplData} = this.state
    return (
      <ul className="teamCard-unordered-list">
        {iplData.map(each => (
          <TeamCard key={each.id} iplDataDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-bg">
        <div className="home-con1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-img"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div className="home-con2">
          {isLoading ? this.renderLoader() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}
export default Home
