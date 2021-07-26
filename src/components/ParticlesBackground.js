import React from 'react'
import Particles from "react-particles-js"
import ParticlesConfig from '../config/Particles-Config'

const ParticlesBackground = () => {
    return (
        <div>
            <Particles className="particles" params={ParticlesConfig} />
        </div>
    )
}

export default ParticlesBackground
