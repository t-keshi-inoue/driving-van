import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import {
  Button,
  Toolbar,
  Page,
  Splitter,
  SplitterSide,
  SplitterContent,
  List,
  ListItem,
  Icon,
  ToolbarButton,
} from "react-onsenui";

const Hamburger = () => {
  const [Open, setOpen] = useState(false);

  const show = () => {
    setOpen({
      Open: true,
    });
  };

  const hide = () => {
    setOpen({
      Open: false,
    });
  };

  return (
    <Splitter>
      <SplitterSide
        side="left"
        collapse={true}
        isOpen={() => Open}
        onClose={() => hide}
        swipeable={true}>
        <Page>
          <List>
            <ListItem>1</ListItem>
            <ListItem>2</ListItem>
            <ListItem>3</ListItem>
          </List>
        </Page>
      </SplitterSide>
      <SplitterContent>
        <Page
          renderToolbar={() => (
            <Toolbar>
              <div className="left">
                <ToolbarButton onClick={show}>
                  <Icon icon="md-menu" />
                </ToolbarButton>
              </div>
              <div className="center">GOLD DRIVER CHECKER</div>
            </Toolbar>
          )}></Page>
      </SplitterContent>
    </Splitter>
  );
};

export default Hamburger;
