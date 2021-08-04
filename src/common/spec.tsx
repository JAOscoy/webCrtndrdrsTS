import * as React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { TabsComponent } from "../components/products/types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props: TabsComponent) {
  const { tabsData } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "auto",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Calibre / Resistencia ECT" {...a11yProps(0)} />
        <Tab label="tipo o forma" {...a11yProps(1)} />
        <Tab label="Color" {...a11yProps(2)} />
        <Tab label="Dimensiones" {...a11yProps(3)} />
        <Tab label="Uniones" {...a11yProps(4)} />
        <Tab label="Suajes" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <List>
          {tabsData.calibre.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List>
          {tabsData.tipo.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <List>
          {tabsData.color.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <List>
          {tabsData.dimensiones.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <List>
          {tabsData.uniones.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <List>
          {tabsData.suaje.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          ))}
        </List>
      </TabPanel>
    </Box>
  );
}
