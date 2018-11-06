import React from 'react';
import { DashboardWrapper, DashboardItem } from 'uxi/DashboardLayout';
import Widget, { WidgetSubHeader } from 'uxi/Widget';
import Action from 'uxi/Action';
import DataGrid from 'uxi/DataGrid';
import {
  Keepintheloop,
  User,
} from 'uxi/Icons';

const data = [
  { id: 1, make: "Toyota", model: "Celica", price: 35000 },
  { id: 2, make: "Ford", model: "Mondeo", price: 32000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
];

const DashboardLayoutPage = () => (
  <DashboardWrapper>
    <DashboardItem gridHeight={1} gridWidth={1}>
      <Widget>
        <Action menuDescriptor={
              {
                displayName: 'Keep in the loop',
                key: 'Keep in the loop',
                hasNew: true,
                icon: <Keepintheloop />,
                onClick: () => { alert('Keep in the loop'); },
                isPromoted: true,
              }
          } />
      </Widget>
    </DashboardItem>
    <DashboardItem gridHeight={1} gridWidth={1}>
    <Widget>
        <Action menuDescriptor={
              {
                displayName: 'Users',
                key: 'Keep in the loop',
                hasNew: true,
                icon: <User />,
                onClick: () => { alert('Keep in the loop'); },
                isPromoted: true,
              }
          } />
      </Widget>
    </DashboardItem>
    <DashboardItem gridHeight={2} gridWidth={6}>
      <Widget title="Latest Generated Report">
        <DataGrid data={data} />
      </Widget>
    </DashboardItem>
    <DashboardItem gridHeight={1} gridWidth={2}>
      <Widget title="Related Links">
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
          YO!<br/>
      </Widget>
    </DashboardItem>
   
    <DashboardItem size={2}>
      <div>
        Yo! 5
      </div>
    </DashboardItem>
    <DashboardItem>
      <div>
        Yo! 6
      </div>
    </DashboardItem>
    <DashboardItem>
      <div>
        Yo! 7
      </div>
    </DashboardItem>
  </DashboardWrapper>
);

export default DashboardLayoutPage;
