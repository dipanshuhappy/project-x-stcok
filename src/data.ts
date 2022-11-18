export const stocks = [
  {
    name: "AxisBank",
    score: 9,
    graph:
      "https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=32A5B4FE2452496AA07DBDEBC5066B0A&stockExchange=NSE&symbol=AXISBANK&dividends=true&splits=true&palette=Financial-Light&showLogo=Title",
    financials: `ANNUAL,FY 2022,FY 2021,FY 2020,FY 2019,FY 2018
    Total Income,86114.19,80847.94,80057.67,70232.41,58476.67
    Total Income Growth (%),6.51,0.99,13.99,20.10,1.53
    Provisions & Contingencies,12202.95,19494.23,22117.22,14581.65,15620.59
    Provisions & Contingencies Growth (%),-37.40,-11.86,51.68,-6.65,10.67
    Profit after Tax (PAT),14119.29,7195.50,1853.11,5038.59,455.82
    PAT Growth (%),95.31,286.02,-62.78,987.68,-88.30
    Net Interest Margin (%),2.83,2.94,2.77,2.72,2.70
    Net Profit Margin (%),20.50,11.12,2.90,8.99,0.97
    Basic EPS (₹),46.04,24.19,6.83,19.61,1.86`,
    shareHolding: `CATEGORY,NO. OF SHARES,PERCENTAGE,% CHANGE QOQ
    Promoters,291405548.00,0.10,0.00
    Pledge,0.00,0.00,0.00
    FII,1542405437.00,0.51,0.34
    DII,801831037.00,0.27,0.28
    MF,697463509.00,0.23,0.51
    Others,435790126.00,0.12,-0.62`,
  },
  {
    name: "HDFC Bank",
    score: 9,
    financials: `ANNUAL,FY 2022,FY 2021,FY 2020,FY 2019,FY 2018
    Total Income,167695.40,155885.27,147068.27,124107.79,101344.45
    Total Income Growth (%),7.58,6.00,18.50,22.46,17.64
    Provisions & Contingencies,30647.74,29779.67,24598.52,20254.73,16474.90
    Provisions & Contingencies Growth (%),2.91,21.06,21.45,22.94,36.51
    Profit after Tax (PAT),38052.75,31833.21,27253.95,22332.43,18510.02
    PAT Growth (%),19.76,16.71,21.61,20.93,21.41
    Net Interest Margin (%),3.64,3.85,3.79,3.97,3.88
    Net Profit Margin (%),27.99,24.76,22.30,21.23,21.70
    Basic EPS (₹),68.77,57.88,49.84,83.33,71.73`,
    graph:
      "https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=32A5B4FE2452496AA07DBDEBC5066B0A&stockExchange=NSE&symbol=HDFCBANK&dividends=true&splits=true&palette=Financial-Light&showLogo=Title",
    shareHolding: `CATEGORY,NO. OF SHARES,PERCENTAGE,% CHANGE QOQ
    Promoters,1164625834.00,0.26,-0.05
    Pledge,0.00,0.00,0.00
    FII,1822335112.00,0.40,-2.74
    DII,867275241.00,0.19,1.97
    MF,816113947.00,0.18,1.75
    Others,1700316559.00,0.15,0.82`,
  },
  {
    name: "ICICI Bank",
    score: 9,
    financials: `ANNUAL,FY 2022,FY 2021,FY 2020,FY 2019,FY 2018
    Total Income,157536.32,161192.19,149786.10,131306.50,118969.10
    Total Income Growth (%),-2.27,7.61,14.07,10.37,4.91
    Provisions & Contingencies,17434.09,22041.76,22377.21,22180.92,19851.88
    Provisions & Contingencies Growth (%),-20.90,-1.50,0.88,11.73,4.20
    Profit after Tax (PAT),25110.10,18384.32,9566.31,4254.24,7712.19
    PAT Growth (%),27.52,80.12,97.31,-37.48,-19.76
    Net Interest Margin (%),3.09,2.95,2.91,2.64,2.48
    Net Profit Margin (%),26.31,20.61,11.27,5.91,12.40
    Basic EPS (₹),36.21,27.26,14.81,6.61,12.02`,
    shareHolding: `CATEGORY,NO. OF SHARES,PERCENTAGE,% CHANGE QOQ
    FII,2523876715.00,0.44,-0.41
    DII,2627017665.00,0.45,0.76
    MF,1691568704.00,0.29,0.34
    Others,1805460516.00,0.11,-0.35`,
    graph:
      "https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=32A5B4FE2452496AA07DBDEBC5066B0A&stockExchange=NSE&symbol=ICICIBANK&dividends=true&splits=true&palette=Financial-Light&showLogo=Title",
  },
  {
    name: "TCS",
    score: 9,
    financials: `ANNUAL,FY 2022,FY 2021,FY 2020,FY 2019,FY 2018
    Total Revenue,195772.00,167311.00,161541.00,150774.00,126746.00
    Total Revenue Growth (%),17.01,3.57,7.14,18.96,3.73
    Total Expenses,144085.00,122333.00,119293.00,109211.00,92654.00
    Total Expenses Growth (%),17.78,2.55,9.23,17.87,5.68
    Profit after Tax (PAT),38327.00,32430.00,32340.00,31472.00,25826.00
    PAT Growth (%),18.18,0.28,2.76,21.86,-1.76
    Operating Profit Margin (%),27.36,27.78,27.50,28.51,27.73
    Net Profit Margin (%),19.98,19.75,20.60,21.48,20.97
    Basic EPS (₹),103.62,86.71,86.19,83.05,134.19`,
    shareHolding: `CATEGORY,NO. OF SHARES,PERCENTAGE,% CHANGE QOQ
    Promoters,2645386073.00,0.72,0.00
    Pledge,12633090.00,0.00,0.00
    FII,493882293.00,0.14,-0.65
    DII,310903337.00,0.09,0.14
    MF,122177977.00,0.03,-0.04
    Others,208879670.00,0.19,13.36`,
    graph:
      "https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=32A5B4FE2452496AA07DBDEBC5066B0A&stockExchange=NSE&symbol=TCS&dividends=true&splits=true&palette=Financial-Light&showLogo=Title",
  },
  {
    name: "Info Sys",
    score: 9,
    financials: `ANNUAL,FY 2022,FY 2021,FY 2020,FY 2019,FY 2018
    Total Revenue,123936.00,102673.00,93594.00,85557.00,73715.00
    Total Revenue Growth (%),20.71,9.70,9.39,16.06,3.01
    Total Expenses,93826.00,76045.00,71587.00,64516.00,53374.00
    Total Expenses Growth (%),23.38,6.23,10.96,20.88,3.47
    Profit after Tax (PAT),22110.00,19351.00,16594.00,15404.00,16029.00
    PAT Growth (%),14.26,16.61,7.73,-3.90,11.68
    Operating Profit Margin (%),24.91,26.69,24.42,25.45,28.84
    Net Profit Margin (%),18.17,19.26,18.27,18.63,22.72
    Basic EPS (₹),52.52,45.61,38.97,35.44,71.07`,
    shareHolding: `CATEGORY,NO. OF SHARES,PERCENTAGE,% CHANGE QOQ
    Promoters,551682338.00,0.15,2.05
    Pledge,0.00,0.00,0.00
    FII,1334836004.00,0.32,-1.58
    DII,1166902101.00,0.32,13.19
    MF,640181848.00,0.18,2.61
    Others,1154407096.00,0.53,16.48`,
    graph:
      "https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=32A5B4FE2452496AA07DBDEBC5066B0A&stockExchange=NSE&symbol=INFY&dividends=true&splits=true&palette=Financial-Light&showLogo=Title",
  },
];
