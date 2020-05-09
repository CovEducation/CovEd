import React, { useState } from 'react';
import { announcement, theme } from "../Constants.js";

/**
 * This component displays occasional announcements about
 * new events (e.i Q&A sessions, talks, etc).
 */
 export default () => {
     if (announcement.description.length == 0) {
         return <></>
     }

     return (
         <div style={{
             backgroundColor: theme.colors.blue,
             textAlign: "center",
             color: theme.colors.white,
         }}>
            { announcement.description }
            - <a href={announcement.link} style={{color: theme.colors.yellow}}>{" read more"}</a>
         </div>
     )

 }