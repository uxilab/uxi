import React from 'react';

export const toHeaderDefinition = (data, properties) => {
  const headers = properties || Object.keys(data[0] || {}) || [];

  return headers.map((h) => {
    if (typeof h === 'object') {
      return h;
    }
    return {
      displayName: h,
    };
  });
};

const createPropertyViewModel = (entity, properties) => {
  const keys = properties || Object.keys(entity);
  // here we can play with the system to find the correct Component
  // we can play with the Type and many other things

  return keys.map(k => ({
    name: k.name,
    propertyName: k.property ? k.property : k,
    isComputed: k.isComputed,
    Component: k.Component ? k.Component : ({ value }) => (value || ''),
  }));
};

const createPropertiesWithValue = (
  propertiesDefinitions,
  entity,
  getTypeDefinition,
) => propertiesDefinitions.map((propertyDefinition) => {
  const name = propertyDefinition.propertyName;
  const entityValue = entity[name];
  const PropertyComponent = propertyDefinition.Component;
  const Converter = getTypeDefinition && getTypeDefinition(entityValue);

  if (propertyDefinition.isComputed) {
    return (
      <PropertyComponent entity={entity} />
    );
  }

  if (Converter) {
    return (
      <Converter value={entityValue} />
    );
  }

  return (
    <PropertyComponent value={entityValue} />
  );
});

const getEntityKey = (entity, propertyKey = '') => (
  entity[propertyKey] ||
  entity.key ||
  entity.id ||
  entity.Id
);

export const entityToViewModel = (
  entity,
  propertiesDefinitions,
  propertyKey,
  getTypeDefinition,
) => ({
  id: entity.id || entity.Id || null,
  key: getEntityKey(entity, propertyKey),
  original: entity,
  properties: createPropertiesWithValue(propertiesDefinitions, entity, getTypeDefinition),
  propertiesDefinitions,
});

/**
 * return an Array of PropertyViewModel
 * [
 *  {
 *    key: 'name',
 *    original : 'orignal value'
 *    properties: [
 *      <ReactNode/>,
 *      <ReactNode/>
 *    ]
 *  }
 * ]
 */
export const toViewModel = (data = [], properties, propertyKey, getTypeDefinition) => {
  const propertiesDefinitions = createPropertyViewModel(
    data[0],
    properties,
  ); // same entity

  return data.map(entity => entityToViewModel(
    entity,
    propertiesDefinitions,
    propertyKey,
    getTypeDefinition,
  ));
};

export default {
  toHeaderDefinition,
  toViewModel,
};
