import React from 'react';
import { ResponsiveGallery } from 'uxi/Img';

const galleryDescriptor = [
  { url: 'https://cdni.rt.com/files/2017.12/article/5a436801fc7e9345418b456c.jpg' },
  { url: 'https://media.npr.org/assets/img/2010/12/08/spacex2_wide-05e503f2828703a048cf2ec94fd5172a4d8d2cc2-s900-c85.jpg' },
  { url: 'https://www.gannett-cdn.com/-mm-/1725f16c88f5639880dcc2d9864c718948dea779/c=18-0-577-745&r=537&c=0-0-534-712/local/-/media/2017/02/10/Brevard/Brevard/636223391316143879-crs10-musk-f9-vertical-for-static-fire.jpg' },
  { url: 'https://www.universetoday.com/wp-content/uploads/2009/01/falcon9_vertical002.jpg' },
  { url: 'https://cbsnews1.cbsistatic.com/hub/i/r/2017/12/23/0c920c6f-db2c-45a8-8571-388dc512538f/resize/620x/5f4c61e7aac75b808312e296d4f4a841/2017-12-23t041209z-1099632417-rc17729543e0-rtrmadp-3-space-spacex.jpg' },
  { url: 'https://cdni.rt.com/files/2017.12/article/5a436801fc7e9345418b456c.jpg' },
  { url: 'https://www.universetoday.com/wp-content/uploads/2009/01/falcon9_vertical002.jpg' },
  { url: 'http://www.slate.com/content/dam/slate/blogs/bad_astronomy/2015/12/21/spacex_falcon9booster_landed.jpg.CROP.' },
  { url: 'https://cdni.rt.com/files/2017.12/article/5a436801fc7e9345418b456c.jpg' },
  { url: 'https://media.npr.org/assets/img/2010/12/08/spacex2_wide-05e503f2828703a048cf2ec94fd5172a4d8d2cc2-s900-c85.jpg' },
  { url: 'https://cbsnews1.cbsistatic.com/hub/i/r/2017/12/23/0c920c6f-db2c-45a8-8571-388dc512538f/resize/620x/5f4c61e7aac75b808312e296d4f4a841/2017-12-23t041209z-1099632417-rc17729543e0-rtrmadp-3-space-spacex.jpg' },
  { url: 'http://www.slate.com/content/dam/slate/blogs/bad_astronomy/2015/12/21/spacex_falcon9booster_landed.jpg.CROP.' },
  { url: 'https://media.npr.org/assets/img/2010/12/08/spacex2_wide-05e503f2828703a048cf2ec94fd5172a4d8d2cc2-s900-c85.jpg' },
  { url: 'https://media.npr.org/assets/img/2010/12/08/spacex2_wide-05e503f2828703a048cf2ec94fd5172a4d8d2cc2-s900-c85.jpg' },
];

const ResponsiveGalleryExample = () => (
  <ResponsiveGallery
    galleryDescriptor={galleryDescriptor}
    style={{ background: '#cecece' }}
  />
);

export default ResponsiveGalleryExample;
