import React from 'react';

const HeaderApp1 = React.lazy(() => import('app1/Header'));

export default () => (
  <div style={{ margin: '20px' }}>
    <React.Suspense fallback="Loading header...">
      <HeaderApp1 title="Title App 222" color="#bf4122" />
    </React.Suspense>
  </div>
);
