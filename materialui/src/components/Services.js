import React from "react";
import { Grid, Card, CardContent, Typography, Paper } from "@mui/material";
import {makeStyles} from '@mui/styles';
import { services } from "../constants/ServiceConstant";

const Services = () => {
const useStyles = makeStyles({
    section:{
        textAlign: 'center',
        height: '80%'
    }
})

const classes = useStyles();

  return (
    <>
      <Grid layout="row" container marginTop='10%'>
        {services.map((service) => (
          <Grid xs={12} sm={3} padding={3}>
            <Paper className={classes.section}>
              <Card>
                <Grid textAlign= {'center'}>
                  <img src={service.img} />
                </Grid>
                <CardContent sx={{textAlign:'center'}}>
                  <Typography variant="h6" component='h2'>{service.header}</Typography>
                  <Typography variant="h6" component='p'>{service.content}</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Services;
