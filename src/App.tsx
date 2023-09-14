import React from "react";
import "./App.css";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";

function App() {
  // TODO: figure out how to run a script with args and permissions and show the o/p and progress bar and errors if any

  return (
    <>
      <div className="flex w-full h-full parent">
        <Tabs
          aria-label="Options"
          aria-orientation="vertical"
          className="navbar"
          classNames={{
            tabList: "tabsList",
            panel:"tabContentContainer",
            base:"navbar",
            tab:"tab"
          }}
        >
          <Tab key="home" title={<FontAwesomeIcon icon={faHome} />}>
            <Card>
              <CardBody>Home</CardBody>
            </Card>
          </Tab>
          <Tab key="music" title={<FontAwesomeIcon icon={faMusic} />}>
            <Card>
              <CardBody>music</CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title={<FontAwesomeIcon icon={faVideo} />}>
            <Card>
              <CardBody>video</CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
