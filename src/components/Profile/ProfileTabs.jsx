import { Box } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileFollowers from "./ProfileFollowers";
import ProfileFollowing from "./ProfileFollowing";
import ProfileRepository from "./ProfileRepository";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <div className="mt-10">{children}</div>
          </Box>
        )}
      </div>
    );
  }

function ProfileTabs({profile}) {
    const [tab, setTab] = useState(0);

    return (
        <div>
            <Tabs
                value={tab}
                textColor="inherit"
                indicatorColor="primary"
                onChange={(event, newValue) => {
                    setTab(newValue);
                }}
            >
                <Tab label={`Details`} />
                <Tab label={`Repository ${profile.public_repos}`} />
                <Tab label={`Following ${profile.following}`} />
                <Tab label={`Followres ${profile.followers}`} />
            </Tabs>
            <TabPanel value={tab} index={0}>
                <ProfileDetails profile={profile} />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <ProfileRepository username={profile.login} />
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <ProfileFollowing username={profile.login} />
            </TabPanel>
            <TabPanel value={tab} index={3}>
                <ProfileFollowers username={profile.login} />
            </TabPanel>
        </div>
    );
}

export default ProfileTabs;
