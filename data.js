var titleMapping = new Map();
titleMapping.set('#policeLine', {desc:"police funding for investigations, foot patrol, and internal review", category:"Police Funding", num:0});
titleMapping.set('#violentLine', {desc:"crimes rates in homicide, rape, robbery, burglary, and battery", category:"Violent Crime", num:1});
titleMapping.set('#otherLine', {desc:"crime rates of narcotics and criminal damage", category:"Non-Violent Crime", num:2});
titleMapping.set('#socialLine', {desc:"city spending on social programs", category:"Social Assistance Program Funding", num:3});
titleMapping.set('#homicideLine', {desc:"homicides", category: "Homicide", num:1});
titleMapping.set('#rapeLine', {desc:"rapes", category:"Rape and Sexual Assault", num:1});
titleMapping.set('#robberyLine', {desc:"robberies", category:"Robbery", num:1});
titleMapping.set('#burglaryLine', {desc:"burglaries", category: "Burglary", num:1});
titleMapping.set('#assaultLine', {desc:"assault/battery", category: "Assault and Battery", num:1});
titleMapping.set('#narcLine', {desc:"narcotics", category:"Narcotics", num:2});
titleMapping.set('#crimdamLine', {desc:"crinimal damage", category:"Criminal Damage", num:2});
titleMapping.set('#econLine', {desc:"crinimal damage", category:"Economic Stimulus Programs", num:3});
titleMapping.set('#houseLine', {desc:"crinimal damage", category:"Housing Assistance Programs", num:3});
titleMapping.set('#youthLine', {desc:"crinimal damage", category:"Youth Programs", num:3});
titleMapping.set('#homelessLine', {desc:"crinimal damage", category:"Homeless and Human Services", num:3});
titleMapping.set('#violenceLine', {desc:"crinimal damage", category:"Violence Prevention Programs", num:3});
titleMapping.set('#mentalLine', {desc:"mental health programs", category:"Mental Health Programs", num:3});
origData = [
  {
    name: "police",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-0.5"},
      {year: "2014", percent: "2.6"},
      {year: "2015", percent: "6"},
      {year: "2016", percent: "0.1"},
      {year: "2017", percent: "2.2"},
      {year: "2018", percent: "2.9"},
      {year: "2019", percent: "4.7"},
      {year: "2020", percent: "4"},
    ]
  },
  {
    name: "violent",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-11.8"},
      {year: "2014", percent: "10.6"},
      {year: "2015", percent: "-2"},
      {year: "2016", percent: "7.7"},
      {year: "2017", percent: "-2"},
      {year: "2018", percent: "-1.9"},
      {year: "2019", percent: "-4.3"},
      {year: "2020", percent: "-7.5"},
    ]
  },
  {
    name: "other",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-8.9"},
      {year: "2014", percent: "-12.4"},
      {year: "2015", percent: "-7.6"},
      {year: "2016", percent: "-15.7"},
      {year: "2017", percent: "-8.2"},
      {year: "2018", percent: "1.5"},
      {year: "2019", percent: "-0.6"},
      {year: "2020", percent: "-12.9"},
    ]
  },
  {
    name: "social",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-40.4"},
      {year: "2014", percent: "28.8"},
      {year: "2015", percent: "1.4"},
      {year: "2016", percent: "-4.2"},
      {year: "2017", percent: "5.7"},
      {year: "2018", percent: "-2.3"},
      {year: "2019", percent: "-7.7"},
      {year: "2020", percent: "45.7"},
    ]
  }];
  violentData = [
  {
    name: "homicide",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-16.7"},
      {year: "2014", percent: "-0.7"},
      {year: "2015", percent: "17.8"},
      {year: "2016", percent: "57"},
      {year: "2017", percent: "-14.5"},
      {year: "2018", percent: "-11"},
      {year: "2019", percent: "-16"},
      {year: "2020", percent: "52.1"},
    ]
  },
  {
    name: "rape",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-7.9"},
      {year: "2014", percent: "3.2"},
      {year: "2015", percent: "3.9"},
      {year: "2016", percent: "11.7"},
      {year: "2017", percent: "4.2"},
      {year: "2018", percent: "0.7"},
      {year: "2019", percent: "-3.7"},
      {year: "2020", percent: "-25.6"},
    ]
  },
  {
    name: "robbery",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-12.3"},
      {year: "2014", percent: "-17.1"},
      {year: "2015", percent: "-1.6"},
      {year: "2016", percent: "-24.1"},
      {year: "2017", percent: "-0.7"},
      {year: "2018", percent: "-18.5"},
      {year: "2019", percent: "-17.5"},
      {year: "2020", percent: "-6.2"},
    ]
  },
  {
    name: "burglary",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-21.7"},
      {year: "2014", percent: "-18.6"},
      {year: "2015", percent: "-9.5"},
      {year: "2016", percent: "8.4"},
      {year: "2017", percent: "-9"},
      {year: "2018", percent: "-9.6"},
      {year: "2019", percent: "-18"},
      {year: "2020", percent: "-3.1"},
    ]
  },
  {
    name: "assault",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-8.9"},
      {year: "2014", percent: "-7.8"},
      {year: "2015", percent: "-0.6"},
      {year: "2016", percent: "4.7"},
      {year: "2017", percent: "-0.7"},
      {year: "2018", percent: "2.4"},
      {year: "2019", percent: "-0.2"},
      {year: "2020", percent: "-15.8"},
    ]
  }];
socialData = [
  {
    name: "econ",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-23.4"},
      {year: "2014", percent: "-64.2"},
      {year: "2015", percent: "146.4"},
      {year: "2016", percent: "-60.4"},
      {year: "2017", percent: "-3.9"},
      {year: "2018", percent: "0.1"},
      {year: "2019", percent: "160.9"},
      {year: "2020", percent: "162.2"},
    ]
  },
  {
    name: "house",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-57.9"},
      {year: "2014", percent: "73.6"},
      {year: "2015", percent: "-7.2"},
      {year: "2016", percent: "-0.5"},
      {year: "2017", percent: "21.1"},
      {year: "2018", percent: "4.9"},
      {year: "2019", percent: "-32.4"},
      {year: "2020", percent: "59.4"},
    ]
  },
  {
    name: "youth",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-41"},
      {year: "2014", percent: "146"},
      {year: "2015", percent: "4.6"},
      {year: "2016", percent: "5.9"},
      {year: "2017", percent: "23.4"},
      {year: "2018", percent: "4.1"},
      {year: "2019", percent: "13.6"},
      {year: "2020", percent: "-4.8"},
    ]
  },
  {
    name: "homeless",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-13.7"},
      {year: "2014", percent: "-8.6"},
      {year: "2015", percent: "1.8"},
      {year: "2016", percent: "-3.7"},
      {year: "2017", percent: "-30.6"},
      {year: "2018", percent: "-32.7"},
      {year: "2019", percent: "30.3"},
      {year: "2020", percent: "12.8"},
    ]
  },
  {
    name: "violence",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "56.2"},
      {year: "2014", percent: "-62.1"},
      {year: "2015", percent: "66.7"},
      {year: "2016", percent: "31.6"},
      {year: "2017", percent: "53.8"},
      {year: "2018", percent: "21.2"},
      {year: "2019", percent: "60"},
      {year: "2020", percent: "200.4"},
    ]
  },
  {
    name: "mental",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-23.9"},
      {year: "2014", percent: "4.5"},
      {year: "2015", percent: "0.8"},
      {year: "2016", percent: "-1.9"},
      {year: "2017", percent: "8.8"},
      {year: "2018", percent: "4.9"},
      {year: "2019", percent: "15.7"},
      {year: "2020", percent: "70.3"},
    ]
  }];
otherData = [
  {
    name: "crimdam",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-13.9"},
      {year: "2014", percent: "-9.9"},
      {year: "2015", percent: "3.2"},
      {year: "2016", percent: "8.2"},
      {year: "2017", percent: "-6.4"},
      {year: "2018", percent: "-4.2"},
      {year: "2019", percent: "-4.1"},
      {year: "2020", percent: "-6.2"},
    ]
  },
  {
    name: "narc",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-3.8"},
      {year: "2014", percent: "-14.7"},
      {year: "2015", percent: "-17.8"},
      {year: "2016", percent: "-44.4"},
      {year: "2017", percent: "-12.4"},
      {year: "2018", percent: "15.8"},
      {year: "2019", percent: "6.8"},
      {year: "2020", percent: "-51.7"},
    ]
  }];