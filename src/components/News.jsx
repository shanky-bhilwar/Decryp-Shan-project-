//default one without changes

import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;

//-------------------------------------------------------------------------
// chat gpt code worked for news response but disorganised 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Col, Row, Typography, Avatar } from 'antd';

// const { Title, Text } = Typography;

// const News = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://news-api14.p.rapidapi.com/v2/search/publishers',
//         params: { query: 'crypto news' },
//         headers: {
//           'x-rapidapi-key': 'ff7daf68b1msh16a9fb3ee0c8371p1521f3jsnda2422d3a6fd',
//           'x-rapidapi-host': 'news-api14.p.rapidapi.com',
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         console.log('Full API Response:', response); // Log the full response
//         console.log('Response Data:', response.data); // Log the data

//         // Access data from the response
//         const { data } = response.data;

//         // Set the data to state
//         if (Array.isArray(data)) {
//           setNewsData(data);
//         } else {
//           console.warn('Unexpected data structure:', response.data);
//           setNewsData([]);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error('API Request Error:', err); // Log any request errors
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching data: {error.message}</p>;
//   if (!newsData.length) return <p>No news available</p>;

//   return (
//     <Row gutter={[24, 24]}>
//       {newsData.map((news, index) => (
//         <Col xs={24} sm={12} lg={8} key={index}>
//           <Card hoverable>
//             <a href={news.url} target="_blank" rel="noopener noreferrer">
//               <div className="news-image-container">
//                 <Title level={4}>{news.title || 'No Title'}</Title>
//                 <img src={news.logo} alt="news" style={{ width: '100%', height: 'auto' }} />
//               </div>
//               <Text>{news.description || 'No Description'}</Text>
//               <div className="provider-container">
//                 <div>
//                   <Avatar src={news.favicon} alt="provider" />
//                   <Text className="provider-name">{news.name || 'Unknown Provider'}</Text>
//                 </div>
//               </div>
//             </a>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default News;


//chat gpt code to trying to run this ...

// import React, { useState } from 'react';
// import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
// import moment from 'moment';

// import { useGetCryptosQuery } from '../services/cryptoApi';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
// import Loader from './Loader';

// const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

// const { Text, Title } = Typography;
// const { Option } = Select;

// const News = ({ simplified }) => {
//   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
//   const { data: cryptosData } = useGetCryptosQuery(100);
//   const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

//   // Debugging: Check fetched data
//   console.log('Fetched Crypto News Data:', cryptoNews);
//   console.log('Is Fetching:', isFetching);
//   console.log('Error:', error);

//   if (isFetching) return <Loader />;
//   if (error) return <div>Error fetching news</div>;
//   if (!cryptoNews || !cryptoNews.articles) return <div>No news available</div>;

//   return (
//     <Row gutter={[24, 24]}>
//       {!simplified && (
//         <Col span={24}>
//           <Select
//             showSearch
//             className="select-news"
//             placeholder="Select a Crypto"
//             optionFilterProp="children"
//             onChange={(value) => setNewsCategory(value)}
//             filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
//           >
//             <Option value="Cryptocurrency">Cryptocurrency</Option>
//             {cryptosData?.data?.coins?.map((currency) => (
//               <Option key={currency.name} value={currency.name}>{currency.name}</Option>
//             ))}
//           </Select>
//         </Col>
//       )}
//       {cryptoNews.articles.map((news, i) => (
//         <Col xs={24} sm={12} lg={8} key={i}>
//           <Card hoverable className="news-card">
//             <a href={news.url} target="_blank" rel="noreferrer">
//               <div className="news-image-container">
//                 <Title className="news-title" level={4}>{news.title || 'No Title'}</Title>
//                 <img src={news.logo || demoImage} alt="news" style={{ width: '100%', height: 'auto' }} />
//               </div>
//               <p>{news.description || 'No Description'}</p>
//               <div className="provider-container">
//                 <div>
//                   <Avatar src={news.favicon || demoImage} alt="provider" />
//                   <Text className="provider-name">{news.name || 'Unknown Provider'}</Text>
//                 </div>
//                 <Text>{moment(news.publishedAt).fromNow()}</Text>
//               </div>
//             </a>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default News;




