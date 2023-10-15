import React from 'react'
import WorkTile from './WorkTile'
import "./work-card.css"
import { RivanInfo, TeslaInfo, UBCInfo } from '../utils/WorkInfo'


function WorkCard() {
  return (
    <div className='work-container'>
         <a
    id="work-experience"
    style={{ textDecoration: "none" }}
  >
        <h2 className='work-title'>
            Work Experience
        </h2>
        </a>
        <div className='work-content-container'>
        <WorkTile tools={TeslaInfo.tools} logo={TeslaInfo.logo} location={TeslaInfo.location} dates={TeslaInfo.dates} company={TeslaInfo.company} title={TeslaInfo.title} accomplishments={TeslaInfo.accomplishments} />
      <WorkTile tools={RivanInfo.tools} logo={RivanInfo.logo} location={RivanInfo.location} dates={RivanInfo.dates} company={RivanInfo.company} title={RivanInfo.title} accomplishments={RivanInfo.accomplishments} />
      <WorkTile tools={UBCInfo.tools} logo={UBCInfo.logo} location={UBCInfo.location} dates={UBCInfo.dates} company={UBCInfo.company} title={UBCInfo.title} accomplishments={UBCInfo.accomplishments} />
      </div>
    </div>
  )
}

export default WorkCard