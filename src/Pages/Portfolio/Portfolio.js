import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Portfolio.css";
import { Grid, Tab } from "@material-ui/core";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid spacing={1} container className="section pb_45 pt_45">
      <Grid item className="section_title mb_20">
        <span></span>
        <h5 className="section_title_text">Projects</h5>
      </Grid>

      {/**Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          style={{
            backgroundColor: "#ffa000",
            borderRadius: 10,
            color: "black",
            fontWeight: "800",
          }}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue ===tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/**Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue ==="All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={2000}>
                    <Card
                      variant="outlined"
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="subtitle1"
                            style={{color:'black', fontWeight:'bold'}}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <div>
                            <div>
                              <Typography
                                variant="subtitle1"
                                color="textPrimary"
                                className="customCard_caption"
                              >
                                <b>{project.caption}</b>
                              </Typography>
                            </div>
                            <div>
                              <Typography
                                variant="caption"
                                className="customCard_caption"
                              >
                                Click to view more
                              </Typography>
                            </div>
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
      >
        <DialogTitle
          className="title_box"
          onClose={() => setProjectDialog(false)}
        >
          {" "}
          {projectDialog.title}{" "}
        </DialogTitle>
        <img src={projectDialog.image} alt="" className="projectDialog_image" />
        <DialogContent className="image_box">
          <Typography
            color="textPrimary"
            variant="subtitle2"
            className="projectDialog_description"
          >
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="projectDialog_icon">
              {" "}
              {link.icon}{" "}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
