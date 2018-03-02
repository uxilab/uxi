import React from 'react';
import { Carrousel } from 'uxi/Carrousel';
import { Card } from 'uxi/Box';

const caseStudies = [
  {
    img: 'https://www.cluedin.net/case-studies/1.png?v=1.0.4',
    description: 'How our solution replaces the need for daily meetings',
    link: 'https://docsend.com/view/57nz6gz',
  },
  {
    img: 'https://www.cluedin.net/case-studies/1.png?v=1.0.4',
    description: 'How Cluedin help deliver proactive customer support',
    link: 'https://docsend.com/view/zgwswfm',
  },
  {
    img: 'https://www.cluedin.net/case-studies/1.png?v=1.0.4',
    description: 'How Cluedin delivers a 360° view on your customer without a hassle',
    link: 'https://docsend.com/view/6z9jqmp',
  },
  {
    img: 'https://www.cluedin.net/case-studies/1.png?v=1.0.4',
    description: 'How Cluedin enable sales team to deliver more targeted and personnalized experience',
    link: 'https://docsend.com/view/qrbupzk',
  },
];

const ExampleCarrousel = () => (
  <div style={{ padding: '32px' }}>
    <Carrousel>
      <div>
        <img src="https://www.cluedin.net/case-studies/1.png?v=1.0.4" />
        <h3>Hellloooooo</h3>
        <p>
          that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
          In a comic, you know how you can tell who the arch-villain's going to be?
          He's the exact opposite of the hero.
        </p>
      </div>
      <div>
        <img src="https://www.cluedin.net/case-studies/1.png?v=1.0.4" />
        <h3>Hellloooooo</h3>
        <p>
          that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
          In a comic, you know how you can tell who the arch-villain's going to be?
          He's the exact opposite of the hero.
        </p>
      </div>
      <div>
        <img src="https://www.cluedin.net/case-studies/1.png?v=1.0.4" />
        <h3>Hellloooooo</h3>
        <p>
          that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
          In a comic, you know how you can tell who the arch-villain's going to be?
          He's the exact opposite of the hero.
        </p>
      </div>
      <div>
        <img src="https://www.cluedin.net/case-studies/1.png?v=1.0.4" />
        <h3>Hellloooooo</h3>
        <p>
          that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
          In a comic, you know how you can tell who the arch-villain's going to be?
          He's the exact opposite of the hero.
        </p>
      </div>
    </Carrousel>

    <br /> <br /> <br />
    <h2> Using Card component </h2>
    <Carrousel>
      <Card>
        <img src="https://www.cluedin.net/case-studies/1.png?v=1.0.4" />
        <h3>Hellloooooo</h3>
        <p>
          that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
          In a comic, you know how you can tell who the arch-villain's going to be?
          He's the exact opposite of the hero.
        </p>
      </Card>
      <Card>
        <img src="https://www.cluedin.net/case-studies/1.png?v=1.0.4" />
        <h3>Hellloooooo</h3>
        <p>
          that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
          In a comic, you know how you can tell who the arch-villain's going to be?
          He's the exact opposite of the hero.
        </p>
      </Card>
      <Card>
        <img src="https://www.cluedin.net/case-studies/1.png?v=1.0.4" />
        <h3>Hellloooooo</h3>
        <p>
          that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
          In a comic, you know how you can tell who the arch-villain's going to be?
          He's the exact opposite of the hero.
        </p>
      </Card>
      <Card>
        <img src="https://www.cluedin.net/case-studies/1.png?v=1.0.4" />
        <h3>Hellloooooo</h3>
        <p>
          that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
          In a comic, you know how you can tell who the arch-villain's going to be?
          He's the exact opposite of the hero.
        </p>
      </Card>
    </Carrousel>


  </div>
);

export default ExampleCarrousel;
