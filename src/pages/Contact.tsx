import { useLocation } from "react-router-dom";
const Contact = () => {
  const querystring = useLocation().search;
  console.log(querystring);

  //URLSearchParams - normal js
  const queryParams = new URLSearchParams(querystring);
  const name = queryParams.get("name");

  return (
    <div>
      <h1>Contact - {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil
        neque necessitatibus adipisci voluptatem, voluptas eos veniam blanditiis
        fugiat dolores voluptas, odit ipsam dolore aliquid? Tenetur, rerum
        accusamus? Magni cupiditate totam neque autem, nulla molestias
        accusantium nemo.
      </p>
    </div>
  );
};

export default Contact;
