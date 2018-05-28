import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
             Devin-Patel.com (This Website)
           </CardTitle>
           <CardText>
              This website was made with React and React-MDL
           </CardText>
           <CardActions border>
             <a href="https://github.com/devinpatell/Website" rel="noopener noreferrer" target="_blank">
               <Button colored>Github</Button>
             </a>
           </CardActions>
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share" />
           </CardMenu>
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
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share" />
           </CardMenu>
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
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
       </div>
     )
   } else if(this.state.activeTab === 2) {
     return (
       <div className="projects-grid">
         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle  style={{ color: '#000', height: '176px', background: 'url(https://i.imgur.com/goOGh6g.jpg) center / cover'}}>
             Date and Time Clock
           </CardTitle>
           <CardText>
              Embedded Software Project in C
           </CardText>
           <CardActions border>
             <a href="https://github.com/devinpatell/CS-145/tree/master/project2" rel="noopener noreferrer" target="_blank">
               <Button colored>Github</Button>
             </a>
           </CardActions>
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle  style={{ color: '#000', height: '176px', background: 'url(https://i.imgur.com/goOGh6g.jpg) center / cover'}}>
             Music Note Player
           </CardTitle>
           <CardText>
              Embedded Software Project in C
           </CardText>
           <CardActions border>
             <a href="https://github.com/devinpatell/CS-145/tree/master/project2" rel="noopener noreferrer" target="_blank">
               <Button colored>Github</Button>
             </a>
           </CardActions>
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
       </div>
     )
   } else if(this.state.activeTab === 3) {
     return (
       <div className="projects-grid">
         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle  style={{ color: '#000', height: '176px', background: 'url(https://www.cise.ufl.edu/~mssz/CompOrg/Figure4.13-MIPSdatapath-Rlodbeq-sig.gif) center / cover'}}>
             Single Cycle RISC V Processor
           </CardTitle>
           <CardText>
              Follows Full RISC-V Instruction Set
           </CardText>
           <CardActions border>
             <a href="https://github.com/devinpatell/Single-Cycle-RISC-V-Processor" rel="noopener noreferrer" target="_blank">
               <Button colored>Github</Button>
             </a>
           </CardActions>
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
       </div>
     )
   }
 }
 render() {
   return(
     <div>
       <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
         <Tab>React</Tab>
         <Tab>Python</Tab>
         <Tab>C/C++</Tab>
         <Tab>SystemVerilog</Tab>
       </Tabs>
         <Grid>
           <Cell col={12}>
             <div className="content">{this.toggleCategories()}</div>
           </Cell>
         </Grid>
     </div>
   )
 }
}
export default Projects;
