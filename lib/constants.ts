export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};

const events: EventItem[] = [
  {
    title: "Event 1",
    image: "/images/event1.png",
    slug: "event-1",
    location: "New York, NY",
    date: "2024-07-15",
    time: "10:00 AM",
  },
  {
    title: "Event 2",
    image: "/images/event2.png",
    slug: "event-2",
    location: "San Francisco, CA",
    date: "2024-08-20",
    time: "2:00 PM",
  },
  {
    title: "Event 3",
    image: "/images/event3.png",
    slug: "event-3",
    location: "Los Angeles, CA",
    date: "2024-09-10",
    time: "11:00 AM",
  },
  {
    title: "Event 4",
    image: "/images/event4.png",
    slug: "event-4",
    location: "Chicago, IL",
    date: "2024-10-05",
    time: "1:00 PM",
  },
  {
    title: "Event 5",
    image: "/images/event5.png",
    slug: "event-5",
    location: "Austin, TX",
    date: "2024-11-12",
    time: "3:00 PM",
  },
  {
    title: "Event 6",
    image: "/images/event6.png",
    slug: "event-6",
    location: "Seattle, WA",
    date: "2024-12-01",
    time: "10:00 AM",
  },
];

export default events;
