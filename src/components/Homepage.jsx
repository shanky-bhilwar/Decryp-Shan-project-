// code after the 2nd changes with new home page

import React from 'react';
import millify from 'millify';
import { Typography, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };

  const statsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
  };

  const statStyle = {
    flex: '1 1 200px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #dcdcdc',
    transition: 'transform 0.3s',
  };

  const statHoverStyle = {
    transform: 'scale(1.05)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#0071bd',
    marginBottom: '40px',
    fontWeight: '700',
    textDecoration: 'underline #0071bd',
    fontFamily: 'Georgia, serif',
    // 
  };

  const valueStyle = {
    color: '#0071bd',  
  };

  const subTitleStyle = {
    color: '#555',
    marginBottom: '10px',
    fontWeight: '500',
  };

  return (
    <>
      <div style={containerStyle}>
        <Title level={2} style={headingStyle}>
          Global Crypto Stats
        </Title>
        <div style={statsContainerStyle}>
          <div style={statStyle} className="stat-card">
            <div style={subTitleStyle}>Total Cryptocurrencies</div>
            <Statistic value={globalStats.total} valueStyle={valueStyle} />
          </div>
          <div style={statStyle} className="stat-card">
            <div style={subTitleStyle}>Total Exchanges</div>
            <Statistic value={millify(globalStats.totalExchanges)} valueStyle={valueStyle} />
          </div>
          <div style={statStyle} className="stat-card">
            <div style={subTitleStyle}>Total Market Cap</div>
            <Statistic value={`$${millify(globalStats.totalMarketCap)}`} valueStyle={valueStyle} />
          </div>
          <div style={statStyle} className="stat-card">
            <div style={subTitleStyle}>Total 24h Volume</div>
            <Statistic value={`$${millify(globalStats.total24hVolume)}`} valueStyle={valueStyle} />
          </div>
          <div style={statStyle} className="stat-card">
            <div style={subTitleStyle}>Total Markets</div>
            <Statistic value={millify(globalStats.totalMarkets)} valueStyle={valueStyle} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .stat-card:hover {
          ${Object.entries(statHoverStyle).map(([prop, value]) => `${prop}: ${value};`).join(' ')}
        }
      `}</style>
    </>
  );
};

export default Homepage;

// code without any changes (first one)

// import React from 'react';
// import millify from 'millify';
// import { Typography, Row, Col, Statistic } from 'antd';
// import { Link } from 'react-router-dom';

// import { useGetCryptosQuery } from '../services/cryptoApi';
// import Cryptocurrencies from './Cryptocurrencies';
// import News from './News';
// import Loader from './Loader';

// const { Title } = Typography;

// const Homepage = () => {
//   const { data, isFetching } = useGetCryptosQuery(10);
//   const globalStats = data?.data?.stats;

//   console.log(globalStats);

//   if (isFetching) return <Loader />;

//   return (
//     <>
//       <Title level={2} className="heading">Global Crypto Stats</Title>
//       <Row gutter={[32, 32]}>
//         <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
//         <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
//         <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
//         <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
//         <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
//         <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
//       </Row>
//       <div className="home-heading-container">
//         <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
//         <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
//       </div>
//       <Cryptocurrencies simplified />
//       <div className="home-heading-container">
//         <Title level={2} className="home-title">Latest Crypto News</Title>
//         <Title level={3}><Link to="/news">Show more</Link></Title>
//       </div>
//       <News simplified />
//     </>
//   );
// };

// export default Homepage;



// code after the new home page with 1 st changes 

// import React from 'react';
// import millify from 'millify';
// import { Typography, Row, Col, Statistic } from 'antd';
// import { useGetCryptosQuery } from '../services/cryptoApi';
// import Loader from './Loader';

// const { Title } = Typography;

// const Homepage = () => {
//   const { data, isFetching } = useGetCryptosQuery(10);
//   const globalStats = data?.data?.stats;

//   if (isFetching) return <Loader />;

//   const containerStyle = {
//     padding: '20px',
//     backgroundColor: '#f0f2f5',
//   };

//   const statsContainerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   };

//   const statStyle = {
//     flex: '1 1 calc(33.333% - 20px)',
//     margin: '10px',
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     padding: '20px',
//     textAlign: 'center',
//     border: '1px solid #e0e0e0',
//   };

//   const titleStyle = {
//     color: '#000',
//     marginBottom: '20px',
//     fontWeight: '600',
//   };

//   const headingStyle = {
//     textAlign: 'center',
//     color: '#000',
//     marginBottom: '20px',
//     fontWeight: '700',
//   };

//   const valueStyle = {
//     fontSize: '24px',
//     fontWeight: '500',
//     color: '#333',
//   };

//   const subTitleStyle = {
//     fontSize: '16px',
//     color: '#555',
//     marginBottom: '10px',
//   };

//   return (
//     <>
//       <div style={containerStyle}>
//         <Title level={2} style={headingStyle}>
//           Global Crypto Stats
//         </Title>
//         <div style={statsContainerStyle}>
//           <div style={statStyle}>
//             <div style={subTitleStyle}>Total Cryptocurrencies</div>
//             <Statistic
//               value={globalStats.total}
//               valueStyle={valueStyle}
//             />
//           </div>
//           <div style={statStyle}>
//             <div style={subTitleStyle}>Total Exchanges</div>
//             <Statistic
//               value={millify(globalStats.totalExchanges)}
//               valueStyle={valueStyle}
//             />
//           </div>
//           <div style={statStyle}>
//             <div style={subTitleStyle}>Total Market Cap</div>
//             <Statistic
//               value={`$${millify(globalStats.totalMarketCap)}`}
//               valueStyle={valueStyle}
//             />
//           </div>
//           <div style={statStyle}>
//             <div style={subTitleStyle}>Total 24h Volume</div>
//             <Statistic
//               value={`$${millify(globalStats.total24hVolume)}`}
//               valueStyle={valueStyle}
//             />
//           </div>
//           <div style={statStyle}>
//             <div style={subTitleStyle}>Total Markets</div>
//             <Statistic
//               value={millify(globalStats.totalMarkets)}
//               valueStyle={valueStyle}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;


