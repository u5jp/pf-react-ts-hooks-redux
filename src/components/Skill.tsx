import React, { useContext, useEffect } from "react";
import SkillCard from "./SkillCard";
import AppContext from "../contexts/AppContext";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

import { AnimatePresence, motion } from "framer-motion";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: "white",
    },
    menuItem: {
      color: "black",
    },
    inputLabel: {
      color: "white",
    },
    select: {
      color: "white",
      "&:before": {
        borderBottom: " 1px solid rgba(255, 255, 255, 0.42)",
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "2px solid rgba(255, 255, 255, 0.87)",
      },
    },
  })
);

const Skill = ({ className }) => {
  //matrerialUI
  const classes = useStyles();
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    context.dispatchProvided({ type: e.target.value });
  };
  //matrerialUI

  const context: any = useContext(AppContext);
  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");
  useEffect(() => {
    document.title = rootPath;
    window.scrollTo(0, 0);
    return () => {
      document.title = "ReactApp";
    };
  }, []);
  return (
    <motion.div
      animate={
        context.isIPhone ? { x: 0, opacity: 1 } : { rotateY: 0, opacity: 1 }
      }
      initial={
        context.isIPhone ? { x: 500, opacity: 1 } : { rotateY: 90, opacity: 1 }
      }
      exit={
        context.isIPhone
          ? { x: -500, opacity: 1 }
          : { rotateY: -90, opacity: 1 }
      }
      transition={{ duration: 0.5 }}
    >
      <div className={className}>
        <h1>Skill</h1>
        <div className={`${className}_sort`}>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.inputLabel}
              id="demo-controlled-open-select-label"
            >
              Sort
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              onChange={handleChange}
              className={classes.select}
            >
              <MenuItem className={classes.menuItem} value="SORT_INTEREST">
                興味度順
              </MenuItem>
              <MenuItem className={classes.menuItem} value="SORT_PROFICIENCY">
                習熟度順
              </MenuItem>
              <MenuItem className={classes.menuItem} value="SORT_NAME">
                名前順(A→Z)
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={`${className}_skillUl`}>
          {context.stateProvided.skill.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillStyled = styled(Skill)`
  max-width: 960px;
  margin: 50px auto 100px;
  padding-bottom: 0px 50px;
  h1 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }
  &_sort {
    pointer-events: auto;
  }
  &_skillUl {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default SkillStyled;
