import React from 'react'
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Route} from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import amdocsico from '../../resources/amdocs.jpg'
export default () => <Route render={({ location, history }) => (
          <>
        <SideNav style={{ backgroundColor: '#2D2A45',height:'100vh',position:'fixed' }}
                  onSelect={(selected) => {
                      const to = '/' + selected;
                      history.push(to);
                  }}
              >
                  <SideNav.Toggle />
            <SideNav.Nav defaultSelected="Winterfell">
                  <img src={amdocsico} width='50px' height='50px' style={{position:'fixed',bottom:'0'}} alt='Amdocsicon'/>
                <NavItem eventKey="Winterfell">
                          <NavIcon>
                              <i className="fas fa-user-alt" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Winterfell
                        </NavText>
                      </NavItem>

                <NavItem eventKey="CasterlyRock">
                          <NavIcon>
                        <i className="fas fa-user-alt" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Casterly Rock
                        </NavText>
                      </NavItem>
                <NavItem eventKey="Highgarden">
                    <NavIcon>
                        <i className="fas fa-user-alt" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Highgarden
                        </NavText>
                </NavItem>
                <NavItem eventKey="Sunspear">
                    <NavIcon>
                        <i className="fas fa-user-alt" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                       Sunspear
                        </NavText>
                </NavItem>
                  </SideNav.Nav>
              </SideNav>


              {/* <Route exact path="/charts" render={props => <Chart />} />
              <Route exact path="/tables" render={props => <Tables />} /> */}

          </>
      )}
     />
  
