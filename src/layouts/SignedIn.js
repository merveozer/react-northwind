import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.pinimg.com/originals/ad/35/54/ad355496bcc98a451fcda958e9758c85.jpg"
        />
        <Dropdown pointing="top left" text="Merve">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={signOut}
              text="Çıkış Yap"
              icon="signed-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
