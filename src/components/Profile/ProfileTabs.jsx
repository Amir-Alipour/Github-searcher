import { Box } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProfileTabs({profile}) {
    const history = useHistory();
    const query = useQuery()
    const [tab, setTab] = useState(0);

    useEffect(() => {
        if(query.get("tab") !== null){
          setTab(parseInt(query.get("tab")));
        }
    }, [query])
    
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
                <Tab label={`Details`} onClick={() => history.replace(`/Github-searcher/${profile.login}`)} />
                <Tab label={`Repository ${profile.public_repos}`} onClick={() => history.replace(`/Github-searcher/${profile.login}?tab=1`)} />
                <Tab label={`Following`} onClick={() => history.replace(`/Github-searcher/${profile.login}?tab=2`)} />
                <Tab label={`Followres`} onClick={() => history.replace(`/Github-searcher/${profile.login}?tab=3`)} />
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
