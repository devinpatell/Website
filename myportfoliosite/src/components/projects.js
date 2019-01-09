import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
     return(
       <div className="projects-grid">
         {/* Project 1 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle className="project1" style={{ color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>
             This Website
           </CardTitle>
           <CardText>
              This website was made with React and React-MDL
           </CardText>
           <CardActions border>
             <a href="https://github.com/devinpatell/Website" rel="noopener noreferrer" target="_blank">
               <Button colored>Github</Button>
             </a>
           </CardActions>
         </Card>
         {/* Project 2 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>
             Kaiser Permanente Scheduling System
           </CardTitle>
           <CardText>
              Made at LA Hacks 2018, it is a React/Boostrap App that utilizes Google Firebase
           </CardText>
           <CardActions border>
             <a href="https://github.com/devinpatell/LaHacks2018" rel="noopener noreferrer" target="_blank">
               <Button colored>Github</Button>
             </a>
           </CardActions>
         </Card>
       </div>
     )
   } else if(this.state.activeTab === 1) {
     return (
       <div className="projects-grid">
         {/* Project 3 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{ color: '#000', height: '176px', background: 'url(http://www.othelloonline.org/uartwork/othello-ogimg.jpg) center / cover'}}>
             Othello
           </CardTitle>
           <CardText>
              Two player game of Othello with GUI and cutomizable game options
           </CardText>
           <CardActions border>
             <a href="https://github.com/devinpatell/Othello" rel="noopener noreferrer" target="_blank">
               <Button colored>Github</Button>
             </a>
           </CardActions>
         </Card>
         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://imgur.com/vAS3UBp.jpg) center / cover'}}>
             Gesture Controlled Drone
           </CardTitle>
           <CardText>
              Identify and track facial and pupil movements (using openCV python) to steer and maneuver a drone
           </CardText>
         </Card>
       </div>
     )
   } else if(this.state.activeTab === 2) {
     return (
       <div className="projects-grid">
         {/* Project 5 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle  style={{ color: '#000', height: '176px', background: 'url(https://i.imgur.com/goOGh6g.jpg) center / cover'}}>
             Date and Time Clock
           </CardTitle>
           <CardText>
              Embedded Software Project in C, code available upon request.
           </CardText>
         </Card>
         {/* Project 6 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle  style={{ color: '#000', height: '176px', background: 'url(https://i.imgur.com/goOGh6g.jpg) center / cover'}}>
             Music Note Player
           </CardTitle>
           <CardText>
              Embedded Software Project in C, code available upon request.
           </CardText>
         </Card>
       </div>
     )
   } else if(this.state.activeTab === 3) {
     return (
       <div className="projects-grid">
         {/* Project 7 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle  style={{ color: '#000', height: '176px', background: 'url(https://www.cise.ufl.edu/~mssz/CompOrg/Figure4.13-MIPSdatapath-Rlodbeq-sig.gif) center / cover'}}>
             Single Cycle RISC V Processor
           </CardTitle>
           <CardText>
              Follows Full RISC-V Instruction Set, code available upon request.
           </CardText>
         </Card>
       </div>
     )
   }
 }
 render() {
   return(
     <div className="projects-page">
       <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
         <Tab className="tab" style={{color: 'white', fontSize: '15px', 'font-weight': 'bold'}}>React</Tab>
         <Tab className="tab" style={{color: 'white', fontSize: '15px', 'font-weight': 'bold'}}>Python</Tab>
         <Tab className="tab" style={{color: 'white', fontSize: '15px', 'font-weight': 'bold'}}>C/C++</Tab>
         <Tab className="tab" style={{color: 'white', fontSize: '15px', 'font-weight': 'bold'}}>System Verilog</Tab>
       </Tabs>
         <Grid className="projects-outer-grid">
           <Cell col={12}>
             <div className="content">{this.toggleCategories()}</div>
           </Cell>
         </Grid>
     </div>
   )
 }
}
export default Projects;
