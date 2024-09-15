import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

                                                                   // contained the headers so we can send them at once through the helper function(createRequest)
const cryptoApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

                                                                    // a helper function which we are using so we can have a url and header together for making the request in the cryptoapi function , the argument (url) we have here it is for the url of out api that we will provide while calling this function like this createRequest(`/coins?limit=${count}`)          /coins is a address and limit is a mathod to set the limit on the responses we will get from the api and this limit we will get from the argument we have set like this ///  query: (count) => createRequest(`/coins?limit=${count}`), ///  here the (count) is the argument to set the limit 
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({                                  //thats a slice for redux store or a whole function where we set up a diff diff logic and argument to get the dif diff data from the same api
  reducerPath: 'cryptoApi',                                             // thats a reducer path jo naam rakhna padta hai taki store ko ye naam prvide kr sakte access krne ke liye 
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),    // thats just a react redux method from this we can reuse this url accross all the endpoints (means koi or reuqest banayenge (eg- (`/coin/${coinId}`),\/\//\/\/,,('/exchanges'),/\//\\//\,,,`coin/${coinId}/history?timeperiod=${timeperiod}`,) to bhi yahi url use kr sakte in sab endpoint me ,(fetchbasequery) using this  api url from the .env file that we need and we get from the api providers(host key,api key,api url)  
  endpoints: (builder) => ({                                     // builder is a main thing here what it does is it provides me methods to define and manage API endpoints, handle data fetching and mutations, and automate state management  ((( basically builder api endpoint handle krta http methods handle krta builder.query means abhi ye Get reuqest de rha ))) or builder. query me query ka object banakar query me api address daal diya to builder.query ban gya (((fetching on this address))
    getCryptos: builder.query({                                   //and this buider.query is a way to define a Get method reuqest in redux used for fetching data from server and for other http methods like post,put,delete we use builder.mutation where in method we set the other http methods (put,post,delete)  ,,,builder.query krke query ke object banakr usme jo url hai matlb jaha se data fetch krna hai(address wo daal diya bus kaam khtm)
      query: (count) => createRequest(`/coins?limit=${count}`),  // here we used that helper function (ek  line me agr samaj na aye to saare comment utha kar word me line by line daal kr samj lena agr bhool jao logic to )
    }),

    getCryptoDetails: builder.query({                            //getCryptoDetails which we gonna export to use this reducer logic in our store for all the functionaing of this application basically we will fetch all the data from this keyword later on to showcasee..
      query: (coinId) => createRequest(`/coin/${coinId}`),      // we provided the coin id in the argument so we can have the particular(seperate currency) data about whoever we click on
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),    // we provided here coin id and timeperiod argument which wwe are fetching from the time array we made sending here as an argument to get data of paricular timeframe
    }),


    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;