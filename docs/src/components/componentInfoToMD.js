// takes in a basic react-docgen result

import React from 'react';
import { parse } from 'react-docgen';
import { H1, H3, P } from 'uxi/Classic';
import { 
  TableSimple as Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'uxi/Table';


export const componentInfoToMD = (rawCode) => {
  const componentInfo = parse(rawCode);
  return `
| name  | default value | required  |
| ----- | ------------- | --------- |
${
  Object.keys(componentInfo.props).map(key => {
    const prop = componentInfo.props[key];
    return `| \`${key}\` | ${prop.defaultValue.value || 'none'} | ${prop.required}\n`
  }).join('')
}

  ${componentInfo.description}

  \`\`\`js
  ${JSON.stringify(componentInfo, 2, 2)}
  \`\`\`

  `

  return (
    <div style={{ border: '1px solid #cacaca' }}>
      <H1> { componentInfo.displayName } </H1>
      <P>
        {componentInfo.description}
      </P>

      <H3>Props</H3>
       <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn width="70%" >name</TableHeaderColumn>
            <TableHeaderColumn width="15%" >defaultValue</TableHeaderColumn>
            <TableHeaderColumn width="15%" >required</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
           {
            Object.keys(componentInfo.props).map(key => {
              const prop = componentInfo.props[key];
              console.log('key', key)
              console.log('componentInfo', componentInfo)
              console.log('prop', prop)
              const name = key

              return (
                <TableRow>
                  <TableRowColumn>{key}</TableRowColumn>
                  <TableRowColumn>{prop.defaultValue.value}</TableRowColumn>
                  <TableRowColumn>{prop.required}</TableRowColumn>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>

      <pre>
        {JSON.stringify(componentInfo, 2, 2)}
      </pre>
    </div>
  )
}

// export default ComponentInfo
