import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
interface MeetupItemProps {
  key?: string | number;
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

const MeetUpItem: React.FC<MeetupItemProps> = ({
  image,
  title,
  address,
  description,
}) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add To Favorite</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
