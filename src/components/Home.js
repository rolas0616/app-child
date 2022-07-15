import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    import('Remote/Observable').then((module) => {
      const obs = module.default;
      obs.subscribe({
        next: (val) => setData(val)
      })
    })
  }, [])

  return (
    <div>
      <p>
        {data?.texto}
      </p>
    </div>
  );
};

export default Home
