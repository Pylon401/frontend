import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'

import joshPicture from './profile_images/josh_face.png'
import skylerPicture from './profile_images/skyler_face.png'
import tammyPicture from './profile_images/tammy_face.png'

import Profile from './Profile'

class AboutUs extends Component{
    render(){
        return(
            <>
            <Row style={{marginBottom:"40px"}}>
              <Profile 
                img={tammyPicture}
                name="Tammy Do"
                description="Loves Nancy Drew mysteries and My Favorite Murder podcast."
                github="https://github.com/tammytdo"
                linkedIn="https://www.linkedin.com/in/tammytdo/"
              />
              <Profile 
                img={skylerPicture}
                name="Skyler Burger"
                description="Loves food."
                github="https://github.com/SkylerBurger"
                linkedIn="https://www.linkedin.com/in/skylerburger/"
                />
            </Row>
            <Row>
              <Profile 
                img={joshPicture}
                name="Joshua Ho"
                description="He spends his time drinking hot water, sitting in traffic, and wearing slip on shoes."
                github="https://github.com/ricecreamdude"
                linkedIn="https://www.linkedin.com/in/joshua-ho-80b6a251/"
              />
            </Row>
            </>
        )
    }
}

export default AboutUs