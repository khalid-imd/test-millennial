import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaUserAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="bg-transparent border border-0">
          <FaUserAlt className="text-black" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Keluar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Profile;
