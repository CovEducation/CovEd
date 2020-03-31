import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
}));

const ProfileCard = (props) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <ButtonBase  onClick={props.onClick}>
        <CardContent>
          <Avatar className={styles.avatar} src={props.user.profile_pic} />
          <h3 className={styles.heading}>{props.user.first_name + " " + props.user.last_name}</h3>
          <span className={styles.subheader}>{props.user.major}</span>
        </CardContent>
        <Divider light />
        <Box display={"flex"}>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>Time Zone</p>
            <p className={styles.statValue}>PST</p>
          </Box>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>Number of pets</p>
            <p className={styles.statValue}>2</p>
          </Box>
        </Box>
      </ButtonBase>
    </Card>
  );
};

export default ProfileCard;
