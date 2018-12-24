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
  let componentInfo = {}
  try {
    componentInfo = parse(rawCode);
  } catch (err) {
    console.warn('Failed to parse or find a suitable component definition')
  }

  const propsInfo = componentInfo.props && `
| name  | default value | type | required | description |
| ----- | ------------- | ---- | -------- | ----------- |
${
  Object.keys(componentInfo.props).map(key => {
    const prop = componentInfo.props[key];
    return [
      `| \`${key}\` |`,
      `${prop.defaultValue.value || ''} |`,
      `${(prop.type && prop.type.name) || ' — '} |`,
      `${prop.required || ' — '} |`,
      `${(prop.description && prop.description.replace(/\n/g, ' ')) || ' — '}`,
      '\n'
    ].join('')
  }).join('')
}

`;


  const methodsData = (componentInfo.methods && componentInfo.methods.length > 0 && `
| name  | params | returns | modifiers | description |
| ----- | ------ | ------- | --------- | ----------- |
${
  componentInfo.methods.map(method => {
    return [
      `| \`${method.name || ''}\` |`,
      `${(method.params && method.params.map(p => p && (`\`${p.name}\` :${p.type}`)).join(', ')) || ' — '} |`,
      `${method.returns || ' — '} |`,
      `${method.modifiers || ' — '} |`,
      `${(method.docblock && method.docblock.replace(/\n/g, ' ')) || ' — '}`,
      '\n'
    ].join('')
  }).join('')
}`) || '';

const rawDetail = `


<div>
  <details>
    <summary><small>view raw</small></summary>
    <pre>
\`\`\`
${JSON.stringify(componentInfo, 2, 2)}
\`\`\`
    </pre>
  </details>
</div>



`;


  return (`
${propsInfo}
${methodsData}
${rawDetail}
${componentInfo.description}
  `);
}
