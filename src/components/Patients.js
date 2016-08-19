/* eslint-disable */
// React
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import AutoComplete from 'material-ui/AutoComplete'
// HomePage component
export default function Patients() {
  return (
    <div style={{width: '100%'}}>
      <AutoComplete style={{width: '100%', textAlign: 'center'}} dataSource={['test']} />
      <div style={{textAlign: 'center', width: '50%', margin: 'auto'}} >
      <Card style={{height: '100%'}}>
        <CardHeader avatar="http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" title="Social Security Number:" subtitle="1928913" />
        <CardTitle title="John Harris" />
        <CardText>
          <strong>Age:</strong> 25 <br />
          <strong>Address:</strong> 22 Oxford Street <br />
          <strong>City:</strong> London <br />
          <strong>Phone:</strong> 77777777 <br />
          <strong>Gender:</strong> Male <br />
          <strong>Weight:</strong> 60 Kg <br />
          <strong>Height:</strong> 170 cm <br />
        </CardText>
      </Card>
      </div>
    </div>
  );
}
