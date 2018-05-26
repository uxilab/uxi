import React from 'react';
import Text, { Title } from 'uxi/Text';
import PrimaryColor from './PrimaryColor';
import AccentColor from './AccentColor';
import SemanticColor from './SemanticColor';
import NeutralColor from './NeutralColor';
import ChartColor from './ChartColor';
import {
  Spacer
} from 'uxi/Base';
import {
  H1,
  H2,
  H3,
  P
} from 'uxi/Classic';

const FontPage = () => (
  <div>
    <Spacer margin="stack-l">
      <H1>Colors</H1>
      <H2>Intro</H2>
      <P>
        Color plays a significant role in SAP Fiori. Color communicates importance and association, and provides direction to users.
      </P>
    </Spacer>
    <Spacer margin="stack-l">
      <H2>Color Balance</H2>
      <P>
        Color balance refers to the recommended mixture of neutral, colored and non-colored areas of any interface.
      </P>
      <P>
        Approaching the ideal color balance for each page creates a visual rhythm throughout the application. It also helps to draw the user’s attention to the most important information and functions. Furthermore, it promotes a distinct and consistent look and feel throughout all your application.
      </P>
    </Spacer>
    <Spacer margin="stack-l">
      <H3>Primary Colors</H3>
      <P>
        Our primary colors are usually used as background colors for the floor plan of your application. 
      </P>
      <PrimaryColor />
    </Spacer>
    <Spacer margin="stack-l">
      <H3>Accent Colors</H3>
      <P>
        Accent colors are used to bring rhythm throughout the application and to emphasize actions and information such as call-to-actions, progress bars, selection controls, special buttons, sliders, links…
      </P>
      <AccentColor />
    </Spacer>
    <Spacer margin="stack-l">
      <H3>Semantic Colors</H3>
      <P>
        Semantic colors are well-known colors by users to represent the type of messaging you want to send to your users.
      </P>
      <SemanticColor />
    </Spacer>
    <Spacer margin="stack-l">
      <H3>Neutral Colors</H3>
      <P>
        Neutral colors are used to group information and bring  visual segmentation to the floorplan.
      </P>
      <NeutralColor />
    </Spacer>
    <Spacer margin="stack-l">
      <H3>Chart Colors</H3>
      <P>
        Chart colors are used to bring a vibrant feeling to your visualizations.
      </P>
      <ChartColor />
    </Spacer>
  </div>
);

export default FontPage;
