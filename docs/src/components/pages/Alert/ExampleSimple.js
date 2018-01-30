import React from 'react';
import Alert from '../../../../../src/Alert';
import { P } from '../../../../../src/Classic';

const ExampleSimple = () => (
  <div>
    <Alert type="danger" noIcon style={{ width: '150px' }}>
      This is an danger Alert without icon and close btn!
      It has a fixed width of 150px
      Daaaanger zone....
    </Alert>
    <br />
    <Alert type="danger" noIcon style={{ maxWidth: '150px' }}>
      This is an danger Alert without icon and close btn!
      It has a fixed width (max-width) of 150px
      Daaaanger zone....
    </Alert>
    <br />
    <Alert type="danger" noIcon style={{ maxWidth: '150px' }}>
      I'm an alert that has a link in its children <a href="#">link</a>
    </Alert>
    <br />
    <Alert type="danger" noIcon >
      This is an danger Alert without icon and close btn! Daaaanger zone....
    </Alert>
    <br />
    <Alert type="default">
      This is an default Alert with an icon!
    </Alert>
    <br />
    <Alert type="success">
      This is an success Alert with an icon!
    </Alert>
    <br />
    <Alert type="warning">
      This is an warn Alert with an icon!
    </Alert>
    <br />
    <Alert>
      This is an Alert with an icon and close btn!
    </Alert>
    <br />
    <Alert noIcon showClose>
      This is an Alert without icon but with a close btn!
    </Alert>
    <br />
    <Alert>
      This is an monstruous Alert with too much text!
      Sunt reprehenderit incididunt occaecat laborum elit consequat reprehenderit.
      Velit nulla fugiat adipisicing proident aliqua culpa ex fugiat.
      Ipsum tempor nostrud amet officia consequat consectetur do labore.
      Incididunt culpa est irure nisi commodo adipisicing.
      Quis culpa ullamco est occaecat deserunt culpa occaecat.
      Officia elit qui ullamco do ipsum mollit aliquip sit excepteur.
      Elit deserunt magna pariatur deserunt culpa duis minim ex ad proident amet voluptate.
    </Alert>
    <br />
    <Alert showClose>
      This is an monstruous Alert with too much text!
      Sunt reprehenderit incididunt occaecat laborum elit consequat reprehenderit.
      Velit nulla fugiat adipisicing proident aliqua culpa ex fugiat.
      Ipsum tempor nostrud amet officia consequat consectetur do labore.
      Incididunt culpa est irure nisi commodo adipisicing.
      Quis culpa ullamco est occaecat deserunt culpa occaecat.
      Officia elit qui ullamco do ipsum mollit aliquip sit excepteur.
      Elit deserunt magna pariatur deserunt culpa duis minim ex ad proident amet.
    </Alert>
    <br />
    <Alert isBanner>
      This is a banner Alert!
    </Alert>
    <br />
    <Alert type="danger" isBanner>
      This is a banner Alert with too much text!
      Sunt reprehenderit incididunt occaecat laborum elit consequat reprehenderit.
      Velit nulla fugiat adipisicing proident aliqua culpa ex fugiat.
      Ipsum tempor nostrud amet officia consequat consectetur do labore.
      Incididunt culpa est irure nisi commodo adipisicing.
      Quis culpa ullamco est occaecat deserunt culpa occaecat.
      Officia elit qui ullamco do ipsum mollit aliquip sit excepteur.
      Elit deserunt magna pariatur deserunt culpa duis minim ex ad proident amet.
    </Alert>
    <P>Alert without content has a min height of 50px :</P>
    <Alert type="danger"/>

    <Alert type="danger" iconSize={64} >
      I'm an alert with a big icon (custom sized)
    </Alert>
    <h2> Alert with exit handler </h2>
    <Alert type="danger" onClose={() => { window.alert('exited Alert'); }}>
      I'm an alert with a big icon (custom sized)
    </Alert>
  </div>
);

export default ExampleSimple;
