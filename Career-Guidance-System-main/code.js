@import url("https://fonts.googleapis.com/css?family=Titillium+Web");


body {
width: 100%;
overflow-x: hidden;
}

.finalLandingPage {
z-index: 1;
}

#landing-page {
height: 750px;
margin-top: -150px;
}

.bg {
background-color: black;
z-index: -1;
background-size: cover;
height: 100%;
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index: -3
}

.bg:before {
content: '';
width: 100%;
height: 100%;
background: #000;
position: fixed;
z-index: -1;
top: 0;
left: 0;
opacity: .3
}

@keyframes sf-fly-by-1 {
from {
  transform: translateZ(-600px);
  opacity: .5
}

to {
  transform: translateZ(0);
  opacity: .5
}
}

@keyframes sf-fly-by-2 {
from {
  transform: translateZ(-1200px);
  opacity: .5
}

to {
  transform: translateZ(-600px);
  opacity: .5
}
}

@keyframes sf-fly-by-3 {
from {
  transform: translateZ(-1800px);
  opacity: .5
}

to {
  transform: translateZ(-1200px);
  opacity: .5
}
}

.star-field {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
perspective: 600px;
-webkit-perspective: 600px;
z-index: -1
}

.star-field .layer {
box-shadow: -411px -476px #cccccc, 777px -407px #d4d4d4, -387px -477px #fcfcfc, -91px -235px #d4d4d4, 491px -460px #f7f7f7, 892px -128px #f7f7f7, 758px -277px #ededed, 596px 378px #cccccc, 647px 423px whitesmoke, 183px 389px #c7c7c7, 524px -237px #f0f0f0, 679px -535px #e3e3e3, 158px 399px #ededed, 157px 249px #ededed, 81px -450px #ebebeb, 719px -360px #c2c2c2, -499px 473px #e8e8e8, -158px -349px #d4d4d4, 870px -134px #cfcfcf, 446px 404px #c2c2c2, 440px 490px #d4d4d4, 414px 507px #e6e6e6, -12px 246px #fcfcfc, -384px 369px #e3e3e3, 641px -413px #fcfcfc, 822px 516px #dbdbdb, 449px 132px #c2c2c2, 727px 146px #f7f7f7, -315px -488px #e6e6e6, 952px -70px #e3e3e3, -869px -29px #dbdbdb, 502px 80px #dedede, 764px 342px #e0e0e0, -150px -380px #dbdbdb, 654px -426px #e3e3e3, -325px -263px #c2c2c2, 755px -447px #c7c7c7, 729px -177px #c2c2c2, -682px -391px #e6e6e6, 554px -176px #ededed, -85px -428px #d9d9d9, 714px 55px #e8e8e8, 359px -285px #cfcfcf, -362px -508px #dedede, 468px -265px #fcfcfc, 74px -500px #c7c7c7, -514px 383px #dbdbdb, 730px -92px #cfcfcf, -112px 287px #c9c9c9, -853px 79px #d6d6d6, 828px 475px #d6d6d6, -681px 13px #fafafa, -176px 209px #f0f0f0, 758px 457px #fafafa, -383px -454px #ededed, 813px 179px #d1d1d1, 608px 98px whitesmoke, -860px -65px #c4c4c4, -572px 272px #f7f7f7, 459px 533px #fcfcfc, 624px -481px #e6e6e6, 790px 477px #dedede, 731px -403px #ededed, 70px -534px #cccccc, -23px 510px #cfcfcf, -652px -237px whitesmoke, -690px 367px #d1d1d1, 810px 536px #d1d1d1, 774px 293px #c9c9c9, -362px 97px #c2c2c2, 563px 47px #dedede, 313px 475px #e0e0e0, 839px -491px #e3e3e3, -217px 377px #d4d4d4, -581px 239px #c2c2c2, -857px 72px #cccccc, -23px 340px #dedede, -837px 246px white, 170px -502px #cfcfcf, 822px -443px #e0e0e0, 795px 497px #e0e0e0, -814px -337px #cfcfcf, 206px -339px #f2f2f2, -779px 108px #e6e6e6, 808px 2px #d4d4d4, 665px 41px #d4d4d4, -564px 64px #cccccc, -380px 74px #cfcfcf, -369px -60px #f7f7f7, 47px -495px #e3e3e3, -383px 368px #f7f7f7, 419px 288px #d1d1d1, -598px -50px #c2c2c2, -833px 187px #c4c4c4, 378px 325px whitesmoke, -703px 375px #d6d6d6, 392px 520px #d9d9d9, -492px -60px #c4c4c4, 759px 288px #ebebeb, 98px -412px #c4c4c4, -911px -277px #c9c9c9;
transform-style: preserve-3d;
position: absolute;
top: 50%;
left: 50%;
height: 4px;
width: 4px;
border-radius: 2px
}

.star-field .layer:nth-child(1) {
animation: sf-fly-by-1 5s linear infinite
}

.star-field .layer:nth-child(2) {
animation: sf-fly-by-2 5s linear infinite
}

.star-field .layer:nth-child(3) {
animation: sf-fly-by-3 5s linear infinite
}
}

.mentor {
position: relative;
left: 290px;
}

/* NAVBAR */
.navbar .navbar-brand {
font-size: 30px;
}

.navbar .nav-item {
padding: 10px 20px;
}

.navbar .nav-link {
font-size: 20px;
margin-left: 10px;
}

.fa-bars {
color: #007bff;
font-size: 30px;
}

nav {
background: rgba(0, 0, 0, 0);
}

.logo_img {
height: 52px;
width: 170px;
margin-right: 30%;
}

/* FOOTER */
ul {
margin: 0px;
padding: 0px;
}

.footer-section {
background: black;
position: relative;
}

.footer-cta {
border-bottom: 1px solid black;
}

.single-cta i {
color: #ff5e14;
font-size: 30px;
float: left;
margin-top: 8px;
}

.cta-text {
padding-left: 15px;
display: inline-block;
}

.cta-text h4 {
color: #fff;
font-size: 20px;
font-weight: 600;
margin-bottom: 2px;
}

.cta-text span {
color: #757575;
font-size: 15px;
}

.footer-content {
position: relative;
z-index: 2;
}

.footer-pattern img {
position: absolute;
top: 0;
left: 0;
height: 330px;
background-size: cover;
background-position: 100% 100%;
}

.footer-logo {
margin-bottom: 30px;
}

.footer-logo img {
max-width: 200px;
}

.footer-text p {
margin-bottom: 14px;
font-size: 14px;
color: #7e7e7e;
line-height: 28px;
}

.footer-social-icon span {
color: #fff;
display: block;
font-size: 20px;
font-weight: 700;
font-family: 'Poppins', sans-serif;
margin-bottom: 20px;
}

.footer-social-icon a {
color: #fff;
font-size: 16px;
margin-right: 15px;
}

.footer-social-icon i {
height: 40px;
width: 40px;
text-align: center;
line-height: 38px;
border-radius: 50%;
}

.facebook-bg {
background: #3B5998;
}

.twitter-bg {
background: #55ACEE;
}

.instagram-bg {
background: #F94892;
}

.footer-widget-heading h3 {
color: #fff;
font-size: 20px;
font-weight: 600;
margin-bottom: 40px;
position: relative;
}

.footer-widget-heading h3::before {
content: "";
position: absolute;
left: 0;
bottom: -15px;
height: 2px;
width: 50px;
background: #ff5e14;
}

.footer-widget ul li {
display: inline-block;
float: left;
width: 50%;
margin-bottom: 12px;
}

.footer-widget ul li a:hover {
color: #ff5e14;
}

.footer-widget ul li a {
color: #878787;
text-transform: capitalize;
}

.subscribe-form {
position: relative;
overflow: hidden;
}

.subscribe-form input {
width: 100%;
padding: 14px 28px;
background: #2E2E2E;
border: 1px solid #2E2E2E;
color: #fff;
}

.subscribe-form button {
position: absolute;
right: 0;
background: #ff5e14;
padding: 13px 20px;
border: 1px solid #ff5e14;
top: 0;
}

.subscribe-form button i {
color: #fff;
font-size: 22px;
transform: rotate(-6deg);
}

.copyright-area {
background: #202020;
padding: 25px 0;
}

.copyright-text p {
margin: 0;
font-size: 14px;
color: #878787;
}

.copyright-text p a {
color: #ff5e14;
}

.footer-menu li {
display: inline-block;
margin-left: 20px;
}

.footer-menu li:hover a {
color: #ff5e14;
}

.footer-menu li a {
font-size: 14px;
color: #878787;
}

/* BACK TO TOP BUTTON */
#btn-back-to-top {
position: fixed;
bottom: 15px;
right: 15px;
height: 32px;
width: 30px;
opacity: 0.9;
/* transition: ease-in-out 0.6s; */
display: none;
background-image: url("/images/upload.png");
}

.btn:hover {
/* transition: ease-in-out 0.6s; */
opacity: 1.5;
}

.upToTop {
width: 20px;
height: 20px;
position: absolute;
bottom: 5px;
right: 5px;
}

/* FOOTER */
/* ABOUT US */
.aboutUs_img {
margin: 50px;
height: 400px;
width: 400px;
border-radius: 100%;
}

.about_us {
margin: 100px auto;
}

.about_us_text {
color: white;
padding: 100px 120px;
text-align: center;
font-family: 'Nanum Gothic', sans-serif;
font-size: 1.4rem;
line-height: 29px;
}

.Heading {
text-align: center;
font-size: 3.7rem;
font-weight: 550;
position: relative;
top: 50px;
}

/* ABOUT VIT */
.about_VIT {}

/* EVENTS */
/* .longTitle{
position: relative;
bottom: 20px;
} */
.events {
height: 800px;
padding-top: 130px;
}

.event_Heading {
text-align: center;
font-size: 3.7rem;
font-weight: 550;
position: relative;
bottom: 70px;
}

/* BLOGS */
.blogs {
height: 800px;
padding-top: 130px;
}

/* TEAM */
/* PHOTO GALLERY */
.photo_header {
text-align: center;
font-size: 3.7rem;
font-weight: 550;
}

.gallery {
height: 520px;
}

.photo-gallery {
border-left: solid black 2px;
border-right: solid black 2px;
}

.slider {
background-color: black;
box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0);
height: 300px;
margin: auto;
overflow: hidden;
position: relative;
top: 50px;
width: 100%;
}

.slider::before, .slider::after {
background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
content: "";
height: 100px;
position: absolute;
width: 500px;
z-index: 2;
}

.slider::after {
right: 0;
top: 0;
transform: rotateZ(180deg);
}

.slider::before {
left: 0;
top: 0;
}

.slider .slide-track {
animation: scroll 60s linear infinite;
display: flex;
width: calc(250px * 14);
}

.slider .slide {
height: 300px;
width: 500px;
}

/* LANDING PAGE */
/* .slider_landing {
  position: fixed;
  top: 10px;
  right: 20px;
  width: 150px;
  color: white;
  font-family: sans-serif;
  text-align: right;
  z-index: -5;
}
.slider_landing input {
  width: 100%;
  margin-bottom: 5px;
} */
.text {
margin-right: 8px;
}

.landing_container {
position: relative;
top: 250px;
margin: 30px;
}

.landing_page_header {
font-size: 6rem;
font-weight: 600;
font-family: 'Montserrat', sans-serif;
}

.hidden {
opacity: 0;
}

.console-container {
font-size: 3rem;
font-weight: 550;
font-family: 'Montserrat', sans-serif;
position: relative;
left: 7px;
}

.console-underscore {
display: inline-block;
position: relative;
left: 10px;
}

p {
display: inline-block;
vertical-align: top;
margin: 0;
}

.word {
position: absolute;
width: 220px;
opacity: 0;
}

.letter {
display: inline-block;
position: relative;
float: left;
transform: translateZ(25px);
transform-origin: 50% 50% 25px;
}

.letter.out {
transform: rotateX(90deg);
transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
transform: rotateX(-90deg);
}

.letter.in {
transform: rotateX(0deg);
transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.wisteria {
color: #8e44ad;
}

.belize {
color: #2980b9;
}

.pomegranate {
color: #c0392b;
}

.green {
color: #16a085;
}

.midnight {
color: #2c3e50;
}

/* TEAM */
.section-team {
font-family: "Poppins", sans-serif;
padding: 80px 0;
/* text-align: center; */
}

.section-team .header-section {
margin-bottom: 50px;
}

.section-team .header-section .small-title {
margin-bottom: 25px;
font-size: 16px;
font-weight: 500;
color: #3e64ff;
}

.section-team .header-section .title {
font-weight: 700;
font-size: 45px;
}

.section-team .single-person {
margin-top: 30px;
padding: 30px;
background-color: #f6f9ff;
border-radius: 5px;

}

.section-team .single-person:hover {
background: linear-gradient(to right, #016cec, #00b5f7);
}

.section-team .single-person .person-image {
position: relative;
margin-bottom: 50px;
border-radius: 100%;
border: 4px dashed transparent;
transition: padding .3s;
}

.section-team .single-person:hover .person-image {
padding: 12px;
border: 4px dashed #fff;
}

.section-team .single-person .person-image img {
width: 100%;
border-radius: 100%;
}

.section-team .single-person .person-image .icon {
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, 50%);
display: inline-block;
width: 60px;
height: 60px;
line-height: 60px;
text-align: center;
background: linear-gradient(to right, #016cec, #00b5f7);
color: #fff;
border-radius: 100%;
font-size: 24px;
}

.section-team .single-person:hover .person-image .icon {
background: none;
background-color: #fff;
color: #016cec;
}

.section-team .single-person .person-info .full-name {
margin-bottom: 10px;
font-size: 28px;
font-weight: 700;
}

.section-team .single-person .person-info .speciality {
text-transform: uppercase;
font-size: 14px;
color: #016cec;
}

.section-team .single-person:hover .full-name,
.section-team .single-person:hover .speciality {
color: #fff;
}

.team_socials {
height: 20px;
width: 20px;
}

.team_socials:hover {
height: 25px;
width: 25px;
transition: ease-in-out 0.2s;
}

/* EVENTS */
.container_card {
width: 90%;
max-width: 1260px;
margin: 0 auto;
}

.card_outer {
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 20px;
}

.card {
position: relative;
display: flex;
align-items: flex-end;
overflow: hidden;
padding: 1rem;
width: 100%;
min-height: 400px;
text-align: center;
color: #fff;
background-color: #fff;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
  0 2px 2px rgba(0, 0, 0, 0.1),
  0 4px 4px rgba(0, 0, 0, 0.1),
  0 8px 8px rgba(0, 0, 0, 0.1),
  0 16px 16px rgba(0, 0, 0, 0.1);
padding: 0;
margin: 0;
box-sizing: border-box;
--d: 700ms;
--e: cubic-bezier(0.19, 1, 0.22, 1);
font-family: 'Montserrat', sans-serif;
}

.card:before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 110%;
background-size: cover;
background-position: 0 0;
transition: transform calc(var(--d) * 1.5) var(--e);
pointer-events: none;
}

.card:after {
opacity: 0;
content: "";
display: block;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 200%;
pointer-events: none;
background-color: rgba(0, 0, 0, 0.5);
transform: translateY(-50%);
transition: transform calc(var(--d) * 2) var(--e);
}

.card:hover:after {
opacity: 1;
transition: opacity calc(var(--d) * 1.5) var(--e);
}

.card:nth-child(1):before {
background-image: url();
}

.card:nth-child(2):before {
background-image: url("images/dream quizzader.jpeg");
}

.card:nth-child(3):before {
background-image: url(https://picsum.photos/200/300.jpg);
}

.card:nth-child(4):before {
background-image: url(https://picsum.photos/200/300.jpg);

}

.card:nth-child(5):before {
background-image: url(https://picsum.photos/200/300.jpg);
}

.card:nth-child(6):before {
background-image: url(https://picsum.photos/200/300.jpg);
}

.content {
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 1rem;
transition: transform var(--d) var(--e);
z-index: 1;
}

.content>*+* {
margin-top: 1rem;
}

.title {
font-size: 25px;
font-weight: bold;
line-height: 35px;
color: white;
}

.copy {
font-size: 15px;
font-style: italic;
line-height: 25px;
}

.btn {
cursor: pointer;
margin-top: 1.5rem;
padding: 0.75rem 1.5rem;
font-size: 0.65rem;
font-weight: bold;
letter-spacing: 0.025rem;
text-transform: uppercase;
color: white;
background-color: black;
border: none;
}

.btn:hover {
background-color: #0d0d0d;
}

@media (hover: hover) and (min-width: 600px) {
.card:after {
  transform: translateY(0);
}

.content {
  transform: translateY(calc(100% - 4.5rem));
}

.content>*:not(.title) {
  opacity: 0;
  transform: translateY(1rem);
  transition: transform var(--d) var(--e), opacity var(--d) var(--e);
}

.card:hover,
.card:focus-within {
  align-items: center;
}

.card:hover:before,
.card:focus-within:before {
  transform: translateY(-4%);
}

.card:hover:after,
.card:focus-within:after {
  transform: translateY(-50%);
}

.card:hover .content,
.card:focus-within .content {
  transform: translateY(0);
}

.card:hover .content>*:not(.title),
.card:focus-within .content>*:not(.title) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: calc(var(--d) / 8);
}

.card:focus-within:before, .card:focus-within:after,
.card:focus-within .content,
.card:focus-within .content>*:not(.title) {
  transition-duration: 0s;
}
}

/* BLOGS */
.blog {
position: relative;
width: 22em;
height: 30em;
background: url(https://cache.desktopnexus.com/thumbseg/25/25727-bigthumbnail.jpg) no-repeat;
background-size: 22em 30em;
box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
margin: auto;
-webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
overflow: hidden;
display: inline-block;
}

.blog * {
position: relative;
z-index: 2;
}

.blog:hover .color-overlay {
background: rgba(74, 100, 114, 0.8);
}

.blog:hover .info {
bottom: -3em;
opacity: 1;
}

.blog, .color-overlay {
border-radius: 0.7em;
}

.color-overlay {
top: 0;
left: 0;
right: 0;
bottom: 0;
position: absolute;
transition: 0.7s background;
background: rgba(74, 100, 114, 0.3);
z-index: 1;
}

.title-box {
display: inline-block;
width: 100%;
text-align: center;
margin-top: 2em;
}

.title-box hr {
margin-top: -0.4em;
margin-bottom: 1em;
width: 5em;
height: 0.25em;
box-sizing: content-box;
border: none;
background: #D0BC57;
}

h3 {
display: inline-block;
font-weight: 500;
letter-spacing: 2px;
font-size: 1.4em;
text-align: center;
}

.intro {
width: 170px;
margin: 0 auto;
color: #fff;
font-family: 'Droid Serif', serif;
font-size: 13px;
font-style: italic;
line-height: 18px;
}

.info {
font-family: 'Droid Serif', serif;
font-size: 1.2em;
color: #ddd;
line-height: 1.1em;
padding: 0 2em;
position: relative;
bottom: -4em;
opacity: 0;
background: transparent;
transition: opacity 0.3s, bottom 0.3s;
text-align: center;
}

.footer {
display: inline-block;
position: absolute;
bottom: 0;
width: 100%;
height: 10em;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
border-radius: 0 0 0.7em 0.7em;
}

.footer>.icon-holder {
position: absolute;
bottom: 0;
height: 3em;
width: 100%;
display: inline-block;
font-size: 1.2em;
padding: 0 2em;
}

.icon-holder i {
color: #D0BC57;
}

.icon-holder span, h3 {
color: #aCcff0;
}

space {
display: inline-block;
width: 0.6em;
height: 1em;
}

/* SPONSORS */
@keyframes scroll {
0% {
  transform: translateX(0);
}

100% {
  transform: translateX(calc(-250px * 7));
}
}

#sponsors {
background-color: black;
}

/* scroll bar */
* {
scrollbar-width: none;
scrollbar-color: rgba(0, 0, 0, 0.4);
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
width: 15px;
}

*::-webkit-scrollbar-track {
background: rgba(0, 0, 0);
}

*::-webkit-scrollbar-thumb {
background-color: #ffffff;
border-radius: 13px;
border: 3.5px outset #000000;
}


/* DEVELOPER IMAGES */

.dev_img{
max-height: 140px;
max-width: 140px;
border-radius: 100%;
display: inline-block;
margin: 10px 20px;
}

.dev_img_r{
display: inline-block;
position: relative;
left: 170px;
bottom: 160px;
}

.dev_social_shanu{
position: relative;
left: 80px;
bottom: 180px;
opacity: 0.7;
}

.dev_social_ruthvik{
position: relative;
left: 225px;
bottom: 180px;
opacity: 0.7;
}


h5{
text-align: center;
margin: 20px;
color: white;
}
