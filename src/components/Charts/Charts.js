import React from 'react'
import {Container} from 'react-bootstrap'
import TChart from 'react-apexcharts'
import { connect } from 'react-redux'

class Chart extends React.Component{ 
  
    render() {
        
        let options= {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: ['2-Severe', '1-Critical']
            }
        }


        let series = [{
            name: 'defects',
            data: [this.props.serveCounter, this.props.criticalCounter]
        }]        
    
        return (
            <Container>
                <TChart options={options} series={series} type="bar" />
            </Container>
        )
    }

}
                
const mapStateToProps = state =>({criticalCounter: state.counters.criticalCounter, serveCounter: state.counters.serveCounter})

export default connect(mapStateToProps)(Chart);
