import React from 'react';
import Widget, { WidgetSubHeader } from 'uxi/Widget';

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
        Some Content
      </Widget>
    </div>
    <div style={{marginBottom: '15px'}}>
      <Widget title="All Cars with a simple Menu" isLoadingMore menu={<a>View More</a>} emptyText="No cars defined">
        Some Content
      </Widget>
    </div>
    <div style={{marginBottom: '15px'}}>
      <Widget title="All Cars with a simple Sub Header">
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