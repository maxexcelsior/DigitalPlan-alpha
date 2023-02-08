<template>

    <div class="main-container">

        <!-- HEADER -->
        <header class="block">
            <ul class="header-menu horizontal-list">
                <li>
                    <a class="header-menu-tab" href="#1"><span class="icon entypo-cog scnd-font-color"></span>Settings</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#2"><span class="icon fontawesome-user scnd-font-color"></span>Account</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#3"><span class="icon fontawesome-envelope scnd-font-color"></span>Messages</a>
                    <a class="header-menu-number" href="#4">5</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#5"><span class="icon fontawesome-star-empty scnd-font-color"></span>Favorites</a>
                </li>
            </ul>
            <div class="profile-menu">
                <p>Me <a href="#26"><span class="entypo-down-open scnd-font-color"></span></a></p>
                <div class="profile-picture small-profile-picture">
                    <img width="40px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg">
                </div>
            </div>
        </header>

        <div class="common-layout">
            <el-container>
                <el-aside>
                        <div class="profile block"> <!-- PROFILE (MIDDLE-CONTAINER) -->
                            <a class="add-button" href="#28"><span class="icon entypo-plus scnd-font-color"></span></a>
                            <div class="profile-picture big-profile-picture clear">
                                <img width="150px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg" >
                            </div>
                            <h1 class="user-name">Anne Hathaway</h1>
                            <div class="profile-description">
                                <p class="scnd-font-color">Lorem ipsum dolor sit amet consectetuer adipiscing</p>
                            </div>
                            <ul class="profile-options horizontal-list">
                                <li><a class="comments" href="#40"><p><span class="icon fontawesome-comment-alt scnd-font-color"></span>23</p></a></li>
                                <li><a class="views" href="#41"><p><span class="icon fontawesome-eye-open scnd-font-color"></span>841</p></a></li>
                                <li><a class="likes" href="#42"><p><span class="icon fontawesome-heart-empty scnd-font-color"></span>49</p></a></li>
                            </ul>
                        </div>                        
                        <div class="menu-box block"> <!-- MENU BOX (LEFT-CONTAINER) -->
                            <h2 class="titular">MENU BOX</h2>
                            <ul class="menu-box-menu">
                                <li>
                                    <a class="menu-box-tab" href="#6"><span class="icon fontawesome-envelope scnd-font-color"></span>Messages<div class="menu-box-number">24</div></a>                            
                                </li>
                                <li>
                                    <a class="menu-box-tab" href="#8"><span class="icon entypo-paper-plane scnd-font-color"></span>Invites<div class="menu-box-number">3</div></a>                            
                                </li>
                                <li>
                                    <a class="menu-box-tab" href="#10"><span class="icon entypo-calendar scnd-font-color"></span>Events<div class="menu-box-number">5</div></a>                            
                                </li>
                                <li>
                                    <a class="menu-box-tab" href="#12"><span class="icon entypo-cog scnd-font-color"></span>Account Settings</a>
                                </li>
                                <li>
                                    <a class="menu-box-tab" href="#13"><sapn class="icon entypo-chart-line scnd-font-color"></sapn>Statistics</a>
                                </li>                        
                            </ul>
                        </div>

                </el-aside>
                <el-main>
                    <div class="setting-container block">


                    </div>           
                </el-main>
            </el-container>
        </div>


    </div> <!-- end main-container -->
 
</template>


<style>
/** Inspired by: http://graphicburger.com/flat-design-ui-components/ **/
/** Line-chart and donut-chart made by @kseso https://codepen.io/Kseso/pen/phiyL **/


/************************************ FONTS ************************************/
@import url(https://fonts.googleapis.com/css?family=Ubuntu:400,700);
@import url(https://weloveiconfonts.com/api/?family=entypo|fontawesome|zocial);
/* entypo */
[class*="entypo-"]:before {
  font-family: 'entypo', sans-serif;
}
/* fontawesome */
[class*="fontawesome-"]:before {
  font-family: 'FontAwesome', sans-serif;
}
/* zocial */
[class*="zocial-"]:before {
  font-family: 'zocial', sans-serif;
}
@font-face {
	font-family: 'icomoon';
	src:url('https://jlalovi-cv.herokuapp.com/font/icomoon.eot');
	src:url('https://jlalovi-cv.herokuapp.com/font/icomoon.eot?#iefix') format('embedded-opentype'),
		url('https://jlalovi-cv.herokuapp.com/font/icomoon.ttf') format('truetype'),
		url('https://jlalovi-cv.herokuapp.com/font/icomoon.woff') format('woff'),
		url('https://jlalovi-cv.herokuapp.com/font/icomoon.svg#icomoon') format('svg');
	font-weight: normal;
	font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
	font-family: 'icomoon';
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;

	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.icon-cloudy:before {
	content: "\e60f";
}
.icon-sun:before {
	content: "\e610";
}
.icon-cloudy2:before {
	content: "\e611";
}
/************************************* END FONTS *************************************/

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;  
}

body {
	background: #1f253d;
}

.el-aside{
    border: 0px;
}

.el-main{
    /* background-color: #394264; */
}

.setting-container{
    margin-left: 20px;
    height: 500px;
}

ul {
	list-style-type: none;
	margin: 0;
	padding-left: 0;
}

h1 {
	font-size: 23px;
}

h2 {
	font-size: 17px;
}

p {
	font-size: 15px;
}

a {
	text-decoration: none;
	font-size: 15px;
}

h1, h2, p, a, span{
	color: #fff;
}
	.scnd-font-color {
		color: #9099b7;
	}

.input-container {
	position: relative;
}
	input[type=text]{
		width: 260px;
		height: 50px;
		margin-left: 20px;
		margin-bottom: 20px;
		padding-left: 45px;
		background: #50597b;
		color: #fff;
		border: solid 1px #1f253d;
		border-radius: 5px;		
	}
		input[type=text]::-webkit-input-placeholder { /* WebKit browsers */
	   		color: #fff;	   		
	   	}
		input[type=text]:-moz-input-placeholder { /* Mozilla Firefox 4 to 18 */
	   		color: #fff;	   
	   	}
		input[type=text]::-moz-input-placeholder { /* Mozilla Firefox 19+ */
	   		color: #fff;
	   	}
		input[type=text]:-ms-input-placeholder { /* Internet Explorer 10+ */
	   		color: #fff;	   	
	   	}
	   	input[type=text]:focus {
	   		outline: none; /* removes the default orange border when focus */
	   		border: 1px solid #11a8ab;
	   	}
	.input-icon {
		font-size: 22px;
		position: absolute;
		left: 31px;
		top: 10px;
	}
		.input-icon.password-icon {
			left: 35px;
		}

.horizontal-list {
	margin: 0;
	padding: 0;
	list-style-type: none;
}
	.horizontal-list li {
		float: left;
	}

.clear {
	clear: both;
}

.icon {
	font-size: 25px;
}

.titular {
	display: block;
	line-height: 60px;
	margin: 0;
	text-align: center;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}

.button {
	display: block;
	width: 175px;
	line-height: 50px;
	font-size: 16px;
	font-weight: 700;
	text-align: center;
	margin: 0 auto;
	border-radius: 5px;
	-webkit-transition: background .3s;
	transition: background .3s;
}
	.button:hover {
		text-decoration: none;
	}

.arrow-btn-container {
	position: relative;
}
	.arrow-btn {
		position: absolute;
		display: block;
		width: 60px;
		height: 60px;
		-webkit-transition: background .3s;
		transition: background .3s;
	}
		.arrow-btn:hover {
			text-decoration: none;
		}
		.arrow-btn.left {
			border-top-left-radius: 5px;
		}
		.arrow-btn.right {
			border-top-right-radius: 5px;
			right: 0;
			top: 0;
		}
		.arrow-btn .icon {
			display: block;
			font-size: 18px;
			border: 2px solid #fff;
			border-radius: 100%;
			line-height: 17px;
			width: 21px;
			margin: 20px auto;
			text-align: center;
		}
			.arrow-btn.left .icon {
				padding-right: 2px;
			}

.profile-picture {
	border-radius: 100%;
	overflow: hidden;
	-webkit-box-sizing: content-box;
  	-moz-box-sizing: content-box;
  	box-sizing: content-box;	
}
	.big-profile-picture {
		margin: 0 auto;		
		border: 5px solid #50597b;
		width: 150px;
		height: 150px;
	}
	.small-profile-picture {
		border: 2px solid #50597b;
		width: 40px;
		height: 40px;
	}


/** MAIN CONTAINER **/

.main-container {
    padding: 50px 10%;
    position: absolute;
	font-family: 'Ubuntu', sans-serif;
	width: 100%;
}	
	/*********************************************** HEADER ***********************************************/
	header {
		height: 80px;
	}
		.header-menu {
			font-size: 17px;
			line-height: 80px;
		}
			.header-menu li {
				position: relative;
        		-webkit-transform: translateZ(0); /** To avoid a flash when hover messages **/
			}
				.header-menu-tab {
					padding: 0 27px;
					display: block;
					line-height: 74px;
					font-size: 17px;
					-webkit-transition: background .3s;
					transition: background .3s;
				}
					.header-menu-tab:hover {
						background: #50597b;
						border-bottom: 4px solid #11a8ab;
						text-decoration: none;
					}
					.header-menu-tab .icon {
						padding-right: 15px;
					}
				.header-menu-number {
					position: absolute;
					line-height: 22px;
					padding: 0 6px;
					font-weight: 700;
					background: #e64c65;
					border-radius: 100%;
					top: 15px;
					right: 2px;
					-webkit-transition: all .3s linear;
					transition: all .3s linear;
				}
					.header-menu li:hover .header-menu-number {
						text-decoration: none;
						-webkit-transform: rotate(360deg);
						transform: rotate(360deg);

					}
		.profile-menu {
			float: right;
			height: 80px;
			padding-right: 20px;
		}
			.profile-menu p {
				font-size: 17px;
				display: inline-block;
				line-height: 76px;
				margin: 0;
				padding-right: 10px;
			}
				.profile-menu a {
					padding-left: 5px;
				}
					.profile-menu a:hover {
						text-decoration: none;
					}
			.small-profile-picture {
				display: inline-block;
				vertical-align: middle;				
			}
	/** CONTAINERS **/
	.container {
		float: left;
		width: 300px;
	}
		.block {
			margin-bottom: 25px;
			background: #394264;
			border-radius: 5px;
		}


</style>