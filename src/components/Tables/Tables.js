import React from 'react'
import {Table,Container,Row} from 'react-bootstrap' 
import {connect} from 'react-redux'
import { setDefects, setCriticalCounter, setServeCounter} from '../../actions/actions'
import './style.css'

class Tables extends React.Component {


    componentDidMount(){
        const {setDefects,setCriticalCounter,setServeCounter} = this.props
        
        setInterval(async()=>{
            let criticalCounter = 0
            let serveCounter = 0
            const res = await fetch('http://localhost:3000/info')
            const data = await res.json()
            setDefects(data)
            this.props.defects.map(obj => obj.defects.forEach((defect, key) =>{
                if(defect.Severity === '1-Critical') 
                    criticalCounter++ 
                else 
                    serveCounter++
            }))
            setCriticalCounter(criticalCounter)
            setServeCounter(serveCounter)
        },1000)
       
    }

   

    render(){
        const {defects} = this.props
        return (
            <Container style={{ marginTop: '5%' }}>
                <h1>All Teams Defects Table</h1>
                    <Row>
                    
                    <Table striped bordered hover responsive >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Severity</th>
                                <th>Status</th>
                                <th>Summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {defects ? defects.map(obj => obj.defects.map((defect, key) =>{ 
                            return (<tr key={key} style={defect.Severity === '1-Critical' ? { backgroundColor: '#F8D7DA' } : null}>
                                <td>{defect.Application}</td>
                                <td style={defect.Severity === '1-Critical' ? { color: 'red' } : { color: 'black' }}>{defect.Severity}</td>
                                <td>{defect.Status}</td>
                                <td>{defect.Summary}</td>
                            </tr>)})): null}
                        </tbody>
                    </Table>
                   </Row>
               
                    
                          
                
                    
            </Container>
        )
    }
    
}


const mapStateToProps = state => ({defects:state.defectsReducer})

export default connect(mapStateToProps, { setDefects,setCriticalCounter,setServeCounter})(Tables)