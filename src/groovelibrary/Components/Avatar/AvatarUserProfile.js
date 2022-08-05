import React from 'react';

// User Profile icons:   
import  amy   from "./images/amy.jpg"
import  andrew   from "./images/andrew.jpg"
import  ava   from "./images/ava.jpg"
import  ben   from "./images/ben.jpg"
import  brian   from "./images/brian.jpg"
import  carmen   from "./images/carmen.jpg"
import  charla   from "./images/charla.jpg"
import  claire   from "./images/claire.jpg"
import  crystal   from "./images/crystal.jpg"
import  david   from "./images/david.jpg"
import  dori   from "./images/dori.jpg"
import  gerald   from "./images/gerald.jpg"
import  grace   from "./images/grace.jpg"
import  gretchen   from "./images/gretchen.jpg"
import  gus   from "./images/gus.jpg"
import  joshua   from "./images/joshua.jpg"
import  kate   from "./images/kate.jpg"
import  liam   from "./images/liam.jpg"
import  lori   from "./images/lori.jpg"
import  michelle   from "./images/michelle.jpg"
import  monica   from "./images/monica.jpg"
import  patricia   from "./images/patricia.jpg"
import  patrick   from "./images/patrick.jpg"
import  rex   from "./images/rex.jpg"
import  sam   from "./images/sam.jpg"
import  sean   from "./images/sean.jpg"
import  shane   from "./images/shane.jpg"
import  summer   from "./images/summer.jpg"
import  taylor   from "./images/taylor.jpg"
import  thomas   from "./images/thomas.jpg"
import  vijay   from "./images/vijay.jpg"
import  william   from "./images/william.jpg"
 
function objectfromstring(string) {
    switch (string) {
      case "william":
        return william;
      case "vijay":
        return vijay;
      case "thomas":
        return thomas;
      case "taylor":
        return taylor;
      case "summer":
        return summer;
      case "shane":
        return shane;
      case "sean":
        return sean;
      case "sam":
        return sam;
      case "rex":
        return rex;
      case "patrick":
        return patrick;
      case "patricia":
        return patricia;
      case "amy":
        return amy;
      case "andrew":
        return andrew;
      case "ava":
        return ava;
      case "ben":
        return ben;
      case "brian":
        return brian;
      case "carmen":
        return carmen;
      case "charla":
        return charla;
      case "claire":
        return claire;
      case "crystal":
        return crystal;
      case "david":
        return david;
      case "dori":
        return dori;
      case "gerald":
        return gerald;
      case "grace":
        return grace;
      case "gretchen":
        return gretchen;
      case "gus":
        return gus;
      case "joshua":
        return joshua;
      case "kate":
        return kate;
      case "liam":
        return liam;
      case "lori":
        return lori;
      case "michelle":
        return michelle;
      case "monica":
        return monica;
      default:
        return amy;
    }
  };
 

function AvatarUserProfile(props) {
    return (
        <a href="#" className={`avatar-groove avatar-user ${props.variant} ${props.size}`} >
            <img src={objectfromstring(props.icon)}/>
        </a>
    );
}

export default AvatarUserProfile;