import React, { useState } from "react";
import './style.scss'



const Logo = () => <svg version="1.1"  x="0px" y="0px" viewBox="0 0 300 173.5"><g><g><g><path d="M73.3,94.9c-3.8-16.4-27.2-38.4-36.9-53c-7.8-12-1.5-29.9,9.5-29.3c8.9,0.4,10.1,16.2,11.4,31c0.2,1.3,2.1,1.3,2.3,0 c1.7-10.3,4.4-23.2,5.3-31.4C65,9.5,63.6,7,61,5.7c-7.4-3.6-17.3-3.2-17.3-3.2c0-0.2-36.3-1.7-31.8,34.6c0,0,2.1,16.2,17.9,31.7 c14.3,14.1,20.9,24.9,22.3,28c2.5,5.5,3,29.3-14.8,28c-13.5-1.1-20.7-28.3-16.4-42.2c0.2-0.8-0.4-1.7-1.3-1.5 c-6.5,0.4-11.8,4-15.6,10.7c-1.7,3-2.1,6.1-1.9,9.3c2.1,32.3,33.5,32.9,33.5,32.9C74.7,136.3,75.8,105.7,73.3,94.9z M61.9,11.2 c0,0,0.6,2.7-1.3,2.7c0,0-1.3-0.2-1.5-2.7c-0.2-2.3-2.7-3.6-2.7-3.6S61.7,8,61.9,11.2z"></path><path d="M100.9,85.9c1.1-22.8,1.3-32.9,1.3-36.5c0-4.2-8.8-4.9-11.6-4.9c-1.3,0-9.1,0.4-9.1,2.3c0.4,4.2,1.3,24.9,1.5,38.6 c0,13.5-2.3,41.4-2.7,47.5c0,0.8,0.4,1.5,1.1,1.5c2.1,0.4,7,1.5,11.6,1.5c1.5,0,8.9-0.4,8.9-2.7 C101.3,129.5,99.6,112.8,100.9,85.9z M99.4,52.1c0,0-0.4,1.9-1.9,0.4c-0.6-0.6-1-1.7-1.5-2.7c-0.4-0.9-1.3-1.9-2.3-2.3 C93.7,47.5,100,47.7,99.4,52.1z"></path><path d="M163.5,81.6c1.9-9.7,1.5-16.9-0.4-23c-4.6-14.8-18-12.9-18-12.9c-7,0.4-11.6,9.3-14.3,17.1c1.3-28.5,3-41.1,3.6-45.5 c0-0.6-0.2-1.1-0.4-1.5c-2.9-6.1-15.6-6.3-25.5-4.6c-0.8,0.2-1.5,0.8-1.3,1.5c2.3,6.7,3,28.7,4.2,68.8c0,0,1.1,38.4,1.3,48.7 c0,0.6,0.4,1.3,0.8,1.5c4.4,2.1,10.5,3.8,15.2,2.5c0.6-0.2,0.8-0.8,0.8-1.3v-14.8c3.6,8.2,9.5,16.4,18.1,16 c12.9-0.6,13.9-13.5,13.7-19c0-0.8-1.1-1.1-1.5-0.4c-1.7,2.3-5.3,5.5-12.2,4.2c-6.8-1.3-12.4-8.6-15.8-13.9 C160.6,105.3,163.5,81.8,163.5,81.6z M129.2,20c-0.6-0.6-1.1-1.7-1.5-2.5c-0.6-1-1.3-2.1-2.3-2.3c0,0,6.3,0,5.7,4.4 C131.1,19.6,130.8,21.3,129.2,20z M146.2,69c0,0-1.1,25.1-16.4,26.8c0-2.5,0.2-5.5,0.2-8.4c1.9-8.8,7.2-31.2,13.7-31.8h0.2 C144.1,55.5,147.3,55.7,146.2,69z M154,53.4c-0.4-1.3-1.1-3-1.9-3.4c0,0,1.9,0.4,3.2,1.5c1.5,1.3,2.7,3.4,1.5,4.2 C155.3,56.5,154.7,55.3,154,53.4z"></path><path d="M225.5,131c-1.9-5.9-1.3-30.8-1.3-30.8c2.3-35.2-4.8-55.1-17.5-54.4c-7,0.4-11.6,9.3-14.3,17.1 c1.3-28.5,2.7-41.1,3.4-45.5c0-0.6,0-1.1-0.4-1.5c-4.6-4.6-15.4-6.3-25.3-4.6c-0.9,0.2-1.5,0.8-1.3,1.5c2.3,6.7,3,28.7,4.2,68.8 c0,0,1.1,38.4,1.3,48.7c0,0.6,0.4,1.3,0.9,1.5c4.4,2.1,10.5,3.8,15.2,2.5c0.6-0.2,1-0.8,0.8-1.3c0-5.5-0.2-20.9,0.4-45.6 c1.7-8.8,7.2-31.2,13.7-31.8c0.4,0,3.6,0.2,2.5,13.5c-1.1,14.6-3.8,51.9-2.3,62.9c0,1.5,1.3,2.5,2.7,3c8.4,2.3,14.5-0.8,16.9-2.1 C225.5,132.5,225.8,131.6,225.5,131z M190.7,20c-0.6-0.6-0.8-1.7-1.5-2.5c-0.6-0.8-1.1-2.1-2.3-2.3c0,0,6.5,0,5.9,4.4 C192.8,19.6,192.4,21.3,190.7,20z M214.8,55.3c-1.5,1-1.9-0.4-2.7-2.1c-0.6-1.3-1.3-2.7-2.1-3.2c0,0,1.9,0,3.4,1.1 C214.6,52.1,216.1,54.4,214.8,55.3z"></path><path d="M277.6,34.8c-0.4-0.8-9.9-7.2-11.2-7.8l-0.2-0.2c-0.4-0.2-1-0.2-1.5-0.2c-0.4,0-0.9,0-1.3,0.2c-0.2,0-0.4,0.2-0.4,0.2 c-1.7,0.6-3.8,2.3-6.3,3.6c-1.3,0.6-2.3,1.3-3.4,1.9c-0.8,0.6-1.7,1.1-2.1,1.3l-0.6,1.3v0.8c0.2,0.6,0.4,1,0.4,1 c0.4,0.4,0.8,0.6,1.5,0.9c0.2,0.2,0.6,0.2,0.8,0.2h1.3c2.9,0,7.8-2.1,9.9-4c2.5,2.1,6.5,4.4,9.7,4.8h1.1c0.4,0,0.6-0.2,1.1-0.2 c0.6-0.2,1-0.4,1.3-0.8c0,0,0.4-0.4,0.6-0.9v-1C278.3,35.4,277.8,35.4,277.6,34.8z M261.6,29.5c0,0,1.7-1.5,3.4-1.5 c1.3,0,2.6,1.1,2.9,1.4C267.4,29.4,264.3,28.8,261.6,29.5z M287.1,133.3c-3.2-9.3-0.6-62.4-0.6-62.4 c2.5-28.3-29.3-25.9-29.3-25.7c-19.4,1.3-22.8,23.4-23.2,28.7c0,0.8,0.2,1.9,0.8,2.5c3.2,3.2,9.1,5.1,15.8,4.9 c0.8-0.2,1.5-1.1,1.1-1.7c-0.6-1-1.3-2.3-1.3-3.8c-0.6-5.5,0-24.5,8.6-24.7c5.9-0.2,8.4,7.4,9.1,17.9c-0.6,4.4-2.7,10.8-9.5,16 c-10.1,7.8-24.9,17.3-23.6,35.5c0,0.2,1.5,15.8,17.7,13.5c5.7-0.9,9.5-4.6,12-8.9c0.2,4,0.8,5.5,0.8,5.5 c3.6,5.9,15.8,4.8,20.5,4.2C286.9,134.8,287.3,134,287.1,133.3z M266.2,100.8c-0.6,3.6-0.8,6.5-1,9.3c-1.7,8.9-5.7,12.2-8.7,12.2 c-1.9,0-3.6-1.5-4.2-3.8c-1.3-6.5,1.7-19.4,9.5-26.6c2.3-2.1,4.4-4.4,6.1-6.7C267.5,90.5,267.1,95.8,266.2,100.8z M278.5,56.3 c0,0-0.8,1.3-3.2-1c-0.6-0.6-0.6-1.5-1.1-2.1c-0.8-1.3-1.3-2.1-1.9-2.5c0,0,2.3,0.4,4,1.9C277.8,53.8,278.9,55.5,278.5,56.3z"></path></g><g><g><path d="M92.5,31c-2.2,0.2-4.5-0.1-6.6-0.6c-1.3-0.3-2.4-0.7-3.5-1.8c-0.6-0.6-0.8-1.9-0.4-2.7c0.4-0.9,1.4-1.6,2.1-1.8 c0.7-0.2,1.5-0.8,1.8-1.6c0.3-0.8,1.1-2.1,2.1-2.5c0.9-0.4,2-0.1,3,0.9c1.1,1.2,1.2,2.3,1.6,4c0.4,1.7,0.6,3.6,0.3,5.9 c-0.8-0.5-1.2-0.9-1.8-1.5c-0.5-0.6-1-1-2-1.9c0.9,1,1.3,1.6,1.8,2.1C91.2,30,91.7,30.4,92.5,31z"></path><path d="M92.7,32c0,2.2-0.5,4.5-1.2,6.5c-0.4,1.3-0.9,2.4-2.1,3.3c-0.7,0.6-1.9,0.6-2.8,0.2c-0.8-0.5-1.4-1.5-1.6-2.2 c-0.1-0.7-0.7-1.5-1.4-1.9c-0.8-0.4-2-1.2-2.3-2.3c-0.3-0.9,0.1-2,1.2-2.9c1.3-1,2.4-1,4.1-1.2c1.7-0.3,3.6-0.3,5.9,0.3 c-0.5,0.8-1,1.1-1.6,1.6c-0.6,0.4-1,0.9-2.1,1.8c1.1-0.8,1.7-1.2,2.3-1.6C91.6,33.1,92.1,32.6,92.7,32z"></path><path d="M93.7,31.6c2.2,0.1,4.5,0.8,6.5,1.6c1.2,0.5,2.3,1,3.2,2.3c0.5,0.7,0.5,2,0,2.8c-0.5,0.8-1.6,1.4-2.3,1.4 c-0.8,0.1-1.6,0.6-2,1.3c-0.5,0.8-1.4,1.9-2.5,2.2c-1,0.2-2-0.2-2.8-1.3c-0.9-1.4-0.9-2.5-1-4.2c-0.1-1.7-0.1-3.6,0.6-5.9 c0.7,0.6,1.1,1.1,1.5,1.7c0.4,0.6,0.8,1.1,1.7,2.2c-0.7-1.2-1.1-1.7-1.5-2.4C94.8,32.8,94.3,32.3,93.7,31.6z"></path><path d="M93.4,30.7c-0.1-2.2,0.4-4.5,1-6.6c0.4-1.3,0.8-2.4,2-3.4c0.7-0.6,1.9-0.7,2.8-0.3c0.9,0.4,1.5,1.5,1.7,2.2 c0.2,0.7,0.7,1.5,1.5,1.9c0.8,0.4,2,1.2,2.4,2.3c0.3,0.9,0,2.1-1.1,2.9c-1.3,1-2.4,1.1-4.1,1.4c-1.7,0.3-3.6,0.4-5.9-0.1 c0.5-0.8,0.9-1.2,1.6-1.7c0.6-0.5,1-0.9,2-1.9c-1.1,0.8-1.6,1.3-2.2,1.7C94.4,29.5,94,30,93.4,30.7z"></path></g></g></g><g><g><path d="M2.4,169.7v-12.9h5.4c0.6,0,1.1,0.1,1.6,0.4c0.5,0.2,0.9,0.6,1.3,1c0.4,0.4,0.6,0.8,0.8,1.3c0.2,0.5,0.3,1,0.3,1.5 c0,0.5-0.1,1.1-0.3,1.6c-0.2,0.5-0.4,0.9-0.8,1.3c-0.3,0.4-0.7,0.7-1.2,0.9c-0.5,0.2-1,0.4-1.6,0.4H4.4v4.5H2.4z M4.4,163.5h3.4 c0.3,0,0.6-0.1,0.8-0.2c0.2-0.1,0.4-0.3,0.6-0.5c0.2-0.2,0.3-0.5,0.4-0.8c0.1-0.3,0.1-0.6,0.1-1c0-0.4-0.1-0.7-0.2-1 c-0.1-0.3-0.3-0.5-0.5-0.8c-0.2-0.2-0.4-0.4-0.7-0.5c-0.2-0.1-0.5-0.2-0.8-0.2H4.4V163.5z"></path><path d="M17.3,169.7v-12.9h5.6c0.6,0,1.1,0.1,1.6,0.4c0.5,0.2,0.9,0.6,1.3,1c0.4,0.4,0.6,0.8,0.8,1.3c0.2,0.5,0.3,1,0.3,1.5 c0,0.4-0.1,0.9-0.2,1.2c-0.1,0.4-0.3,0.8-0.5,1.1c-0.2,0.3-0.5,0.6-0.8,0.9c-0.3,0.2-0.7,0.4-1,0.6l3,4.9h-2.3l-2.8-4.5h-3v4.5 H17.3z M19.3,163.5h3.6c0.3,0,0.6-0.1,0.8-0.2s0.4-0.3,0.6-0.5c0.2-0.2,0.3-0.5,0.4-0.8c0.1-0.3,0.1-0.6,0.1-0.9 c0-0.3-0.1-0.6-0.2-0.9c-0.1-0.3-0.3-0.5-0.5-0.8c-0.2-0.2-0.4-0.4-0.7-0.5c-0.2-0.1-0.5-0.2-0.8-0.2h-3.4V163.5z"></path><path d="M38.2,169.8c-0.9,0-1.8-0.2-2.5-0.6c-0.8-0.4-1.4-0.9-1.9-1.5c-0.5-0.6-1-1.3-1.3-2.1c-0.3-0.8-0.4-1.6-0.4-2.4 c0-0.9,0.2-1.7,0.5-2.5c0.3-0.8,0.7-1.5,1.3-2.1c0.5-0.6,1.2-1.1,2-1.4c0.8-0.4,1.6-0.5,2.5-0.5c0.9,0,1.8,0.2,2.5,0.6 c0.8,0.4,1.4,0.9,1.9,1.5c0.5,0.6,1,1.3,1.3,2.1c0.3,0.8,0.4,1.6,0.4,2.4c0,0.9-0.2,1.7-0.5,2.5c-0.3,0.8-0.7,1.5-1.3,2.1 c-0.6,0.6-1.2,1.1-2,1.4C39.9,169.6,39.1,169.8,38.2,169.8z M34.1,163.3c0,0.6,0.1,1.2,0.3,1.8c0.2,0.6,0.5,1.1,0.8,1.5 c0.4,0.4,0.8,0.8,1.3,1c0.5,0.3,1.1,0.4,1.7,0.4c0.7,0,1.2-0.1,1.7-0.4c0.5-0.3,0.9-0.6,1.3-1.1c0.4-0.4,0.6-0.9,0.8-1.5 c0.2-0.6,0.3-1.1,0.3-1.7c0-0.6-0.1-1.2-0.3-1.8c-0.2-0.6-0.5-1.1-0.8-1.5c-0.4-0.4-0.8-0.8-1.3-1c-0.5-0.3-1.1-0.4-1.7-0.4 c-0.7,0-1.2,0.1-1.7,0.4c-0.5,0.3-0.9,0.6-1.3,1.1c-0.4,0.4-0.6,0.9-0.8,1.5C34.2,162.2,34.1,162.7,34.1,163.3z"></path><path d="M55.5,168c0.7,0,1.2-0.1,1.7-0.4c0.4-0.3,0.8-0.6,1.1-1c0.3-0.4,0.5-0.9,0.6-1.5c0.1-0.5,0.2-1.1,0.2-1.7v-6.5h2v6.5 c0,0.9-0.1,1.7-0.3,2.5c-0.2,0.8-0.5,1.5-1,2c-0.4,0.6-1,1-1.7,1.4c-0.7,0.3-1.6,0.5-2.5,0.5c-1,0-1.9-0.2-2.6-0.5 c-0.7-0.4-1.3-0.8-1.7-1.4c-0.4-0.6-0.7-1.3-0.9-2.1c-0.2-0.8-0.3-1.6-0.3-2.4v-6.5h2v6.5c0,0.6,0.1,1.2,0.2,1.7 c0.1,0.5,0.3,1,0.6,1.5c0.3,0.4,0.6,0.8,1.1,1C54.3,167.9,54.8,168,55.5,168z"></path><path d="M67.4,169.7v-12.9H72c1,0,1.9,0.2,2.7,0.5c0.8,0.3,1.4,0.8,2,1.4c0.5,0.6,0.9,1.3,1.2,2c0.3,0.8,0.4,1.6,0.4,2.5 c0,1-0.1,1.9-0.4,2.7c-0.3,0.8-0.7,1.5-1.3,2c-0.5,0.6-1.2,1-2,1.3c-0.8,0.3-1.6,0.5-2.6,0.5H67.4z M76.2,163.3 c0-0.7-0.1-1.3-0.3-1.9c-0.2-0.6-0.5-1.1-0.8-1.5c-0.4-0.4-0.8-0.7-1.3-1c-0.5-0.2-1.1-0.3-1.8-0.3h-2.5v9.3H72 c0.7,0,1.3-0.1,1.8-0.4c0.5-0.2,1-0.6,1.3-1c0.4-0.4,0.6-0.9,0.8-1.5C76.1,164.6,76.2,164,76.2,163.3z"></path><path d="M84,169.7v-12.9h2v11.1h6.9v1.8H84z"></path><path d="M96.9,156.9l3.6,6.4l3.6-6.4h2.2l-4.8,8.3v4.6h-2v-4.6l-4.8-8.2H96.9z"></path><path d="M129.8,169.7v-9.3l-3.8,7h-1.1l-3.8-7v9.3h-2v-12.9h2.2l4.3,7.9l4.3-7.9h2.2v12.9H129.8z"></path><path d="M142.2,156.9h1.8l5.1,12.9h-2.1l-1.4-3.5h-5l-1.3,3.5h-2.2L142.2,156.9z M145.1,164.7l-2.1-5.5l-2.1,5.5H145.1z"></path><path d="M154.2,169.7v-12.9h4.6c1,0,1.9,0.2,2.7,0.5c0.8,0.3,1.4,0.8,2,1.4c0.5,0.6,0.9,1.3,1.2,2c0.3,0.8,0.4,1.6,0.4,2.5 c0,1-0.1,1.9-0.4,2.7c-0.3,0.8-0.7,1.5-1.3,2c-0.5,0.6-1.2,1-2,1.3c-0.8,0.3-1.6,0.5-2.6,0.5H154.2z M163,163.3 c0-0.7-0.1-1.3-0.3-1.9c-0.2-0.6-0.5-1.1-0.8-1.5c-0.4-0.4-0.8-0.7-1.3-1c-0.5-0.2-1.1-0.3-1.8-0.3h-2.5v9.3h2.5 c0.7,0,1.3-0.1,1.8-0.4c0.5-0.2,1-0.6,1.3-1c0.4-0.4,0.6-0.9,0.8-1.5C162.9,164.6,163,164,163,163.3z"></path><path d="M179.6,167.9v1.8h-8.8v-12.9h8.7v1.8h-6.6v3.7h5.7v1.7h-5.7v3.9H179.6z"></path><path d="M193.5,169.7v-12.9h2v12.9H193.5z"></path><path d="M204,160.7v9.1h-2v-12.9h1.6l7.4,9.3v-9.3h2v12.8h-1.7L204,160.7z"></path><path d="M227.6,169.7v-12.9h2v12.9H227.6z"></path><path d="M245.6,158.7h-4.3v11.1h-2v-11.1H235v-1.8h10.6V158.7z"></path><path d="M253.5,156.9h1.8l5.1,12.9h-2.1l-1.4-3.5h-5l-1.3,3.5h-2.2L253.5,156.9z M256.4,164.7l-2.1-5.5l-2.1,5.5H256.4z"></path><path d="M265.5,169.7v-12.9h2v11.1h6.9v1.8H265.5z"></path><path d="M278.5,156.9l3.6,6.4l3.6-6.4h2.2l-4.8,8.3v4.6h-2v-4.6l-4.8-8.2H278.5z"></path></g></g><g><g><path d="M291.4,49c-1,0-1.9-0.2-2.7-0.5c-0.8-0.3-1.5-0.8-2.1-1.4c-0.6-0.6-1.1-1.3-1.4-2.1s-0.5-1.7-0.5-2.6 c0-0.9,0.2-1.8,0.5-2.6c0.3-0.8,0.8-1.5,1.4-2.1s1.3-1,2.1-1.4c0.8-0.3,1.7-0.5,2.7-0.5s1.9,0.2,2.7,0.5c0.8,0.3,1.5,0.8,2.2,1.4 c0.6,0.6,1.1,1.3,1.4,2.1c0.3,0.8,0.5,1.7,0.5,2.6c0,0.9-0.2,1.8-0.5,2.6s-0.8,1.5-1.4,2.1c-0.6,0.6-1.3,1-2.2,1.4 C293.3,48.8,292.3,49,291.4,49z M291.4,48.2c0.8,0,1.6-0.1,2.3-0.4s1.3-0.7,1.9-1.2c0.5-0.5,1-1.1,1.3-1.8 c0.3-0.7,0.5-1.5,0.5-2.3c0-0.8-0.1-1.6-0.4-2.3c-0.3-0.7-0.7-1.3-1.2-1.8c-0.5-0.5-1.2-0.9-1.9-1.2c-0.7-0.3-1.5-0.4-2.4-0.4 c-0.9,0-1.6,0.1-2.4,0.4c-0.7,0.3-1.3,0.7-1.9,1.2c-0.5,0.5-0.9,1.1-1.2,1.8c-0.3,0.7-0.4,1.4-0.4,2.3c0,0.8,0.1,1.6,0.4,2.3 c0.3,0.7,0.7,1.3,1.2,1.8c0.5,0.5,1.1,0.9,1.9,1.2C289.7,48,290.5,48.2,291.4,48.2z M288.5,38.4h3.5c0.4,0,0.7,0.1,1,0.2 c0.3,0.2,0.6,0.4,0.8,0.6c0.2,0.2,0.4,0.5,0.5,0.8c0.1,0.3,0.2,0.6,0.2,1c0,0.5-0.1,1-0.4,1.5c-0.3,0.4-0.7,0.7-1.2,0.9l1.9,3.1 h-1.6l-1.8-2.8h-1.5v2.8h-1.4V38.4z M291.9,42.4c0.4,0,0.7-0.1,0.9-0.4c0.2-0.2,0.3-0.6,0.3-1c0-0.4-0.1-0.8-0.4-1 c-0.2-0.2-0.5-0.4-0.9-0.4h-1.9v2.7H291.9z"></path></g></g></g></svg>



const menuObject = [
    {
        title : 'About Us',
        link:'#'
    },
    {
        title : 'Prodotti',
        link:'#'
    },
    {
        title : 'Sustainability',
        link:'#'
    },
    {
        title : 'Professionals',
        link:'#'
    },
    {
        title : 'Blog',
        link:'#'
    },
    {
        title : 'Catalog',
        link:'#'
    }
]

const ContactUsText = "Contacts"

const Navbar = () => {


    const [activeChange , setActiveChange] = useState(false)
    const handleScroll = () => {
        var x = document.documentElement.scrollTop
        
        if( x >= 700){
            setActiveChange(true)
        }else if(x < 700){
            setActiveChange(false)
        }
        
    }

    window.addEventListener("scroll", handleScroll);


    return(
        <nav className="navbar" >
            <ul className="navbar__menuItems" >
                {
                    menuObject.map(menu => 
                        <li>
                            <a className={activeChange && 'activeChange'} href={menu.link}>{menu.title}</a>
                        </li>
                    )
                }
            </ul>

            <div className={`${activeChange && 'activeChange'} navbar__logo`}>
                <Logo/>
            </div>

            <a className={`${activeChange && 'activeChange'} navbar__btn`} >
                {ContactUsText}
            </a>
            
        </nav>
    )
}

export default Navbar