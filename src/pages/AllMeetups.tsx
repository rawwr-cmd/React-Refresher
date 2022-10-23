import MeetUpList from "../components/meetups/MeetupList";
import { Meetup } from "../meetup.modal";
const dummyData: Meetup[] = [
  {
    id: Math.random().toString(),
    title: "This is a first meetup",
    image:
      "https://images.unsplash.com/photo-1666479245242-1e4a4d516540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80",
    address: "Some address 5, 12345 Some City",
    description: "first meetup!",
  },
  {
    id: Math.random().toString(),
    title: "This is a second meetup",
    image:
      "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Some address 5, 12345 Some City",
    description: "second meetup!",
  },
];

const AllMeetupsPage: React.FC = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList meetups={dummyData} />
    </section>
  );
};

export default AllMeetupsPage;
