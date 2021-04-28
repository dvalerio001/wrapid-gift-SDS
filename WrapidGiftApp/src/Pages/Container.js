
import React from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';


const Container = ({ children, title = 'Gift Search' }) => (
  <div>

    <ReactiveBase
      enableAppbase
    //  url="YOUR_CLUSTER_URL" // Your cluster url for e.g. https://arc-cluster-appbase-tryout-k8dsnj.searchbase.io
      app="gift-finder" // Your index name for e.g movies-store-app
      credentials="ly4UvZLp6:5f75aa34-198a-430d-91a3-522608087a0a" // API credentials
      theme={{
        typography: {
          fontFamily: 'Lato',
        },
      }}
      appbaseConfig={{ recordAnalytics: true }}
    >
      {children}
    </ReactiveBase>
  </div>
);

export default Container;
