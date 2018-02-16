import React from 'react';
import Widget, { WidgetSubHeader } from 'uxi/Widget';
import ActionMenu from 'uxi/ActionMenu'
import Action from 'uxi/Action';
import {
  Keepintheloop,
  User,
} from 'uxi/Icons';

const ExampleSimple = () => (
  <div>
    <h3>Widget</h3>
    <div style={{marginBottom: '15px'}}>
      <Widget title="All Cars">
        Some Content
      </Widget>
    </div>
    <div style={{marginBottom: '15px'}}>
      <Widget isLoading title="All Cars with Loading">
        Some Content
      </Widget>
    </div>
    <div style={{marginBottom: '15px'}}>
      <Widget isLoadingMore title="All Cars with Loading More">
        Some Content
      </Widget>
    </div>
    <div style={{marginBottom: '15px'}}>
      <Widget title="All Cars with a simple Menu" menu={<a>View More</a>}>
        Some Content
      </Widget>
    </div>
    <div style={{marginBottom: '15px'}}>
      <Widget title="All Cars with a simple Menu" isLoadingMore menu={<a>View More</a>}>
        evevev
      </Widget>
    </div>
    <div style={{marginBottom: '15px'}}>
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
    </div>
    <div style={{marginBottom: '15px'}}>
      <Widget title="All Cars with a simple Menu" isLoadingMore menu={<a>View More</a>} emptyText="No cars defined" />
    </div>
    <div style={{marginBottom: '15px'}}>
      <Widget
        title="All Cars with a simple Sub Header"
        menu={
          <ActionMenu menuDescriptors={[
            {
              displayName: 'Keep in he loop',
              key: 'Keep in the loop',
              hasNew: true,
              icon: <Keepintheloop />,
              onClick: () => { alert('Keep in the loop'); },
              isPromoted: true,
            },
            {
              hasNew: true,
              displayName: 'Users',
              key: 'Users',
              icon: <User />,
              onClick: () => { alert('User '); },
            },
          ]}
          />
        }
        >
        <WidgetSubHeader title="Sub content" />
        <div>
          TETETTE
        </div>
        <WidgetSubHeader type="primary" title="Sub content" />
        <div>
          TETETTE
        </div>
      </Widget>
    </div>
  </div>
);

export default ExampleSimple;
