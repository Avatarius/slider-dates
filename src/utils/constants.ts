import { IHistoricalData } from "./types";

const historicalData: IHistoricalData[] = [
  {
    id: crypto.randomUUID(),
    title: "Технологии",
    startYear: 1980,
    endYear: 1985,
    events: [
      {
        year: 1980,
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas eleifend pulvinar massa natoque ligula aliquam."
      },
      {
        year: 1981,
        description: "Duis tempus arcu in nunc consequat interdum. Praesent ante turpis, rutrum at nisl in, volutpat."
      },
      {
        year: 1982,
        description: "Donec lobortis molestie ullamcorper. Morbi elementum ut tellus imperdiet faucibus. Suspendisse potenti. Pellentesque habitant morbi."
      },
      {
        year: 1983,
        description: "Fusce lobortis euismod urna at finibus. Cras faucibus sem eu dui condimentum rhoncus. Integer lacinia."
      },
      {
        year: 1984,
        description: "Praesent viverra eros massa, ut elementum tellus malesuada sit amet. Sed facilisis neque velit, eget."
      },
      {
        year: 1985,
        description: "In rutrum ligula ut urna condimentum convallis. In facilisis sollicitudin elit, sed maximus magna fermentum."
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Кино",
    startYear: 1987,
    endYear: 1991,
    events: [
      {
        year: 1987,
        description: "Vivamus iaculis sem nisl, a consequat nibh pulvinar non. Nullam fermentum eros massa, vestibulum eleifend.",
      },
      {
        year: 1988,
        description: "Sed convallis a est vitae euismod. Quisque quam elit, lacinia a pulvinar sed, interdum eget.",
      },
      {
        year: 1989,
        description: "Mauris rutrum enim eu rutrum posuere. Vivamus ornare neque sed massa pretium elementum. Morbi ac.",
      },
      {
        year: 1990,
        description: "Vestibulum sodales et lorem at feugiat. Quisque commodo velit a euismod consequat. Cras ut dui.",
      },
      {
        year: 1991,
        description: "Integer efficitur ipsum sit amet consequat sodales. Mauris fringilla, quam quis congue malesuada, lorem lacus.",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Литература",
    startYear: 1992,
    endYear: 1997,
    events: [
      {
        year: 1992,
        description: "Quisque tellus lorem, consectetur ut eros id, porta commodo nulla. Morbi vel purus urna. Praesent.",
      },
      {
        year: 1993,
        description: "Sed nec eleifend nibh, a pharetra quam. Fusce et elementum augue. Praesent interdum a nisi.",
      },
      {
        year: 1994,
        description: "Quisque malesuada erat at nibh mattis, vitae tristique arcu tempor. Fusce sodales odio sit amet.",
      },
      {
        year: 1995,
        description: "Suspendisse aliquet eget est et dictum. Orci varius natoque penatibus et magnis dis parturient montes.",
      },
      {
        year: 1996,
        description: "Mauris ornare risus justo, aliquet hendrerit nisl mattis eu. Praesent volutpat ut turpis et rhoncus.",
      },
      {
        year: 1997,
        description: "Integer sed fermentum elit, sit amet mollis odio. Donec interdum erat at laoreet bibendum. Quisque.",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Театр",
    startYear: 1999,
    endYear: 2004,
    events: [
      {
        year: 1999,
        description: "Ut pulvinar, eros ac tempus semper, augue arcu ornare libero, vel commodo mauris felis nec.",
      },
      {
        year: 2000,
        description: "Pellentesque pharetra vehicula finibus. Proin feugiat nibh ex. Donec sit amet venenatis dolor, at finibus.",
      },
      {
        year: 2001,
        description: "Nam in placerat elit, vel dapibus massa. In feugiat lorem et leo ullamcorper tempus. Aliquam.",
      },
      {
        year: 2002,
        description: "Sed eu egestas lectus, eget convallis tellus. Duis facilisis eu libero aliquet aliquet. Donec purus.",
      },
      {
        year: 2003,
        description: "Aenean bibendum vel nunc ac vulputate. Pellentesque vehicula lacinia tincidunt. Proin a sagittis nunc, at.",
      },
      {
        year: 2004,
        description: "Vivamus odio augue, feugiat nec dictum in, congue luctus tellus. Phasellus metus est, luctus auctor.",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Спорт",
    startYear: 2006,
    endYear: 2011,
    events: [
      {
        year: 2006,
        description: "Fusce eu nulla dignissim, dictum leo sed, egestas urna. Duis eget scelerisque tellus. Nulla congue.",
      },
      {
        year: 2007,
        description: "Aliquam erat volutpat. Praesent a nulla a enim vehicula hendrerit. Fusce quis maximus turpis. Vestibulum.",
      },
      {
        year: 2008,
        description: "Aenean a suscipit lacus. Sed ultricies quam enim, nec commodo neque porttitor eget. Donec elementum.",
      },
      {
        year: 2009,
        description: "Morbi ultricies mattis ex, ac lacinia est maximus eu. Phasellus fringilla vel leo sed ultricies.",
      },
      {
        year: 2010,
        description: "Fusce lobortis libero id suscipit suscipit. Nulla egestas tortor quis metus maximus porta. Praesent imperdiet.",
      },
      {
        year: 2011,
        description: "Etiam vehicula fringilla velit vel tristique. Cras commodo mi lorem, at dapibus velit ultrices at.",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Наука",
    startYear: 2015,
    endYear: 2022,
    events: [
      {
        year: 2015,
        description: "Cras viverra magna ac sem feugiat mollis. Aliquam imperdiet tortor lorem, eu consequat enim pharetra.",
      },
      {
        year: 2016,
        description: "Maecenas hendrerit elit sed turpis varius, et scelerisque est vehicula. Maecenas at erat ipsum. Fusce.",
      },
      {
        year: 2017,
        description: "Aliquam sagittis ligula ut ipsum ultricies efficitur. Nullam quis sodales sem. Nunc dignissim, ex nec.",
      },
      {
        year: 2018,
        description: "Quisque aliquam ultricies consequat. Sed semper rutrum vestibulum. Praesent vel eleifend ex, vel ullamcorper mi.",
      },
      {
        year: 2019,
        description: "Cras vitae nibh eu orci elementum faucibus quis sed mi. Praesent gravida accumsan leo et.",
      },
      {
        year: 2021,
        description: "Nam ipsum turpis, euismod eget porta ut, tempor quis arcu. Nam semper nunc sagittis tristique.",
      },
      {
        year: 2022,
        description: "Quisque in viverra orci. Cras ac consequat nunc. Morbi porttitor tincidunt erat, nec ultrices quam.",
      },
    ],
  },
];

export { historicalData };
