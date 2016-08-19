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
      <Card style={{height: '100%'}}>
        <CardHeader style={{height: '100%'}} title="Alessandro" />
      </Card>
    </div>
  );
}
