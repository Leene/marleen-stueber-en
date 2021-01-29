import React from 'react'
import styled from 'styled-components'
import Talar from '../img/icon_talar_white.png'
import { COLORS, VIEWPORT } from "../constants";


export default function Education() {
    return (
        <>
            <Section id="education">
                {' '}
                {/* Aus-/Fortbildungen */}
                <Img src={Talar} />
                <h3>Basic and Further Education</h3>
                <h4>Web Developer Bootcamp</h4>
                <LeftText>
                    <h6>January - March 2020</h6>
                    <ul>
                        <li>
                            3-month full-time traineeship at neuefische GmbH
                        </li>
                        <li>540 hours of theorethical knowledge transfer and coding practice</li>
                        <li>
                            Development of a own mobile app as capstone project
                        </li>
                    </ul>
                    <h5>Teached Contents </h5>
                </LeftText>
                
                <DIV>
                    <div>
                        <Tag>Functional programming</Tag>
                        <Tag>JavaScript ES2020</Tag>
                        <Tag>Git workflow</Tag>
                        <Tag>Shell</Tag>
                    </div>
                    <div>
                        <Tag>Bootstrap</Tag>
                        <Tag>HTML5</Tag>
                        <Tag>CSS3</Tag>
                        <Tag>Node.js</Tag>
                        <Tag>npm</Tag>
                        <Tag>React.js</Tag>
                        <Tag>JSX</Tag>
                        <Tag>Cypress</Tag>
                    </div>
                    <div>
                        <Tag>Storybook</Tag>
                        <Tag>TDD</Tag>
                        <Tag>Scrum</Tag>
                        <Tag>Kanban</Tag>
                        <Tag>Postman</Tag>
                    </div>
                </DIV>

                <MiddleDIV>
                    <div>
                        <Tag>Functional programming</Tag>
                        <Tag>JavaScript ES2020</Tag>
                        <Tag>Git workflow</Tag>
                    </div>
                    <div>
                        <Tag>Shell</Tag>
                        <Tag>Bootstrap</Tag>
                        <Tag>HTML5</Tag>
                        <Tag>CSS3</Tag>
                        <Tag>Node.js</Tag>
                        <Tag>npm</Tag>
                        <Tag>React.js</Tag>
                    </div>
                    <div>
                        <Tag>JSX</Tag>
                        <Tag>Cypress</Tag>
                        <Tag>Storybook</Tag>
                        <Tag>TDD</Tag>
                        <Tag>Scrum</Tag>
                        <Tag>Kanban</Tag>
                        <Tag>Postman</Tag>
                    </div>
                </MiddleDIV>
<HR/>
                <h4>Bachelor studies of Media Systems (HAW)</h4>
                <LeftText>
                    <h6>March 2012 - May 2020</h6>
                    <ul>
                        <li>
                            Comparable with media computer science
                        </li>
                        <li>
                            Knowledge i.a.: Java 8, MySQL, logic, relational databases, OOP,
                            maths for computer scientists, motion capture,
                            Assembler, Ruby, encryption algorithms
                        </li>
                        <li>05/2020 De-registration without a degree</li>
                    </ul>
                </LeftText>
                <HR/>

                <h4>Training as Media Designer for digital/print media</h4>
                <LeftText>
                
                <h6>October 2005 - October 2008</h6>
                <ul>
                    <li>
                        Knowledge in adobe graphic software,
                        design basics und typography
                    </li>
                    <li>10/2008 Certificate of Chamber of Industry and Commerce</li>
                </ul>
                </LeftText>

            </Section>
        </>
    )
}




const HR = styled.hr`

width:90vw;
border-bottom:1px;
margin-top: 40px;
color: rgba(${COLORS.lightText}, 0.2);



${VIEWPORT.small} {
}  

${VIEWPORT.medium} {
  
}

${VIEWPORT.large} {

    width:60vw;


}
`


const Section = styled.section`
margin-top: -50px;
`

const LeftText = styled.div`
    text-align: left;
    margin: 0 30vw;
    font-size: 1.2em;
    & li {
        padding: 10px 0;
        
    }

${VIEWPORT.small} {
    margin: 0 5vw;
}

${VIEWPORT.medium} {
    margin: 0 10vw;
}

${VIEWPORT.large} {


}



`

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;

    ${VIEWPORT.small} {
        
    }
    
    ${VIEWPORT.medium} {
        display:none;
    }
    
    ${VIEWPORT.large} {
       
    }


`



const MiddleDIV = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;

    ${VIEWPORT.small} {
                display:none;

    }
    
    ${VIEWPORT.medium} {
    }
    
    ${VIEWPORT.large} {
        display:none;

    }


`


const Tag = styled.button`
    margin: 5px;
    padding: 5px;
    border: none;
    box-shadow: 1px 1px 3px 2px rgba(${COLORS.primary}, 0.2);
    border-radius: 20px;
    background-color: rgb(${COLORS.lightText}, 0.4);
    font-weight: bold;
    letter-spacing: 1px;
    color: ${COLORS.background};
    padding: 10px;
    font-size: 1.2em;
    &:hover {
        background-color: rgba(${COLORS.lightText}, 0.6);
    }
`

const Img = styled.img`
    height: 150px;
    opacity: 0.2;
    margin-top:0px;


    ${VIEWPORT.small} {
    
    }
  
    ${VIEWPORT.medium} {
     
    }
  
    ${VIEWPORT.large} {
      margin-top: 0px;
    }
`
