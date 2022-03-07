import { observer } from "mobx-react-lite";
import { UserIpInfo } from "../store/UsersStore";

export const ViewIpDetails: React.FC<UserIpInfo> = observer(
  ({ country, city, timezone }) => {
    return (
      <div>
        <br />
        <strong>Country: </strong>
        <span>{country}</span>
        <br />
        <br />
        <strong>City: </strong>
        <span>{city}</span>
        <br />
        <br />
        <strong>Timezone: </strong>
        <span>{timezone}</span>
      </div>
    );
  }
);
