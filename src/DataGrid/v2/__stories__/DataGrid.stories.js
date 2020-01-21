import React from 'react';
import {
  storyWithThemeProvider,
  WithState,
} from '../../../testUtils';

import DataGrid from '../DataGrid';
// import DataGridRAW from '!raw-loader!../DataGrid.js';
// import DataGridRAW from './DataGrid.js';
import Table from '../Table'
import Th from '../Th'
import Tr from '../Tr'
import Td from '../Td'

import ButtonMenu from '../../ButtonMenu';
import Panel from '../../Panel';
import PanelHeader from '../../Panel/PanelHeader';
import PanelFooter from '../../Panel/PanelFooter';
import PanelContent from '../../Panel/PanelContent';



export default {
  title: 'DataGrid',
  Component: DataGrid,
  subcomponents: { DataGrid, Table, Tr, Th, Td },
  decorators: [storyWithThemeProvider],
}

export const Simple = () => {

  const model = [
    {
      property: 'name',
      displayName: 'Name',
    }, {
      property: 'firstName',
      displayName: 'First Name',
    }, {
      property: 'headquarter',
      displayName: 'Headquarter',
    }, {
      property: 'transports',
      displayName: 'Transports',
      Component: ({ transports }) => (
        <div>
          {transports.map(t => t).join(', ')}
        </div>
      ),
      menu: (
        <ButtonMenu
          anchor="right"
          button={"☰"}
          menu={
            <div style={{ minHeight: '180px', height: '400px', maxHeight: '80vh' }}>
              <Panel>
                <PanelHeader>Filter column</PanelHeader>
                <PanelContent>
                  {
                    [...new Array(99)].map((_, i) => (
                      <li key={i}><input type="checkbox" /> <span>foobar</span></li>
                    ))
                  }
                </PanelContent>
                <PanelFooter>
                  <div>Select All</div>
                  <div style={{ marginLeft: 'auto' }}>Reset</div>
                </PanelFooter>
              </Panel>
            </div>
          }
        />

      )
    }, {
      property: 'scenarios',
      displayName: 'Scenarios',
      Component: ({ transports }) => (
        <div>
          <ButtonMenu
            inline
            button={'•••'}
            menu={
              <div>
                <div>foo</div>
                <div>bar</div>
              </div>
            }
          />
        </div>
      )
    }
  ]

  const data = [
    {
      name: 'Laverne',
      firstName: 'Jerde',
      headquarter: 'Headquarter',
      transports: ['bus', 'bike', 'car'],
      scenarios: [
        { a: "some more complexly nested data structure" }
      ]
    },
    {
      name: 'Rippin',
      firstName: 'Rhett',
      headquarter: 'Headquarter',
      transports: ['tram', 'bus', 'bike'],
      scenarios: [
        { a: "some more complexly nested data structure" }
      ]
    }
  ]

  return (
    <div style={{ height: '280px' }}>
      <p>
        <div>Takes a list of entities, a model, and renders a table.</div>
        <div>The model displays the raw value unles you pass it a `Component`</div>
        <div>The model support custom menu for table header (see transports)</div>
      </p>
      <DataGrid
        selectable
        model={model}
        data={data}
      />
    </div>
  )
}

export const Selectable = () => (
  <DataGrid
    selectable
    model={[
      { property: 'firstName', displayName: 'First name' },
      { property: 'name', displayName: 'Name' },
    ]}
    data={[
      { firstName: 'foo', name: 'bar', },
      { firstName: 'baz', name: 'foo', },
    ]}
  />
)

export const SelectableControlledSelection = () => (
  <WithState defaultState={[]}>
    {(state, setState) => (
      <DataGrid
        onChange={(selected) => {setState(selected)}}
        selected={[0, 1]}
        selectable
        model={[
          { property: 'firstName', displayName: 'First name' },
          { property: 'name', displayName: 'Name' },
        ]}
        data={[
          { firstName: 'foo', name: 'bar', },
          { firstName: 'baz', name: 'foo', },
        ]}
      />
    )}
  </WithState>
)

export const Resizable = () => (
  <DataGrid
    resizable
    model={[
      { property: 'firstName', displayName: 'First name' },
      { property: 'name', displayName: 'Name' },
      { property: 'name', displayName: 'Foo', Component: () => 'foobar' },
    ]}
    data={[
      { firstName: 'foo', name: 'bar', },
      { firstName: 'baz', name: 'foo', },
    ]}
  />
)

export const SmartOverflowX = () => (
  <div style={{ padding: '16px', maxWidth: '100vw', width: '100%' }}>
    <p>
      Resize the window and observe the table x axis. <br />
      As soon as the available space of the table on the x axis becomes too small, <br />
      the table gets a scroll bar on the x axis <br />
    </p>
    <DataGrid
      resizable
      useSmartOverflowX
      selectable
      model={[
        { property: 'firstName', displayName: 'First name' },
        { property: 'name', displayName: 'Name' },
        { property: 'name', displayName: 'Foo', Component: () => 'foobmdlkfbnmzlkgfn mksjngbmknszar' },
        { property: 'name', displayName: 'Bar', Component: () => 'basùdlkbf,mslkfg mlksnfbmkjnsdkbfnr' },
        { property: 'name', displayName: 'FooBar', Component: () => 'baamlekfbnmkazjnfbmkjnzmkbjgz' },
        { property: 'name', displayName: 'fubar', Component: () => 'fubaregefbzebazrbtzzrbtzrbtzrb' },
      ]}
      data={[
        { firstName: 'foo', name: 'bar', },
        { firstName: 'baz', name: 'foo', },
      ]}
    />
  </div>

)

/*
// =============================================================================
// Stories
// =============================================================================
const stories = storiesOf('DataGrid', module);
stories.addDecorator(withKnobs);
stories
  .add('Empty', () => <DataGrid />)
  .add('Uncontrolled (selectable)', () =>
    <div style={{ width: '100%', height: '100%' }}>

      <DataGrid
        selectable={boolean('selectable', true)}
        data={data}
        model={model}
      />
      <hr />
      <h3><pre>data</pre></h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <br />
      <h3><pre>model</pre></h3>
      <pre>{JSON.stringify(model.map(m => ({
        ...m,
        ...(m.menu ? { menu: '{ ...UserDefinedTableHeaderDropDownMenu }' } : {}),
        ...(m.Component ? {Component: '{ <ConsumerDefinedComponent /> }' } : {}),
      })
      ), null, 2)}</pre>
    </div>
  )
  .add('Uncontrolled (defaultSelected - all true)', () =>
    <div style={{ width: '100%', height: '100%' }}>
      <DataGrid
        selectable={boolean('selectable', true)}
        data={data}
        model={model}
        defaultSelected={[0, 1]}
      />
      <hr />
      <h3><pre>data</pre></h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <br />
      <h3><pre>model</pre></h3>
      <pre>{JSON.stringify(model.map(m => ({
        ...m,
        ...(m.menu ? { menu: '{ ...UserDefinedTableHeaderDropDownMenu }' } : {}),
        ...(m.Component ? {Component: '{ <ConsumerDefinedComponent /> }' } : {}),
      })
      ), null, 2)}</pre>
    </div>
  )
  .add('controlled selection (managed only from the outside)', () =>
    <div style={{ width: '100%', height: '100%' }}>
      <DataGrid
        selectable
        selected={[
          boolean('selected (controlled) item 1', true) ? 0 : null,
          boolean('selected (controlled) item 2', true) ? 1 : null,
        ].filter(x => x !== null)}
        data={data}
        model={model}
      />
      <hr />
      <h3><pre>data</pre></h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <br />
      <h3><pre>model</pre></h3>
      <pre>{JSON.stringify(model.map(m => ({
        ...m,
        ...(m.menu ? { menu: '{ ...UserDefinedTableHeaderDropDownMenu }' } : {}),
        ...(m.Component ? {Component: '{ <ConsumerDefinedComponent /> }' } : {}),
      })
      ), null, 2)}</pre>
    </div>
  )
  .add('controlled selection (managed)', () => {
    function WithState({ children, ...props }) {
      const [state, setState] = useState([0, 1]);
      return <div>{children(state, setState)}</div>;
    }

    return (
      <WithState>
        {(state, setState) => (

          <div style={{ width: '100%', height: '100%' }}>
            <DataGrid
              selectable
              selected={state}
              data={data}
              model={model}
              onChange={(nexSelected) => {
                console.log('nexSelected', nexSelected)
                setState(nexSelected)
              }}
            />
            <hr />
            <h3><pre>data</pre></h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <br />
            <h3><pre>model</pre></h3>
            <pre>{JSON.stringify(model.map(m => ({
              ...m,
              ...(m.menu ? { menu: '{ ...UserDefinedTableHeaderDropDownMenu }' } : {}),
              ...(m.Component ? {Component: '{ <ConsumerDefinedComponent /> }' } : {}),
            })
            ), null, 2)}</pre>
          </div>
        )}
      </WithState>
    );
  })
  .add('resizable column', () => {

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <DataGrid
          resizable={boolean('resizable',true)}
          selectable
          data={data}
          model={model}
          // onChange={(nexSelected) => {
          //   console.log('nexSelected', nexSelected)
          //   setState(nexSelected)
          // }}
        />
        <hr />
        <h3><pre>data</pre></h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <br />
        <h3><pre>model</pre></h3>
        <pre>{JSON.stringify(model.map(m => ({
          ...m,
          ...(m.menu ? { menu: '{ ...UserDefinedTableHeaderDropDownMenu }' } : {}),
          ...(m.Component ? {Component: '{ <ConsumerDefinedComponent /> }' } : {}),
        })
        ), null, 2)}</pre>
      </div>
    );
  })
  .add('smartOverflowX', () => {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <DataGrid
          selectable
          data={data}
          model={model}
          useSmartOverflowX={boolean('useSmartOverflowX', true)}
        />
      </div>
    );
  })

  */
