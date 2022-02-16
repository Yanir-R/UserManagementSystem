import React from "react";

const ViewIpdetails = ({ country, city, timezone }) => {
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
};

export { ViewIpdetails };
