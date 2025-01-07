import React from 'react';

const SideBar = () => {
  const openHPage =() =>{
    window.open("homepage", "_self");
};
const openMPage=() =>{

    window.open("menupage", "_self");
};

const openAPage=() =>{

    window.open("profilepage", "_self");
};

const openRPage=() =>{

    window.open("recipespage", "_self");
};
    return(
    <div style={styles.sidebar}>

        <img id="home" src="../icons+img/house-heart-fill.svg"  width="50px" height="50px" style={styles.gridRowAuto} onClick={openHPage}/><br></br>
        
        <img id="menu" width="50px" height="50px" src="../icons+img/menu-up.svg" style={styles.gridRowAuto} onClick={openMPage} /><br></br>
        
        <img id="account" width="50px" height="50px" src="../icons+img/person-circle.svg" style={styles.gridRowAuto} onClick={openAPage}/><br></br>
        
        <img id="recipes" width="50px" height="50px" src="../icons+img/burger-solid.svg" style={styles.gridRowAuto} onClick={openRPage}/><br></br>
            </div>
    );
};

const styles ={
    sidebar: {
        height: "100%",
        width: "60px",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "#94e957",
        overflowX: "hidden",
        paddingTop: "16px",
        display: "grid",
      },
      gridRowAuto: {
        gridRow: "auto", 
      },
};

export default SideBar;