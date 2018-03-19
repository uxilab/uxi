import { TileList } from 'uxi/List';
import { TileDetail } from 'uxi/Tile';
import {
  Home,
} from 'uxi/Icons';

const TilePage = () => (
  <div>
  <div style={{padding:'60px'}}>
  <TileList>
      <TileDetail
        imageUrl="https://s3-eu-west-1.amazonaws.com/staticcluedin/closeio.png"
        title="Google Analytics"
        extra={
          <div>
            trustpilot.com<br/>
          Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 
          </div>
        }
      >
        Created a year ago<br/>
        Last changed 5 days ago<br/>
        Found 4 days ago<br/>
    </TileDetail>
    <TileDetail
        title="Test with Icons"
        icon={<Home />}
        extra={
          <div>
            trustpilot.com<br/>
          Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 
          </div>
        }
      >
        Created a year ago<br/>
        Last changed 5 days ago<br/>
        Found 4 days ago<br/>
    </TileDetail>
    <TileDetail
        title="Test with nothing, no imageUrl, no icon"
        extra={
          <div>
            trustpilot.com<br/>
          Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 Founded in 2007 by CEO, Peter Mühlmann, Trustpilot is a global, online review community helping consumers choose with confidence while enabling companies to grow their business. Currently boasting 14 
          </div>
        }
      >
        Created a year ago<br/>
        Last changed 5 days ago<br/>
        Found 4 days ago<br/>
    </TileDetail>
  </TileList>
  </div>
  <div style={{padding:'60px'}}>
  <TileList>
      <TileDetail
        imageUrl="https://s3-eu-west-1.amazonaws.com/staticcluedin/closeio.png"
        title="Google Analytics"
      >
        Created a year ago<br/>
        Last changed 5 days ago<br/>
        Found 4 days ago<br/>
    </TileDetail>
    <TileDetail
        title="Test with Icons"
        icon={<Home />}
      >
        Created a year ago<br/>
        Last changed 5 days ago<br/>
        Found 4 days ago<br/>
    </TileDetail>
    <TileDetail
        title="Test with nothing, no imageUrl, no icon"
      >
        Created a year ago<br/>
        Last changed 5 days ago<br/>
        Found 4 days ago<br/>
    </TileDetail>
  </TileList>
  </div>
  </div>
);

export default TilePage;
