export type sideBarComponentType = {
  title: string,
  routingUrl: string,
  subComponents?: sideBarComponentType[]
}

export const SideBarConstants: sideBarComponentType[] = [
  {
    title: "Today's problem",
    routingUrl: 'problems'
  },
  {
    title: "Leetcode grind",
    routingUrl: 'leetcode',
    subComponents: [
      {
        title: 'day1',
        routingUrl: 'day1',

      },
      {
        title: 'day2',
        routingUrl: 'day1',
      }
    ]
  }
]