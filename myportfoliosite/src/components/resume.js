import React, {Component} from 'react';
import { Document, Page } from 'react-pdf'

class Resume extends Component {
  render(){
    return(
      <div className="resume-page">
        <Document className="resume" file="assets/websiteresume.pdf">
          <Page pageNumber={1}/>
        </Document>
      </div>
    )
  }
}

export default Resume;
